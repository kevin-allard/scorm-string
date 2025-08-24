// File Path: netlify/functions/learnosity-init.js
// This is the final, definitive version that bypasses the broken Learnosity SDK.

// We only need Node's built-in crypto library.
const crypto = require('crypto');

// Helper function to generate the timestamp in the exact format Learnosity requires.
function getLearnosityTimestamp() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    return `${year}${month}${day}-${hours}${minutes}`;
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { item_reference } = JSON.parse(event.body);
        if (!item_reference) {
            return { 
                statusCode: 400, 
                body: JSON.stringify({ error: 'Item reference is required.' }) 
            };
        }

        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string.');
            throw new Error('Invalid credential type.');
        }

        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';
        
        // --- MANUAL SIGNING PROCESS ---

        // 1. Prepare the basic request data
        const user_id = '$ANONYMIZED_USER_ID';
        const session_id = crypto.randomUUID();
        const timestamp = getLearnosityTimestamp();

        const request = {
            user_id: user_id,
            session_id: session_id, 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline',
            activity_template_id: 'quick-check-activity',
            activity_id: 'quick-check-activity-instance-1'
        };

        // 2. Create the string that will be signed (the order is critical)
        const pre_hash_string = 
            consumerKey + 
            domain + 
            timestamp + 
            user_id + 
            session_id;

        // 3. Generate the HMAC-SHA256 signature using the consumer secret
        const hmac = crypto.createHmac('sha256', consumerSecret);
        hmac.update(pre_hash_string);
        const signature = hmac.digest('hex');

        // 4. Assemble the final, signed object to send to the browser
        const signedRequest = {
            ...request, // Include all the original request properties
            consumer_key: consumerKey,
            timestamp: timestamp,
            signature: signature
        };
        
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signedRequest)
        };

    } catch (error) {
        console.error('Error in Learnosity function:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not process Learnosity request.' })
        };
    }
};
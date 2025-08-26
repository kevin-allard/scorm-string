const crypto = require('crypto');

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
        const { activity_reference } = JSON.parse(event.body);
        if (!activity_reference) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Activity reference is required.' }) };
        }

        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string.');
            throw new Error('Invalid credential type.');
        }

        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'scorm-string.netlify.app';
        
        const user_id = '$ANONYMIZED_USER_ID';
        const session_id = crypto.randomUUID();
        const timestamp = getLearnosityTimestamp();

        const request = {
            user_id: user_id,
            session_id: session_id, 
            domain: domain,
            activity_template_id: activity_reference,
            rendering_type: 'inline',
            type: 'preview',
            name: 'Quick Check Preview',
            activity_id: `${activity_reference}-${session_id}`
        };

        const pre_hash_string = consumerKey + domain + timestamp + user_id;
        const hmac = crypto.createHmac('sha256', consumerSecret);
        hmac.update(pre_hash_string);
        const signature = hmac.digest('hex');

        const signedRequest = {
            ...request,
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
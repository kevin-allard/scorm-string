// File Path: netlify/functions/learnosity-init.js

const Learnosity = require('learnosity-sdk-nodejs');

exports.handler = async (event) => {
    // Security check: only allow POST requests from your application
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // 1. PARSE THE INCOMING REQUEST
        // The 'item_reference' can be a string OR an object {id, organisation_id}
        const { item_reference } = JSON.parse(event.body);
        if (!item_reference) {
            return { 
                statusCode: 400, 
                body: JSON.stringify({ error: 'Item reference is required.' }) 
            };
        }

        // 2. GET SECRETS FROM NETLIFY'S ENVIRONMENT VARIABLES
        // These are set in the Netlify UI, not in your code.
        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        
        // 3. DETERMINE THE DOMAIN (LIVE VS. LOCAL)
        // This is critical for Learnosity's security
        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';

        // 4. PREPARE THE LEARNOSITY REQUEST OBJECT
        const learnositySdk = new Learnosity();
        const request = {
            user_id: '$ANONYMIZED_USER_ID', // In a real app, you would use a dynamic student ID
            session_id: Learnosity.utils.uuid(), // Generate a unique session ID for this attempt
            domain: domain,
            // The 'items' array works perfectly whether item_reference is a string or an object.
            items: [item_reference],
            rendering_type: 'inline'
        };

        // 5. SECURELY SIGN THE REQUEST
        const signedRequest = learnositySdk.init('items', {
            consumer_key: consumerKey,
            consumer_secret: consumerSecret
        }, request);

        // 6. SEND THE SIGNED REQUEST BACK TO THE PLAYER
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
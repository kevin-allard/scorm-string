// File Path: netlify/functions/learnosity-init.js
// This is a diagnostic script to find the exact domain name.

const { Learnosity } = require('learnosity-sdk-nodejs');

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
        
        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';

        // --- THIS IS THE NEW DIAGNOSTIC LINE ---
        console.log(`Domain being used for signing: ${domain}`);
        // -----------------------------------------

        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: learnositySdk.utils.uuid(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

        const signedRequest = learnositySdk.init('items', {
            consumer_key: consumerKey,
            consumer_secret: consumerSecret
        }, request);

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
// File Path: netlify/functions/learnosity-init.js
const Learnosity = require('learnosity-sdk-nodejs');
// Import Node's built-in module for generating UUIDs
const crypto = require('crypto');

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

        const learnositySdk = new Learnosity();
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // ** THE FINAL FIX: Use the guaranteed, built-in Node.js method **
            session_id: crypto.randomUUID(), 
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

// File Path: netlify/functions/learnosity-init.js
// This is the final, corrected version based on diagnostic logs.

// The entire module is the constructor function.
const Learnosity = require('learnosity-sdk-nodejs');
// Node's built-in crypto library is the most reliable way to generate a UUID.
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

        // 1. Create an instance of the Learnosity SDK. This is the correct pattern.
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // 2. Use the robust, built-in Node.js method for the session ID.
            session_id: crypto.randomUUID(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

        // 3. Call the .init() method on the instance.
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
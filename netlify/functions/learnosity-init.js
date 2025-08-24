// File Path: netlify/functions/learnosity-init.js
// This is the final, bulletproof version based on all combined diagnostic logs.

// The entire module is the constructor function, so we import it directly.
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
        
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string. Check Netlify environment variables.');
            throw new Error('Invalid credential type.');
        }

        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';
        
        // 1. Create an instance of the Learnosity SDK. This is the correct pattern.
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // 2. Use the robust, built-in Node.js method for the session ID, bypassing the buggy SDK utility.
            session_id: crypto.randomUUID(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

        // 3. Use the explicit 4-argument .init() call to prevent signing errors.
        // This is the most robust way to call the signing method.
        const signedRequest = learnositySdk.init(
            'items',
            { consumer_key: consumerKey, domain: domain }, // security packet
            consumerSecret,                               // secret
            request                                       // request object
        );

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
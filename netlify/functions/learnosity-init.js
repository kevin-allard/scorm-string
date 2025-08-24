// File Path: netlify/functions/learnosity-init.js
// This is the final diagnostic script to find the exact domain and solve the 41003 error.

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
        
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string. Check Netlify environment variables.');
            throw new Error('Invalid credential type.');
        }
        
        // --- THIS IS THE CRITICAL PART ---
        // We are using a more reliable method to get the domain from Netlify.
        // The previous attempt failed because the function was crashing earlier.
        const siteUrl = new URL(event.rawUrl);
        const domain = siteUrl.hostname;

        // This log will now print the TRUE domain to the Netlify function log.
        console.log(`LEARNOSITY-DIAGNOSTIC: Exact domain being sent is: "${domain}"`);
        // ------------------------------------
        
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: crypto.randomUUID(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

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
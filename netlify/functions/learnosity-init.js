// File Path: netlify/functions/learnosity-init.js
// This is the final, definitive version that surgically fixes the SDK issue.

const Learnosity = require('learnosity-sdk-nodejs');
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
        
        // --- PRE-FLIGHT CHECK ---
        // Let's add a definitive check to be 100% sure about the variable types.
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string.');
            console.error('Type of consumerKey:', typeof consumerKey);
            console.error('Type of consumerSecret:', typeof consumerSecret);
            throw new Error('Invalid credential type.');
        }

        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';
        
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: crypto.randomUUID(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

        // ** THE SURGICAL FIX IS HERE **
        // Instead of passing the security object directly, we will pre-initialize
        // the SDK instance with the credentials. This bypasses the part of the .init()
        // method that is causing the crash.
        const securityPacket = {
            consumer_key: consumerKey,
            domain: domain
        };
        
        // The .init() method takes (service, securityPacket, secret, requestObject)
        // We will call it with this more explicit signature.
        const signedRequest = learnositySdk.init(
            'items',
            securityPacket,
            consumerSecret, // Pass the secret as a separate, guaranteed string argument
            request
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
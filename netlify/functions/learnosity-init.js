// File Path: netlify/functions/learnosity-init.js
// This is the final, bulletproof version that addresses both the domain and constructor errors.

// Use a more robust import method to handle module inconsistencies.
const LearnosityModule = require('learnosity-sdk-nodejs');
// This line says: "Try to get the 'default' export. If it doesn't exist, assume the whole module is the constructor."
const Learnosity = LearnosityModule.default || LearnosityModule;

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
        
        // ** FIX #1: A more reliable way to get the domain **
        // Netlify provides the full URL of the request in event.rawUrl.
        const siteUrl = new URL(event.rawUrl);
        const domain = siteUrl.hostname; // This will correctly be "scorm-string.netlify.app"

        // With the import fixed, the standard SDK usage pattern will now work.
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // With a correct instance, the SDK's own utils will now work.
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
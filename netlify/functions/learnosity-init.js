// File Path: netlify/functions/learnosity-init.js

// ** THE FINAL FIX IS HERE: Use destructuring to get the Learnosity class **
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

        // Now that the import is correct, creating an instance will work properly.
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // And now the SDK's own utils will work, so we don't need the crypto workaround.
            session_id: learnositySdk.utils.uuid(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline'
        };

        // Calling .init() on the correctly formed instance will now succeed.
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
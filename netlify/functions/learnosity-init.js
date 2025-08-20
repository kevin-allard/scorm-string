// netlify/functions/learnosity-init.js

// You still need the Learnosity SDK in your package.json
// Make sure you have run: npm install learnosity-sdk-nodejs
const Learnosity = require('learnosity-sdk-nodejs');

exports.handler = async (event, context) => {
    // Security check: only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { item_reference } = JSON.parse(event.body);
        if (!item_reference) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Item reference is required.' }) };
        }

        const learnositySdk = new Learnosity();
        
        // IMPORTANT: Netlify uses environment variables for secrets
        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        const domain = 'localhost'; // In production, this would be your Netlify URL

        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: Learnosity.utils.uuid(),
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

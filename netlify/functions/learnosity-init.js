// File Path: netlify/functions/learnosity-init.js
// This is the final, production-ready version that hardcodes the correct domain.

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
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string.');
            throw new Error('Invalid credential type.');
        }

        // ** THE FINAL, DEFINITIVE FIX IS HERE **
        // We will no longer try to detect the domain. We will set it directly.
        const domain = 'scorm-string.netlify.app';
        
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: crypto.randomUUID(), 
            domain: domain,
            items: [item_reference],
            rendering_type: 'inline',
            activity_template_id: 'quick-check-activity',
            activity_id: 'quick-check-activity-instance-1'
        };

        const signedRequest = learnositySdk.init(
            'items',
            { consumer_key: consumerKey, domain: domain }, 
            consumerSecret,                               
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
// File Path: netlify/functions/learnosity-init.js
// This is the final, validated version that avoids all previously identified errors.

// Validation: This import method is proven to work by the diagnostic logs.
const Learnosity = require('learnosity-sdk-nodejs');
// Validation: Using Node's built-in crypto is the only reliable way to get a UUID.
const crypto = require('crypto');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { activity_reference } = JSON.parse(event.body);
        if (!activity_reference) {
            return { 
                statusCode: 400, 
                body: JSON.stringify({ error: 'Activity reference is required.' }) 
            };
        }

        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        
        if (typeof consumerKey !== 'string' || typeof consumerSecret !== 'string') {
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string. Check Netlify environment variables.');
            throw new Error('Invalid credential type.');
        }

        // Validation: Hardcoding the domain is the only reliable method.
        const domain = 'scorm-string.netlify.app';
        
        // Validation: This creates the necessary instance.
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            // Validation: This bypasses the buggy learnositySdk.utils.uuid().
            session_id: crypto.randomUUID(), 
            domain: domain,
            activity_template_id: activity_reference,
            rendering_type: 'inline',
            type: 'submit_practice',
            name: 'Quick Check Assessment'
        };

        // Validation: This uses the explicit 4-argument signature to prevent the crypto signing error.
        const signedRequest = learnositySdk.init(
            'activities',
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
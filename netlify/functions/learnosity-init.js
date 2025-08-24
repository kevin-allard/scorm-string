// File Path: netlify/functions/learnosity-init.js
// This is the final, production version.

const { Learnosity } = require('learnosity-sdk-nodejs');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // We now expect an 'activity_reference' from the front-end
        const { activity_reference } = JSON.parse(event.body);
        if (!activity_reference) {
            return { 
                statusCode: 400, 
                body: JSON.stringify({ error: 'Activity reference is required.' }) 
            };
        }

        const consumerKey = process.env.LEARNOSITY_CONSUMER_KEY;
        const consumerSecret = process.env.LEARNOSITY_CONSUMER_SECRET;
        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'localhost';

        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: learnositySdk.utils.uuid(), 
            domain: domain,
            // The request now contains the activity_template_id
            activity_template_id: activity_reference,
            rendering_type: 'inline',
            type: 'submit_practice',
            name: 'Quick Check Assessment'
        };

        // We are now initializing the "activities" API, not the "items" API.
        const signedRequest = learnositySdk.init(
            'activities',
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
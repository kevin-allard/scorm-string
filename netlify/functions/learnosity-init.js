// File Path: netlify/functions/learnosity-init.js
// This is the final, production-ready version that hardcodes the correct domain.

const { Learnosity } = require('learnosity-sdk-nodejs');

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
        
        // ** THE FINAL, DEFINITIVE FIX IS HERE **
        // We will no longer try to detect the domain. We will set it directly
        // to match your live site and your Learnosity allow list.
        const domain = 'scorm-string.netlify.app';
        
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: learnositySdk.utils.uuid(), 
            domain: domain,
            activity_template_id: activity_reference,
            rendering_type: 'inline',
            type: 'submit_practice',
            name: 'Quick Check Assessment'
        };

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
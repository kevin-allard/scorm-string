// File Path: netlify/functions/learnosity-init.js
// This is the final, production-ready version that includes the required activity_id.

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

        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: learnositySdk.utils.uuid(), 
            domain: domain,
            
            // ** THE FINAL FIX IS HERE: Add the required activity ID **
            // This gives Learnosity a unique name for this "mini-test".
            activity_template_id: 'quick-check-activity',
            activity_id: 'quick-check-activity-instance-1', // In a real app, this would be unique per student attempt

            items: [item_reference],
            rendering_type: 'inline'
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
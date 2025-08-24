// File Path: netlify/functions/learnosity-init.js
// This version adds the required 'activity_id' parameter.

const Learnosity = require('learnosity-sdk-nodejs');
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
            console.error('CRITICAL ERROR: Consumer Key or Secret is not a string.');
            throw new Error('Invalid credential type.');
        }

        const headers = event.headers;
        const domain = headers['x-forwarded-host'] || 'scorm-string.netlify.app';
        
        const learnositySdk = new Learnosity();
        
        const request = {
            user_id: '$ANONYMIZED_USER_ID',
            session_id: crypto.randomUUID(), 
            domain: domain,
            activity_template_id: activity_reference,
            
            // This is the required parameter that was missing.
            activity_id: `${activity_reference}-instance-1`, 
            
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
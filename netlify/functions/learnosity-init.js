// File Path: netlify/functions/learnosity-init.js
// THIS IS A DIAGNOSTIC SCRIPT

const LearnositySdkModule = require('learnosity-sdk-nodejs');

exports.handler = async (event) => {
    
    // THE ONLY PURPOSE of this function is to log the structure of the imported module.
    console.log("--- DIAGNOSING LEARNOSITY SDK MODULE ---");
    console.log("Type of imported module:", typeof LearnositySdkModule);
    console.log("Keys available on the module:", Object.keys(LearnositySdkModule));
    console.log("Full module structure:", JSON.stringify(LearnositySdkModule, null, 2));
    console.log("--- END OF DIAGNOSIS ---");

    // We will return an error intentionally so we can see the log.
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: 'This is a diagnostic run. Please check the function logs on Netlify.'
        })
    };
};
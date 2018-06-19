const twilio = require('twilio');
const twilio_creds = require('./private/twilio_credentials');
// ------- TODO: Eventually move to twilio_credentials.js file and require here
// const accountSid = 'ACaeffcb29318a7f491d365efdf66b838f';
// const authToken = 'e751f11352079012a70b0fb02e70fff9';
// -------------------

module.exports = new twilio.Twilio(twilio_creds.accountSid, twilio_creds.authToken);

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestPasswordManager = require('./request_password_manager');
const serviceAccount = require('./private/service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://password-manager-11d5c.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestPasswordManager = functions.https.onRequest(requestPasswordManager);

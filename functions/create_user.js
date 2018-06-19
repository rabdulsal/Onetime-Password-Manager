
const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
  // Format phone number to remove dashes and parens using regex
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  // Create new user account using phone number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(error => res.status(422).send({ error }));
  // Respond to user request
}

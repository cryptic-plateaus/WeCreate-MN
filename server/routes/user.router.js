const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const orgWebsite = req.body.orgWebsite;
  const nameOfContact = req.body.nameOfContact;
  const emailOfContact = req.body.emailOfContact;
  const industry = req.body.industry;
  const orgSize = req.body.orgSize;

  const queryText = `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id;
  INSERT INTO "organization_profile"("user_id", "org_name", "org_website", "org_contact_name", 
  "org_contact_email", "org_industry", "org_size") VALUES (id, $3, $4, $5, $6, $7, $8, $9);`;
  pool.query(queryText, [username, password, username, orgWebsite, nameOfContact,emailOfContact,
  industry, orgSize])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

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
router.post("/", async (req, res) => {
  
  //DEFINE DATA TO BE SENT VIA POST ROUTE
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const orgWebsite = req.body.orgWebsite;
  const nameOfContact = req.body.nameOfContact;
  const emailOfContact = req.body.emailOfContact;
  const industry = req.body.industry;
  const orgSize = req.body.orgSize;
  console.log(`Creating new account '${username}'`);
  
  const connection = await pool.connect();
  try {
      await connection.query("BEGIN");
      const sqlAddNewUser = `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id;`;
      // Save the result so we can get the returned value
      const result = await connection.query(sqlAddNewUser, [username], [password]);
      // Get the id from the result to be used in next query line
      const userId = result.rows[0].id;
      const sqlAddNewOrgProfile = `INSERT INTO "organization_profile"("user_id", "org_name", "org_website", "org_contact_name", 
    "org_contact_email", "org_industry", "org_size") VALUES ($1, $2, $3, $4, $5, $6);`;
      await connection.query(sqlAddNewOrgProfile, [
        userId,
        orgWebsite,
        nameOfContact,
        emailOfContact,
        industry,
        orgSize,
      ]);  
      await connection.query("COMMIT");
      res.sendStatus(200);
  } catch (error) {
      await connection.query("ROLLBACK");
      console.log(`Transaction Error - Rolling back new user`, error);
      res.sendStatus(500);
  } finally {
      connection.release();
  }
});



// router.post('/register', (req, res, next) => {  
//   const username = req.body.username;
//   const password = encryptLib.encryptPassword(req.body.password);
//   const orgWebsite = req.body.orgWebsite;
//   const nameOfContact = req.body.nameOfContact;
//   const emailOfContact = req.body.emailOfContact;
//   const industry = req.body.industry;
//   const orgSize = req.body.orgSize;

//   const queryText = `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id;`;
//   // `INSERT INTO "organization_profile"("user_id", "org_name", "org_website", "org_contact_name", 
//   // "org_contact_email", "org_industry", "org_size") VALUES (id, $3, $4, $5, $6, $7, $8, $9);`;
//   pool.query(queryText, [username, password]) 
//   //   username, orgWebsite, nameOfContact,emailOfContact,
//   // industry, orgSize])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

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

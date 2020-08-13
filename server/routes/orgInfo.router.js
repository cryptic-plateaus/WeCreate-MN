const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const queryText = `SELECT * FROM "organization_profile" WHERE "user_id" = ${id};`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /orgInfo GET");
      console.log("id:", id);
      console.log("results:", result.rows);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  const orgName = req.body.orgName;
  const orgWebsite = req.body.orgWebsite;
  const nameOfContact = req.body.nameOfContact;
  const emailOfContact = req.body.emailOfContact;
  const industry = req.body.industry;
  const orgSize = req.body.orgSize;
  const id = req.body.userID;

  console.log("req.body is", req.body);
  const queryText = `UPDATE "organization_profile" 
    SET "org_name"=$1, 
    "org_website"=$2, 
    "org_contact_name"=$3, 
    "org_contact_email"=$4, 
    "org_industry"=$5, 
    "org_size"=$6 
    WHERE "user_id"=$7;`;
  pool.query(queryText, 
    [orgName, 
    orgWebsite, 
    nameOfContact, 
    emailOfContact, 
    industry,
    orgSize,
    id])
    .then((result) => {
      console.log("in /api/orgInfo PUT");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Put error:`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

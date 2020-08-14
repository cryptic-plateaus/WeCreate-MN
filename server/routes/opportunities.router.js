const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//Getting all opportunities in database for Job Board
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM opportunity_post ORDER BY id DESC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /opportunities GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//Getting specific user's opportunities they've already posted to system
router.get("/user_opps/:id", (req, res) => {
  const id = req.params.id; //Employer ID
  const queryText = `SELECT * FROM "opportunity_post" WHERE "org_id" = ${id};`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /opportunities/user_opps/ GET");
      console.log("id:", id);
      console.log("results:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//Posting new opportunity from specific user
router.post("/", (req, res, next) => {
  const orgID = req.body.orgID;
  const title = req.body.oppTitle;
  const date = req.body.closingDate;
  const type = req.body.oppType;
  const industry = req.body.industry;
  const level = req.body.expLevel;
  const compensation = req.body.compensation;
  const per = req.body.per;
  const details = req.body.oppDetails;
  const link = req.body.link;

  const queryText = `INSERT INTO "opportunity_post" 
      ("org_id",
      "opp_title",
      "closing_date",
      "opp_type",
      "industry",
      "experience_level",
      "compensation",
      "compensation_per",
      "opp_details",
      "apply-link")
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`;
  pool
    .query(queryText, [
      orgID,
      title,
      date,
      type,
      industry,
      level,
      compensation,
      per,
      details,
      link,
    ])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log("Error POST /api/opportunities", error);
      res.sendStatus(500);
    });
});

// delete Nai's example
router.delete("/delete/:id", (req, res) => {
  let reqId = req.params.id;
  console.log("Delete request for id", reqId);
  let queryText = `DELETE FROM barrels WHERE id=$1`;
  pool
    .query(queryText, [reqId])
    .then((result) => {
      console.log("Item deleted");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

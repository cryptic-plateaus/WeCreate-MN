const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

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

module.exports = router;

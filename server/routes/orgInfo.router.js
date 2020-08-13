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



module.exports = router;

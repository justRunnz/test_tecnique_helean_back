const express = require("express");
const router = express.Router();

const {fetchData} = require("../controllers/DataController");

router.get("/", fetchData);

module.exports = router;

const express = require("express");
const router = express.Router();
const api = require('./api');

// router.get("/", (req, res) => {
//   res.send("index root");
//   res.render('./')
// });

router.use('/api', api)

module.exports = router;

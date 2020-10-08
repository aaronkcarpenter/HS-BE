const express = require('express');
const asyncHandler = require('express-async-handler');

const { Usertable } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
  const users = await Usertable.findAll();
  res.json({ users });
}));

module.exports = router;
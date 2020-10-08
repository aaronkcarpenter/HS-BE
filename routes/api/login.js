const express = require('express');
const asyncHandler = require('express-async-handler');

const { UserTable } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
  const users = await UserTable.findAll();
  res.json({ users });
}));

module.exports = router;
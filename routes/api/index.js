const express = require('express');
const router = express.Router();

const routes = ['users'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
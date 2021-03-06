const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('./guards/user');
const { getContentful } = require('./routes/preview.routes');

router.get('/contentful/spaces/:spaceId/entries/:entryId/', isLoggedIn, getContentful);

module.exports = router;

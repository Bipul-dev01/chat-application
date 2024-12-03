//external imports
const express = require('express');

//internal login
const { getInbox } = require("../controller/inboxController");
const decorateHtmlresponse = require("../middlewares/common/decorateHtmlResponse");


const router = express.Router();

//inbox page
router.get("/", decorateHtmlresponse("inbox"), getInbox);

module.exports = router;
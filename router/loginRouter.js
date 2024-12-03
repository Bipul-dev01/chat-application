//external imports
const express = require('express');

//internal login
const { getlogin } = require("../controller/loginController");
const decorateHtmlresponse = require("../middlewares/common/decorateHtmlResponse");


const router = express.Router();

//login page
router.get("/", decorateHtmlresponse("login"), getlogin);

module.exports = router;
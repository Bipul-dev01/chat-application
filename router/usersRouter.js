//external imports
const express = require('express');

//internal login
const { getUsers } = require("../controller/usersController");
const decorateHtmlresponse = require("../middlewares/common/decorateHtmlResponse");


const router = express.Router();

//login page
router.get("/", decorateHtmlresponse("users"), getUsers);

module.exports = router;
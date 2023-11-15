"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var auth_1 = require("../controllers/auth");
var login_validation_1 = require("../middleware/login-validation");
router.post('/login', login_validation_1.loginValidation, auth_1.loginUser);
exports["default"] = router;

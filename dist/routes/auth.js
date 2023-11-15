"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_1 = require("../controllers/auth");
const login_validation_1 = require("../middleware/login-validation");
router.post('/login', login_validation_1.loginValidation, auth_1.loginUser);
exports.default = router;

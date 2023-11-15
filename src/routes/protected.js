"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var verify_token_1 = require("../middleware/verify-token");
var protected_1 = require("../controllers/protected");
// sample route - just put the verify middleware before any route here for JWT validation.
router.get('/', verify_token_1.verify, protected_1.sampleController);
exports["default"] = router;

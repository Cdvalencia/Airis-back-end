"use strict";
exports.__esModule = true;
exports.verify = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var verify = function (req, res, next) {
    var auth = req.header('Authorization');
    if (!auth)
        return res.status(401).send('Access denied!!!');
    var token = auth.split(' ')[1];
    if (!token)
        return res.status(401).send('Access denied!!!');
    try {
        var verify_1 = jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
        req.user = verify_1;
        next();
    }
    catch (err) {
        return res.status(400).send('Invalid token!!!');
    }
};
exports.verify = verify;

"use strict";
exports.__esModule = true;
exports.notFound = void 0;
var notFound = function (_, res) { return res.status(404).send('Route does not exist!'); };
exports.notFound = notFound;

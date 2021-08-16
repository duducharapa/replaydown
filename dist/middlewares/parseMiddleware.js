"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseMiddleware = function (req, res, next) {
    try {
        var data = req.html
            .match(/(.*(?!\|))\n/g)
            .filter(function (slice) { return slice !== '|\n'; })
            .map(function (slice) { return slice.replace(/\n/g, ''); });
        req.data = data;
        next();
    }
    catch (e) {
        res.status(500).json({
            "error": "Match not found"
        });
    }
};
exports.default = parseMiddleware;

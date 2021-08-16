"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = require("../middlewares");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get("/:id", [middlewares_1.validateMiddleware, middlewares_1.parseMiddleware, controllers_1.playerController]);
exports.default = router;

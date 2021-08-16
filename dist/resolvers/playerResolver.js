"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __importDefault(require("../models/Player"));
var PLAYER_REGEXP = new RegExp(/^\|player\|p(1|2)\|(.*)\|(.*)$/);
var playerResolver = function (data) {
    var cleanData = data.map(function (line) {
        if (PLAYER_REGEXP.test(line)) {
            var matched = line.match(PLAYER_REGEXP);
            return new Player_1.default(matched[2]);
        }
        return undefined;
    }).filter(function (value) { return value; });
    var players = {
        p1: cleanData[0],
        p2: cleanData[1]
    };
    return players;
};
exports.default = playerResolver;

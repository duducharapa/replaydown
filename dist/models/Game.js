"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Object.defineProperty(Game.prototype, "p1", {
        get: function () {
            return this._p1;
        },
        set: function (value) {
            this._p1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "p2", {
        get: function () {
            return this._p2;
        },
        set: function (value) {
            this._p2 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
exports.default = Game;

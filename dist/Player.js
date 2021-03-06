"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name) {
        this._name = name;
        this._score = 0;
        this._team = [];
    }
    Object.defineProperty(Player.prototype, "score", {
        /*  GETTERS  */
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "team", {
        get: function () {
            return this._team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    /*  MÉTODOS  */
    Player.prototype.includePoke = function (pokemon) {
        this._team.push(pokemon);
    };
    Player.prototype.incrementScore = function () {
        this._score++;
    };
    Player.prototype.decrementScore = function () {
        this._score--;
    };
    return Player;
}());
exports.default = Player;

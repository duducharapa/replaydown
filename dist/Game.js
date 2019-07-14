"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    // Construtor
    function Game(logs, format) {
        this.EXP_REASON = /^\|-message\|/;
        this.EXP_TEAM = /^\|poke\|p.\|/;
        this.EXP_FAINT = /^\|faint\|p.{2}/;
        this._winner = '';
        this._winMode = '';
        this._logs = logs;
        this._format = format;
    }
    Object.defineProperty(Game.prototype, "winner", {
        // Getters
        get: function () {
            return this._winner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "winMode", {
        get: function () {
            return this._winMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: true,
        configurable: true
    });
    // Setters
    Game.prototype.setWinMode = function (p1, p2) {
        this._winMode = this.analyzeWinMode(p1, p2);
    };
    Game.prototype.analyzeWinMode = function (p1, p2) {
        var _this = this;
        var returnval = '';
        this._logs.map(function (log) {
            if (_this.EXP_REASON.test(log)) {
                if (log.indexOf('forfeit') !== -1) {
                    _this._winner = log.indexOf(p1.name) !== -1 ? p2.name : p1.name;
                    returnval = 'Forfeit';
                }
                else if (log.indexOf('inactivity') !== -1) {
                    _this._winner = log.indexOf(p1.name) !== -1 ? p2.name : p1.name;
                    returnval = 'Inactivity';
                }
                if (_this._winner === p1.name)
                    p2.score = 0;
                else
                    p1.score = 0;
            }
            if (_this._winner === '') {
                _this.setWinner(p1, p2);
                returnval = 'K.O';
            }
        });
        return returnval;
    };
    Game.prototype.setWinner = function (p1, p2) {
        this._winner = p1.score > p2.score ? p1.name : p2.name;
    };
    // Métodos
    Game.prototype.setTeams = function (p1, p2) {
        var _this = this;
        this._logs.map(function (log) {
            if (_this.EXP_TEAM.test(log)) {
                var splitedlog = log.split('|');
                if (splitedlog[2] === 'p1') {
                    var poke = splitedlog[3].split(',');
                    p1.includePoke(poke[0]);
                    p1.incrementScore();
                }
                else {
                    var poke = splitedlog[3].split(',');
                    p2.includePoke(poke[0]);
                    p2.incrementScore();
                }
            }
        });
    };
    Game.prototype.setScores = function (p1, p2) {
        var _this = this;
        this._logs.map(function (log) {
            if (_this.EXP_FAINT.test(log)) {
                var splitedlog = log.split(/\||:/);
                if (splitedlog[2].indexOf('p1'))
                    p1.decrementScore();
                else
                    p2.decrementScore();
            }
        });
    };
    Game.prototype.exportInfo = function (p1, p2) {
        return {
            "p1": p1.name, "p1team": p1.team, "p1score": p1.score,
            "p2": p2.name, "p2team": p2.team, "p2score": p2.score,
            "tier": this.format, "winner": this.winner, "winmode": this.winMode
        };
    };
    return Game;
}());
exports.default = Game;

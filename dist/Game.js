"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
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
        /*  GETTERS  */
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
    /*  SETTERS  */
    Game.prototype.setWinMode = function (p1, p2) {
        this._winMode = this.analyzeWinMode(p1, p2);
    };
    Game.prototype.setWinner = function (p1, p2) {
        this.analyzeWinMode(p1, p2);
    };
    /*  MÉTODOS  */
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
                _this._winner = p1.score > p2.score ? p1.name : p2.name;
                returnval = 'K.O';
            }
        });
        return returnval;
    };
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
        this.setTeams(p1, p2);
        this._logs.map(function (log) {
            if (_this.EXP_FAINT.test(log)) {
                var splitedlog = log.split(/\||:/);
                if (splitedlog[2].indexOf('p1'))
                    p1.decrementScore();
                else
                    p2.decrementScore();
            }
        });
        this.analyzeWinMode(p1, p2);
    };
    /*  MÉTODOS DE EXPORT */
    Game.prototype.exportInfo = function (p1, p2) {
        return {
            "p1": p1.name, "p1team": p1.team, "p1score": p1.score,
            "p2": p2.name, "p2team": p2.team, "p2score": p2.score,
            "tier": this.format, "winner": this.winner, "winmode": this.winMode
        };
    };
    Game.prototype.export = function (p1, p2, props) {
        var _this = this;
        var returnvar = {};
        props.map(function (prop) {
            switch (prop) {
                case 'teams':
                    returnvar["p1team"] = p1.team;
                    returnvar["p2team"] = p2.team;
                    break;
                case 'players':
                    returnvar["p1"] = p1.name;
                    returnvar["p2"] = p2.name;
                    break;
                case 'winner':
                    returnvar["winner"] = _this.winner;
                    break;
                case 'winmode':
                    returnvar["winmode"] = _this.winMode;
                    break;
                case 'format':
                    returnvar["format"] = _this.format;
                    break;
                case 'scores':
                    returnvar["p1score"] = p1.score;
                    returnvar["p2score"] = p2.score;
                    break;
            }
        });
        return returnvar;
    };
    return Game;
}());
exports.default = Game;

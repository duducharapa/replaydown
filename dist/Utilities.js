"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.prototype.constructUrl = function (replayid, outformat) {
        return Utilities.BASE_URL + replayid + '.' + outformat;
    };
    Utilities.BASE_URL = 'https://replay.pokemonshowdown.com/';
    return Utilities;
}());
exports.default = Utilities;

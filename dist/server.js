"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = parseInt(process.env.PORT) || 3000;
app.use('/', routes_1.default);
app.listen(PORT, function () {
    console.log("Servidor iniciado na porta " + PORT);
});

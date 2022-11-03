"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/algodon', (req, res) => res.send("Si se pudo guapo"));
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;

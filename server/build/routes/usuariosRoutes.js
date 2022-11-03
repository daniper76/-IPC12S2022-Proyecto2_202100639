"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosUsuarios = [
    {
        usuario: "FDPDL",
        password: "202100639"
    },
    {
        usuario: "IPC1F",
        password: "Prueba2"
    },
    {
        usuario: "IPC1F76",
        password: "Prueba3"
    }
];
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/all', (req, res) => {
            res.send(todosUsuarios);
        });
    }
}
const usuariosRouter = new UsuariosRoutes();
exports.default = usuariosRouter.router;

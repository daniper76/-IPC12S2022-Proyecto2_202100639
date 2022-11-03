import { Router } from "express";

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

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/all', (req, res) => {
            res.send(todosUsuarios);
        });
    }

}

const usuariosRouter = new UsuariosRoutes();
export default usuariosRouter.router;
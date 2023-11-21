import express, { Express } from "express"
import { contectarBaseDatos } from "../baseDatos/configBD";
import router from "../routes/usersRoutes";

export class Server {

    app: Express;

    constructor(){
        this.app = express();
        this.conectaBD();
        this.middlewares();
        this.routes();
    }

    async conectaBD(): Promise<void>{
        await contectarBaseDatos()
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use('/usersRoutes', router)
    }

    listen(): void {
        this.app.listen(8080, ()=>{
            console.log("Corriendo en el puerto 8080")
        })
    }
}
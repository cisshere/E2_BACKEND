import express, { Express } from "express"

import { contectarBaseDatos } from "../baseDatos/configBD";

export class Server {

    app: Express;

    constructor(){
        this.app = express();
        this.conectaBD();
    }

    async conectaBD(): Promise<void>{
        await contectarBaseDatos()
    }

    listen(): void {
        this.app.listen(8080, ()=>{
            console.log("Corriendo en el puerto 8080")
        })
    }
}
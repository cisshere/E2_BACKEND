import { Request, Response } from "express";

import Usuario, {IUsuario} from "../models/usuarioDatos";

export const getUsers = async (req: Request, res: Response) => {
    const condicion = { estado: true}

    const users = await Usuario.find(condicion)

    res.json({
        users
    })
}

export const createUser = async (req: Request, res: Response) => {
    const userData: IUsuario = req.body;

    const usuario = new Usuario(userData)

    await usuario.save()

    res.json({
        msj: "Todo ok",
        usuario
    })
}
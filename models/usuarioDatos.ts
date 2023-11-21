import { Model, model, Schema } from "mongoose";

export interface IUsuario {
    user: string;
    nombre: string;
    producto: string;
    precioProducto: number;
    estado: boolean;
}

const usuarioSchema =  new Schema<IUsuario>({
    user: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    precioProducto: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
})

const Usuario: Model<IUsuario> = model<IUsuario>("Usuario", usuarioSchema);

export default Usuario;
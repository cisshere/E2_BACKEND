import mongoose from "mongoose";

export const contectarBaseDatos = async():Promise<void> => {
try{
    await mongoose.connect("mongodb+srv://cisshere:Ma4WYWL3IL9ePwDy@integradornucba.kiir3px.mongodb.net/")
    console.log("base de datos on")
}catch(error){
    console.log(error)
    throw new Error("Error al iniciar base de datos")
}
}
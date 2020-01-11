import mongoDb from "mongoose";
import phoneModel from "./Schemas/phone";

const connectionString = "mongodb+srv://sa:39550017@cluster0-lo9ck.azure.mongodb.net/NodeCurso?retryWrites=true&w=majority";

export default class {

    public conectDb() {
        mongoDb.connect(connectionString, (error: any) => {
            if (error) { throw error; }
            return "conexion ok";
        });
    }

    public createPhone(input: any) {
        const phone = new phoneModel({
            Marca: input.marca,
            Modelo: input.modelo,
            Ram: input.ram,
            AndroidVersion: input.version,
        });

        phone.save( (error: any) => {
            if (error) {
                throw error;
            }
        });
    }
}

import mongoDb from 'mongoose';
import phoneModel from "./Schemas/phone";

const connectionString = 'mongodb+srv://sa:39550017@cluster0-lo9ck.azure.mongodb.net/NodeCurso?retryWrites=true&w=majority'

export default class {

    public conectDb() {
        mongoDb.connect(connectionString, (error) => {
            if(error) throw error;
            console.log('conexion ok');
        });
    }

    public createPhone(input){
        let _phone = new phoneModel({
            Marca: input.marca,
            Modelo: input.modelo,
            Ram: input.ram,
            AndroidVersion: input.version
        });
    
        _phone.save( (error) =>{
            if(error){
                throw error;
            }
        });
    }
}
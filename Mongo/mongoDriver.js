const mongoDb = require('mongoose');
const phoneModel = require('./Schemas/phone');

const connectionString = 'mongodb+srv://sa:39550017@cluster0-lo9ck.azure.mongodb.net/NodeCurso?retryWrites=true&w=majority'

exports.conectDb = function(){
    mongoDb.connect(connectionString, (error) => {
        if(error) throw error;
        console.log('conexion ok');
    });
}

exports.createPhone = function(input){
    let _phone = new phoneModel({
        Marca: input.marca,
        Modelo: input.modelo,
        Ram: input.ram,
        AndroidVersion: input.version
    });

    _phone.save( (error, phoneId) =>{
        if(error){
            throw error;
        }
    });
}
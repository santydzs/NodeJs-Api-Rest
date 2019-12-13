const mongoDb = require('mongoose');

const connectionString = 'mongodb+srv://sa:39550017@cluster0-lo9ck.azure.mongodb.net/test?retryWrites=true&w=majority'

exports.conectDb = function(){
    mongoDb.connect(connectionString, (error) => {
        if(error) throw error;
        console.log('conexion ok');
    });
}
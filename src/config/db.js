require('dotenv').config();
const mongosse = require('mongoose');
mongosse.set('strictQuery', false);
const dbConnection = async()=>{

    try{
       await mongosse.connect(process.env.MONGODB_URI);
       console.log('conexion exitosa');
    }catch(e){
        console.log('error de conexion');
    }

}

module.exports = {dbConnection}
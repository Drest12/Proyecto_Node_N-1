const mysql = require('mysql2');
const conexion =mysql.createConnection({
    host:'localhost',
    port: '3306',
    database:'sistemanotas',
    user:'root',
    password:'12345'
})
conexion.connect((error)=>{
    if(error){
        console.log('Error:'+error);
    }
    else{
        console.log('conexion exitosa');
    }
});

module.exports = conexion;

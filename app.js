const json = require('express');
const express = require('express');
const app = express();
app.use( express.static( "public" ) );
app.use( express.static( "css" ) );

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended:false
}));

app.use(express(json));

app.use('/', require('./router'));

puerto = 5000
app.listen(puerto, ()=>
{
    console.log('El servidor tiene habilitado el puerto: http://localhost:' + puerto);
})
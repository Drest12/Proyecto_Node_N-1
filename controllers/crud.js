const { createConnection } = require('mysql');
const conexion = require('../database/db');

/* ------------------ ALUMNOS : ANDRES --------------------- */

exports.savealumno = (req, res)=>{
    const id = req.body.id;
    const nom = req.body.nom;
    const ape = req.body.ape;
    const cor = req.body.cor;
    const tel = req.body.tel;

    conexion.query('insert into alumno set?',{IdAlumno:id, Nombres:nom,Apellidos:ape,Correo:cor,Telefono:tel},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/alumno');
        }
    });
}
exports.updatealumno = (req, res)=>{
    const id = req.body.id;
    const nom = req.body.nom;
    const ape = req.body.ape;
    const cor = req.body.cor;
    const tel = req.body.tel;
    conexion.query('update alumno  set? where IDAlumno = ?',[{Nombres:nom,Apellidos:ape,Correo:cor,Telefono:tel},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/alumno');
        }
    });
}

/* ---------------------------------------------------------- */

/* ------------------ AULAS : ALEXANTO ---------------------- */

exports.saveaula = (req, res)=>{
    const aula = req.body.aula;
    const nom = req.body.nom;
    const afo = req.body.afo;

    conexion.query('insert into aula set?',{IdAula:aula,Aula:nom,Aforo:afo},(error,results)=>{
        if(error){
            console.log('errosito' + error);
        }else{
            res.redirect('/aula');
        }
    });
}

exports.updateaula = (req, res)=>{
    const aula = req.body.aula;
    const nom = req.body.nom;
    const afo = req.body.afo;

    conexion.query('update aula set? where IdAula = ?',[{Aula:nom,aforo:afo},aula],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/aula');
        }
    });
}

/* ---------------------------------------------------------- */

/* ------------------ DOCENTE : BELLIDO ---------------------- */

exports.savedocente = (req,res)=>{
    const cod = req.body.cod;
    const nom = req.body.nom;
    const ape = req.body.ape;
    const correo = req.body.correo;
    const tel = req.body.tel;

    conexion.query('insert into docente set?',{IdDocente:cod,Nombres:nom,Apellidos:ape,Correo:correo,Telefono:tel},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/docente')//res.redirect('/views/docente')
        }
    });
}

exports.updatedocente = function (req,res){
    const cod = req.body.cod;
    const nom = req.body.nom;
    const ape = req.body.ape;
    const correo = req.body.correo;
    const tel = req.body.tel;

    console.log("holaholahola")

    conexion.query("update docente set Nombres='"+nom+"', Apellidos='"+ape+"', Correo='"+correo+"', Telefono='"+tel+"' where IdDocente='"+cod+"'",(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/docente')//res.redirect('/views/docente')
        }
    });
    

}

/* ---------------------------------------------------------- */

/* ------------------ CURSOS : MADY ---------------------- */

exports.savecurso = function (req, res)
{
    const id = req.body.id;
    const cur = req.body.cur;
    const cre = req.body.cre;
    const pre = req.body.pre;

    conexion.query('insert into curso set ?', {IdCurso:id,Curso:cur,Creditos:cre,PreRequisito:pre}, (error, results)=>
    {
        if (error) throw error;
        else
        {
            res.redirect('/curso');
        }
    })
}

exports.updatecurso = (req, res)=>
{
    const id = req.body.id;
    const cur = req.body.cur;
    const cre = req.body.cre;
    const pre = req.body.pre;

    conexion.query('update curso set ? where IdCurso = ?',[{Curso:cur,Creditos:cre,PreRequisito:pre},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/curso');
        }
    });
}

/* ---------------------------------------------------------- */

/* -------------------- NOTA : JHANNS ---------------------- */

exports.savenota = function (req, res)
{
    const idAlu = req.body.idAlu;
    const idCur = req.body.idCur;
    const idAul = req.body.idAul;
    const idDoc = req.body.idDoc;
    const pra = req.body.pra;
    const par = req.body.par;
    const fin = req.body.fin;

    conexion.query('insert into nota set ?', {IdAlumno:idAlu,IdCurso:idCur,IdAula:idAul,IdDocente:idDoc,Practicas:pra,Parcial:par,Final:fin}, (error, results)=>
    {
        if (error) throw error;
        else
        {
            res.redirect('/nota');
        }
    })
}

exports.updatenota = (req, res)=>
{
    console.log('entro aqui')
    const idAlu = req.body.idAlu;
    const idCur = req.body.idCur;
    const idAul = req.body.idAul;
    const idDoc = req.body.idDoc;
    const pra = req.body.pra;
    const par = req.body.par;
    const fin = req.body.fin;
    
    conexion.query('update nota set ? where IdAlumno = ? and IdCurso = ? and IdAula = ? and IdDocente = ?',
    [{Practicas:pra,Parcial:par,Final:fin},[idAlu],[idCur],[idAul],[idDoc]],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/nota');
        }
    });
}



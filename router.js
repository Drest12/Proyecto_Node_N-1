const conexion = require('./database/db');
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', (req,res)=>
{
    res.render('index');
})

/* ------------------ ALUMNOS : ANDRES --------------------- */

//ruta para ver alumno
router.get('/alumno',(req,res)=>{
    conexion.query('select * from alumno',(error, results)=>{
        if(error){
            throw error+'aea';
        }else{
            res.render('alumno',{results:results}); 
        }
    });
});

//ruta para registrar alumno
router.get('/alumnonew',(req,res)=>{
    res.render('alumnonew');
});

//ruta para guardar alumno
const crud = require('./controllers/crud.js');
router.post('/savealumno',crud.savealumno);
//ruta para actualizar alumno
router.post('/updatealumno',crud.updatealumno);

//router para modificar alumno
router.get('/alumnoedit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from alumno where IDAlumno=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('alumnoedit',{user:results[0]}); 
        }
    });
});
//router para eliminar cursos
router.get('/alumnodelete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from alumno where IDAlumno=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/alumno'); 
        }
    });
});

/* ---------------------------------------------------------- */

/* ------------------ AULAS : ALEXANTO ---------------------- */

//ruta para ver aulas
router.get('/aula',(req,res)=>{
    conexion.query('select * from aula',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('aula',{results:results}); 
        }
    });
});

//ruta para registrar aulas
router.get('/aulanew',(req,res)=>{
    res.render('aulanew');
});

//ruta para guardar aulas
router.post('/saveaula',crud.saveaula);

//ruta para actualizar aulas
router.post('/updateaula',crud.updateaula);

//router para modificar aulas
router.get('/aulaedit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from aula where IdAula = ?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('aulaedit',{user:results[0]}); 
        }
    });
});

//router para eliminar aulas
router.get('/auladelete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from aula where IdAula = ?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/aula'); 
        }
    });
});

/* ------------------------------------------------------- */

/* ------------------ DOCENTE : BELLIDO ---------------------- */

//ruta para los cursos
router.get('/docente',(req,res)=>{   //router.get('/views/docentes',(req,res)=>{
    conexion.query('select * from docente',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('docente',{results:results});
        }
    });
});

//ruta para registrar cursos
router.get('/docentenew',(req,res)=>{
    res.render('docentenew')
})

//ruta para guardar cursos
router.post('/savedocente',crud.savedocente)



router.get('/docenteedit/:id',(req,res)=>{ //router.get('/views/cursoedit',(req,res)=>{
    //console.log("asd")
    const id=req.params.id;
    //console.log(id)
    conexion.query('select * from docente where IdDocente=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            //console.log(results)
            res.render('docenteedit',{results:results[0]});
        }
    });
});

router.post('/docenteedit',crud.updatedocente)

router.get('/docentedel/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query('delete from docente where IdDocente=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            //conexion.query('select * from docente')
            //res.render('docente',{results:results});
            res.redirect('/docente');
        }
    });

});

/* ---------------------------------------------------------- */

/* ------------------ CURSOS : MADY ---------------------- */

router.get('/curso', (req, res) =>
{
    //console.log('xd');
    conexion.query('select * from curso', (error,results)=>
    {
        if(error) throw error;
        else 
        {
            //console.log(results);
            res.render('curso', {results:results});
        }
    });

    /*conexion.query('select * from curso',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('curso',{results:results});
        }
    });*/
    
});

router.get('/cursonew',(req,res)=>{
    res.render('cursonew')
})

router.post('/savecurso',crud.savecurso)

router.get('/cursoedit/:id', (req, res)=>
{
    const id = req.params.id;
    conexion.query('select * from curso where IdCurso = ?', [id], (error, results) =>
    {
        if (error) throw error;
        else
        {
            res.render('cursoedit', {results:results[0]})
        }
    })
})

router.post('/cursoedit',crud.updatecurso)

router.get('/cursodelete/:id',(req,res)=>{
    const id = req.params.id;
    //console.log('oeke')
    conexion.query('delete from curso where IdCurso = ?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/curso'); 
        }
    });
});

/* ---------------------------------------------------------- */

/* -------------------- NOTA : JHANNS ---------------------- */

router.get('/nota', (req,res) =>
{
    //console.log('nota')
    conexion.query('select * from nota', (error, results) =>
    {
        if (error)
        {
            throw error;
        }
        else
        {
            res.render('nota', {results:results})
        }
    });
});

router.get('/notanew',(req,res)=>{
    res.render('notanew')
})

router.post('/savenota',crud.savenota)

router.get('/notaedit/:idalu/:idcur/:idaul/:iddoc', (req, res)=>
{
    const idalu = req.params.idalu;
    const idcur = req.params.idcur;
    const idaul = req.params.idaul;
    const iddoc = req.params.iddoc;
    conexion.query('select * from nota where IdAlumno = ? and IdCurso = ? and IdAula = ? and IdDocente = ?', [[idalu],[idcur],[idaul],[iddoc]], (error, results) =>
    {
        if (error) throw error;
        else
        {
            //console.log(results);
            res.render('notaedit', {results:results[0]})
        }
    })
})

router.post('/notaedit',crud.updatenota)

router.get('/notadelete/:idalu/:idcur/:idaul/:iddoc',(req,res)=>
{
    const idalu = req.params.idalu;
    const idcur = req.params.idcur;
    const idaul = req.params.idaul;
    const iddoc = req.params.iddoc;
    conexion.query('delete from nota where IdAlumno = ? and IdCurso = ? and IdAula = ? and IdDocente = ?', [[idalu],[idcur],[idaul],[iddoc]],(error, results)=>{
        if(error)
        {
            throw error;
        }else{
            res.redirect('/nota'); 
        }
    });
});

module.exports = router;
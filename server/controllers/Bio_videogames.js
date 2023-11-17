var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Videogame = require('../models/Bio_videogames');

module.exports.DislayVideogamelist = async (req,res,next)=>{ //< Mark function as async
    try{
       const VideogameList = await Videogame.find(); //< Use of await keyword
       res.render('videogame/list', {
          title: 'Videogame List', 
          VideogameList: VideogameList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('videogame/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddVideogame = async (req,res,next)=>{
    try{
        res.render('videogame/add',
        {
            title:'Add Videogame'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('videogame/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessVideogame = async (req,res,next)=>{
    try{
        let newVideogame = Videogame({
            "Name":req.body.Name,
            "Publisher": req.body.Publisher,
            "Release": req.body.Release,
            "Price": req.body.Price
        });
        Videogame.create(newVideogame).then(() =>{
            res.redirect('/videogameslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('videogame/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditVideogame = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const videogameToEdit = await Videogame.findById(id);
    res.render('videogame/edit',
    {
        title:'Edit Videogame',
        Videogame:videogameToEdit
    })
}
catch(error){
    console.error(err);
    res.render('videogame/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditVideogame = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedVideogame = Videogame({
            "_id":id,
            "Name":req.body.Name,
            "Publisher": req.body.Publisher,
            "Release": req.body.Release,
            "Price": req.body.Price
        });
        Videogame.findByIdAndUpdate(id,updatedVideogame).then(()=>{
            res.redirect('/videogameslist')
        });
    }
    catch(error){
        console.error(err);
        res.render('videogame/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteVideogame = (req,res,next)=>{
    try{
        let id = req.params.id;
        Videogame.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/videogameslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('videogame/list',
        {
            error: 'Error on the server'
        });
    }
}
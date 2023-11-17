var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Videogame = require('../models/Bio_videogames');
let VideogameController = require('../controllers/Bio_videogames')
/* Get route for the Bio Videogames list */
// Read Operation
router.get('/', VideogameController.DislayVideogamelist);
/* Get route for Add videogame page --> Create */
router.get('/add', VideogameController.AddVideogame); 
/* Post route for Add videogame page --> Create */
router.post('/add', VideogameController.ProcessVideogame);
/* Get route for displaying the Edit videogame page --> Update */
router.get('/edit/:id', VideogameController.EditVideogame);
/* Post route for processing the Edit videogame page --> Update */
router.post('/edit/:id', VideogameController.ProcessEditVideogame);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', VideogameController.DeleteVideogame);
 module.exports = router;
let mongoose = require('mongoose');

// create a model class
let videogameModel = mongoose.Schema({
    Name:String,
    Publisher:String,
    Release:String,
    Price: Number
},
{
    collection:"Bio_videogames"
});
module.exports = mongoose.model('Videogame',videogameModel);

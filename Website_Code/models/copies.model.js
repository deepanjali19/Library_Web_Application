const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var copiesSchema = new Schema({
    
   
    number: {type:Number},


});

var Copies = mongoose.model('copies', copiesSchema);
module.exports = Copies;
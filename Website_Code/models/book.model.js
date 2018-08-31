const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    
    title: {type:String, trim: true, required: true},
    isbn: {type: Number, unique: true},
    year: {type:Number, required: true},
    publisher: {type:String, trim: true, required: true},
    description: {type:String, trim: true},
    language: {type:String, trim: true, required: true},
    noCopies: {type:Number, required: true},
    authorFirstName: {type:String, trim: true, required: true},
    authorLastName: {type:String, trim: true, required: true},
    coverArt: {type: String, trim: true, required: true},
    copies: [],
    reserve:[{type:Schema.Types.ObjectId,
        ref:'reserve'}],
    loan:[{
        type:Schema.Types.ObjectId,
        ref:'loan'
    }]
    
});

var Book = mongoose.model('book', bookSchema);
module.exports = Book;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = require('./book.model');
const user = require('./user.model');


var loanSchema = new Schema({
    
    loanOutDate: {type:Date,trim: true, required: true},
    //returnDate: {type:Date,trim: true, required: true},
    dueDate: {type:Date,trim: true, required: true},
    //status: {type:String, trim: true, required: true},
    user: {
        type:Schema.Types.ObjectId,
        ref:'user',
        required: true,
        trim: true
    },
    book: {
        type:Schema.Types.ObjectId,
        ref:'book',
        required: true,
        trim: true
    },
    bookCode: {type:Number, trim: true, required: true},
    renewed: {type:Number, trim: true, required: true}

});

var Loan = mongoose.model('loan', loanSchema);
module.exports = Loan;
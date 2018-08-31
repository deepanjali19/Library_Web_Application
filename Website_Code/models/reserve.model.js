const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = require('./book.model');
const user = require('./user.model');

var reserveSchema = new Schema({
    
    reservationExpiry: {type:Date,trim: true, required: true},
    loanExpiry: {type:Date,trim: true, required: true},
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
    }
});

var Reserve = mongoose.model('reserve', reserveSchema);
module.exports = Reserve;
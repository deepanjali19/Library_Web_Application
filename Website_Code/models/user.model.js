const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    
    userType: {type:String, trim: true, required: true},
    number: {type:String, trim: true, required: true},
    firstName: {type:String, trim: true, required: true},
    lastName: {type:String, trim: true, required: true},
    email: {type:String, trim: true, required: true},
    phoneNumber: {type:String, trim: true, required: true},
    password: {type:String, trim: true},
    street:{type:String, trim: true, required: true },
    apt:{type:String, trim: true },
    city: {type:String, trim: true, required: true},
    postalCode: {type:String, trim: true, required: true},
    province: {type:String, trim: true, required: true},
    reserve:[{
        type:Schema.Types.ObjectId,
        ref:'reserve'
    }],
    loan:[{
        type:Schema.Types.ObjectId,
        ref:'loan'
    }]
});

var User = mongoose.model('user', userSchema);
module.exports = User;
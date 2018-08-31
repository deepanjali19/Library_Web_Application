const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const book = require('../models/book.model');
const reserve = require('../models/reserve.model');

module.exports.reserve = (req, res) => {

    console.log("inside Reserve");
    let userId = req.body.userId;
    let bookId = req.body.bookId;
    let reserveId;

    let r = reserve;
    let u = user;
    let b = book;

    r.find({$and: [{user: userId},{book: bookId}]},(err,r)=>{
        
        var found=false;
        
        if(err){
            console.log("This is the error:"+err);
        }      

        if(r.length>0){
             found=true;
        }

        if(found){
            res.json({
                message:"You have already reserved the book!",
                success:false
            });
            console.log("sucess is set to false......................");
        }
        else{
        
            //creating new reserve
            let today = new Date();
        
            r = new reserve({
                user: userId,
                book: bookId,
                reservationExpiry: new Date(today.setFullYear(today.getFullYear() + 1)),
                loanExpiry: new Date(today.setFullYear(today.getFullYear() + 2))
            });
        
            //saving the created reserve
            r.save((err) => {
                if (err) {
                    console.log("error in reservation" + err);
                }
            });
          //  console.log(r._id);
        
        // USER
        
            u.findById(userId, (err, u) => {
                if (err) {
                    console.log("error" + err);
                }
                console.log("in user array");
                //console.log(u);
        
                u.reserve.push(r._id);
                u.save((err) => {
                        if (err) {
                            console.log("error in reservation" + err);
                        }
                    });
           });
        
        // BOOK
        
            b.findById(bookId, (err, b) => {
                if (err) {
                    console.log("error" + err);
                }
                console.log("in book array");
                //console.log(r._id);
        
                b.reserve.push(r._id);
                b.save((err) => {
                    if (err) {
                        console.log("error in reservation" + err);
                    }
                });
            });
        
            res.json({
                message:"Book Has Been Successfully Reserved!",
                success:true
            });
        }
    });
}
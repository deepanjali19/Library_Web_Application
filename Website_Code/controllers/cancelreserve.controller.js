const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const book = require('../models/book.model');
const reserve = require('../models/reserve.model');

module.exports.cancelreserve = (req, res) => {
let reserveId= req.body.reserveId;
let userId = req.body.userId;
let bookId;
let r = reserve;
let u = user;
let b = book;

// find book ID

r.findById(reserveId,(err,r)=>{

    if(err){
        console.log("This is the error:"+err);
    }    

    bookId = r.book;


    // delete reserve from book 

    b.findById(bookId,(err,b)=>{
        
        
            if(err){
                console.log("This is the error:"+err);

                return res.json({
                    success:false
                });
            }    
        
            let index = b.reserve.findIndex(reserve => reserveId==reserve);
    
            //console.log(index);
    
            b.reserve.splice(index,1);
            b.save((err) => {
                    if (err) {
                        console.log("deleting reservation from user" + err);

                        return res.json({
                            success:false
                        });
                    }
                });
        });
  // console.log(bookId);
});

// delete reservation in user 

u.findById(userId,(err,u)=>{
    
        if(err){
            console.log("This is the error:"+err);
            return res.json({
                success:false
            });
        }    
    
        let index = u.reserve.findIndex(reserve => reserveId==reserve);

       // console.log(index);

        u.reserve.splice(index,1);
        u.save((err) => {
                if (err) {
                    console.log("deleting reservation from user" + err);

                    return res.json({
                        success:false
                    });
                }
            });
    });

// delete reservation completely from reservation ID

r.findByIdAndRemove(reserveId,()=>{
    return res.json({
        success:true
    });
});

}
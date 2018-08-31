const path = require('path');
const mongoose = require('mongoose');
var book =require('../models/book.model');

module.exports.remove = (req,res)=>{

    b = book;
    console.log(req.query.id);
    b.findByIdAndRemove(req.query.id,function(err){
        if(!err){
            return res.json({success: true});
        }else{
            return res.json({success: false, error: err});
        }
    });


}
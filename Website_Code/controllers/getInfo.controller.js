const path = require('path');
const mongoose = require('mongoose');
var fullbook = require('../models/fullBook.model');


module.exports.getInfo = (req,res)=>{
    
    id = req.query.id;
    fb = fullbook;

    b.findById(id,function(err, b){
        if(err){
            console.log(err);
        }else{
            
            fb.id = b.id;
            fb.title = b.title;
            fb.isbn = b.isbn;
            fb.year = b.year;
            fb.publisher = b.publisher;
            fb.description = b.description;
            fb.language = b.language;
            fb.noCopies = b.noCopies;
            fb.authorFirstName = b.authorFirstName;
            fb.authorLastName = b.authorLastName;
            fb.copies = b.copies;
            fb.loan = b.loan;
            fb.reserve = b.reserve;
            var tfn = b.coverArt.split("/");
            var fileNm = tfn[tfn.length-1];            
            fb.coverArt = "http://localhost:3000/pics?image="+fileNm;

            return res.json(fb);  
        }
    })

}
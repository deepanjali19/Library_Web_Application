const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var fs = require('fs');
var url = require('url');
module.exports.pics = (req, res) =>{

    var query = url.parse(req.url,true).query;
    pic = query.image;
    console.log("in pictures");
    //read the image using fs and send the image content back in the response
    fs.readFile('C:\Users\Daniel\Desktop\LibraryProject\controllers../../uploads/' + pic, function (err, content) {
    if (err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image");    
    } else {
        //specify the content type in the response will be an image
        res.writeHead(200,{'Content-type':'image/jpg'});
        res.end(content);
    }
});



}
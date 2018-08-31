//Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var book =require('./models/book.model');
var fileUpload = require('express-fileupload');
const passport = require('passport');
// var mailer = require('express-mailer');

//-----------------------------------------------------------------------
//Constant variables for application settings
//Default app port
const port = 3000;
//Router
const router = require('./routes/routes');
//Database url
const dbURL = "mongodb://localhost/library";

//-----------------------------------------------------------------------
//Database setup

mongoose.connect(dbURL, {useMongoClient: true});

mongoose.connection.on('error', (err)=>{
    console.log("Error connecting to database: "+ err);
});

mongoose.connection.on('connected', ()=>{
    console.log("Connected to database");
});

//--------------------------------------------------------------------------
//Body-Parser Middleware
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public/dist")));
console.log((path.join(__dirname, "public/dist")));

//--------------------------------------------------------------------------
//File-Uploader
app.use(fileUpload());

//--------------------------------------------------------------------------
//Router redirect
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

app.use('/', router);

//--------------------------------------------------------------------------
//Scratch pad for testing

// var b = book;
// var a = author;

//   b.findOne({'title': 'booky'},function(err, b){ 
//     if(b){
        
//      }else{
//         b = new book({ title: 'booky', isbn: 12345, year: 1985, publisher: 'Seneca', description: 'a test book', language: 'english', noCopies: 1});  
//         a.findOne({'firstName':'Daniel', 'lastName': 'Camara'},function(err,a){
//             if(a){
//                     b.authors.push(mongoose.Types.ObjectId(a.id));
//                     a.books.push(mongoose.Types.ObjectId(b.id));                
//             }else{
//                 a = new author({firstName: 'Daniel', lastName: 'Camara'});
//                 b.authors.push(a);
//                 a.books.push(b);
//             }

//             b.save((err)=>{});
//             a.save((err)=>{});       
//         });
               
//     }     
//  });

//--------------------------------------------------------------------------
//module.exports.app = app;
app.listen(port,()=>{
    console.log("Server listening on port "+port);
});


















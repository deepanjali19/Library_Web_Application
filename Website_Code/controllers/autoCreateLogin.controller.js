const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports.autoCreateLogin = (req,res)=>{ 
    var u = user;
    var t = user;
    console.log("here 1");
    u.findOne({'number': '099654321'},function(err, u){
        var tpass;
        if(!u){ 
            bcrypt.genSalt(10, (err,salt)=>{
                if(err){
                    console.log("salt - "+ err);
                }
                bcrypt.hash("password", salt, (err,hash)=>{
                    if(err){
                        console.log(err);
                    }
                    u = new user ({userType:"admin",
                    firstName:"admin",
                    lastName: "admin",
                    email:"email",
                    phoneNumber:"416-555-5555",
                    number: 099654321,
                    street: "108 Elm st",
                    apt: "402",
                    city: "Toronto",
                    province: "Ontario",
                    postalCode: "M5J2G5",
                    password:hash});  
                    console.log("here 3");
                    u.save((err)=>{
                        console.log("here 4");
                        if(err){
                            console.log("error in adding User"+ err);
                        }else{
                            console.log("Admin Added");
                            res.sendFile('index.html', {root: __dirname + "/../public/dist"});
                        }
                    });                   
                });
            });          
        }
    });

    t.findOne({'number': '0996543210'},function(err, t){
        var tpass;
        if(!t){ 
            bcrypt.genSalt(10, (err,salt)=>{
                if(err){
                    console.log("salt - "+ err);
                }
                bcrypt.hash("password", salt, (err,hash)=>{
                    if(err){
                        console.log(err);
                    }
                    t = new user ({userType:"client",
                    firstName:"John",
                    lastName: "Doe",
                    email:"email",
                    phoneNumber:"416-555-5556",
                    number: 0996543210,
                    street: "108 Elm st",
                    apt: "401",
                    city: "Toronto",
                    province: "Ontario",
                    postalCode: "M5J2G5",
                    password:hash});  
                    console.log("here 3");
                    t.save((err)=>{
                        console.log("here 4");
                        if(err){
                            console.log("error in adding User"+ err);
                        }else{
                            console.log("Admin Added");
                            res.sendFile('index.html', {root: __dirname + "/../public/dist"});
                        }
                    });                   
                });
            });          
        }
    });
}
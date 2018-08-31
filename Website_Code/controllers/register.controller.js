const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = (req,res)=>{
    console.log("in register");
    console.log(req.body.number);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var phoneNumber = req.body.phoneNumber;
    var number = req.body.number;
    var password = req.body.password;
    var u = user;
    u.findOne({'number': number, 'firstName': firstName, 'lastName':lastName, 'email':email, 'phoneNumber':phoneNumber},function(err, u){ 
        if(u){
            var temp ="_";
            bcrypt.compare(temp,u.password,(err,result)=>{
                if(!result){
                    return res.json({success: false, message: "Already Registered"});
                }else{
                    bcrypt.genSalt(10, (err,salt)=>{
                        if(err){
                            console.log("salt - "+ err);
                        }
                        
                        bcrypt.hash(password, salt, (err,hash)=>{
                            if(err){
                                console.log(err);
                            }else{
                                u.password = hash;
                                u.save((err)=>{
                                    console.log("here 4");
                                    if(err){
                                        console.log("error in adding User"+ err);
                                    }else{
                                        console.log("Password Changed");
                                        return res.json({success: true,
                                            userType:u.userType,
                                            firstName:u.firstName,
                                            lastName:u.lastName,
                                            email:u.email,
                                            phoneNumber:u.phoneNumber,
                                            number:u.number,
                                            message:"Registration Successful!"});
                                    }
                                });
                            }                   
                        });
                    });
                }
            });          
            }else{
            
            return res.json({success: false, message: "Failed To Register"});
        }
    
    });
}
const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports.login = (req,res)=>{
    //console.log(req.body);
    let number = req.body.number;
    let password = req.body.password;    
    let u = user;
    
    u.findOne({'number': number},function(err, u){ 
        if(u){
            
            bcrypt.compare(password,u.password,(err,result)=>{
                if(!result){
                    return res.json({success: false, message: "Invalid Card Number or Password"});
                }else{
                    const token = jwt.sign({data: user}, 'secret', {
                        expiresIn: '2h' // 1 week
                    });

                    var ur = {
                        userType:u.userType,
                        firstName:u.firstName,
                        lastName:u.lastName,
                        email:u.email,
                        phoneNumber:u.phoneNumber,
                        number:u.number,
                        id: u.id
                    }

                    return res.json({success: true,
                        token: token,
                        user: ur
                        });
                }
            });          
        }else{
            return res.json({success: false, message: "Invalid Card Number or Password"});
        }
    });
}
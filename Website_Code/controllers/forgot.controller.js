const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
var mailer = require('nodemailer');
var app = require('../app');
const config = require('../config/config');



module.exports.forgot = (req, res) => {
  
  //Function Variables
  let userNumber = req.query.number;
  let email = req.query.email;
  var u = user;

  //Emailer setup and settings
  let transporter = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.email.email, // generated ethereal user
      pass: config.email.password  // generated ethereal password
    }
  });

  
  u.findOne({ 'number': userNumber, 'email': email }, function (err, u) {
    if (u) {

      //generates a temporary password
      var tempPass = Math.floor((Math.random() * 9999)).toString(); 
      
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log("salt - " + err);
        }
        //Encrypts password
        bcrypt.hash(tempPass, salt, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            u.password = hash;
            //saves new password in database
            u.save((err) => {
              if (err) {
                //Returns this if failed to change password in database
                console.log("error in adding User" + err);
                return res.json({
                  success: false,
                  message: "Password Reset Failed!"
                });
              } else {
                //If password is changed
                //Email message 
                let output = `<div>
                                <p>Your password has been reset!</p>
                                <p>Your new password is: ${tempPass}</p>
                                <br>
                                <p>Please log in and change it for added security.</p>
                              </div>`;
                
                //Email Header
                let mailOptions = {
                  from: config.email.email, // sender address
                  to: u.email, // list of receivers
                  subject: 'Password Reset', // Subject line
                  // text: "text goes here";
                  html: output // html body
                };

                //Sends email
                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    return console.log("Email Not sent Error: " + error);
                  } else {
                    console.log("Email sent");
                    console.log("Password Changed");
                    //sends Success message to client
                    return res.json({
                      success: true,
                      message: "Password Was Reset! Please Check Your Email."
                    });
                  }
                })
              }
            });
          }
        });
      });
    } else {
      //Could not find card or email
      //Sends error message to client
      return res.json({ success: false, message: "Invalid Card Number or email!" });
    }
  });
}
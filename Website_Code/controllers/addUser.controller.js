const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports.addUser = (req, res) => {
    console.log(req.body);
    let userType = req.body.userType;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let street = req.body.street;
    let apt = req.body.apt;
    let city = req.body.city;
    let province = req.body.province;
    let postalCode = req.body.postalCode;
    let u = user;
    var found = false;
    let number= "";

    while (!found) {
        found = true;
        if (userType !== "admin") {
            number = Math.floor((Math.random() * 899999999) + 100000000);
        } else {
            number = req.body.userName;
        }
        u.findOne({ 'number': number }, function (err, u) {
            if (u) {
                if(userType=='admin'){
                    found = true;
                    return res.json({ success: false, message: "User Not Added! Username Already Exists" });
                }
                found = false;
            } else {

                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        console.log("salt - " + err);
                    }
                    var pn = phoneNumber.split('-');
                    bcrypt.hash(pn[2].trim(), salt, (err, hash) => {
                        console.log(hash);
                        if (err) {
                            console.log(err);
                        } else {
                            u = new user({
                                userType: userType,
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phoneNumber: phoneNumber,
                                number: number,
                                password: hash,
                                street: street,
                                apt: apt,
                                city: city,
                                postalCode: postalCode,
                                province: province
                            });
                            console.log("Password Changed");
                            u.save((err) => {
                                if (err) {
                                    console.log("error in adding User" + err);
                                    return res.json({ success: false, message: "Could Not Add User" });
                                } else {
                                    console.log("success in adding User");

                                    return res.json({
                                        success: true,
                                        userType: u.userType,
                                        firstName: u.firstName,
                                        lastName: u.lastName,
                                        email: u.email,
                                        phoneNumber: u.phoneNumber,
                                        number: u.number,
                                        street: street,
                                        apt: apt,
                                        city: city,
                                        postalCode: postalCode,
                                        province: province
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }
}
const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.profile = (req, res) => {
    //res.sendFile('index.html', {root: __dirname + "/../public/dist"});

    let number = req.query.number;
    let u = user;

    u.findOne({ 'number': number }, function (err, u) {
        if (u) {
            return res.json({
                success: true,
                userType: u.userType,
                firstName: u.firstName,
                lastName: u.lastName,
                email: u.email,
                phoneNumber: u.phoneNumber,
                number: u.number,
                street: u.street,
                apt: u.apt,
                city: u.city,
                postalCode: u.postalCode,
                province: u.province,
                reserve: u.reserve
            });
        } else {
            return res.json({ success: false, message: "No profile" });
        }
    });
}


module.exports.modify = (req, res) => {

    let number = req.body.number;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let u = user;
    let editPass = req.body.editPass;
    let password = req.body.password;

    if (!editPass) {
        u.findOne({ 'number': number }, function (err, u) {
            if (u) {
                u.email = email;
                u.phoneNumber = phoneNumber;
                u.save((err, u) => {
                    if (err) {
                        return res.json({ success: false, message: "Could Not Add User" });
                    } else {
                        console.log("modify successful");
                        return res.json({
                            success: true,
                            userType: u.userType,
                            firstName: u.firstName,
                            lastName: u.lastName,
                            email: u.email,
                            phoneNumber: u.phoneNumber,
                            number: u.number
                        });
                    }
                })

            } else {
                return res.json({ success: false, message: "Could Not Add User" });
            }
        });
    } else if (editPass) {
        console.log("in password change");
        u.findOne({ 'number': number }, function (err, u) {
            if (u) {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        console.log("salt - " + err);
                    }

                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.log(err);
                        } else {
                            u.password = hash;
                            u.save((err) => {
                                console.log("here 4");
                                if (err) {
                                    console.log("error in adding User" + err);
                                } else {
                                    console.log("Password Changed");
                                    return res.json({
                                        success: true,
                                        userType: u.userType,
                                        firstName: u.firstName,
                                        lastName: u.lastName,
                                        email: u.email,
                                        phoneNumber: u.phoneNumber,
                                        number: u.number
                                    });
                                }
                            });
                        }
                    });
                });

            } else {
                return res.json({ success: false, message: "Could Not Add User" });
            }
        });
    }
}


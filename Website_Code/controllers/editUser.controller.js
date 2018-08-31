const path = require('path');
const mongoose = require('mongoose');
var user = require('../models/user.model');

module.exports.editUser = (req, res) => {

    var u = user;

    u.findById(req.body._id, (err, u) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, message: "Database Error! could not edit user." });
        } else {

            u.firstName = req.body.firstName;
            u.lastName = req.body.lastName;
            u.email = req.body.email;
            u.phoneNumber = req.body.phoneNumber;
            u.street = req.body.street;
            u.apt = req.body.apt;
            u.city = req.body.city;
            u.postalCode = req.body.postalCode;
            u.province = req.body.province;

            u.save((err, b) => {
                if (err) {
                    return res.json({ success: false, message: "Database Error! could not edit user." });
                } else {
                    return res.json({ success: true, message: "User's Profile Has Been Successfully Updated!", user: u });
                }

            });
        }
    });
}
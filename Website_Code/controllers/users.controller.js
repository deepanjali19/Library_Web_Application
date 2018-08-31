const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var user = require('../models/user.model');
var reserve = require('../models/reserve.model');

module.exports.userCon = function (req, res) {

    let finished = false;
    let reservations = [];
    let userNumber = req.query.userNumber;
    let u = user;
    let r = reserve;
    let b = book;

    u.find({ 'number': userNumber }, (err, u) => {
        if (err) {
            console.log(err)
        }
        if (u.length > 0) {
            if (u[0].reserve) {
                if (u[0].reserve.length > 0) {
                    r.find({ 'user': u[0]._id }).populate({
                        path: 'book'

                    }).exec((err, result) => {
                        res.json({
                            found: true,
                            reservations: result,
                            user: u[0]
                        });
                    })
                } else {
                    res.json({
                        found: true,
                        reservations: [],
                        user: u[0]
                    });
                }
            } else {
                res.json({
                    found: true,
                    reservations: [],
                    user: u[0]
                });
            }
        } else {
            res.json({
                found: false,
                reservations: [],
                message: "Could Not Find User"
            })
        }
    });
}
const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var user = require('../models/user.model');
var reserve = require('../models/reserve.model');
var loan = require('../models/loan.model');

module.exports.getLoans = function (req, res) {

    let finished = false;
    let loans = [];
    let userNumber = req.query.userNumber;
    let u = user;
    let l = loan
    let b = book;
    console.log("in get loans");
    u.find({ 'number': userNumber }, (err, u) => {
        if (err) {
            console.log(err)
        }
        if (u.length > 0) {
            if (u[0].loan) {
                if (u[0].loan.length > 0) {
                    l.find({ 'user': u[0]._id }).populate({
                        path: 'book'

                    }).exec((err, result) => {
                        console.log("sending loans");
                        res.json({
                            found: true,
                            loans: result,
                        });
                    })
                } else {
                    res.json({
                        found: true,
                        loans: [],
                        user: u[0]
                    });
                }
            } else {
                res.json({
                    found: true,
                    loans: [],
                    user: u[0]
                });
            }
        } else {
            res.json({
                found: false,
                loans: [],
                message: "Could Not Find User"
            })
        }
    });
}
const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var user = require('../models/user.model');
var reserve = require('../models/reserve.model');
var loan = require('../models/loan.model');

module.exports.getReserves = function (req, res) {

    let finished = false;
    let reserves = [];
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
                            reserves: result,
                        });
                    })
                } else {
                    res.json({
                        found: true,
                        reserves: [],
                        user: u[0]
                    });
                }
            } else {
                res.json({
                    found: true,
                    reserves: [],
                    user: u[0]
                });
            }
        } else {
            res.json({
                found: false,
                reserves: [],
                message: "Could Not Find User"
            })
        }
    });
}
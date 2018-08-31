const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');


module.exports.findBook = (req, res) => {

    bookNumber = req.query.bookNumber;
    b1 = book;
    console.log(bookNumber);
    b1.find({}, function (err, b) {
        if (err) {
            console.log(err);
        } else {
            if (b) {

                for (var i = 0; i < b.length; i++) {
                    for (var j = 0; j < b[i].copies.length; j++) {
                        if (b[i].copies[j] == bookNumber) { 
                            return res.json({
                                found: true,
                                book: b[i],
                            });
                        }
                    }
                }
                return res.json({
                    found: false,
                    message: "Could Not Find Book"
                })
            }
            return res.json({
                found: false,
                message: "Could Not Find Book"
            })
        }
    });

}
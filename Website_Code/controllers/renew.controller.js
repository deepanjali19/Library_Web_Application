const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const book = require('../models/book.model');
const reserve = require('../models/reserve.model');
const loan = require('../models/loan.model');
var moment = require('moment');


module.exports.renew = (req, res) => {
    console.log("inside renew");
    let loanId = req.body.loanId;
    let r = reserve;
    let u = user;
    let b = book;
    let l = loan;
    console.log(loanId);

    // find loan
    l.findById(loanId, (err, l) => {
        if (err) {
            console.log("Error in finding loan: " + err);
        }
        // find book 
        b.findById(l.book, (err, b) => {
            if (err) {
                console.log("Error in finding book: " + err);
            }
            // get length of reserves 
            let reserveLength = b.reserve.length;

            // check: if book has been renewed less then limit 
            if (l.renewed < 2) {

                // check: if there are any reserves on the book 
                if (reserveLength > 0) {

                    // check: if length of reserves < available copies
                    // aCopies is available Copies   
                    let aCopies = b.copies.length - b.loan.length;
                    if (reserveLength < aCopies) {
                        // check to see if renew date is 6 days from now
                        let proposedDueDate = moment(new Date()).add(6, 'days')
                        console.log(proposedDueDate);
                        if (moment(proposedDueDate).isAfter(l.dueDate, 'day')) {
                            // allow renew 
                            // setting a new due date
                            l.dueDate = moment(new Date()).add(7, 'days'),
                                l.renewed++;

                            l.save((err) => {
                                if (err) {
                                    console.log("Error in renewing the loan" + err);
                                }
                                res.json({
                                    message: "Book Renewed until " + moment(l.dueDate).format('dddd, MMMM Do YYYY') + "!",
                                    success: true
                                });
                            });
                        } else {
                            res.json({
                                message: "New due date is earlier than original! Can only Renew a book 6 days before it is originally due.",
                                success: false
                            });
                        }
                    } else { // no extra copies available 
                        // cannot renew 
                        res.json({
                            message: "Cannot renew now due to too many reservations.",
                            success: false
                        });
                    }

                } else { // no reserves on book so renew 
                    // check to see if renew date is 6 days from now
                    let proposedDueDate = moment(new Date()).add(6, 'days');
                    console.log(proposedDueDate);
                    if (moment(proposedDueDate).isAfter(l.dueDate, 'day')) {
                        // setting a new due date
                        l.dueDate = moment(new Date()).add(7, 'days'),
                            l.renewed++;

                        l.save((err) => {
                            if (err) {
                                console.log("error in renewing loan" + err);
                            }
                            res.json({
                                message: "Book Renewed until " + moment(l.dueDate).format('dddd, MMMM Do YYYY') + "!",
                                success: true
                            });
                        });
                    } else {
                        res.json({
                            message: "New due date is earlier than original! Can only Renew a book 6 days before it is originally due.",
                            success: false
                        });
                    }
                }
            } else {
                // over renew limit 
                res.json({
                    message: "Reached Renew Limit (up tp 2 renews allowed) ",
                    success: false
                });
            }
        });
    });
}
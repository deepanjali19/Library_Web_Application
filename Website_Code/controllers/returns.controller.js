const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const book = require('../models/book.model');
const loan = require('../models/loan.model');

module.exports.returns = (req, res) => {
    let bookNumber = req.body.bookNumber;
    console.log("in returns controller " + bookNumber);

    let u = user;
    let b = book;
    let l = loan;


    // Finding Loans for this bookcode 
    l.find({ 'bookCode': bookNumber }, (err, l) => {
        if (err) {
            console.log("Error in finding loan by this book code: " + err);
        }

        if (l.length > 0) {

            //finding user with this loan 
            u.findById(l[0].user, (err, u) => {
                if (err) {
                    console.log("Error in finding user with this loan: " + err);
                }

                // looking for the loan  in user 
                let index = u.loan.findIndex(loan => l[0]._id == loan);
                //console.log(index);

                // deleting the loan from user
                u.loan.splice(index, 1);
                u.save((err) => {
                    if (err) {
                        console.log("deleting loan from USER" + err);
                    }
                });
            });

            b.findById(l[0].book, (err, b) => {
                if (err) {
                    console.log("Error in finding book with this loan: " + err);
                }
                // looking for the loan  in  book 
                let index = b.loan.findIndex(loan => l[0]._id == loan);
                //console.log(index);

                // deleting the loan from book
                b.loan.splice(index, 1);
                b.save((err) => {
                    if (err) {
                        console.log("deleting loan from BOOK" + err);
                    }
                });

            });

            // delete Loan itself
            let l1 = loan;
            l1.findByIdAndRemove(l[0]._id, () => {
                return res.json({
                    bookNumber: bookNumber,
                    message: "Book Successfully Returned!",
                    success: true
                });
            })

        } else {
            // no loans on this book 
            return res.json({
                bookNumber: bookNumber,
                message: "No loans on this book or wrong book code!",
                success: false
            });
        }

    });

}
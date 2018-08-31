const path = require('path');
const mongoose = require('mongoose');
const user = require('../models/user.model');
const book = require('../models/book.model');
const reserve = require('../models/reserve.model');
const loan = require('../models/loan.model');
var moment = require('moment');


module.exports.loan = (req, res) => {

    let loanedBooks = req.body.loanedBooks;
    let userId = req.body.userId;
    let r = reserve;
    let u = user;
    let b = book;
    let l = loan;
    //console.log(loanedBooks);
    //for (var i = 0; i < req.body.loanedBooks.length; i++) {

    let bc = loanedBooks.bookCode;
    b.findById(loanedBooks.bookId, (err, b) => {

        if (err) {
            console.log("error finding book" + err);
        }
        if (b.reserve.length == 0) {
            let today = new Date();
            u.find({ 'number': userId }, (err, u) => {
                if (err) {
                    console.log("Error in finding user: " + err);
                }
                let ui;
                if (u) {
                    ui = u[0]._id;
                    l = new loan({
                        loanOutDate: new Date(),
                        dueDate: moment(new Date()).add(14, 'days'),
                        user: ui,
                        book: b._id,
                        bookCode: bc,
                        renewed: 0
                    });


                    l.save((err) => {
                        if (err) {
                            console.log("error in loan saving" + err);
                        }
                    });

                    b.loan.push(l._id);
                    b.save((err) => {
                        if (err) {
                            console.log("error in loan saving book" + err);
                        }
                    });


                    u[0].loan.push(l._id);
                    u[0].save((err) => {
                        if (err) {
                            console.log("error in loan saving user" + err);
                        }
                    });

                    console.log("Book loaned");
                    return res.json({
                        success: true,
                        book: b,
                        loan: l,
                        message: "Successful"
                    });
                } else {
                    console.log("Could not find any users with that number");
                }

            });
        } else if (b.reserve.length > 0) {
            console.log("in loan reserves");
            u.find({ 'number': userId }).populate({
                path: 'reserve'

            }).exec((err, result) => {
                console.log("in loan reserves 2");
                let uReserve = result[0].reserve;
                let bookId = b._id;
                let bReserves = b.reserve;
                let myIndex;
  //              console.log(result[0].reserve[0]._id);
                //goes through all the reserves the user has 
                for (let i = 0; i < uReserve.length; i++) {
                    console.log("in loan reserves 3");
                    //tests if the book is in the users reserves bookid == user.reserve.bookid
                    if ((uReserve[i].book.toString() == bookId.toString())) {
                        //goes through all the reserves the book has
                        for (let j = 0; j < bReserves.length; j++) {
                            console.log("in loan reserves 4");
                            //tests if the users.reservid matches one of the reserves in the book
                            if (bReserves[j].toString() == uReserve[i]._id.toString()) {
                                console.log("in loan reserves 5");
                                //finds available copies for loan
                                let aCopies = b.copies.length - b.loan.length;
                                //tests if users reserve location is less than available books
                                console.log(j);
                                if (j < aCopies) {
                                    console.log("in loan reserves 6");
                                    l = new loan({
                                        loanOutDate: new Date(),
                                        dueDate: moment(new Date()).add(14, 'days'),
                                        user: result[0]._id,
                                        book: bookId,
                                        bookCode: bc,
                                        renewed: 0
                                    });
                                    //creating loan
                                    l.save((err) => {
                                        if (err) {
                                            console.log("error in loan saving" + err);
                                        }
                                    });
                                    //saving loan to book
                                    b.loan.push(l._id);
                                    b.save((err) => {
                                        if (err) {
                                            console.log("error in loan saving book" + err);
                                        }
                                    });

                                    //saving loan to user
                                    result[0].loan.push(l._id);
                                    result[0].save((err) => {
                                        if (err) {
                                            console.log("error in loan saving user" + err);
                                        }
                                    });

                                    r.findByIdAndRemove(result[0].reserve[i]._id.toString(), ).exec();
                                    //removing reserve from user and removing reserve object
                                    result[0].reserve.splice(i, 1);
                                    result[0].save((err) => {
                                        if (err) {
                                            console.log("error in loan saving user " + err);
                                        }
                                    });
                                    //removing reserve from book
                                    b.reserve.splice(j, 1);
                                    b.save((err) => {
                                        if (err) {
                                            console.log("error in loan saving user " + err);
                                        }
                                    });


                                    console.log("Book loaned");
                                    return res.json({
                                        success: true,
                                        book: b,
                                        loan: l,
                                        message: "Successful"
                                    });

                                } else {

                                }
                            } else {

                            }
                        }
                    } else {

                    }
                }

                let aCopies = b.copies.length - b.loan.length - b.reserve.length;
                if (aCopies > 0) {

                    l = new loan({
                        loanOutDate: new Date(),
                        dueDate: moment(new Date()).add(14, 'days'),
                        user: result[0]._id,
                        book: bookId,
                        bookCode: bc,
                        renewed: 0
                    });
                    //creating loan
                    l.save((err) => {
                        if (err) {
                            console.log("error in loan saving" + err);
                        }
                    });
                    //saving loan to book
                    b.loan.push(l._id);
                    b.save((err) => {
                        if (err) {
                            console.log("error in loan saving book" + err);
                        }
                    });

                    //saving loan to user
                    result[0].loan.push(l._id);
                    result[0].save((err) => {
                        if (err) {
                            console.log("error in loan saving user" + err);
                        }
                    });

                    console.log("Book loaned");
                    return res.json({
                        success: true,
                        book: b,
                        loan: l,
                        message: "Successful"
                    });
                } else {
                    return res.json({
                        success: false,
                        book: b,
                        loan: l,
                        message: "User does not have a reserve on this book"
                    });
                }
            });
        }
    });
    //}

}


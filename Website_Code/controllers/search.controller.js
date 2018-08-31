const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var fullBook = require('../models/fullBook.model');
var bodyParser = require('body-parser');
var fs = require('fs');

module.exports.search = (req, res) => {
    //console.log(req.query);
    if (req.query.searchType == 'basic') {
        console.log("in basic");
        fbs = [];
        fb = fullBook;
        b = book;
        option = req.query.option;
        query = req.query.query;
        //console.log(query);
        //--All----------------------------------------------------------------------------
        if (option == 'All') {
            console.log("in all");
            b.find({}, function (err, b) {
                if (err) {
                    console.log(err);
                } else {
                    if (b.length != 0) {
                        for (var i = 0; i < b.length; i++) {

                            fb.id = b[i].id;
                            fb.title = b[i].title;
                            fb.isbn = b[i].isbn;
                            fb.year = b[i].year;
                            fb.publisher = b[i].publisher;
                            fb.description = b[i].description;
                            fb.language = b[i].language;
                            fb.noCopies = b[i].noCopies;
                            fb.authorFirstName = b[i].authorFirstName;
                            fb.authorLastName = b[i].authorLastName;
                            fb.copies = b[i].copies;
                            fb.reserve = b[i].reserve;
                            fb.loan = b[i].loan;
                            var tfn = b[i].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;


                            console.log(fb);
                            var temp = Object.assign({}, fb);
                            fbs.push(temp);


                        }

                        return res.send(fbs);
                    }
                }
            })
        }
        //--ISBN---------------------------------------------------------------------------
        else if (option == 'ISBN') {

            b.find({ 'isbn': query }, function (err, b) {
                if (err) {
                    console.log(err);
                } else {
                    if (b.length != 0) {
                        for (var i = 0; i < b.length; i++) {

                            fb.id = b[i].id;
                            fb.title = b[i].title;
                            fb.isbn = b[i].isbn;
                            fb.year = b[i].year;
                            fb.publisher = b[i].publisher;
                            fb.description = b[i].description;
                            fb.language = b[i].language;
                            fb.noCopies = b[i].noCopies;
                            fb.authorFirstName = b[i].authorFirstName;
                            fb.authorLastName = b[i].authorLastName;
                            fb.copies = b[i].copies;
                            fb.reserve = b[i].reserve;
                            fb.loan = b[i].loan;
                            var tfn = b[i].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;


                            console.log(fb);
                            var temp = Object.assign({}, fb);
                            fbs.push(temp);


                        }

                        return res.send(fbs);
                    }
                }
            })
            //--Author---------------------------------------------------------------------------   
        } else if (option == 'Author') {

            name = query.trim().split(" ");
            console.log(name.length);
            if (name.length == 1) {

                b.find({
                    $or: [{ authorFirstName: { $regex: name[0].trim(), $options: 'i' } },
                    { authorLastName: { $regex: name[0].trim(), $options: 'i' } }]
                }, function (err, b) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (b.length != 0) {
                            for (var i = 0; i < b.length; i++) {

                                fb.id = b[i].id;
                                fb.title = b[i].title;
                                fb.isbn = b[i].isbn;
                                fb.year = b[i].year;
                                fb.publisher = b[i].publisher;
                                fb.description = b[i].description;
                                fb.language = b[i].language;
                                fb.noCopies = b[i].noCopies;
                                fb.authorFirstName = b[i].authorFirstName;
                                fb.authorLastName = b[i].authorLastName;
                                fb.copies = b[i].copies;
                                fb.reserve = b[i].reserve;
                                fb.loan = b[i].loan;
                                var tfn = b[i].coverArt.split("/");
                                var fileNm = tfn[tfn.length - 1];

                                fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                                var temp = Object.assign({}, fb);
                                fbs.push(temp);

                            }
                            return res.json(fbs);
                        }
                    }
                });
            } else if (name.length == 2) {

                b.find({
                    $or: [
                        { $and: [{ authorFirstName: { $regex: name[0].trim(), $options: 'i' } }, { authorLastName: { $regex: name[1].trim(), $options: 'i' } }] },
                        { authorFirstName: { $regex: (name[0].trim() + " " + name[1].trim()), $options: 'i' } },
                        { authorLastName: { $regex: (name[0].trim() + " " + name[1].trim()), $options: 'i' } }
                    ]
                }, function (err, b) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (b.length != 0) {
                            for (var i = 0; i < b.length; i++) {

                                fb.id = b[i].id;
                                fb.title = b[i].title;
                                fb.isbn = b[i].isbn;
                                fb.year = b[i].year;
                                fb.publisher = b[i].publisher;
                                fb.description = b[i].description;
                                fb.language = b[i].language;
                                fb.noCopies = b[i].noCopies;
                                fb.authorFirstName = b[i].authorFirstName;
                                fb.authorLastName = b[i].authorLastName;
                                fb.copies = b[i].copies;
                                fb.reserve = b[i].reserve;
                                fb.loan = b[i].loan;
                                var tfn = b[i].coverArt.split("/");
                                var fileNm = tfn[tfn.length - 1];

                                fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                                var temp = Object.assign({}, fb);
                                fbs.push(temp);

                            }
                            return res.json(fbs);
                        }
                    }
                });
            } else if (name.length > 2) {

                b.find({
                    $or: [
                        { $and: [{ authorFirstName: { $regex: name[0].trim(), $options: 'i' } }, { authorLastName: { $regex: name[1].trim(), $options: 'i' } }] },
                        { authorFirstName: { $regex: (name[0].trim() + " " + name[1].trim()), $options: 'i' } },
                        { authorLastName: { $regex: (name[name.length - 1].trim()), $options: 'i' } }
                    ]
                }, function (err, b) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (b.length != 0) {
                            for (var i = 0; i < b.length; i++) {

                                fb.id = b[i].id;
                                fb.title = b[i].title;
                                fb.isbn = b[i].isbn;
                                fb.year = b[i].year;
                                fb.publisher = b[i].publisher;
                                fb.description = b[i].description;
                                fb.language = b[i].language;
                                fb.noCopies = b[i].noCopies;
                                fb.authorFirstName = b[i].authorFirstName;
                                fb.authorLastName = b[i].authorLastName;
                                fb.copies = b[i].copies;
                                fb.reserve = b[i].reserve;
                                fb.loan = b[i].loan;
                                var tfn = b[i].coverArt.split("/");
                                var fileNm = tfn[tfn.length - 1];

                                fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;


                                var temp = Object.assign({}, fb);
                                fbs.push(temp);

                            }
                            return res.json(fbs);
                        }
                    }
                });
            }


            //--Title---------------------------------------------------------------------------
        } else if (option == 'Title') {

            b.find({ title: { $regex: query, $options: 'i' } }, function (err, b) {
                if (err) {
                    console.log(err);
                } else {
                    if (b.length != 0) {
                        for (var i = 0; i < b.length; i++) {

                            fb.id = b[i].id;
                            fb.title = b[i].title;
                            fb.isbn = b[i].isbn;
                            fb.year = b[i].year;
                            fb.publisher = b[i].publisher;
                            fb.description = b[i].description;
                            fb.language = b[i].language;
                            fb.noCopies = b[i].noCopies;
                            fb.authorFirstName = b[i].authorFirstName;
                            fb.authorLastName = b[i].authorLastName;
                            fb.copies = b[i].copies;
                            fb.reserve = b[i].reserve;
                            fb.loan = b[i].loan;
                            var tfn = b[i].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;


                            var temp = Object.assign({}, fb);
                            fbs.push(temp);

                        }

                        return res.json(fbs);
                    }
                }
            });

            //--Year---------------------------------------------------------------------------
        } else if (option == 'Year') {

            b.find({ 'year': query }, function (err, b) {

                if (err) {
                    console.log(err);
                } else {
                    if (b.length != 0) {

                        for (var i = 0; i < b.length; i++) {

                            fb.id = b[i].id;
                            fb.title = b[i].title;
                            fb.isbn = b[i].isbn;
                            fb.year = b[i].year;
                            fb.publisher = b[i].publisher;
                            fb.description = b[i].description;
                            fb.language = b[i].language;
                            fb.noCopies = b[i].noCopies;
                            fb.authorFirstName = b[i].authorFirstName;
                            fb.authorLastName = b[i].authorLastName;
                            fb.copies = b[i].copies;
                            fb.reserve = b[i].reserve;
                            fb.loan = b[i].loan;
                            var tfn = b[i].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                            var temp = Object.assign({}, fb);
                            fbs.push(temp);
                        }
                        return res.json(fbs);
                    }
                }
            })
            //--Publisher---------------------------------------------------------------------------
        } else if (option == 'Publisher') {

            b.find({ publisher: { $regex: query, $options: 'i' } }, function (err, b) {
                if (err) {
                    console.log(err);
                } else {
                    if (b.length != 0) {
                        for (var i = 0; i < b.length; i++) {

                            fb.id = b[i].id;
                            fb.title = b[i].title;
                            fb.isbn = b[i].isbn;
                            fb.year = b[i].year;
                            fb.publisher = b[i].publisher;
                            fb.description = b[i].description;
                            fb.language = b[i].language;
                            fb.noCopies = b[i].noCopies;
                            fb.authorFirstName = b[i].authorFirstName;
                            fb.authorLastName = b[i].authorLastName;
                            fb.copies = b[i].copies;
                            fb.reserve = b[i].reserve;
                            fb.loan = b[i].loan;
                            var tfn = b[i].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                            var temp = Object.assign({}, fb);
                            fbs.push(temp);

                        }

                        return res.json(fbs);
                    }
                }
            });
        } else {

        }

        //-----------Advanced Search -----------------------------------------------

    } else if (req.query.searchType == "advanced") {

        query = JSON.parse(req.query.query);
        andCon = ["", "", "", "", "", ""];
        orCon = [];
        fbs = [];
        fb = fullBook;
        b = book;

        for (var i = 0; i < query.length; i++) {

            if (query[i].condition == "and") {
                if (query[i].choice == "ISBN") {
                    andCon[0] = query[i].query.trim();
                } else if (query[i].choice == "Title") {
                    andCon[1] = query[i].query.trim().toLowerCase();
                } else if (query[i].choice == "Year") {
                    andCon[2] = query[i].query.trim();
                } else if (query[i].choice == "Publisher") {
                    andCon[3] = query[i].query.trim().toLowerCase();
                } else if (query[i].choice == "Author") {
                    tName = query[i].query.trim().toLowerCase().split();
                    andCon[4] = tName[0].trim();
                    andCon[5] = tName[tName.length - 1].trim();
                }

            } else if (query[i].condition == "or") {

                orCon.push(query[i]);
            }
        }
        b.find("", function (err, b) {

            if (err) {
                console.log(err);
            } else {
                if (b.length != 0) {
                    for (j = 0; j < b.length; j++) {

                        if ((andCon[0] != "" ? andCon[0] == b[j].isbn : true) &&
                            (andCon[1] != "" ? andCon[1] == b[j].title.toLowerCase() : true) &&
                            (andCon[2] != "" ? andCon[2] == b[j].year : true) &&
                            (andCon[3] != "" ? andCon[3] == b[j].publisher.toLowerCase() : true) &&
                            ((andCon[4] != "" ? andCon[4] == b[j].authorFirstName.toLowerCase() : true) ||
                                (andCon[5] != "" ? andCon[5] == b[j].authorLastName.toLowerCase() : true))
                        ) {
                            fb.id = b[j].id;
                            fb.title = b[j].title;
                            fb.isbn = b[j].isbn;
                            fb.year = b[j].year;
                            fb.publisher = b[j].publisher;
                            fb.description = b[j].description;
                            fb.language = b[j].language;
                            fb.noCopies = b[j].noCopies;
                            fb.authorFirstName = b[j].authorFirstName;
                            fb.authorLastName = b[j].authorLastName;
                            fb.copies = b[j].copies;
                            fb.reserve = b[j].reserve;
                            fb.loan = b[j].loan;
                            var tfn = b[j].coverArt.split("/");
                            var fileNm = tfn[tfn.length - 1];

                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                            var temp = Object.assign({}, fb);
                            fbs.push(temp);
                        }
                    }
                    //or search
                    if (orCon.length > 0) {
                        for (var i = 0; i < orCon.length; i++) {
                            if (orCon[i].choice == "ISBN") {
                                for (j = 0; j < b.length; j++) {
                                    if (orCon[i].query.trim() == b[j].isbn) {
                                        notAdded = true;
                                        if (fbs.length > 0) {
                                            for (k = 0; k < fbs.length; k++) {
                                                if (fbs[k].id == b[j].id) {
                                                    notAdded = false;
                                                    // break;
                                                }
                                            }
                                        }
                                        if (notAdded) {
                                            fb.id = b[j].id;
                                            fb.title = b[j].title;
                                            fb.isbn = b[j].isbn;
                                            fb.year = b[j].year;
                                            fb.publisher = b[j].publisher;
                                            fb.description = b[j].description;
                                            fb.language = b[j].language;
                                            fb.noCopies = b[j].noCopies;
                                            fb.authorFirstName = b[j].authorFirstName;
                                            fb.authorLastName = b[j].authorLastName;
                                            fb.copies = b[j].copies;
                                            fb.reserve = b[j].reserve;
                                            fb.loan = b[j].loan;
                                            var tfn = b[j].coverArt.split("/");
                                            var fileNm = tfn[tfn.length - 1];

                                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;

                                            var temp = Object.assign({}, fb);
                                            fbs.push(temp);
                                        }
                                    }
                                }
                            } else if (orCon[i].choice == "Author") {
                                name = orCon[i].query.trim().toLowerCase().split();
                                for (j = 0; j < b.length; j++) {
                                    if ((name[0] == b[j].authorFirstName.toLowerCase()) || (name[name.length - 1] == b[j].authorLastName.toLowerCase())) {
                                        notAdded = true;
                                        if (fbs.length > 0) {
                                            for (k = 0; k < fbs.length; k++) {
                                                if (fbs[k].id == b[j].id) {
                                                    notAdded = false;
                                                }
                                            }
                                        }
                                        if (notAdded) {
                                            fb.id = b[j].id;
                                            fb.title = b[j].title;
                                            fb.isbn = b[j].isbn;
                                            fb.year = b[j].year;
                                            fb.publisher = b[j].publisher;
                                            fb.description = b[j].description;
                                            fb.language = b[j].language;
                                            fb.noCopies = b[j].noCopies;
                                            fb.authorFirstName = b[j].authorFirstName;
                                            fb.authorLastName = b[j].authorLastName;
                                            fb.copies = b[j].copies;
                                            fb.reserve = b[j].reserve;
                                            fb.loan = b[j].loan;
                                            var tfn = b[j].coverArt.split("/");
                                            var fileNm = tfn[tfn.length - 1];

                                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                                            var temp = Object.assign({}, fb);
                                            fbs.push(temp);
                                        }
                                    }
                                }

                            } else if (orCon[i].choice == "Year") {
                                for (j = 0; j < b.length; j++) {
                                    if (orCon[i].query.trim() == b[j].year) {
                                        notAdded = true;
                                        if (fbs.length > 0) {
                                            for (k = 0; k < fbs.length; k++) {
                                                if (fbs[k].id == b[j].id) {
                                                    notAdded = false;
                                                }
                                            }
                                        }
                                        if (notAdded) {
                                            fb.id = b[j].id;
                                            fb.title = b[j].title;
                                            fb.isbn = b[j].isbn;
                                            fb.year = b[j].year;
                                            fb.publisher = b[j].publisher;
                                            fb.description = b[j].description;
                                            fb.language = b[j].language;
                                            fb.noCopies = b[j].noCopies;
                                            fb.authorFirstName = b[j].authorFirstName;
                                            fb.authorLastName = b[j].authorLastName;
                                            fb.copies = b[j].copies;
                                            fb.reserve = b[j].reserve;
                                            fb.loan = b[j].loan;
                                            var tfn = b[j].coverArt.split("/");
                                            var fileNm = tfn[tfn.length - 1];

                                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                                            var temp = Object.assign({}, fb);
                                            fbs.push(temp);
                                        }
                                    }
                                }
                            } else if (orCon[i].choice == "Publisher") {
                                for (j = 0; j < b.length; j++) {
                                    if (orCon[i].query.trim().toLowerCase() == b[j].publisher.toLowerCase()) {
                                        notAdded = true;
                                        if (fbs.length > 0) {
                                            for (k = 0; k < fbs.length; k++) {
                                                if (fbs[k].id == b[j].id) {
                                                    notAdded = false;
                                                }
                                            }
                                        }
                                        if (notAdded) {
                                            fb.id = b[j].id;
                                            fb.title = b[j].title;
                                            fb.isbn = b[j].isbn;
                                            fb.year = b[j].year;
                                            fb.publisher = b[j].publisher;
                                            fb.description = b[j].description;
                                            fb.language = b[j].language;
                                            fb.noCopies = b[j].noCopies;
                                            fb.authorFirstName = b[j].authorFirstName;
                                            fb.authorLastName = b[j].authorLastName;
                                            fb.copies = b[j].copies;
                                            fb.reserve = b[j].reserve;
                                            fb.loan = b[j].loan;
                                            var tfn = b[j].coverArt.split("/");
                                            var fileNm = tfn[tfn.length - 1];

                                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                                            var temp = Object.assign({}, fb);
                                            fbs.push(temp);
                                        }
                                    }
                                }
                            } else if (orCon[i].choice == "Title") {
                                for (j = 0; j < b.length; j++) {
                                    if (orCon[i].query.trim().toLowerCase() == b[j].title.toLowerCase()) {
                                        notAdded = true;
                                        if (fbs.length > 0) {
                                            for (k = 0; k < fbs.length; k++) {
                                                if (fbs[k].id == b[j].id) {
                                                    notAdded = false;
                                                }
                                            }
                                        }
                                        if (notAdded) {
                                            fb.id = b[j].id;
                                            fb.title = b[j].title;
                                            fb.isbn = b[j].isbn;
                                            fb.year = b[j].year;
                                            fb.publisher = b[j].publisher;
                                            fb.description = b[j].description;
                                            fb.language = b[j].language;
                                            fb.noCopies = b[j].noCopies;
                                            fb.authorFirstName = b[j].authorFirstName;
                                            fb.authorLastName = b[j].authorLastName;
                                            fb.copies = b[j].copies;
                                            fb.reserve = b[j].reserve;
                                            fb.loan = b[j].loan;
                                            var tfn = b[j].coverArt.split("/");
                                            var fileNm = tfn[tfn.length - 1];

                                            fb.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                                            var temp = Object.assign({}, fb);
                                            fbs.push(temp);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return res.json(fbs);
                }
            }
        });
    }
}





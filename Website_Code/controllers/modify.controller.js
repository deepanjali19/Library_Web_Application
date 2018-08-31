const path = require('path');
const mongoose = require('mongoose');
var fullBook = require('../models/fullBook.model');
var book = require('../models/book.model');
var fs = require('fs');
var cp = require('../models/copies.model');

module.exports.modify = (req, res) => {
    var extensionArray;
    var extension;
    b = book;
    cpadd = req.body.copyadd;

    var _cp = cp;
    var _copies = [];

    for (var i = 0; i < cpadd; i++) {

        var temp = Math.floor((Math.random() * 899999999) + 100000000);

        var found = false;
        _cp.findOne({ 'number': temp }, function (err, b) {
            if (b) {
                found = true;
            }
        });
        if (!found) {
            _cp2 = new cp({ number: temp });

            _cp2.save();

            _copies.push(temp);
        }

    }
    b.findById(req.body.id, (err, b) => {
        if (err) {
            console.log(err);
        } else {
            b.title = String(req.body.title).trim();
            b.isbn = req.body.isbn;
            b.year = req.body.year;
            b.publisher = req.body.publisher.trim();
            b.description = req.body.description.trim();
            b.language = req.body.language.trim();
            b.noCopies = (b.noCopies * 1) + (cpadd * 1);
            b.authorFirstName = req.body.authorFirstName.trim();
            b.authorLastName = req.body.authorLastName.trim();
            console.log(" Here 1");
            if (req.files.photo) {
                var bufDataFile = new Buffer(req.files.photo.data, "binary");
                extensionArray = req.files.photo.name.split(".");
                extension = extensionArray[extensionArray.length - 1];
                var tfilename = b.coverArt;
                if (tfilename != "book.png") {
                    fs.unlink(tfilename, function (error) {
                        if (error) {
                            //throw error;
                        }
                        console.log('Deleted file!!');
                    });
                }
                fs.writeFile(__dirname + '../../uploads/' + req.body.isbn + "." + extension, bufDataFile, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("in picture change");
                        console.log(req.files.photo ? String(__dirname + '../../uploads/' + req.body.isbn + "." + extension) : String(__dirname + '../../uploads/book.png'));
                        b.coverArt = req.files.photo ? String(__dirname + '../../uploads/' + req.body.isbn + "." + extension) : String(__dirname + '../../uploads/book.png');
                        console.log("Data written successfully !");
                    }
                });
                console.log(req.files.photo);
                b.coverArt = req.files.photo ? String(__dirname + '../../uploads/' + req.body.isbn + "." + extension) : String(__dirname + '../../uploads/book.png');
            }
            if (cpadd) {
                if (cpadd > 0) {
                    for (var i = 0; i < cpadd; i++) {
                        b.copies.push(_copies[i]);
                    }
                }
            }

            b.save((err, b) => {
                if (err) {
                    return res.json({ success: false, error: err });
                } else {
                    var tfn;
                    var fileNm;
                    if (req.files.photo) {
                        fileNm = req.body.isbn + "." + extension;
                    } else {
                        tfn = b.coverArt.split("/");
                        fileNm = tfn[tfn.length - 1];
                    }
                    return res.json({
                        success: true,
                        book: {
                            id: b.id,
                            title: b.title,
                            isbn: b.isbn,
                            year: b.year,
                            publisher: b.publisher,
                            description: b.description,
                            language: b.language,
                            noCopies: b.noCopies,
                            copies: b.copies,
                            authorFirstName: b.authorFirstName,
                            authorLastName: b.authorLastName,
                            coverArt: "http://localhost:3000/pics?image=" + fileNm
                        }

                    });
                }
            });
        }
    });


}
const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var cp = require('../models/copies.model');
var fs = require('fs');


module.exports.addBook = function (req, res) {


        var extensionArray;
        var extension;
        if (req.files.photo) {
            var bufDataFile = new Buffer(req.files.photo.data, "binary");
            extensionArray = req.files.photo.name.split(".");
            extension = extensionArray[extensionArray.length - 1];
            fs.writeFile(__dirname + '../../uploads/' + req.body.isbn + "." + extension, bufDataFile, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Data written successfully !");
                }
            })
        }

        var coverArt = req.files.photo ? String(__dirname + '../../uploads/' + req.body.isbn + "." + extension) : String(__dirname + '../../uploads/book.png');
        var title = req.body.title.trim();
        var authorFirstName = req.body.authorFirstName.trim();
        var authorLastName = req.body.authorLastName.trim();
        var isbn = req.body.isbn;
        var year = req.body.year
        var publisher = req.body.publisher.trim();
        var description = req.body.description.trim();
        var language = req.body.language.trim();
        var noCopies = req.body.noCopies;
        var _copies = [];
        var b = book;
        var _cp = cp;
        var _cp2 = cp;
        var all = book;

        for (var i = 0; i < noCopies; i++) {

            var temp = Math.floor((Math.random() * 899999999) + 100000000);

            console.log(temp);
            var found = false;
            _cp.findOne({ 'number': temp }, function (err, b) {
                if (b) {
                    found = true;

                    console.log(temp);
                }
            });
            if (!found) {
                _cp2 = new cp({ number: temp });

                _cp2.save();

                _copies.push(temp);
            }

        }


        console.log(_copies);


        b.findOne({ 'isbn': isbn }, function (err, b) {
            if (b) {
                return res.json({ success: false, error: "ISBN already exists" });
            } else {
                b = new book({
                    title: title,
                    isbn: isbn,
                    year: year,
                    publisher: publisher,
                    description: description,
                    language: language,
                    noCopies: noCopies,
                    authorFirstName: authorFirstName,
                    authorLastName: authorLastName,
                    coverArt: coverArt,
                    copies: _copies
                });



                b.save((err) => {
                    if (err) {
                        console.log("error in adding book" + err);
                        return res.json({ success: false, error: "" });
                    } else {
                        return res.json({ success: true });
                    }
                });
            }
        });
    }


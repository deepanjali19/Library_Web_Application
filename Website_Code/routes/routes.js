const express = require('express');
const router = express.Router();
const routes = ('../public/dist');
const path = require('path');
const mongoose = require('mongoose');
var book = require('../models/book.model');
var addbook = require('../controllers/addbook.controller');
var search = require('../controllers/search.controller');
var getInfo = require('../controllers/getInfo.controller');
var remove = require('../controllers/remove.controller');
var modify = require('../controllers/modify.controller');
var pics = require('../controllers/pics.controller');
var bodyParser = require('body-parser');
var addUser = require('../controllers/addUser.controller');
var login = require('../controllers/login.controller');
const autoCreateLogin = require('../controllers/autoCreateLogin.controller');
const profile = require('../controllers/profile.controller');
const register = require('../controllers/register.controller');
const forgot = require('../controllers/forgot.controller');
const reserve = require('../controllers/reserve.controller');
const userCon = require('../controllers/users.controller');
const editUser = require('../controllers/editUser.controller');
const checkout = require('../controllers/checkout.controller');
const cancelreserve = require('../controllers/cancelreserve.controller');
const loan = require('../controllers/loan.controller');
const getLoans = require('../controllers/getLoans.controller');
const getReserves = require('../controllers/getReserves.controller');
const jwt = require('jsonwebtoken');
const returns = require('../controllers/returns.controller');
const renew = require('../controllers/renew.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.static(path.join(__dirname, "/../public/dist")));
//router.use('/', express.static('app'));

//----------------------------------------------------------------------------------------------------------------
//JWT verifier
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'secret', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });

    } else {
        res.sendStatus(403);
    }
}
//routes----------------------------------------------------------------------------------------------------------
router.get('/search', search.search);
router.get('/addbook', verifyToken, (req, res) => { res.sendFile('index.html', { root: __dirname + "/../public/dist" }); });
router.post('/addbook', addbook.addBook);
router.get('/info', getInfo.getInfo);
router.get('/pics', pics.pics);
router.delete('/info', remove.remove);
router.put('/info', modify.modify);
router.get('/advancedsearch', search.search);
router.get('/createuser', verifyToken, (req, res) => { res.sendFile('index.html', { root: __dirname + "/../public/dist" }); });
router.post('/createuser', addUser.addUser);
router.get('/login', autoCreateLogin.autoCreateLogin);
router.post('/login', login.login);
router.get('/profile', verifyToken, profile.profile);
router.put('/profile', profile.modify);
router.get('/register', (req, res) => { res.sendFile('index.html', { root: __dirname + "/../public/dist" }); });
router.put('/register', register.register);
router.put('/edituser', editUser.editUser);
router.post('/reserve', reserve.reserve);
router.get('/users', userCon.userCon);
router.get('/checkout', checkout.findBook);
router.get('/barcode', checkout.findBook);
router.get('/forgot', forgot.forgot);
router.get('/getloans', getLoans.getLoans);
router.get('/getreserves', getReserves.getReserves);
router.put('/cancelreserve', cancelreserve.cancelreserve);
router.put('/loan', loan.loan);
router.put('/return', returns.returns);
router.put('/renew', renew.renew);
module.exports = router;
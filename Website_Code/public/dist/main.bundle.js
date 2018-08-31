webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n  <p>Copyright &copy; Pavan Deepanjali Zufishan Daniel </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_book_add_book_component__ = __webpack_require__("../../../../../src/app/components/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_info_info_component__ = __webpack_require__("../../../../../src/app/components/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_advancedsearch_advancedsearch_component__ = __webpack_require__("../../../../../src/app/components/advancedsearch/advancedsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/components/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_addbook_service__ = __webpack_require__("../../../../../src/app/services/addbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_barcode_barcode_component__ = __webpack_require__("../../../../../src/app/components/barcode/barcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_return_return_component__ = __webpack_require__("../../../../../src/app/components/return/return.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//-----------------------------------------------------------------------------------------
//Dependencies
//Modules








//Components














//Services



//-----------------------------------------------------------------------------------------
//Page routes
var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_9__components_add_book_add_book_component__["a" /* AddBookComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_14__components_info_info_component__["a" /* InfoComponent */] },
    { path: 'advancedsearch', component: __WEBPACK_IMPORTED_MODULE_15__components_advancedsearch_advancedsearch_component__["a" /* AdvancedsearchComponent */] },
    { path: 'createuser', component: __WEBPACK_IMPORTED_MODULE_13__components_create_user_create_user_component__["a" /* CreateUserComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_19__components_forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'users/:error', component: __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'user/:userNumber', component: __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__["a" /* UserComponent */] },
    { path: 'barcode/:barcode', component: __WEBPACK_IMPORTED_MODULE_23__components_barcode_barcode_component__["a" /* BarcodeComponent */] },
    { path: 'returnbooks', component: __WEBPACK_IMPORTED_MODULE_24__components_return_return_component__["a" /* ReturnComponent */] }
];
//-----------------------------------------------------------------------------------------
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_add_book_add_book_component__["a" /* AddBookComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_advancedsearch_advancedsearch_component__["a" /* AdvancedsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_create_user_create_user_component__["a" /* CreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_forgot_forgot_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_barcode_barcode_component__["a" /* BarcodeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_return_return_component__["a" /* ReturnComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__services_addbook_service__["a" /* AddBookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* label {\r\n    font-size: 110%;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn{\r\n    font-weight: bold;\r\n}\r\n\r\n.authors{\r\n    padding: 10px;\r\n    border-style: solid;\r\n    margin-bottom: 5px;\r\n} */\r\n\r\n.myForm{\r\n    margin: 10px;\r\n \r\n    padding: 10px;\r\n    border-style: solid;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.myPicture{\r\n    padding: 10px;\r\n    max-height: 300px;\r\n    max-width: 300px\r\n}\r\n\r\n/*.footer {\r\n    width:90%;\r\n    margin-left: 5%;\r\n    margin-right:5%;\r\n    margin-top:0;\r\n    padding-top:1.2em;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    clear: left;\r\n    text-align: center; \r\n    border-left:solid white 2px;\r\n    border-bottom:solid white 2px;\r\n    border-right:solid white 2px;\r\n    \r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container col-md-10 col-md-offset-1\">\n<div class=\"col-md-12 myForm\">\n  <div class=\"col-md-6 offset-md-3 row\"> \n  <form class=\"form-horizontal\" (ngSubmit)=\"addBook()\" name=\"myIForm\" id=\"myIForm\" >\n    <fieldset>\n      <h1>Create A Book</h1>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" id=\"title\">\n        <div *ngIf=\"!valid.title\" class=\"alert alert-danger\">A title is required</div>\n      </div>\n      <div class=\"authors\">\n        <h4>Author</h4>\n        <!-- Author -->\n        <div class=\"row\">\n          <div class=\"col\">\n            <label for=\"authorFirstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.authorFirstName\"  name=\"authorFirstName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"col\">\n            <label for=\"authorLastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.authorLastName\"  name=\"authorLastName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div *ngIf=\"!valid.author\" class=\"alert alert-danger\">A valid first and last name are required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"isbn\">ISBN</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\">\n        <div *ngIf=\"!valid.isbn\" class=\"alert alert-danger\">A valid ISBN number is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"year\">Publish Year</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.year\" name=\"year\">\n        <div *ngIf=\"!valid.year\" class=\"alert alert-danger\">A valid publish year is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"publisher\" id=\"pubyear\">Publisher</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n        <div *ngIf=\"!valid.publisher\" class=\"alert alert-danger\">A publisher is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"book.description\" name=\"description\"></textarea>\n      </div>\n      <div class=\"form-group\" id=\"lang\">\n        <label for=\"language\">Language</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.language\" name=\"language\">\n        <div *ngIf=\"!valid.language\" class=\"alert alert-danger\">A language is required</div>\n      </div>\n      <div class=\"form-group\" id=\"copynum\">\n        <label for=\"numCopies\">Number of Copies</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.noCopies\" name=\"noCopies\">\n        <div *ngIf=\"!valid.noCopies\" class=\"alert alert-danger\">Please enter a quantity for the number of copies of this book.</div>\n      </div>\n      <div class=\"form-group\" id=\"cover\">\n        <label for=\"coverArt\">Cover Art</label>\n        <input type=\"file\" class=\"form-control\" name=\"photo\" (change)=\"readUrl($event)\" >\n        <div *ngIf=\"!valid.coverArt\" class=\"alert alert-danger\">File is not an image</div>\n      </div>\n      <div >\n        <img [src]=\"url\" alt=\"\" class=\"col-md-10 offset-md-1 myPicture\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-outline-dark btn-lg\" value=\"submit\">\n        <a [routerLink]=\"['/']\" class=\"btn btn-outline-danger btn-lg\">cancel</a>\n      </div>\n    </fieldset>\n    \n  </form>\n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_book_model__ = __webpack_require__("../../../../../src/app/models/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_validation_model__ = __webpack_require__("../../../../../src/app/models/validation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_addbook_service__ = __webpack_require__("../../../../../src/app/services/addbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddBookComponent = (function () {
    function AddBookComponent(http, checkBook, flashMessage, el) {
        this.http = http;
        this.checkBook = checkBook;
        this.flashMessage = flashMessage;
        this.el = el;
        this.pre = false;
        this.valid = new __WEBPACK_IMPORTED_MODULE_3__models_validation_model__["a" /* BookValidation */]();
        this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book_model__["a" /* Book */]();
    }
    AddBookComponent.prototype.addBook = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('input[name="photo"]');
        var myForm = document.getElementById('myIForm');
        var formData = new FormData(myForm);
        this.book.coverArt = inputEl.files.item(0);
        this.valid = this.checkBook.checkAddBook(this.book);
        console.log(this.book.coverArt);
        if (this.valid.book == true) {
            // if(this.book){
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
            this.http.post('http://localhost:3000/addbook', formData)
                .subscribe(function (res) {
                var answer = res.json();
                if (answer.success == true) {
                    _this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book_model__["a" /* Book */]();
                    window.scrollTo(0, 0);
                    _this.flashMessage.show('Book was added successfully!', { cssClass: 'alert-success', timeout: 5000 });
                }
                else if (answer.success == false) {
                    window.scrollTo(0, 0);
                    _this.flashMessage.show('Book was not added. ' + answer.error, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    AddBookComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return AddBookComponent;
}());
AddBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-book',
        template: __webpack_require__("../../../../../src/app/components/add-book/add-book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-book/add-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_addbook_service__["a" /* AddBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_addbook_service__["a" /* AddBookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], AddBookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/advancedsearch/advancedsearch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line{\r\n    margin: 5px;\r\n}\r\n\r\n.searchButtons{\r\n    margin: 5px;\r\n}\r\n.container{\r\n    margin-top: 10px;\r\n    border: solid;\r\n    background-color:whitesmoke;\r\n    height:600px;\r\n    width:90%;\r\n    opacity:0.8;\r\n}\r\n\r\nbutton {\r\n     \r\n    border: solid 1px black; \r\n}\r\n\r\n.contain {\r\n    \r\n    margin-left: 40px;\r\n    \r\n}\r\n\r\n/*.footer {\r\n    width:90%;\r\n    margin-left: 5%;\r\n    margin-right:5%;\r\n    margin-top:0;\r\n    padding-top:1.2em;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    clear: left;\r\n    text-align: center; \r\n    border-left:solid white 2px;\r\n    border-bottom:solid white 2px;\r\n    border-right:solid white 2px;\r\n    \r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advancedsearch/advancedsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"myForm\"> \n  <form class=\"form-inline my-2 my-lg-0 contain\" >\n    <fieldset>\n      <h1>Advanced Search</h1>\n      <div *ngFor = \"let q of query; let i = index\">\n        <div class=\"form-group line\">\n          <!-- condition -->\n          <select class=\"btn btn-primary dropdown-toggle\" *ngIf=\"i!=0\" [(ngModel)]=\"q.condition\" name=\"condition\" [ngModelOptions]=\"{standalone: true}\">\n            <option value=\"and\">and</option>\n            <option value=\"or\">or</option>\n          </select>\n          <!-- choice -->\n          <select class=\"btn btn-primary dropdown-toggle cat\" [(ngModel)]=\"query[i].choice\" name=\"choice\" [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor = \"let option of options\" >{{option}}</option>\n          </select>\n          <!-- query -->\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query[i].query\" name=\"query\" [ngModelOptions]=\"{standalone: true}\">\n          <p *ngIf = \"q.message\" class=\"alert alert-danger al\">{{q.message}}</p>\n        </div>\n      </div>  \n      <div class=\"form-group\">\n        <button class=\"btn btn-light searchButtons\" id=\"button\" (click)=\"addLine()\">+ add a new line</button>\n        <button class=\"btn btn-light searchButtons\" id=\"button\" (click)=\"reset()\">reset</button>\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-light searchButtons\" (click)=\"advancedSearch()\">find</button>\n      </div>\n    </fieldset>\n  </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/advancedsearch/advancedsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedsearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedsearchComponent = (function () {
    function AdvancedsearchComponent(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.options = ["ISBN", "Author", "Title", "Year", "Publisher"];
        this.andOptions = ["ISBN", "Author", "Title", "Year", "Publisher"];
        this.query = [];
        this.and = "and";
    }
    AdvancedsearchComponent.prototype.ngOnInit = function () {
        this.query.push({ condition: "and", choice: "ISBN", query: "" });
    };
    AdvancedsearchComponent.prototype.advancedSearch = function () {
        var good = true;
        for (var i = 0; i < this.query.length; i++) {
            this.query[i].message = "";
            if (i == 0 && (this.query.length == 0 || this.query[0].query.trim() == "")) {
                this.query[0].message = "No query parameter given";
                good = false;
            }
            if (this.query[i].query.trim() == "" && i != 0) {
                this.query.splice(i, 1);
                i--;
            }
            else {
                if (!this.query[i].choice) {
                    this.query[i].message = "A condition is needed to perform this search";
                    good = false;
                }
            }
        }
        if (good) {
            this.router.navigate(['/search'], { queryParams: { searchType: "advanced", query: JSON.stringify(this.query) }, skipLocationChange: false });
        }
    };
    AdvancedsearchComponent.prototype.addLine = function () {
        this.query.push({ condition: "and", choice: "", query: "" });
    };
    AdvancedsearchComponent.prototype.reset = function () {
        this.query = [];
        this.query.push({ condition: "and", choice: "ISBN", query: "" });
    };
    return AdvancedsearchComponent;
}());
AdvancedsearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advancedsearch',
        template: __webpack_require__("../../../../../src/app/components/advancedsearch/advancedsearch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/advancedsearch/advancedsearch.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AdvancedsearchComponent);

var _a, _b, _c;
//# sourceMappingURL=advancedsearch.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/barcode/barcode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myContainer{\r\n    min-height: 600px;\r\n    min-width: 100%;\r\n    background-color: white;\r\n}\r\n.myBarcode{\r\n    margin: 20px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/barcode/barcode.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myContainer\">\n  <br>\n  <br>\n  <div class=\"container\">\n    <div class=\"myBarcode\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <img alt=\"Barcoded value 1234567890\" src=\"http://bwipjs-api.metafloor.com/?bcid=code128&text={{barcode}}&scaleY=1&includetext\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <span>{{bookName}}</span>\n        </div>\n      </div>\n    </div>   \n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-3 offset-1\">\n      <button class=\"btn btn-secondary goBack\" (click)=\"goBack()\">Back</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/barcode/barcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodeComponent = (function () {
    function BarcodeComponent(activateRoute, http, location) {
        var _this = this;
        this.activateRoute = activateRoute;
        this.http = http;
        this.location = location;
        this.barcode = this.activateRoute.snapshot.params['barcode'];
        this.http.get("http://localhost:3000/barcode", { search: { bookNumber: this.barcode } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.bookName = data.book.title;
        });
    }
    BarcodeComponent.prototype.ngOnInit = function () {
    };
    BarcodeComponent.prototype.goBack = function () {
        this.location.back();
    };
    return BarcodeComponent;
}());
BarcodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-barcode',
        template: __webpack_require__("../../../../../src/app/components/barcode/barcode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/barcode/barcode.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], BarcodeComponent);

var _a, _b, _c;
//# sourceMappingURL=barcode.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!entered\" class=\"container mainBackground\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-1\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"addUser()\" id=\"myIForm\">\n        <fieldset>\n          <h1>Create User</h1>\n          <br>\n          <br>\n          <!-- name -->\n          <div class=\"form-group row\">\n            <label for=\"userType\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>User Type</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <select name=\"userType\" class=\"col-md-4 form-control\" [(ngModel)]=\"userType\">\n                <option *ngFor=\"let ut of userTypes\" value={{ut}}>{{ut}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group row\" *ngIf=\"userType=='admin'\">\n            <label for=\"userName\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>User Name</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"userName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.userName\">\n              <span>User Name Must Be At Least 5 Characters Long</span>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"firstName\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>First Name</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"firstName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.firstName\">\n              <span>Must Provide A First Name</span>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"lastName\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Last Name</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.lastName\">\n              <span>Must Provide A Last Name</span>\n            </div>\n          </div>\n          <!-- email -->\n          <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Email</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.email\">\n              <span>Must Provide A Valid Email</span>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"phoneNumber\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Phone Number</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"phone\" class=\"form-control\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"xxx-xxx-xxxx\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.phone\">\n              <span>Invalid Phone Number! Please Use The xxx-xxx-xxxx Format</span>\n            </div>\n          </div>\n          <!-- street number -->\n          <div class=\"form-group row\">\n            <label for=\"address.number\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Street</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"street\" name=\"street\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.address\">\n              <span>Must Provide A Street Number!</span>\n            </div>\n          </div>\n          <!-- apartment -->\n          <div class=\"form-group row\">\n            <label for=\"address.apt\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Apt</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"apt\" name=\"apt\">\n            </div>\n          </div>\n          <!-- city -->\n          <div class=\"form-group row\">\n            <label for=\"address.city\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>City</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.city\">\n              <span>Must Provide A City! </span>\n            </div>\n          </div>\n          <!-- province -->\n          <div class=\"form-group row\">\n            <label for=\"address.province\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Province</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"province\" name=\"province\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.province\">\n              <span>Must Provide A Province!</span>\n            </div>\n          </div>\n          <!-- postal code -->\n          <div class=\"form-group row\">\n            <label for=\"address.postalCode\" class=\"col-md-3 form-form-control-label text-right\">\n              <h4>Postal Code</h4>\n            </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"postalCode\" name=\"postalCode\">\n            </div>\n            <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.postalCode\">\n              <span>Invalid Postal Code Format! Please use L1L1L1  </span>\n            </div>\n          </div>\n          <br>\n          <br>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-outline-dark btn-lg\" value=\"submit\">\n          </div>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- results page -->\n\n<div class=\"container mainBackground\" *ngIf=\"entered\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-1\">\n      <h1>Successfully Added User</h1>\n      <span>User Type: {{userType}}</span>\n      <br>\n      <span *ngIf=\"userType=='admin'\">User Name: {{number}}</span>\n      <span *ngIf=\"userType=='client'\">Library Card Number: {{number}}</span>\n      <br>\n      <span>Name: {{lastName}}, {{firstName}}</span>\n      <br>\n      <span>Email: {{email}}</span>\n      <br>\n      <span>Phone Number: {{phoneNumber}}</span>\n      <br>\n      <br>\n      <br>\n      <button (click)=\"addAnother()\" class=\"btn btn-outline-primary btn-lg\">Add Another User</button>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateUserComponent = (function () {
    function CreateUserComponent(http, el, flashMessage) {
        this.http = http;
        this.el = el;
        this.flashMessage = flashMessage;
        this.valid = {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true,
            city: true,
            postalCode: true,
            province: true,
            userName: true,
            user: true
        };
        this.userType = "client";
        this.userTypes = ["client", "admin"];
        this.entered = false;
    }
    CreateUserComponent.prototype.addUser = function () {
        var _this = this;
        this.validate(this.firstName, this.lastName, this.email, this.phoneNumber, this.street, this.city, this.province, this.postalCode, this.userName, this.userType, this.valid);
        if (this.valid.user) {
            var myForm = document.getElementById('myIForm');
            var formData = new FormData(myForm);
            this.http.post('http://localhost:3000/createuser', formData)
                .subscribe(function (res) {
                var answer = res.json();
                if (answer.success == true) {
                    console.log(answer);
                    _this.entered = true;
                    _this.userType = answer.userType;
                    _this.firstName = answer.firstName;
                    _this.lastName = answer.lastName;
                    _this.email = answer.email;
                    _this.phoneNumber = answer.phoneNumber;
                    _this.number = answer.number;
                    _this.street = answer.address;
                    window.scrollTo(0, 0);
                }
                else if (answer.success == false) {
                    _this.flashMessage.show(answer.message, { cssClass: 'alert-danger', timeout: 5000 });
                    window.scrollTo(0, 0);
                    console.log(answer);
                }
            });
        }
    };
    CreateUserComponent.prototype.addAnother = function () {
        this.entered = false;
        this.userType = "client";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.number = "";
        this.street = "";
        this.apt = "",
            this.city = "",
            this.postalCode = "",
            this.province = "",
            this.userName = "";
    };
    CreateUserComponent.prototype.validate = function (firstName, lastName, email, phone, address, city, province, postalCode, userName, userType, valid) {
        valid.firstName = true;
        valid.lastName = true;
        valid.phone = true;
        valid.email = true;
        valid.user = true;
        valid.address = true;
        valid.city = true;
        valid.postalCode = true;
        valid.province = true;
        valid.userName = true;
        if (userType === "admin") {
            if (!userName) {
                valid.userName = false;
            }
            else if (userName.trim().length < 5) {
                valid.userName = false;
            }
        }
        //names
        if (!firstName) {
            valid.firstName = false;
        }
        else if (firstName.trim().length == 0) {
            valid.firstName = false;
        }
        if (!lastName) {
            valid.lastName = false;
        }
        else if (lastName.trim().length == 0) {
            valid.lastName = false;
        }
        //email
        if (!email) {
            valid.email = false;
        }
        else if (email.split('@').length != 2) {
            valid.email = false;
        }
        else {
            var temp = email.split('@');
            var temp2 = temp[1].split('.');
            if (temp2.length < 2) {
                valid.email = false;
            }
            else if (temp2[0].length < 1 || temp2[1].length < 1) {
                valid.email = false;
            }
        }
        //phone
        if (!phone) {
            valid.phone = false;
        }
        else if (phone.length < 10) {
            valid.phone = false;
        }
        else {
            var temp3 = phone.split('-');
            if (temp3.length != 3) {
                valid.phone = false;
            }
            if ((((temp3[0].trim().length) != 3))) {
                valid.phone = false;
            }
            if (((temp3[1].trim().length) != 3)) {
                valid.phone = false;
            }
            if (((temp3[2].trim().length) != 4)) {
                valid.phone = false;
            }
        }
        //address
        if (!address) {
            valid.address = false;
        }
        else if (address.trim().length == 0) {
            valid.address = false;
        }
        //city
        if (!city) {
            valid.city = false;
        }
        else if (city.trim().length == 0) {
            valid.city = false;
        }
        //province
        if (!province) {
            valid.province = false;
        }
        else if (province.trim().length == 0) {
            valid.province = false;
        }
        //postal code
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        var match = regex.exec(postalCode);
        if (!postalCode) {
            valid.postalCode = false;
        }
        else if (postalCode.trim().length == 0) {
            valid.postalCode = false;
        }
        else if (!match) {
            valid.postalCode = false;
        }
        //user
        if (valid.firstName &&
            valid.lastName &&
            valid.email &&
            valid.phone &&
            valid.address &&
            valid.city &&
            valid.postalCode &&
            valid.province &&
            valid.userName) {
            valid.user = true;
        }
        else {
            valid.user = false;
        }
        return valid;
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-user',
        template: __webpack_require__("../../../../../src/app/components/create-user/create-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-user/create-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], CreateUserComponent);

var _a, _b, _c;
//# sourceMappingURL=create-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 150px;\r\n    border-style: solid;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner \">\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-4 mainBackground\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"login()\" id=\"myIForm\">\n        <fieldset>\n          <h1 class=\"text-center\">Forgot Password</h1>\n          <br>\n          <br>\n          <div class=\"form-group row\">\n            <div class=\"col-md-10 offset-1\">\n              <label for=\"userNumber\" class=\"form-form-control-label \"><h5>Card Number</h5></label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"userNumber\" name=\"userNumber\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-10 offset-1\">\n              <label for=\"email\" class=\"form-form-control-label\"><h5>Email</h5></label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div *ngIf=\"!success\" class=\"row\">\n            <span class=\"col-md-10 offset-1 alert alert-danger\" >{{message}}</span>\n          </div>\n          <br>\n          <br>\n          <div class=\"form-group\">\n            <button class=\"btn btn-outline-primary btn-lg\" (click)=\"submit()\">Submit</button>\n          </div>\n        </fieldset>\n      </form>    \n    </div> \n  </div>\n  <br>\n  <br>\n  <br>  \n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = (function () {
    function ForgotComponent(http, router, flashMessage) {
        this.http = http;
        this.router = router;
        this.flashMessage = flashMessage;
        this.success = true;
        this.message = "";
    }
    ForgotComponent.prototype.submit = function () {
        var _this = this;
        this.http.get('http://localhost:3000/forgot', { search: { number: this.userNumber, email: this.email } }).subscribe(function (res) {
            var answer = res.json();
            _this.success = answer.success;
            _this.message = answer.message;
            if (_this.success) {
                _this.flashMessage.show(_this.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/components/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/forgot/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ForgotComponent);

var _a, _b, _c;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    background-color:whitesmoke;\r\n    background-size: 100% 600px;\r\n    height:600px;\r\n    width:90%;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n    opacity:0.8;\r\n    /* color: rgb(23, 82, 160); */\r\n    color: white;\r\n    text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000; \r\n    font:40px Georgia;\r\n    margin-bottom: 0em;\r\n    border-left:solid rgb(28, 73, 99) 2px;\r\n    border-top:solid rgb(28, 73, 99) 2px;\r\n    border-right:solid rgb(28, 73, 99) 2px;\r\n    \r\n}\r\n/* .footer { \r\n    width:90%;\r\n    margin-left: 5%;\r\n    margin-right:5%;\r\n    margin-top:0;\r\n    padding-top:1.2em;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    clear: left;\r\n    text-align: center; \r\n    border-left:solid white 2px;\r\n    border-bottom:solid white 2px;\r\n    border-right:solid white 2px;\r\n    \r\n}*=\r\n\r\n/**.column {\r\n    float: left;\r\n    width: 33.33%;\r\n}**/\r\n\r\n/**.jumbotron:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}**/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" [ngStyle]=\"{ 'background-image': 'url(./assets/images/book2.jpeg)'}\">\n<!--<div class=\"jumbotron\"> -->\n \n   <!-- <img src=\"../../assets/images/book.jpeg\" alt=\"book\"> -->\n\n</div>\n\n<!-- <div class=\"footer\">\n  <p>Copyright &copy; Pavan Deepanjali Zufishan Daniel </p>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    background-color: whitesmoke;\r\n    border: solid black;\r\n}\r\n\r\n.authors{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.buttons{\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.goBack{\r\n    margin-left: 5%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.buttonrow{\r\n    margin-top: 10px;\r\n}\r\n.myPicture{\r\n    padding: 10px;\r\n    max-height: 300px;\r\n    max-width: 300px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!books\">\n  <p>Could Not Find Any Books</p>\n</div> -->\n<div *ngIf=\"!modify\">\n  <div class=\"container book\">\n    <div class=\"col-md-12 row buttonrow\">\n      <div class=\"col-md-4 offset-md-1\">\n        <img [src]=\"sanitizer.bypassSecurityTrustUrl(book.coverArt)\" id=\"myPic\" class=\"picture\">\n        <h1>{{book.title}}</h1>\n        <p>ISBN: {{book.isbn}}</p>\n        <p>Publisher: {{book.publisher}}</p>\n        <p>Published Year: {{book.year}}</p>\n        <p>Language: {{book.language}}</p>\n        <p>Number of Copies: {{book.noCopies}}</p>\n        <p>Number of Reserves: {{book.reserve.length}}</p>\n        <p>Number of Loans: {{book.loan.length}}</p>\n        <div *ngIf=\"this.sessionStorageItem('user')=='admin'\">\n          <h3>Copy Number</h3>\n          <p *ngFor=\"let t of book.copies\">{{t}} <button class=\"btn btn-outline-secondary\" (click)=\"getBarcode(t)\">Barcode</button></p>\n        </div>\n        <h3>Author</h3>\n        First Name: {{book.authorFirstName}}\n        <br> Last Name: {{book.authorLastName}}\n        <br>\n      </div>\n      <div class=\"col-md-6 \">\n        <h3>Description:</h3>\n        <p>{{book.description}}</p>\n      </div>\n    </div>\n    <div class=\"container row buttonrow\" *ngIf=\"!doDelete\">\n      <div class=\"col-md-4 offset-md-1\">\n        <button class=\"btn btn-outline-secondary buttons\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" (click)=\"toggleModify()\">modify</button>\n        <button class=\"btn btn-danger buttons\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" (click)=\"toggleDelete()\">delete</button>\n      </div>\n    </div>\n    <div class=\"container alert alert-danger\" *ngIf=\"doDelete\">\n      <p>Are You Sure You Want To Delete This Book?</p>\n      <button class=\"btn btn-outline-success buttons\" (click)=\"toggleDelete()\">cancel</button>\n      <button class=\"btn btn-danger buttons\" (click)=\"deleteBook(book.id)\">delete</button>\n    </div>\n  </div>\n  <button class=\"btn btn-secondary goBack\" (click)=\"goBack()\">Back To Search Results</button>\n</div>\n\n\n\n<!-- modify book part - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -->\n\n<div *ngIf=\"modify\">\n  <div class=\"container book col-md-10 col-md-offset-1\">\n    <div class=\"col-md-12 myForm\">\n      <div class=\"col-md-6 offset-md-3 row\">\n        <form class=\"form-horizontal\" (ngSubmit)=\"addBook()\" name=\"myIForm\" id=\"myIForm\">\n          <fieldset>\n            <h1>Modify Book</h1>\n            <div class=\"form-group\">\n              <label for=\"title\">Title</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.title\" name=\"title\">\n              <div *ngIf=\"!valid.title\" class=\"alert alert-danger\">A title is required</div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.id\" name=\"id\" hidden>\n            </div>\n            <div class=\"authors\">\n              <h4>Author(s)</h4>\n              <div *ngIf=\"!valid.author\" class=\"alert alert-danger\">At least one author is required</div>\n              <!-- Author 1 -->\n              <div class=\"row\">\n                <div class=\"col\">\n                  <label for=\"isbn\">First Name</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.authorFirstName\" name=\"authorFirstName\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"col\">\n                  <label for=\"isbn\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.authorLastName\" name=\"authorLastName\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"isbn\">ISBN</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book2.isbn\" name=\"isbn\">\n              <div *ngIf=\"!valid.isbn\" class=\"alert alert-danger\">A valid ISBN number is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"year\">Publish Year</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book2.year\" name=\"year\">\n              <div *ngIf=\"!valid.year\" class=\"alert alert-danger\">A valid publish year is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"publisher\">Publisher</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.publisher\" name=\"publisher\">\n              <div *ngIf=\"!valid.publisher\" class=\"alert alert-danger\">A publisher is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"description\">Description</label>\n              <textarea class=\"form-control\" [(ngModel)]=\"book2.description\" name=\"description\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"language\">Language</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book2.language\" name=\"language\">\n              <div *ngIf=\"!valid.language\" class=\"alert alert-danger\">A language is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"copyadd\">Amount Of Copies To Add</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"copyadd\" name=\"copyadd\">\n\n            </div>\n            <div class=\"form-group\" id=\"cover\">\n              <label for=\"coverArt\">Cover Art</label>\n              <input type=\"file\" class=\"form-control\" name=\"photo\" (change)=\"readUrl($event)\">\n              <div *ngIf=\"!valid.coverArt\" class=\"alert alert-danger\">File is not an image</div>\n              <div>\n                <img [src]=\"url\" alt=\"\" class=\"col-md-10 offset-md-1 myPicture\">\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n      <button class=\"btn btn-outline-secondary buttons\" (click)=\"modifyBook()\">submit</button>\n      <button class=\"btn btn-danger buttons\" (click)=\"toggleModify()\">cancel</button>\n    </div>\n  </div>\n  <button class=\"btn btn-light goBack\" (click)=\"goBack()\">Back To Search Results</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book_model__ = __webpack_require__("../../../../../src/app/models/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_validation_model__ = __webpack_require__("../../../../../src/app/models/validation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_addbook_service__ = __webpack_require__("../../../../../src/app/services/addbook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InfoComponent = (function () {
    function InfoComponent(http, router, el, flashMessage, activatedRoute, location, checkBook, sanitizer) {
        this.http = http;
        this.router = router;
        this.el = el;
        this.flashMessage = flashMessage;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.checkBook = checkBook;
        this.sanitizer = sanitizer;
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_book_model__["a" /* Book */]();
        this.copyadd = 0;
        //this.book2 = this.book;
        this.modify = false;
        this.doDelete = false;
        this.valid = new __WEBPACK_IMPORTED_MODULE_4__models_validation_model__["a" /* BookValidation */]();
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.id = params.id;
            _this.http.get('/info', { search: { id: _this.activatedRoute.snapshot.queryParams['id'] } })
                .subscribe(function (data) {
                var temp = data.json();
                console.log(temp);
                _this.book.id = temp.id;
                _this.book.title = temp.title;
                _this.book.isbn = temp.isbn;
                _this.book.year = temp.year;
                _this.book.publisher = temp.publisher;
                _this.book.description = temp.description;
                _this.book.language = temp.language;
                _this.book.noCopies = temp.noCopies;
                _this.book.authorFirstName = temp.authorFirstName;
                _this.book.authorLastName = temp.authorLastName;
                _this.book.coverArt = temp.coverArt;
                _this.book.reserve = temp.reserve;
                _this.book.loan = temp.loan;
                _this.book.copies = Object.assign(temp.copies);
                console.log(temp);
                if (params.modify) {
                    _this.modify = true, _this.book2 = Object.assign({}, _this.book);
                }
                if (params.delete) {
                    _this.doDelete = true;
                }
            });
        });
    };
    InfoComponent.prototype.getBarcode = function (barcode) {
        this.router.navigate(['/barcode', barcode]);
    };
    InfoComponent.prototype.toggleModify = function () {
        this.book2 = Object.assign({}, this.book);
        this.modify = (!this.modify);
    };
    InfoComponent.prototype.toggleDelete = function () {
        this.doDelete = (!this.doDelete);
    };
    InfoComponent.prototype.goBack = function () {
        this.location.back();
    };
    InfoComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.http.delete('/info', { params: { id: this.book.id } })
            .subscribe(function (data) {
            var answer = data.json();
            if (answer.success == true) {
                //window.scrollTo(0, 0);
                _this.location.back();
                _this.flashMessage.show('Book was successfully deleted!', { cssClass: 'alert-success', timeout: 5000 });
            }
            else if (answer.success == false) {
                window.scrollTo(0, 0);
                _this.flashMessage.show('Could not delete book' + answer.error, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    InfoComponent.prototype.sessionStorageItem = function (id) {
        return sessionStorage.getItem(id);
    };
    InfoComponent.prototype.modifyBook = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('input[name="photo"]');
        var myForm = document.getElementById('myIForm');
        var formData = new FormData(myForm);
        console.log(formData);
        this.book2.coverArt = inputEl.files.item(0);
        this.valid = this.checkBook.checkAddBook(this.book2);
        if (this.valid.book == true) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            //headers.append('Content-Type', 'application/json');
            this.http.put('http://localhost:3000/info', formData)
                .subscribe(function (res) {
                var answer = res.json();
                if (answer.success == true) {
                    _this.book = answer.book;
                    _this.toggleModify();
                    window.scrollTo(0, 0);
                    _this.flashMessage.show('Book was successfully updated!!', { cssClass: 'alert-success', timeout: 5000 });
                }
                else if (answer.success == false) {
                    window.scrollTo(0, 0);
                    _this.flashMessage.show('Could not update book. ' + answer.error, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/components/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_addbook_service__["a" /* AddBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_addbook_service__["a" /* AddBookService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _h || Object])
], InfoComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 150px;\r\n    border-style: solid;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner \">\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-4 mainBackground\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"login()\" id=\"myIForm\">\n        <fieldset>\n          <h1 class=\"text-center\">Login</h1>\n          <br>\n          <br>\n          <div class=\"form-group row\">\n            <div class=\"col-md-10 offset-1\">\n              <label for=\"number\" class=\"form-form-control-label \"><h5>Card Number or User Name</h5></label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"number\" name=\"number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-10 offset-1\">\n              <label for=\"password\" class=\"form-form-control-label\"><h5>Password</h5></label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div *ngIf=\"!found\" class=\"row\">\n            <span class=\"col-md-10 offset-1 alert alert-danger\" >Invalid Card Number or Password</span>\n          </div>\n          <br>\n          <br>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-outline-primary btn-lg\" value=\"Login\">\n            <div class=\"text-right\">\n              <a [routerLink]=\"['/forgot']\" (click)=\"toForget()\" >Forgot Password</a>\n            </div>\n          </div>\n        </fieldset>\n      </form>    \n    </div> \n  </div>\n  <br>\n  <br>\n  <br>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(http, el, router) {
        this.http = http;
        this.el = el;
        this.router = router;
        this.found = true;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var myForm = document.getElementById('myIForm');
        var formData = new FormData(myForm);
        if (!this.password) {
            this.found = false;
        }
        else if (this.password == "_") {
            this.found = false;
        }
        else {
            this.http.post('http://localhost:3000/login', formData)
                .subscribe(function (res) {
                var answer = res.json();
                if (answer.success == true) {
                    _this.found = true;
                    //set session data----------------------------------------------------------------------------------------
                    console.log(answer.user);
                    sessionStorage.setItem('token', answer.token);
                    sessionStorage.setItem('loggedIn', 'true');
                    sessionStorage.setItem('id', answer.user.id);
                    sessionStorage.setItem('user', answer.user.userType);
                    sessionStorage.setItem('number', answer.user.number);
                    sessionStorage.setItem('firstName', answer.user.firstName);
                    sessionStorage.setItem('lastName', answer.user.lastName);
                    _this.router.navigate(['/profile']);
                    //this.router.navigate(['/profile'], { queryParams: { number: answer.user.number}});          
                }
                else if (answer.success == false) {
                    window.scrollTo(0, 0);
                    _this.found = false;
                }
            });
        }
    };
    LoginComponent.prototype.toForget = function () {
        this.http.get('http://localhost:3000/forgot');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    list-style-type: none;\r\n} \r\n\r\n.input-group{\r\n    border-radius: 20px;\r\n    border-style: solid;  \r\n}\r\n\r\n.navbar-brand {\r\n    color:rgb(0, 0, 0);\r\n    font:30px Georgia;\r\n}\r\n\r\n/** Added by Pavan **/\r\n.navbar-brand2 {\r\n    color:rgb(0, 0, 0);\r\n    font:30px Verdana Sans-serif;\r\n    border: solid black 2px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 5px; \r\n    padding-right: 5px;\r\n    border-radius: 10px; \r\n    position:relative; \r\n    right: -50px;\r\n    text-decoration:none;\r\n\r\n    box-shadow:\r\n    0 0 0 2.5px hsl(0, 0%, 80%), \r\n    0 0 0 5px hsl(0, 0%, 90%); \r\n}\r\n\r\n.blur {\r\nbox-shadow:\r\n    0 0 0 10px hsl(0, 0%, 80%), \r\n    0 0 0 15px hsl(0, 0%, 90%); \r\n}\r\n\r\n/** changes by pavan **/\r\n#homebutton {\r\n    position: relative;\r\n    right: 10px;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n}\r\n/** changes by pavan **/\r\n#homebutton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n.splitter {\r\n    margin-top:5px;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#advancedbutton {\r\n    font: 16px Georgia;\r\n    position: relative;\r\n    left:980px;\r\n    color: white;\r\n}\r\n\r\n/** changes made by pavan **/\r\n#bookbutton {\r\n    color:white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 20px Georgia;\r\n    padding-top:10px;\r\n}\r\n#bookbutton:hover {\r\n    color:black;\r\n    background-color:white;\r\n    opacity:0.7;\r\n}\r\n\r\n/** Pavan added **/\r\n#topbookbutton {\r\n    position: absolute; \r\n    right: 67px;\r\n    top: 0px; \r\n    border: 2px solid rgb(28, 73, 99);  \r\n\r\n    padding: 11.5px;\r\n    color:black;\r\n}\r\n\r\n/** Pavan added **/\r\n#topbookbutton:hover {\r\n    color:white;\r\n    background-color:rgb(28, 73, 99); \r\n}\r\n\r\n/** Pavan added **/ \r\n.bg-light {\r\n    background-color: rgb(255, 255, 255) !important;\r\n    padding: 1%;\r\n}\r\n\r\n\r\n.bg-dark{\r\n    background-color: rgb(28, 73, 99) !important;\r\n    opacity: 0.9;\r\n    border-bottom: 5px solid rgb(28, 73, 99) !important;\r\n    width:90%;\r\n    margin-top:30px;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n}\r\n\r\n/** changes by pavan **/\r\n.search{\r\n    border-bottom-right-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-left-radius: 0px;\r\n    color:black;\r\n    position: relative;\r\n    right:0px;\r\n}\r\n\r\n/** changes by pavan **/\r\n.cat{\r\n    border-bottom-left-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-right-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    color:black;\r\n    position: relative;\r\n    right:0px;\r\n}\r\n\r\n/** changes by pavan **/\r\n.searchbar {\r\n    color:black;\r\n    position: relative;\r\n    right:140px;\r\n}\r\n\r\n/** added by pavan **/\r\n.myquery{\r\n    border: none;\r\n}\r\n\r\n#libraryname {\r\n    position: relative; \r\n    right: 200px;\r\n    color: red !important;\r\n}\r\n\r\n\r\n/** added by pavan **/\r\n#namebutton {\r\n    color:white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n    position: relative;\r\n    right: -260px;\r\n}\r\n\r\n#namebutton2 {\r\n    color:white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n    position: relative;\r\n    right: 140px; \r\n}\r\n\r\n/** added by pavan **/\r\n#addbookbutton {\r\n    position: relative;\r\n    right: -85px; \r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n}\r\n\r\n#addbookbutton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n/** added by pavan **/\r\n#profilebutton {\r\n    position: relative;\r\n    right: 140px;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;  \r\n}\r\n\r\n#profilebutton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n/** added by pavan **/\r\n#createUserButton {\r\n    position: relative;\r\n    right: 225px;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n}\r\n\r\n#createUserButton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n/** added by pavan **/\r\n#usersButton {\r\n    position: relative;\r\n    right: 225px;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;\r\n}\r\n\r\n#usersButton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n/** added by pavan **/\r\n#logoutButton {\r\n    position: absolute; \r\n    right: 67px;\r\n    top: 0px; \r\n    border: 2px solid rgb(28, 73, 99);  \r\n    padding: 11.5px;\r\n    color:black;\r\n}\r\n\r\n#logoutButton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n/** added by pavan **/\r\n#logoutButton:hover {\r\n    color:white;\r\n    background-color:rgb(28, 73, 99); \r\n    \r\n}\r\n\r\n/** added by pavan **/\r\n#advancedbutton2 {\r\n    font: 16px Georgia;\r\n    position: relative; \r\n    right: -915px;\r\n    margin-top:10px;\r\n    color: white;\r\n    white-space: nowrap;\r\n}\r\n\r\n#advancedbutton2:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n#advancedbutton:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n#advancedbutton3 {\r\n    font: 16px Georgia;\r\n    position: relative; \r\n    right: -980px;\r\n    color: white;\r\n}\r\n\r\n#advancedbutton3:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}\r\n\r\n#profilebutton1 {\r\n    position: relative;\r\n    right: 310px;\r\n    color: white;\r\n    background-color: rgb(28, 73, 99);\r\n    opacity:1;\r\n    font: 18px Georgia;  \r\n}\r\n\r\n#profilebutton1:hover {\r\n    color:white;\r\n    background-color:rgb(29, 121, 175);\r\n    opacity:1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand2\" href=\"#\">DDZP Library Application</a>\n  <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('loggedIn')!='true'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n    <a class=\"nav-link\" id=\"topbookbutton\" [routerLink]=\"['/login']\"> Welcome! Press here to Login</a>\n  </li>\n  <li *ngIf=\"this.sessionStorageItem('loggedIn')=='true'\" class=\"nav-item\">\n    <a class=\"nav-link\" id=\"logoutButton\" (click)=\"logout()\">Log Out</a>\n  </li>\n</nav>\n\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"homebutton\" [routerLink]=\"['/']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"addbookbutton\" [routerLink]=\"['/addbook']\">Add Book</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"this.sessionStorageItem('loggedIn')!='true'\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"advancedbutton\" [routerLink]=\"['/advancedsearch']\">Advanced Search</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"advancedbutton2\" [routerLink]=\"['/advancedsearch']\">Advanced Search</a>\n      </li>\n     <!--<li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"advancedbutton2\" [routerLink]=\"['/advancedsearch']\">Advanced Search</a>\n      </li> -->\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"this.sessionStorageItem('loggedIn')=='true'\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"advancedbutton3\" [routerLink]=\"['/advancedsearch']\">Advanced Search</a>\n      </li> \n      <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('user') !='admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <div *ngIf=\"this.sessionStorageItem('loggedIn')=='true'\"> \n        <a class=\"nav-link\" id=\"profilebutton\" [routerLink]=\"['/profile']\">Profile</a>\n       </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('user')=='admin'\"   [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"profilebutton1\" [routerLink]=\"['/profile']\">Profile</a> \n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"createUserButton\" [routerLink]=\"['/createuser']\">Create User</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"usersButton\" [routerLink]=\"['/users']\">Users</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" id=\"usersButton\" [routerLink]=\"['/returnbooks']\">Return Books</a>\n      </li>\n      <li > \n        <div *ngIf=\"this.sessionStorageItem('user')!='admin'\">\n                <span *ngIf=\"this.sessionStorageItem('loggedIn')=='true'\"  class=\"nav-link\" id=\"namebutton\"> Welcome {{this.sessionStorageItem('firstName')}}</span>\n        </div>\n      </li>\n      <li >\n        <span *ngIf=\"this.sessionStorageItem('user')=='admin'\" class=\"nav-link\" id=\"namebutton2\"> Welcome {{this.sessionStorageItem('firstName')}}</span>\n      </li>\n    </ul>\n    <!-- <span *ngIf=\"this.sessionStorageItem('loggedIn')=='true'\">{{this.sessionStorageItem('firstName')}}</span> -->\n    <form class=\"form-inline my-2 my-lg-0 searchbar\">\n      <div class=\"input-group\">\n        <select class=\"btn btn-primary dropdown-toggle cat\" [(ngModel)]=\"option\" name=\"option\" #option1>\n          <option *ngFor=\"let option of options\" value={{option}}>{{option}}</option>\n        </select>\n        <input class=\"myquery\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"query\" name=\"query\" #query1>\n        <button class=\"btn btn-primary search \" (click)=\"search(query1.value, option1.value)\">Search</button>\n      </div>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.option = "All";
        this.options = ["All", "ISBN", "Author", "Title", "Year", "Publisher"];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sessionStorageItem = function (id) {
        return sessionStorage.getItem(id);
    };
    NavbarComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.search = function (query, option) {
        var search = "basic";
        this.router.navigate(['/search'], { queryParams: { searchType: search, option: option, query: query }, skipLocationChange: false });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n}\r\n\r\n.myNavElement{\r\n    margin-top:20px;    \r\n} \r\n\r\n.reservations{\r\n    min-height: 300px;\r\n}\r\n\r\n.loans{\r\n    min-height: 300px;\r\n}\r\n\r\n.picture{\r\n    margin: 5px;\r\n    min-height: 100px;\r\n    min-width: 100px;\r\n    max-height:150px;\r\n    max-width:150px;\r\n}\r\n\r\n.book{\r\n    border: 1px solid rgba(185, 177, 177, 0.664);\r\n}\r\n\r\n\r\n.message{\r\n    padding: 15px;\r\n}\r\n.myButton{\r\n   margin: 10px;\r\n}\r\n\r\n.myContainer{ \r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n.reserve{\r\n    background-color: rgba(185, 177, 177, 0.664);\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.myNavContainer{\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n.mdButtons{\r\n    margin: 10px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container myNavContainer\">\n  <div class=\"row\">\n    <h1 class=\"col-md-12 text-center\">Welcome {{user.firstName}}</h1>\n  </div>\n  <!-- Nav Bar -->\n  <div class=\"myNav\">\n    <ul class=\"nav nav-tabs \">\n      <div id=\"profile\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"profile\")'>\n        <li>Profile</li>\n      </div>\n      <div id=changePassword class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"changePassword\")'>\n        <li>Change Password</li>\n      </div>\n      <div id=\"reservations\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"reservations\")'>\n        <li>Reservations</li>\n      </div>\n      <div id=\"loans\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"loans\")'>\n        <li>Loans</li>\n      </div>\n    </ul>\n  </div>\n\n  <!-- profile -->\n  <div *ngIf=\"nav.profile\" class=\"myContainer\">\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">User Type:</strong>\n      <p class=\"col-md-4\">{{user.userType}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\" *ngIf='user.userType==\"client\"'> Card Number:</strong>\n      <strong class=\"col-md-2 offset-1 text-right\" *ngIf='user.userType==\"admin\"'> User Name:</strong>\n      <p class=\"col-md-4\">{{user.number}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Name:</strong>\n      <p class=\"col-md-4\">{{user.firstName}} {{user.lastName}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Email:</strong>\n      <p class=\"col-md-4\" *ngIf=\"!edit\">{{user.email}}</p>\n      <input class=\"form-control col-md-5\" type=\"text\" *ngIf=\"edit\" [(ngModel)]=\"_email\" name=\"_email\">\n      <span class=\"col-md-3 alert alert-danger\" *ngIf=\"edit&&(!valid.email)\">Invalid Email</span>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Phone Number:</strong>\n      <p class=\"col-md-4\" *ngIf=\"!edit\">{{user.phoneNumber}}</p>\n      <input class=\"form-control col-md-5\" type=\"text\" *ngIf=\"edit\" [(ngModel)]=\"_phoneNumber\" name=\"_phoneNumber\">\n      <span class=\"col-md-3 alert alert-danger\" *ngIf=\"edit&&(!valid.phone)\">Invalid Phone Number\n        <br>Use xxx-xxx-xxxx Format</span>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Address:</strong>\n      <div class=\"col-md-4\">\n        <p>\n          {{user.street}}\n          <span *ngIf=\"user.apt\">apt&nbsp;{{user.apt}}</span>\n        </p>\n        <p>{{user.city}}, {{user.province}}</p>\n        <p>{{user.postalCode}}</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class=\"row\">\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary\" *ngIf=\"!edit\" (click)=\"toggleEdit()\">Edit Profile</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary btn-lg\" *ngIf=\"edit\" (click)=\"submit()\">Submit</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-danger btn-lg\" *ngIf=\"edit\" (click)=\"toggleEdit()\">Cancel</button>\n    </div>\n    <br>\n    <br>\n    <br>\n  </div>\n\n  <!-- Change Password -->\n  <div *ngIf=\"nav.changePassword\" class=\"myContainer changePassword\">\n    <div class=\"row\">\n      <h1 class=\"col-md-12 text-center\">Change Password</h1>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class=\"row\">\n      <label for=\"password\" class=\"form-form-control-label col-md-3 offset-1 text-right\">\n        <h5>Password</h5>\n      </label>\n      <input type=\"password\" class=\"form-control col-md-5 \" [(ngModel)]=\"password\" name=\"password\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <br>\n    <div class=\"row\">\n      <label for=\"password2\" class=\"form-form-control-label col-md-3 offset-1 text-right\">\n        <h5>Confirm Password</h5>\n      </label>\n      <input type=\"password\" class=\"form-control col-md-5 \" [(ngModel)]=\"password2\" name=\"password2\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <br>\n    <div class=\"row\">\n      <span class=\"col-md-10 offset-1 alert alert-danger\" *ngIf=\"!validPass\">Invalid Password</span>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary btn\" (click)=\"submitPass()\">Submit</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-danger btn\" (click)=\"togglePass()\">Cancel</button>\n    </div>\n    <br>\n    <br>\n    <br>\n  </div>\n\n\n  <!-- reservations -->\n  <div *ngIf=\"nav.reservations\" class=\"myContainer reservations\">\n    <div *ngIf=\"reservations.length==0; else loans\">\n      <h1>Currently No Reservations</h1>\n    </div>\n    <ng-template #loans>\n      <div *ngIf=\"reservations.length>0\">\n        <div class=\"card reserve\" *ngFor=\"let r of reservations; let i = index\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <img [src]=\"r.book.coverArt\" id=\"myPic\" class=\"picture\">\n            </div>\n            <div class=\"col-md-6\">\n              <h6>ISBN: {{r.book.isbn}}</h6>\n              <h6>Title: {{r.book.title}}</h6>\n              <h6>Author: {{r.book.authorFirstName}} {{r.book.authorLastName}}</h6>\n              <h6>{{r.book.reserve.length}} reservations / {{r.book.noCopies}} copies</h6>\n              <h6>Number {{findSpot(r)}} position in reserve queue</h6>\n              <!-- <h6>Reservation expiry date: {{moment(r.reservationExpiry).format(\"MMMM D, YYYY\")}}</h6> -->\n              <h6>Reservation expiry date: {{formatDate(r.reservationExpiry)}}</h6>\n            </div>\n            <div class=\"col-md-2\" id=\"btnAlignRight\">\n              <button class=\"btn btn-outline-danger myButton\" (click)=\"cancelReservation(r._id)\">Cancel Reservation</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n\n\n  <!-- loans -->\n  <div *ngIf=\"nav.loans\" class=\"myContainer loans\">\n    <div *ngIf=\"loans.length==0; else reservations\">\n      <h1>Currently No Loans</h1>\n    </div>\n    <ng-template #reservations>\n      <div class=\"row card reserve\" *ngFor=\"let l of loans; let i = index\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <img [src]=\"l.book.coverArt\" id=\"myPic\" class=\"picture\">\n          </div>\n          <div class=\"col-md-6\">\n            <h6>ISBN: {{l.book.isbn}}</h6>\n            <h6>Book Code: {{l.bookCode}}</h6>\n            <h6>Title: {{l.book.title}}</h6>\n            <h6>Author: {{l.book.authorFirstName}} {{l.book.authorLastName}}</h6>\n            <h6>Loaned Out: {{formatDate(l.loanOutDate)}}</h6>\n            <h6>Due Date: {{formatDate(l.dueDate)}}</h6>\n          </div>\n          <!-- Renew Button -->\n          <div class=\"col-md-2 btns\">\n            <button class=\"btn btn-outline-success\" (click)=\"renew(l._id)\">Renew</button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n<!-- ORIGINAL CODE -->\n<!--\n  <div class=\"col-md-8 offset-2 mainBackground\" *ngIf=\"!editPass\">\n    <div class=\"row\">\n      <h1 class=\"col-md-12 text-center\">Welcome {{firstName}}</h1>\n    </div>\n    <div class=\"row\">\n        <h5 class=\"col-md-3 offset-1 text-right\" *ngIf=\"userType=='client'\">Card Number: &nbsp;</h5>\n        <h5 class=\"col-md-3 offset-1 text-right\" *ngIf=\"userType=='admin'\">User Name: &nbsp;</h5>\n        <h5 class=\"col-md-4\">{{number}}</h5>\n    </div>\n    <div class=\"row\">\n      <h5 class=\"col-md-3 offset-1 text-right\">Name: &nbsp;</h5>\n      <h5 class=\"col-md-4\">{{firstName}} {{lastName}}</h5>\n    </div>\n    <div class=\"row\">\n      <h5 class=\"col-md-3 offset-1 text-right\">Address: &nbsp;</h5>\n      <h5 class=\"col-md-4\">{{street}}&nbsp;<span *ngIf=\"apt\">apt&nbsp;{{apt}}</span> <br>\n        {{city}}, {{province}} <br>\n        {{postalCode}}\n      </h5>\n    </div>\n   \n\n    <div class=\"row\">\n        <h5 class=\"col-md-3 offset-1 text-right\">Email: &nbsp;</h5>\n        <h5 class=\"col-md-4\" *ngIf=\"!edit\">{{email}}</h5>\n        <input class=\"form-control col-md-5\" type=\"text\" *ngIf=\"edit\" [(ngModel)]=\"_email\" name=\"_email\"> \n        <span class=\"col-md-3 alert alert-danger\" *ngIf=\"edit&&(!valid.email)\">Invalid Email</span>   \n    </div>\n    \n    <div class=\"row\">\n        <h5 class=\"col-md-3 offset-1 text-right\">Phone Number: &nbsp;</h5>\n        <h5 class=\"col-md-4\" *ngIf=\"!edit\">{{phoneNumber}}</h5>\n        <input class=\"form-control col-md-5\" type=\"text\" *ngIf=\"edit\" [(ngModel)]=\"_phoneNumber\" name=\"_phoneNumber\">\n        <span class=\"col-md-3 alert alert-danger\" *ngIf=\"edit&&(!valid.phone)\">Invalid Phone Number Use xxx-xxx-xxxx Format</span>\n    </div>\n      <div class=\"row\">\n        <div *ngFor=\"let r of reservations\">\n          <h1>{{r}}</h1>\n          <button class=\"btn btn-outline-danger\" (click)=\"cancelReservation(r)\">Cancel</button>\n\n        </div>\n      </div>\n    <br>\n    <div class=\"row\">\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary\" *ngIf=\"!edit\" (click)=\"toggleEdit()\">Edit Profile</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary\" *ngIf=\"!edit\" (click)=\"togglePass()\">Change Password</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-primary btn-lg\" *ngIf=\"edit\" (click)=\"submit()\">Submit</button>\n      <button class=\"col-md-3 offset-1 btn btn-outline-danger btn-lg\" *ngIf=\"edit\" (click)=\"toggleEdit()\">Cancel</button>  \n    </div> \n    <br>\n    <br>\n    <br> \n  </div>\n\n  <!-- change Password ->\n  <div class=\"col-md-8 offset-2 mainBackground\" *ngIf=\"editPass\">\n    <div class=\"row\">\n      <h1 class=\"col-md-12 text-center\">Change Password</h1>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class=\"row\">\n      <label for=\"password\" class=\"form-form-control-label col-md-4 offset-1 text-right\"><h5>Password</h5></label>\n      <input type=\"password\" class=\"form-control col-md-5 offset-1\" [(ngModel)]=\"password\" name=\"password\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <br>\n    <div class=\"row\">\n      <label for=\"password2\" class=\"form-form-control-label col-md-4 offset-1 text-right\"><h5>Confirm Password</h5></label>\n      <input type=\"password\" class=\"form-control col-md-5 offset-1\" [(ngModel)]=\"password2\" name=\"password2\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <br>\n    <div class=\"row\">\n        <span class=\"col-md-10 offset-1 alert alert-danger\" *ngIf=\"!validPass\">Invalid Password</span>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <button class=\"col-md-3 offset-1 btn btn-outline-danger btn-lg\"  (click)=\"submitPass()\">Submit</button>     \n      <button class=\"col-md-3 offset-1 btn btn-outline-primary btn-lg\"  (click)=\"togglePass()\">Cancel</button>  \n    </div>\n    <br>\n    <br>\n    <br>\n  </div> \n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(http, router, activatedRoute, flashMessage) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.loanedBooks = [];
        this.loanBook = {
            bookId: String,
            bookCode: String
        };
        this.loans = [];
        this.reservations = [];
        this.valid = {
            email: true,
            phone: true,
            user: true
        };
        this.nav = {
            profile: true,
            changePassword: false,
            reservations: false,
            loans: false
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]();
        this.edit = false;
        this.userId = this.sessionStorageItem('id');
        this.editPass = false;
        this.validPass = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            header.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
            _this.http.get('/profile', { headers: header, search: { number: sessionStorage.getItem('number') } })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this._email = _this.email;
                _this._phoneNumber = _this.phoneNumber;
                /*
                this.email = data.email;
                this.firstName = data.firstName;
                this.lastName = data.lastName;
                this.number = data.number;
                this.phoneNumber = data.phoneNumber;
                this.userType = data.userType;
                this._email = this.email;
                this._phoneNumber = this.phoneNumber;
                this.street = data.street;
                this.apt = data.apt;
                this.city = data.city;
                this.postalCode = data.postalCode;
                this.province = data.province;
                this.reservations = data.reserve;
                */
                _this.changeNav('profile');
                _this.user = data;
                console.log(data);
            });
        });
    }
    ProfileComponent.prototype.renew = function (id) {
        var _this = this;
        console.log("id: " + id);
        this.http.put('http://localhost:3000/renew', { loanId: id }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.getLoans();
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ProfileComponent.prototype.cancelReservation = function (r) {
        var _this = this;
        this.http.put('http://localhost:3000/cancelreserve', { reserveId: r, userId: sessionStorage.getItem('id') }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Reservation for this book cancelled!', { cssClass: 'alert-success', timeout: 5000 });
                _this.getReserve();
            }
            else {
                _this.flashMessage.show('Reservation not cancelled!', { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log(data.success);
        });
    };
    ProfileComponent.prototype.toggleEdit = function () {
        this._email = this.user.email;
        this._phoneNumber = this.user.phoneNumber;
        this.edit = !this.edit;
    };
    ProfileComponent.prototype.sessionStorageItem = function (id) {
        return sessionStorage.getItem(id);
    };
    ProfileComponent.prototype.togglePass = function () {
        //this.editPass = !this.editPass;
        this.changeNav("profile");
        this.password = "";
        this.password2 = "";
    };
    ProfileComponent.prototype.validate = function (email, phone, valid) {
        valid.phone = true;
        valid.email = true;
        valid.user = true;
        //email
        if (!email) {
            valid.email = false;
        }
        else if (email.split('@').length != 2) {
            valid.email = false;
        }
        else {
            var temp = email.split('@');
            var temp2 = temp[1].split('.');
            if (email.includes(" ")) {
                valid.email = false;
            }
            if (temp2.length < 2) {
                valid.email = false;
            }
            else if (temp2[0].length < 1 || temp2[1].length < 1) {
                valid.email = false;
            }
        }
        //phone
        if (!phone) {
            valid.phone = false;
        }
        else if (phone.length < 10) {
            valid.phone = false;
        }
        var temp3 = phone.split('-');
        if (temp3.length != 3) {
            valid.phone = false;
        }
        if ((((temp3[0].trim().length) != 3))) {
            valid.phone = false;
        }
        if (((temp3[1].trim().length) != 3)) {
            valid.phone = false;
        }
        if (((temp3[2].trim().length) != 4)) {
            valid.phone = false;
        }
        //user
        if (valid.email && valid.phone) {
            valid.user = true;
        }
        else {
            valid.user = false;
        }
        return valid;
    };
    // EDITING USER INFO & CHANGING PASSWORD 
    ProfileComponent.prototype.submit = function () {
        var _this = this;
        this.validate(this._email, this._phoneNumber, this.valid);
        if (this.valid.user) {
            // var headers = new Headers({
            //   'Content-Type': 'application/json'
            // });
            this.http.put('http://localhost:3000/profile', { editPass: false, number: this.user.number, email: this._email, phoneNumber: this._phoneNumber })
                .subscribe(function (res) {
                _this.toggleEdit();
                var answer = res.json();
                _this.user.email = answer.email;
                _this.user.phoneNumber = answer.phoneNumber;
                _this.flashMessage.show('Profile Was Successfully Updated!', { cssClass: 'alert-success', timeout: 5000 });
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    ProfileComponent.prototype.submitPass = function () {
        var _this = this;
        if (this.password && this.password2) {
            if (this.password.trim().length > 0) {
                if (this.password == this.password2) {
                    this.http.put('http://localhost:3000/profile', { editPass: true, number: this.user.number, password: this.password })
                        .subscribe(function (res) {
                        _this.validPass = true;
                        _this.togglePass();
                        var answer = res.json();
                        _this.changeNav("profile");
                        _this.flashMessage.show('Password Was Successfully Updated!', { cssClass: 'alert-success', timeout: 5000 });
                        _this.password = "";
                        _this.password2 = "";
                    });
                }
                else {
                    this.validPass = false;
                }
            }
            else {
                this.validPass = false;
            }
        }
        else {
            this.validPass = false;
        }
    };
    //-----------------------------------------------------------------------------------------------------------------
    ProfileComponent.prototype.getLoans = function () {
        var _this = this;
        this.http.get('http://localhost:3000/getloans', { search: { 'userNumber': this.user.number } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.found) {
                _this.loans = [];
            }
            else {
                _this.loans = data.loans;
                for (var i = 0; i < _this.loans.length; i++) {
                    var tfn = _this.loans[i].book.coverArt.split("/");
                    var fileNm = tfn[tfn.length - 1];
                    _this.loans[i].book.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                }
                console.log(_this.loans);
            }
        });
    };
    ProfileComponent.prototype.getReserve = function () {
        var _this = this;
        this.http.get('http://localhost:3000/getreserves', { search: { 'userNumber': this.user.number } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            if (!data.found) {
                _this.reservations = [];
            }
            else {
                _this.reservations = data.reserves;
                for (var i = 0; i < _this.reservations.length; i++) {
                    var tfn = _this.reservations[i].book.coverArt.split("/");
                    var fileNm = tfn[tfn.length - 1];
                    _this.reservations[i].book.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                }
                console.log(_this.reservations);
            }
        });
    };
    //-----------------------------------------------------------------------------------------------------------------
    ProfileComponent.prototype.changeNav = function (name) {
        var temp = document.getElementsByClassName('active');
        for (var i = 0; i < temp.length; i++) {
            temp[i].classList.remove("active");
        }
        if (name === "profile") {
            this.nav.profile = true;
            this.nav.changePassword = false;
            this.nav.reservations = false;
            this.nav.loans = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "changePassword") {
            this.nav.profile = false;
            this.nav.changePassword = true;
            this.nav.reservations = false;
            this.nav.loans = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "reservations") {
            this.getReserve();
            this.nav.profile = false;
            this.nav.changePassword = false;
            this.nav.reservations = true;
            this.nav.loans = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "loans") {
            this.getLoans();
            this.nav.profile = false;
            this.nav.changePassword = false;
            this.nav.reservations = false;
            this.nav.loans = true;
            document.getElementById(name).className += " active";
        }
    };
    ProfileComponent.prototype.findSpot = function (reserve) {
        //console.log(reserve);
        //console.log(reserve._id);
        //console.log(reserve.book.reserve);
        return (reserve.book.reserve.findIndex(function (el) { return el == reserve._id; }) + 1);
    };
    ProfileComponent.prototype.formatDate = function (rDate) {
        return __WEBPACK_IMPORTED_MODULE_6_moment__(rDate).format("MMMM D, YYYY");
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 10px;\r\n    border-style: solid;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-8 offset-2 mainBackground\">\n    <div class=\"row\">\n      <h1 class=\"col-md-12 text-center\">Register</h1>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <p class=\"col-md-10 offset-1 alert alert-primary\">Please fill out the form to confirm your account information and enter a password for your account.</p>\n    </div>\n    <br>\n    <!-- Card Number -->\n    <div class=\"form-group row\">\n        <label for=\"number\" class=\"col-md-3 form-form-control-label text-right\"><h4>Card Number</h4></label>\n        <div class=\"col-md-5\">\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"number\" name=\"number\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n    </div>\n    <!-- First Name -->\n    <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"col-md-3 form-form-control-label text-right\"><h4>First Name</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"firstName\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n    <!-- Last Name -->\n    <div class=\"form-group row\">\n      <label for=\"lastName\" class=\"col-md-3 form-form-control-label text-right\"><h4>Last Name</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n    <!-- email --> \n    <div class=\"form-group row\">\n      <label for=\"email\" class=\"col-md-3 form-form-control-label text-right\"><h4>Email</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n      </div>\n    </div>\n    <!-- Phone Number -->\n    <div class=\"form-group row\">\n      <label for=\"phoneNumber\" class=\"col-md-3 form-form-control-label text-right\"><h4>Phone Number</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"phone\" class=\"form-control\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"xxx-xxx-xxxx\">\n      </div>\n    </div>\n    <!-- Password -->\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"form-form-control-label col-md-3 text-right\"><h4>Password</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n    <br>\n    <!-- Password2 -->\n    <div class=\"form-group row\">\n      <label for=\"password2\" class=\"form-form-control-label col-md-3 text-right\"><h4>Confirm Password</h4></label>\n      <div class=\"col-md-5\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password2\" name=\"password2\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\" *ngIf=\"!validPass\">\n      <span class=\"col-md-10 offset-1 alert alert-danger\">Invalid Password</span>\n    </div>\n    <button class=\"col-md-3 offset-1 btn btn-outline-primary btn-lg\" (click)=\"register()\">Register</button>\n    <a [routerLink]=\"['/login']\" class=\"col-md-3 offset-1 btn btn-outline-danger btn-lg\" >Cancel</a>\n    <br>\n    <br>\n  </div>\n  <br>\n  <br>\n  <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(http, flashMessage) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.validPass = true;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.password && this.password2) {
            if (this.password.trim().length > 0) {
                if (this.password == this.password2) {
                    this.http.put('http://localhost:3000/register', { number: this.number, password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email, phoneNumber: this.phoneNumber })
                        .subscribe(function (res) {
                        var answer = res.json();
                        if (answer.success) {
                            window.scrollTo(0, 0);
                            _this.flashMessage.show(answer.message, { cssClass: 'alert-success', timeout: 5000 });
                        }
                        else {
                            window.scrollTo(0, 0);
                            _this.flashMessage.show(answer.message, { cssClass: 'alert-danger', timeout: 5000 });
                        }
                    });
                }
                else {
                    this.validPass = false;
                }
            }
            else {
                this.validPass = false;
            }
        }
        else {
            this.validPass = false;
        }
    };
    RegisterComponent.prototype.togglePass = function () {
        this.validPass = !this.validPass;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/return/return.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-style: solid;\r\n    min-height: 200px;\r\n}\r\n\r\n.myInput{\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/return/return.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainBackground\">\n  <form class=\"form-horizontal\" id=\"myIForm\">\n    <fieldset class=\"col-md-8 offset-1 myInput\">\n      <label for=\"bookNumber\">Book Copy Number</label>\n      <input type=\"number\" id=\"bookNumber\" [(ngModel)]=\"bookNumber\" name=\"bookNumber\">\n      <button class=\"btn btn-primary\" (click)=\"returnbook()\">Return</button>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/return/return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReturnComponent = (function () {
    function ReturnComponent(http, flashMessage) {
        this.http = http;
        this.flashMessage = flashMessage;
    }
    ReturnComponent.prototype.ngOnInit = function () {
    };
    ReturnComponent.prototype.returnbook = function () {
        var _this = this;
        this.http.put('http://localhost:3000/return', { bookNumber: this.bookNumber }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.bookNumber = '';
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    return ReturnComponent;
}());
ReturnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-return',
        template: __webpack_require__("../../../../../src/app/components/return/return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/return/return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ReturnComponent);

var _a, _b;
//# sourceMappingURL=return.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book{\r\n    background-color: whitesmoke;   \r\n    /* border-style: solid; */\r\n    padding-bottom: 5px;\r\n    margin: 10px;\r\n    \r\n}\r\n\r\n#searchResults{\r\n    margin-left: 5px;\r\n    width: 90%;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n}\r\n\r\n.mdButtons{\r\n    margin: 10px;\r\n    \r\n}\r\n\r\n.sortOptions{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.page{\r\n    margin: 0 auto;\r\n     width:60%; \r\n     \r\n}\r\n.wholecontainer{\r\n    background-color:whitesmoke;\r\n    /* height:600px; */\r\n    width:90%;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n    margin-bottom: 10px;\r\n    opacity:0.8;\r\n}\r\n\r\n.picture{\r\n    margin: 5px;\r\n    min-height: 100px;\r\n    min-width: 100px;\r\n    max-height:150px;\r\n    max-width:150px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wholecontainer\">\n<p id=\"searchResults\" *ngIf=\"books.length == 1 && basic \" ><b>Displaying {{books.length}} search result for a book with {{option}}: \"<i>{{query}}</i>\"</b></p>\n<p id=\"searchResults\" *ngIf=\"books.length>1 && basic\"><b>Displaying {{books.length}} search results for books with {{option}}: \"<i>{{query}}</i>\"</b></p>\n<p id=\"searchResults\" *ngIf=\"books.length==0\"><b>Could Not Find Any Books</b></p>\n<p id=\"searchResults\" *ngIf=\"books.length==1 && advanced\"><b>Displaying {{books.length}} search result</b></p>\n<p id=\"searchResults\" *ngIf=\"books.length>1 && advanced\"><b>Displaying {{books.length}} search results</b></p>\n\n  <div *ngIf=\"!books; else display\">\n    <p>Could Not Find Any Books</p>\n  </div>\n  <div class=\"container sortOptions\" *ngIf=\"books.length>1\">\n      Sort By &nbsp;\n      <select class=\"btn btn-primary dropdown-toggle cat\" [(ngModel)]=\"sortChoice\" name=\"sortChoice\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor = \"let s of sortBy\" >{{s}}</option>\n      </select>\n      &nbsp; Order By &nbsp;\n      <select class=\"btn btn-primary dropdown-toggle cat\" [(ngModel)]=\"reverse\" name=\"reverse\" >\n        <option [ngValue]=\"false\" (click)=\"sort(false)\">Ascending</option>\n        <option [ngValue]=\"true\" (click)=\"sort(true)\">Descending</option>\n      </select>\n  </div>\n  <div class=\"container col-md-10 col-md-offset-1\">\n    <div *ngFor=\"let book of books | orderBy: sortChoice: reverse | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\" #display class=\"container col-md-12 card book\">\n      <div class=\"row col-md-12\">\n        <div class=\"col-md-3\">\n          <a (click)=\"info(book.id)\">\n            <img [src]=\"sanitizer.bypassSecurityTrustUrl(book.coverArt)\" alt=\"temp\" target=\"_blank\" class=\"picture\">\n          </a>\n        </div>\n        \n          <div class=\"col-md-5\">\n              <a (click)=\"info(book.id)\">\n            <h5 class=\"card-title\">\n              {{book.title}}\n            </h5>\n            {{book.authorLastName}}, {{book.authorFirstName}}<br>\n            {{book.publisher}}, {{book.year}}<br>\n            ISBN: {{book.isbn}}<br>\n            Number of Copies: {{book.noCopies}}<br>\n            Number of Reserves: {{book.reserve.length}}<br>\n            Language: {{book.language}}<br>\n          </a>\n          </div>\n         \n        <div class=\"col-md-2 offset-2 btns\">\n          <button class=\"btn btn-outline-secondary mdButtons\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" (click)=\"modifyBook(book.id)\" >modify</button>\n          <button class=\"btn btn-outline-danger mdButtons\" (click)=\"deleteBook(book.id)\" *ngIf=\"this.sessionStorageItem('user')=='admin'\" >delete</button>\n          <button class=\"btn btn-outline-secondary mdButtons\" *ngIf=\"this.sessionStorageItem('user')=='client'\" (click)=\"reserve(this.sessionStorageItem('id'),book.id)\">Reserve</button>\n        </div>\n      </div>\n    </div>    \n  </div>\n  <div class=\"container page\" >\n    <pagination-controls class=\"row page\" (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(http, router, activatedRoute, flashMessage, sanitizer) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.sanitizer = sanitizer;
        this.p = 1;
        this.sortBy = ['title', 'authorFirstName', 'authorLastName', 'isbn', 'publisher', 'year'];
        this.reservation = {
            'userId': Number,
            'bookId': Number
        };
        this.sortChoice = "title";
        this.reverse = false;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.activatedRoute.snapshot.queryParams['searchType'] == 'basic') {
                _this.basic = true;
                _this.advanced = false;
                if (_this.query != params.query || _this.option != params.option) {
                    _this.books = [];
                    _this.option = params.option.trim();
                    _this.query = params.query.trim();
                }
                else {
                    _this.books = [];
                }
                _this.http.get('/search', { search: { searchType: _this.activatedRoute.snapshot.queryParams['searchType'], option: _this.activatedRoute.snapshot.queryParams['option'], query: _this.activatedRoute.snapshot.queryParams['query'] } })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.books = data;
                    console.log(data);
                });
            }
            else if (_this.activatedRoute.snapshot.queryParams['searchType'] == 'advanced') {
                _this.basic = false;
                _this.advanced = true;
                _this.books = [];
                _this.http.get('/search', { search: { searchType: _this.activatedRoute.snapshot.queryParams['searchType'], option: _this.activatedRoute.snapshot.queryParams['option'], query: _this.activatedRoute.snapshot.queryParams['query'] } })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.books = data;
                });
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.sessionStorageItem = function (id) {
        return sessionStorage.getItem(id);
    };
    SearchComponent.prototype.info = function (id) {
        this.router.navigate(['/info'], { queryParams: { id: id }, skipLocationChange: false });
    };
    SearchComponent.prototype.modifyBook = function (id) {
        this.router.navigate(['/info'], { queryParams: { id: id, modify: true }, skipLocationChange: false });
    };
    SearchComponent.prototype.deleteBook = function (id) {
        this.router.navigate(['/info'], { queryParams: { id: id, delete: true }, skipLocationChange: false });
    };
    SearchComponent.prototype.sort = function (val) {
        if (val) {
            this.reverse = true;
        }
        else {
            this.reverse = true;
        }
    };
    SearchComponent.prototype.reserve = function (id, bookId) {
        var _this = this;
        this.reservation.bookId = bookId;
        this.reservation.userId = id;
        this.http.post('http://localhost:3000/reserve', { userId: id, bookId: bookId }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log(data.success);
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myNavElement{\r\n    margin-top:20px;    \r\n} \r\n\r\nli{\r\n    font-weight: bold;\r\n}\r\n\r\n.myNavContainer{\r\n    background-color: white;\r\n    margin-top: 10px;\r\n    padding-bottom: 20px;\r\n   \r\n}\r\n.reservations{\r\n    min-height: 300px;\r\n}\r\n\r\n.loans{\r\n    min-height: 300px;\r\n}\r\n\r\n.picture{\r\n    margin: 5px;\r\n    min-height: 100px;\r\n    min-width: 100px;\r\n    max-height:150px;\r\n    max-width:150px;\r\n}\r\n\r\n.book{\r\n    border: 1px solid rgba(185, 177, 177, 0.664);\r\n}\r\n .message{\r\n     padding: 15px;\r\n }\r\n.myButton{\r\n    margin: 10px;\r\n}\r\n\r\n.basket{\r\n    /* min-height: 120px; */\r\n    margin-bottom: 200 px;\r\n}\r\n.myContainer{ \r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n.reserve{\r\n    background-color: rgba(185, 177, 177, 0.664);\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.checkoutContainer{\r\n    margin-top: 10px;\r\n    min-height: 300px;  \r\n}\r\n\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container myNavContainer\">\n  <!-- Nav Bar -->\n  <div class=\"myNav\">\n    <ul class=\"nav nav-tabs \">\n      <div id=\"checkout\" class=\"col-md-2 myNavElement nav-item nav-link active\" (click)='changeNav(\"checkout\")'>\n        <li>Checkout</li>\n      </div>\n      <div id=\"profile\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"profile\")'>\n        <li>Profile</li>\n      </div>\n      <div id=\"modify\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"modify\")'>\n        <li>Edit User</li>\n      </div>\n      <div id=\"reservations\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"reservations\")'>\n        <li>Reservations</li>\n      </div>\n      <div id=\"loans\" class=\"col-md-2 myNavElement nav-item nav-link\" (click)='changeNav(\"loans\")'>\n        <li>Loans</li>\n      </div>\n    </ul>\n  </div>\n  <!-- checkout -->\n  <div *ngIf=\"nav.checkout\" class=\"checkoutContainer\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2>{{user.number}} - {{user.firstName}} {{user.lastName}}</h2>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <h4 class=\"col-md-5 text-right\">Book code</h4>\n          <input type=\"text\" class=\"col-md-4\" [(ngModel)]=\"book\" name=\"book\" autofocus>\n          <div class=\"col-md-3\">\n            <button class=\"btn btn-primary\" (click)=\"addBook(book)\">Checkout</button>\n          </div>\n        </div>\n        <br>\n        <div class=\"row message\" *ngIf=\"message\">\n          <div class=\"col-md-12 alert-danger message\">\n            <span>{{message}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-7\" *ngIf=\"books.length>0\">\n        <div class=\"card card-header bg-faded basket\">\n          <div *ngFor=\" let b of books; let i = index \" class=\"row book\">\n            <div class=\"col-md-8\">\n              <span>ISBN: {{b.isbn}}</span>\n              <br>\n              <span>Book Code: {{b.copies}}</span>\n              <br>\n              <span>Title: {{b.title}}</span>\n              <br>\n              <span>Author: {{b.authorFirstName}} {{b.authorLastName}}</span>\n              <br>\n            </div>\n            <div class=\"col-md-4\">\n              <button class=\"btn btn-outline-danger myButton\" (click)=\"removeBook(i)\">Remove</button>\n            </div>\n          </div>\n          <button class=\"btn btn-outline-secondary myButton\" (click)=\"checkout()\">Checkout</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <a class=\"btn btn-outline-secondary myButton\" routerLink=\"/users\">Select Another User</a>\n        </div>\n      </div>\n  </div>\n  <!-- profile -->\n  <div *ngIf=\"nav.profile\" class=\"myContainer\">\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">User Type:</strong>\n      <p class=\"col-md-4\">{{user.userType}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\" *ngIf='user.userType==\"client\"'> Card Number:</strong>\n      <strong class=\"col-md-2 offset-1 text-right\" *ngIf='user.userType==\"admin\"'> User Name:</strong>\n      <p class=\"col-md-4\">{{user.number}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Name:</strong>\n      <p class=\"col-md-4\">{{user.firstName}} {{user.lastName}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Email:</strong>\n      <p class=\"col-md-4\">{{user.email}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Phone Number:</strong>\n      <p class=\"col-md-4\">{{user.phoneNumber}}</p>\n    </div>\n    <div class=\"row\">\n      <strong class=\"col-md-2 offset-1 text-right\">Address:</strong>\n      <div class=\"col-md-4\">\n        <p>\n          {{user.street}}\n          <span *ngIf=\"user.apt\">apt&nbsp;{{user.apt}}</span>\n        </p>\n        <p>{{user.city}}, {{user.province}}</p>\n        <p>{{user.postalCode}}</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <a class=\"btn btn-outline-secondary myButton\" routerLink=\"/users\">Select Another User</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- loans -->\n  <div *ngIf=\"nav.loans\" class=\"myContainer loans\">\n    <div *ngIf=\"loans.length==0; else reservations\">\n      <h1>Currently No Loans</h1>\n    </div>\n    <ng-template #reservations>\n      <div class=\"card reserve\" *ngFor=\"let l of loans; let i = index\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <img [src]=\"l.book.coverArt\" id=\"myPic\" class=\"picture\">\n          </div>\n          <div class=\"col-md-6\">\n            <h6>ISBN: {{l.book.isbn}}</h6>\n            <h6>Book Code: {{l.bookCode}}</h6>\n            <h6>Title: {{l.book.title}}</h6>\n            <h6>Author: {{l.book.authorFirstName}} {{l.book.authorLastName}}</h6>\n            <h6>Loaned Out: {{formatDate(l.loanOutDate)}}</h6>\n            <h6>Due Date: {{formatDate(l.dueDate)}}</h6>\n          </div>\n          <div class=\"col-md-2 btns\">\n            <button class=\"btn btn-outline-success\" (click)=\"renew(l._id)\">Renew</button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <a class=\"btn btn-outline-secondary myButton\" routerLink=\"/users\">Select Another User</a>\n      </div>\n    </div>\n\n  </div>\n  <!-- reservations -->\n\n  <div *ngIf=\"nav.reservations\" class=\"myContainer reservations\">\n    <div *ngIf=\"reservations.length==0; else loans\">\n      <h1>Currently No Reservations</h1>\n    </div>\n    <ng-template #loans>\n      <div *ngIf=\"reservations.length>0\">\n        <div class=\"card reserve\" *ngFor=\"let r of reservations; let i = index\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <img [src]=\"sanitizer.bypassSecurityTrustUrl(r.book.coverArt)\" id=\"myPic\" class=\"picture\">\n            </div>\n            <div class=\"col-md-6\">\n              <h6>ISBN: {{r.book.isbn}}</h6>\n              <h6>Title: {{r.book.title}}</h6>\n              <h6>Author: {{r.book.authorFirstName}} {{r.book.authorLastName}}</h6>\n              <h6>{{r.book.reserve.length}} reservations / {{r.book.noCopies}} copies</h6>\n              <h6>Number {{findSpot(r)}} position in reserve queue</h6>\n              <!-- <h6>Reservation expiry date: {{moment(r.reservationExpiry).format(\"MMMM D, YYYY\")}}</h6> -->\n              <h6>Reservation expiry date: {{formatDate(r.reservationExpiry)}}</h6>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-outline-danger myButton\" (click)=\"cancelReservation(r._id)\">Cancel Reservation</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <a class=\"btn btn-outline-secondary myButton\" routerLink=\"/users\">Select Another User</a>\n      </div>\n    </div>\n  </div>\n  <!-- modify -->\n  <div *ngIf=\"nav.modify\" class=\"myContainer\">\n    <h1>{{user.userType}}</h1>\n    <form class=\"form-horizontal\" (ngSubmit)=\"editUser()\" id=\"myIForm\">\n      <fieldset>\n        <br>\n        <br>\n        <!-- name -->\n        <div class=\"form-group row\" *ngIf=\"user2.userType=='admin'\">\n          <label for=\"userName\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>User Name</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <h4>{{user.number}}</h4>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"firstName\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>First Name</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.firstName\" name=\"firstName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.firstName\">\n            <span>Must Provide A First Name</span>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"lastName\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Last Name</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.lastName\" name=\"lastName\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.lastName\">\n            <span>Must Provide A Last Name</span>\n          </div>\n        </div>\n        <!-- email -->\n        <div class=\"form-group row\">\n          <label for=\"email\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Email</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.email\" name=\"email\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.email\">\n            <span>Must Provide A Valid Email</span>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"phoneNumber\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Phone Number</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"phone\" class=\"form-control\" [(ngModel)]=\"user2.phoneNumber\" name=\"phoneNumber\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.phone\">\n            <span>Invalid Phone Number! Please Use The xxx-xxx-xxxx Format</span>\n          </div>\n        </div>\n        <!-- street number -->\n        <div class=\"form-group row\">\n          <label for=\"address.number\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Street</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.street\" name=\"street\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.address\">\n            <span>Must Provide A Street Number!</span>\n          </div>\n        </div>\n        <!-- apartment -->\n        <div class=\"form-group row\">\n          <label for=\"address.apt\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Apt</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.apt\" name=\"apt\">\n          </div>\n        </div>\n        <!-- city -->\n        <div class=\"form-group row\">\n          <label for=\"address.city\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>City</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.city\" name=\"city\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.city\">\n            <span>Must Provide A City! </span>\n          </div>\n        </div>\n        <!-- province -->\n        <div class=\"form-group row\">\n          <label for=\"address.province\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Province</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.province\" name=\"province\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.province\">\n            <span>Must Provide A Province!</span>\n          </div>\n        </div>\n        <!-- postal code -->\n        <div class=\"form-group row\">\n          <label for=\"address.postalCode\" class=\"col-md-3 form-form-control-label text-right\">\n            <h4>Postal Code</h4>\n          </label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user2.postalCode\" name=\"postalCode\">\n          </div>\n          <div class=\"alert alert-danger col-md-4\" *ngIf=\"!valid.postalCode\">\n            <span>Invalid Postal Code Format! Please use L1L1L1 </span>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-outline-dark btn-lg\" value=\"submit\">\n          <button class=\"btn btn-outline-dark btn-lg\" (click)=\"cancelButton()\">Cancel</button>\n        </div>\n      </fieldset>\n    </form>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <a class=\"btn btn-outline-secondary myButton\" routerLink=\"/users\">Select Another User</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = (function () {
    //-----------------------------------------------------------------------------------------------------------------
    function UserComponent(http, activatedRoute, router, flashMessage, sanitizer) {
        var _this = this;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.flashMessage = flashMessage;
        this.sanitizer = sanitizer;
        this.books = [];
        this.loanedBooks = [];
        this.loanBook = {
            bookId: String,
            bookCode: String
        };
        this.loans = [];
        this.reservations = [];
        this.nav = {
            checkout: true,
            profile: false,
            modify: false,
            reservations: false,
            loans: false
        };
        this.valid = {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true,
            city: true,
            postalCode: true,
            province: true,
            user: true
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]();
        this.userNumber = activatedRoute.snapshot.params['userNumber'];
        this.http.get('http://localhost:3000/users', { search: { 'userNumber': this.userNumber } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.found) {
                _this.router.navigate(['/users', "error"]);
            }
            else {
                _this.user = Object.assign({}, data.user);
                _this.user2 = Object.assign({}, data.user);
                _this.reservations = data.reservations;
                console.log(data);
            }
        });
    }
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.getLoans = function () {
        var _this = this;
        this.http.get('http://localhost:3000/getloans', { search: { 'userNumber': this.userNumber } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.found) {
                _this.loans = [];
            }
            else {
                _this.loans = data.loans;
                for (var i = 0; i < _this.loans.length; i++) {
                    var tfn = _this.loans[i].book.coverArt.split("/");
                    var fileNm = tfn[tfn.length - 1];
                    _this.loans[i].book.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                }
                console.log(_this.loans);
            }
        });
    };
    UserComponent.prototype.renew = function (id) {
        var _this = this;
        console.log("id: " + id);
        this.http.put('http://localhost:3000/renew', { loanId: id }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.getLoans();
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    UserComponent.prototype.getReserve = function () {
        var _this = this;
        this.http.get('http://localhost:3000/getreserves', { search: { 'userNumber': this.userNumber } })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.found) {
                _this.reservations = [];
            }
            else {
                _this.reservations = data.reserves;
                for (var i = 0; i < _this.reservations.length; i++) {
                    var tfn = _this.reservations[i].book.coverArt.split("/");
                    var fileNm = tfn[tfn.length - 1];
                    _this.reservations[i].book.coverArt = "http://localhost:3000/pics?image=" + fileNm;
                }
                console.log(_this.reservations);
            }
        });
    };
    UserComponent.prototype.addBook = function (book) {
        var _this = this;
        var inBooks = false;
        if (Number.isInteger(parseInt(book))) {
            this.http.get('http://localhost:3000/checkout', { search: { 'bookNumber': book } })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (!data.found) {
                    //console.log(data.found);
                    _this.message = "Can Not Find Book!";
                }
                else {
                    _this.message = "";
                    // this.books.push(data.book);
                    // this.books[this.books.length - 1].copies = book;
                    // this.book = "";
                    var bc = { bookId: data.book._id, bookCode: book };
                    _this.checkout(bc);
                    //console.log(data.book);
                }
            });
            // this.books.push(parseInt(book));
            // console.log(this.book);
            // this.book = "";
            // this.message = "";
        }
        else {
            this.message = "Invalid Book Code Format!";
        }
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.checkout = function (book) {
        var _this = this;
        //console.log("in checkout");
        //console.log(this.userNumber);
        //console.log(this.books);
        //console.log(this.loanedBooks);
        this.http.put('http://localhost:3000/loan', { loanedBooks: book, userId: this.userNumber }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                window.scrollTo(0, 0);
                _this.book = "";
                var saying = data.book.title + " Successfully checked out! Due back " + __WEBPACK_IMPORTED_MODULE_7_moment__(data.loan.dueDate).format('dddd, MMMM Do YYYY');
                _this.flashMessage.show(saying, { cssClass: 'alert-success', timeout: 9000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.removeBook = function (index) {
        this.books.splice(index, 1);
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.editUser = function () {
        var _this = this;
        this.validate(this.user2.firstName, this.user2.lastName, this.user2.email, this.user2.phoneNumber, this.user2.street, this.user2.city, this.user2.province, this.user2.postalCode, this.valid);
        if (this.valid.user) {
            this.http.put('http://localhost:3000/edituser', this.user2).map(function (res) { return res.json(); }).subscribe(function (res) {
                if (res.success == true) {
                    _this.user = Object.assign({}, _this.user2);
                    _this.changeNav('profile');
                    window.scrollTo(0, 0);
                    _this.flashMessage.show(res.message, { cssClass: 'alert-success', timeout: 5000 });
                }
                else if (res.success == false) {
                    _this.flashMessage.show(res.message, { cssClass: 'alert-danger', timeout: 5000 });
                    window.scrollTo(0, 0);
                }
            });
        }
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.cancelButton = function () {
        this.user2 = Object.assign({}, this.user);
        window.scrollTo(0, 0);
        this.changeNav('profile');
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.changeNav = function (name) {
        var temp = document.getElementsByClassName('active');
        for (var i = 0; i < temp.length; i++) {
            temp[i].classList.remove("active");
        }
        if (name === "checkout") {
            this.nav.checkout = true;
            this.nav.loans = false;
            this.nav.modify = false;
            this.nav.profile = false;
            this.nav.reservations = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "profile") {
            this.nav.checkout = false;
            this.nav.loans = false;
            this.nav.modify = false;
            this.nav.profile = true;
            this.nav.reservations = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "modify") {
            this.nav.checkout = false;
            this.nav.loans = false;
            this.nav.modify = true;
            this.nav.profile = false;
            this.nav.reservations = false;
            document.getElementById(name).className += " active";
        }
        else if (name === "reservations") {
            this.getReserve();
            this.nav.checkout = false;
            this.nav.loans = false;
            this.nav.modify = false;
            this.nav.profile = false;
            this.nav.reservations = true;
            document.getElementById(name).className += " active";
        }
        else if (name === "loans") {
            this.getLoans();
            this.nav.checkout = false;
            this.nav.loans = true;
            this.nav.modify = false;
            this.nav.profile = false;
            this.nav.reservations = false;
            document.getElementById(name).className += " active";
        }
    };
    //-----------------------------------------------------------------------------------------------------------------
    UserComponent.prototype.validate = function (firstName, lastName, email, phone, address, city, province, postalCode, valid) {
        valid.firstName = true;
        valid.lastName = true;
        valid.phone = true;
        valid.email = true;
        valid.user = true;
        valid.address = true;
        valid.city = true;
        valid.postalCode = true;
        valid.province = true;
        //names
        if (!firstName) {
            valid.firstName = false;
        }
        else if (firstName.trim().length == 0) {
            valid.firstName = false;
        }
        if (!lastName) {
            valid.lastName = false;
        }
        else if (lastName.trim().length == 0) {
            valid.lastName = false;
        }
        //email
        if (!email) {
            valid.email = false;
        }
        else if (email.split('@').length != 2) {
            valid.email = false;
        }
        else {
            var temp = email.split('@');
            var temp2 = temp[1].split('.');
            if (temp2.length < 2) {
                valid.email = false;
            }
            else if (temp2[0].length < 1 || temp2[1].length < 1) {
                valid.email = false;
            }
        }
        //phone
        if (!phone) {
            valid.phone = false;
        }
        else if (phone.length < 10) {
            valid.phone = false;
        }
        else {
            var temp3 = phone.split('-');
            if (temp3.length != 3) {
                valid.phone = false;
            }
            if ((((temp3[0].trim().length) != 3))) {
                valid.phone = false;
            }
            if (((temp3[1].trim().length) != 3)) {
                valid.phone = false;
            }
            if (((temp3[2].trim().length) != 4)) {
                valid.phone = false;
            }
        }
        //address
        if (!address) {
            valid.address = false;
        }
        else if (address.trim().length == 0) {
            valid.address = false;
        }
        //city
        if (!city) {
            valid.city = false;
        }
        else if (city.trim().length == 0) {
            valid.city = false;
        }
        //province
        if (!province) {
            valid.province = false;
        }
        else if (province.trim().length == 0) {
            valid.province = false;
        }
        //postal code
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        var match = regex.exec(postalCode);
        if (!postalCode) {
            valid.postalCode = false;
        }
        else if (postalCode.trim().length == 0) {
            valid.postalCode = false;
        }
        else if (!match) {
            valid.postalCode = false;
        }
        //user
        if (valid.firstName &&
            valid.lastName &&
            valid.email &&
            valid.phone &&
            valid.address &&
            valid.city &&
            valid.postalCode &&
            valid.province) {
            valid.user = true;
        }
        else {
            valid.user = false;
        }
        return valid;
    };
    UserComponent.prototype.findSpot = function (reserve) {
        //console.log(reserve);
        //console.log(reserve._id);
        //console.log(reserve.book.reserve);
        return (reserve.book.reserve.findIndex(function (el) { return el == reserve._id; }) + 1);
    };
    UserComponent.prototype.formatDate = function (rDate) {
        return __WEBPACK_IMPORTED_MODULE_7_moment__(rDate).format("MMMM D, YYYY");
    };
    UserComponent.prototype.cancelReservation = function (r) {
        var _this = this;
        this.http.put('http://localhost:3000/cancelreserve', { reserveId: r, userId: this.user._id }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Reservation for this book cancelled!', { cssClass: 'alert-success', timeout: 5000 });
                _this.getReserve();
            }
            else {
                _this.flashMessage.show('Reservation not cancelled!', { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log(data.success);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBackground{\r\n    background-color: whitesmoke;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-style: solid;\r\n    min-height: 200px;\r\n}\r\n\r\n.myInput{\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainBackground\">\n  <form class=\"form-horizontal\" id=\"myIForm\">\n    <fieldset class=\"col-md-8 offset-1 myInput\">\n      <label for=\"cardNumber\">Card Number</label>\n      <input type=\"number\" id=\"userNumber\" [(ngModel)]=\"userNumber\" name=\"cardNumber\" autofocus>\n      <button class=\"btn btn-primary\" (click)=\"findUser()\">Find</button>\n    </fieldset>\n    <br>\n    <div *ngIf=\"message.length>0\" class=\"row\">\n      <span class=\"col-md-10 offset-1 alert alert-danger\">{{message}}</span>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        if (activatedRoute.snapshot.params['error']) {
            this.message = "Could Not Find User!";
        }
        else {
            this.message = "";
        }
    }
    UsersComponent.prototype.findUser = function () {
        if (this.userNumber) {
            this.router.navigate(['/user', this.userNumber]);
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
        this.noCopies = 1;
    }
    return Book;
}());

//# sourceMappingURL=book.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/validation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookValidation; });
var BookValidation = (function () {
    function BookValidation() {
        this.title = true;
        this.isbn = true;
        this.year = true;
        this.publisher = true;
        this.description = true;
        this.language = true;
        this.noCopies = true;
        this.author = true;
        this.book = false;
        this.coverArt = true;
    }
    return BookValidation;
}());

//# sourceMappingURL=validation.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/addbook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_validation_model__ = __webpack_require__("../../../../../src/app/models/validation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBookService = (function () {
    function AddBookService() {
    }
    AddBookService.prototype.checkAddBook = function (book) {
        var valid = new (__WEBPACK_IMPORTED_MODULE_1__models_validation_model__["a" /* BookValidation */]);
        //--Cover Art---------------------------
        if (book.coverArt) {
            var filetypes = /jpeg|jpg|png|gif/;
            var mimetype = filetypes.test(book.coverArt.name);
            if (!mimetype) {
                valid.coverArt = false;
            }
        }
        //--title----------------------  
        if (!book.title) {
            valid.title = false;
        }
        else if (book.title.length < 1) {
            valid.title = false;
        }
        else {
            valid.title = true;
        }
        //--author--------------------------
        if ((!book.authorFirstName) || (!book.authorLastName)) {
            valid.author = false;
        }
        else if ((book.authorFirstName.length < 2) && (book.authorLastName.length < 2)) {
            valid.author = false;
        }
        else {
            valid.author = true;
        }
        //--isbn----------------------
        if (!book.isbn) {
            valid.isbn = false;
        }
        else if (book.isbn < 1000000000000 || book.isbn > 9999999999999) {
            valid.isbn = false;
        }
        else {
            valid.isbn = true;
        }
        //--publisher----------------------
        if (!book.publisher) {
            valid.publisher = false;
        }
        else if (book.publisher.length < 2) {
            valid.publisher = false;
        }
        else {
            valid.publisher = true;
        }
        //--language----------------------
        if (!book.language) {
            valid.language = false;
        }
        else if (book.language.length < 2) {
            valid.language = false;
        }
        else {
            valid.language = true;
        }
        //--year----------------------
        if (!book.year) {
            valid.year = false;
        }
        else if (book.year < 1) {
            valid.year = false;
        }
        else {
            valid.year = true;
        }
        //--copies----------------------
        if (!book.noCopies) {
            valid.noCopies = false;
        }
        else if (book.noCopies < 1) {
            valid.noCopies = false;
        }
        else {
            valid.noCopies = true;
        }
        if (valid.title == true &&
            valid.author == true &&
            valid.isbn == true &&
            valid.year == true &&
            valid.publisher == true &&
            valid.description == true &&
            valid.language == true &&
            valid.coverArt == true &&
            valid.noCopies == true) {
            valid.book = true;
        }
        else {
            valid.book = false;
        }
        return valid;
    };
    return AddBookService;
}());
AddBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AddBookService);

//# sourceMappingURL=addbook.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
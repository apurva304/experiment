webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatDialogComponent = (function () {
    function CatDialogComponent(db) {
        this.db = db;
    }
    CatDialogComponent.prototype.ngOnInit = function () {
    };
    CatDialogComponent.prototype.saveCategory = function (name, des) {
        this.cats = this.db.list('/cat');
        this.cats.push({
            'name': name,
            'des': des
        });
    };
    return CatDialogComponent;
}());
CatDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cat-dialog',
        template: __webpack_require__(361),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], CatDialogComponent);

var _a;
//# sourceMappingURL=cat-dialog.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(af, router, db) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.authState.subscribe(function (auth) {
            if (auth) {
                db.object('/brands/' + _this.af.auth.currentUser.uid, { preserveSnapshot: true }).subscribe(function (snap) {
                    if (snap.val() == null || snap.val() === null) {
                        _this.router.navigateByUrl('/createProfile');
                    }
                    else {
                        _this.router.navigateByUrl('/members');
                    }
                });
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(363),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = (function () {
    function MembersComponent(afAuth, router, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.brand = db.object('/brands' + '/' + this.afAuth.auth.currentUser.uid, { preserveSnapshot: true });
        this.brand.subscribe(function (snap) {
            if (snap.val() === null || snap.val() == null) {
                _this.router.navigateByUrl('/createProfile');
            }
        });
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/login');
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-members',
        template: __webpack_require__(364),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], MembersComponent);

var _a, _b, _c;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProductDialogComponent = (function () {
    function ProductDialogComponent(data, db, upSvc) {
        this.data = data;
        this.db = db;
        this.upSvc = upSvc;
    }
    ProductDialogComponent.prototype.ngOnInit = function () {
    };
    ProductDialogComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    ProductDialogComponent.prototype.uploadSingle = function (key) {
        if (this.selectedFiles.item(0) != null) {
            var file = this.selectedFiles.item(0);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_4__upload__["a" /* Upload */](file);
            this.upSvc.pushUpload(this.currentUpload, key);
        }
    };
    ProductDialogComponent.prototype.saveProduct = function (name, des) {
        var _this = this;
        this.productOb = this.db.list('/products');
        this.productOb.push({
            'name': name,
            'des': des,
            'catid': this.data.catid,
            'brandid': this.data.brandid,
            'brandName': this.data.brandinfo.brandName,
            'phoneNumber': this.data.brandinfo.phoneNumber,
            'address': this.data.brandinfo.address
        }).then(function (product) {
            _this.uploadSingle(product.key);
        });
    };
    return ProductDialogComponent;
}());
ProductDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-product-dialog',
        template: __webpack_require__(366),
        styles: [__webpack_require__(330)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__upload_service__["a" /* UploadService */]) === "function" && _b || Object])
], ProductDialogComponent);

var _a, _b;
//# sourceMappingURL=product-dialog.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(afAuth, db, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.editMode = false;
        this.brandProfile = db.object('/brands/' + this.afAuth.auth.currentUser.uid);
        this.phone = afAuth.auth.currentUser.phoneNumber;
        //this.brandProfile.subscribe(snap =>{
        // this.add = snap.child('address').val();
        //this.name = snap.child('brandName').val();
        //this.phone = snap.child('phoneNumber').val();
        // console.log(this.name);
        //    });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.save = function () {
        var _this = this;
        console.log(this.name + this.phone + this.add);
        //console.log({'brandName':companyName,'phoneNumber':phoneNumber,'address':address});
        this.brandProfile.set({ 'brandName': this.name, 'phoneNumber': this.phone, 'address': this.add }).then(function (res) {
            console.log('data updated');
            _this.router.navigateByUrl('/members');
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(368),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBH5c_IF3LswnqGy5m-pyu4MYQrTb5IuhM",
        authDomain: "krushant-11d8b.firebaseapp.com",
        databaseURL: "https://krushant-11d8b.firebaseio.com",
        projectId: "krushant-11d8b",
        storageBucket: "krushant-11d8b.appspot.com",
        messagingSenderId: "789089889986"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 233;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(147);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__members_members_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'members',
        component: __WEBPACK_IMPORTED_MODULE_3__members_members_component__["a" /* MembersComponent */],
        children: [],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        children: []
    }, {
        path: 'createProfile',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(afAuth) {
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (d) { return console.log(d); });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(360),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__members_members_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebaseui_angular__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_product_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_users_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__detail_detail_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_dialog_product_dialog_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cat_dialog_cat_dialog_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__upload_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var firebaseUiAuthConfig = {
    providers: [
        __WEBPACK_IMPORTED_MODULE_8_firebaseui_angular__["a" /* AuthProviders */].Phone
    ],
    method: __WEBPACK_IMPORTED_MODULE_8_firebaseui_angular__["b" /* AuthMethods */].Popup,
    tos: 'members'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__members_members_component__["a" /* MembersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__product_dialog_product_dialog_component__["a" /* ProductDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_23__cat_dialog_cat_dialog_component__["a" /* CatDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_8_firebaseui_angular__["c" /* FirebaseUIModule */].forRoot(firebaseUiAuthConfig)
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__product_dialog_product_dialog_component__["a" /* ProductDialogComponent */], __WEBPACK_IMPORTED_MODULE_23__cat_dialog_cat_dialog_component__["a" /* CatDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__upload_service__["a" /* UploadService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_dialog_product_dialog_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailComponent = (function () {
    function DetailComponent(db, afAuth, dialog, upSvc) {
        var _this = this;
        this.afAuth = afAuth;
        this.dialog = dialog;
        this.upSvc = upSvc;
        this.brandid = afAuth.auth.currentUser.uid;
        this.brandOb = db.object('/brands/' + this.brandid, { preserveSnapshot: true });
        this.brandOb.subscribe(function (snap) {
            _this.brandinfo = snap.val();
        });
        this.prods = db.list('/products');
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.openProductDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__product_dialog_product_dialog_component__["a" /* ProductDialogComponent */], {
            data: {
                'catid': this.catKey,
                'brandinfo': this.brandinfo,
                'brandid': this.brandid
            }
        });
    };
    DetailComponent.prototype.delete = function (key) {
        var _this = this;
        this.prods.remove(key).then(function () {
            _this.upSvc.deleteFileStorage(key);
        });
    };
    return DetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], DetailComponent.prototype, "catKey", void 0);
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__(362),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__upload_service__["a" /* UploadService */]) === "function" && _d || Object])
], DetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(db) {
        this.notificationListRef = db.list('/notification');
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.notify = function (title, message) {
        this.notificationListRef.push({ 'title': title, 'message': message });
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__(365),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cat_dialog_cat_dialog_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(db, dialog) {
        this.dialog = dialog;
        this.items = db.list('/cat');
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.click = function (id, name) {
        this.key = id;
        this.name = name;
    };
    ProductComponent.prototype.openCatDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__cat_dialog_cat_dialog_component__["a" /* CatDialogComponent */]);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__(367),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object])
], ProductComponent);

var _a, _b;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
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
    function UsersComponent(db) {
        this.users = db.list("/users");
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__(369),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".image{\r\n    width: 100px;\r\n    height : 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".login-card {\r\n  width: 400px;\r\n}\r\n.center{\r\n     margin: auto;\r\n    padding: 10px;\r\n}\r\n#lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".main-div{\r\n    min-height: 500px;\r\n}\r\n .selected {\r\n      background-color: #CFD8DC !important;\r\n      color: white;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".full-width {\r\n  width: 80%;\r\n}\r\n.center{\r\n    margin:auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".container{\r\n    min-height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>Add Category</h3>\n\n<md-dialog-content>\n  <md-input-container color=\"accent\">\n     <input mdInput #name placeholder=\"name\"/>\n  </md-input-container>\n  <md-input-container color=\"accent\">\n     <input mdInput #des placeholder=\"discription\"/>\n  </md-input-container>\n</md-dialog-content>\n\n<md-dialog-actions>\n    <button md-button md-dialog-close>Close</button>\n    <button md-button md-dialog-close = \"true\" (click)=\"saveCategory(name.value,des.value)\">save</button>\n</md-dialog-actions>"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let prod of prods | async\">\n    <md-card *ngIf=\"prod.catid == catKey && prod.brandid == brandid\" style=\"margin-left:20px;margin-right:20px;margin-bottom:20px;\" class=\"mat-elevation-z6 card\">\n      <img [src]=\"prod.imageUrl\" class=\"md-card-image image\" alt=\"image caption\">\n      <md-card-content>\n        <h3>{{prod.name}}</h3>\n        <p>{{prod.des}}</p>\n      </md-card-content>\n      <md-card-actions layout=\"row\" layout-align=\"end center\">\n        <button md-button (click)=\"delete(prod.$key)\">delete</button>\n      </md-card-actions>\n    </md-card>\n     </ng-container>\n  \n    \n \n<button md-fab (click)=\"openProductDialog()\" color=\"accent\" style=\"position: fixed;\n            bottom: 40px;\n            right: 40px;\">\n            <md-icon class=\"md-36|\">add</md-icon>\n        </button>"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"login-card center\">\n  <md-card-content>\n      <h1 class=\"center\">Log In or Register</h1>\n      <img class='md-card-image' src=\"assets/lock.svg\" alt=\"image caption\" id=\"lock\">\n  </md-card-content>\n  <md-card-actions class=\"center\">\n      <firebase-ui></firebase-ui>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-toolbar layout-fill flex color='primary'>\n        <div class=\"md-toolbar-tools\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n      <h3>App Title</h3>\n\t\t\t<button  md-raised-button (click)=\"logout()\" color=\"primary\">Logout</button>\n      </div>\n    </md-toolbar>\n      <md-tab-group md-stretch-tabs=\"always\" layout-fill flex>\n  \t\t<md-tab label=\"Products\">\n            <app-product style=\"height:100%;\"></app-product>\n  \t\t</md-tab>\n  \t\t<md-tab label=\"Notification\" >\n            <app-notification></app-notification>\n  \t\t</md-tab>\n  \t\t<md-tab label=\"Users\">\n            <app-users></app-users>\n  \t\t</md-tab>\n  \t</md-tab-group>\n</div>"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"margin:20px;\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n  <md-card-content  fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n    <h3>Notification</h3>\n    <md-input-container md-no-float >\n       <input mdInput placeholder=\"Title\" #title>\n    </md-input-container>\n    <md-input-container md-no-float >\n       <input mdInput placeholder=\"Message\" #message>\n    </md-input-container>\n  </md-card-content>\n  <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center end\">\n    <button md-raised-button (click)=\"notify(title.value,message.value)\" color=\"primary\">Send</button>\n    <button md-raised-button (click)=\"onClick\" color=\"accent\">Cancel</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>Add Product</h3>\n\n<md-dialog-content>\n\n  <div *ngIf=\"currentUpload\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n  </div>\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n</div>\n\n    <label>\n       <input type=\"file\" (change)=\"detectFiles($event)\">\n    </label>\n  <md-input-container color=\"accent\" >\n     <input mdInput #name placeholder=\"name\"/>\n  </md-input-container>\n  <md-input-container color=\"accent\" >\n     <input mdInput #des placeholder=\"description\"/>\n  </md-input-container>\n</md-dialog-content>\n\n<md-dialog-actions>\n    <button md-button md-dialog-close *ngIf=\"currentUpload?.progress == 100 || !currentUpload\">Close Dialog</button>\n    <button md-button (click)=\"saveProduct(name.value,des.value)\" *ngIf=\"currentUpload?.progress != 100\">save</button>\n</md-dialog-actions>"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n    <md-sidenav mode=\"side\" align=\"start\" opened=\"true\" style=\"width:25%;\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" class=\"mat-elevation-z6\">\n        <button md-raised-button (click)=\"openCatDialog()\" color=\"primary\" style=\"margin:10px;\">\n            <md-icon class=\"md-48\">add</md-icon>\n            <label >Add category</label>\n        </button>\n        <md-nav-list>\n            <a md-list-item *ngFor=\"let item of items | async\" (click)=\"click(item.$key,item.name)\" [class.selected]=\"item.$key === key\">\n                 <span md-line>{{item.name}}</span>   \n            </a>\n        </md-nav-list>\n    </md-sidenav>\n    <div class=\"main-div\">\n        <h3 *ngIf=\"!key\">No category Selected</h3>\n        <h3 *ngIf=\"name\">Category : {{name}}</h3>\n        <app-detail *ngIf=\"key\" [catKey]=\"key\"></app-detail>\n    </div>\n</md-sidenav-container>"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"margin:20px;\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n  <md-card-content fxFlex>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <h3>Please Provide the following information for your profile</h3>\n      </div>\n    <div fxLayout='row' fxLayoutAlign=\"center space-around\">\n      <md-icon class=\"md-36\">\n        \tperson\n\t\t\t</md-icon>\n      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n      <md-input-container color='accent' fxFlex=\"80\" >\n        <input mdInput placeholder=\"company name\" [(ngModel)]=\"name\" />\n      </md-input-container>\n    </div>\n     <div fxLayout='row' fxLayoutAlign=\"center space-around\">\n      <md-icon class=\"md-36\">\n        \tphone\n\t\t\t</md-icon>\n      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n      <md-input-container color='accent' fxFlex=\"80\">\n        <input mdInput placeholder=\"phone number\" [(ngModel)]=\"phone\" [disabled]=\"true\"/>\n      </md-input-container>\n    </div>\n     <div fxLayout='row' fxLayoutAlign=\"center space-around\">\n      <md-icon class=\"md-36\">\n        \tplace\n\t\t\t</md-icon>\n      \n      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n      <md-input-container color='accent'   fxFlex=\"80\" >\n        <input mdInput placeholder=\"address\" [(ngModel)]=\"add\" />\n      </md-input-container>\n    </div>\n  </md-card-content>\n  <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center end\">\n    <button md-raised-button (click)=\"save()\">Action</button>\n    <button md-raised-button (click)=\"edit()\">cancel</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" id = \"print-section\">\n<md-card style=\"margin:20px;width:fit-content\">\n  <md-card-content >\n    <table align=\"center\" border=\"1\">\n      <th>name</th>\n      <th>phone</th>\n      <th>city</th>\n      <th>IsFarmer</th>\n     \n      <th>zip code</th>\n\n      <tr *ngFor=\"let user of users | async\">\n        <td align=\"center\">{{user.name}}</td>\n        <td align=\"center\">{{user.phone}}</td>\n        <td align=\"center\">{{user.city}}</td>\n        <td align=\"center\">{{user.farmer}}</td>\n        <td align=\"center\">{{user.zip}}</td>\n      </tr>\n    </table>\n  </md-card-content>\n</md-card>\n</div>\n\n<button md-fab (click)=\"print()\" style=\"position: fixed;\n            bottom: 40px;\n            right: 40px;\">\n            <md-icon class=\"md-36|\">print</md-icon>\n        </button>\n</div>"

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(234);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(af, db) {
        this.af = af;
        this.db = db;
        this.basePath = '/uploads';
    }
    UploadService.prototype.pushUpload = function (upload, key) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + key).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload, key);
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveFileData = function (upload, key) {
        this.db.object('products/' + key + '/imageUrl').set(upload.url);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (key) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + key).delete();
    };
    return UploadService;
}());
UploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], UploadService);

var _a, _b;
//# sourceMappingURL=upload.service.js.map

/***/ })

},[619]);
//# sourceMappingURL=main.bundle.js.map
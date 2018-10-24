(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: ':key', component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\" class=\"brand dark\"><svg-icon src=\"/assets/icons/locity.svg\" [svgStyle]=\"{ 'width.px':50 }\"></svg-icon><h1>Locity</h1></a>\n<div class=\"view-box-wrapper\">\n  <div class=\"background\" [ngStyle]=\"{'background-image': backgroundImage, top: top, left: left}\"></div>\n  <div class=\"view-box\">\n    <div><div>\n      <router-outlet></router-outlet>\n    </div></div>\n  </div>\n</div>\n<a routerLink=\"/impressum\" class=\"impressum-link dark\">Impressum</a>\n<a routerLink=\"/\" class=\"copywrite-link dark\">© 2018 Locity GmbH</a>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  height: 140%;\n  width: 140%;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  transition: all 750ms ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbGVlL3Byb2plY3RzL2xvY2l0eS93ZWJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLG1CQUFrQjtFQUNsQixrQ0FBaUMsRUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTQwJTtcbiAgd2lkdGg6IDE0MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXMgZWFzZS1pbi1vdXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.service */ "./src/app/grid.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(grid) {
        var _this = this;
        this.grid = grid;
        this.images = ['hamburg1.jpg', 'hamburg2.jpg'];
        this.title = 'Locity GmbH';
        this.backgroundStyle = {};
        this.backgroundImage = "url('/assets/" + this.images[Math.floor((Math.random() * this.images.length))] + "')";
        this.grid.position.subscribe(function (index) {
            _this.top = -40 / _this.grid.rows * Math.floor(index / _this.grid.cols) + "%";
            _this.left = -40 / _this.grid.cols * (index % _this.grid.cols) + "%";
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
                _cell_cell_component__WEBPACK_IMPORTED_MODULE_7__["CellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["AngularSvgIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell/cell.component.html":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" [ngClass]=\"{'active': cellKey === currentKey, 'blank': cellKey === ''}\">\n  <nav *ngIf=\"cellKey === currentKey && (links.TL || links.BR)\" class=\"tlbr\">\n    <span class=\"pos-tl\"><a *ngIf=\"links.TL\" [routerLink]=\"getLink(links.TL)\">{{links.TL}}</a></span>\n    <span class=\"pos-br\"><a *ngIf=\"links.BR\" [routerLink]=\"getLink(links.BR)\">{{links.BR}}</a></span>\n  </nav>\n  <nav *ngIf=\"cellKey === currentKey && (links.BL || links.TR)\" class=\"trbl\">\n    <span class=\"pos-tr\"><a *ngIf=\"links.TR\" [routerLink]=\"getLink(links.TR)\">{{links.TR}}</a></span>\n    <span class=\"pos-bl\"><a *ngIf=\"links.BL\" [routerLink]=\"getLink(links.BL)\">{{links.BL}}</a></span>\n  </nav>\n  <nav *ngIf=\"cellKey === currentKey && (links.L || links.R)\" class=\"lr\">\n    <span class=\"pos-l\"><a *ngIf=\"links.L\" [routerLink]=\"getLink(links.L)\">{{links.L}}</a></span>\n    <span class=\"pos-r\"><a *ngIf=\"links.R\" [routerLink]=\"getLink(links.R)\">{{links.R}}</a></span>\n  </nav>\n  <main *ngIf=\"cellKey === currentKey\">\n    <h1>{{content}}</h1>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/cell/cell.component.scss":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  pointer-events: none; }\n  :host:after {\n    content: '';\n    padding-bottom: 86.6025403784439%;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbGVlL3Byb2plY3RzL2xvY2l0eS93ZWJzaXRlL3NyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQixFQU1yQjtFQVJEO0lBSUksWUFBVztJQUNYLGtDQUFpQztJQUNqQyxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jZWxsL2NlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBhZGRpbmctYm90dG9tOiA4Ni42MDI1NDAzNzg0NDM5JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/*!****************************************!*\
  !*** ./src/app/cell/cell.component.ts ***!
  \****************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid.service */ "./src/app/grid.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CellComponent = /** @class */ (function () {
    function CellComponent(grid) {
        this.grid = grid;
    }
    CellComponent.prototype.ngOnInit = function () {
        this.content = this.grid.getContent(this.cellKey);
        this.links = this.grid.getLinks(this.cellKey);
    };
    CellComponent.prototype.getLink = function (key) {
        return key === 'home' ? '/' : "/" + key;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "currentKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "cellKey", void 0);
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.scss */ "./src/app/cell/cell.component.scss")]
        }),
        __metadata("design:paramtypes", [_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"]])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/grid.service.ts":
/*!*********************************!*\
  !*** ./src/app/grid.service.ts ***!
  \*********************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridService = /** @class */ (function () {
    function GridService(titleService) {
        this.titleService = titleService;
        this.index = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.position = this.index.asObservable();
        this.cols = 8;
        this.directions = ['TL', 'TR', 'BL', 'BR', 'L', 'R'];
        this.layout = [
            '', '', '', '', '', '', '', '',
            '', 'kunden', 'kontakt', '', 'digitale-transformation', 'workshop-schulung', '', '',
            '', 'home', '', 'websites', 'schwerpunkte', 'ux-prototyping', '', '',
            '', 'offene-stellen', 'team', '', 'mobile-web-app', 'single-page-app', '', '',
            '', 'marco-lehmann', 'tobias-krogh', '', '', '', '', '',
            '', '', '', '', '', 'impressum', '', '',
            '', '', '', '', '', '', '', '',
        ];
        this.rows = Math.floor(this.layout.length / this.cols);
        this.cells = {
            home: {
                R: 'schwerpunkte'
            },
            'offene-stellen': {
                BR: ''
            },
            team: {
                L: ''
            },
            'marco-lehmann': {
                TL: ''
            },
            impressum: {
                TL: 'home'
            }
        };
    }
    GridService.prototype.getContent = function (key) {
        if (key === '') {
            return '';
        }
        return "Das ist der \"" + key + "\" Content";
    };
    GridService.prototype.setActive = function (index) {
        this.setTitle(this.layout[index]);
        this.index.next(index);
    };
    GridService.prototype.setTitle = function (key) {
        var title = 'Locity GmbH';
        if (key !== 'home') {
            title = key + " - " + title;
        }
        this.titleService.setTitle(title);
    };
    GridService.prototype.getLinks = function (key) {
        var links = {};
        if (key !== '') {
            var index = this.layout.indexOf(key);
            var row = Math.floor(index / this.cols);
            var offset = row % 2;
            for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
                var direction = _a[_i];
                if (this.cells[key] !== undefined && this.cells[key][direction] !== undefined) {
                    links[direction] = this.cells[key][direction];
                }
                else {
                    var linkIndex = -1;
                    switch (direction) {
                        case 'TL':
                            if (Math.floor((index - this.cols - offset) / this.cols) + 1 === row) {
                                linkIndex = index - this.cols - offset;
                            }
                            break;
                        case 'TR':
                            if (Math.floor((index - this.cols - offset + 1) / this.cols) + 1 === row) {
                                linkIndex = index - this.cols - offset + 1;
                            }
                            break;
                        case 'BL':
                            if (Math.floor((index + this.cols - offset) / this.cols) - 1 === row) {
                                linkIndex = index + this.cols - offset;
                            }
                            break;
                        case 'BR':
                            if (Math.floor((index + this.cols - offset + 1) / this.cols) - 1 === row) {
                                linkIndex = index + this.cols - offset + 1;
                            }
                            break;
                        case 'L':
                            if ((index - 1) % this.cols < index % this.cols) {
                                linkIndex = index - 1;
                            }
                            break;
                        case 'R':
                            if ((index + 1) % this.cols > index % this.cols) {
                                linkIndex = index + 1;
                            }
                            break;
                    }
                    if (linkIndex !== -1) {
                        links[direction] = this.layout[linkIndex];
                    }
                    else {
                        links[direction] = '';
                    }
                }
            }
        }
        return links;
    };
    GridService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], GridService);
    return GridService;
}());



/***/ }),

/***/ "./src/app/grid/grid.component.html":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cell *ngFor=\"let cellKey of layout; let i = index\" [currentKey]=\"key\" cellKey=\"{{cellKey}}\" [class]=\"getRowClass(i)\"></app-cell>\n"

/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  transition: all 500ms cubic-bezier(0.675, -0.28, 0.26, 1.295);\n  transition-timing-function: cubic-bezier(0.675, -0.28, 0.26, 1.295);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  will-change: transform;\n  display: grid;\n  grid-template-columns: repeat(8, 100%);\n  grid-template-rows: repeat(8, 85.567%);\n  grid-row-gap: 2.5%;\n  grid-column-gap: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbGVlL3Byb2plY3RzL2xvY2l0eS93ZWJzaXRlL3NyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQStEO0VBQy9ELG9FQUFxRTtFQUNyRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsdUNBQXNDO0VBQ3RDLHVDQUFzQztFQUN0QyxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNjc1LCAtMC4yODAsIDAuMjYwLCAxLjI5NSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NzUsIC0wLjI4MCwgMC4yNjAsIDEuMjk1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEwMCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCA4NS41NjclKTtcbiAgZ3JpZC1yb3ctZ2FwOiAyLjUlO1xuICBncmlkLWNvbHVtbi1nYXA6IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid.service */ "./src/app/grid.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridComponent = /** @class */ (function () {
    function GridComponent(route, grid, router, location) {
        var _this = this;
        this.route = route;
        this.grid = grid;
        this.router = router;
        this.location = location;
        this.cols = this.grid.cols;
        this.layout = this.grid.layout;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initKey();
            }
        });
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent.prototype.setPosition = function () {
        var index = this.layout.indexOf(this.key);
        this.grid.setActive(index);
        var row = Math.floor(index / this.cols);
        var col = index % this.cols;
        var offset = row % 2 === 0 ? -25 : 25;
        this.transform = "translate(" + (col * -102 + offset) + "%, " + (row * -88 + 21) + "%)";
    };
    GridComponent.prototype.initKey = function () {
        var key = this.route.snapshot.paramMap.get('key');
        if (key === '' || key === null || this.layout.indexOf(key) === -1) {
            key = 'home';
        }
        if (key === 'home') {
            this.location.go('/');
        }
        this.key = key;
        this.setPosition();
    };
    GridComponent.prototype.getRowClass = function (index) {
        var row = Math.floor(index / this.grid.cols);
        return row % 2 === 0 ? 'odd' : 'even';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.transform'),
        __metadata("design:type", String)
    ], GridComponent.prototype, "transform", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _grid_service__WEBPACK_IMPORTED_MODULE_3__["GridService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mlee/projects/locity/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
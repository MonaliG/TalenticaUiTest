(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./src/app/modules/pages/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/components/header/header.component */ "./src/app/modules/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/components/footer/footer.component */ "./src/app/modules/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'talentic-ui-test';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "p-col-12", "p-col-nogutter"], [1, "main-panel", "p-col-12", "p-col-nogutter"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_modules_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components/header/header.component */ "./src/app/modules/components/header/header.component.ts");
/* harmony import */ var _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/components/footer/footer.component */ "./src/app/modules/components/footer/footer.component.ts");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./src/app/modules/pages/home/home.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/gmap */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-gmap.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_services_home_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/services/home.service */ "./src/app/modules/services/home.service.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_modules_services_home_service__WEBPACK_IMPORTED_MODULE_14__["HomeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_gmap__WEBPACK_IMPORTED_MODULE_10__["GMapModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        primeng_gmap__WEBPACK_IMPORTED_MODULE_10__["GMapModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                    primeng_gmap__WEBPACK_IMPORTED_MODULE_10__["GMapModule"],
                    primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
                ],
                providers: [_modules_services_home_service__WEBPACK_IMPORTED_MODULE_14__["HomeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_button_0_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onBtnClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r10.btn.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.btn.label);
} }
class ButtonComponent {
    constructor() {
        this.btn = {
            label: 'submit',
            class: 'primary'
        };
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onBtnClick(event) {
        this.clickEvent.emit(event);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { btn: "btn" }, outputs: { clickEvent: "clickEvent" }, decls: 1, vars: 1, consts: [["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_button_0_Template, 2, 3, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.btn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n  margin: 0;\n  outline: none;\n  padding: 10px 30px;\n  width: auto;\n  cursor: pointer;\n  transition: 0.25s;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background: #f16739;\n  border: solid 3px #f16739;\n  border-radius: 50px;\n  color: white;\n}\nbutton.primary[_ngcontent-%COMP%]:hover {\n  color: #000;\n  background: red;\n  border-color: red;\n  transition: all 0.4s ease 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pZHQtMDEwNC9hbmd1bGFyIHByb2plY3QvdGFsZW50aWMtdWktdGVzdC9zcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQ0NOIiwiZmlsZSI6Ii4uLy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcblxuICAmLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICNmMTY3Mzk7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggI2YxNjczOTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgfVxuICB9XG59XG4iLCJidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogI2YxNjczOTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2YxNjczOTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { btn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/components/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/components/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [[1, "footer-wrap", "container"], [1, "p-grid"], [1, "p-col-12", "p-lg-3", "p-md-3"], [1, "para"], [1, "social-icons"], ["src", "/assets/footer/facebook.svg", "alt", ""], ["src", "/assets/footer/linkedin.svg", "alt", ""], ["src", "/assets/footer/twitter.svg", "alt", ""], [1, "p-col-12", "p-lg-6", "p-md-6", "logo"], ["src", "/assets/footer/footer-logo.svg", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "follow us on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-wrap[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 30px;\n  color: #cccccc;\n  margin: 10px 0;\n  text-align: left;\n}\n.footer-wrap[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.footer-wrap[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.footer-wrap[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n@media (max-width: 767px) {\n  .footer-wrap[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .footer-wrap[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pZHQtMDEwNC9hbmd1bGFyIHByb2plY3QvdGFsZW50aWMtdWktdGVzdC9zcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtBQ0ROO0FETUk7RUFDRSxrQkFBQTtBQ0pOO0FEU0E7RUFFSTtJQUNFLGdCQUFBO0VDUEo7RURTSTtJQUNFLGdCQUFBO0VDUE47QUFDRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXdyYXAge1xuICAucGFyYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubG9nbyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAucGFyYSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAuc29jaWFsLWljb25zIHtcbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3Rlci13cmFwIHtcbiAgICAubG9nbyB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBcbiAgICAgIC5wYXJhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIuZm9vdGVyLXdyYXAgLnBhcmEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2NjY2NjYztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9vdGVyLXdyYXAgLmxvZ28ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb290ZXItd3JhcCAubG9nbyAucGFyYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvb3Rlci13cmFwIC5zb2NpYWwtaWNvbnMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3Rlci13cmFwIC5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5mb290ZXItd3JhcCAubG9nbyAucGFyYSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/components/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/modules/services/home.service.ts");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../button/button.component */ "./src/app/button/button.component.ts");





const _c0 = function () { return { width: "30em" }; };
class HeaderComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.bannerBtn = {
            label: 'Get Started',
            class: 'primary'
        };
        this.displaySidebar = false;
    }
    ngOnInit() {
    }
    onGetStarted() {
    }
    onSidebar() {
        this.displaySidebar = true;
    }
    onMenuClick(e) {
        switch (e) {
            case 'Home':
                this.homeService.onHeaderMenuClick('Home');
                break;
            case 'Benefits':
                this.homeService.onHeaderMenuClick('Benefits');
                break;
            case 'Facilities':
                this.homeService.onHeaderMenuClick('Facilities');
                break;
            case 'Gallery':
                this.homeService.onHeaderMenuClick('Gallery');
                break;
            case 'Pricing':
                this.homeService.onHeaderMenuClick('Pricing');
                break;
            case 'Contact':
                this.homeService.onHeaderMenuClick('Contact');
                break;
            default:
                this.homeService.onHeaderMenuClick('Home');
                break;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 53, vars: 9, consts: [[1, "header", "desktop-view"], [1, "header-wrap", "flex"], [1, ""], ["src", "assets/logo.svg", "alt", ""], [1, "menu-wrap", "flex"], [3, "click"], [1, "header", "mobile-view"], [1, "flex"], ["src", "assets/logo.svg", "alt", "", 1, "logo"], ["src", "assets/banner-img.svg", "alt", "", 3, "click"], [3, "visible", "baseZIndex", "fullScreen", "dismissible", "visibleChange"], ["id", "Home", 1, "banner-wrap"], [1, "banner-txt-wrap", "desktop-view"], [1, "container"], [3, "btn", "clickEvent"], [1, "banner-txt-wrap", "mobile-view"], [1, "banner-logo", "desktop-view"], ["src", "assets/banner-img.svg", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_5_listener() { return ctx.onMenuClick("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_7_listener() { return ctx.onMenuClick("Benefits"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_9_listener() { return ctx.onMenuClick("Facilities"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_11_listener() { return ctx.onMenuClick("Gallery"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_13_listener() { return ctx.onMenuClick("Pricing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_15_listener() { return ctx.onMenuClick("Contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_21_listener() { return ctx.onSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-sidebar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function HeaderComponent_Template_p_sidebar_visibleChange_22_listener($event) { return ctx.displaySidebar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Best Co-working Space at Best Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Expect the best-in-class! An Alley with a record of successful startups is launching a top-notch co-working space with exclusive amenities, only for tech startups. Recreate history at Bootstrap Alley. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function HeaderComponent_Template_app_button_clickEvent_43_listener() { return ctx.onGetStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Brace Yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "An alley with a record of successful startups is launching a co-working space exclusively for tech startups. Recreate history at Bootstrap Alley, Baner, Pune. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function HeaderComponent_Template_app_button_clickEvent_50_listener() { return ctx.onGetStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displaySidebar)("baseZIndex", 10000)("fullScreen", true)("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btn", ctx.bannerBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btn", ctx.bannerBtn);
    } }, directives: [primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__["Sidebar"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".header-wrap[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.header-wrap[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  transition: 0.3s;\n}\n.header-wrap[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  padding-bottom: 5px;\n  border-bottom: 3px solid #f16739;\n  cursor: pointer;\n}\n.desktop-view[_ngcontent-%COMP%] {\n  display: block;\n}\n.mobile-view[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(0deg, #231f2033 0%, #000000 100%) 0% 0% no-repeat padding-box;\n  opacity: 0.8;\n  height: 64px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  color: white;\n  z-index: 9999;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flex[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n}\n.banner-wrap[_ngcontent-%COMP%] {\n  background: url(\"/assets/banner.png\");\n  height: 600px;\n  position: relative;\n}\n.banner-wrap[_ngcontent-%COMP%]   .banner-txt-wrap[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  text-align: center;\n  width: 100%;\n}\n.banner-wrap[_ngcontent-%COMP%]   .banner-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 55px;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  bottom: 0;\n}\n.banner-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 56px;\n  text-align: center;\n  text-shadow: 0px 0px 4px #999999bf;\n}\n.banner-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  text-shadow: 0px 0px 2px #444444bf;\n  margin-bottom: 30px;\n}\n.hamburger-icon[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 30px;\n  display: block;\n  padding: 0;\n  margin-bottom: 10px;\n}\n.hamburger-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.hamburger-icon[_ngcontent-%COMP%]   .search-margin[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.hamburger-icon[_ngcontent-%COMP%]   .search-margin[_ngcontent-%COMP%]:hover {\n  cursor: initial;\n}\n.hamburger-icon[_ngcontent-%COMP%]   .search-margin[_ngcontent-%COMP%]   .auto-complete[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media (max-width: 767px) {\n  .desktop-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-view[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .banner-wrap[_ngcontent-%COMP%] {\n    height: 450px;\n    background-position: center;\n  }\n  .banner-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 30px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pZHQtMDEwNC9hbmd1bGFyIHByb2plY3QvdGFsZW50aWMtdWktdGVzdC9zcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FERUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNBUjtBRE1BO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLHFHQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7RUFDRSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0hGO0FES0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNISjtBRE9JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNMTjtBRFNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDUEo7QURVRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDUko7QURZQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1RGO0FEV0U7RUFDRSxlQUFBO0FDVEo7QURZRTtFQUNFLFlBQUE7QUNWSjtBRFlJO0VBQ0UsZUFBQTtBQ1ZOO0FEYUk7RUFDRSxlQUFBO0FDWE47QURnQkE7RUFDRTtJQUNFLGFBQUE7RUNiRjs7RURnQkE7SUFDRSxjQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0VDYkY7RURlRTtJQUNFLGVBQUE7RUNiSjs7RURpQkE7SUFDRSxlQUFBO0VDZEY7RURlRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDYko7RURnQkU7SUFDRSxXQUFBO0VDZEo7QUFDRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXdyYXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgLm1lbnUtd3JhcCB7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjE2NzM5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kZXNrdG9wLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMjMxZjIwMzMgMCUsICMwMDAwMDAgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAwLjg7XG4gIGhlaWdodDogNjRweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFubmVyLXdyYXAge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2Jhbm5lci5wbmdcIik7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuYmFubmVyLXR4dC13cmFwIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRvcDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5iYW5uZXItbG9nbyB7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICM5OTk5OTliZjtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NDQ0NDRiZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5cbi5oYW1idXJnZXItaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNlYXJjaC1tYXJnaW4ge1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5hdXRvLWNvbXBsZXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kZXNrdG9wLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJhbm5lci13cmFwIHtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci13cmFwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhlYWRlci13cmFwIC5tZW51LXdyYXAgcCB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmhlYWRlci13cmFwIC5tZW51LXdyYXAgcDpob3ZlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjE2NzM5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNrdG9wLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMjMxZjIwMzMgMCUsICMwMDAwMDAgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAwLjg7XG4gIGhlaWdodDogNjRweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFubmVyLXdyYXAge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2Jhbm5lci5wbmdcIik7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYW5uZXItd3JhcCAuYmFubmVyLXR4dC13cmFwIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5iYW5uZXItd3JhcCAuYmFubmVyLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3R0b206IDA7XG59XG4uYmFubmVyLXdyYXAgaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjOTk5OTk5YmY7XG59XG4uYmFubmVyLXdyYXAgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NDQ0NDRiZjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhhbWJ1cmdlci1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oYW1idXJnZXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oYW1idXJnZXItaWNvbiAuc2VhcmNoLW1hcmdpbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5oYW1idXJnZXItaWNvbiAuc2VhcmNoLW1hcmdpbjpob3ZlciB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cbi5oYW1idXJnZXItaWNvbiAuc2VhcmNoLW1hcmdpbiAuYXV0by1jb21wbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kZXNrdG9wLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJhbm5lci13cmFwIHtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICAuYmFubmVyLXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAuaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIC5oZWFkZXIgLmxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/modules/services/home.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../button/button.component */ "./src/app/button/button.component.ts");







const _c0 = ["gmap"];
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r7.head);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.head);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.para);
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.label);
} }
function HomeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.contactUsForm.controls.name.errors.required);
} }
function HomeComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please eneter valid Email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.contactUsForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.contactUsForm.controls.email.errors.pattern);
} }
function HomeComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
} }
class HomeComponent {
    constructor(formBuilder, homeService) {
        this.formBuilder = formBuilder;
        this.homeService = homeService;
        this.benefitsList = [];
        this.facilitiesList = [];
        this.gallaryList = [];
        this.submitted = false;
        this.bookNowBtn = {
            label: 'Book Now',
            class: 'primary'
        };
        this.sendBtn = {
            label: 'Send',
            class: 'primary'
        };
    }
    ngOnInit() {
        this.getHomePageData();
        this.initContactForm();
        this.homeService.headerMenuClick.subscribe(response => {
            this.scroll(response);
        });
    }
    initMap() {
        const mapProperties = {
            center: new google.maps.LatLng(18.5204, 73.8567),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
    }
    scroll(e) {
        setTimeout(() => {
            const el = document.getElementById(e);
            el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    ngAfterViewInit() {
        console.log("afterinit");
        setTimeout(() => {
            this.initMap();
        }, 1000);
    }
    getHomePageData() {
        this.benefitsList = [
            { img: '/assets/benefits/like-minded-startup.svg', head: 'Like Minded Startups', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
            { img: '/assets/benefits/large-terrace.svg', head: 'Large Terrace', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
            { img: '/assets/benefits/ready-to-move-in.svg', head: 'Ready to Move in', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
            { img: '/assets/benefits/free-unlimited-wi-Fi.svg', head: 'Free Unlimited Wi-Fi', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
            { img: '/assets/benefits/located-on-main-road.svg', head: 'Located on Main Road', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
            { img: '/assets/benefits/hit-the-target.svg', head: 'Hit the Target', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
        ];
        this.facilitiesList = [
            { img: '/assets/facilities/facility1.svg', label: '24/7 Access' },
            { img: '/assets/facilities/facility2.svg', label: 'Spacious Cubicles' },
            { img: '/assets/facilities/facility3.svg', label: '24/7 Power Backup' },
            { img: '/assets/facilities/facility4.svg', label: 'Printer Facilities' },
            { img: '/assets/facilities/facility5.svg', label: 'CCTV & Access Cards' },
            { img: '/assets/facilities/facility6.svg', label: 'Fridge & Microwave' },
            { img: '/assets/facilities/facility7.svg', label: 'TV & Set Top Box' },
            { img: '/assets/facilities/facility8.svg', label: 'Reception Area' },
            { img: '/assets/facilities/facility9.svg', label: 'Large Cafeteria' },
            { img: '/assets/facilities/facility10.svg', label: 'TV Conference Rooms' },
            { img: '/assets/facilities/facility11.svg', label: 'Various Meeting Rooms' },
            { img: '/assets/facilities/facility12.svg', label: 'Postal Address' },
            { img: '/assets/facilities/facility13.svg', label: 'Large Open Terrace' },
            { img: '/assets/facilities/facility14.svg', label: 'Housekeeping Facilities' },
            { img: '/assets/facilities/facility15.svg', label: 'Parking Spaces' },
        ];
        this.gallaryList = [
            { img: 'assets/gallary/gallary1.png' },
            { img: 'assets/gallary/gallary2.png' },
            { img: 'assets/gallary/gallary3.png' },
            { img: 'assets/gallary/gallary4.png' },
            { img: 'assets/gallary/gallary5.png' },
            { img: 'assets/gallary/gallary6.png' },
        ];
    }
    initContactForm() {
        this.contactUsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]],
            message: [''],
        });
    }
    onSend() {
        debugger;
        console.log('test');
        this.submitted = true;
        if (this.contactUsForm.invalid) {
            return false;
        }
        else {
            console.log(this.contactUsForm.controls);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gmapElement = _t.first);
    } }, decls: 80, vars: 10, consts: [[1, "p-col-12", "p-col-nogutter"], ["id", "Benefits", 1, "benefits-wrap", "container"], [1, "p-col-12", "p-lg-8", "p-md-8", "p-lg-offset-2", "p-md-offset-2"], [1, "head"], [1, "para"], [1, "p-grid", "benefit-list"], ["class", "p-col-12 p-lg-4 p-md-4", 4, "ngFor", "ngForOf"], ["id", "Facilities", 1, "facilities-wrap"], [1, "container"], [1, "p-grid"], ["class", "p-col-12 p-md-3 p-lg-3 facility-txt-wrap", 4, "ngFor", "ngForOf"], ["id", "Gallery", 1, "gallary-wrap"], [1, "gallary-container"], ["class", "p-col-6 p-lg-4 p-md-4 p-col-nogutter", 4, "ngFor", "ngForOf"], ["id", "Pricing", 1, "pricing-wrap"], [1, "price-wrap"], [1, "info1"], [1, "info2"], [3, "btn", "clickEvent"], ["id", "Contact", 1, "contact-wrap", "p-col-12"], [1, "p-col-12", "p-lg-6", "p-md-6"], [1, "add1"], [1, "add2"], [1, "mob-no"], [1, "email"], [3, "formGroup"], [1, "p-col-12", "form-field", "pd0"], ["type", "text", "formControlName", "name", "placeholder", "Name*", "pInputText", ""], [4, "ngIf"], [1, "p-col-12", "form-field"], ["type", "text", "formControlName", "email", "placeholder", "Email Id*", "pInputText", ""], ["type", "text", "formControlName", "phone", "placeholder", "Contact No.", "minlength", "11", "maxlength", "13", "InputText", ""], ["formControlName", "message", "placeholder", "Message", "pInputTextarea", "", 3, "rows"], ["class", "form-errors", 4, "ngIf"], [1, "p-col-12", "google-map"], ["gmap", ""], [1, "p-col-12", "p-lg-4", "p-md-4"], [3, "src", "alt"], [1, "p-col-12", "p-md-3", "p-lg-3", "facility-txt-wrap"], [1, "p-col-6", "p-lg-4", "p-md-4", "p-col-nogutter"], [3, "src"], [1, "form-errors", 3, "hidden"], [1, "form-errors"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Check out our attractive pricing plan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "6000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "per month for single desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "plus taxes as applicable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function HomeComponent_Template_app_button_clickEvent_42_listener() { return ctx.onSend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Say Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "BOOTSTRAPALLEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "B-7/8, Anmol Pride, Baner Pune 411045");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+91 20 4075 1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "+91 20 4075 1177");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " bootstrap-alley@talentica.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Write to us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HomeComponent_div_68_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HomeComponent_div_71_Template, 5, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, HomeComponent_div_76_Template, 1, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "app-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function HomeComponent_Template_app_button_clickEvent_77_listener() { return ctx.onSend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benefitsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.facilitiesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gallaryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btn", ctx.bookNowBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactUsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactUsForm.controls.name.errors && (ctx.contactUsForm.controls.name.dirty || ctx.contactUsForm.controls.name.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactUsForm.controls.email.errors && (ctx.contactUsForm.controls.email.dirty || ctx.contactUsForm.controls.email.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactUsForm.controls.message.errors && (ctx.contactUsForm.controls.message.dirty || ctx.contactUsForm.controls.message.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btn", ctx.sendBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  height: 400px;\n  width: 100%;\n}\n\n.mb-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.banner-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner-wrap[_ngcontent-%COMP%]   .banner-txt-wrap[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  text-align: center;\n}\n\n.benefits-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n}\n\n.benefits-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 77px;\n  margin: 0 auto;\n  width: 77px;\n}\n\n.benefits-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #444444;\n  text-align: center;\n  margin-bottom: 5px;\n  margin-top: 15px;\n}\n\n.benefits-wrap[_ngcontent-%COMP%]   .benefit-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #666666;\n  text-align: center;\n  line-height: 20px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n\n.facilities-wrap[_ngcontent-%COMP%] {\n  background: #333333 0% 0% no-repeat padding-box;\n  color: white;\n  padding: 35px 0;\n  text-align: center;\n}\n\n.facilities-wrap[_ngcontent-%COMP%]   .facility-txt-wrap[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding: 15px 10px;\n}\n\n.facilities-wrap[_ngcontent-%COMP%]   .facility-txt-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #cccccc;\n}\n\n.facilities-wrap[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.facilities-wrap[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.facilities-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  margin-right: 20px;\n  width: 32px;\n}\n\n.gallary-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.gallary-wrap[_ngcontent-%COMP%]   .gallary-container[_ngcontent-%COMP%] {\n  padding: 50px 40px;\n}\n\n.pricing-wrap[_ngcontent-%COMP%] {\n  background: #fdba12 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 40px 0;\n}\n\n.pricing-wrap[_ngcontent-%COMP%]   .price-wrap[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  margin: 0 auto;\n  border: 1px solid #ffe8bb;\n  background: #ffe8bb;\n  border-radius: 50%;\n  padding: 40px 25px;\n  margin-bottom: 30px;\n}\n\n.pricing-wrap[_ngcontent-%COMP%]   .price-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 68px;\n  margin: 0;\n  position: relative;\n}\n\n.pricing-wrap[_ngcontent-%COMP%]   .price-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  top: 0;\n  left: 6px;\n  position: absolute;\n}\n\n.pricing-wrap[_ngcontent-%COMP%]   .price-wrap[_ngcontent-%COMP%]   .info1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1a1a1a;\n  margin: 5px 0;\n}\n\n.pricing-wrap[_ngcontent-%COMP%]   .price-wrap[_ngcontent-%COMP%]   .info2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #808080;\n  margin: 5px 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  margin: 0 0 40px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  margin: 0;\n  width: 50%;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid #808080;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 18px;\n  color: #808080;\n  line-height: 21px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid #808080;\n  padding: 10px 0;\n  height: 50px;\n  width: 100%;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 18px;\n  color: #808080;\n  line-height: 21px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field.pd0[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field.pd0[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-errors[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 6px;\n  font-size: 16px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .add1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #4d4d4d;\n  line-height: 21.6px;\n  margin-bottom: 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .add2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 21.6px;\n  color: #4d4d4d;\n  margin-top: 5px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .mob-no[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #4d4d4d;\n  line-height: 21.6px;\n  margin-top: 20px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .mob-no[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .mob-no[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 10px;\n}\n\n.contact-wrap[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f16739;\n  line-height: 21.6px;\n  margin-top: 20px;\n}\n\n.google-map[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n@media (max-width: 767px) {\n  .facilities-wrap[_ngcontent-%COMP%]   .facility-txt-wrap[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .facilities-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .benefits-wrap[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n\n  .gallary-wrap[_ngcontent-%COMP%]   .gallary-container[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n  .gallary-wrap[_ngcontent-%COMP%]   .gallary-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pZHQtMDEwNC9hbmd1bGFyIHByb2plY3QvdGFsZW50aWMtdWktdGVzdC9zcmMvYXBwL21vZHVsZXMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiLi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNITjs7QURRQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURPSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTE47O0FEU0U7RUFDRSxZQUFBO0FDUEo7O0FEVUU7RUFDRSxZQUFBO0FDUko7O0FEV0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVEo7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGOztBRFlFO0VBQ0Usa0JBQUE7QUNWSjs7QURjQTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWEY7O0FEYUU7RUFDRSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURhSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNYTjs7QURhTTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDWFI7O0FEZUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNiTjs7QURnQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNkTjs7QURtQkE7RUFDRSxlQUFBO0FDaEJGOztBRGtCRTtFQUNFLGdCQUFBO0FDaEJKOztBRGtCSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDaEJOOztBRG9CRTtFQUNFLG1CQUFBO0FDbEJKOztBRG9CSTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDbEJOOztBRG9CTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNsQlI7O0FEc0JJO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDcEJOOztBRHNCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNwQlI7O0FEd0JJO0VBQ0UsY0FBQTtBQ3RCTjs7QUR3Qk07RUFDRSxjQUFBO0FDdEJSOztBRDBCSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3hCTjs7QUQ0QkU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzFCSjs7QUQ2QkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzNCSjs7QUQ4QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM1Qko7O0FEOEJJO0VBQ0UsU0FBQTtBQzVCTjs7QUQ4Qk07RUFDRSxtQkFBQTtBQzVCUjs7QURpQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMvQko7O0FEbUNBO0VBQ0UsYUFBQTtBQ2hDRjs7QURtQ0E7RUFFSTtJQUNFLGNBQUE7RUNqQ0o7RURvQ0U7SUFDRSxjQUFBO0VDbENKOztFRHNDQTtJQUNFLGtCQUFBO0VDbkNGOztFRHVDRTtJQUNFLGtCQUFBO0VDcENKO0VEc0NJO0lBQ0UsYUFBQTtFQ3BDTjtBQUNGIiwiZmlsZSI6Ii4uL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1iLTMwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJhbm5lci13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5iYW5uZXItdHh0LXdyYXAge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5iZW5lZml0cy13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDc3cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDc3cHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC5iZW5lZml0LWxpc3Qge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZmFjaWxpdGllcy13cmFwIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMzVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmZhY2lsaXR5LXR4dC13cmFwIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogI2NjY2NjYztcbiAgICB9XG4gIH1cblxuICAuaGVhZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnBhcmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufVxuXG4uZ2FsbGFyeS13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5nYWxsYXJ5LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCA0MHB4O1xuICB9XG59XG5cbi5wcmljaW5nLXdyYXAge1xuICBiYWNrZ3JvdW5kOiAjZmRiYTEyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgLnByaWNlLXdyYXAge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZlOGJiO1xuICAgIGJhY2tncm91bmQ6ICNmZmU4YmI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDQwcHggMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiA2OHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvMSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLmluZm8yIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRhY3Qtd3JhcCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcblxuICAuaGVhZCB7XG4gICAgbWFyZ2luOiAwIDAgNDBweDtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5wZDAge1xuICAgICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tZXJyb3JzIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmFkZDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGxpbmUtaGVpZ2h0OiAyMS42cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5hZGQyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxLjZweDtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAubW9iLW5vIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIxLjZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZjE2NzM5O1xuICAgIGxpbmUtaGVpZ2h0OiAyMS42cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uZ29vZ2xlLW1hcCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZmFjaWxpdGllcy13cmFwIHtcbiAgICAuZmFjaWxpdHktdHh0LXdyYXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5iZW5lZml0cy13cmFwIHtcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHg7XG4gIH1cblxuICAuZ2FsbGFyeS13cmFwIHsgIFxuICAgIC5nYWxsYXJ5LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYi0zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5iYW5uZXItd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYW5uZXItd3JhcCAuYmFubmVyLXR4dC13cmFwIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmVuZWZpdHMtd3JhcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLmJlbmVmaXRzLXdyYXAgaW1nIHtcbiAgaGVpZ2h0OiA3N3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDc3cHg7XG59XG4uYmVuZWZpdHMtd3JhcCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmJlbmVmaXRzLXdyYXAgLmJlbmVmaXQtbGlzdCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZhY2lsaXRpZXMtd3JhcCB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDM1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhY2lsaXRpZXMtd3JhcCAuZmFjaWxpdHktdHh0LXdyYXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG4uZmFjaWxpdGllcy13cmFwIC5mYWNpbGl0eS10eHQtd3JhcCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5mYWNpbGl0aWVzLXdyYXAgLmhlYWQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZmFjaWxpdGllcy13cmFwIC5wYXJhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZhY2lsaXRpZXMtd3JhcCBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5nYWxsYXJ5LXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2FsbGFyeS13cmFwIC5nYWxsYXJ5LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHggNDBweDtcbn1cblxuLnByaWNpbmctd3JhcCB7XG4gIGJhY2tncm91bmQ6ICNmZGJhMTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5wcmljaW5nLXdyYXAgLnByaWNlLXdyYXAge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlOGJiO1xuICBiYWNrZ3JvdW5kOiAjZmZlOGJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDQwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcmljaW5nLXdyYXAgLnByaWNlLXdyYXAgaDMge1xuICBmb250LXNpemU6IDY4cHg7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByaWNpbmctd3JhcCAucHJpY2Utd3JhcCBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnByaWNpbmctd3JhcCAucHJpY2Utd3JhcCAuaW5mbzEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnByaWNpbmctd3JhcCAucHJpY2Utd3JhcCAuaW5mbzIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uY29udGFjdC13cmFwIHtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLmNvbnRhY3Qtd3JhcCAuaGVhZCB7XG4gIG1hcmdpbjogMCAwIDQwcHg7XG59XG4uY29udGFjdC13cmFwIC5oZWFkOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb250YWN0LXdyYXAgLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhY3Qtd3JhcCAuZm9ybS1maWVsZCBpbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC13cmFwIC5mb3JtLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmNvbnRhY3Qtd3JhcCAuZm9ybS1maWVsZCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXdyYXAgLmZvcm0tZmllbGQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uY29udGFjdC13cmFwIC5mb3JtLWZpZWxkLnBkMCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmNvbnRhY3Qtd3JhcCAuZm9ybS1maWVsZC5wZDAgaW5wdXQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5jb250YWN0LXdyYXAgLmZvcm0tZmllbGQgLmZvcm0tZXJyb3JzIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC13cmFwIC5hZGQxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbGluZS1oZWlnaHQ6IDIxLjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250YWN0LXdyYXAgLmFkZDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMS42cHg7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFjdC13cmFwIC5tb2Itbm8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBsaW5lLWhlaWdodDogMjEuNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3Qtd3JhcCAubW9iLW5vIHAge1xuICBtYXJnaW46IDA7XG59XG4uY29udGFjdC13cmFwIC5tb2Itbm8gcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFjdC13cmFwIC5lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmMTY3Mzk7XG4gIGxpbmUtaGVpZ2h0OiAyMS42cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5nb29nbGUtbWFwIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mYWNpbGl0aWVzLXdyYXAgLmZhY2lsaXR5LXR4dC13cmFwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZmFjaWxpdGllcy13cmFwIGltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYmVuZWZpdHMtd3JhcCB7XG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xuICB9XG5cbiAgLmdhbGxhcnktd3JhcCAuZ2FsbGFyeS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxuICAuZ2FsbGFyeS13cmFwIC5nYWxsYXJ5LWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }]; }, { gmapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gmap']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/services/home.service.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/services/home.service.ts ***!
  \**************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class HomeService {
    constructor() {
        this.headerMenuClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    onHeaderMenuClick(value) {
        this.headerMenuClick.next(value);
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/midt-0104/angular project/talentic-ui-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
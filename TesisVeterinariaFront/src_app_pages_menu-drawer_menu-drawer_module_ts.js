(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_menu-drawer_menu-drawer_module_ts"],{

/***/ 6931:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-drawer/menu-drawer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDrawerPageRoutingModule": () => (/* binding */ MenuDrawerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _menu_drawer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-drawer.page */ 2304);




const routes = [
    {
        path: '',
        component: _menu_drawer_page__WEBPACK_IMPORTED_MODULE_0__.MenuDrawerPage
    }
];
let MenuDrawerPageRoutingModule = class MenuDrawerPageRoutingModule {
};
MenuDrawerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuDrawerPageRoutingModule);



/***/ }),

/***/ 6817:
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-drawer/menu-drawer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDrawerPageModule": () => (/* binding */ MenuDrawerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _menu_drawer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-drawer-routing.module */ 6931);
/* harmony import */ var _menu_drawer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-drawer.page */ 2304);







let MenuDrawerPageModule = class MenuDrawerPageModule {
};
MenuDrawerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_drawer_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuDrawerPageRoutingModule
        ],
        declarations: [_menu_drawer_page__WEBPACK_IMPORTED_MODULE_1__.MenuDrawerPage]
    })
], MenuDrawerPageModule);



/***/ }),

/***/ 2304:
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-drawer/menu-drawer.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDrawerPage": () => (/* binding */ MenuDrawerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_menu_drawer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu-drawer.page.html */ 7928);
/* harmony import */ var _menu_drawer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-drawer.page.scss */ 9679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let MenuDrawerPage = class MenuDrawerPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
MenuDrawerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MenuDrawerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu-drawer',
        template: _raw_loader_menu_drawer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_drawer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuDrawerPage);



/***/ }),

/***/ 9679:
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-drawer/menu-drawer.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content, ion-list, ion-item, ion-icon, ion-label, ion-menu, ion-menu-toggle, div {\n  --color: rgb(0, 0, 0);\n  --background: #FFE333;\n}\n\n.inner-scroll scroll-y {\n  background: #FFE333;\n}\n\n.background-content {\n  background: #FFE333;\n}\n\n.md hydrated {\n  background: #FFE333;\n}\n\n.appcomponent {\n  --background: #FFE333;\n}\n\n.list-md {\n  --background: #FFE333;\n  background: #FFE333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZHJhd2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUM7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoibWVudS1kcmF3ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsaW9uLWxpc3QsaW9uLWl0ZW0saW9uLWljb24saW9uLWxhYmVsLGlvbi1tZW51LGlvbi1tZW51LXRvZ2dsZSxkaXZ7XHJcbiAgICAtLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkUzMzM7XHJcblxyXG4gIH1cclxuXHJcbi5pbm5lci1zY3JvbGwgc2Nyb2xsLXkge1xyXG4gIGJhY2tncm91bmQ6ICNGRkUzMzM7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxufVxyXG5cclxuLm1kIGh5ZHJhdGVke1xyXG4gIGJhY2tncm91bmQ6ICNGRkUzMzM7XHJcbn1cclxuXHJcblxyXG4uYXBwY29tcG9uZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRTMzMztcclxuIH1cclxuXHJcbiAubGlzdC1tZHtcclxuICAtLWJhY2tncm91bmQ6ICNGRkUzMzM7XHJcbiAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxuIH1cclxuIl19 */");

/***/ }),

/***/ 7928:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-drawer/menu-drawer.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu  class=\"appcomponent\" menuId=\"main-menu\" content-id=\"main\">\r\n      <ion-header>\r\n          <ion-toolbar>\r\n\r\n          </ion-toolbar>\r\n      </ion-header >\r\n      <ion-content  class=\"appcomponent\">\r\n          <ion-list class=\"appcomponent\">\r\n              <ion-item  class=\"appcomponent\">\r\n                  <ion-icon name=\"medkit\" slot=\"start\"> </ion-icon>\r\n                  <ion-label> Mi Perfil</ion-label>\r\n\r\n              </ion-item>\r\n              <ion-item  class=\"appcomponent\">\r\n                  <ion-icon name=\"log-out\" slot=\"start\"> </ion-icon>\r\n                  <ion-label > Salir</ion-label>\r\n\r\n              </ion-item>\r\n          </ion-list>\r\n      </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet  class=\"appcomponent\" id=\"main\"></ion-router-outlet>\r\n\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu-drawer_menu-drawer_module_ts.js.map
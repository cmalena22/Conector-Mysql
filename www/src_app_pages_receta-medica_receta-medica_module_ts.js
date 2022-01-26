(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_receta-medica_receta-medica_module_ts"],{

/***/ 9681:
/*!*********************************************************************!*\
  !*** ./src/app/pages/receta-medica/receta-medica-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaMedicaPageRoutingModule": () => (/* binding */ RecetaMedicaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _receta_medica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receta-medica.page */ 3413);




const routes = [
    {
        path: '',
        component: _receta_medica_page__WEBPACK_IMPORTED_MODULE_0__.RecetaMedicaPage
    }
];
let RecetaMedicaPageRoutingModule = class RecetaMedicaPageRoutingModule {
};
RecetaMedicaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecetaMedicaPageRoutingModule);



/***/ }),

/***/ 4236:
/*!*************************************************************!*\
  !*** ./src/app/pages/receta-medica/receta-medica.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaMedicaPageModule": () => (/* binding */ RecetaMedicaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _receta_medica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receta-medica-routing.module */ 9681);
/* harmony import */ var _receta_medica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receta-medica.page */ 3413);







let RecetaMedicaPageModule = class RecetaMedicaPageModule {
};
RecetaMedicaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _receta_medica_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecetaMedicaPageRoutingModule
        ],
        declarations: [_receta_medica_page__WEBPACK_IMPORTED_MODULE_1__.RecetaMedicaPage]
    })
], RecetaMedicaPageModule);



/***/ }),

/***/ 3413:
/*!***********************************************************!*\
  !*** ./src/app/pages/receta-medica/receta-medica.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaMedicaPage": () => (/* binding */ RecetaMedicaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_receta_medica_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./receta-medica.page.html */ 1294);
/* harmony import */ var _receta_medica_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receta-medica.page.scss */ 9296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let RecetaMedicaPage = class RecetaMedicaPage {
    constructor() { }
    ngOnInit() {
    }
};
RecetaMedicaPage.ctorParameters = () => [];
RecetaMedicaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-receta-medica',
        template: _raw_loader_receta_medica_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_receta_medica_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecetaMedicaPage);



/***/ }),

/***/ 9296:
/*!*************************************************************!*\
  !*** ./src/app/pages/receta-medica/receta-medica.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2V0YS1tZWRpY2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJyZWNldGEtbWVkaWNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYzNDcwO1xyXG4gICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 1294:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/receta-medica/receta-medica.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <div align=\"right\">\n            <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\n        </div>\n\n        <ion-buttons slot=\"start\">\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\n        crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\n        crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\n        crossorigin=\"anonymous\"></script>\n\n</ion-header>\n\n\n<ion-content>\n    <div align=\"center\">\n<br>\n        <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\">\n            <em>Receta Médica</em>\n        </p>\n\n\n\n\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_receta-medica_receta-medica_module_ts.js.map
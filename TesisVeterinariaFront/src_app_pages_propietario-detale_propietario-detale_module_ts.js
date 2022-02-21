(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_propietario-detale_propietario-detale_module_ts"],{

/***/ 1349:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/propietario-detale/propietario-detale-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioDetalePageRoutingModule": () => (/* binding */ PropietarioDetalePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _propietario_detale_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propietario-detale.page */ 6869);




const routes = [
    {
        path: '',
        component: _propietario_detale_page__WEBPACK_IMPORTED_MODULE_0__.PropietarioDetalePage
    }
];
let PropietarioDetalePageRoutingModule = class PropietarioDetalePageRoutingModule {
};
PropietarioDetalePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropietarioDetalePageRoutingModule);



/***/ }),

/***/ 4867:
/*!***********************************************************************!*\
  !*** ./src/app/pages/propietario-detale/propietario-detale.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioDetalePageModule": () => (/* binding */ PropietarioDetalePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _propietario_detale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propietario-detale-routing.module */ 1349);
/* harmony import */ var _propietario_detale_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propietario-detale.page */ 6869);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);








let PropietarioDetalePageModule = class PropietarioDetalePageModule {
};
PropietarioDetalePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _propietario_detale_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropietarioDetalePageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ],
        declarations: [_propietario_detale_page__WEBPACK_IMPORTED_MODULE_1__.PropietarioDetalePage]
    })
], PropietarioDetalePageModule);



/***/ }),

/***/ 6869:
/*!*********************************************************************!*\
  !*** ./src/app/pages/propietario-detale/propietario-detale.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioDetalePage": () => (/* binding */ PropietarioDetalePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_propietario_detale_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./propietario-detale.page.html */ 4126);
/* harmony import */ var _propietario_detale_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propietario-detale.page.scss */ 7939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/propietario-service.service */ 193);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let PropietarioDetalePage = class PropietarioDetalePage {
    constructor(_localStorageRefService, propietarioService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.propietarioService = propietarioService;
        this.router = router;
        this.propietario = [];
        this.listMascotabyPropietario = [];
        this._localStorage = _localStorageRefService.localStorage;
        this.propietarioService.$getObjectSource.subscribe(data => {
            this.idPropietario = data;
            console.log("recibo id propie desde historia det", this.idPropietario);
            this.obtenerPropietarioBYId();
            this.obtenerMascotaByid();
        });
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
    }
    obtenerPropietarioBYId() {
        this.propietarioService.listarPropietarioById(this.idPropietario).subscribe((data => {
            this.propietario = data;
            console.log("consumiendo by id", this.propietario);
        }));
    }
    obtenerMascotaByid() {
        this.propietarioService.listarMascotaByIdPropietario(this.idPropietario).subscribe((data => {
            this.listMascotabyPropietario = data;
            console.log("Mascotassss", this.listMascotabyPropietario);
        }));
    }
    // this.router.navigate(['/mascota/',this.InicioDetails.idPropietario])
    agregarMascota() {
        this.router.navigate(['/mascota/', this.idPropietario]);
    }
    atras() {
        this.router.navigate(['/listar-propietarios']);
    }
};
PropietarioDetalePage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_2__.PropietarioServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PropietarioDetalePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-propietario-detale',
        template: _raw_loader_propietario_detale_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_propietario_detale_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropietarioDetalePage);



/***/ }),

/***/ 7939:
/*!***********************************************************************!*\
  !*** ./src/app/pages/propietario-detale/propietario-detale.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 1000px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n  text-align: center;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-label {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: justify;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nh1 {\n  color: #063470;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-style: oblique;\n  -webkit-text-stroke: 0.5px #FFE333;\n  font-size: xx-large;\n  background-color: #cfd0dc;\n}\n\n.form-container ion-card ion-card-title {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  text-align: center;\n}\n\n.form-container ion-card ion-card-subtitle {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: justify;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n\n.form-container ion-grid ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BpZXRhcmlvLWRldGFsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNHO0VBQ0MscUJBQUE7QUFFSjs7QUFBRztFQUNDLHFCQUFBO0FBR0o7O0FBREc7RUFDQyxxQkFBQTtBQUlKOztBQUZFO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1OOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHUSxtQkFBQTtFQUNSLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxzRUFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxxREFBQTtBQU1GOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQyx5QkFBQTtBQUtIOztBQUZBO0VBQ0UscURBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxxREFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxzRUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFIQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7QUFNRiIsImZpbGUiOiJwcm9waWV0YXJpby1kZXRhbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgcHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyNTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBtYXJnaW46IC0xNnB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MzQ3MDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuXHJcbmgxe1xyXG4gIGNvbG9yOiAjMDYzNDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41MHB4ICAjRkZFMzMzO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2UgOyAgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQwZGMgOyBcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxuICBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciAgcGFnaW5hdGlvbi1jb250cm9sc3tcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1ncmlkICBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1idXR0b257XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufSAiXX0= */");

/***/ }),

/***/ 4126:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propietario-detale/propietario-detale.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n        </div>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <h1> <em> CARRERA DE MEDICINA VETERINARIA Y ZOOTECNIA </em></h1>\r\n\r\n    <div class=\"form-container\">\r\n        <ion-grid *ngFor=\"let item of propietario\">\r\n            \r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em>\r\n                <ion-icon name=\"person-outline\"></ion-icon>      Propietario {{item.propietario}}</em></p>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"person\"></ion-icon>\r\n                        <ion-label> &nbsp; Propietario:\r\n                            <br>\r\n                            &nbsp; {{item.propietario}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"mail\"></ion-icon>\r\n\r\n                        <ion-label> &nbsp;Correo:\r\n                            <br>\r\n                            &nbsp; {{item.correo}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"locate\"></ion-icon>\r\n\r\n                        <ion-label> &nbsp;Ciudad:\r\n                            <br>\r\n                            &nbsp; {{item.cuidad}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"call\"></ion-icon>\r\n\r\n                        <ion-label>&nbsp;Telefono:\r\n                            <br>\r\n                            &nbsp;{{item.telefono}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"location\"></ion-icon>\r\n                        <ion-label>&nbsp;Direccion:\r\n                            <br>\r\n                            &nbsp;{{item.direccion}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\">\r\n                        <ion-icon name=\"paw-outline\"></ion-icon> <em> Mascotas:</em>\r\n                    </p>\r\n                    <ion-button color=\"shade\" (click)=\"agregarMascota()\">Agregar Mascota</ion-button>\r\n\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <ion-card *ngFor=\"let item of listMascotabyPropietario  |  paginate: {itemsPerPage:1, currentPage:cp} \">\r\n            <ion-card-header>\r\n                <ion-card-title><em>Nombre Paciente: {{item.nombre}}</em> </ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                <ion-card-subtitle>Sexo: {{item.sexo}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Especie: {{item.especie_id.especie_id.nombreEspecie}}\r\n                </ion-card-subtitle>\r\n                <ion-card-subtitle>Raza: {{item.especie_id.nombre}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Fecha Nacimiento: {{item.fechaNac}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Edad: {{item.edad}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Color y señal particulares: {{item.coloYSenalesParti}}\r\n                </ion-card-subtitle>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <div>\r\n            <pagination-controls (pageChange)=\"cp = $event\"   previousLabel=\"Antes\"\r\n            nextLabel=\"Siguiente\"></pagination-controls>\r\n    \r\n    \r\n          </div>\r\n    \r\n        <div align=\"center\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-button color=\"shade\" (click)=\"atras()\">Atras</ion-button>\r\n                    </ion-col>\r\n                    <br>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_propietario-detale_propietario-detale_module_ts.js.map
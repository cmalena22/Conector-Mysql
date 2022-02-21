(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_crearreceta_crearreceta_module_ts"],{

/***/ 7173:
/*!*****************************************************************!*\
  !*** ./src/app/pages/crearreceta/crearreceta-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearrecetaPageRoutingModule": () => (/* binding */ CrearrecetaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _crearreceta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearreceta.page */ 379);




const routes = [
    {
        path: '',
        component: _crearreceta_page__WEBPACK_IMPORTED_MODULE_0__.CrearrecetaPage
    }
];
let CrearrecetaPageRoutingModule = class CrearrecetaPageRoutingModule {
};
CrearrecetaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearrecetaPageRoutingModule);



/***/ }),

/***/ 5265:
/*!*********************************************************!*\
  !*** ./src/app/pages/crearreceta/crearreceta.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearrecetaPageModule": () => (/* binding */ CrearrecetaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _crearreceta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearreceta-routing.module */ 7173);
/* harmony import */ var _crearreceta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearreceta.page */ 379);







let CrearrecetaPageModule = class CrearrecetaPageModule {
};
CrearrecetaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crearreceta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearrecetaPageRoutingModule
        ],
        declarations: [_crearreceta_page__WEBPACK_IMPORTED_MODULE_1__.CrearrecetaPage]
    })
], CrearrecetaPageModule);



/***/ }),

/***/ 379:
/*!*******************************************************!*\
  !*** ./src/app/pages/crearreceta/crearreceta.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearrecetaPage": () => (/* binding */ CrearrecetaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_crearreceta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crearreceta.page.html */ 5721);
/* harmony import */ var _crearreceta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearreceta.page.scss */ 1049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/receta.service */ 56);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let CrearrecetaPage = class CrearrecetaPage {
    constructor(_localStorageRefService, recetaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.recetaService = recetaService;
        this.router = router;
        this.buttonDisabled = false;
        this.RecetaDetails = {
            prescripcion: '', rp: '', consulta_id: ''
        };
        console.log('------');
        this._localStorage = _localStorageRefService.localStorage;
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.recetaService.$getObjectSource.subscribe(data => {
            this.idConsultareceta = data;
            console.log('recibo id de consulta', data);
        });
    }
    aceptar() {
        this.router.navigate(['/historia-det']);
    }
    guardar() {
        console.log('rp---', this.RecetaDetails.rp);
        console.log('prescrippcion---', this.RecetaDetails.prescripcion);
        this.RecetaDetails.consulta_id = this.idConsultareceta;
        console.log('consulta_id', this.RecetaDetails.consulta_id);
        this.recetaService.crearReceta(this.RecetaDetails)
            .subscribe((data) => {
            console.log('estamos en la receta');
            this.receta = data;
            this.buttonDisabled = true;
            console.log('recibo', this.receta);
            //this.router.navigate(['/historia-det'])
        });
    }
};
CrearrecetaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_2__.RecetaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CrearrecetaPage.propDecorators = {
    RecetaDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CrearrecetaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-crearreceta',
        template: _raw_loader_crearreceta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crearreceta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearrecetaPage);



/***/ }),

/***/ 1049:
/*!*********************************************************!*\
  !*** ./src/app/pages/crearreceta/crearreceta.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".verticalLine {\n  width: 0.5%;\n  height: 1000px;\n  background: #0f110f;\n  margin: auto;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 500px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n/*# sourceMappingURL=registro-medico.page.css.map */\n\n#header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header img {\n  border-radius: 50%;\n  margin-top: 1%;\n}\n\n.form-container ion-grid ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFycmVjZXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUdRLG1CQUFBO0FBQ1Y7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUNBLG1EQUFBOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUU7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXJyZWNldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsTGluZSB7XHJcbiAgd2lkdGg6MC41JTtcclxuICBoZWlnaHQ6MTAwMHB4O1xyXG4gIGJhY2tncm91bmQ6cmdiKDE1LCAxNywgMTUpO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiA5NSUgIGN1cnNpdmU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBwIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBmb250LXNpemU6IDE0MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogLTE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXJlZ2lzdHJvLW1lZGljby5wYWdlLmNzcy5tYXAgKi9cclxuXHJcbiNoZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWdyaWQgIGlvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciAgaW9uLWJ1dHRvbntcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiAgfSAiXX0= */");

/***/ }),

/***/ 5721:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crearreceta/crearreceta.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n\r\n    </div>\r\n    <ion-button  style=\"--background: #063470;\" slot=\"start\">\r\n      <ion-back-button style=\"--background: #063470;\" defaultHref=\"/historia-det\"> </ion-back-button>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<!-- style=\"width: 20%;position: absolute; right: 0;\"-->\r\n\r\n\r\n\r\n   <div id=\"header\">\r\n    <img center src=\"assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    <br />\r\n  </div>\r\n   <form (ngSubmit)=\"guardar(RecetaDetails)\" #userForm=\"ngForm\">\r\n    <div class=\"form-container\">\r\n      <p center style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 10pt;\"> <em>Carreteras y Calle Vieja (parte lateral de la Universidad<br>\r\n        Politecnica Salesiana 2862213 ext. 1306</em> </p>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Receta\r\n          Médica </em></p>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                <ion-item>\r\n\r\n                  <ion-label>Rp:</ion-label>\r\n                  <ion-textarea rows=\"8\" type=\"text\" [(ngModel)]=\"RecetaDetails.rp\"\r\n                    style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n                  </ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>Prescripcion:</ion-label>\r\n                  <ion-textarea rows=\"8\" type=\"text\"  [(ngModel)]=\"RecetaDetails.prescripcion\" style=\"text-align: center;\"\r\n                    required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n                  </ion-textarea>\r\n\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n\r\n\r\n\r\n    <div align=\"center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n         <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-button color=\"shade\" (click)=\"aceptar()\" >Atras</ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-button [attr.disabled]=\"buttonDisabled\" color=\"shade\" type=\"submit\" [disabled]=\"!userForm.form.valid\">Guardar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crearreceta_crearreceta_module_ts.js.map
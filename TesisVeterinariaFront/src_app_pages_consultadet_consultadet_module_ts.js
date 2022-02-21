(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_consultadet_consultadet_module_ts"],{

/***/ 3120:
/*!*****************************************************************!*\
  !*** ./src/app/pages/consultadet/consultadet-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultadetPageRoutingModule": () => (/* binding */ ConsultadetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _consultadet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultadet.page */ 8294);




const routes = [
    {
        path: '',
        component: _consultadet_page__WEBPACK_IMPORTED_MODULE_0__.ConsultadetPage
    }
];
let ConsultadetPageRoutingModule = class ConsultadetPageRoutingModule {
};
ConsultadetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultadetPageRoutingModule);



/***/ }),

/***/ 9279:
/*!*********************************************************!*\
  !*** ./src/app/pages/consultadet/consultadet.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultadetPageModule": () => (/* binding */ ConsultadetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _consultadet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultadet-routing.module */ 3120);
/* harmony import */ var _consultadet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultadet.page */ 8294);







let ConsultadetPageModule = class ConsultadetPageModule {
};
ConsultadetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _consultadet_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultadetPageRoutingModule
        ],
        declarations: [_consultadet_page__WEBPACK_IMPORTED_MODULE_1__.ConsultadetPage]
    })
], ConsultadetPageModule);



/***/ }),

/***/ 8294:
/*!*******************************************************!*\
  !*** ./src/app/pages/consultadet/consultadet.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultadetPage": () => (/* binding */ ConsultadetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_consultadet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consultadet.page.html */ 76);
/* harmony import */ var _consultadet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultadet.page.scss */ 3464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let ConsultadetPage = class ConsultadetPage {
    constructor(_localStorageRefService, consultaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.consultaService = consultaService;
        this.router = router;
        this.constantesDet = [];
        this.consultaByIds = [];
        console.log("Consulta detalle");
        this._localStorage = _localStorageRefService.localStorage;
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.consultaService.$getObjectSource2.subscribe(data => {
            this.idConsultaDetalle = data;
            console.log('reciboo desde historia detalle la consulta id', data);
            this.listDetalles();
            this.listConsultaById();
        });
    }
    listDetalles() {
        this.consultaService.detalleByConstanteDet(this.idConsultaDetalle).subscribe(data => {
            this.constantesDet = data;
            console.log(this.constantesDet);
            //  this.consultasMedicas=data
        });
        //console.log("consulllllllll",this.consultasMedicas)
    }
    listConsultaById() {
        this.consultaService.obtenerConsultaById(this.idConsultaDetalle).subscribe(data => {
            this.consultaByIds = data;
            console.log(this.consultaByIds);
            //  this.consultasMedicas=data
        });
    }
    aceptar() {
        this.router.navigate(['/historia-det']);
    }
};
ConsultadetPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__.ConsultamedicaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ConsultadetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-consultadet',
        template: _raw_loader_consultadet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consultadet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultadetPage);



/***/ }),

/***/ 3464:
/*!*********************************************************!*\
  !*** ./src/app/pages/consultadet/consultadet.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 1000px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhZGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0c7RUFDQyxxQkFBQTtBQUVKOztBQUFHO0VBQ0MscUJBQUE7QUFHSjs7QUFERTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBS047O0FBQUE7RUFDSSxxREFBQTtBQUdKOztBQURBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UscURBQUE7QUFJRiIsImZpbGUiOiJjb25zdWx0YWRldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuICAgfVxyXG4gICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuICAgfVxyXG4gICBodG1se1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogOTUlICBjdXJzaXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuICBcclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ 76:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultadet/consultadet.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    </div>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"form-container\">\r\n    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Constantes Fisiologicas\r\n      </em></p>\r\n    <ion-grid *ngFor=\"let item of constantesDet; let sep\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-label>{{item.constantesidCab.nombre}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-label>\r\n              {{item.valorAsignado}}\r\n\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Motivo de la consulta\r\n\r\n      </em></p>\r\n    <ion-grid *ngFor=\"let itemConsulta of consultaByIds; let sep\">\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.motivoConsulta}}\r\n            </ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Historia\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Vacunacíon:\r\n              <br>\r\n              {{itemConsulta.vacunacion}}\r\n            </label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Despacitacíon:\r\n              <br>\r\n              {{itemConsulta.desparacitacion}}\r\n            </label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Producto:\r\n              <br>\r\n              {{itemConsulta.producto}}\r\n            </label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Fecha:\r\n              <br>\r\n              {{itemConsulta.fechas}}\r\n            </label>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Estado reproductivo:\r\n              {{itemConsulta.estadoReproductivo}}\r\n            </label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <label>Procedencia:\r\n              <br>\r\n              {{itemConsulta.procedencia}}\r\n            </label>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Anamnesis\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.anamnesis}}\r\n            </ion-textarea>\r\n\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Diagnostico\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.diagnostico}}\r\n            </ion-textarea>\r\n\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Pronostico\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.pronostico}}\r\n            </ion-textarea>\r\n\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Tratamiento\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.tratamiento}}\r\n            </ion-textarea>\r\n\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Observaciones\r\n        </em></p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-item>\r\n            <ion-textarea>\r\n              {{itemConsulta.observaciones}}\r\n            </ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div align=\"center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-button color=\"shade\" (click)=\"aceptar()\">Aceptar</ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consultadet_consultadet_module_ts.js.map
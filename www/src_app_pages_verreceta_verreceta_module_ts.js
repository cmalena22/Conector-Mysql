(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_verreceta_verreceta_module_ts"],{

/***/ 7989:
/*!*************************************************************!*\
  !*** ./src/app/pages/verreceta/verreceta-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerrecetaPageRoutingModule": () => (/* binding */ VerrecetaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _verreceta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verreceta.page */ 9594);




const routes = [
    {
        path: '',
        component: _verreceta_page__WEBPACK_IMPORTED_MODULE_0__.VerrecetaPage
    }
];
let VerrecetaPageRoutingModule = class VerrecetaPageRoutingModule {
};
VerrecetaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerrecetaPageRoutingModule);



/***/ }),

/***/ 6863:
/*!*****************************************************!*\
  !*** ./src/app/pages/verreceta/verreceta.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerrecetaPageModule": () => (/* binding */ VerrecetaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _verreceta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verreceta-routing.module */ 7989);
/* harmony import */ var _verreceta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verreceta.page */ 9594);







let VerrecetaPageModule = class VerrecetaPageModule {
};
VerrecetaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verreceta_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerrecetaPageRoutingModule
        ],
        declarations: [_verreceta_page__WEBPACK_IMPORTED_MODULE_1__.VerrecetaPage]
    })
], VerrecetaPageModule);



/***/ }),

/***/ 9594:
/*!***************************************************!*\
  !*** ./src/app/pages/verreceta/verreceta.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerrecetaPage": () => (/* binding */ VerrecetaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_verreceta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./verreceta.page.html */ 5137);
/* harmony import */ var _verreceta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verreceta.page.scss */ 743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/receta.service */ 56);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let VerrecetaPage = class VerrecetaPage {
    constructor(_localStorageRefService, recetaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.recetaService = recetaService;
        this.router = router;
        this.Recetaver = [];
        console.log('------');
        this._localStorage = _localStorageRefService.localStorage;
        this.recetaService.$getObjectSource.subscribe(data => {
            this.idConsultavreceta = data;
            console.log('recibo id de consulta', data);
            this.listarecetaMedica();
        });
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
    }
    aceptar() {
        this.router.navigate(['/historia-det']);
    }
    listarecetaMedica() {
        this.recetaService.listrecetaMedica(this.idConsultavreceta).subscribe(data => {
            this.Recetaver = data;
            console.log('receta ver---', this.Recetaver);
            let tam = Object.keys(this.Recetaver).length;
            this.numeroTamano = tam;
        });
    }
    mostrarRecetaEsp(idConsultavreceta) {
        console.log('mostrar receta a detalle');
        this.recetaService.enviandoIdConsulta(idConsultavreceta);
        this.router.navigate(['/receta-detalle']);
    }
    eliminarReceta(idConsultavreceta) {
        this.recetaService.eliminarlReceta(idConsultavreceta).subscribe(data => {
            this.Recetaver = data;
            console.log('receta eliminar---', this.Recetaver);
            this.router.navigate(['/historia-det']);
        });
    }
};
VerrecetaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_2__.RecetaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
VerrecetaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-verreceta',
        template: _raw_loader_verreceta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verreceta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerrecetaPage);



/***/ }),

/***/ 743:
/*!*****************************************************!*\
  !*** ./src/app/pages/verreceta/verreceta.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".verticalLine {\n  width: 0.5%;\n  height: 1000px;\n  background: #0f110f;\n  margin: auto;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 500px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n/*# sourceMappingURL=registro-medico.page.css.map */\n\n#header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header img {\n  border-radius: 50%;\n  margin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnJlY2V0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHUSxtQkFBQTtBQUNaOztBQUVFO0VBQ0UscURBQUE7QUFDSjs7QUFDRSxtREFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFFTiIsImZpbGUiOiJ2ZXJyZWNldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsTGluZSB7XHJcbiAgICB3aWR0aDowLjUlO1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxuICAgIGJhY2tncm91bmQ6cmdiKDE1LCAxNywgMTUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYzNDcwO1xyXG4gIH1cclxuXHJcbiAgaHRtbCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogLTE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0cm8tbWVkaWNvLnBhZ2UuY3NzLm1hcCAqL1xyXG5cclxuICAjaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 5137:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verreceta/verreceta.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button  style=\"--background: #063470;\" slot=\"start\">\r\n      <ion-back-button style=\"--background: #063470;\" defaultHref=\"/historia-det\"> </ion-back-button>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <img center src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    <br />\r\n  </div>\r\n\r\n<div class=\"form-container\">\r\n  <p center style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 10pt;\">Carreteras y Calle Vieja (parte lateral de la Universidad<br>\r\n    Politecnica Salesiana 2862213 ext. 1306</p>\r\n  <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Recetario\r\n     </em></p>\r\n\r\n      <div style=\"text-align: center;color:#FF0000 ;\" type=\"hidden\" class=\"hero-list\" *ngIf=\"numeroTamano === 0\" >\r\n        <p>No hay recetas para mostrar</p>\r\n\r\n        <div align=\"center\">\r\n          <ion-grid>\r\n            <ion-row>\r\n             <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                <ion-button color=\"shade\" (click)=\"aceptar()\" >Atras</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: center;color:#FF0000 ;\" type=\"hidden\" class=\"hero-list\" *ngIf=\"numeroTamano > 0\" >\r\n        <ion-card *ngFor=\"let item of Recetaver \">\r\n          <!--  <ion-card-header>\r\n              <ion-card-title>No. Historia {{item.idHistorial}}</ion-card-title>\r\n          </ion-card-header>\r\n-->\r\n          <ion-card-content (click)=\"mostrarRecetaEsp(item.idReceta)\">\r\n              <ion-card-subtitle>Fecha de receta: {{item.fecha.split('T')[0]}}</ion-card-subtitle>\r\n              <ion-card-subtitle>Rp: {{item.rp}}</ion-card-subtitle>\r\n              <ion-card-subtitle>Rp: {{item.prescripcion}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n\r\n          <img center src=\"../assets/imagenes/delete.png\" height=\"40\" alt=\"\" (click)=\"eliminarReceta(item.idReceta)\">\r\n\r\n      </ion-card>\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n           <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" (click)=\"aceptar()\" >Atras</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      </div>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verreceta_verreceta_module_ts.js.map
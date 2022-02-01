(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_raza-especie_raza-especie_module_ts"],{

/***/ 5160:
/*!*******************************************************************!*\
  !*** ./src/app/pages/raza-especie/raza-especie-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RazaEspeciePageRoutingModule": () => (/* binding */ RazaEspeciePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _raza_especie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raza-especie.page */ 1703);




const routes = [
    {
        path: '',
        component: _raza_especie_page__WEBPACK_IMPORTED_MODULE_0__.RazaEspeciePage
    }
];
let RazaEspeciePageRoutingModule = class RazaEspeciePageRoutingModule {
};
RazaEspeciePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RazaEspeciePageRoutingModule);



/***/ }),

/***/ 7937:
/*!***********************************************************!*\
  !*** ./src/app/pages/raza-especie/raza-especie.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RazaEspeciePageModule": () => (/* binding */ RazaEspeciePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _raza_especie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raza-especie-routing.module */ 5160);
/* harmony import */ var _raza_especie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raza-especie.page */ 1703);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);








let RazaEspeciePageModule = class RazaEspeciePageModule {
};
RazaEspeciePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _raza_especie_routing_module__WEBPACK_IMPORTED_MODULE_0__.RazaEspeciePageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ],
        declarations: [_raza_especie_page__WEBPACK_IMPORTED_MODULE_1__.RazaEspeciePage]
    })
], RazaEspeciePageModule);



/***/ }),

/***/ 1703:
/*!*********************************************************!*\
  !*** ./src/app/pages/raza-especie/raza-especie.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RazaEspeciePage": () => (/* binding */ RazaEspeciePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_raza_especie_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./raza-especie.page.html */ 9055);
/* harmony import */ var _raza_especie_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raza-especie.page.scss */ 2778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mascota-service.service */ 4799);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let RazaEspeciePage = class RazaEspeciePage {
    constructor(_localStorageRefService, mascotaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.mascotaService = mascotaService;
        this.router = router;
        this.cp = 1;
        this.especies = [];
        this.estado = true;
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerEspecie();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.obtenerEspecie();
    }
    obtenerEspecie() {
        this.mascotaService.obtenerEspecie()
            .subscribe((data) => {
            this.especies = data;
            console.log('Estamos en el especiee pag princi');
            console.log(this.especies);
        }, (error) => {
            console.log(error);
        });
    }
    addNew() {
        this.raza = {
            nombreEspecie: ''
        };
        return true;
    }
    guardarEspecie() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Especueeeeee", this.raza);
            /*  this.mascotaService.crearEspecie(this.raza).subscribe((data => {
                console.log(data)
                this.obtenerEspecie()
        
              }))*/
            if (this.estado == false) {
                console.log("hola");
                console.log(this.idEspecie);
                this.estado = true;
                this.mascotaService.editarEspecie(this.idEspecie, this.raza.nombreEspecie).subscribe((dataa => {
                    console.log(dataa);
                    this.estado = true;
                }));
            }
            else {
                console.log("guardamos");
                this.mascotaService.crearEspecie(this.raza).subscribe((data => {
                    console.log(data);
                    this.obtenerEspecie();
                }));
            }
        });
    }
    editar(item) {
        this.raza = item;
        console.log("emtraaaaa", this.raza.nombreEspecie);
        this.estado = false;
        this.idEspecie = this.raza.especie_id;
    }
    eliminar(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.mascotaService.presentAlert('Alerta', '¿Seguro que desea eliminar?');
            console.log(res);
            console.log(item);
            if (res == true) {
                this.mascotaService.eliminarEspecie(item.especie_id).subscribe((data => {
                    this.obtenerEspecie();
                    console.log(data);
                }));
            }
            else {
                console.log("nooooo");
                this.obtenerEspecie();
            }
        });
    }
    atras() {
        this.router.navigate(['/paginal-inicial']);
    }
};
RazaEspeciePage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__.MascotaServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
RazaEspeciePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-raza-especie',
        template: _raw_loader_raza_especie_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_raza_especie_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RazaEspeciePage);



/***/ }),

/***/ 2778:
/*!***********************************************************!*\
  !*** ./src/app/pages/raza-especie/raza-especie.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 750px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n  text-align: center;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nh1 {\n  color: #063470;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-style: oblique;\n  -webkit-text-stroke: 0.5px #FFE333;\n  font-size: xx-large;\n  background-color: #cfd0dc;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemEtZXNwZWNpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUdFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNOOztBQUlBO0VBQ0kscURBQUE7QUFESjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFEQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNDLHlCQUFBO0FBQ0g7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUNBO0VBQ0UscURBQUE7QUFFRjs7QUFBQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHNFQUFBO0VBQ0Esa0JBQUE7QUFHRiIsImZpbGUiOiJyYXphLWVzcGVjaWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgXHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5oMXtcclxuICBjb2xvcjogIzA2MzQ3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNTBweCAgI0ZGRTMzMztcclxuICBmb250LXNpemU6IHh4LWxhcmdlIDsgIFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkMGRjIDsgXHJcblxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tbGFiZWx7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWlucHV0IGlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59IFxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59IFxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1idXR0b257XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufSBcclxuLmZvcm0tY29udGFpbmVyICBwYWdpbmF0aW9uLWNvbnRyb2xze1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 9055:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/raza-especie/raza-especie.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\" />\r\n    </div>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\" />\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script type=\"text/javascript\"></script>\r\n</ion-header>\r\n<ion-content>\r\n  <h1> <em> CARRERA DE MEDICINA\r\n    VETERINARIA Y ZOOTECNIA </em>\r\n\r\n\r\n</h1>\r\n  <div class=\"form-container\"  >\r\n    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt; \"> <em>\r\n      Especies </em></p>\r\n    <ion-grid class=\"ion-margin\">\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" (click)=\"atras()\" >Atras</ion-button>\r\n        </ion-col>\r\n        <br>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" (click)=\"addNew()\">\r\n            Añadir nuevo\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row style=\"border-bottom: groove;\" >\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Especie</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Editar</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Eliminar</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"border-bottom: groove;\" *ngFor=\"let item of especies | paginate: {itemsPerPage:4, currentPage:cp} \">\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label>{{item.nombreEspecie}} </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <img src=\"../assets/imagenes/editar.png\" height=\"18\" alt=\"\" (click)=\"editar(item)\" />\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <img src=\"../../../assets/imagenes/1214428.png\" height=\"18\" alt=\"\" (click)=\"eliminar(item)\" />\r\n      </ion-col>\r\n      </ion-row>\r\n      <div>\r\n        <pagination-controls (pageChange)=\"cp = $event\"   previousLabel=\"Antes\"\r\n        nextLabel=\"Siguiente\"></pagination-controls>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n\r\n  <form (ngSubmit)=\"guardarEspecie(raza)\"  *ngIf=\"raza\">\r\n    <div class=\"form-container\">\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Registro\r\n          Especie </em></p>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Nombre especie\" [(ngModel)]=\"raza.nombreEspecie\" style=\"text-align: center;\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-icon name=\"paw\"></ion-icon>\r\n          <ion-label style=\"font-family: Georgia, 'Times New Roman', Times, serif;\">&nbsp; Nombre:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" type=\"submit\">Guardar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </form>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_raza-especie_raza-especie_module_ts.js.map
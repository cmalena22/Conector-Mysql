(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_historias-clinicas_historias-clinicas_module_ts"],{

/***/ 8176:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/historias-clinicas/historias-clinicas-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriasClinicasPageRoutingModule": () => (/* binding */ HistoriasClinicasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _historias_clinicas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historias-clinicas.page */ 924);




const routes = [
    {
        path: '',
        component: _historias_clinicas_page__WEBPACK_IMPORTED_MODULE_0__.HistoriasClinicasPage
    }
];
let HistoriasClinicasPageRoutingModule = class HistoriasClinicasPageRoutingModule {
};
HistoriasClinicasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoriasClinicasPageRoutingModule);



/***/ }),

/***/ 1935:
/*!***********************************************************************!*\
  !*** ./src/app/pages/historias-clinicas/historias-clinicas.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriasClinicasPageModule": () => (/* binding */ HistoriasClinicasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _historias_clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historias-clinicas-routing.module */ 8176);
/* harmony import */ var _historias_clinicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historias-clinicas.page */ 924);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 1041);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 7940);









let HistoriasClinicasPageModule = class HistoriasClinicasPageModule {
};
HistoriasClinicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _historias_clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoriasClinicasPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule,
        ],
        declarations: [_historias_clinicas_page__WEBPACK_IMPORTED_MODULE_1__.HistoriasClinicasPage]
    })
], HistoriasClinicasPageModule);



/***/ }),

/***/ 924:
/*!*********************************************************************!*\
  !*** ./src/app/pages/historias-clinicas/historias-clinicas.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriasClinicasPage": () => (/* binding */ HistoriasClinicasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_historias_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./historias-clinicas.page.html */ 8638);
/* harmony import */ var _historias_clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historias-clinicas.page.scss */ 1564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let HistoriasClinicasPage = class HistoriasClinicasPage {
    constructor(_localStorageRefService, consultaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.consultaService = consultaService;
        this.router = router;
        this.cp = 1;
        this.historiaClinicaList = [];
        this.filtroPropietario = '';
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerConsultasMedicas();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
    }
    obtenerConsultasMedicas() {
        this.consultaService.recuperoListDeConsultasMedicas()
            .subscribe((data) => {
            this.historiaClinicaList = data;
            console.log('Estamos en historias');
            console.log(this.historiaClinicaList);
        }, (error) => {
            console.log(error);
        });
    }
    editarConsultasMedicasById(idHistorial) {
        this.consultaService.enviandoIdHistoria(idHistorial);
        this.router.navigate(['/historia-det']);
        console.log(idHistorial);
    }
    buscarPaciente(event) {
        console.log("buscar", event.detail.value);
        this.filtroPropietario = event.detail.value;
    }
    atras() {
        this.router.navigate(['/paginal-inicial']);
    }
};
HistoriasClinicasPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__.ConsultamedicaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HistoriasClinicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-historias-clinicas',
        template: _raw_loader_historias_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_historias_clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoriasClinicasPage);



/***/ }),

/***/ 1564:
/*!***********************************************************************!*\
  !*** ./src/app/pages/historias-clinicas/historias-clinicas.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 800px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nbody {\n  font-family: \"Nunito\", sans-serif;\n  padding: 50px;\n}\n\nion-card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 10px 50px 8px 26px;\n  cursor: pointer;\n}\n\nion-card {\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 90px;\n  text-align: center;\n}\n\n.form-container ion-card ion-card-title {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.form-container ion-card ion-card-subtitle {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n\n.form-container ion-searchbar {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3Rvcmlhcy1jbGluaWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNHO0VBQ0MscUJBQUE7QUFFSjs7QUFBRztFQUNDLHFCQUFBO0FBR0o7O0FBREc7RUFDQyxxQkFBQTtBQUlKOztBQUZFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQU1OOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHUSxtQkFBQTtBQUtaOztBQUZBO0VBQ0kscURBQUE7QUFLSjs7QUFGQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVFQUFBO0VBQ0EsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNNLDRCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDRSxxREFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTEE7RUFDRSxxREFBQTtBQVFGOztBQUxBO0VBQ0Usc0VBQUE7RUFDQSxrQkFBQTtBQVFGOztBQUxBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTEE7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFRRiIsImZpbGUiOiJoaXN0b3JpYXMtY2xpbmljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuYm9keXtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG5pb24tY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjA4KSwgMCAwIDZweCByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpLC4zcyBib3gtc2hhZG93LC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpO1xyXG4gIHBhZGRpbmc6IDEwcHggNTBweCA4cHggMjZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyICBwYWdpbmF0aW9uLWNvbnRyb2xze1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1idXR0b257XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn0gXHJcbi5mb3JtLWNvbnRhaW5lciAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8638:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historias-clinicas/historias-clinicas.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"../../../assets/imagenes/Logo.jpg\" height=\"50\" alt=\"\" />\r\n        </div>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"form-container\">\r\n        <ion-searchbar (ionChange)=\"buscarPaciente($event)\" placeholder=\"Ingrese Propietario\" debounce=\"500\">\r\n        </ion-searchbar>\r\n        <br>\r\n        <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\">\r\n            <ion-icon name=\"folder-outline\"></ion-icon> <em> Historias\r\n                Clinicas\r\n            </em>\r\n\r\n        </p>\r\n\r\n\r\n\r\n        <ion-card\r\n            *ngFor=\"let item of historiaClinicaList | filtroPropietario: filtroPropietario | paginate: {itemsPerPage:5, currentPage:cp} \">\r\n\r\n            <ion-card-header>\r\n                <ion-card-title> <em> No. Historia {{item.idHistorial}}</em></ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content (click)=\"editarConsultasMedicasById(item.idHistorial)\">\r\n                <ion-card-subtitle>Propietario: {{item.mascota_id.id_mascota_propietario.propietario}}\r\n                </ion-card-subtitle>\r\n                <ion-card-subtitle>Cédula: {{item.mascota_id.id_mascota_propietario.idPropietario}}</ion-card-subtitle>\r\n\r\n                <ion-card-subtitle>Ciudad: {{item.mascota_id.id_mascota_propietario.cuidad}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Direccion: {{item.mascota_id.id_mascota_propietario.direccion}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Telefono: {{item.mascota_id.id_mascota_propietario.telefono}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Nombre mascota: {{item.mascota_id.nombre}}</ion-card-subtitle>\r\n                <ion-card-subtitle>Fecha admision: {{item.diaDeAdminision.split('T')[0]}}</ion-card-subtitle>\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n        <div>\r\n            <pagination-controls (pageChange)=\"cp = $event\" previousLabel=\"Antes\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div align=\"center\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-button color=\"shade\" (click)=\"atras()\">Atras</ion-button>\r\n                    </ion-col>\r\n                    <br>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_historias-clinicas_historias-clinicas_module_ts.js.map
(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_listar-propietarios_listar-propietarios_module_ts"],{

/***/ 3396:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/listar-propietarios/listar-propietarios-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarPropietariosPageRoutingModule": () => (/* binding */ ListarPropietariosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _listar_propietarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-propietarios.page */ 2591);




const routes = [
    {
        path: '',
        component: _listar_propietarios_page__WEBPACK_IMPORTED_MODULE_0__.ListarPropietariosPage
    }
];
let ListarPropietariosPageRoutingModule = class ListarPropietariosPageRoutingModule {
};
ListarPropietariosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListarPropietariosPageRoutingModule);



/***/ }),

/***/ 3356:
/*!*************************************************************************!*\
  !*** ./src/app/pages/listar-propietarios/listar-propietarios.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarPropietariosPageModule": () => (/* binding */ ListarPropietariosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _listar_propietarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-propietarios-routing.module */ 3396);
/* harmony import */ var _listar_propietarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-propietarios.page */ 2591);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 1041);









//import { FiltroByIdPipe } from 'src/app/pipe/filtro-by-id.pipe';
let ListarPropietariosPageModule = class ListarPropietariosPageModule {
};
ListarPropietariosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _listar_propietarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListarPropietariosPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ],
        declarations: [_listar_propietarios_page__WEBPACK_IMPORTED_MODULE_1__.ListarPropietariosPage]
    })
], ListarPropietariosPageModule);



/***/ }),

/***/ 2591:
/*!***********************************************************************!*\
  !*** ./src/app/pages/listar-propietarios/listar-propietarios.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarPropietariosPage": () => (/* binding */ ListarPropietariosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_listar_propietarios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./listar-propietarios.page.html */ 32);
/* harmony import */ var _listar_propietarios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-propietarios.page.scss */ 4041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/propietario-service.service */ 193);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);








let ListarPropietariosPage = class ListarPropietariosPage {
    constructor(_localStorageRefService, propietarioService, router, consultaService) {
        this._localStorageRefService = _localStorageRefService;
        this.propietarioService = propietarioService;
        this.router = router;
        this.consultaService = consultaService;
        this.cp = 1;
        this.listPropietario = [];
        this.filtroPropietario = '';
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerListPropietarios();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
    }
    obtenerListPropietarios() {
        this.consultaService.recuperoListDeConsultasMedicas()
            .subscribe((data) => {
            this.listPropietario = data;
            console.log('Estamos en historias');
            console.log(this.listPropietario);
        }, (error) => {
            console.log(error);
        });
    }
    editarPropietario(idPropietario) {
        console.log("id propo", idPropietario);
        this.propietarioService.enviarIdPropietario(idPropietario);
        this.router.navigate(['/propietario-detale']);
    }
    buscarPaciente(event) {
        console.log("buscar", event.detail.value);
        this.filtroPropietario = event.detail.value;
    }
    atras() {
        this.router.navigate(['/paginal-inicial']);
    }
};
ListarPropietariosPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__.LocalstoreService },
    { type: src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_3__.PropietarioServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__.ConsultamedicaService }
];
ListarPropietariosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-listar-propietarios',
        template: _raw_loader_listar_propietarios_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_propietarios_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListarPropietariosPage);



/***/ }),

/***/ 4041:
/*!*************************************************************************!*\
  !*** ./src/app/pages/listar-propietarios/listar-propietarios.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 800px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-card ion-card-title {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n}\n\n.form-container ion-card ion-card-subtitle {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n\nion-card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 10px 50px 8px 26px;\n  cursor: pointer;\n}\n\nion-card {\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 90px;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci1wcm9waWV0YXJpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDRztFQUNDLHFCQUFBO0FBRUo7O0FBQUc7RUFDQyxxQkFBQTtBQUdKOztBQURHO0VBQ0MscUJBQUE7QUFJSjs7QUFGRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTU47O0FBSEU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUdRLG1CQUFBO0FBTVo7O0FBRkE7RUFDSSxxREFBQTtBQUtKOztBQUZBO0VBQ0UscURBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUZBO0VBQ0Usc0VBQUE7QUFLRjs7QUFGQTtFQUNFLHNFQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtFQUNBLG1GQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDTSw0QkFBQTtFQUNGLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUlGIiwiZmlsZSI6Imxpc3Rhci1wcm9waWV0YXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24tY2FyZCBpb24tY2FyZC10aXRsZXtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyICBpb24tY2FyZCBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgIHBhZ2luYXRpb24tY29udHJvbHN7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDhweCAyNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pb24tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciAgaW9uLWJ1dHRvbntcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59IFxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 32:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listar-propietarios/listar-propietarios.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    </div>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <div align=\"center\" class=\"form-container\">\r\n    <ion-searchbar (ionChange)=\"buscarPaciente($event)\" placeholder=\"Ingrese Propietario\" debounce=\"500\">\r\n    </ion-searchbar>\r\n    <br>\r\n    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\">\r\n      <ion-icon name=\"people-outline\"></ion-icon> <em> Propietarios\r\n      </em>\r\n\r\n    </p>\r\n\r\n    <ion-card\r\n      *ngFor=\"let item of listPropietario  | filtroPropietario: filtroPropietario| paginate: {itemsPerPage:5, currentPage:cp} \">\r\n      <ion-card-header>\r\n        <ion-card-title> <em> Propietario: {{item.mascota_id.id_mascota_propietario.propietario}}</em></ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content (click)=\"editarPropietario(item.mascota_id.id_mascota_propietario.idPropietario)\">\r\n        <ion-card-subtitle>Cédula: {{item.mascota_id.id_mascota_propietario.idPropietario}}</ion-card-subtitle>\r\n\r\n        <ion-card-subtitle>Ciudad: {{item.mascota_id.id_mascota_propietario.cuidad}}</ion-card-subtitle>\r\n        <ion-card-subtitle>Direccion: {{item.mascota_id.id_mascota_propietario.direccion}}</ion-card-subtitle>\r\n        <ion-card-subtitle>Telefono: {{item.mascota_id.id_mascota_propietario.telefono}}</ion-card-subtitle>\r\n        <ion-card-subtitle>Nombre mascota: {{item.mascota_id.nombre}}</ion-card-subtitle>\r\n        <ion-card-subtitle>Fecha admision: {{item.diaDeAdminision.split('T')[0]}}</ion-card-subtitle>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <div>\r\n      <pagination-controls (pageChange)=\"cp = $event\" previousLabel=\"Antes\" nextLabel=\"Siguiente\"></pagination-controls>\r\n\r\n\r\n    </div>\r\n\r\n    <div align=\"center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-button color=\"shade\" (click)=\"atras()\">Atrás</ion-button>\r\n          </ion-col>\r\n          <br>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_listar-propietarios_listar-propietarios_module_ts.js.map
(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_paginal-inicial_paginal-inicial_module_ts"],{

/***/ 6300:
/*!*************************************************************************!*\
  !*** ./src/app/pages/paginal-inicial/paginal-inicial-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginalInicialPageRoutingModule": () => (/* binding */ PaginalInicialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _paginal_inicial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginal-inicial.page */ 6721);




const routes = [
    {
        path: '',
        component: _paginal_inicial_page__WEBPACK_IMPORTED_MODULE_0__.PaginalInicialPage
    }
];
let PaginalInicialPageRoutingModule = class PaginalInicialPageRoutingModule {
};
PaginalInicialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaginalInicialPageRoutingModule);



/***/ }),

/***/ 175:
/*!*****************************************************************!*\
  !*** ./src/app/pages/paginal-inicial/paginal-inicial.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginalInicialPageModule": () => (/* binding */ PaginalInicialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _paginal_inicial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginal-inicial-routing.module */ 6300);
/* harmony import */ var _paginal_inicial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginal-inicial.page */ 6721);







let PaginalInicialPageModule = class PaginalInicialPageModule {
};
PaginalInicialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _paginal_inicial_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaginalInicialPageRoutingModule
        ],
        declarations: [_paginal_inicial_page__WEBPACK_IMPORTED_MODULE_1__.PaginalInicialPage]
    })
], PaginalInicialPageModule);



/***/ }),

/***/ 6721:
/*!***************************************************************!*\
  !*** ./src/app/pages/paginal-inicial/paginal-inicial.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginalInicialPage": () => (/* binding */ PaginalInicialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_paginal_inicial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paginal-inicial.page.html */ 2502);
/* harmony import */ var _paginal_inicial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginal-inicial.page.scss */ 7033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var src_app_Services_miperfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/miperfil.service */ 3524);
/* harmony import */ var _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/iniciosesion.service */ 785);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);










let PaginalInicialPage = class PaginalInicialPage {
    //true sale .false no sale
    constructor(_localStorageRefService, navCtrl, actRoute, router, http, miperfilservice, inicioservice) {
        this._localStorageRefService = _localStorageRefService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.router = router;
        this.http = http;
        this.miperfilservice = miperfilservice;
        this.inicioservice = inicioservice;
        this.condition = true;
        // this.miperfilservice.enviandocorreo(this.correop)
        this._localStorage = _localStorageRefService.localStorage;
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        console.log(this._localStorage.length);
        console.log(this._localStorage.getItem);
        this.inicioservice.$getObjectSource.subscribe(data => {
            console.log(data);
            this.datajs = data;
            this.usuario_id = this.datajs.usuario_id;
            console.log(this.usuario_id);
            this.correop = this.datajs.correo;
            this.rol = this.datajs.rol_id.descripcion;
            console.log('rol---pagina inicio', this.rol);
            console.log(this.correop);
            //getMedico
            this.inicioservice.getMedico(this.usuario_id)
                .subscribe((data) => {
                this.medico = data;
                this.nombres = this.medico.nombres;
                this.apellidos = this.medico.apellidos;
                console.log('medico devuelto por el id usuario', this.medico);
            });
            if (this.rol == 'medico') {
                this.condition = false;
            }
            else {
                this.condition = true;
            }
            this.miperfilservice.enviandocorreo(this.correop);
            console.log('reciboo desde paag inicial correo-- datosss desde la inicialllllll', this.datajs);
        });
    }
};
PaginalInicialPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__.LocalstoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: src_app_Services_miperfil_service__WEBPACK_IMPORTED_MODULE_2__.MiperfilService },
    { type: _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_3__.IniciosesionService }
];
PaginalInicialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-paginal-inicial',
        template: _raw_loader_paginal_inicial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paginal_inicial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaginalInicialPage);



/***/ }),

/***/ 7033:
/*!*****************************************************************!*\
  !*** ./src/app/pages/paginal-inicial/paginal-inicial.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("html {\n  --background: #f5f5f3;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\n#header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-slide {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-img-padding {\n  padding: 40px;\n}\n\n#uno {\n  background-color: rgba(0, 0, 0, 0.8);\n  background-image: url(https://www.hola.com/imagenes/estar-bien/20210414187788/que-siente-tu-perro-gato-castracion/0-940-824/perro-enfadado-a.jpg);\n  height: 200px;\n  max-width: 100%;\n  filter: brightness(0.3);\n}\n\n#dos {\n  background-color: rgba(0, 0, 0, 0.8);\n  background-image: url(https://i.pinimg.com/originals/06/a0/ca/06a0caeb96547c1a0d96752fd708c01b.png);\n  height: 200px;\n  max-width: 100%;\n  filter: brightness(0.3);\n}\n\n#tres {\n  background-color: rgba(0, 0, 0, 0.8);\n  background-image: url(https://www.purina.es/sites/default/files/2017-11/Cat-To-Other-Pets.jpg);\n  height: 200px;\n  max-width: 100%;\n  filter: brightness(0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYWwtaW5pY2lhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7QUFFSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNBLGFBQUE7QUFDQTs7QUFDRTtFQUNFLG9DQUFBO0VBQ0EsaUpBQUE7RUFHQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBRUU7RUFDRSxvQ0FBQTtFQUVELG1HQUFBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUVFO0VBQ0Usb0NBQUE7RUFDQSw4RkFBQTtFQUdBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFESiIsImZpbGUiOiJwYWdpbmFsLWluaWNpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICBcclxuICBcclxuICBcclxuI2hlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNsaWRle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2xpZGUtaW1nLXBhZGRpbmd7XHJcbnBhZGRpbmc6IDQwcHg7XHJcbn1cclxuICAjdW5vIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LmhvbGEuY29tL2ltYWdlbmVzL2VzdGFyLWJpZW4vMjAyMTA0MTQxODc3ODgvcXVlLXNpZW50ZS10dS1wZXJyby1nYXRvLWNhc3RyYWNpb24vMC05NDAtODI0L3BlcnJvLWVuZmFkYWRvLWEuanBnKTtcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzA2L2EwL2NhLzA2YTBjYWViOTY1NDdjMWEwZDk2NzUyZmQ3MDhjMDFiLnBuZyk7XHJcblxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDAuMyk7XHJcbiAgfVxyXG4gICNkb3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3d3dy5ob2xhLmNvbS9pbWFnZW5lcy9lc3Rhci1iaWVuLzIwMjEwNDE0MTg3Nzg4L3F1ZS1zaWVudGUtdHUtcGVycm8tZ2F0by1jYXN0cmFjaW9uLzAtOTQwLTgyNC9wZXJyby1lbmZhZGFkby1hLmpwZyk7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wNi9hMC9jYS8wNmEwY2FlYjk2NTQ3YzFhMGQ5Njc1MmZkNzA4YzAxYi5wbmcpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDAuMyk7XHJcbiAgfVxyXG4gICN0cmVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LnB1cmluYS5lcy9zaXRlcy9kZWZhdWx0L2ZpbGVzLzIwMTctMTEvQ2F0LVRvLU90aGVyLVBldHMuanBnKTtcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzA2L2EwL2NhLzA2YTBjYWViOTY1NDdjMWEwZDk2NzUyZmQ3MDhjMDFiLnBuZyk7XHJcblxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDAuMyk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 2502:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paginal-inicial/paginal-inicial.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n        </div>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n\r\n    <link rel=\"stylesheet\" href=\"https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css\">\r\n\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js  \"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <title>Inicio sesion</title>\r\n</ion-header>\r\n<ion-content padding fullscreen>\r\n    <ion-slides pager=\"true\">\r\n        <ion-slide id=\"uno\">\r\n\r\n        </ion-slide>\r\n        <ion-slide id=\"dos\">\r\n\r\n        </ion-slide>\r\n        <ion-slide id=\"tres\">\r\n\r\n        </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n    <div align=\"center\">\r\n\r\n     <p  style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <ion-icon name=\"person-circle-outline\"></ion-icon> <em> Bienvenido  <strong>{{nombres}} {{apellidos}}</strong> </em></p>\r\n\r\n        <ion-grid fixed>\r\n\r\n            <ion-row class=\"ion-align-items-end\">\r\n\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <img src=\"../../../assets/imagenes/histoo.png\" height=\"200\" alt=\"\"\r\n                        routerLink=\"../historias-clinicas\">\r\n                    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif;\"><em> Historias Clínicas </em> </p>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <img src=\"../../../assets/imagenes/HistoriaClinia.png\" height=\"200\" alt=\"\"   routerLink=\"../propietario/\">\r\n                    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif;\"> <em> Nueva Historia</em></p>\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <br>\r\n\r\n           <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                <img src=\"../../../assets/imagenes/Propietario.jpeg \" height=\"200\" alt=\"\"\r\n                    routerLink=\"../listar-propietarios/\">\r\n                <p style=\"font-family: Georgia, 'Times New Roman', Times, serif;\"> <em>Propietarios </em> </p>\r\n            </ion-col>\r\n\r\n            <ion-col *ngIf=\"condition\" size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <img src=\"../../../assets/imagenes/medico.png\" height=\"200\" alt=\"\"\r\n                  routerLink=\"../registro-medico\">\r\n              <p style=\"font-family: Georgia, 'Times New Roman', Times, serif;\"> <em>Nuevo medico </em> </p>\r\n          </ion-col>\r\n\r\n <!--               <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                    <img src=\"../../../assets/imagenes/RecetaMedica.png\" height=\"200\" alt=\"\"\r\n                        routerLink=\"../receta-medica\">\r\n                    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif;\"> <em>Receta Médica </em> </p>\r\n\r\n                 <ion-button hidden=\"{{condition}}\" color=\"dark\">Dark</ion-button>\r\n                <i *ngIf=\"condition\"> Hola como estas </i>\r\n                  </ion-col>-->\r\n\r\n              </ion-row>\r\n\r\n\r\n\r\n        </ion-grid>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_paginal-inicial_paginal-inicial_module_ts.js.map
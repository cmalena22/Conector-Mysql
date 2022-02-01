(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_historia-det_historia-det_module_ts"],{

/***/ 4106:
/*!*******************************************************************!*\
  !*** ./src/app/pages/historia-det/historia-det-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriaDetPageRoutingModule": () => (/* binding */ HistoriaDetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _historia_det_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historia-det.page */ 5039);




const routes = [
    {
        path: '',
        component: _historia_det_page__WEBPACK_IMPORTED_MODULE_0__.HistoriaDetPage
    }
];
let HistoriaDetPageRoutingModule = class HistoriaDetPageRoutingModule {
};
HistoriaDetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoriaDetPageRoutingModule);



/***/ }),

/***/ 8569:
/*!***********************************************************!*\
  !*** ./src/app/pages/historia-det/historia-det.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriaDetPageModule": () => (/* binding */ HistoriaDetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _historia_det_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historia-det-routing.module */ 4106);
/* harmony import */ var _historia_det_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historia-det.page */ 5039);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);








let HistoriaDetPageModule = class HistoriaDetPageModule {
};
HistoriaDetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _historia_det_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoriaDetPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ],
        declarations: [_historia_det_page__WEBPACK_IMPORTED_MODULE_1__.HistoriaDetPage]
    })
], HistoriaDetPageModule);



/***/ }),

/***/ 5039:
/*!*********************************************************!*\
  !*** ./src/app/pages/historia-det/historia-det.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriaDetPage": () => (/* binding */ HistoriaDetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_historia_det_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./historia-det.page.html */ 1078);
/* harmony import */ var _historia_det_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historia-det.page.scss */ 1697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/receta.service */ 56);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);








let HistoriaDetPage = class HistoriaDetPage {
    constructor(_localStorageRefService, consultaService, router, recetaService) {
        this._localStorageRefService = _localStorageRefService;
        this.consultaService = consultaService;
        this.router = router;
        this.recetaService = recetaService;
        this.cp = 1;
        this.consultasMedicas = [];
        this.consultaByHistoria = [];
        this.consultaok = [];
        this.buttonDisabled = false;
        this._localStorage = _localStorageRefService.localStorage;
        console.log("Dett");
        this.consultaService.$getObjectSource.subscribe(data => {
            this.idConsulta = data;
            console.log('reciboo desde historia iniciar inicial', this.idConsulta);
            this.listHistoria();
            this.listConsutalbyHistoria();
        });
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.listConsutalbyHistoria();
    }
    listHistoria() {
        this.consultaService.recuperoListHistoria(this.idConsulta).subscribe(data => {
            console.log(data);
            this.consultasMedicas = data;
        });
        console.log("consulllllllll", this.consultasMedicas);
    }
    listConsutalbyHistoria() {
        this.consultaService.consultamedicaByHistoria(this.idConsulta).subscribe(data => {
            this.consultaByHistoria = data;
            console.log('esta recibiendo las consultas ');
            console.log(typeof (this.consultaByHistoria));
            console.log(data, "historia");
            console.log(this.consultaByHistoria, "historiaaa");
            let tam = Object.keys(this.consultaByHistoria).length;
            var funcs = [];
            console.log(tam);
            //idConsultaMedica
            let idConsultaMedica = 0;
            /*
            console.log(this.consultaByHistoria[0])
            for (let i = 0; i <= tam; i++) {
              console.log('id consul',this.consultaByHistoria[i].idConsultaMedica)
              let valorid=this.consultaByHistoria[i].idConsultaMedica
              this.ConsultamedicaOkk(valorid)
            }
            */
        });
    }
    editarConstantesDetByConsultaId(idConsultaMedica) {
        this.consultaService.enviandoIdConsulta(idConsultaMedica);
        this.router.navigate(['/consultadet']);
    }
    crearReceta(idConsultaMedica) {
        this.recetaService.enviandoIdConsulta(idConsultaMedica);
        this.router.navigate(['/crearreceta']);
    }
    ConsultamedicaOk() {
        this.consultaService.listaConsultaOk(this.idConsulta).subscribe(data => {
            this.consultaok = data;
            console.log('consulta ok----', this.consultaok);
            if (this.consultaok == 'creado') {
                this.buttonDisabled = true;
            }
            else {
                this.buttonDisabled = false;
            }
            console.log(data, "consulta medica hay");
        });
    }
    ConsultamedicaOkk(valor) {
        this.consultaService.listaConsultaOk(valor).subscribe(data => {
            this.consultaok = data;
            console.log('consulta ok----', this.consultaok);
            if (this.consultaok == 'creado') {
                this.buttonDisabled = true;
            }
            else {
                this.buttonDisabled = false;
            }
            console.log(data, "consulta medica hay");
        });
    }
    verReceta(idConsultaMedica) {
        this.recetaService.enviandoIdConsulta(idConsultaMedica);
        this.router.navigate(['/verreceta']);
    }
    agregarNuevaConsulta() {
        this.router.navigate(['/agregar-consulta']);
    }
    atras() {
        this.router.navigate(['/historias-clinicas']);
    }
};
HistoriaDetPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__.LocalstoreService },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_2__.ConsultamedicaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_Services_receta_service__WEBPACK_IMPORTED_MODULE_3__.RecetaService }
];
HistoriaDetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-historia-det',
        template: _raw_loader_historia_det_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_historia_det_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoriaDetPage);



/***/ }),

/***/ 1697:
/*!***********************************************************!*\
  !*** ./src/app/pages/historia-det/historia-det.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 1000px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n  text-align: center;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-label {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: justify;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nh1 {\n  color: #063470;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-style: oblique;\n  -webkit-text-stroke: 0.5px #FFE333;\n  font-size: xx-large;\n  background-color: #cfd0dc;\n}\n\n.form-container ion-card ion-card-title {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  text-align: center;\n}\n\n.form-container ion-card ion-card-subtitle {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: justify;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n\n.form-container ion-grid ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\nion-card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 10px 50px 8px 26px;\n  cursor: pointer;\n}\n\nion-card {\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: 90px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlhLWRldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNDO0VBQ0MscUJBQUE7QUFFRjs7QUFBQztFQUNDLHFCQUFBO0FBR0Y7O0FBREM7RUFDQyxxQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHUSxtQkFBQTtFQUNSLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxzRUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS0E7O0FBSEE7RUFDQSxxREFBQTtBQU1BOztBQUZBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQyx5QkFBQTtBQUtEOztBQUZBO0VBQ0EscURBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUE7O0FBRkE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBS0E7O0FBSEE7RUFDQSxzRUFBQTtFQUNBLGtCQUFBO0FBTUE7O0FBSEE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNQTs7QUFIQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7QUFNQTs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtFQUNBLG1GQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDTSw0QkFBQTtFQUNGLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQU9KIiwiZmlsZSI6Imhpc3RvcmlhLWRldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiB9XHJcbiBpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiB9XHJcbiBpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiB9XHJcbiBodG1se1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IC0xNnB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5oZWlnaHQ6IDM4cHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWlucHV0e1xyXG5mb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuXHJcbmgxe1xyXG5jb2xvcjogIzA2MzQ3MDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG5mb250LXN0eWxlOiBvYmxpcXVlO1xyXG4td2Via2l0LXRleHQtc3Ryb2tlOiAwLjUwcHggICNGRkUzMzM7XHJcbmZvbnQtc2l6ZTogeHgtbGFyZ2UgOyAgXHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkMGRjIDsgXHJcblxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tY2FyZCBpb24tY2FyZC10aXRsZXtcclxuZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxyXG5cclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWNhcmQgaW9uLWNhcmQtc3VidGl0bGV7XHJcbmZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uZm9ybS1jb250YWluZXIgIHBhZ2luYXRpb24tY29udHJvbHN7XHJcbmZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1ncmlkICBpb24tYnV0dG9uIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzA2MzQ3MDtcclxubWFyZ2luLXRvcDogMTBweDtcclxuaGVpZ2h0OiAzOHB4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciAgaW9uLWJ1dHRvbntcclxuZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbmZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbn0gXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDhweCAyNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pb24tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 1078:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historia-det/historia-det.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n        </div>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n</ion-header>\r\n<ion-content>\r\n    <h1> <em> CARRERA DE MEDICINA VETERINARIA Y ZOOTECNIA </em></h1>\r\n    <div class=\"form-container\">\r\n        <ion-grid *ngFor=\"let item of consultasMedicas; let sep\">\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\">\r\n                <ion-icon name=\"reader-outline\"></ion-icon> <em> Historial Clínico </em>\r\n            </p>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"calendar-number-outline\"></ion-icon>\r\n                        <ion-label> No Historia:\r\n                            <br>\r\n                            {{item.idHistorial}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"today-outline\"></ion-icon>\r\n                        <ion-label>Adminision\r\n                            <br>\r\n                            {{item.diaDeAdminision.split('T')[0]}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                \r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"alarm-outline\"></ion-icon>\r\n                        <ion-label>Hora:\r\n                            <br>\r\n                            {{item.hora}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"paw-outline\"></ion-icon>\r\n                        <ion-label> Paciente:\r\n                            <br>\r\n                            {{item.mascota_id.nombre}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"medkit-outline\"></ion-icon>\r\n                        <ion-label>Veterinario Encargado:\r\n                            <br>\r\n                            {{item.cedula_id.nombres}} {{item.cedula_id.apellidos}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"person-outline\"></ion-icon>\r\n                        <ion-label>&nbsp; <em><b>Propietario:</b></em>\r\n                            {{item.mascota_id.id_mascota_propietario.propietario}}\r\n                            <br>\r\n                            &nbsp;<em><b>Correo:</b></em> {{item.mascota_id.id_mascota_propietario.correo}}\r\n                            <br>\r\n                            &nbsp;<em><b>Direccion:</b></em> {{item.mascota_id.id_mascota_propietario.direccion}}\r\n                            <br>\r\n                            &nbsp;<em><b>Telefono:</b></em> {{item.mascota_id.id_mascota_propietario.telefono}}\r\n                            <br>\r\n                            &nbsp;<em><b>Ciudad:</b></em> {{item.mascota_id.id_mascota_propietario.cuidad}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> 1.Datos del\r\n                    paciente:\r\n                </em></p>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"fish-outline\"></ion-icon>\r\n                        <ion-label> Especie:\r\n                            <br>&nbsp; {{item.mascota_id.especie_id.especie_id.nombreEspecie}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"paw-outline\"></ion-icon>\r\n                        <ion-label> Raza:\r\n                            <br>{{item.mascota_id.especie_id.nombre}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-label> Edad:\r\n                            <br>{{item.mascota_id.edad}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                        <ion-label>Fecha Nacimiento:\r\n                            <br> &nbsp; {{item.mascota_id.fechaNac}}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <ion-item>\r\n                        <ion-icon name=\"male-female-outline\"></ion-icon>\r\n                        <ion-label>Sexo: {{item.mascota_id.sexo}}</ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Consultas\r\n                            Medicas:\r\n                        </em></p>\r\n                    <ion-button color=\"shade\" (click)=\"agregarNuevaConsulta()\">Agregar consulta medica</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-card *ngFor=\"let item of consultaByHistoria |  paginate: {itemsPerPage:2, currentPage:cp} \">\r\n\r\n                <ion-card-content (click)=\"  editarConstantesDetByConsultaId(item.idConsultaMedica)\">\r\n                    <ion-card-subtitle>Fecha Consulta: {{item.fechaConsulta.split('T')[0]}}</ion-card-subtitle>\r\n                    <ion-card-subtitle>Motivo Consulta: {{item.motivoConsulta}}</ion-card-subtitle>\r\n                </ion-card-content>\r\n\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\"\r\n                            style=\" text-align: center;\">\r\n                            <ion-item>\r\n                                <img src=\"../../../assets/imagenes/recertamas.png\" height=\"30\"\r\n                                    style=\" text-align: center;\" alt=\"\" (click)=\"crearReceta(item.idConsultaMedica)\" />\r\n                                <ion-label style=\" font-weight: bold;\">Crear Receta</ion-label>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                            <ion-item>\r\n                                <img src=\"../../../assets/imagenes/verrece.png\" height=\"30\" alt=\"\"\r\n                                    (click)=\"verReceta(item.idConsultaMedica)\" />\r\n                                <ion-label style=\" font-weight: bold; font-style: italic;\">&nbsp;Ver Receta\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-card>\r\n        </ion-grid>\r\n        <div>\r\n            <pagination-controls (pageChange)=\"cp = $event\" previousLabel=\"Antes\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n        </div>\r\n        <div align=\"center\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-button color=\"shade\" (click)=\"atras()\">Atras</ion-button>\r\n                    </ion-col>\r\n                    <br>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_historia-det_historia-det_module_ts.js.map
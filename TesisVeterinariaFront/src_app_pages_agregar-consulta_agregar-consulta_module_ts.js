(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_agregar-consulta_agregar-consulta_module_ts"],{

/***/ 6323:
/*!***************************************************************************!*\
  !*** ./src/app/pages/agregar-consulta/agregar-consulta-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarConsultaPageRoutingModule": () => (/* binding */ AgregarConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _agregar_consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-consulta.page */ 5926);




const routes = [
    {
        path: '',
        component: _agregar_consulta_page__WEBPACK_IMPORTED_MODULE_0__.AgregarConsultaPage
    }
];
let AgregarConsultaPageRoutingModule = class AgregarConsultaPageRoutingModule {
};
AgregarConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarConsultaPageRoutingModule);



/***/ }),

/***/ 5088:
/*!*******************************************************************!*\
  !*** ./src/app/pages/agregar-consulta/agregar-consulta.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarConsultaPageModule": () => (/* binding */ AgregarConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _agregar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-consulta-routing.module */ 6323);
/* harmony import */ var _agregar_consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-consulta.page */ 5926);







let AgregarConsultaPageModule = class AgregarConsultaPageModule {
};
AgregarConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarConsultaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_agregar_consulta_page__WEBPACK_IMPORTED_MODULE_1__.AgregarConsultaPage]
    })
], AgregarConsultaPageModule);



/***/ }),

/***/ 5926:
/*!*****************************************************************!*\
  !*** ./src/app/pages/agregar-consulta/agregar-consulta.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarConsultaPage": () => (/* binding */ AgregarConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_agregar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./agregar-consulta.page.html */ 6655);
/* harmony import */ var _agregar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-consulta.page.scss */ 6866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Modelo/ConstantesFisiologicas */ 8350);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/iniciosesion.service */ 785);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);










let AgregarConsultaPage = class AgregarConsultaPage {
    constructor(_localStorageRefService, formBuilder, inicioservice, router, consultaMedicaService) {
        this._localStorageRefService = _localStorageRefService;
        this.formBuilder = formBuilder;
        this.inicioservice = inicioservice;
        this.router = router;
        this.consultaMedicaService = consultaMedicaService;
        this.constatesCabList = [];
        this.constantesFisioCab = [];
        this.InicioDetails = {
            motivoConsulta: '', vacunacion: '', desparacitacion: '', estadoR: '', producto: '', fecha: '',
            procedencia: '', anamnesis: '', diagnostico: '',
            pronostico: '', tratamiento: '', observaciones: '', idMascota: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerConstantesCab();
        this.listConsutalbyHistoria();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.form = this.formBuilder.group({
            peso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)]],
            FCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)]],
            t: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)]],
            FResp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)]],
            pulso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)]],
            otras: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            mucosas: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            turgenciapiel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.consultaMedicaService.$getObjectSource.subscribe(data => {
            this.idHistoria = data;
            console.log('reciboo id de historia', this.idHistoria);
        });
    }
    obtenerConstantesCab() {
        this.consultaMedicaService.obtenerConstantesCab().subscribe((data) => {
            this.constatesCabList = data;
            console.log(data);
        });
    }
    guardarASA(event) {
        this.opcionAsa = event.detail.value;
        console.log('ASA', this.opcionAsa);
    }
    guardarEstadoF(event) {
        this.opcionEstadoFisico = event.detail.value;
        console.log('Estado Fisico', this.opcionEstadoFisico);
    }
    guardarEstadoM(event) {
        this.opcionEstadoMental = event.detail.value;
        console.log('Estado Mental', this.opcionEstadoMental);
    }
    guardarVacunacion(event) {
        this.opcionVacunacion = event.detail.value;
        console.log('Vacunacion', this.opcionVacunacion);
    }
    guardarDesparasitacion(event) {
        this.opcionDesparacitacion = event.detail.value;
        console.log('Desparacitacion', this.opcionDesparacitacion);
    }
    guardarEstadoR(event) {
        this.opcionEstadoReproductivo = event.detail.value;
        console.log('Respoductivo', this.opcionEstadoReproductivo);
    }
    guardarProcedencia(event) {
        this.opcionProcedencia = event.detail.value;
        console.log('Procedencia', this.opcionProcedencia);
    }
    guardarFechasV(event) {
        this.opcionFechaVacuna = event.detail.value;
        this.opcionFechaVacuna = this.opcionFechaVacuna.split('T')[0];
        console.log(this.opcionFechaVacuna);
    }
    cancelar() {
        this.router.navigate(['/historia-det']);
    }
    guardarConsulta() {
        this.InicioDetails.vacunacion = this.opcionVacunacion;
        this.InicioDetails.desparacitacion = this.opcionDesparacitacion;
        this.InicioDetails.estadoR = this.opcionEstadoReproductivo;
        this.InicioDetails.fecha = this.opcionFechaVacuna;
        this.InicioDetails.procedencia = this.opcionProcedencia;
        this.InicioDetails.idMascota = this.idHistoria;
        console.log('consulta --------------', this.InicioDetails);
        this.consultaMedicaService.crearConsultaMByHistoria(this.InicioDetails)
            .subscribe((data) => {
            this.guardarConstantesFisio();
            this.obtenerConstantesCab();
            this.listConsutalbyHistoria();
            this.router.navigate(['/historia-det']);
            console.log('Estamos en el metodod  de consulta M by historia');
            console.log("id de consulta", data);
        }, (error) => {
            console.log(error);
        });
        this.listConsutalbyHistoria();
    }
    guardarConstantesFisio() {
        let constantePeso = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[0].constantes_idCab, this.peso);
        let constanteT = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[1].constantes_idCab, this.t);
        let constanteFCard = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[2].constantes_idCab, this.FCard);
        let constanteFResp = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[3].constantes_idCab, this.FResp);
        let constantemucosas = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[4].constantes_idCab, this.mucosas);
        let constanteFAsa = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[5].constantes_idCab, this.opcionAsa);
        let constanteturgenciapiel = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[6].constantes_idCab, this.turgenciapiel);
        let constantepulso = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[7].constantes_idCab, this.pulso);
        let constanteotras = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[8].constantes_idCab, this.otras);
        let constantetEstadoF = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[9].constantes_idCab, this.opcionEstadoFisico);
        let constanteEstadoM = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[10].constantes_idCab, this.opcionEstadoMental);
        this.constantesFisioCab.push(constantePeso);
        this.constantesFisioCab.push(constanteT);
        this.constantesFisioCab.push(constanteFCard);
        this.constantesFisioCab.push(constanteFResp);
        this.constantesFisioCab.push(constantemucosas);
        this.constantesFisioCab.push(constanteFAsa);
        this.constantesFisioCab.push(constanteturgenciapiel);
        this.constantesFisioCab.push(constantepulso);
        this.constantesFisioCab.push(constanteotras);
        this.constantesFisioCab.push(constantetEstadoF);
        this.constantesFisioCab.push(constanteEstadoM);
        console.log(this.constantesFisioCab);
        this.consultaMedicaService.crearConstantesF(this.constantesFisioCab);
        this.listConsutalbyHistoria();
    }
    listConsutalbyHistoria() {
        this.consultaMedicaService.consultamedicaByHistoria(this.idConsultaMedica).subscribe(data => {
            console.log('esta recibiendo las consultas ');
            console.log(data, "historia");
        });
    }
};
AgregarConsultaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_5__.LocalstoreService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_4__.IniciosesionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_3__.ConsultamedicaService }
];
AgregarConsultaPage.propDecorators = {
    InicioDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
AgregarConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-agregar-consulta',
        template: _raw_loader_agregar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_agregar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AgregarConsultaPage);



/***/ }),

/***/ 6866:
/*!*******************************************************************!*\
  !*** ./src/app/pages/agregar-consulta/agregar-consulta.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 800px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nspan {\n  color: red;\n  align-content: center;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItY29uc3VsdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDRztFQUNDLHFCQUFBO0FBRUo7O0FBQUc7RUFDQyxxQkFBQTtBQUdKOztBQURFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLTjs7QUFBQTtFQUNJLHFEQUFBO0FBR0o7O0FBREE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxxREFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQUlGOztBQUFBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUdGIiwiZmlsZSI6ImFncmVnYXItY29uc3VsdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuc3BhbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcblxyXG59XHJcbiAgXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taW5wdXQgaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbn0gXHJcbi5mb3JtLWNvbnRhaW5lciAgaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbn0gXHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ 6655:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar-consulta/agregar-consulta.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../../../assets/imagenes/Logo.jpg\" height=\"50\" alt=\"\" />\r\n    </div>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\" />\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script type=\"text/javascript\"></script>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"guardarConsulta(InicioDetails)\">\r\n    <div class=\"form-container\">\r\n\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Consulta Médicas\r\n        </em>\r\n\r\n      </p>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> 1. Constantes\r\n          Fisiológicas\r\n        </em>\r\n\r\n      </p>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"Peso\" [(ngModel)]=\"peso\" style=\"text-align: center;\" formControlName=\"peso\">\r\n                <ion-icon name=\"barbell-outline\"></ion-icon>\r\n                <ion-label>Peso:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.peso.errors\">\r\n              <span *ngIf=\"form.controls.peso.errors.pattern\"> Ingrese solo números </span>\r\n            </div>\r\n          </ion-col>\r\n\r\n\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"F.Card\" [(ngModel)]=\"FCard\" style=\"text-align: center;\" formControlName=\"FCard\">\r\n                <ion-icon name=\"fitness-outline\"></ion-icon>\r\n                <ion-label>F.Card:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.FCard.errors\">\r\n              <span *ngIf=\"form.controls.FCard.errors.pattern\"> Ingrese solo números </span>\r\n            </div>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"T\" [(ngModel)]=\"t\" style=\"text-align: center;\" formControlName=\"t\">\r\n                <ion-icon name=\"thermometer\"></ion-icon>\r\n                <ion-label>T:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.t.errors\">\r\n              <span *ngIf=\"form.controls.t.errors.pattern\"> Ingrese solo números </span>\r\n            </div>\r\n\r\n          </ion-col>\r\n\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-input placeholder=\"F.Res\" [(ngModel)]=\"FResp\" style=\"text-align: center;\" formControlName=\"FResp\">\r\n                <ion-icon name=\"heart-outline\"></ion-icon>\r\n                <ion-label>F.Res:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.FResp.errors\">\r\n              <span *ngIf=\"form.controls.FResp.errors.pattern\"> Ingrese solo números </span>\r\n            </div>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"Pulso\" [(ngModel)]=\"pulso\" style=\"text-align: center;\" formControlName=\"pulso\">\r\n                <ion-icon name=\"pulse-outline\"></ion-icon>\r\n                <ion-label>Pulso:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.pulso.errors\">\r\n              <span *ngIf=\"form.controls.pulso.errors.pattern\"> Ingrese solo números </span>\r\n            </div>\r\n\r\n          </ion-col>\r\n\r\n\r\n\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"Otras\" [(ngModel)]=\"otras\" style=\"text-align: center;\" formControlName=\"otras\">\r\n                <ion-icon name=\"shuffle\"></ion-icon>\r\n                <ion-label>Otras:</ion-label>\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-item>\r\n                  <ion-input placeholder=\"Mucosas\" [(ngModel)]=\"mucosas\" style=\"text-align: center;\"\r\n                  formControlName=\"mucosas\">\r\n                      <ion-icon name=\"barcode-outline\"></ion-icon>\r\n                      <ion-label>Mucosas:</ion-label>\r\n                  </ion-input>\r\n              </ion-item>\r\n\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n                <ion-input placeholder=\"Turgencia Piel\" [(ngModel)]=\"turgenciapiel\"\r\n                    style=\"text-align: center;\" formControlName=\"turgenciapiel\">\r\n                    <ion-icon name=\"paw\"></ion-icon>\r\n                    <ion-label>Turgencia Piel:</ion-label>\r\n                </ion-input>\r\n            </ion-item>\r\n\r\n        </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-icon name=\"paw\"></ion-icon>\r\n              <ion-label> ASA</ion-label>\r\n              <ion-select (ionChange)=guardarASA($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"I\">I</ion-select-option>\r\n                <ion-select-option value=\"II\">II</ion-select-option>\r\n                <ion-select-option value=\"III\">III</ion-select-option>\r\n                <ion-select-option value=\"IV\">IV</ion-select-option>\r\n                <ion-select-option value=\"V\">V</ion-select-option>\r\n              </ion-select>\r\n              \r\n            </ion-item>\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-icon name=\"heart-circle-outline\"></ion-icon>\r\n              <ion-label>Estado Fisico</ion-label>\r\n              <ion-select (ionChange)=guardarEstadoF($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Normal\">Normal</ion-select-option>\r\n                <ion-select-option value=\"Caquexia\">Caquexia</ion-select-option>\r\n                <ion-select-option value=\"Bajo Peso\">Bajo Peso</ion-select-option>\r\n                <ion-select-option value=\"Sobre Peso\">Sobre Peso</ion-select-option>\r\n                <ion-select-option value=\"Obeso\">Obeso</ion-select-option>\r\n\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-icon name=\"sunny-outline\"></ion-icon>\r\n              <ion-label>Estado Mental</ion-label>\r\n              <ion-select (ionChange)=guardarEstadoM($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Vigil\">Vigil</ion-select-option>\r\n                <ion-select-option value=\"Deprimido\">Deprimido</ion-select-option>\r\n                <ion-select-option value=\"Exitado\">Exitado</ion-select-option>\r\n                <ion-select-option value=\"Dolor\">Dolor</ion-select-option>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> 2. Motivo de la\r\n          consulta\r\n        </em>\r\n\r\n      </p>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-textarea placeholder=\"Motivo Consulta...\" [(ngModel)]=\"InicioDetails.motivoConsulta\"\r\n                style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n              </ion-textarea>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> 3. Historia\r\n        </em> </p>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-icon name=\"eyedrop-outline\"></ion-icon>\r\n              <ion-label> Vacunación</ion-label>\r\n              <ion-select (ionChange)=guardarVacunacion($event) placeholder=\"\" style=\"text-align: center;\" okText=\"Ok\"\r\n                cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                <ion-select-option value=\"No\">No</ion-select-option>\r\n                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-icon name=\"flask-outline\"></ion-icon>\r\n              <ion-label>Desparasitación</ion-label>\r\n              <ion-select (ionChange)=guardarDesparasitacion($event) placeholder=\"\" style=\"text-align: center;\"\r\n                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                <ion-select-option value=\"No\">No</ion-select-option>\r\n                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-icon name=\"transgender\"></ion-icon>\r\n              <ion-label>Estado Reproductivo</ion-label>\r\n              <ion-select (ionChange)=guardarEstadoR($event) placeholder=\"\" style=\"text-align: center;\" okText=\"Ok\"\r\n                cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Gestante\">Gestante</ion-select-option>\r\n                <ion-select-option value=\"Esteril\">Esteril</ion-select-option>\r\n                <ion-select-option value=\"Lactante\">Lactante</ion-select-option>\r\n                <ion-select-option value=\"Celo\">Celo</ion-select-option>\r\n                <ion-select-option value=\"Entero\">Entero</ion-select-option>\r\n                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-input placeholder=\"Producto\" [(ngModel)]=\"InicioDetails.producto\" style=\"text-align: center;\"\r\n                required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n                <ion-icon name=\"bandage-outline\"></ion-icon>              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n            <ion-item>\r\n              <ion-icon name=\"calendar-outline\"></ion-icon>\r\n              <ion-label>Fecha</ion-label>\r\n              <ion-datetime placeholder=\"\" display-timezone=\"utc\" displayFormat=\"YYYY-MM-DD\" doneText=\"Ok\"\r\n                cancelText=\"Cancelar\" (ionChange)=guardarFechasV($event)></ion-datetime>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n            <ion-item>\r\n              <ion-icon name=\"locate\"></ion-icon>\r\n              <ion-label>Procedencia</ion-label>\r\n              <ion-select (ionChange)=guardarProcedencia($event) placeholder=\"\" style=\"text-align: center;\" okText=\"Ok\"\r\n                cancelText=\"Cancelar\">\r\n                <ion-select-option value=\"Rural\">Rural</ion-select-option>\r\n                <ion-select-option value=\"Urbano\">Urbano</ion-select-option>\r\n                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Anamnesis\r\n        </em> </p>\r\n      <ion-item>\r\n        <ion-textarea placeholder=\"Anamnesis\" [(ngModel)]=\"InicioDetails.anamnesis\" style=\"text-align: center;\"\r\n          required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n        </ion-textarea>\r\n      </ion-item>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Diagnostico\r\n        </em> </p>\r\n      <ion-item>\r\n        <ion-textarea placeholder=\"Diagnostico\" [(ngModel)]=\"InicioDetails.diagnostico\" style=\"text-align: center;\"\r\n          required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Pronostico\r\n        </em> </p>\r\n      <ion-item>\r\n        <ion-textarea placeholder=\"Pronostico\" [(ngModel)]=\"InicioDetails.pronostico\" style=\"text-align: center;\"\r\n          required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n        </ion-textarea>\r\n      </ion-item>\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Tratamiento\r\n        </em> </p>\r\n      <ion-item>\r\n        <ion-textarea placeholder=\"Tratamiento\" [(ngModel)]=\"InicioDetails.tratamiento\" style=\"text-align: center;\"\r\n          required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Observaciones\r\n        </em> </p>\r\n\r\n      <ion-item>\r\n        <ion-textarea placeholder=\"Observaciones\" [(ngModel)]=\"InicioDetails.observaciones\" style=\"text-align: center;\"\r\n          required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n        </ion-textarea>\r\n      </ion-item>\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" (click)=\"cancelar()\">Cancelar</ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" type=\"submit\" [disabled]=\"form.invalid\">Guardar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_agregar-consulta_agregar-consulta_module_ts.js.map
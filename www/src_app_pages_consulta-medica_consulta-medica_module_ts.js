(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_consulta-medica_consulta-medica_module_ts"],{

/***/ 9219:
/*!*************************************************************************!*\
  !*** ./src/app/pages/consulta-medica/consulta-medica-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaMedicaPageRoutingModule": () => (/* binding */ ConsultaMedicaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _consulta_medica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-medica.page */ 4684);




const routes = [
    {
        path: '',
        component: _consulta_medica_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaMedicaPage
    }
];
let ConsultaMedicaPageRoutingModule = class ConsultaMedicaPageRoutingModule {
};
ConsultaMedicaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultaMedicaPageRoutingModule);



/***/ }),

/***/ 2066:
/*!*****************************************************************!*\
  !*** ./src/app/pages/consulta-medica/consulta-medica.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaMedicaPageModule": () => (/* binding */ ConsultaMedicaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _consulta_medica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-medica-routing.module */ 9219);
/* harmony import */ var _consulta_medica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta-medica.page */ 4684);







let ConsultaMedicaPageModule = class ConsultaMedicaPageModule {
};
ConsultaMedicaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _consulta_medica_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultaMedicaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_consulta_medica_page__WEBPACK_IMPORTED_MODULE_1__.ConsultaMedicaPage]
    })
], ConsultaMedicaPageModule);



/***/ }),

/***/ 4684:
/*!***************************************************************!*\
  !*** ./src/app/pages/consulta-medica/consulta-medica.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaMedicaPage": () => (/* binding */ ConsultaMedicaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_consulta_medica_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta-medica.page.html */ 8271);
/* harmony import */ var _consulta_medica_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta-medica.page.scss */ 788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Modelo/ConstantesFisiologicas */ 8350);
/* harmony import */ var src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/consultamedica.service */ 6862);
/* harmony import */ var src_app_Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/iniciosesion.service */ 785);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);










let ConsultaMedicaPage = class ConsultaMedicaPage {
    constructor(_localStorageRefService, formBuilder, actRoute, consultaMedicaService, inicioservice, router) {
        this._localStorageRefService = _localStorageRefService;
        this.formBuilder = formBuilder;
        this.actRoute = actRoute;
        this.consultaMedicaService = consultaMedicaService;
        this.inicioservice = inicioservice;
        this.router = router;
        this.constatesCabList = [];
        this.constantesFisioCab = [];
        this.InicioDetails = {
            motivoConsulta: '', vacunacion: '', desparacitacion: '', estadoR: '', producto: '', fecha: '',
            procedencia: '', anamnesis: '', diagnostico: '',
            pronostico: '', tratamiento: '', observaciones: '', idMascota: '', medico: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
        this.idMascota = actRoute.snapshot.params.idMascota;
        console.log(this.idMascota);
        this.obtenerConstantesCab();
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
            turgenciapiel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            tiempocapilar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.inicioservice.$getObjectSource.subscribe(data => {
            this.correop = data;
            console.log('reciboo desde paag inicial para consulta medica', this.correop.correo);
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
    guardarConsulta() {
        this.InicioDetails.vacunacion = this.opcionVacunacion;
        this.InicioDetails.desparacitacion = this.opcionDesparacitacion;
        this.InicioDetails.estadoR = this.opcionEstadoReproductivo;
        this.InicioDetails.fecha = this.opcionFechaVacuna;
        this.InicioDetails.procedencia = this.opcionProcedencia;
        this.InicioDetails.idMascota = this.idMascota;
        this.InicioDetails.medico = this.correop.correo;
        console.log('consulta --------------', this.InicioDetails);
        this.consultaMedicaService.crearConsultaM(this.InicioDetails)
            .subscribe((data) => {
            this.guardarConstantesFisio();
            console.log('Estamos en el metodod  de segunda consulta M');
            this.idconsulta = data;
            console.log("id de consulta", this.idconsulta);
        }, (error) => {
            console.log(error);
        });
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
        let tiempocapilar = new src_app_Modelo_ConstantesFisiologicas__WEBPACK_IMPORTED_MODULE_2__.ConstantesFiosologicas(this.constatesCabList[11].constantes_idCab, this.tiempocapilar);
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
        this.constantesFisioCab.push(tiempocapilar);
        console.log(this.constantesFisioCab);
        this.consultaMedicaService.crearConstantesF(this.constantesFisioCab);
        this.router.navigate(['/paginal-inicial/']);
    }
};
ConsultaMedicaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_5__.LocalstoreService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_Services_consultamedica_service__WEBPACK_IMPORTED_MODULE_3__.ConsultamedicaService },
    { type: src_app_Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_4__.IniciosesionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ConsultaMedicaPage.propDecorators = {
    InicioDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ConsultaMedicaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-consulta-medica',
        template: _raw_loader_consulta_medica_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_medica_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaMedicaPage);



/***/ }),

/***/ 788:
/*!*****************************************************************!*\
  !*** ./src/app/pages/consulta-medica/consulta-medica.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 1000px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nion-select {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nspan {\n  color: red;\n  align-content: center;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-select {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-datetime {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-textarea {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLW1lZGljYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNHO0VBQ0MscUJBQUE7QUFFSjs7QUFBRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSU47O0FBREU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBREE7RUFDSSxxREFBQTtBQUlKOztBQUZBO0VBQ0kscURBQUE7QUFLSjs7QUFIQTtFQUNJLHFEQUFBO0FBTUo7O0FBSEE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBTUo7O0FBRkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBREU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSiIsImZpbGUiOiJjb25zdWx0YS1tZWRpY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgIH1cclxuICAgaHRtbHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgcHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBtYXJnaW46IC0xNnB4O1xyXG5cclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MzQ3MDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4gIFxyXG5zcGFue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIFxyXG4gIH1cclxuICAgIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpb24taW5wdXQgaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiAgfSBcclxuICAuZm9ybS1jb250YWluZXIgIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH0gXHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1pbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1zZWxlY3R7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1kYXRldGltZXtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi10ZXh0YXJlYXtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH0gXHJcbiAgLmZvcm0tY29udGFpbmVyICBpb24tYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfSAiXX0= */");

/***/ }),

/***/ 8271:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consulta-medica/consulta-medica.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n        </div>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n<ion-content>\r\n   \r\n\r\n    \r\n    <br>\r\n    <form  [formGroup]=\"form\"  (ngSubmit)=\"guardarConsulta(InicioDetails)\">\r\n\r\n        <div class=\"form-container\">\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Consulta Médicas\r\n                </em>\r\n\r\n            </p>\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"><ion-icon name=\"reader-outline\"></ion-icon> <em> Constantes\r\n                    Fisiológicas\r\n                </em>\r\n\r\n            </p>\r\n\r\n            <ion-grid>\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Peso\" [(ngModel)]=\"peso\" style=\"text-align: center;\"  formControlName=\"peso\">\r\n                                <ion-icon name=\"barbell-outline\"></ion-icon>\r\n                                <ion-label> &nbsp;Peso:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <div *ngIf=\"form.controls.peso.errors\">\r\n                            <span *ngIf=\"form.controls.peso.errors.pattern\"> Ingrese solo números </span>                   \r\n                          </div>\r\n                    </ion-col>\r\n\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"F.Card\" [(ngModel)]=\"FCard\" style=\"text-align: center;\"\r\n                                formControlName=\"FCard\">\r\n                                <ion-icon name=\"fitness-outline\"></ion-icon>\r\n                                <ion-label> &nbsp;F.Card:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <div *ngIf=\"form.controls.FCard.errors\">\r\n                            <span *ngIf=\"form.controls.FCard.errors.pattern\"> Ingrese solo números </span>                   \r\n                          </div>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"T\" [(ngModel)]=\"t\" style=\"text-align: center;\" formControlName=\"t\">\r\n                                <ion-icon name=\"thermometer\"></ion-icon>\r\n                                <ion-label>&nbsp;T:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <div *ngIf=\"form.controls.t.errors\">\r\n                            <span *ngIf=\"form.controls.t.errors.pattern\"> Ingrese solo números </span>                   \r\n                          </div>\r\n\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"F.Res\" [(ngModel)]=\"FResp\" style=\"text-align: center;\"\r\n                            formControlName=\"FResp\">\r\n                            <ion-icon name=\"heart-outline\"></ion-icon>\r\n                                                            <ion-label>&nbsp;F.Res:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <div *ngIf=\"form.controls.FResp.errors\">\r\n                            <span *ngIf=\"form.controls.FResp.errors.pattern\"> Ingrese solo números </span>                   \r\n                          </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Pulso\" [(ngModel)]=\"pulso\" style=\"text-align: center;\"\r\n                            formControlName=\"pulso\">\r\n                                <ion-icon name=\"pulse-outline\"></ion-icon>\r\n                                <ion-label>&nbsp;Pulso:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <div *ngIf=\"form.controls.pulso.errors\">\r\n                            <span *ngIf=\"form.controls.pulso.errors.pattern\"> Ingrese solo números </span>                   \r\n                          </div>\r\n\r\n                    </ion-col>\r\n\r\n\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Otras\" [(ngModel)]=\"otras\" style=\"text-align: center;\"\r\n                            formControlName=\"otras\">\r\n                                <ion-icon name=\"shuffle\"></ion-icon>\r\n                                <ion-label>&nbsp;Otras:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n\r\n\r\n                </ion-row>\r\n\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Mucosas\" [(ngModel)]=\"mucosas\" style=\"text-align: center;\"\r\n                            formControlName=\"mucosas\">\r\n                                <ion-icon name=\"barcode-outline\"></ion-icon>\r\n                                <ion-label>&nbsp;Mucosas:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n                    \r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Turgencia Piel\" [(ngModel)]=\"turgenciapiel\"\r\n                                style=\"text-align: center;\" formControlName=\"turgenciapiel\">\r\n                                <ion-icon name=\"paw-outline\"></ion-icon>\r\n                                <ion-label>&nbsp;Turgencia Piel:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-icon name=\"paw-outline\"></ion-icon>\r\n                            <ion-label>&nbsp; ASA</ion-label>\r\n                            <ion-select (ionChange)=guardarASA($event) placeholder=\"Seleccione \"\r\n                                style=\"text-align: center;\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"I\">I</ion-select-option>\r\n                                <ion-select-option value=\"II\">II</ion-select-option>\r\n                                <ion-select-option value=\"III\">III</ion-select-option>\r\n                                <ion-select-option value=\"IV\">IV</ion-select-option>\r\n                                <ion-select-option value=\"V\">V</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-icon name=\"heart-circle-outline\"></ion-icon>\r\n                             <ion-label>&nbsp;Estado Fisico</ion-label>\r\n                            <ion-select (ionChange)=guardarEstadoF($event) placeholder=\"Seleccione \"\r\n                                style=\"text-align: center;\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Normal\">Normal</ion-select-option>\r\n                                <ion-select-option value=\"Caquexia\">Caquexia</ion-select-option>\r\n                                <ion-select-option value=\"Bajo Peso\">Bajo Peso</ion-select-option>\r\n                                <ion-select-option value=\"Sobre Peso\">Sobre Peso</ion-select-option>\r\n                                <ion-select-option value=\"Obeso\">Obeso</ion-select-option>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-icon name=\"sunny-outline\"></ion-icon>\r\n                            <ion-label>&nbsp;Estado Mental</ion-label>\r\n                            <ion-select (ionChange)=guardarEstadoM($event) placeholder=\"Seleccione \"\r\n                                style=\"text-align: center;\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Vigil\">Vigil</ion-select-option>\r\n                                <ion-select-option value=\"Deprimido\">Deprimido</ion-select-option>\r\n                                <ion-select-option value=\"Exitado\">Exitado</ion-select-option>\r\n                                <ion-select-option value=\"Dolor\">Dolor</ion-select-option>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Tiempo de llenado capilar\" [(ngModel)]=\"tiempocapilar\" style=\"text-align: center;\"\r\n                            formControlName=\"tiempocapilar\">\r\n                                <ion-icon name=\"barcode-outline\"></ion-icon>\r\n                                <ion-label>&nbsp;Tiempo de llenado capilar:</ion-label>\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n                    \r\n                </ion-row>\r\n\r\n\r\n            </ion-grid>\r\n\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"><ion-icon name=\"document-outline\"></ion-icon> <em>  Motivo de la\r\n                    consulta\r\n                </em>\r\n\r\n            </p>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-textarea placeholder=\"Motivo Consulta...\" [(ngModel)]=\"InicioDetails.motivoConsulta\"\r\n                                style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n                            </ion-textarea>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <ion-icon name=\"document-text-outline\"></ion-icon><em>  Historia\r\n                </em> </p>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-icon name=\"eyedrop-outline\"></ion-icon>\r\n                            <ion-label>&nbsp; Vacunación</ion-label>\r\n                            <ion-select (ionChange)=guardarVacunacion($event) placeholder=\"\" style=\"text-align: center;\"\r\n                                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                                <ion-select-option value=\"No\">No</ion-select-option>\r\n                                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-icon name=\"flask-outline\"></ion-icon>\r\n                            <ion-label>&nbsp;Desparasitación</ion-label>\r\n                            <ion-select (ionChange)=guardarDesparasitacion($event) placeholder=\"\"\r\n                                style=\"text-align: center;\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                                <ion-select-option value=\"No\">No</ion-select-option>\r\n                                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-icon name=\"transgender\"></ion-icon>\r\n                            <ion-label>&nbsp;Estado Reproductivo</ion-label>\r\n                            <ion-select (ionChange)=guardarEstadoR($event) placeholder=\"\" style=\"text-align: center;\"\r\n                                okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Gestante\">Gestante</ion-select-option>\r\n                                <ion-select-option value=\"Esteril\">Esteril</ion-select-option>\r\n                                <ion-select-option value=\"Lactante\">Lactante</ion-select-option>\r\n                                <ion-select-option value=\"Celo\">Celo</ion-select-option>\r\n                                <ion-select-option value=\"Entero\">Entero</ion-select-option>\r\n                                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-input placeholder=\"Producto\" [(ngModel)]=\"InicioDetails.producto\"\r\n                                style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <ion-icon name=\"bandage-outline\"></ion-icon>\r\n                            </ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                        <ion-item>\r\n                            <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                            <ion-label>&nbsp;Fecha</ion-label>\r\n                            <ion-datetime placeholder=\"\" display-timezone=\"utc\" displayFormat=\"YYYY-MM-DD\" doneText=\"Ok\"\r\n                                cancelText=\"Cancelar\" (ionChange)=guardarFechasV($event)></ion-datetime>\r\n                        </ion-item>\r\n\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n\r\n                        <ion-item>\r\n                            <ion-icon name=\"locate\"></ion-icon>\r\n                            <ion-label>&nbsp;Procedencia</ion-label>\r\n                            <ion-select (ionChange)=guardarProcedencia($event) placeholder=\"\"\r\n                                style=\"text-align: center;\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n                                <ion-select-option value=\"Rural\">Rural</ion-select-option>\r\n                                <ion-select-option value=\"Urbano\">Urbano</ion-select-option>\r\n                                <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n            </ion-grid>\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Anamnesis\r\n                </em> </p>\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Anamnesis\" [(ngModel)]=\"InicioDetails.anamnesis\" style=\"text-align: center;\"\r\n                    required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n                </ion-textarea>\r\n            </ion-item>\r\n           \r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Diagnostico\r\n                </em> </p>\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Diagnostico\" [(ngModel)]=\"InicioDetails.diagnostico\"\r\n                    style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n                </ion-textarea>\r\n            </ion-item>\r\n\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Pronostico\r\n                </em> </p>\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Pronostico\" [(ngModel)]=\"InicioDetails.pronostico\"\r\n                    style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n                </ion-textarea>\r\n            </ion-item>\r\n\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Tratamiento\r\n                </em> </p>\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Tratamiento\" [(ngModel)]=\"InicioDetails.tratamiento\"\r\n                    style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n                </ion-textarea>\r\n            </ion-item>\r\n\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Observaciones\r\n                </em> </p>\r\n\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Observaciones\" [(ngModel)]=\"InicioDetails.observaciones\"\r\n                    style=\"text-align: center;\" required=\"true\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n                </ion-textarea>\r\n            </ion-item>\r\n\r\n            <div align=\"center\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                            <ion-button color=\"shade\" type=\"submit\" [disabled]=\"form.invalid\">Siguiente\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consulta-medica_consulta-medica_module_ts.js.map
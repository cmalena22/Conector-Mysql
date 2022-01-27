(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_registro-medico_registro-medico_module_ts"],{

/***/ 9306:
/*!*************************************************************************!*\
  !*** ./src/app/pages/registro-medico/registro-medico-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMedicoPageRoutingModule": () => (/* binding */ RegistroMedicoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _registro_medico_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-medico.page */ 220);




const routes = [
    {
        path: '',
        component: _registro_medico_page__WEBPACK_IMPORTED_MODULE_0__.RegistroMedicoPage
    }
];
let RegistroMedicoPageRoutingModule = class RegistroMedicoPageRoutingModule {
};
RegistroMedicoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroMedicoPageRoutingModule);



/***/ }),

/***/ 1576:
/*!*****************************************************************!*\
  !*** ./src/app/pages/registro-medico/registro-medico.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMedicoPageModule": () => (/* binding */ RegistroMedicoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _registro_medico_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-medico-routing.module */ 9306);
/* harmony import */ var _registro_medico_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-medico.page */ 220);







let RegistroMedicoPageModule = class RegistroMedicoPageModule {
};
RegistroMedicoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_medico_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroMedicoPageRoutingModule
        ],
        declarations: [_registro_medico_page__WEBPACK_IMPORTED_MODULE_1__.RegistroMedicoPage]
    })
], RegistroMedicoPageModule);



/***/ }),

/***/ 220:
/*!***************************************************************!*\
  !*** ./src/app/pages/registro-medico/registro-medico.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMedicoPage": () => (/* binding */ RegistroMedicoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_registro_medico_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-medico.page.html */ 1502);
/* harmony import */ var _registro_medico_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-medico.page.scss */ 6193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_registromedico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/registromedico.service */ 7669);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);








let RegistroMedicoPage = class RegistroMedicoPage {
    constructor(_localStorageRefService, formBuilder, router, actRoute, registromedi) {
        this._localStorageRefService = _localStorageRefService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.actRoute = actRoute;
        this.registromedi = registromedi;
        this.especialidad = [];
        //fotose:any[] = [];
        this.MedicoDetails = {
            cedula: '', nombres: '', apellidos: '', direccion: '',
            fechaNac: '', correo: '', contrasena: '', celular: '', titulo: '',
            fotomedico: '', especialidad_id: '', usuario_id: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerEspecialidad();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.form = this.formBuilder.group({
            cedula: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)
                ]
            ],
            nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            fechnac: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)
                ])],
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            foto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            espec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[u]+[p]+[s]+.[e]+[d]+[u]+.[e]+[c.]+$')]],
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
        });
    }
    guardarFoto(event) {
        const files = event.target.files;
        console.log(files);
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        let archivos = event.target.files;
        let readerr = new FileReader();
        readerr.readAsDataURL(archivos[0]);
        readerr.onloadend = () => {
            console.log(readerr.result);
            this.fotose = readerr.result;
            console.log(this.fotose);
        };
    }
    atras() {
        this.router.navigate(['paginal-inicial']);
    }
    guardarEspecialidad(event) {
        this.opcionEspecialidad = event.detail.value;
        console.log("especialidad", this.opcionEspecialidad);
    }
    obtenerEspecialidad() {
        this.registromedi.obtenerEspecialidad()
            .subscribe((data) => {
            this.especialidad = data;
            console.log('Estamos en el especieee pag princi');
            console.log(this.especialidad);
        }, (error) => {
            console.log(error);
        });
    }
    guardarFechaNac(evento) {
        this.miVariableHora = evento.detail.value;
        this.dateFormat = this.miVariableHora.split('T')[0];
        console.log("fecha", this.dateFormat);
    }
    guardar() {
        this.MedicoDetails.fechaNac = this.dateFormat;
        this.MedicoDetails.especialidad_id = this.opcionEspecialidad;
        console.log('--fotose', this.fotose);
        this.MedicoDetails.fotomedico = this.fotose;
        console.log('datos de medico');
        console.log("cedula", this.MedicoDetails.cedula);
        console.log("nombres", this.MedicoDetails.nombres);
        console.log("apellidos", this.MedicoDetails.apellidos);
        console.log("direccion", this.MedicoDetails.direccion);
        console.log("fecha", this.dateFormat);
        console.log("correo", this.MedicoDetails.correo);
        console.log("contraseña", this.MedicoDetails.contrasena);
        console.log("celular", this.MedicoDetails.celular);
        console.log("titulo", this.MedicoDetails.titulo);
        console.log("titulo", this.MedicoDetails.fotomedico);
        console.log("especialidad_id", this.MedicoDetails.especialidad_id);
        //this.registromedi.crearUsuario
        this.registromedi.crearUsuario(this.MedicoDetails)
            .subscribe((data) => {
            console.log('Estamos en el propietario');
            this.medico = data;
            console.log("recibo", this.medico);
            this.router.navigate(['paginal-inicial']);
        }, (error) => {
            console.log(error);
        });
    }
    validadorDeCedula(event) {
        let cedula = event.detail.value;
        let cedulaCorrecta = false;
        if (cedula.length == 10) {
            let tercerDigito = parseInt(cedula.substring(2, 3));
            if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                let verificador = parseInt(cedula.substring(9, 10));
                let suma = 0;
                let digito = 0;
                for (let i = 0; i < (cedula.length - 1); i++) {
                    digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                    console.log(suma + " suma" + coefValCedula[i]);
                }
                suma = Math.round(suma);
                //  console.log(verificador);
                //  console.log(suma);
                //  console.log(digito);
                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    cedulaCorrecta = true;
                    console.log('correcto');
                }
                else if ((10 - (Math.round(suma % 10))) == verificador) {
                    cedulaCorrecta = true;
                    console.log('correcto');
                }
                else {
                    cedulaCorrecta = false;
                    console.log('incorrecto');
                }
            }
            else {
                cedulaCorrecta = false;
                console.log('incorrecto');
            }
        }
        else {
            cedulaCorrecta = false;
            console.log('incorrecto');
        }
        this.validador = cedulaCorrecta;
        console.log(this.validador);
    }
};
RegistroMedicoPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_Services_registromedico_service__WEBPACK_IMPORTED_MODULE_2__.RegistromedicoService }
];
RegistroMedicoPage.propDecorators = {
    MedicoDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
RegistroMedicoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registro-medico',
        template: _raw_loader_registro_medico_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_medico_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroMedicoPage);



/***/ }),

/***/ 6193:
/*!*****************************************************************!*\
  !*** ./src/app/pages/registro-medico/registro-medico.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 1000px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n  text-align: center;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-item ion-label {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: justify;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nh1 {\n  color: #063470;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-style: oblique;\n  -webkit-text-stroke: 0.5px #FFE333;\n  font-size: xx-large;\n  background-color: #cfd0dc;\n}\n\n.form-container ion-item {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: justify;\n  font-style: italic;\n}\n\n.form-container ion-item ion-datetime {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: justify;\n  font-style: italic;\n}\n\n.form-container ion-item ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: center;\n  font-style: italic;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n\n.form-container ion-item ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n  text-align: center;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\nspan {\n  color: red;\n  align-content: center;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLW1lZGljby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNDO0VBQ0MscUJBQUE7QUFFRjs7QUFBQztFQUNDLHFCQUFBO0FBR0Y7O0FBREM7RUFDQyxxQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHUSxtQkFBQTtFQUNSLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxzRUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS0E7O0FBSEE7RUFDQSxxREFBQTtBQU1BOztBQUZBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQyx5QkFBQTtBQUtEOztBQURBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSUE7O0FBREE7RUFDRSxxREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFERTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUFBO0VBQ0Esc0VBQUE7RUFDQSxrQkFBQTtBQUdBOztBQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0E7O0FBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBR0E7O0FBQUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBR0YiLCJmaWxlIjoicmVnaXN0cm8tbWVkaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuIH1cclxuIGlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuIH1cclxuIGlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuIH1cclxuIGh0bWx7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICBmb250LWZhbWlseTogOTUlICBjdXJzaXZlO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBib3JkZXItcmFkaXVzOiA0JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MzQ3MDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWx7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbmhlaWdodDogMzhweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24taW5wdXR7XHJcbmZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuaDF7XHJcbmNvbG9yOiAjMDYzNDcwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbi13ZWJraXQtdGV4dC1zdHJva2U6IDAuNTBweCAgI0ZGRTMzMztcclxuZm9udC1zaXplOiB4eC1sYXJnZSA7ICBcclxuIGJhY2tncm91bmQtY29sb3I6ICNjZmQwZGMgOyBcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciAgaW9uLWl0ZW0ge1xyXG5mb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcbmZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyICBpb24taXRlbSBpb24tZGF0ZXRpbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyICBpb24taXRlbSBpb24taW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbi5mb3JtLWNvbnRhaW5lciAgcGFnaW5hdGlvbi1jb250cm9sc3tcclxuZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gIGlvbi1idXR0b24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5oZWlnaHQ6IDM4cHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyICBpb24tYnV0dG9ue1xyXG5mb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufSBcclxuc3BhbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcblxyXG59Il19 */");

/***/ }),

/***/ 1502:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-medico/registro-medico.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    </div>\r\n    <ion-button style=\"--background: #063470;\" slot=\"start\">\r\n      <ion-back-button style=\"--background: #063470;\" defaultHref=\"/paginal-inicial\"> </ion-back-button>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\"\r\n    integrity=\"sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\" crossorigin=\"anonymous\">\r\n\r\n    <!-- Tema opcional -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css\" integrity=\"sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX\" crossorigin=\"anonymous\">\r\n\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <br>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"guardar(MedicoDetails)\" #userForm=\"ngForm\">\r\n    <div class=\"form-container\">\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Registro\r\n        Médico  </em></p>\r\n      <ion-item>\r\n        <ion-input type=\"numeric\" placeholder=\"Cédula\" [(ngModel)]=\"MedicoDetails.cedula\" style=\"text-align: center;\"\r\n          required=\"true\" maxLength=\"10\" formControlName=\"cedula\" (ionChange)=\"validadorDeCedula($event)\">\r\n          <ion-icon name=\"finger-print\"></ion-icon>\r\n          <ion-label> &nbsp; Cedula:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n      <span *ngIf=\"!validador\">Cedula Invalida</span>\r\n      <div *ngIf=\"form.controls.cedula.errors\">\r\n        <span *ngIf=\"form.controls.cedula.errors.pattern\"> Ingrese solo números </span>\r\n        <span *ngIf=\"form.controls.cedula.errors.minlength\"> Ingrese 10 números </span>\r\n\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Nombres\" [(ngModel)]=\"MedicoDetails.nombres\" style=\"text-align: center;\" required=\"true\"\r\n          formControlName=\"nombres\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Nombres:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.nombres.errors\">\r\n        <span *ngIf=\"form.controls.nombres.errors.pattern\">\r\n          Ingrese solo letras\r\n        </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Apellidos\" [(ngModel)]=\"MedicoDetails.apellidos\" style=\"text-align: center;\"\r\n          required=\"true\" formControlName=\"apellidos\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Apellidos:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.apellidos.errors\">\r\n        <span *ngIf=\"form.controls.apellidos.errors.pattern\">\r\n          Ingrese solo letras\r\n        </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Dirección\" [(ngModel)]=\"MedicoDetails.direccion\" style=\"text-align: center;\"\r\n          required=\"true\" formControlName=\"direccion\">\r\n          <ion-icon name=\"earth-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Dirección:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item>\r\n        <ion-icon name=\"calendar\"></ion-icon>\r\n        <ion-label>Fecha Nacimiento</ion-label>\r\n        <ion-datetime placeholder=\"Seleccione\" display-timezone=\"utc\" displayFormat=\"YYYY-MM-DD\t\" doneText=\"Ok\"\r\n          cancelText=\"Cancelar\" (ionChange)=guardarFechaNac($event) formControlName=\"fechnac\">\r\n\r\n        </ion-datetime>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Teléfono\" [(ngModel)]=\"MedicoDetails.celular\" style=\"text-align: center;\"\r\n          required=\"true\" maxLength=\"10\" formControlName=\"telefono\">\r\n          <ion-icon name=\"call-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Teléfono:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.telefono.errors\">\r\n        <span *ngIf=\"form.controls.telefono.errors.pattern\"> Ingrese solo números </span>\r\n        <span *ngIf=\"form.controls.telefono.errors.minlength\"> Ingrese 10 números </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Titulo\" [(ngModel)]=\"MedicoDetails.titulo\" style=\"text-align: center;\" required=\"true\"\r\n          formControlName=\"titulo\">\r\n          <ion-icon name=\"albums\"></ion-icon>\r\n          <ion-label> &nbsp; Titulo:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.titulo.errors\">\r\n        <span *ngIf=\"form.controls.titulo.errors.pattern\">\r\n          Ingrese solo letras\r\n        </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        &nbsp;  &nbsp; <ion-input placeholder=\"foto\" [(ngModel)]=\"MedicoDetails.fotomedico\" style=\"text-align: center;\" required=\"true\"\r\n          (change)=guardarFoto($event) type=\"file\" formControlName=\"foto\" accept=\"image/png, image/jpeg\">\r\n          <ion-icon name=\"document-attach-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Fotografia:</ion-label>\r\n\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item >\r\n        <ion-icon name=\"sparkles\"></ion-icon>\r\n        <ion-label>Especialidad </ion-label>\r\n        <ion-select  interface=\"action-sheet\" class=\"custom-options\"   (ionChange)=guardarEspecialidad($event) placeholder=\"Seleccione \"\r\n          okText=\"Ok\" cancelText=\"Cancelar\" formControlName=\"espec\">\r\n          <ion-select-option  class=\"popover-content\" *ngFor=\"let item of especialidad\" [value]=\"item.especialidad_id\">\r\n            {{item.tipoEspecialidad}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Correo\" [(ngModel)]=\"MedicoDetails.correo\" style=\"text-align: center;\" required=\"true\"\r\n          email formControlName=\"correo\">\r\n          <ion-icon name=\"mail-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Correo:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.correo.errors\">\r\n        <span *ngIf=\"form.controls.correo.errors.pattern\">\r\n          Ingrese el correo bien\r\n        </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"MedicoDetails.contrasena\"\r\n          style=\"text-align: center;\" required=\"true\" formControlName=\"contrasena\">\r\n          <ion-icon name=\"key\"></ion-icon>\r\n          <ion-label> &nbsp; Contraseña:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"form.controls.contrasena.errors\">\r\n        <span *ngIf=\"form.controls.contrasena.errors.pattern\">\r\n          Ingrese la contraseña con los caracteres requeridos\r\n        </span>\r\n      </div>\r\n\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" (click)=\"atras()\">Atras</ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" type=\"submit\" [disabled]=\"!userForm.form.valid\">Guardar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro-medico_registro-medico_module_ts.js.map
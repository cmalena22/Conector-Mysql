(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_propietario_propietario_module_ts"],{

/***/ 7265:
/*!***************************************!*\
  !*** ./src/app/Modelo/Propietario.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Propietario": () => (/* binding */ Propietario)
/* harmony export */ });
class Propietario {
}


/***/ }),

/***/ 7731:
/*!*****************************************************************!*\
  !*** ./src/app/pages/propietario/propietario-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioPageRoutingModule": () => (/* binding */ PropietarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _propietario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propietario.page */ 1865);




const routes = [
    {
        path: '',
        component: _propietario_page__WEBPACK_IMPORTED_MODULE_0__.PropietarioPage
    }
];
let PropietarioPageRoutingModule = class PropietarioPageRoutingModule {
};
PropietarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropietarioPageRoutingModule);



/***/ }),

/***/ 1775:
/*!*********************************************************!*\
  !*** ./src/app/pages/propietario/propietario.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioPageModule": () => (/* binding */ PropietarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _propietario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propietario-routing.module */ 7731);
/* harmony import */ var _propietario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propietario.page */ 1865);







let PropietarioPageModule = class PropietarioPageModule {
};
PropietarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _propietario_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropietarioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_propietario_page__WEBPACK_IMPORTED_MODULE_1__.PropietarioPage]
    })
], PropietarioPageModule);



/***/ }),

/***/ 1865:
/*!*******************************************************!*\
  !*** ./src/app/pages/propietario/propietario.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioPage": () => (/* binding */ PropietarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_propietario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./propietario.page.html */ 2256);
/* harmony import */ var _propietario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propietario.page.scss */ 104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Modelo_Propietario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Modelo/Propietario */ 7265);
/* harmony import */ var src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/propietario-service.service */ 193);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);









let PropietarioPage = class PropietarioPage {
    constructor(_localStorageRefService, formBuilder, propietarioService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.formBuilder = formBuilder;
        this.propietarioService = propietarioService;
        this.router = router;
        this.propietario = new src_app_Modelo_Propietario__WEBPACK_IMPORTED_MODULE_2__.Propietario();
        this.InicioDetails = {
            idPropietario: '', nombrePropietario: '',
            direccion: '', ciudad: '', telefono: '',
            correo: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.form = this.formBuilder.group({
            cedula: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)
                ]
            ],
            propietario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)
                ])],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
        });
    }
    guardar(dataBill) {
        this.router.navigate(['/mascota/', this.InicioDetails.idPropietario]);
        this.propietarioService.crearPropietario(this.InicioDetails).subscribe((data) => {
            let propietarios = data;
            console.log('Estamos en el propietario');
            console.log(this.propietario);
            console.log("routerrr");
        });
    }
    cancelar() {
        this.router.navigate(['/paginal-inicial']);
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
PropietarioPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__.LocalstoreService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_3__.PropietarioServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
PropietarioPage.propDecorators = {
    InicioDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PropietarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-propietario',
        template: _raw_loader_propietario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_propietario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropietarioPage);



/***/ }),

/***/ 104:
/*!*********************************************************!*\
  !*** ./src/app/pages/propietario/propietario.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 800px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nspan {\n  color: red;\n  align-content: center;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BpZXRhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0c7RUFDQyxxQkFBQTtBQUVKOztBQUFFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJTjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTtFQUNJLHFEQUFBO0FBSUo7O0FBRkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBS0Y7O0FBREE7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREE7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREE7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLHFEQUFBO0VBQ0Usa0JBQUE7QUFJSiIsImZpbGUiOiJwcm9waWV0YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuICAgfVxyXG4gICBodG1se1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogOTUlICBjdXJzaXZlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIHB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkUzMzM7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgbWFyZ2luOiAtMTZweDtcclxuXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLWlucHV0e1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuc3BhbntcclxuICBjb2xvcjogcmVkO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWlucHV0IGlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59IFxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59IFxyXG4uZm9ybS1jb250YWluZXIgIGlvbi1idXR0b257XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn0gXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 2256:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propietario/propietario.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../../../assets/imagenes/Logo.jpg\" height=\"50\" alt=\"\" />\r\n    </div>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <br>\r\n  <br>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"guardar(InicioDetails)\">\r\n\r\n\r\n    <div class=\"form-container\">\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <ion-icon name=\"person-add-outline\"></ion-icon><em> Registro\r\n          Propietario </em></p>\r\n      <ion-item>\r\n\r\n        <ion-input type=\"text\" placeholder=\"Cédula\" [(ngModel)]=\"InicioDetails.idPropietario\"\r\n          style=\"text-align: center;\" formControlName=\"cedula\" maxLength=\"10\" (ionChange)=\"validadorDeCedula($event)\">\r\n          <ion-icon name=\"finger-print\"></ion-icon>\r\n          <ion-label> &nbsp; Cédula:</ion-label>\r\n        </ion-input>\r\n\r\n\r\n      </ion-item>\r\n      <span *ngIf=\"!validador\">Cedula Invalida</span>\r\n      <div *ngIf=\"form.controls.cedula.errors\">\r\n        <span *ngIf=\"form.controls.cedula.errors.pattern\"> Ingrese solo números </span>\r\n      </div>\r\n      <div *ngIf=\"form.controls.cedula.errors\">\r\n        <span *ngIf=\"form.controls.cedula.errors.minlength\"> Ingrese 10 números </span>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <ion-item>\r\n\r\n        <ion-input placeholder=\"Propietario\" [(ngModel)]=\"InicioDetails.nombrePropietario\" style=\"text-align: center;\"\r\n          formControlName=\"propietario\" type=\"text\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>\r\n          <ion-label> &nbsp; Propietario:</ion-label>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"form.controls.propietario.errors\">\r\n        <span *ngIf=\"form.controls.propietario.errors.pattern\">\r\n          Ingrese solo letras\r\n        </span>\r\n      </div>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Ciudad\" [(ngModel)]=\"InicioDetails.ciudad\" style=\"text-align: center;\"\r\n          formControlName=\"ciudad\" type=\"text\">\r\n          <ion-icon name=\"locate\"></ion-icon>\r\n          <ion-label>&nbsp;  Ciudad:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"form.controls.ciudad.errors\">\r\n        <span *ngIf=\"form.controls.ciudad.errors.pattern\">\r\n          Ingrese solo letras\r\n        </span>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Dirección\" [(ngModel)]=\"InicioDetails.direccion\" style=\"text-align: center;\"\r\n          formControlName=\"direccion\" type=\"text\">\r\n          <ion-icon name=\"earth-outline\"></ion-icon>          <ion-label>&nbsp;  Dirección:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Teléfono\" [(ngModel)]=\"InicioDetails.telefono\" style=\"text-align: center;\"\r\n          formControlName=\"telefono\" type=\"text\" maxLength=\"10\">\r\n          <ion-icon name=\"call-outline\"></ion-icon>\r\n          <ion-label>&nbsp;  Teléfono:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"form.controls.telefono.errors\">\r\n        <span *ngIf=\"form.controls.telefono.errors.pattern\"> Ingrese solo números </span>\r\n      </div>\r\n      <div *ngIf=\"form.controls.telefono.errors\">\r\n        <span *ngIf=\"form.controls.telefono.errors.minlength\"> Ingrese 10 números </span>\r\n      </div>\r\n\r\n\r\n      <ion-item>\r\n        <ion-input placeholder=\"Correo\" [(ngModel)]=\"InicioDetails.correo\" style=\"text-align: center;\"\r\n          formControlName=\"correo\" type=\"text\">\r\n          <ion-icon name=\"mail-outline\"></ion-icon>\r\n          <ion-label>&nbsp;  Correo:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"form.controls.correo.errors\">\r\n        <span *ngIf=\"form.controls.correo.errors.email\">\r\n          Ingrese un correo valido\r\n        </span>\r\n      </div>\r\n\r\n\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" (click)=\"cancelar()\">Cancelar</ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" type=\"submit\" [disabled]=\"form.invalid\">Siguiente</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_propietario_propietario_module_ts.js.map
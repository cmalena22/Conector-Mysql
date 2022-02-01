(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_actualizar-contrasena_actualizar-contrasena_module_ts"],{

/***/ 6779:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/actualizar-contrasena/actualizar-contrasena-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActualizarContrasenaPageRoutingModule": () => (/* binding */ ActualizarContrasenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _actualizar_contrasena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actualizar-contrasena.page */ 5134);




const routes = [
    {
        path: '',
        component: _actualizar_contrasena_page__WEBPACK_IMPORTED_MODULE_0__.ActualizarContrasenaPage
    }
];
let ActualizarContrasenaPageRoutingModule = class ActualizarContrasenaPageRoutingModule {
};
ActualizarContrasenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActualizarContrasenaPageRoutingModule);



/***/ }),

/***/ 4921:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actualizar-contrasena/actualizar-contrasena.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActualizarContrasenaPageModule": () => (/* binding */ ActualizarContrasenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _actualizar_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actualizar-contrasena-routing.module */ 6779);
/* harmony import */ var _actualizar_contrasena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualizar-contrasena.page */ 5134);







let ActualizarContrasenaPageModule = class ActualizarContrasenaPageModule {
};
ActualizarContrasenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _actualizar_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActualizarContrasenaPageRoutingModule
        ],
        declarations: [_actualizar_contrasena_page__WEBPACK_IMPORTED_MODULE_1__.ActualizarContrasenaPage]
    })
], ActualizarContrasenaPageModule);



/***/ }),

/***/ 5134:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actualizar-contrasena/actualizar-contrasena.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActualizarContrasenaPage": () => (/* binding */ ActualizarContrasenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_actualizar_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actualizar-contrasena.page.html */ 360);
/* harmony import */ var _actualizar_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualizar-contrasena.page.scss */ 6755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _Services_recordar_contra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/recordar-contra.service */ 5870);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);









let ActualizarContrasenaPage = class ActualizarContrasenaPage {
    constructor(actRoute, formBuilder, router, http, recordarservice, alertController) {
        this.actRoute = actRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.recordarservice = recordarservice;
        this.alertController = alertController;
        this.ContraNuevaDetails = {
            correo: '', contrasena: '', contrasenaNueva: ''
        };
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            nuevaContra: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
        });
        this.recordarservice.$getObjectSource.subscribe(data => {
            this.dataa = data;
            //this.Usuario = data
            console.log(typeof (this.dataa));
            console.log('-------');
            console.log(JSON.parse(this.dataa));
            this.dataa = JSON.parse(this.dataa);
            console.log('Estan los datos en pagina actualizar contra', this.dataa);
        });
        console.log('-----correo');
        console.log(this.dataa.correo);
        this.correoo = this.dataa.correo;
        this.ContraNuevaDetails.correo = this.dataa.correo;
        console.log('-----contrasena');
        console.log(this.dataa.contrasena);
        this.contrasenaa = this.dataa.contrasena;
        //this.ContraNuevaDetails.contrasena = this.dataa.contrasena
        //console.log(this.dataa['correo']);
        /*
        comparar el codigo de recuperacion enviado con el contrasenaa
    
        BUSCAR EVENT para validar que el codigo es correcto
        */
    }
    addContra(dataBill) {
        console.log('AQUIIIII');
        this.recordarservice.recordarcontra(this.ContraNuevaDetails).subscribe((data) => {
            console.log('data');
            let datos = data;
            console.log('Estamos en el ADD recordar dos final');
            console.log(datos);
            if (datos == 'ok') {
                return this.router.navigate(['/inicio-sesion']);
            }
            else {
                console.log('no esta');
            }
        });
    }
    compararContras(event) {
        const codigo = event.detail.value;
        console.log("codigo", codigo);
        if (this.contrasenaa != codigo) {
            let alert = this.alertController.create({
                message: 'Por favor ingrese el codigo correcto',
                buttons: ['OK']
            }).then(alert => alert.present());
        }
    }
    atras() {
        this.router.navigate(['/recordar-contra']);
    }
};
ActualizarContrasenaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _Services_recordar_contra_service__WEBPACK_IMPORTED_MODULE_2__.RecordarContraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ActualizarContrasenaPage.propDecorators = {
    ContraNuevaDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ActualizarContrasenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-actualizar-contrasena',
        template: _raw_loader_actualizar_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actualizar_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActualizarContrasenaPage);



/***/ }),

/***/ 6755:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actualizar-contrasena/actualizar-contrasena.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 500px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhbGl6YXItY29udHJhc2VuYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNDO0VBQ0MscUJBQUE7QUFFRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxxREFBQTtBQUdGIiwiZmlsZSI6ImFjdHVhbGl6YXItY29udHJhc2VuYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiB9XHJcbiBodG1se1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gIGZvbnQtZmFtaWx5OiA5NSUgIGN1cnNpdmU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNCU7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 360:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actualizar-contrasena/actualizar-contrasena.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    </div>\r\n    <ion-button  style=\"--background: #063470;\" slot=\"start\">\r\n      <ion-back-button style=\"--background: #063470;\" defaultHref=\"/\"> </ion-back-button>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <br>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"addContra(ContraNuevaDetails)\" #userForm=\"ngForm\" >\r\n    <div class=\"form-container\">\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Actualiza contraseña! </em></p>\r\n\r\n    <ion-item>\r\n      <ion-input placeholder=\"Correo\"  [(ngModel)]=\"ContraNuevaDetails.correo\" style=\"text-align: center;\" required=\"true\"\r\n      [ngModelOptions]=\"{standalone: true}\" >\r\n        <ion-icon name=\"mail-outline\"></ion-icon>\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Codigo de recuperacion\" [(ngModel)]=\"ContraNuevaDetails.contrasena\" style=\"text-align: center;\" required=\"true\"\r\n      formControlName=\"codigo\" (ionChange)=compararContras($event)>\r\n        <ion-icon name=\"key\"></ion-icon>\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-input placeholder=\"Contraseña nueva\" [(ngModel)]=\"ContraNuevaDetails.contrasenaNueva\" style=\"text-align: center;\" required=\"true\"\r\n      formControlName=\"nuevaContra\" type=\"password\">\r\n        <ion-icon name=\"key\"></ion-icon>\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"form.controls.nuevaContra.errors\">\r\n      <span *ngIf=\"form.controls.nuevaContra.errors.pattern\">\r\n        Ingrese la contraseña con los caracteres requeridos\r\n      </span>\r\n    </div>\r\n\r\n    <div align=\"center\">\r\n     <ion-grid>\r\n       <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" (click)=\"atras()\" >Atras</ion-button>\r\n        </ion-col>\r\n        <br>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n           <ion-button color=\"shade\" type=\"submit\"  [disabled]=\"!userForm.form.valid\" >Enviar</ion-button>\r\n           <br>\r\n         </ion-col>\r\n\r\n       </ion-row>\r\n     </ion-grid>\r\n   </div>\r\n  </div>\r\n\r\n </form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actualizar-contrasena_actualizar-contrasena_module_ts.js.map
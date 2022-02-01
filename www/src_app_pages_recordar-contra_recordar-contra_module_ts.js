(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_recordar-contra_recordar-contra_module_ts"],{

/***/ 5812:
/*!*************************************************************************!*\
  !*** ./src/app/pages/recordar-contra/recordar-contra-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordarContraPageRoutingModule": () => (/* binding */ RecordarContraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _recordar_contra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recordar-contra.page */ 4911);




const routes = [
    {
        path: '',
        component: _recordar_contra_page__WEBPACK_IMPORTED_MODULE_0__.RecordarContraPage
    }
];
let RecordarContraPageRoutingModule = class RecordarContraPageRoutingModule {
};
RecordarContraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecordarContraPageRoutingModule);



/***/ }),

/***/ 2137:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recordar-contra/recordar-contra.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordarContraPageModule": () => (/* binding */ RecordarContraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _recordar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recordar-contra-routing.module */ 5812);
/* harmony import */ var _recordar_contra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recordar-contra.page */ 4911);







let RecordarContraPageModule = class RecordarContraPageModule {
};
RecordarContraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recordar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecordarContraPageRoutingModule
        ],
        declarations: [_recordar_contra_page__WEBPACK_IMPORTED_MODULE_1__.RecordarContraPage]
    })
], RecordarContraPageModule);



/***/ }),

/***/ 4911:
/*!***************************************************************!*\
  !*** ./src/app/pages/recordar-contra/recordar-contra.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordarContraPage": () => (/* binding */ RecordarContraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_recordar_contra_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recordar-contra.page.html */ 9299);
/* harmony import */ var _recordar_contra_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recordar-contra.page.scss */ 7326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_recordar_contra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/recordar-contra.service */ 5870);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);







let RecordarContraPage = class RecordarContraPage {
    constructor(router, recordarservice, alertController) {
        this.router = router;
        this.recordarservice = recordarservice;
        this.alertController = alertController;
        this.estado = false;
        this.RecordarDetails = {
            correo: ''
        };
    }
    ngOnInit() {
    }
    addRecordar(dataBill) {
        console.log('add recordar');
        this.recordarservice.OkCorreo(this.RecordarDetails).subscribe((data) => {
            console.log('data');
            let correook = data;
            this.datorecorreo = data;
            console.log(this.datorecorreo);
            if (this.datorecorreo == 'No creado') {
                console.log('no existe el correo');
            }
            else {
                console.log('si existe');
                this.enviarCorreo();
            }
        });
    }
    enviarCorreo() {
        this.recordarservice.recordar(this.RecordarDetails).subscribe((data) => {
            console.log('data');
            let datos = data;
            this.datore = data;
            console.log('Estamos en el ADD recordar');
            console.log(datos);
            //actualizar-contrasena
            this.recordarservice.enviandodatos(this.datore);
            return this.router.navigate(['/actualizar-contrasena']);
        });
    }
    doAlert() {
        if (this.datore == 'No creado') {
            let alert = this.alertController.create({
                message: 'Por favor ingrese el correo correcto',
                buttons: ['OK']
            }).then(alert => alert.present());
        }
    }
    atras() {
        this.router.navigate(['/inicio-sesion']);
    }
};
RecordarContraPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _Services_recordar_contra_service__WEBPACK_IMPORTED_MODULE_2__.RecordarContraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
RecordarContraPage.propDecorators = {
    RecordarDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RecordarContraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recordar-contra',
        template: _raw_loader_recordar_contra_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recordar_contra_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecordarContraPage);



/***/ }),

/***/ 7326:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recordar-contra/recordar-contra.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 500px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZGFyLWNvbnRyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNHO0VBQ0MscUJBQUE7QUFFSjs7QUFDRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR047O0FBQUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxxREFBQTtBQUdKIiwiZmlsZSI6InJlY29yZGFyLWNvbnRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuICAgfVxyXG4gICBodG1se1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IDk1JSAgY3Vyc2l2ZTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzNDcwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 9299:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordar-contra/recordar-contra.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n    </div>\r\n    <ion-button  style=\"--background: #063470;\" slot=\"start\">\r\n      <ion-back-button style=\"--background: #063470;\" defaultHref=\"/inicio-sesion\"> </ion-back-button>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <br>\r\n\r\n\r\n <form (ngSubmit)=\"addRecordar(RecordarDetails)\" #userForm=\"ngForm\" >\r\n   <div class=\"form-container\">\r\n     <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Recordar contraseña! </em></p>\r\n     <p center style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 10pt;\">Nota:Escriba su correo electrónico  y revise su bandeja de entrada<br></p>\r\n     <br>\r\n   <ion-item>\r\n     <ion-input placeholder=\"Correo\" [(ngModel)]=\"RecordarDetails.correo\" style=\"text-align: center;\" required=\"true\"\r\n     [ngModelOptions]=\"{standalone: true}\" >\r\n       <ion-icon name=\"mail-outline\"></ion-icon>\r\n     </ion-input>\r\n   </ion-item>\r\n\r\n   <div align=\"center\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" (click)=\"atras()\" >Atras</ion-button>\r\n        </ion-col>\r\n        <br>\r\n       <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" type=\"submit\"  [disabled]=\"!userForm.form.valid\" >Enviar</ion-button>\r\n          <br>\r\n        </ion-col>\r\n\r\n\r\n          <br>\r\n          <div style=\"text-align: center;color:#FF0000 ;\" type=\"hidden\" class=\"hero-list\" *ngIf=\"datorecorreo === 'No creado'\" >\r\n            <h6 style=\"text-align: center;color:#110a0a ;\">Observacion: </h6>Escriba el correo correcto\r\n          </div>\r\n\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n </div>\r\n\r\n</form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recordar-contra_recordar-contra_module_ts.js.map
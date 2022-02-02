(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_inicio-sesion_inicio-sesion_module_ts"],{

/***/ 6209:
/*!*********************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioSesionPageRoutingModule": () => (/* binding */ InicioSesionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-sesion.page */ 889);




const routes = [
    {
        path: '',
        component: _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_0__.InicioSesionPage
    }
];
let InicioSesionPageRoutingModule = class InicioSesionPageRoutingModule {
};
InicioSesionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioSesionPageRoutingModule);



/***/ }),

/***/ 1671:
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioSesionPageModule": () => (/* binding */ InicioSesionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-sesion-routing.module */ 6209);
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-sesion.page */ 889);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);








let InicioSesionPageModule = class InicioSesionPageModule {
};
InicioSesionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioSesionPageRoutingModule
        ],
        declarations: [_inicio_sesion_page__WEBPACK_IMPORTED_MODULE_1__.InicioSesionPage]
    })
], InicioSesionPageModule);



/***/ }),

/***/ 889:
/*!***********************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioSesionPage": () => (/* binding */ InicioSesionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio-sesion.page.html */ 5597);
/* harmony import */ var _inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-sesion.page.scss */ 9413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/iniciosesion.service */ 785);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);
/* harmony import */ var src_app_Services_miperfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/miperfil.service */ 3524);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);










let InicioSesionPage = class InicioSesionPage {
    constructor(_localStorageRefService, navCtrl, router, inicioservice, miperfilservice, alertController) {
        this._localStorageRefService = _localStorageRefService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.inicioservice = inicioservice;
        this.miperfilservice = miperfilservice;
        this.alertController = alertController;
        this.estado = false;
        this.InicioDetails = {
            correo: '', contrasena: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
    }
    ngOnInit() {
    }
    addInicio(dataBill) {
        console.log('Addinicio');
        this.inicioservice.iniciar(this.InicioDetails).subscribe((data) => {
            console.log('data');
            let correop = data;
            this.correoo = data;
            console.log('Estamos en el ADDINICIOSESION');
            console.log(correop);
            this.datajson = data;
            this.datajson = JSON.parse(this.datajson);
            console.log('inicio datajson', this.datajson);
            console.log('inicio de sesion realizado');
            this.correo = this.datajson.correo;
            this.rol = this.datajson.rol_id.descripcion;
            console.log('--rol', this.rol);
            console.log('--correo', this.correo);
            let corr = this.correo;
            let rol = this.rol;
            console.log('---correo', corr);
            if (this.correoo == 'No creado') {
                console.log('no creadoooo');
                //return this.router.navigate(['/inicio-sesion'])
            }
            else {
                //localStorage.setItem('usuario', JSON.stringify(this.user));
                this._localStorage.setItem('estado', JSON.stringify(this.correo));
                this.inicioservice.enviandocorreo(this.datajson);
                //this.miperfilservice.enviandodatos(rol)
                return this.router.navigate(['/paginal-inicial']);
                //enviandodatos
                //this.inicioservice.enviandocorreo(correop)
                //return this.router.navigate(['/paginal-inicial'])
            }
        });
    }
    doAlert() {
        if (this.estado == true) {
            let alert = this.alertController.create({
                message: 'Por favor ingrese el correo correcto',
                buttons: ['OK']
            }).then(alert => alert.present());
        }
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.estado == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    subHeader: 'SubTitle',
                    message: 'This is an alert message',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
        });
    }
};
InicioSesionPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_2__.IniciosesionService },
    { type: src_app_Services_miperfil_service__WEBPACK_IMPORTED_MODULE_4__.MiperfilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
InicioSesionPage.propDecorators = {
    InicioDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
InicioSesionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-inicio-sesion',
        template: _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioSesionPage);



/***/ }),

/***/ 9413:
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("html {\n  --background: #f5f5f3;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  font-style: italic;\n}\n\nion-content #header img {\n  width: 210px;\n  height: 210px;\n  border-radius: 50%;\n  margin-top: 3%;\n}\n\nion-content #form {\n  margin-top: 15px;\n  width: 290px;\n  height: 290px;\n  display: inline-flexbox;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  padding-left: 100px;\n  border-radius: 50%;\n}\n\nion-content #form ion-input {\n  --background: #f5f5f3;\n  margin-top: 20px;\n  padding-top: 100px;\n  border-radius: 50%;\n  border-color: #010100;\n  color: #010100;\n}\n\nion-content #form ion-button {\n  --background: #063470;\n  margin-top: 10px;\n  height: 38px;\n  width: 300px;\n}\n\nion-content ion-button {\n  --background: #063470;\n  margin-top: 15px;\n  margin-right: 25px;\n  margin-left: 10px;\n  height: 38px;\n  width: 300px;\n  align-items: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nion-content img {\n  width: 210px;\n  height: 210px;\n  border-radius: 50%;\n  margin-top: 3%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\ncontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg {\n  width: 210px;\n  height: 210px;\n  border-radius: 50%;\n  margin-top: 3%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\na {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby1zZXNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBT0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSk47O0FBUUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU5OOztBQVdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVROOztBQVdNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFUUjs7QUFZTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVZSOztBQWNJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFaTjs7QUFnQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZE47O0FBbUJDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBbUJDO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxxREFBQTtBQWhCRjs7QUFrQkE7RUFFRSxxREFBQTtBQWhCRjs7QUFvQkE7RUFDRSxxREFBQTtBQWpCRiIsImZpbGUiOiJpbmljaW8tc2VzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuIH1cclxuXHJcblxyXG5cclxuIGlvbi1jb250ZW50e1xyXG5cclxuXHJcblxyXG4gICNoZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgY29sb3I6ICAjMDEwMTAwO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICAgI2Zvcm0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgIGhlaWdodDogMjkwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAxMDEwMDtcclxuICAgICAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDYzNDcwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG4gfVxyXG5cclxuIGNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIH1cclxuXHJcbiBpbWd7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIGhlaWdodDogMjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5oMXtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5he1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufSJdfQ== */");

/***/ }),

/***/ 5597:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio-sesion/inicio-sesion.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title> </ion-title>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <title>Inicio sesion</title>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <img src=\"../../../assets/imagenes/VeterinariaLogo.jpg\" />\r\n    <br>\r\n    <h1 style=\"text-align: center;\">Clínica Veterinaria Polivet</h1>\r\n  </div>\r\n\r\n  <form  class=\"form-group text-center\" (ngSubmit)=\"addInicio(InicioDetails)\" #userForm=\"ngForm\" >\r\n\r\n  <div class=\"container\">\r\n    <ion-item>\r\n      <ion-input ion-input large clear [(ngModel)]=\"InicioDetails.correo\" placeholder=\"Dirección de Correo\" required=\"true\"\r\n        style=\"text-align: center;\" [ngModelOptions]=\"{standalone: true}\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-input [(ngModel)]=\"InicioDetails.contrasena\" type=\"password\" placeholder=\"Contraseña\" required=\"true\"\r\n        style=\"text-align: center;\" [ngModelOptions]=\"{standalone: true}\">\r\n        <ion-icon name=\"key\"></ion-icon>\r\n      </ion-input>\r\n\r\n    </ion-item>\r\n\r\n    <div style=\"text-align: center;color:#FF0000 ;\" type=\"hidden\" class=\"hero-list\" *ngIf=\"correoo === 'No creado'\" >\r\n      <h6 style=\"text-align: center;color:#110a0a ; font-family: Georgia, 'Times New Roman', Times, serif; color: red;\"> <br> Escriba el correo y contraseña correcta </h6>\r\n    </div>\r\n\r\n    <ion-row center>\r\n      <ion-col text-center>\r\n        <ion-button  type=\"submit\" [disabled]=\"!userForm.form.valid\"   >Iniciar sesion</ion-button>\r\n      </ion-col>\r\n     </ion-row>\r\n\r\n     <ion-row center>\r\n      <ion-col text-center>\r\n        <a routerLink=\"/recordar-contra\">¿Deseas recordar la contraseña?</a>\r\n      </ion-col>\r\n     </ion-row>\r\n\r\n  </div>\r\n</form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio-sesion_inicio-sesion_module_ts.js.map
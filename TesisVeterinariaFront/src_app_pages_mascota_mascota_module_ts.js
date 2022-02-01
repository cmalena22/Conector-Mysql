(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_mascota_mascota_module_ts"],{

/***/ 6776:
/*!*********************************************************!*\
  !*** ./src/app/pages/mascota/mascota-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotaPageRoutingModule": () => (/* binding */ MascotaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _mascota_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota.page */ 7913);




const routes = [
    {
        path: '',
        component: _mascota_page__WEBPACK_IMPORTED_MODULE_0__.MascotaPage
    }
];
let MascotaPageRoutingModule = class MascotaPageRoutingModule {
};
MascotaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MascotaPageRoutingModule);



/***/ }),

/***/ 5322:
/*!*************************************************!*\
  !*** ./src/app/pages/mascota/mascota.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotaPageModule": () => (/* binding */ MascotaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _mascota_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota-routing.module */ 6776);
/* harmony import */ var _mascota_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascota.page */ 7913);







let MascotaPageModule = class MascotaPageModule {
};
MascotaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mascota_routing_module__WEBPACK_IMPORTED_MODULE_0__.MascotaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_mascota_page__WEBPACK_IMPORTED_MODULE_1__.MascotaPage]
    })
], MascotaPageModule);



/***/ }),

/***/ 7913:
/*!***********************************************!*\
  !*** ./src/app/pages/mascota/mascota.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotaPage": () => (/* binding */ MascotaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_mascota_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mascota.page.html */ 8996);
/* harmony import */ var _mascota_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascota.page.scss */ 4426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mascota-service.service */ 4799);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);








let MascotaPage = class MascotaPage {
    constructor(_localStorageRefService, formBuilder, actRoute, router, mascotaService) {
        this._localStorageRefService = _localStorageRefService;
        this.formBuilder = formBuilder;
        this.actRoute = actRoute;
        this.router = router;
        this.mascotaService = mascotaService;
        this.razas = [];
        this.especies = [];
        this.InicioDetails = {
            idPro: '', nombre: '', especie: '', raza: '',
            sexo: '', fechaNac: '', edad: '',
            coloYSenalesParti: ''
        };
        this._localStorage = _localStorageRefService.localStorage;
        this.idPropietario = actRoute.snapshot.params.idPropietario;
        console.log("idpropie", this.idPropietario);
        this.obtenerEspecie();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
        this.form = this.formBuilder.group({
            mascota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z ]+$/)]],
            coloYSenalesParti: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z ]+$/)]]
        });
    }
    guardarSexo(event) {
        this.opcionSexo = event.detail.value;
        console.log("sexo", this.opcionSexo);
    }
    guardarEspecie(event) {
        this.opcionEspecie = event.detail.value;
        console.log("especie", this.opcionEspecie);
        this.idEspecie = this.opcionEspecie;
        this.obtenerRaza();
    }
    guardarRaza(event) {
        this.opcionRaza = event.detail.value;
        console.log("raza", this.opcionRaza);
    }
    guardarFechaNac(evento) {
        this.miVariableHora = evento.detail.value;
        this.dateFormat = this.miVariableHora.split('T')[0];
        console.log("holaa", this.dateFormat);
        if (this.dateFormat) {
            const convertAge = new Date(this.dateFormat);
            const timeDiff = Math.abs(Date.now() - convertAge.getTime());
            this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            var todayDate = new Date();
            var ageyear = todayDate.getFullYear() - convertAge.getFullYear();
            var agemonth = todayDate.getMonth() - convertAge.getMonth();
            var ageday = todayDate.getDate() - convertAge.getDate();
            this.showAge = ageyear + " anios ";
            console.log(this.showAge);
            /* if(agemonth != 0 && ageyear !=0){
               this.showAge=ageyear +" anios "+ " con "+ agemonth + ' meses y '  + ageday+ " dias"
               console.log( ageyear +" anios "+ " con "+ agemonth + ' meses y '  + ageday+ " dias");
       
             } else if (agemonth!=0 && ageyear==0) {
               this.showAge=agemonth + ' meses y '  + ageday+ " dias"
               console.log(  agemonth + ' meses y '  + ageday+ " dias");
       
             } else {
       
             }
       
             if(ageyear ==0 && agemonth==0){
               this.showAge=ageday+ " dias"
               console.log(ageday+ " dias");
       
             }
       */
        }
    }
    guardarMascota() {
        console.log("mascota sexo", this.opcionSexo, "raza", this.opcionRaza, "especie", this.opcionEspecie);
        this.InicioDetails.sexo = this.opcionSexo;
        this.InicioDetails.especie = this.opcionEspecie;
        this.InicioDetails.raza = this.opcionRaza;
        this.InicioDetails.fechaNac = this.dateFormat;
        this.InicioDetails.idPro = this.idPropietario;
        this.InicioDetails.fechaNac = this.showAge;
        console.log(this.InicioDetails);
        this.mascotaService.crearMascota(this.InicioDetails)
            .subscribe((data) => {
            console.log('Estamos en el propietario');
            this.mascota = data;
            console.log("recibo", this.mascota);
            this.router.navigate(['/consulta-medica/', this.mascota]);
        }, (error) => {
            console.log(error);
        });
    }
    obtenerEspecie() {
        this.mascotaService.obtenerEspecie()
            .subscribe((data) => {
            this.especies = data;
            console.log('Estamos en el especiee pag princi');
            console.log(this.especies);
        }, (error) => {
            console.log(error);
        });
    }
    obtenerRaza() {
        console.log(this.idEspecie);
        this.mascotaService.obtenerRaza(this.idEspecie)
            .subscribe((data) => {
            this.razas = data;
            console.log('Estamos en el especieee pag princi');
        }, (error) => {
            console.log(error);
        });
    }
};
MascotaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__.MascotaServiceService }
];
MascotaPage.propDecorators = {
    InicioDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
MascotaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mascota',
        template: _raw_loader_mascota_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mascota_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MascotaPage);



/***/ }),

/***/ 4426:
/*!*************************************************!*\
  !*** ./src/app/pages/mascota/mascota.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\nhtml {\n  --background: #f5f5f3;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 800px;\n  padding: 16px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-select {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-datetime {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-textarea {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nspan {\n  color: red;\n  align-content: center;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-container ion-input ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-select {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-datetime {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-textarea {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2NvdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDRztFQUNDLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlOOztBQURFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0kscURBQUE7QUFJSjs7QUFGQTtFQUNJLHFEQUFBO0FBS0o7O0FBSEE7RUFDRSxxREFBQTtBQU1GOztBQUpBO0VBQ0kscURBQUE7QUFPSjs7QUFMQTtFQUNFLHFEQUFBO0FBUUY7O0FBTkE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBU0o7O0FBTkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTEU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTEU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFRSiIsImZpbGUiOiJtYXNjb3RhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYzNDcwO1xyXG4gICB9XHJcbiAgIGh0bWx7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiA5NSUgIGN1cnNpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgcHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBtYXJnaW46IC0xNnB4O1xyXG5cclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MzQ3MDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24taW5wdXR7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tZGF0ZXRpbWV7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBpb24tdGV4dGFyZWF7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIGlvbi1pbnB1dCBpb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9IFxyXG4gIC5mb3JtLWNvbnRhaW5lciAgaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiAgfSBcclxuICAuZm9ybS1jb250YWluZXIgaW9uLWlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgaW9uLWRhdGV0aW1le1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgaW9uLXRleHRhcmVhe1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiAgfSBcclxuICAuZm9ybS1jb250YWluZXIgIGlvbi1idXR0b257XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9ICJdfQ== */");

/***/ }),

/***/ 8996:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mascota/mascota.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div align=\"right\">\r\n            <img src=\"../../../assets/imagenes/Logo.jpg\" height=\"50\" alt=\"\" />\r\n        </div>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n        integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n        integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n        integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n        integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n        crossorigin=\"anonymous\"></script>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br>\r\n    <br>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"guardarMascota(InicioDetails)\">\r\n        <div class=\"form-container\">\r\n            <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <ion-icon name=\"paw\"></ion-icon> <em> Registro\r\n                    Mascota </em></p>\r\n\r\n            <ion-item>\r\n                <ion-input placeholder=\"Nombre Mascota\" [(ngModel)]=\"InicioDetails.nombre\" style=\"text-align: center;\"\r\n                    formControlName=\"mascota\">\r\n                    <ion-icon name=\"reader-outline\"></ion-icon>                    \r\n                    <ion-label> &nbsp; Nombre:</ion-label>\r\n\r\n                </ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.mascota.errors\">\r\n                <span *ngIf=\"form.controls.mascota.errors.pattern\"> Ingrese solo letras </span>\r\n            </div>\r\n\r\n\r\n            <ion-item>\r\n                <ion-icon name=\"fish-outline\"></ion-icon>                \r\n                <ion-label>&nbsp;Especie</ion-label>\r\n                <ion-select (ionChange)=guardarEspecie($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                    okText=\"Ok\" cancelText=\"Cancelar\"   required=\"true\">\r\n                    <ion-select-option *ngFor=\"let item of especies\" [value]=\"item.nombreEspecie\">\r\n                        {{item.nombreEspecie}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n           \r\n            <ion-item>\r\n                <ion-icon name=\"paw-outline\"></ion-icon>              \r\n                  <ion-label>&nbsp;Raza</ion-label>\r\n                <ion-select (ionChange)=guardarRaza($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                    okText=\"Ok\" cancelText=\"Cancelar\" required=\"true\">\r\n                    <ion-select-option *ngFor=\"let item of razas\" [value]=\"item.nombre\">\r\n                        {{item.nombre}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                \r\n                <ion-icon name=\"male-female-outline\"></ion-icon><ion-label>&nbsp;Sexo</ion-label>\r\n                <ion-select (ionChange)=guardarSexo($event) placeholder=\"Seleccione \" style=\"text-align: center;\"\r\n                    okText=\"Ok\" cancelText=\"Cancelar\" required=\"true\">\r\n                    <ion-select-option value=\"Macho\">Macho</ion-select-option>\r\n                    <ion-select-option value=\"Hembra\">Hembra</ion-select-option>\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-icon name=\"calendar-outline\"></ion-icon><ion-label>&nbsp;Fecha Nacimiento</ion-label>\r\n                <ion-datetime placeholder=\"Seleccione\"  displayFormat=\"YYYY-MM-DD\t\" doneText=\"Ok\"\r\n                    cancelText=\"Cancelar\" (ionChange)=guardarFechaNac($event) required=\"true\"></ion-datetime>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-label>Edad : {{showAge}}\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-textarea placeholder=\"Color y señales particulares...\"\r\n                    [(ngModel)]=\"InicioDetails.coloYSenalesParti\" style=\"text-align: center;\" formControlName=\"coloYSenalesParti\" required=\"true\">\r\n\r\n                </ion-textarea>\r\n            </ion-item>\r\n            <div *ngIf=\"form.controls.coloYSenalesParti.errors\">\r\n                <span *ngIf=\"form.controls.coloYSenalesParti.errors.pattern\"> Ingrese solo letras </span>\r\n        \r\n              </div>\r\n\r\n            <div align=\"center\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n                            <ion-button color=\"shade\" type=\"submit\" [disabled]=\"form.invalid\">Siguiente\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mascota_mascota_module_ts.js.map
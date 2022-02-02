(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["src_app_pages_crud-raza_crud-raza_module_ts"],{

/***/ 902:
/*!*************************************************************!*\
  !*** ./src/app/pages/crud-raza/crud-raza-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudRazaPageRoutingModule": () => (/* binding */ CrudRazaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _crud_raza_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-raza.page */ 8003);




const routes = [
    {
        path: '',
        component: _crud_raza_page__WEBPACK_IMPORTED_MODULE_0__.CrudRazaPage
    }
];
let CrudRazaPageRoutingModule = class CrudRazaPageRoutingModule {
};
CrudRazaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrudRazaPageRoutingModule);



/***/ }),

/***/ 5374:
/*!*****************************************************!*\
  !*** ./src/app/pages/crud-raza/crud-raza.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudRazaPageModule": () => (/* binding */ CrudRazaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _crud_raza_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-raza-routing.module */ 902);
/* harmony import */ var _crud_raza_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-raza.page */ 8003);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);








let CrudRazaPageModule = class CrudRazaPageModule {
};
CrudRazaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _crud_raza_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrudRazaPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ],
        declarations: [_crud_raza_page__WEBPACK_IMPORTED_MODULE_1__.CrudRazaPage]
    })
], CrudRazaPageModule);



/***/ }),

/***/ 8003:
/*!***************************************************!*\
  !*** ./src/app/pages/crud-raza/crud-raza.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudRazaPage": () => (/* binding */ CrudRazaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_crud_raza_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crud-raza.page.html */ 2461);
/* harmony import */ var _crud_raza_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-raza.page.scss */ 8840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mascota-service.service */ 4799);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/localstore.service */ 8882);







let CrudRazaPage = class CrudRazaPage {
    constructor(_localStorageRefService, mascotaService, router) {
        this._localStorageRefService = _localStorageRefService;
        this.mascotaService = mascotaService;
        this.router = router;
        this.especies = [];
        this.razas = [];
        this.cp = 1;
        this.estado = true;
        this._localStorage = _localStorageRefService.localStorage;
        this.obtenerEspecie();
    }
    ngOnInit() {
        if (this._localStorage.length < 1) {
            this.router.navigate(['/inicio-sesion']);
        }
    }
    obtenerEspecie() {
        this.mascotaService.obtenerEspecie()
            .subscribe((data) => {
            this.especies = data;
            console.log('Estamos en el especiee pag princi', this.especies);
            console.log(this.especies);
        }, (error) => {
            console.log(error);
        });
    }
    addNew() {
        this.raza = {
            nombre: '',
            nombreEspecie: ''
        };
        return true;
    }
    guardarEspecie(event) {
        this.opcionEspecie = event.detail.value;
        console.log("especie", this.opcionEspecie);
        this.idEspecie = this.opcionEspecie;
        this.obtenerRaza();
    }
    guardarEspecies(event) {
        this.especie = event.detail.value;
        console.log("especie", this.especie);
        this.raza.nombreEspecie = this.especie;
    }
    obtenerRaza() {
        console.log(this.idEspecie);
        this.mascotaService.obtenerRaza(this.idEspecie)
            .subscribe((data) => {
            this.razas = data;
            console.log('Estamos en el especieee pag princi', this.razas);
        }, (error) => {
            console.log(error);
        });
    }
    guardarRaza() {
        if (this.estado == false) {
            console.log(this.razaId);
            this.estado = true;
            this.mascotaService.editarRaza(this.razaId, this.raza.nombre, this.raza.nombreEspecie).subscribe((dataa => {
                console.log(dataa);
                this.estado = true;
                this.obtenerRaza();
            }));
        }
        else {
            console.log("raza", this.raza);
            this.mascotaService.crearRaza(this.raza).subscribe((data => {
                console.log(data);
                this.obtenerRaza();
            }));
        }
    }
    editar(item) {
        this.raza = item;
        console.log("emtraaaaa", this.raza);
        this.estado = false;
        this.razaId = this.raza.raza_id;
        console.log(this.razaId);
    }
    eliminar(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.mascotaService.presentAlert('Alerta', '¿Seguro que desea eliminar?');
            console.log(res);
            console.log(item);
            if (res == true) {
                this.mascotaService.eliminarRaza(item.raza_id).subscribe((data => {
                    this.obtenerRaza();
                    console.log(data);
                }));
            }
            else {
                console.log("nooooo");
                this.obtenerRaza();
            }
        });
    }
    atras() {
        this.router.navigate(['/paginal-inicial']);
    }
};
CrudRazaPage.ctorParameters = () => [
    { type: _Services_localstore_service__WEBPACK_IMPORTED_MODULE_3__.LocalstoreService },
    { type: src_app_Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_2__.MascotaServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CrudRazaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-crud-raza',
        template: _raw_loader_crud_raza_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crud_raza_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrudRazaPage);



/***/ }),

/***/ 8840:
/*!*****************************************************!*\
  !*** ./src/app/pages/crud-raza/crud-raza.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #063470;\n}\n\n.form-container {\n  font-family: 95% cursive;\n  max-width: 750px;\n  padding: 15px;\n  margin: 10px auto;\n  background-color: #f7f7f7;\n  border-radius: 4%;\n  text-align: center;\n}\n\n.form-container p {\n  background: #FFE333;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 250;\n  text-align: center;\n  color: black;\n  margin: -16px;\n}\n\n.form-container ion-label {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-select {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-select-option {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n.form-container ion-button {\n  background-color: #063470;\n  margin-top: 10px;\n  height: 38px;\n  align-items: center;\n}\n\nion-input {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nh1 {\n  color: #063470;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-style: oblique;\n  -webkit-text-stroke: 0.5px #FFE333;\n  font-size: xx-large;\n  background-color: #cfd0dc;\n}\n\n.form-container ion-button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n\n.form-container pagination-controls {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQtcmF6YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUdFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUtFO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UscURBQUE7QUFGRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0MseUJBQUE7QUFESDs7QUFJQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usc0VBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6ImNydWQtcmF6YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MzQ3MDtcclxuICAgfVxyXG4gICBcclxuICBcclxuICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogOTUlICBjdXJzaXZlO1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBwe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogLTE2cHg7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbiAgLmZvcm0tY29udGFpbmVyICBpb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9IFxyXG4gIC5mb3JtLWNvbnRhaW5lciAgaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIFxyXG4gIH0gXHJcbiAgLmZvcm0tY29udGFpbmVyICBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBcclxuICB9ICBcclxuLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjM0NzA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmgxe1xyXG4gIGNvbG9yOiAjMDYzNDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41MHB4ICAjRkZFMzMzO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2UgO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkMGRjIDtcclxuXHJcbn1cclxuLmZvcm0tY29udGFpbmVyICBpb24tYnV0dG9ue1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59IFxyXG4uZm9ybS1jb250YWluZXIgIHBhZ2luYXRpb24tY29udHJvbHN7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59Il19 */");

/***/ }),

/***/ 2461:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud-raza/crud-raza.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div align=\"right\">\r\n      <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\" />\r\n    </div>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" color=\"light\"> </ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\r\n    integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\" />\r\n  <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n    integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\r\n    integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\r\n    integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script type=\"text/javascript\"></script>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1> <em> CARRERA DE MEDICINA\r\n    VETERINARIA Y ZOOTECNIA </em>\r\n\r\n\r\n</h1>\r\n\r\n  <div class=\"form-container\">\r\n    <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em>\r\n      <ion-icon name=\"paw-outline\"></ion-icon> Razas </em></p>\r\n\r\n    <ion-item>\r\n      <ion-label>Especie</ion-label>\r\n      <ion-select (ionChange)=guardarEspecie($event) placeholder=\"Seleccione \" style=\"text-align: center;\" okText=\"Ok\"\r\n        cancelText=\"Cancelar\" required=\"true\">\r\n        <ion-select-option *ngFor=\"let item of especies\" [value]=\"item.nombreEspecie\">\r\n          {{item.nombreEspecie}}\r\n        </ion-select-option>\r\n\r\n        <ion-icon name=\"mail-outline\"></ion-icon>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-grid class=\"ion-margin\">\r\n\r\n      <br>\r\n      <ion-row style=\"border-bottom: groove;\">\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Especie</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Raza</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Editar</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label style=\"font-weight: bold;\">Eliminar</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"border-bottom: groove;\" *ngFor=\"let item of razas | paginate: {itemsPerPage:4, currentPage:cp} \">\r\n\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label>{{item.especie_id.nombreEspecie}} </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-label>{{item.nombre}} </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <img src=\"../assets/imagenes/editar.png\" height=\"18\" alt=\"\" (click)=\"editar(item)\" />\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <img src=\"../../../assets/imagenes/1214428.png\" height=\"18\" alt=\"\" (click)=\"eliminar(item)\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <div>\r\n        <pagination-controls (pageChange)=\"cp = $event\" previousLabel=\"Antes\" nextLabel=\"Siguiente\">\r\n        </pagination-controls>\r\n\r\n\r\n      </div>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n          <ion-button color=\"shade\" (click)=\"atras()\" >Atras</ion-button>\r\n        </ion-col>\r\n        <br>\r\n        <ion-col size=\"5\">\r\n          <ion-button color=\"shade\" (click)=\"addNew()\">\r\n            Añadir nuevo\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <form (ngSubmit)=\"guardarRaza(raza)\" *ngIf=\"raza\">\r\n    <div class=\"form-container\">\r\n      <p style=\"font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17pt;\"> <em> Registro\r\n          Raza </em></p>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Nombre raza\" [(ngModel)]=\"raza.nombre\" style=\"text-align: center;\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-icon name=\"paw\"></ion-icon>\r\n          <ion-label>&nbsp; Nombre:</ion-label>\r\n\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Especie</ion-label>\r\n        <ion-select (ionChange)=guardarEspecies($event) placeholder=\"Seleccione \" style=\"text-align: center;\" okText=\"Ok\"\r\n          cancelText=\"Cancelar\" required=\"true\">\r\n          <ion-select-option *ngFor=\"let item of especies\" [value]=\"item.nombreEspecie\">\r\n            {{item.nombreEspecie}}\r\n          </ion-select-option>\r\n\r\n          <ion-icon name=\"mail-outline\"></ion-icon>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <div align=\"center\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-lg size-md size-sm size-xs class=\"ion-align-self-start\">\r\n              <ion-button color=\"shade\" type=\"submit\">Guardar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </form>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crud-raza_crud-raza_module_ts.js.map
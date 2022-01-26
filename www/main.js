(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 785:
/*!**************************************************!*\
  !*** ./src/app/Services/iniciosesion.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciosesionService": () => (/* binding */ IniciosesionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let IniciosesionService = class IniciosesionService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
        this.objectSourcee = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSourcee = this.objectSource.asObservable();
        this.url = '/TesisVeterinaria/rest/prueba/inicio';
    }
    iniciar(usuario) {
        console.log('dfkfhgdsfh-');
        console.log(usuario);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('correo', usuario.correo)
            .set('contrasena', usuario.contrasena);
        console.log('dfkfhgdsfh--');
        console.log(this.url);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
        //return this.http.post<Usuario>(this.url,usuario);
        //hecho
    }
    enviandocorreo(correo) {
        this.objectSource.next(correo);
    }
    enviandodatos(datos) {
        this.objectSourcee.next(datos);
    }
    getMedico(idusuario) {
        console.log(idusuario);
        return this.http.get("/TesisVeterinaria/rest/prueba/obtenerMedicoByCorreo/" + idusuario);
    }
};
IniciosesionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
IniciosesionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IniciosesionService);



/***/ }),

/***/ 8882:
/*!************************************************!*\
  !*** ./src/app/Services/localstore.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstoreService": () => (/* binding */ LocalstoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


function getLocalStorage() {
    return localStorage;
}
let LocalstoreService = class LocalstoreService {
    constructor() { }
    get localStorage() {
        return getLocalStorage();
    }
};
LocalstoreService.ctorParameters = () => [];
LocalstoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocalstoreService);



/***/ }),

/***/ 4799:
/*!*****************************************************!*\
  !*** ./src/app/Services/mascota-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotaServiceService": () => (/* binding */ MascotaServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);




let MascotaServiceService = class MascotaServiceService {
    constructor(http, alertController) {
        this.http = http;
        this.alertController = alertController;
        this.url = '/TesisVeterinaria/rest/prueba/registrarMascota';
    }
    crearMascota(mascota) {
        console.log("serviciossss", mascota);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('idPro', mascota.idPro)
            .set('nombre', mascota.nombre)
            .set('especie', mascota.especie)
            .set('raza', mascota.raza)
            .set('sexo', mascota.sexo)
            .set('fechaNac', mascota.fechaNac)
            .set('edad', mascota.edad)
            .set('coloYSenalesParti', mascota.coloYSenalesParti);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    obtenerEspecie() {
        console.log("Estamos en el service");
        return this.http.get("/TesisVeterinaria/rest/prueba/obtenerEspecieMascota");
    }
    obtenerRaza(idEspecie) {
        console.log("Estamos en el service especie");
        return this.http.get("/TesisVeterinaria/rest/prueba/obtenerRazaByEspecie/" + idEspecie);
    }
    crearEspecie(especie) {
        console.log("Crear especie", especie);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('nombreEspecie', especie.nombreEspecie);
        return this.http.post("/TesisVeterinaria/rest/prueba/registrarEspecie", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    editarEspecie(especie, nombreEspecie) {
        console.log("editar especie", especie, nombreEspecie);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('idEspecie', especie)
            .set('nombreEspecie', nombreEspecie);
        return this.http.post("/TesisVeterinaria/rest/prueba/editarEspecie", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    eliminarEspecie(especie) {
        console.log("eliminar especie", especie);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('idEspecie', especie);
        return this.http.post("/TesisVeterinaria/rest/prueba/eliminarEspecie/", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    crearRaza(raza) {
        console.log("Crear especie", raza);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('nombreEspecie', raza.nombreEspecie)
            .set('nombreRaza', raza.nombre);
        return this.http.post("/TesisVeterinaria/rest/prueba/registrarRaza", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    editarRaza(especie, nombreEspecie, nombreRaza) {
        console.log("editar especie", especie, nombreEspecie, nombreRaza);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('raza_id', especie)
            .set('nombreRaza', nombreRaza)
            .set('nombreEspecie', nombreEspecie);
        return this.http.post("/TesisVeterinaria/rest/prueba/editarRaza", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    eliminarRaza(raza) {
        console.log("eliminar raza", raza);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('idRaza', raza);
        return this.http.post("/TesisVeterinaria/rest/prueba/eliminarRaza", body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    presentAlert(texto, subtitulo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let aceptar = false;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: texto,
                subHeader: subtitulo,
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Ok',
                        handler: () => {
                            aceptar = true;
                        }
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss();
            return aceptar;
        });
    }
};
MascotaServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
MascotaServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MascotaServiceService);



/***/ }),

/***/ 3524:
/*!**********************************************!*\
  !*** ./src/app/Services/miperfil.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiperfilService": () => (/* binding */ MiperfilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let MiperfilService = class MiperfilService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
    }
    getMedico(correopda) {
        console.log(correopda);
        return this.http.get("/TesisVeterinaria/rest/prueba/medicoperfilcorreo/" + correopda);
    }
    enviandocorreo(correo) {
        this.objectSource.next(correo);
    }
};
MiperfilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MiperfilService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MiperfilService);



/***/ }),

/***/ 193:
/*!*********************************************************!*\
  !*** ./src/app/Services/propietario-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropietarioServiceService": () => (/* binding */ PropietarioServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let PropietarioServiceService = class PropietarioServiceService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
        this.url = '/TesisVeterinaria/rest/prueba/registrarPropietario';
    }
    crearPropietario(propietario) {
        console.log("serviciossss", propietario);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('cedula', propietario.idPropietario)
            .set('nombrepropietario', propietario.nombrePropietario)
            .set('ciudad', propietario.ciudad)
            .set('direccion', propietario.direccion)
            .set('telefono', propietario.telefono)
            .set('correo', propietario.correo);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    listarPropietarios() {
        console.log("Estamos en el listar propietarios especie");
        return this.http.get("/TesisVeterinaria/rest/prueba/listarPropietario");
    }
    enviarIdPropietario(idPropietario) {
        this.objectSource.next(idPropietario);
    }
    listarPropietarioById(idPropietario) {
        console.log("Estamos en el listar propietario by Id");
        return this.http.get("/TesisVeterinaria/rest/prueba/PropietariobyId/" + idPropietario);
    }
    listarMascotaByIdPropietario(idPropietario) {
        console.log("Estamos en el listar mascota by Id");
        return this.http.get("/TesisVeterinaria/rest/prueba/MascotasByIdPropietario/" + idPropietario);
    }
};
PropietarioServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PropietarioServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PropietarioServiceService);



/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    {
        path: '',
        redirectTo: 'inicio-sesion',
        pathMatch: 'full'
    },
    {
        path: 'inicio-sesion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inicio-sesion_inicio-sesion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inicio-sesion/inicio-sesion.module */ 1671)).then(m => m.InicioSesionPageModule)
    },
    {
        path: 'paginal-inicial',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_paginal-inicial_paginal-inicial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/paginal-inicial/paginal-inicial.module */ 175)).then(m => m.PaginalInicialPageModule)
    },
    {
        path: 'menu-drawer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_menu-drawer_menu-drawer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu-drawer/menu-drawer.module */ 6817)).then(m => m.MenuDrawerPageModule)
    },
    {
        path: 'mi-perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mi-perfil_mi-perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mi-perfil/mi-perfil.module */ 160)).then(m => m.MiPerfilPageModule)
    },
    {
        path: 'historias-clinicas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_historias-clinicas_historias-clinicas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/historias-clinicas/historias-clinicas.module */ 1935)).then(m => m.HistoriasClinicasPageModule)
    },
    {
        path: 'propietario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_propietario_propietario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/propietario/propietario.module */ 1775)).then(m => m.PropietarioPageModule)
    },
    {
        path: 'mascota/:idPropietario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mascota_mascota_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mascota/mascota.module */ 5322)).then(m => m.MascotaPageModule)
    },
    {
        path: 'receta-medica',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_receta-medica_receta-medica_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/receta-medica/receta-medica.module */ 4236)).then(m => m.RecetaMedicaPageModule)
    },
    {
        path: 'consulta-medica/:idMascota',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_consulta-medica_consulta-medica_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/consulta-medica/consulta-medica.module */ 2066)).then(m => m.ConsultaMedicaPageModule)
    },
    {
        path: 'registro-medico',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro-medico_registro-medico_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro-medico/registro-medico.module */ 1576)).then(m => m.RegistroMedicoPageModule)
    },
    {
        path: 'historia-det',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_historia-det_historia-det_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/historia-det/historia-det.module */ 8569)).then(m => m.HistoriaDetPageModule)
    },
    {
        path: 'consultadet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_consultadet_consultadet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/consultadet/consultadet.module */ 9279)).then(m => m.ConsultadetPageModule)
    },
    {
        path: 'agregar-consulta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_agregar-consulta_agregar-consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/agregar-consulta/agregar-consulta.module */ 5088)).then(m => m.AgregarConsultaPageModule)
    },
    { path: 'recordar-contra',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recordar-contra_recordar-contra_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recordar-contra/recordar-contra.module */ 2137)).then(m => m.RecordarContraPageModule)
    },
    {
        path: 'actualizar-contrasena',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actualizar-contrasena_actualizar-contrasena_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actualizar-contrasena/actualizar-contrasena.module */ 4921)).then(m => m.ActualizarContrasenaPageModule)
    },
    {
        path: 'listar-propietarios',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_listar-propietarios_listar-propietarios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/listar-propietarios/listar-propietarios.module */ 3356)).then(m => m.ListarPropietariosPageModule)
    },
    {
        path: 'propietario-detale',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_pages_propietario-detale_propietario-detale_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/propietario-detale/propietario-detale.module */ 4867)).then(m => m.PropietarioDetalePageModule)
    }, {
        path: 'crearreceta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_crearreceta_crearreceta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/crearreceta/crearreceta.module */ 5265)).then(m => m.CrearrecetaPageModule)
    },
    {
        path: 'verreceta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_verreceta_verreceta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verreceta/verreceta.module */ 6863)).then(m => m.VerrecetaPageModule)
    },
    {
        path: 'raza-especie',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_pages_raza-especie_raza-especie_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/raza-especie/raza-especie.module */ 7937)).then(m => m.RazaEspeciePageModule)
    },
    {
        path: 'crud-raza',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_pages_crud-raza_crud-raza_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/crud-raza/crud-raza.module */ 5374)).then(m => m.CrudRazaPageModule)
    },
    {
        path: 'receta-detalle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_receta-detalle_receta-detalle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/receta-detalle/receta-detalle.module */ 1678)).then(m => m.RecetaDetallePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 2649);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 6439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/Services/localstore.service */ 8882);
/* harmony import */ var _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/iniciosesion.service */ 785);
/* harmony import */ var _Services_miperfil_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/miperfil.service */ 3524);











let AppComponent = class AppComponent {
    constructor(localStorageRefService, platform, splashScreen, statusBar, router, inicioservice, miperfilservice) {
        this.localStorageRefService = localStorageRefService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.inicioservice = inicioservice;
        this.miperfilservice = miperfilservice;
        this.initializeApp();
        this._localStorage = localStorageRefService.localStorage;
    }
    ngOnInit() {
        this.inicioservice.$getObjectSource.subscribe(data => {
            console.log("datos en el drawer", data);
            this.correo = data;
            this.correop = this.correo.correo;
            this.miperfilservice.getMedico(this.correop).subscribe((dataa => {
                this.medico = dataa;
                console.log("datos medicos en el app component", this.medico);
            }));
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    navigate() {
        this.router.navigate(['/paginal-inicial']);
    }
    salir() {
        localStorage.removeItem('estado');
        localStorage.clear();
        this.router.navigate(['/inicio-sesion']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_Services_localstore_service__WEBPACK_IMPORTED_MODULE_4__.LocalstoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _Services_iniciosesion_service__WEBPACK_IMPORTED_MODULE_5__.IniciosesionService },
    { type: _Services_miperfil_service__WEBPACK_IMPORTED_MODULE_6__.MiperfilService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 2649);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 6439);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/propietario-service.service */ 193);
/* harmony import */ var _Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/mascota-service.service */ 4799);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 7699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 4766);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ],
        providers: [
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            _Services_propietario_service_service__WEBPACK_IMPORTED_MODULE_4__.PropietarioServiceService,
            _Services_mascota_service_service__WEBPACK_IMPORTED_MODULE_5__.MascotaServiceService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE333;\n  --color: #062f77;\n}\n\nion-button {\n  --background: #062f77;\n}\n\nion-toolbar {\n  --background: #063470;\n}\n\nion-content ion-menu ion-list {\n  --background: #FFE333;\n}\n\n.md list-md hydrated {\n  --background: #FFE333;\n}\n\n.appcomponent {\n  --background: #FFE333;\n}\n\n.list-md {\n  --background: #FFE333;\n  background: #FFE333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNDO0VBQ0MscUJBQUE7QUFFRjs7QUFDQztFQUNDLHFCQUFBO0FBRUY7O0FBQ0M7RUFDQyxxQkFBQTtBQUVGOztBQUNDO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICAtLWNvbG9yOiAjMDYyZjc3O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwNjM0NzA7XHJcbiB9XHJcblxyXG4gaW9uLWNvbnRlbnQgaW9uLW1lbnUgIGlvbi1saXN0IHtcclxuICAtLWJhY2tncm91bmQ6ICNGRkUzMzM7XHJcbiB9XHJcblxyXG4gLm1kIGxpc3QtbWQgaHlkcmF0ZWR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gfVxyXG5cclxuIC5hcHBjb21wb25lbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gfVxyXG5cclxuIC5saXN0LW1ke1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRTMzMztcclxuICBiYWNrZ3JvdW5kOiAjRkZFMzMzO1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app >\r\n    <ion-menu menuId=\"main-menu\" content-id=\"main\">\r\n        <ion-header>\r\n            <ion-toolbar>\r\n\r\n                <div align=\"right\">\r\n                    <img src=\"../assets/imagenes/Logo.png\" height=\"50\" alt=\"\">\r\n                </div>\r\n\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content class=\"appcomponent\">\r\n\r\n          <br>\r\n\r\n            <div class=\"appcomponent\" align=\"center\" *ngIf=\"medico\">\r\n\r\n                <img src=\"{{medico.fotoMedico}}\" width=\"200\" height=\"200\" alt=\"\"\r\n                    style=\"   border-radius: 130px; align:center\">\r\n                <br>\r\n            </div>\r\n            <div class=\"appcomponent\" align=\"center\" *ngIf=\"medico\">\r\n                <label style=\" font-family: Georgia, 'Times New Roman', Times, serif;\r\n                text-align: center;\r\n                font-style: italic; color: black; font-weight: bold;\"><em>\r\n                        {{medico.nombres}} {{medico.apellidos}}\r\n                    </em>                <br>\r\n                </label>\r\n                <br>\r\n            </div>\r\n            <ion-list class=\"appcomponent\">\r\n\r\n                <ion-menu-toggle class=\"appcomponent\">\r\n                    <ion-item routerLink=\"mi-perfil\" class=\"appcomponent\">\r\n                        <ion-icon name=\"medkit\" slot=\"start\"> </ion-icon>\r\n                        <ion-label style=\" font-family: Georgia, 'Times New Roman', Times, serif;\r\n                        text-align: center;\r\n                        font-style: italic;\"> Mi Perfil</ion-label>\r\n\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/raza-especie\" class=\"appcomponent\">\r\n                        <ion-icon name=\"paw\" slot=\"start\"> </ion-icon>\r\n                        <ion-label style=\" font-family: Georgia, 'Times New Roman', Times, serif;\r\n                        text-align: center;\r\n                        font-style: italic;\"> Especie</ion-label>\r\n\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-menu-toggle>\r\n                    <ion-item routerLink=\"/crud-raza\" class=\"appcomponent\">\r\n                        <ion-icon name=\"create\" slot=\"start\"> </ion-icon>\r\n                        <ion-label style=\" font-family: Georgia, 'Times New Roman', Times, serif;\r\n                        text-align: center;\r\n                        font-style: italic;\"> Raza</ion-label>\r\n\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n\r\n                <ion-menu-toggle class=\"appcomponent\">\r\n                    <ion-item (click)=\"salir()\" class=\"appcomponent\">\r\n                        <ion-icon name=\"log-out\" slot=\"start\"> </ion-icon>\r\n                        <ion-label style=\" font-family: Georgia, 'Times New Roman', Times, serif;\r\n                        text-align: center;\r\n                        font-style: italic;\"> Salir</ion-label>\r\n\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n\r\n\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n\r\n</ion-app>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
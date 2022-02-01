(self["webpackChunkpolivet"] = self["webpackChunkpolivet"] || []).push([["common"],{

/***/ 7658:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 5133);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 6887);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 4366);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 4369:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 5392);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 6887:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 977:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 9046:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 8350:
/*!**************************************************!*\
  !*** ./src/app/Modelo/ConstantesFisiologicas.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantesFiosologicas": () => (/* binding */ ConstantesFiosologicas)
/* harmony export */ });
class ConstantesFiosologicas {
    constructor(nombreConsta, valorConsta) {
        this.nombreConsta = nombreConsta;
        this.valorConsta = valorConsta;
    }
}
/*
peso:string
t: string
FCard: string
FResp: string
mucosas: string
pulso: string
otras:string
turgenciapiel:string*/ 


/***/ }),

/***/ 6862:
/*!****************************************************!*\
  !*** ./src/app/Services/consultamedica.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultamedicaService": () => (/* binding */ ConsultamedicaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let ConsultamedicaService = class ConsultamedicaService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
        this.objectSource2 = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource2 = this.objectSource2.asObservable();
        this.url = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/obtenerConstantesCabecera';
        this.urlConstanteF = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/agregarConstanteF';
        this.urlConsultaM = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarConsultaMedica';
        this.urlConsultaByHistoria = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarConsultaMedicaByHistoria';
    }
    obtenerConstantesCab() {
        console.log("Estamos en constantes Cab");
        return this.http.get(this.url);
    }
    crearConstantesF(listaconsutal) {
        console.log('llegaa al servicios', listaconsutal);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(listaconsutal);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
        fetch(this.urlConstanteF, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    crearConsultaM(consultaM) {
        console.log("consultaM", consultaM);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('motivoConsulta', consultaM.motivoConsulta)
            .set('vacunacion', consultaM.vacunacion)
            .set('desparacitacion', consultaM.desparacitacion)
            .set('estadoR', consultaM.estadoR)
            .set('producto', consultaM.producto)
            .set('fecha', consultaM.fecha)
            .set('procedencia', consultaM.procedencia)
            .set('anamnesis', consultaM.anamnesis)
            .set('diagnostico', consultaM.diagnostico)
            .set('pronostico', consultaM.pronostico)
            .set('tratamiento', consultaM.tratamiento)
            .set('observaciones', consultaM.observaciones)
            .set('idMascota', consultaM.idMascota)
            .set('medico', consultaM.medico);
        return this.http.post(this.urlConsultaM, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    recuperoListDeConsultasMedicas() {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarHistoriaClinica");
    }
    enviandoIdHistoria(idHistoria) {
        this.objectSource.next(idHistoria);
    }
    enviandoIdConsulta(idConsultaMedica) {
        this.objectSource2.next(idConsultaMedica);
    }
    recuperoListHistoria(idConsulta) {
        console.log('estamos recuperoListDeConsultasMedicasDetalle', idConsulta);
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaMedica/" + idConsulta);
    }
    consultamedicaByHistoria(idConsulta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaMedicaByIdHistoria/" + idConsulta);
    }
    detalleByConstanteDet(idConsulta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConstantesFisioByConsulta/" + idConsulta);
    }
    obtenerConsultaById(idConsulta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaById/" + idConsulta);
    }
    listaConsultaOk(idConsulta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaok/" + idConsulta, { responseType: 'text' });
    }
    crearConsultaMByHistoria(consultaM) {
        console.log("consultaM", consultaM);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('motivoConsulta', consultaM.motivoConsulta)
            .set('vacunacion', consultaM.vacunacion)
            .set('desparacitacion', consultaM.desparacitacion)
            .set('estadoR', consultaM.estadoR)
            .set('producto', consultaM.producto)
            .set('fecha', consultaM.fecha)
            .set('procedencia', consultaM.procedencia)
            .set('anamnesis', consultaM.anamnesis)
            .set('diagnostico', consultaM.diagnostico)
            .set('pronostico', consultaM.pronostico)
            .set('tratamiento', consultaM.tratamiento)
            .set('observaciones', consultaM.observaciones)
            .set('idMascota', consultaM.idMascota);
        return this.http.post(this.urlConsultaByHistoria, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
};
ConsultamedicaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ConsultamedicaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ConsultamedicaService);



/***/ }),

/***/ 56:
/*!********************************************!*\
  !*** ./src/app/Services/receta.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaService": () => (/* binding */ RecetaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let RecetaService = class RecetaService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
        this.url = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarRecetaM';
        this.urlActualiza = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/actualizaRecetaM';
    }
    enviandoIdConsulta(idConsultaMedica) {
        this.objectSource.next(idConsultaMedica);
    }
    crearReceta(receta) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('rp', receta.rp)
            .set('prescripcion', receta.prescripcion)
            .set('consulta_id', receta.consulta_id);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    listrecetaMedica(idConsulta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listasRecetaMedica/" + idConsulta);
    }
    listadetalleReceta(idReceta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listaDetalleRecetaM/" + idReceta);
    }
    eliminarlReceta(idReceta) {
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/EliminarRecetaM/" + idReceta, { responseType: 'text' });
    }
    actualizarReceta(receta) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('idReceta', receta.idReceta)
            .set('rp', receta.rp)
            .set('prescripcion', receta.prescripcion)
            .set('consulta_id', receta.consulta_id);
        return this.http.post(this.urlActualiza, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
};
RecetaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RecetaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RecetaService);



/***/ }),

/***/ 5870:
/*!*****************************************************!*\
  !*** ./src/app/Services/recordar-contra.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordarContraService": () => (/* binding */ RecordarContraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);




let RecordarContraService = class RecordarContraService {
    constructor(http) {
        this.http = http;
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.$getObjectSource = this.objectSource.asObservable();
        this.url = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/recordarcontra';
        this.urll = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/recordarcontrados';
        this.urlokcorreo = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/CorreoOk';
    }
    recordar(usuario) {
        console.log('dfkfhgdsfh-');
        console.log(usuario);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('correo', usuario.correo);
        console.log('dfkfhgdsfh--');
        console.log(this.url);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    OkCorreo(usuario) {
        console.log('dfkfhgdsfh-');
        console.log(usuario);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('correo', usuario.correo);
        console.log('dfkfhgdsfh--');
        console.log(this.urlokcorreo);
        return this.http.post(this.urlokcorreo, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    enviandodatos(datos) {
        this.objectSource.next(datos);
    }
    recordarcontra(usuario) {
        console.log('dfkfhgdsfh-');
        console.log(usuario);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('correo', usuario.correo)
            .set('contrasena', usuario.contrasena)
            .set('contrasenaNueva', usuario.contrasenaNueva);
        console.log('dfkfhgdsfh--');
        console.log(this.urll);
        return this.http.post(this.urll, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
};
RecordarContraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RecordarContraService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RecordarContraService);



/***/ }),

/***/ 7669:
/*!****************************************************!*\
  !*** ./src/app/Services/registromedico.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistromedicoService": () => (/* binding */ RegistromedicoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1887);



let RegistromedicoService = class RegistromedicoService {
    constructor(http) {
        this.http = http;
        this.url = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarPUsuario';
        this.urll = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/actualizarPMedico';
    }
    obtenerEspecialidad() {
        console.log("Estamos en el service especialidad");
        return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/obtenerEspecialidad");
    }
    crearUsuario(medico) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('cedula', medico.cedula)
            .set('nombres', medico.nombres)
            .set('apellidos', medico.apellidos)
            .set('direccion', medico.direccion)
            .set('fechaNac', medico.fechaNac)
            .set('correo', medico.correo)
            .set('contrasena', medico.contrasena)
            .set('celular', medico.celular)
            .set('titulo', medico.titulo)
            .set('fotomedico', medico.fotomedico)
            .set('especialidad_id', medico.especialidad_id);
        return this.http.post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
    actualizarMedico(medico) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('cedula', medico.cedula)
            .set('nombres', medico.nombres)
            .set('apellidos', medico.apellidos)
            .set('direccion', medico.direccion)
            .set('fechaNac', medico.fechaNac)
            .set('correo', medico.correo)
            .set('celular', medico.celular)
            .set('titulo', medico.titulo)
            .set('fotomedico', medico.fotomedico)
            .set('especialidad_id', medico.especialidad_id)
            .set('usuario_id', medico.usuario_id);
        return this.http.post(this.urll, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
    }
};
RegistromedicoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RegistromedicoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RegistromedicoService);



/***/ }),

/***/ 9795:
/*!**************************************************!*\
  !*** ./src/app/pipes/filtro-propietario.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPropietarioPipe": () => (/* binding */ FiltroPropietarioPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


let FiltroPropietarioPipe = class FiltroPropietarioPipe {
    transform(arreglo, texto, columna) {
        if (texto == '') {
            console.log("piepeeessssssss111s", arreglo);
            return arreglo;
        }
        texto = texto.toLocaleLowerCase();
        return arreglo.filter(item => {
            return item.mascota_id.id_mascota_propietario.propietario.toLowerCase()
                .includes(texto);
        });
    }
};
FiltroPropietarioPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroPropietario'
    })
], FiltroPropietarioPipe);



/***/ }),

/***/ 1041:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _filtro_propietario_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro-propietario.pipe */ 9795);



let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_filtro_propietario_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPropietarioPipe],
        exports: [_filtro_propietario_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPropietarioPipe]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=common.js.map
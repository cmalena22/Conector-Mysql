"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2985],{2985:(S,u,r)=>{r.r(u),r.d(u,{InicioSPageModule:()=>I});var h=r(9808),a=r(4182),i=r(9188),l=r(4030),e=r(9863),g=r(520);let m=(()=>{class o{constructor(n){this.http=n,this.url="/TesisVeterinariaApi/rest/prueba/inicio"}iniciar(n){console.log("dfkfhgdsfh-"),console.log(n);const t=(new g.LE).set("correo",n.correo).set("contrasena",n.contrasena);return console.log("dfkfhgdsfh--"),console.log(this.url),this.http.post(this.url,t.toString(),{headers:(new g.WM).set("Content-Type","application/x-www-form-urlencoded"),responseType:"text"})}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(g.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const p=function(){return{standalone:!0}},Z=[{path:"",component:(()=>{class o{constructor(n,t,s){this.navCtrl=n,this.router=t,this.inicioservice=s,this.estado=!1,this.InicioDetails={correo:"",contrasena:""}}ngOnInit(){}addInicio(n){console.log("Addinicio"),this.inicioservice.iniciar(this.InicioDetails).subscribe(t=>{if(console.log("data"),this.correoo=t,"No creado"!=this.correoo)return this.router.navigate(["/pagina-inicial"]);console.log("no creadoooo")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.SH),e.Y36(l.F0),e.Y36(m))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-inicio-s"]],inputs:{InicioDetails:"InicioDetails"},decls:26,vars:7,consts:[["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css","integrity","sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk","crossorigin","anonymous"],["id","header"],[2,"text-align","center"],[1,"form-group","text-center",3,"ngSubmit"],["userForm","ngForm"],[1,"container"],["ion-input","","large","","clear","","placeholder","Direcci\xf3n de Correo","required","true",2,"text-align","center",3,"ngModel","ngModelOptions","ngModelChange"],["name","person"],["type","password","placeholder","Contrase\xf1a","required","true",2,"text-align","center",3,"ngModel","ngModelOptions","ngModelChange"],["name","key"],["center",""],["text-center",""],["type","submit",3,"disabled"]],template:function(n,t){if(1&n&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e._UZ(2,"ion-title"),e.qZA(),e._UZ(3,"meta",0),e._UZ(4,"meta",1),e._UZ(5,"link",2),e.TgZ(6,"title"),e._uU(7,"Inicio sesion"),e.qZA(),e.qZA(),e.TgZ(8,"ion-content"),e.TgZ(9,"div",3),e._UZ(10,"br"),e.TgZ(11,"h1",4),e._uU(12,"Cl\xednica Veterinaria Polivet"),e.qZA(),e.qZA(),e.TgZ(13,"form",5,6),e.NdJ("ngSubmit",function(){return t.addInicio(t.InicioDetails)}),e.TgZ(15,"div",7),e.TgZ(16,"ion-item"),e.TgZ(17,"ion-input",8),e.NdJ("ngModelChange",function(d){return t.InicioDetails.correo=d}),e._UZ(18,"ion-icon",9),e.qZA(),e.qZA(),e.TgZ(19,"ion-item"),e.TgZ(20,"ion-input",10),e.NdJ("ngModelChange",function(d){return t.InicioDetails.contrasena=d}),e._UZ(21,"ion-icon",11),e.qZA(),e.qZA(),e.TgZ(22,"ion-row",12),e.TgZ(23,"ion-col",13),e.TgZ(24,"ion-button",14),e._uU(25,"Iniciar sesion"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const s=e.MAs(14);e.xp6(17),e.Q6J("ngModel",t.InicioDetails.correo)("ngModelOptions",e.DdM(5,p)),e.xp6(3),e.Q6J("ngModel",t.InicioDetails.contrasena)("ngModelOptions",e.DdM(6,p)),e.xp6(4),e.Q6J("disabled",!s.form.valid)}},directives:[i.Gu,i.sr,i.wd,i.W2,a._Y,a.JL,a.F,i.Ie,i.pK,i.j9,a.Q7,a.JJ,a.On,i.gu,i.Nd,i.wI,i.YG],styles:[""]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,a.u5,l.Bz,i.Pc,f]]}),o})()}}]);
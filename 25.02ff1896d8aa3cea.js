"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[25],{6025:(Q,b,s)=>{s.r(b),s.d(b,{ApplicationsModule:()=>d});var y=s(8252),F=s(5151),U=s(5203),t=s(4650),v=s(8278),l=s(6895),_=s(5861),Z=s(7030),p=s(8925),T=s(3143),S=s(5594),h=s(7392),u=s(8255),C=s(4859);function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw().$implicit,x=t.oxw();return t.KtG(x.update(c,a))}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.hij(" Set as ",t.lcZ(2,1,e)," ")}}const k=function(n,i,e,o,r,a){return{"bg-red-200 text-red-800":n,"bg-amber-200 text-amber-800":i,"bg-sky-200 text-sky-800":e,"bg-emerald-200 text-emerald-800":o,"bg-blue-200 text-blue-800":r,"bg-purple-200 text-purple-800":a}};function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",6)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",7),t._uU(22),t.ALo(23,"titlecase"),t.qZA()(),t.TgZ(24,"td")(25,"button",8),t._UZ(26,"mat-icon",9),t.qZA(),t.TgZ(27,"mat-menu",10,11)(29,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.print(a))}),t._uU(30," Print "),t.qZA(),t.TgZ(31,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.addRemarks(a))}),t._uU(32," Edit Remarks "),t.qZA(),t.YNc(33,q,3,3,"button",13),t.qZA()()()}if(2&n){const e=i.$implicit,o=t.MAs(28),r=t.oxw();t.xp6(2),t.HOy(" ",e.owner_last_name,", ",e.owner_first_name," ",e.owner_middle_name," ",e.owner_name_extension," "),t.xp6(2),t.hij(" ",e.civil_status," "),t.xp6(2),t.hij(" ",e.citizenship," "),t.xp6(2),t.hij(" ",e.sex," "),t.xp6(2),t.hij(" ",e.weight," "),t.xp6(2),t.hij(" ",e.height," "),t.xp6(2),t.hij(" ",t.xi3(15,18,e.dob,"MMMM, dd, yyyy ")," "),t.xp6(3),t.AsE(" ",e.length_of_stay_years," years & ",e.length_of_stay_months," months "),t.xp6(2),t.hij(" ",e.remarks||"N/A"," "),t.xp6(2),t.Q6J("ngClass",t.HTZ(23,k,"pending"===e.status,"processing"===e.status,"done"===e.status,"completed"===e.status,"received"===e.status,"on-hold"===e.status)),t.xp6(1),t.hij(" ",t.lcZ(23,21,e.status)," "),t.xp6(3),t.Q6J("matMenuTriggerFor",o),t.xp6(2),t.Q6J("xPosition","before"),t.xp6(6),t.Q6J("ngForOf",r.STATUSES)}}class g{constructor(i,e){this._angularFireStore=i,this._certificateOfBarangayClearanceViewModal=e,this.certificates=[],this.STATUSES=Object.values(Z.N)}ngOnInit(){this._angularFireStore.collection(p.V.CERTIFICATE_OF_CLEARANCE).valueChanges({idField:"id"}).subscribe(i=>{this.certificates=i})}update(i,e){var o=this;return(0,_.Z)(function*(){try{yield o._angularFireStore.collection(p.V.CERTIFICATE_OF_CLEARANCE).doc(i.id).update({...i,status:e,updateAt:Date.now()})}catch{}})()}addRemarks(i){var e=this;return(0,_.Z)(function*(){const o=prompt("Add Remarks");if(o)try{yield e._angularFireStore.collection(p.V.CERTIFICATE_OF_CLEARANCE).doc(i.id).update({...i,remarks:o,updateAt:Date.now()})}catch{}})()}print(i){this._certificateOfBarangayClearanceViewModal.certificate$.next(i),this._certificateOfBarangayClearanceViewModal.opened$.next(!0)}trackByFn(i,e){return e.id||i}}g.\u0275fac=function(i){return new(i||g)(t.Y36(T.ST),t.Y36(S.o))},g.\u0275cmp=t.Xpm({type:g,selectors:[["application-list-clearance"]],decls:29,vars:2,consts:[[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","bg-card"],[1,"flex","flex-col","flex-auto","overflow-x-auto","overflow-y-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-left","uppercase"],[1,"text-gray-700"],["class","text-left border-t border-gray-100",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-left","border-t","border-gray-100"],[1,"px-3","py-2","text-xs","rounded-full",3,"ngClass"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","feather:more-vertical"],[3,"xPosition"],["certificateOptions","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Civil Status"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Citizenship"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Sex"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Weight"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Height"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"DOB"),t.qZA(),t.TgZ(19,"th",4),t._uU(20,"Length of Stay"),t.qZA(),t.TgZ(21,"th",4),t._uU(22,"Remarks"),t.qZA(),t.TgZ(23,"th",4),t._uU(24,"Status"),t.qZA(),t._UZ(25,"th",4)(26,"th",4),t.qZA()(),t.TgZ(27,"tbody"),t.YNc(28,w,34,30,"tr",5),t.qZA()()()()),2&i&&(t.xp6(28),t.Q6J("ngForOf",e.certificates)("ngForTrackBy",e.trackByFn))},dependencies:[l.mk,l.sg,h.Hw,u.VK,u.OP,u.p6,C.RK,l.rS,l.uU]});var E=s(4562);function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw().$implicit,x=t.oxw();return t.KtG(x.update(c,a))}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.hij(" Set as ",t.lcZ(2,1,e)," ")}}const M=function(n,i,e,o,r,a){return{"bg-red-200 text-red-800":n,"bg-amber-200 text-amber-800":i,"bg-sky-200 text-sky-800":e,"bg-emerald-200 text-emerald-800":o,"bg-blue-200 text-blue-800":r,"bg-purple-200 text-purple-800":a}};function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",6)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",7),t._uU(22),t.ALo(23,"titlecase"),t.qZA()(),t.TgZ(24,"td")(25,"button",8),t._UZ(26,"mat-icon",9),t.qZA(),t.TgZ(27,"mat-menu",10,11)(29,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.print(a))}),t._uU(30," Print "),t.qZA(),t.TgZ(31,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.addRemarks(a))}),t._uU(32," Edit Remarks "),t.qZA(),t.YNc(33,O,3,3,"button",13),t.qZA()()()}if(2&n){const e=i.$implicit,o=t.MAs(28),r=t.oxw();t.xp6(2),t.HOy(" ",e.owner_last_name,", ",e.owner_first_name," ",e.owner_middle_name," ",e.owner_name_extension," "),t.xp6(2),t.hij(" ",e.civil_status," "),t.xp6(2),t.hij(" ",e.citizenship," "),t.xp6(2),t.hij(" ",e.sex," "),t.xp6(2),t.hij(" ",e.weight," "),t.xp6(2),t.hij(" ",e.height," "),t.xp6(2),t.hij(" ",t.xi3(15,18,e.dob,"MMMM, dd, yyyy ")," "),t.xp6(3),t.AsE(" ",e.length_of_stay_years," years & ",e.length_of_stay_months," months "),t.xp6(2),t.hij(" ",e.remarks||"N/A"," "),t.xp6(2),t.Q6J("ngClass",t.HTZ(23,M,"pending"===e.status,"processing"===e.status,"done"===e.status,"completed"===e.status,"received"===e.status,"on-hold"===e.status)),t.xp6(1),t.hij(" ",t.lcZ(23,21,e.status)," "),t.xp6(3),t.Q6J("matMenuTriggerFor",o),t.xp6(2),t.Q6J("xPosition","before"),t.xp6(6),t.Q6J("ngForOf",r.STATUSES)}}class m{constructor(i,e){this._angularFireStore=i,this._certificateOfBADACViewModal=e,this.certificates=[],this.STATUSES=Object.values(Z.N)}ngOnInit(){this._angularFireStore.collection(p.V.CERTIFICATE_OF_BADAC).valueChanges({idField:"id"}).subscribe(i=>{this.certificates=i})}update(i,e){var o=this;return(0,_.Z)(function*(){try{yield o._angularFireStore.collection(p.V.CERTIFICATE_OF_BADAC).doc(i.id).update({...i,status:e,updateAt:Date.now()})}catch{}})()}print(i){this._certificateOfBADACViewModal.certificate$.next(i),this._certificateOfBADACViewModal.opened$.next(!0)}addRemarks(i){var e=this;return(0,_.Z)(function*(){const o=prompt("Add Remarks");if(o)try{yield e._angularFireStore.collection(p.V.CERTIFICATE_OF_BADAC).doc(i.id).update({...i,remarks:o,updateAt:Date.now()})}catch{}})()}trackByFn(i,e){return e.id||i}}m.\u0275fac=function(i){return new(i||m)(t.Y36(T.ST),t.Y36(E._))},m.\u0275cmp=t.Xpm({type:m,selectors:[["application-list-badac"]],decls:29,vars:2,consts:[[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","bg-card"],[1,"flex","flex-col","flex-auto","overflow-x-auto","overflow-y-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-left","uppercase"],[1,"text-gray-700"],["class","text-left border-t border-gray-100",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-left","border-t","border-gray-100"],[1,"px-3","py-2","text-xs","rounded-full",3,"ngClass"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","feather:more-vertical"],[3,"xPosition"],["certificateOptions","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Civil Status"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Citizenship"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Sex"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Weight"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Height"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"DOB"),t.qZA(),t.TgZ(19,"th",4),t._uU(20,"Length of Stay"),t.qZA(),t.TgZ(21,"th",4),t._uU(22,"Remarks"),t.qZA(),t.TgZ(23,"th",4),t._uU(24,"Status"),t.qZA(),t._UZ(25,"th",4)(26,"th",4),t.qZA()(),t.TgZ(27,"tbody"),t.YNc(28,L,34,30,"tr",5),t.qZA()()()()),2&i&&(t.xp6(28),t.Q6J("ngForOf",e.certificates)("ngForTrackBy",e.trackByFn))},dependencies:[l.mk,l.sg,h.Hw,u.VK,u.OP,u.p6,C.RK,l.rS,l.uU]});var I=s(6698);function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw().$implicit,x=t.oxw();return t.KtG(x.update(c,a))}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.hij(" Set as ",t.lcZ(2,1,e)," ")}}const B=function(n,i,e,o,r,a){return{"bg-red-200 text-red-800":n,"bg-amber-200 text-amber-800":i,"bg-sky-200 text-sky-800":e,"bg-emerald-200 text-emerald-800":o,"bg-blue-200 text-blue-800":r,"bg-purple-200 text-purple-800":a}};function R(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",6)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",7),t._uU(22),t.ALo(23,"titlecase"),t.qZA()(),t.TgZ(24,"td")(25,"button",8),t._UZ(26,"mat-icon",9),t.qZA(),t.TgZ(27,"mat-menu",10,11)(29,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.print(a))}),t._uU(30," Print "),t.qZA(),t.TgZ(31,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.addRemarks(a))}),t._uU(32," Edit Remarks "),t.qZA(),t.YNc(33,N,3,3,"button",13),t.qZA()()()}if(2&n){const e=i.$implicit,o=t.MAs(28),r=t.oxw();t.xp6(2),t.HOy(" ",e.owner_last_name,", ",e.owner_first_name," ",e.owner_middle_name," ",e.owner_name_extension," "),t.xp6(2),t.hij(" ",e.civil_status," "),t.xp6(2),t.hij(" ",e.citizenship," "),t.xp6(2),t.hij(" ",e.sex," "),t.xp6(2),t.hij(" ",e.weight," "),t.xp6(2),t.hij(" ",e.height," "),t.xp6(2),t.hij(" ",t.xi3(15,18,e.dob,"MMMM, dd, yyyy ")," "),t.xp6(3),t.AsE(" ",e.length_of_stay_years," years & ",e.length_of_stay_months," months "),t.xp6(2),t.hij(" ",e.remarks||"N/A"," "),t.xp6(2),t.Q6J("ngClass",t.HTZ(23,B,"pending"===e.status,"processing"===e.status,"done"===e.status,"completed"===e.status,"received"===e.status,"on-hold"===e.status)),t.xp6(1),t.hij(" ",t.lcZ(23,21,e.status)," "),t.xp6(3),t.Q6J("matMenuTriggerFor",o),t.xp6(2),t.Q6J("xPosition","before"),t.xp6(6),t.Q6J("ngForOf",r.STATUSES)}}class f{constructor(i,e){this._angularFireStore=i,this._certificateOfTreePlantingSetViewModal=e,this.certificates=[],this.STATUSES=Object.values(Z.N)}ngOnInit(){this._angularFireStore.collection(p.V.CERTIFICATE_OF_TREE_PLANTING_SET).valueChanges({idField:"id"}).subscribe(i=>{this.certificates=i})}update(i,e){var o=this;return(0,_.Z)(function*(){try{yield o._angularFireStore.collection(p.V.CERTIFICATE_OF_TREE_PLANTING_SET).doc(i.id).update({...i,status:e,updateAt:Date.now()})}catch{}})()}addRemarks(i){var e=this;return(0,_.Z)(function*(){const o=prompt("Add Remarks");if(o)try{yield e._angularFireStore.collection(p.V.CERTIFICATE_OF_TREE_PLANTING_SET).doc(i.id).update({...i,remarks:o,updateAt:Date.now()})}catch{}})()}print(i){this._certificateOfTreePlantingSetViewModal.certificate$.next(i),this._certificateOfTreePlantingSetViewModal.opened$.next(!0)}trackByFn(i,e){return e.id||i}}f.\u0275fac=function(i){return new(i||f)(t.Y36(T.ST),t.Y36(I.R))},f.\u0275cmp=t.Xpm({type:f,selectors:[["application-list-tree-planting-set"]],decls:29,vars:2,consts:[[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","bg-card"],[1,"flex","flex-col","flex-auto","overflow-x-auto","overflow-y-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-left","uppercase"],[1,"text-gray-700"],["class","text-left border-t border-gray-100",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-left","border-t","border-gray-100"],[1,"px-3","py-2","text-xs","rounded-full",3,"ngClass"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","feather:more-vertical"],[3,"xPosition"],["certificateOptions","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Civil Status"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Citizenship"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Sex"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Weight"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Height"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"DOB"),t.qZA(),t.TgZ(19,"th",4),t._uU(20,"Length of Stay"),t.qZA(),t.TgZ(21,"th",4),t._uU(22,"Remarks"),t.qZA(),t.TgZ(23,"th",4),t._uU(24,"Status"),t.qZA(),t._UZ(25,"th",4)(26,"th",4),t.qZA()(),t.TgZ(27,"tbody"),t.YNc(28,R,34,30,"tr",5),t.qZA()()()()),2&i&&(t.xp6(28),t.Q6J("ngForOf",e.certificates)("ngForTrackBy",e.trackByFn))},dependencies:[l.mk,l.sg,h.Hw,u.VK,u.OP,u.p6,C.RK,l.rS,l.uU]});const j=function(n){return{"text-white bg-brand-orange pointer-events-none":n}};function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.activeCertificate=a)}),t._uU(1),t.ALo(2,"uppercase"),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(4,j,o.activeCertificate===e)),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}function P(n,i){1&n&&t._UZ(0,"application-list-badac")}function $(n,i){1&n&&t._UZ(0,"application-list-clearance")}function H(n,i){1&n&&t._UZ(0,"application-list-tree-planting-set")}class A{constructor(){this.CERTIFICATES=Object.values(U.h),this.activeCertificate=this.CERTIFICATES[0]}trackByFn(i,e){return e.id||i}}A.\u0275fac=function(i){return new(i||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["applications"]],decls:7,vars:5,consts:[[1,"w-full"],["pageTitle","Applications","subtitle","Applications are being manage here.","icon","heroicons_outline:pencil-alt",1,"w-full"],[1,"flex","items-center","w-full","p-3","bg-white","border-gray-200","border-y"],["class","px-5 py-3 hover:bg-gray-100",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"px-5","py-3","hover:bg-gray-100",3,"ngClass","click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"route-header",1),t.TgZ(2,"div",2),t.YNc(3,J,3,6,"button",3),t.qZA(),t.YNc(4,P,1,0,"application-list-badac",4),t.YNc(5,$,1,0,"application-list-clearance",4),t.YNc(6,H,1,0,"application-list-tree-planting-set",4),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngForOf",e.CERTIFICATES)("ngForTrackBy",e.trackByFn),t.xp6(1),t.Q6J("ngIf","badac"===e.activeCertificate),t.xp6(1),t.Q6J("ngIf","clearance"===e.activeCertificate),t.xp6(1),t.Q6J("ngIf","tree-planting-set"===e.activeCertificate))},dependencies:[v.t,l.mk,l.sg,l.O5,g,m,f,l.gd]});const V=[{path:"",component:A}];class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[F.m,y.Bz.forChild(V)]})}}]);
"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[436],{926:function(e,t,r){r.d(t,{o:function(){return n}});var a=r(575),s={prof_by_level:{1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:4,10:4,11:4,12:4,13:5,14:5,15:5,16:5,17:6,18:6,19:6,20:6},slots_by_level:{1:{1:2,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},2:{1:3,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},3:{1:4,2:2,3:0,4:0,5:0,6:0,7:0,8:0,9:0},4:{1:4,2:3,3:0,4:0,5:0,6:0,7:0,8:0,9:0},5:{1:4,2:3,3:2,4:0,5:0,6:0,7:0,8:0,9:0},6:{1:4,2:3,3:3,4:0,5:0,6:0,7:0,8:0,9:0},7:{1:4,2:3,3:3,4:1,5:0,6:0,7:0,8:0,9:0},8:{1:4,2:3,3:3,4:2,5:0,6:0,7:0,8:0,9:0},9:{1:4,2:3,3:3,4:3,5:1,6:0,7:0,8:0,9:0},10:{1:4,2:3,3:3,4:3,5:2,6:0,7:0,8:0,9:0},11:{1:4,2:3,3:3,4:3,5:2,6:1,7:0,8:0,9:0},12:{1:4,2:3,3:3,4:3,5:2,6:1,7:0,8:0,9:0},13:{1:4,2:3,3:3,4:3,5:2,6:1,7:1,8:0,9:0},14:{1:4,2:3,3:3,4:3,5:2,6:1,7:1,8:0,9:0},15:{1:4,2:3,3:3,4:3,5:2,6:1,7:1,8:1,9:0},16:{1:4,2:3,3:3,4:3,5:2,6:1,7:1,8:1,9:0},17:{1:4,2:3,3:3,4:3,5:2,6:1,7:1,8:1,9:1},18:{1:4,2:3,3:3,4:3,5:3,6:1,7:1,8:1,9:1},19:{1:4,2:3,3:3,4:3,5:3,6:2,7:1,8:1,9:1},20:{1:4,2:3,3:3,4:3,5:3,6:2,7:2,8:1,9:1}}};const n=(0,a.Q_)("dndStore",{state(){return{name:"",race:"",level:1,strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10,hp:10,maxhp:20,ac:10,initiative:10,speed:0,proficiencies:{athletics:!1,acrobatics:!1,"sleight of hand":!1,stealth:!1,arcana:!1,history:!1,investigation:!1,nature:!1,religion:!1,"animal handling":!1,insight:!1,medicine:!1,perception:!1,survival:!1,deception:!1,intimidation:!1,performance:!1,persuasion:!1,strength_save:!1,dexterity_save:!1,constitution_save:!1,intelligence_save:!1,wisdom_save:!1,charisma_save:!1},columns:[[{type:"status1",id:1},{type:"status2",id:2},{type:"str",id:10},{type:"dex",id:11},{type:"con",id:12},{type:"int",id:13},{type:"wis",id:14},{type:"cha",id:15}],[{type:"hp",id:7},{type:"text",id:4},{type:"text",id:5},{type:"bananas",id:6},{type:"attack",id:8},{type:"spellslots",id:9}],[{type:"text",id:16},{type:"portrait",id:17}]],elementData:{4:{title:"Four",text:"--"},5:{title:"Five",text:"--"}},noSave:{dragging:!1,characters:JSON.parse(localStorage.getItem("characters"))||{}}}},actions:{saveAsNew(){this.save(this.as_new_index)},save(e){let t=Object.fromEntries(Object.entries(this).filter((([e])=>!e.startsWith("$")&&(!e.startsWith("_")&&"noSave"!=e)))),r=JSON.parse(localStorage.getItem("characters"));null==r&&(r={}),r[e]=t,localStorage.setItem("characters",JSON.stringify(r)),this.refreshCharactersInformation()},load(e){let t=JSON.parse(localStorage.getItem("characters")),r=t[e];this.$patch(r)},delete(e){if(!confirm(`Delete ${this.noSave.characters[e].name} in slot ${e}?`))return;let t=JSON.parse(localStorage.getItem("characters"));delete t[e],localStorage.setItem("characters",JSON.stringify(t)),this.refreshCharactersInformation()},refreshCharactersInformation(){this.noSave.characters=JSON.parse(localStorage.getItem("characters"))||{}},getModValue(e){return Math.floor(Number(e)/2-5)},plusAndRound(e){const t=e>=0?"+":"";return t+Math.floor(e)},getSpellCount(e){if(null!=s.slots_by_level[this.level]&&null!=s.slots_by_level[this.level][e])return s.slots_by_level[this.level][e]},addElement(e,t){let r=0;for(const a of this.columns)for(const e of a)e.id>r&&(r=e.id);console.log("Creating new "+t+" with id "+(r+1)),this.columns[e].push({type:t,id:r+1})},cleanElementData(){let e=new Set;for(const t of this.columns)for(const r of t){if(r.id in e)return console.error("ID "+r.id+" APPEARS MULTIPLE TIMES");e.add(r.id)}for(const t of Object.keys(this.elementData))e.has(Number(t))||(delete this.elementData[t],console.log("Removed element data for "+t))}},getters:{proficiency_bonus(){return s.prof_by_level[this.level]||0},as_new_index(){for(let e=0;e<1e4;e++)if(null==this.noSave.characters[e])return e}}})},436:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var a=r(252),s=r(577);const n=(0,a.Uk)("Splash"),l=(0,a._)("br",null,null,-1),i=(0,a.Uk)("Vuesweeper"),o=(0,a._)("br",null,null,-1),c=(0,a.Uk)("Character sheet"),h=(0,a._)("br",null,null,-1),d=(0,a.Uk)("Code editor");function u(e,t,r,u,f,p){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",null,"Shtufffs "+(0,s.zw)(f.store.counter),1),(0,a.Wm)(m,{to:"splash"},{default:(0,a.w5)((()=>[n])),_:1}),l,(0,a.Wm)(m,{to:"minesweeper"},{default:(0,a.w5)((()=>[i])),_:1}),o,(0,a.Wm)(m,{to:"dnd"},{default:(0,a.w5)((()=>[c])),_:1}),h,(0,a.Wm)(m,{to:"editor"},{default:(0,a.w5)((()=>[d])),_:1})],64)}var f=r(926),p={data(){return{store:(0,f.o)()}}},m=r(744);const v=(0,m.Z)(p,[["render",u]]);var _=v}}]);
//# sourceMappingURL=436.809d1f1c.js.map
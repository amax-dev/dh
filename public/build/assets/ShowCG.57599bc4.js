import{_ as w}from"./AuthenticatedLayout.c68b4c5c.js";import{L as A,H as L,i as c,l as v,s as h,o as u,g as m,a as s,w as l,F as y,d as e,e as p,t,A as O,E as R,k as C}from"./app.fc8f607a.js";import{_ as H}from"./PrimaryButton.4aa0eae4.js";import{V as N}from"./vue3-highcharts.common.3176b37f.js";import{H as B,h as x,a as V}from"./highcharts.831b0efa.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.6d960330.js";B(x);V(x);const U={components:{AuthenticatedLayout:w,Link:A,Head:L,PrimaryButton:H,VueHighcharts:N},props:{izbori:Array,naziv:String,mandati:Array,cenzus:Number,grafik:Array,grafik2:Array,grafik2Cat:Array,vazecihListica:Number},data(){return{cenzus:this.cenzus,ukMandata:this.mandati,izboriNaziv:this.naziv,rezultat:this.izbori}},setup(o){const f=c(o.grafik),a=c(o.naziv),n=v(()=>({chart:{type:"item"},credits:{enabled:!1},title:{text:a._value},subtitle:{text:"Raspored mandata"},legend:{labelFormat:'{name} <span style="opacity: 0.4">{y}</span>'},series:[{name:"Mandati",keys:["name","y","color","label"],data:f.value,dataLabels:{enabled:!0,format:"{point.label}",style:{textOutline:"3px contrast"}},center:["50%","78%"],size:"150%",startAngle:-100,endAngle:100}]})),i=c(o.grafik2Cat),g=c(o.grafik2),_=v(()=>({chart:{renderTo:"container",type:"column",options3d:{enabled:!0,alpha:15,beta:15,depth:50,viewDistance:25}},credits:{enabled:!1},xAxis:{categories:i.value},yAxis:{title:{enabled:!1,text:"Broj glasova"}},tooltip:{headerFormat:"<b>{point.key}</b><br>",pointFormat:"Glasova: {point.y}"},title:{text:a._value},subtitle:{text:"Grafi\u010Dki prikaz glasova"},legend:{enabled:!1},plotOptions:{column:{depth:25}},series:[{keys:["name","y","color","label"],data:g.value,colorByPoint:!1}]}));return{chartOptions:n,glas:_,onRender:()=>{console.log("Chart rendered")}}}},j={class:"font-semibold text-xl text-gray-800 leading-tight space-x-4"},M={class:"py-12"},G={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},T={class:"flex justify-between w-full p-6"},D={class:"text-xl mr-1"},E={class:"text-xl mr-1"},P={class:"text-xl mr-1"},I={class:"flex p-6 bg-white border-b border-gray-200"},q={class:"ml-12 w-1/2 text-sm"},J={key:0},K=e("h1",{class:"mt-3 font-bold"},"Raspodjela mandata",-1),Q=e("div",{class:"w-1/2"},null,-1);function W(o,f,a,n,i,g){const _=h("Head"),d=h("Link"),b=h("vue-highcharts"),z=h("AuthenticatedLayout");return u(),m(y,null,[s(_,{title:"Prikaz"}),s(z,null,{header:l(()=>[e("h2",j,[s(d,{href:"/cg/2012"},{default:l(()=>[p("2012")]),_:1}),s(d,{href:"/cg/2016"},{default:l(()=>[p("2016")]),_:1}),s(d,{href:"/cg/2020"},{default:l(()=>[p("2020")]),_:1})])]),default:l(()=>[e("div",M,[e("div",G,[e("div",S,[e("div",T,[e("div",null,[e("span",D,"Izbori: "+t(i.izboriNaziv),1)]),e("div",null,[e("span",E,"Broj mandata: "+t(i.ukMandata),1)]),e("div",null,[e("span",P,"Izborni cenzus: "+t(i.cenzus)+"%",1)])]),e("div",I,[e("div",q,[e("p",null,"Vaze\u0107ih listi\u0107a: "+t(a.vazecihListica),1),e("p",null,"Cenzus: "+t(Math.ceil(this.vazecihListica*.03)),1),a.izbori.length!==0?(u(),m("div",J,[K,e("ul",null,[(u(!0),m(y,null,O(a.izbori,(r,k)=>(u(),m("li",{key:k,class:"font-bold",style:R({color:r.boja})},t(r.lista)+" - "+t(r.glasova)+" ("+t((r.glasova/a.vazecihListica*100).toFixed(2))+"%) | mandat: "+t(r.mandata),5))),128))])])):C("",!0)]),Q]),e("div",null,[s(b,{class:"w-full border-gray-300",type:"chart",options:n.glas,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0,onRendered:n.onRender},null,8,["options","onRendered"])]),e("div",null,[s(b,{class:"w-full border-gray-300",type:"chart",options:n.chartOptions,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0,onRendered:n.onRender},null,8,["options","onRendered"])])])])])]),_:1})],64)}const se=F(U,[["render",W]]);export{se as default};

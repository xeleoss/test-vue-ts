(function(e){function t(t){for(var a,s,l=t[0],o=t[1],u=t[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);i&&i(t);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test-vue-ts/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f2c":function(e,t,n){},5980:function(e,t,n){"use strict";n("e48f")},c002:function(e,t,n){"use strict";n("1f2c")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=(n("d3b7"),n("ddb0"),n("b0c0"),Object(a["f"])("h3",null,"Выбранные записи",-1));function c(e,t,n,c,s,l){var o=Object(a["l"])("Table");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(o,{headings:e.headings,values:e.values,"on-sort":e.onSort,"on-select-change":e.onSelectedChange,"value-key":"name"},null,8,["headings","values","on-sort","on-select-change"]),Object(a["f"])("div",null,[r,Object(a["f"])("ul",null,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(e.selectedKeys,(function(t){return Object(a["h"])(),Object(a["c"])("li",{key:t},Object(a["m"])(e.tableValuesForKeys[t].name),1)})),128))])])],64)}n("4e82"),n("4de4"),n("b64b");var s=Object(a["p"])("data-v-a7586362");Object(a["j"])("data-v-a7586362");var l={class:"search-input"},o=Object(a["e"])(" Поиск: "),u={key:0},i={class:"total-entries"};Object(a["i"])();var d=s((function(e,t,n,r,c,s){return Object(a["h"])(),Object(a["c"])("div",null,[Object(a["f"])("label",l,[o,Object(a["o"])(Object(a["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchText=t})},null,512),[[a["n"],e.searchText]])]),Object(a["f"])("table",null,[Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("td",{onclick:e.onSelectAll},[Object(a["f"])("input",{type:"checkbox",checked:e.isSelectAll},null,8,["checked"])],8,["onclick"]),(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(e.headings,(function(t){return Object(a["h"])(),Object(a["c"])("td",{key:t.name,onclick:function(n){return e.onSortByKey(t.name)}},[Object(a["f"])("span",null,Object(a["m"])(t.label),1),e.sort.name===t.name?(Object(a["h"])(),Object(a["c"])("span",u,Object(a["m"])("ask"===e.sort.direction?"↑":"↓"),1)):Object(a["d"])("",!0)],8,["onclick"])})),128))])]),Object(a["f"])("tbody",null,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(e.valuesFromSearch,(function(t){return Object(a["h"])(),Object(a["c"])("tr",{key:t[e.valueKey],onclick:function(){return e.onSelect(t)},"data-selected":e.getChecked(t)},[Object(a["f"])("td",null,[Object(a["f"])("input",{type:"checkbox",checked:e.getChecked(t)},null,8,["checked"])]),(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(e.headings,(function(e){return Object(a["h"])(),Object(a["c"])("td",{key:e.name},Object(a["m"])(t[e.name]),1)})),128))],8,["onclick","data-selected"])})),128))])]),Object(a["f"])("div",i," Показано "+Object(a["m"])(e.valuesFromSearch.length)+" из "+Object(a["m"])(e.values.length)+" записей ",1)])})),m=(n("159b"),n("7db0"),n("caad"),n("2532"),n("25f0"),Object(a["g"])({name:"Table",methods:{onSortByKey:function(e){e!==this.sort.name&&(this.sort.direction=void 0),this.sort={name:e,direction:"desk"===this.sort.direction?"ask":"desk"},this.onSort(this.sort)},onSelect:function(e){this.selected[e[this.valueKey]]=!this.selected[e[this.valueKey]],this.onSelectChange&&this.onSelectChange(this.selected)},onSelectAll:function(){var e=this,t=!this.isSelectAll;this.valuesFromSearch.forEach((function(n){e.selected[n[e.valueKey]]=t})),this.onSelectChange&&this.onSelectChange(this.selected)},getChecked:function(e){return this.selected[e[this.valueKey]]}},props:{values:{type:Array,required:!0},headings:{type:Array,required:!0},onSort:{type:Function,required:!0},valueKey:{type:String,required:!0},onSelectChange:{type:Function}},data:function(){return{sort:{},selected:{},searchText:""}},computed:{isSelectAll:function(){var e=this;return!this.valuesFromSearch.find((function(t){return!e.selected[t[e.valueKey]]}))},valuesFromSearch:function(){var e=this.searchText.toLowerCase();return 0===e.length?this.values:this.values.filter((function(t){return!!t&&Object.keys(t).find((function(n){var a,r=t[n];return null!==(a=null===r||void 0===r?void 0:r.toString().toLowerCase().includes(e))&&void 0!==a?a:""}))}))}}}));n("c002");m.render=d,m.__scopeId="data-v-a7586362";var p=m,h=[{name:"Исаев Елисей Андреевич",department:"Бухгалтерия",state:"Старший бухгалтер"},{name:"Акимова София Ильинична",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Самойлов Владимир Михайлович",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Шульгин Илья Артёмович",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Казаков Владимир Матвеевич",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Панова Екатерина Артёмовна",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Кузнецов Максим Андреевич",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Черепанова Анна Даниэльевна",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Тихомиров Герман Родионович",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Поляков Юрий Дмитриевич",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Захаров Александр Елисеевич",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Елисеева Анастасия Юрьевна",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Громова Валерия Платоновна",department:"Бухгалтерия",state:"Бухгалтер"},{name:"Куприянов Тимофей Арсентьевич",department:"Бухгалтерия",state:"Помощник бухгалтера"},{name:"Шувалов Захар Русланович",department:"Бухгалтерия",state:"Помощник бухгалтера"},{name:"Андреев Даниил Сергеевич",department:"Бухгалтерия",state:"Помощник бухгалтера"},{name:"Федотов Владимир Михайлович",department:"Бухгалтерия",state:"Помощник бухгалтера"},{name:"Ситникова Мария Ивановна",department:"Отдел внедрения",state:"Инженер"},{name:"Иванова Кристина Максимовна",department:"Отдел внедрения",state:"Кризис-менеджер"},{name:"Иванов Николай Григорьевич",department:"Отдел внедрения",state:"Сталевар"},{name:"Блинов Матвей Вадимович",department:"Отдел внедрения",state:"Диетолог"},{name:"Ушакова Екатерина Максимовна",department:"Отдел внедрения",state:"Эколог"},{name:"Алексеева Алиса Андреевна",department:"Отдел внедрения",state:"Ремонтник"},{name:"Титов Денис Маркович",department:"Юридический отдел",state:"Облицовщик"},{name:"Горбунова Ксения Григорьевна",department:"Юридический отдел",state:"Издатель"},{name:"Назаров Даниил Матвеевич",department:"Юридический отдел",state:"Венеролог"},{name:"Третьяков Адам Георгиевич",department:"Юридический отдел",state:"Психотерапевт"},{name:"Федоров Иван Артёмович",department:"Юридический отдел",state:"Микробиолог"},{name:"Колесникова Марина Никитична",department:"Юридический отдел",state:"Брокер"},{name:"Куликов Константин Максимович",department:"Юридический отдел",state:"Оториноларинголог (ЛОР)"},{name:"Кудрявцева Елизавета Константиновна",department:"Одтел продаж",state:"Священнослужитель"},{name:"Андрианов Даниил Фёдорович",department:"Одтел продаж",state:"Нефролог"},{name:"Рудаков Тимур Александрович",department:"Одтел продаж",state:"Ювелир"},{name:"Львов Кирилл Александрович",department:"Одтел продаж",state:"Кинорежиссер"},{name:"Наумова Анна Данииловна",department:"Одтел продаж",state:"Делопроизводитель"},{name:"Колпакова Вероника Александровна",department:"Отдел продаж",state:"Консультант телефона доверия"},{name:"Кожевников Андрей Александрович",department:"Одтел продаж",state:"Водолаз"},{name:"Богданов Артём Максимович",department:"Одтел продаж",state:"Шеф-повар"},{name:"Федоров Иван Андреевич",department:"Одтел продаж",state:"Гинеколог"},{name:"Вишневский Семён Егорович",department:"Одтел продаж",state:"Воздухоплаватель"},{name:"Романов Николай Артёмович",department:"Одтел продаж",state:"Официант"},{name:"Кузьмина Варвара Дмитриевна",department:"Одтел продаж",state:"Фотограф"},{name:"Никифорова Таисия Данииловна",department:"Одтел продаж",state:"Имиджмейкер"},{name:"Лукина Ева Александровна",department:"Одтел продаж",state:"Строитель"},{name:"Панфилова Полина Константиновна",department:"Одтел продаж",state:"Художник по костюму"}],b=[{name:"name",label:"Фио"},{name:"department",label:"Отдел"},{name:"state",label:"Должность"}],f={tableData:h,tableHeadings:b},O=Object(a["g"])({name:"App",components:{Table:p},data:function(){return{headings:f.tableHeadings,values:f.tableData,selected:{},valueKey:"name"}},methods:{onSort:function(e){function t(t,n){return t[e.name]<n[e.name]?-1:t[e.name]>n[e.name]?1:0}e&&e.name&&("ask"===e.direction?this.values=this.values.sort(t).reverse():this.values=this.values.sort(t))},onSelectedChange:function(e){this.selected=e}},computed:{selectedKeys:function(){var e=this;return Object.keys(this.selected).filter((function(t){return e.selected[t]}))},tableValuesForKeys:function(){var e=this;return this.values.reduce((function(t,n){return t[n[e.valueKey]]=n,t}),{})}}});n("5980");O.render=c;var j=O;Object(a["b"])(j).mount("#app")},e48f:function(e,t,n){}});
//# sourceMappingURL=app.156ab477.js.map
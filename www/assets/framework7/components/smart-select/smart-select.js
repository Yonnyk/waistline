(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var a=e.$,r=e.utils,s=(e.getDevice,e.getSupport,e.Class),n=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,r.extend),l=r.id,i=r.nextTick,c=r.deleteProps;function p(e){this.wrapped=e}function u(e){var t,a;function r(t,a){try{var n=e[t](a),o=n.value,l=o instanceof p;Promise.resolve(l?o.wrapped:o).then((function(e){l?r("return"===t?"return":"next",e):s(n.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){s("throw",e)}}function s(e,s){switch(e){case"return":t.resolve({value:s,done:!0});break;case"throw":t.reject(s);break;default:t.resolve({value:s,done:!1})}(t=t.next)?r(t.key,t.arg):a=null}this._invoke=function(e,s){return new Promise((function(n,o){var l={key:e,arg:s,resolve:n,reject:o,next:null};a?a=a.next=l:(t=a=l,r(e,s))}))},"function"!=typeof e.return&&(this.return=void 0)}function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}u.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},u.prototype.next=function(e){return this._invoke("next",e)},u.prototype.throw=function(e){return this._invoke("throw",e)},u.prototype.return=function(e){return this._invoke("return",e)};l=0;var h=function(e){var t,r;function s(t,r){var s;void 0===r&&(r={});var n=v(s=e.call(this,r,[t])||this),i=o({on:{}},t.params.smartSelect);void 0===i.searchbarDisableButton&&(i.searchbarDisableButton="aurora"!==t.theme),n.useModulesParams(i),n.params=o({},i,r),n.app=t;var c=a(n.params.el).eq(0);if(0===c.length)return n||v(s);if(c[0].f7SmartSelect)return c[0].f7SmartSelect||v(s);var p,u=c.find("select").eq(0);if(0===u.length)return n||v(s);n.params.setValueText&&(0===(p=a(n.params.valueEl)).length&&(p=c.find(".item-after")),0===p.length&&(p=a('<div class="item-after"></div>')).insertAfter(c.find(".item-title")));var d=r.url;d||(c.attr("href")&&"#"!==c.attr("href")?d=c.attr("href"):u.attr("name")&&(d=u.attr("name").toLowerCase()+"-select/")),d||(d=n.params.url);var m=u[0].multiple,h=m?"checkbox":"radio",f=l();function b(){n.open()}function g(){var e=n.$selectEl.val();n.$el.trigger("smartselect:change",e),n.emit("local::change smartSelectChange",n,e),n.vl&&n.vl.clearCache(),n.setValueText()}function x(){var e,t,r,s=this,o=s.value,l=[];if("checkbox"===s.type){for(var i=0;i<n.selectEl.options.length;i+=1)(e=n.selectEl.options[i]).value===o&&(e.selected=s.checked),e.selected&&(t=(r=e.dataset?e.dataset.displayAs:a(e).data("display-value-as"))&&void 0!==r?r:e.textContent,l.push(t.trim()));n.maxLength&&n.checkMaxLength()}else(e=n.$selectEl.find('option[value="'+o+'"]')[0])||(e=n.$selectEl.find("option").filter((function(e){return e.value===o}))[0]),l=[t=(r=e.dataset?e.dataset.displayAs:a(e).data("display-as"))&&void 0!==r?r:e.textContent],n.selectEl.value=o;n.$selectEl.trigger("change"),n.params.setValueText&&n.$valueEl.text(n.formatValueText(l)),n.params.closeOnSelect&&"radio"===n.inputType&&n.close()}return o(n,{$el:c,el:c[0],$selectEl:u,selectEl:u[0],$valueEl:p,valueEl:p&&p[0],url:d,multiple:m,inputType:h,id:f,inputName:h+"-"+f,selectName:u.attr("name"),maxLength:u.attr("maxlength")||r.maxLength}),c[0].f7SmartSelect=n,n.attachEvents=function(){c.on("click",b),c.on("change","select",g)},n.detachEvents=function(){c.off("click",b),c.off("change","select",g)},n.attachInputsEvents=function(){n.$containerEl.on("change",'input[type="checkbox"], input[type="radio"]',x)},n.detachInputsEvents=function(){n.$containerEl.off("change",'input[type="checkbox"], input[type="radio"]',x)},n.useModules(),n.init(),n||v(s)}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,m(t,r);var n,p,u,h=s.prototype;return h.setValue=function(e){var t,r,s,n=this,o=e,l=[];if(n.multiple){Array.isArray(o)||(o=[o]);for(var i=0;i<n.selectEl.options.length;i+=1)t=n.selectEl.options[i],o.indexOf(t.value)>=0?t.selected=!0:t.selected=!1,t.selected&&(s=(r=t.dataset?t.dataset.displayAs:a(t).data("display-value-as"))&&void 0!==r?r:t.textContent,l.push(s.trim()))}else(t=n.$selectEl.find('option[value="'+o+'"]')[0])&&(l=[s=(r=t.dataset?t.dataset.displayAs:a(t).data("display-as"))&&void 0!==r?r:t.textContent]),n.selectEl.value=o;return n.params.setValueText&&n.$valueEl.text(n.formatValueText(l)),n.$selectEl.trigger("change"),n},h.unsetValue=function(){var e=this;e.params.setValueText&&e.$valueEl.text(e.formatValueText([])),e.$selectEl.find("option").each((function(e){e.selected=!1,e.checked=!1})),e.$selectEl[0].value=null,e.$containerEl&&e.$containerEl.find('input[name="'+e.inputName+'"][type="checkbox"], input[name="'+e.inputName+'"][type="radio"]').prop("checked",!1),e.$selectEl.trigger("change")},h.getValue=function(){return this.$selectEl.val()},h.checkMaxLength=function(){var e=this,t=e.$containerEl;e.selectEl.selectedOptions.length>=e.maxLength?t.find('input[type="checkbox"]').each((function(e){e.checked?a(e).parents("li").removeClass("disabled"):a(e).parents("li").addClass("disabled")})):t.find(".disabled").removeClass("disabled")},h.formatValueText=function(e){var t=this;return t.params.formatValueText?t.params.formatValueText.call(t,e,t):e.join(", ")},h.setValueText=function(e){var t=this,r=[];void 0!==e?r=Array.isArray(e)?e:[e]:t.$selectEl.find("option").each((function(e){var t=a(e);if(e.selected){var s=e.dataset?e.dataset.displayAs:t.data("display-value-as");s&&void 0!==s?r.push(s):r.push(e.textContent.trim())}})),t.params.setValueText&&t.$valueEl.text(t.formatValueText(r))},h.getItemsData=function(){var e,t=this,r=t.app.theme,s=[];return t.$selectEl.find("option").each((function(n){var o=a(n),l=o.dataset(),i=l.optionImage||t.params.optionImage,c=l.optionIcon||t.params.optionIcon,p="ios"===r&&(l.optionIconIos||t.params.optionIconIos),u="md"===r&&(l.optionIconMd||t.params.optionIconMd),d="aurora"===r&&(l.optionIconAurora||t.params.optionIconAurora),m=i||c||p||u||d,v=l.optionColor,h=l.optionClass||"";o[0].disabled&&(h+=" disabled");var f=o.parent("optgroup")[0],b=f&&f.label,g=!1;f&&f!==e&&(g=!0,e=f,s.push({groupLabel:b,isLabel:g})),s.push({value:o[0].value,text:o[0].textContent.trim(),selected:o[0].selected,groupEl:f,groupLabel:b,image:i,icon:c,iconIos:p,iconMd:u,iconAurora:d,color:v,className:h,disabled:o[0].disabled,id:t.id,hasMedia:m,checkbox:"checkbox"===t.inputType,radio:"radio"===t.inputType,inputName:t.inputName,inputType:t.inputType})})),t.items=s,s},h.renderSearchbar=function(){var e=this;return e.params.renderSearchbar?e.params.renderSearchbar.call(e):$jsx("form",{class:"searchbar"},$jsx("div",{class:"searchbar-inner"},$jsx("div",{class:"searchbar-input-wrap"},$jsx("input",{type:"search",spellcheck:e.params.searchbarSpellcheck||"false",placeholder:e.params.searchbarPlaceholder}),$jsx("i",{class:"searchbar-icon"}),$jsx("span",{class:"input-clear-button"})),e.params.searchbarDisableButton&&$jsx("span",{class:"searchbar-disable-button"},e.params.searchbarDisableText)))},h.renderItem=function(e,t){var a,r,s=this;if(s.params.renderItem)return s.params.renderItem.call(s,e,t);if(e.isLabel)a='<li class="item-divider">'+e.groupLabel+"</li>";else{var n,o=e.selected;if(s.params.virtualList){var l=s.getValue();o=s.multiple?l.indexOf(e.value)>=0:l===e.value,s.multiple&&(n=s.multiple&&!o&&l.length===parseInt(s.maxLength,10))}var i=e.icon,c=e.iconIos,p=e.iconMd,u=e.iconAurora,d=i||c||p||u,m=(void 0===(r=i||c||p||u||"")&&(r=""),r.indexOf(":")>=0?r.split(":")[1]:""),v=function(e){if(void 0===e&&(e=""),e.indexOf(":")>=0){var t=e.split(":")[0];return"f7"===t&&(t="f7-icons"),"material"===t&&(t="material-icons"),t}return e}(i||c||p||u||"");a=$jsx("li",{class:(e.className||"")+(n?" disabled":"")},$jsx("label",{class:"item-"+e.inputType+" item-content"},$jsx("input",{type:e.inputType,name:e.inputName,value:e.value,_checked:o}),$jsx("i",{class:"icon icon-"+e.inputType}),e.hasMedia&&$jsx("div",{class:"item-media"},d&&$jsx("i",{class:"icon "+v},m),e.image&&$jsx("img",{src:e.image})),$jsx("div",{class:"item-inner"},$jsx("div",{class:"item-title"+(e.color?" text-color-"+e.color:"")},e.text))))}return a},h.renderItems=function(){var e=this;return e.params.renderItems?e.params.renderItems.call(e,e.items):"\n      "+e.items.map((function(t,a){return""+e.renderItem(t,a)})).join("")+"\n    "},h.renderPage=function(){var e=this;if(e.params.renderPage)return e.params.renderPage.call(e,e.items);var t=e.params.pageTitle;if(void 0===t){var a=e.$el.find(".item-title");t=a.length?a.text().trim():""}var r=e.params.cssClass;return $jsx("div",{class:"page smart-select-page "+r,"data-name":"smart-select-page","data-select-name":e.selectName},$jsx("div",{class:"navbar "+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")},$jsx("div",{class:"navbar-bg"}),$jsx("div",{class:"navbar-inner sliding "+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")},$jsx("div",{class:"left"},$jsx("a",{class:"link back"},$jsx("i",{class:"icon icon-back"}),$jsx("span",{class:"if-not-md"},e.params.pageBackLinkText))),t&&$jsx("div",{class:"title"},t),e.params.searchbar&&$jsx("div",{class:"subnavbar"},e.renderSearchbar()))),e.params.searchbar&&$jsx("div",{class:"searchbar-backdrop"}),$jsx("div",{class:"page-content"},$jsx("div",{class:"list smart-select-list-"+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))},h.renderPopup=function(){var e=this;if(e.params.renderPopup)return e.params.renderPopup.call(e,e.items);var t=e.params.pageTitle;if(void 0===t){var a=e.$el.find(".item-title");t=a.length?a.text().trim():""}var r=e.params.cssClass||"";return $jsx("div",{class:"popup smart-select-popup "+r+" "+(e.params.popupTabletFullscreen?"popup-tablet-fullscreen":""),"data-select-name":e.selectName},$jsx("div",{class:"view"},$jsx("div",{class:"page smart-select-page "+(e.params.searchbar?"page-with-subnavbar":""),"data-name":"smart-select-page"},$jsx("div",{class:"navbar "+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")},$jsx("div",{class:"navbar-bg"}),$jsx("div",{class:"navbar-inner sliding"},t&&$jsx("div",{class:"title"},t),$jsx("div",{class:"right"},$jsx("a",{class:"link popup-close","data-popup":".smart-select-popup[data-select-name='"+e.selectName+"']"},e.params.popupCloseLinkText)),e.params.searchbar&&$jsx("div",{class:"subnavbar"},e.renderSearchbar()))),e.params.searchbar&&$jsx("div",{class:"searchbar-backdrop"}),$jsx("div",{class:"page-content"},$jsx("div",{class:"list smart-select-list-"+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))))},h.renderSheet=function(){var e=this;if(e.params.renderSheet)return e.params.renderSheet.call(e,e.items);var t=e.params.cssClass;return $jsx("div",{class:"sheet-modal smart-select-sheet "+t,"data-select-name":e.selectName},$jsx("div",{class:"toolbar toolbar-top "+(e.params.toolbarColorTheme?"color-"+e.params.toolbarColorTheme:"")},$jsx("div",{class:"toolbar-inner"},$jsx("div",{class:"left"}),$jsx("div",{class:"right"},$jsx("a",{class:"link sheet-close"},e.params.sheetCloseLinkText)))),$jsx("div",{class:"sheet-modal-inner"},$jsx("div",{class:"page-content"},$jsx("div",{class:"list smart-select-list-"+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items))))))},h.renderPopover=function(){var e=this;if(e.params.renderPopover)return e.params.renderPopover.call(e,e.items);var t=e.params.cssClass;return $jsx("div",{class:"popover smart-select-popover "+t,"data-select-name":e.selectName},$jsx("div",{class:"popover-inner"},$jsx("div",{class:"list smart-select-list-"+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))},h.scrollToSelectedItem=function(){var e=this,t=e.params,a=e.$containerEl;if(!e.opened)return e;if(t.virtualList){var r;e.vl.items.forEach((function(e,t){void 0===r&&e.selected&&(r=t)})),void 0!==r&&e.vl.scrollToItem(r)}else{var s=a.find("input:checked").parents("li");if(!s.length)return e;var n=a.find(".page-content, .popover-inner");if(!n.length)return e;n.scrollTop(s.offset().top-n.offset().top-parseInt(n.css("padding-top"),10))}return e},h.onOpen=function(e,t){var r=this,s=r.app,n=a(t);if(r.$containerEl=n,r.openedIn=e,r.opened=!0,r.params.virtualList&&(r.vl=s.virtualList.create({el:n.find(".virtual-list"),items:r.items,renderItem:r.renderItem.bind(r),height:r.params.virtualListHeight,searchByItem:function(e,t){return!!(t.text&&t.text.toLowerCase().indexOf(e.trim().toLowerCase())>=0)}})),r.params.scrollToSelectedItem&&r.scrollToSelectedItem(),r.params.searchbar){var l=n.find(".searchbar");if("page"===e&&"ios"===s.theme&&(l=a(s.navbar.getElByPage(n)).find(".searchbar")),r.params.appendSearchbarNotFound&&("page"===e||"popup"===e)){var i=null;(i="string"==typeof r.params.appendSearchbarNotFound?a('<div class="block searchbar-not-found">'+r.params.appendSearchbarNotFound+"</div>"):"boolean"==typeof r.params.appendSearchbarNotFound?a('<div class="block searchbar-not-found">Nothing found</div>'):r.params.appendSearchbarNotFound)&&n.find(".page-content").append(i[0])}var c=o({el:l,backdropEl:n.find(".searchbar-backdrop"),searchContainer:".smart-select-list-"+r.id,searchIn:".item-title"},"object"==typeof r.params.searchbar?r.params.searchbar:{});r.searchbar=s.searchbar.create(c)}r.maxLength&&r.checkMaxLength(),r.params.closeOnSelect&&r.$containerEl.find('input[type="radio"][name="'+r.inputName+'"]:checked').parents("label").once("click",(function(){r.close()})),r.attachInputsEvents(),r.$el.trigger("smartselect:open"),r.emit("local::open smartSelectOpen",r)},h.onOpened=function(){var e=this;e.$el.trigger("smartselect:opened"),e.emit("local::opened smartSelectOpened",e)},h.onClose=function(){var e=this;e.destroyed||(e.vl&&e.vl.destroy&&(e.vl.destroy(),e.vl=null,delete e.vl),e.searchbar&&e.searchbar.destroy&&(e.searchbar.destroy(),e.searchbar=null,delete e.searchbar),e.detachInputsEvents(),e.$el.trigger("smartselect:close"),e.emit("local::close smartSelectClose",e))},h.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$containerEl=null,delete e.$containerEl,e.$el.trigger("smartselect:closed"),e.emit("local::closed smartSelectClosed",e))},h.openPage=function(){var e=this;if(e.opened)return e;e.getItemsData();var t=e.renderPage(e.items);return e.view.router.navigate({url:e.url,route:{content:t,path:e.url,on:{pageBeforeIn:function(t,a){e.onOpen("page",a.el)},pageAfterIn:function(t,a){e.onOpened("page",a.el)},pageBeforeOut:function(t,a){e.onClose("page",a.el)},pageAfterOut:function(t,a){e.onClosed("page",a.el)}}}}),e},h.openPopup=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderPopup(e.items),push:e.params.popupPush,swipeToClose:e.params.popupSwipeToClose,on:{popupOpen:function(t){e.onOpen("popup",t.el)},popupOpened:function(t){e.onOpened("popup",t.el)},popupClose:function(t){e.onClose("popup",t.el)},popupClosed:function(t){e.onClosed("popup",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:t}}):e.modal=e.app.popup.create(t).open(),e},h.openSheet=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderSheet(e.items),backdrop:e.params.sheetBackdrop,scrollToEl:e.$el,closeByOutsideClick:!0,push:e.params.sheetPush,swipeToClose:e.params.sheetSwipeToClose,on:{sheetOpen:function(t){e.onOpen("sheet",t.el)},sheetOpened:function(t){e.onOpened("sheet",t.el)},sheetClose:function(t){e.onClose("sheet",t.el)},sheetClosed:function(t){e.onClosed("sheet",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,sheet:t}}):e.modal=e.app.sheet.create(t).open(),e},h.openPopover=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderPopover(e.items),targetEl:e.$el,on:{popoverOpen:function(t){e.onOpen("popover",t.el)},popoverOpened:function(t){e.onOpened("popover",t.el)},popoverClose:function(t){e.onClose("popover",t.el)},popoverClosed:function(t){e.onClosed("popover",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popover:t}}):e.modal=e.app.popover.create(t).open(),e},h.open=function(e){var t=this;if(t.opened)return t;var a=!1;function r(){a=!0}return t.$el&&t.$el.trigger("smartselect:beforeopen",{prevent:r}),t.emit("local::beforeOpen smartSelectBeforeOpen",t,r),a||t["open"+(e||t.params.openIn).split("").map((function(e,t){return 0===t?e.toUpperCase():e})).join("")](),t},h.close=function(){var e=this;return e.opened?(e.params.routableModals&&e.view||"page"===e.openedIn?e.view.router.back():(e.modal.once("modalClosed",(function(){i((function(){e.destroyed||(e.modal.destroy(),delete e.modal)}))})),e.modal.close()),e):e},h.init=function(){this.attachEvents(),this.setValueText()},h.destroy=function(){var e=this;e.emit("local::beforeDestroy smartSelectBeforeDestroy",e),e.$el.trigger("smartselect:beforedestroy"),e.detachEvents(),delete e.$el[0].f7SmartSelect,c(e),e.destroyed=!0},n=s,(p=[{key:"view",get:function(){var e,t=this.params,a=this.$el;if(t.view&&(e=t.view),e||(e=a.parents(".view").length&&a.parents(".view")[0].f7View),!e&&"page"===t.openIn)throw Error("Smart Select requires initialized View");return e}}])&&d(n.prototype,p),u&&d(n,u),s}(s),f={name:"smartSelect",params:{smartSelect:{el:void 0,valueEl:void 0,setValueText:!0,formatValueText:null,openIn:"page",popupPush:!1,popupSwipeToClose:void 0,sheetPush:!1,sheetSwipeToClose:void 0,sheetBackdrop:!1,pageTitle:void 0,pageBackLinkText:"Back",popupCloseLinkText:"Close",popupTabletFullscreen:!1,sheetCloseLinkText:"Done",searchbar:!1,searchbarPlaceholder:"Search",searchbarDisableText:"Cancel",searchbarDisableButton:void 0,searchbarSpellcheck:!1,closeOnSelect:!1,virtualList:!1,virtualListHeight:void 0,scrollToSelectedItem:!1,formColorTheme:void 0,navbarColorTheme:void 0,routableModals:!1,url:"select/",cssClass:"",renderPage:void 0,renderPopup:void 0,renderSheet:void 0,renderPopover:void 0,renderItems:void 0,renderItem:void 0,renderSearchbar:void 0}},static:{SmartSelect:h},create:function(){var e=this;e.smartSelect=o(n({defaultSelector:".smart-select",constructor:h,app:e,domProp:"f7SmartSelect"}),{open:function(t){var a=e.smartSelect.get(t);if(a&&a.open)return a.open()},close:function(t){var a=e.smartSelect.get(t);if(a&&a.close)return a.close()}})},on:{tabMounted:function(e){var t=this;a(e).find(".smart-select-init").each((function(e){t.smartSelect.create(o({el:e},a(e).dataset()))}))},tabBeforeRemove:function(e){a(e).find(".smart-select-init").each((function(e){e.f7SmartSelect&&e.f7SmartSelect.destroy&&e.f7SmartSelect.destroy()}))},pageInit:function(e){var t=this;e.$el.find(".smart-select-init").each((function(e){t.smartSelect.create(o({el:e},a(e).dataset()))}))},pageBeforeRemove:function(e){e.$el.find(".smart-select-init").each((function(e){e.f7SmartSelect&&e.f7SmartSelect.destroy&&e.f7SmartSelect.destroy()}))}},clicks:{".smart-select":function(e,t){e[0].f7SmartSelect||this.smartSelect.create(o({el:e},t)).open()}},vnode:{"smart-select-init":{insert:function(e){var t=e.elm;this.smartSelect.create(o({el:t},a(t).dataset()))},destroy:function(e){var t=e.elm;t.f7SmartSelect&&t.f7SmartSelect.destroy&&t.f7SmartSelect.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[f.name])return;e.use(f),e.instance&&(e.instance.useModuleParams(f,e.instance.params),e.instance.useModule(f))}return f}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))

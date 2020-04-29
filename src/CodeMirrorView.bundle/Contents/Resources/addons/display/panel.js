'use strict';(function(g){"object"==typeof exports&&"object"==typeof module?g(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],g):g(CodeMirror)})(function(g){function f(b,a,c,d){this.cm=b;this.node=a;this.options=c;this.height=d;this.cleared=!1}function k(b){var a=b.getWrapperElement(),c=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,d=parseInt(c.height),e=b.state.panels={setHeight:a.style.height,panels:[],wrapper:document.createElement("div")};
a.parentNode.insertBefore(e.wrapper,a);c=b.hasFocus();e.wrapper.appendChild(a);c&&b.focus();b._setSize=b.setSize;null!=d&&(b.setSize=function(a,c){c||(c=e.wrapper.offsetHeight);e.setHeight=c;if("number"!=typeof c){var f=/^(\d+\.?\d*)px$/.exec(c);f?c=Number(f[1]):(e.wrapper.style.height=c,c=e.wrapper.offsetHeight)}f=c-e.panels.map(function(a){return a.node.getBoundingClientRect().height}).reduce(function(a,b){return a+b},0);b._setSize(a,f);d=c})}function h(b,a){for(a=a.nextSibling;a;a=a.nextSibling)if(a==
b.getWrapperElement())return!0;return!1}g.defineExtension("addPanel",function(b,a){a=a||{};this.state.panels||k(this);var c=this.state.panels,d=c.wrapper,e=this.getWrapperElement(),g=a.replace instanceof f&&!a.replace.cleared;a.after instanceof f&&!a.after.cleared?d.insertBefore(b,a.before.node.nextSibling):a.before instanceof f&&!a.before.cleared?d.insertBefore(b,a.before.node):g?(d.insertBefore(b,a.replace.node),a.replace.clear(!0)):"bottom"==a.position?d.appendChild(b):"before-bottom"==a.position?
d.insertBefore(b,e.nextSibling):"after-top"==a.position?d.insertBefore(b,e):d.insertBefore(b,d.firstChild);d=a&&a.height||b.offsetHeight;e=new f(this,b,a,d);c.panels.push(e);this.setSize();a.stable&&h(this,b)&&this.scrollTo(null,this.getScrollInfo().top+d);return e});f.prototype.clear=function(b){if(!this.cleared){this.cleared=!0;var a=this.cm.state.panels;a.panels.splice(a.panels.indexOf(this),1);this.cm.setSize();this.options.stable&&h(this.cm,this.node)&&this.cm.scrollTo(null,this.cm.getScrollInfo().top-
this.height);a.wrapper.removeChild(this.node);if(0==a.panels.length&&!b){b=this.cm;a=b.state.panels;b.state.panels=null;var c=b.getWrapperElement();a.wrapper.parentNode.replaceChild(c,a.wrapper);c.style.height=a.setHeight;b.setSize=b._setSize;b.setSize()}}};f.prototype.changed=function(){this.height=this.node.getBoundingClientRect().height;this.cm.setSize()}});

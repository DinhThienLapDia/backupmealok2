Array.prototype.indexOf||(Array.prototype.indexOf=function(r){"use strict";if(null==this)throw new TypeError;var t=Object(this),e=t.length>>>0;if(0===e)return-1;var o=0;if(arguments.length>1&&(o=Number(arguments[1]),o!=o?o=0:0!=o&&o!=1/0&&o!=-(1/0)&&(o=(o>0||-1)*Math.floor(Math.abs(o)))),o>=e)return-1;for(var n=o>=0?o:Math.max(e-Math.abs(o),0);e>n;n++)if(n in t&&t[n]===r)return n;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(r,t){var e,o;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),i=n.length>>>0;if("[object Function]"!=={}.toString.call(r))throw new TypeError(r+" is not a function");for(t&&(e=t),o=0;i>o;){var a;Object.prototype.hasOwnProperty.call(n,o)&&(a=n[o],r.call(e,a,o,n)),o++}}),Array.prototype.some||(Array.prototype.some=function(r){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(var o=arguments.length>=2?arguments[1]:void 0,n=0;e>n;n++)if(n in t&&r.call(o,t[n],n,t))return!0;return!1});
! function(root, factory) {
	"object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.badbrowser = factory() : root.badbrowser = factory()
}(this, function() {
	return function(modules) {
		function __webpack_require__(moduleId) {
			if(installedModules[moduleId]) return installedModules[moduleId].exports;
			var module = installedModules[moduleId] = {
				i: moduleId,
				l: !1,
				exports: {}
			};
			return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
		}
		var installedModules = {};
		return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
			__webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
				configurable: !1,
				enumerable: !0,
				get: getter
			})
		}, __webpack_require__.n = function(module) {
			var getter = module && module.__esModule ? function() {
				return module.default
			} : function() {
				return module
			};
			return __webpack_require__.d(getter, "a", getter), getter
		}, __webpack_require__.o = function(object, property) {
			return Object.prototype.hasOwnProperty.call(object, property)
		}, __webpack_require__.p = "/", __webpack_require__(__webpack_require__.s = 0)
	}([function(module, exports, __webpack_require__) {
		__webpack_require__(1), module.exports = __webpack_require__(3)
	}, function(module, exports, __webpack_require__) {
		var files = __webpack_require__(2);
		files.keys().forEach(files)
	}, function(module, exports) {
		function webpackEmptyContext(req) {
			throw new Error("Cannot find module '" + req + "'.")
		}
		webpackEmptyContext.keys = function() {
			return []
		}, webpackEmptyContext.resolve = webpackEmptyContext, module.exports = webpackEmptyContext, webpackEmptyContext.id = 2
	}, function(module, exports, __webpack_require__) {
		"use strict";
		__webpack_require__(4);
		var _badbrowser = __webpack_require__(6),
			_badbrowser2 = function(obj) {
				return obj && obj.__esModule ? obj : {
					default: obj
				}
			}(_badbrowser);
		module.exports = _badbrowser2.default
	}, function(module, exports, __webpack_require__) {
		"use strict";
		__webpack_require__(5)
	}, function(module, exports) {}, function(module, exports, __webpack_require__) {
		"use strict";

		function _defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {
				value: value,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : obj[key] = value, obj
		}

		function _classCallCheck(instance, Constructor) {
			if(!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function extend(extended, options) {
			for(var property in options) try {
				options[property].constructor == Object ? extended[property] = extend(extended[property], options[property]) : extended[property] = options[property]
			} catch(ex) {
				extended[property] = options[property]
			}
			return extended
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		});
		var _slicedToArray = function() {
				function sliceIterator(arr, i) {
					var _arr = [],
						_n = !0,
						_d = !1,
						_e = void 0;
					try {
						for(var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
					} catch(err) {
						_d = !0, _e = err
					} finally {
						try {
							!_n && _i.return && _i.return()
						} finally {
							if(_d) throw _e
						}
					}
					return _arr
				}
				return function(arr, i) {
					if(Array.isArray(arr)) return arr;
					if(Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			_createClass = function() {
				function defineProperties(target, props) {
					for(var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
				}
			}(),
			_bowser = __webpack_require__(7),
			_bowser2 = function(obj) {
				return obj && obj.__esModule ? obj : {
					default: obj
				}
			}(_bowser),
			BadBrowser = function() {
				function BadBrowser() {
					var _this2 = this,
						_ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						userAgent = _ref.userAgent,
						_ref$supported = _ref.supported,
						supported = void 0 === _ref$supported ? {} : _ref$supported,
						_ref$unsupported = _ref.unsupported,
						unsupported = void 0 === _ref$unsupported ? {} : _ref$unsupported,
						_ref$ignoreChoice = _ref.ignoreChoice,
						ignoreChoice = void 0 !== _ref$ignoreChoice && _ref$ignoreChoice,
						_ref$fullscreen = _ref.fullscreen,
						fullscreen = void 0 === _ref$fullscreen || _ref$fullscreen,
						_ref$logo = _ref.logo,
						logo = void 0 !== _ref$logo && _ref$logo,
						_ref$path = _ref.path,
						path = void 0 !== _ref$path && _ref$path;
					if(_classCallCheck(this, BadBrowser), this._userAgent = userAgent || navigator.userAgent, this._bowser = _bowser2.default, this.detectedBrowser = _bowser2.default._detect(this._userAgent), this.settings = extend({
							template: null,
							path: !1,
							fullscreen: !0,
							ignoreChoice: !1,
							logo: !1,
							supported: {
								chrome: "42",
								firefox: "38",
								msie: "9",
								msedge: "12",
								opera: "26",
								safari: "6",
								yandexbrowser: "15",
								safari_mobile: "7",
								android: "4",
								mobile: !0
							}
						}, {
							supported: supported,
							unsupported: unsupported,
							ignoreChoice: ignoreChoice,
							fullscreen: fullscreen,
							logo: logo,
							path: path
						}), this.defaultTemplate = '\n      <img class="badbrowser__logo" src=""/>\n      <h1>您使用的浏览器版本过低！</h1>\n      <h3 class="badbrowser-user-browser"></h3>\n      <p>您可以继续浏览器本网站，但是不保证能够正确执行所有的功能。</p>\n   <p>你可以根据下面的链接来升级您的浏览器</p>\n      <p>\n        <a class="oldbrowser__browserLink" title="下载 Chrome浏览器" style="background-position: 0px 0px;" href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank"></a>\n        <a class="oldbrowser__browserLink" title="下载 Firefox浏览器" style="background-position: -60px 0px;" href="http://www.firefox.com.cn/" target="_blank"></a>\n        <a class="oldbrowser__browserLink" title="下载Opera浏览器" style="background-position: -120px 0px;" href="http://www.opera.com/download" target="_blank"></a>\n        <a class="oldbrowser__browserLink" title="下载Safari浏览器" style="background-position: -180px 0px;" href="https://support.apple.com/zh_CN/downloads/safari" target="_blank"></a>\n        <a class="oldbrowser__browserLink" title="下载IE浏览器" style="background-position: -240px 0px;" href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank"></a>\n      </p>\n      <a href="javascript:;" class="badbrowser-close">关闭</a>\n    ', this.settings.unsupported)
						for(var key in this.settings.unsupported) "string" == typeof this.settings.unsupported[key] || "number" == typeof this.settings.unsupported[key] ? this.settings.supported[key] = (parseInt(this.settings.unsupported[key]) + 1).toString() : this.settings.supported[key] = !this.settings.unsupported[key];
					this.check() || (this.settings.path ? ("function" == typeof this.settings.path ? path = this.settings.path() : "string" == typeof this.settings.path && (path = this.settings.path), this.getTemplate(path, function(text) {
						_this2.settings.template = text || _this2.defaultTemplate, _this2.toggleWarning()
					})) : (this.settings.template = this.defaultTemplate, this.toggleWarning()))
				}
				return _createClass(BadBrowser, [{
					key: "check",
					value: function() {
						if(this.detectedBrowser.mobile && !this.settings.supported.mobile) return !1;
						var bowserMinVersions = _defineProperty({}, this.currentFlag.replace("_mobile", ""), this.minSupportVersion),
							isSupported = !1;
						try {
							isSupported = this._bowser.check(bowserMinVersions, this.userAgent)
						} catch(e) {
							isSupported = !1
						}
						return isSupported
					}
				}, {
					key: "toggleWarning",
					value: function() {
						if(!this.getCookie("badbrowser_pass")) {
							var warningHelper = void 0,
								warningContent = void 0,
								body = document.getElementsByTagName("body")[0],
								warning = body.querySelectorAll(".badbrowser"),
								_this = this;
							if(0 !== warning.length) body.removeChild(warning[0]), body.style.overflow = this._defaultBodyOverflow;
							else {
								this._defaultBodyOverflow = body.style.overflow, body.style.overflow = "hidden", warning = document.createElement("div"), warning.className = "badbrowser", this.settings.fullscreen || (warning.className += " badbrowser_modal", warning.addEventListener ? warning.addEventListener("click", function(e) {
									_this.closeWarning(e, this)
								}) : warning.attachEvent("onclick", function(e) {
									_this.closeWarning(e, this)
								})), warningHelper = document.createElement("div"), warningHelper.className = "badbrowser__helper", warningContent = document.createElement("div"), warningContent.className = "badbrowser__content", warning.appendChild(warningHelper), warning.appendChild(warningContent), warningContent.innerHTML = this.settings.template;
								for(var logos = warning.querySelectorAll(".badbrowser__logo"), i = logos.length - 1; i >= 0; i--) this.settings.logo ? logos[i].src = this.settings.logo : logos[i].parentNode.removeChild(logos[i]);
								this.showCurrentVersion(warningContent);
								for(var closeBtns = warning.querySelectorAll(".badbrowser-close"), _i = closeBtns.length - 1; _i >= 0; _i--) {
									var close = closeBtns[_i];
									close && close.addEventListener ? close.addEventListener("click", function(e) {
										_this.closeWarning(e, this)
									}) : close && close.attachEvent && close.attachEvent("onclick", function(e) {
										_this.closeWarning(e, this)
									})
								}
								body.appendChild(warning)
							}
						}
					}
				}, {
					key: "closeWarning",
					value: function(event, _this) {
						if(event.target === _this) {
							var expireDate = new Date;
							expireDate.setTime(expireDate.getTime() + 2592e6), this.toggleWarning(), document.cookie = "badbrowser_pass=true;expires=" + expireDate.toUTCString()
						}
					}
				}, {
					key: "showCurrentVersion",
					value: function(element) {
						var browserEl = element.querySelector(".badbrowser-user-browser");
						browserEl && (browserEl.innerHTML = '当前版本：' + this.name + " " + this.version)
					}
				}, {
					key: "getCookie",
					value: function(name) {
						if(!this.settings.ignoreChoice) {
							var value = "; " + document.cookie,
								parts = value.split("; " + name + "=");
							return 2 == parts.length ? parts.pop().split(";").shift() : void 0
						}
					}
				}, {
					key: "getXmlHttp",
					value: function() {
						var xmlhttp = void 0;
						try {
							xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
						} catch(e) {
							try {
								xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
							} catch(err) {
								xmlhttp = !1
							}
						}
						return xmlhttp || "undefined" == typeof XMLHttpRequest || (xmlhttp = new XMLHttpRequest), xmlhttp
					}
				}, {
					key: "getTemplate",
					value: function(path, callback) {
						if(!path) return void callback(null);
						var request = this.getXmlHttp();
						request && (request.onreadystatechange = function() {
							4 == request.readyState && callback(200 == request.status ? request.responseText : null)
						}, request.open("GET", path, !0), request.send(null))
					}
				}, {
					key: "userAgent",
					get: function() {
						return this._userAgent
					}
				}, {
					key: "name",
					get: function() {
						return this.detectedBrowser.name + (this.detectedBrowser.mobile ? " Mobile" : "")
					}
				}, {
					key: "version",
					get: function() {
						return parseFloat(this.detectedBrowser.version)
					}
				}, {
					key: "minSupportVersion",
					get: function() {
						return this.minVersions[this.currentFlag]
					}
				}, {
					key: "currentFlag",
					get: function() {
						if(!this._currentFlag) {
							var flags = function(o1, o2) {
									return Object.keys(o1).filter({}.hasOwnProperty.bind(o2))
								}(this.settings.supported, this.detectedBrowser),
								_flags = _slicedToArray(flags, 2),
								browser = _flags[0],
								isMobile = _flags[1],
								mobileBrowser = browser + "_" + isMobile;
							isMobile && this.settings.supported[mobileBrowser] ? this._currentFlag = mobileBrowser : this._currentFlag = browser
						}
						return this._currentFlag
					}
				}, {
					key: "minVersions",
					get: function() {
						return _defineProperty({}, this.currentFlag, this.settings.supported[this.currentFlag])
					}
				}], [{
					key: "init",
					value: function(options) {
						return new BadBrowser(options)
					}
				}]), BadBrowser
			}();
		exports.default = BadBrowser
	}, function(module, exports, __webpack_require__) {
		! function(root, name, definition) {
			void 0 !== module && module.exports ? module.exports = definition() : __webpack_require__(8)("bowser", definition)
		}(0, 0, function() {
			function detect(ua) {
				function getFirstMatch(regex) {
					var match = ua.match(regex);
					return match && match.length > 1 && match[1] || ""
				}
				var result, iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
					likeAndroid = /like android/i.test(ua),
					android = !likeAndroid && /android/i.test(ua),
					nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
					nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
					chromeos = /CrOS/.test(ua),
					silk = /silk/i.test(ua),
					sailfish = /sailfish/i.test(ua),
					tizen = /tizen/i.test(ua),
					webos = /(web|hpw)os/i.test(ua),
					windowsphone = /windows phone/i.test(ua),
					windows = (/SamsungBrowser/i.test(ua), !windowsphone && /windows/i.test(ua)),
					mac = !iosdevice && !silk && /macintosh/i.test(ua),
					linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
					edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
					versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
					tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua),
					mobile = !tablet && /[^-]mobi/i.test(ua),
					xbox = /xbox/i.test(ua);
				/opera/i.test(ua) ? result = {
					name: "Opera",
					opera: t,
					version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
				} : /opr|opios/i.test(ua) ? result = {
					name: "Opera",
					opera: t,
					version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
				} : /SamsungBrowser/i.test(ua) ? result = {
					name: "Samsung Internet for Android",
					samsungBrowser: t,
					version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
				} : /coast/i.test(ua) ? result = {
					name: "Opera Coast",
					coast: t,
					version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
				} : /yabrowser/i.test(ua) ? result = {
					name: "Yandex Browser",
					yandexbrowser: t,
					version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
				} : /ucbrowser/i.test(ua) ? result = {
					name: "UC Browser",
					ucbrowser: t,
					version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
				} : /mxios/i.test(ua) ? result = {
					name: "Maxthon",
					maxthon: t,
					version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
				} : /epiphany/i.test(ua) ? result = {
					name: "Epiphany",
					epiphany: t,
					version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
				} : /puffin/i.test(ua) ? result = {
					name: "Puffin",
					puffin: t,
					version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
				} : /sleipnir/i.test(ua) ? result = {
					name: "Sleipnir",
					sleipnir: t,
					version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
				} : /k-meleon/i.test(ua) ? result = {
					name: "K-Meleon",
					kMeleon: t,
					version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
				} : windowsphone ? (result = {
					name: "Windows Phone",
					windowsphone: t
				}, edgeVersion ? (result.msedge = t, result.version = edgeVersion) : (result.msie = t, result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(ua) ? result = {
					name: "Internet Explorer",
					msie: t,
					version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
				} : chromeos ? result = {
					name: "Chrome",
					chromeos: t,
					chromeBook: t,
					chrome: t,
					version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
				} : /chrome.+? edge/i.test(ua) ? result = {
					name: "Microsoft Edge",
					msedge: t,
					version: edgeVersion
				} : /vivaldi/i.test(ua) ? result = {
					name: "Vivaldi",
					vivaldi: t,
					version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
				} : sailfish ? result = {
					name: "Sailfish",
					sailfish: t,
					version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
				} : /seamonkey\//i.test(ua) ? result = {
					name: "SeaMonkey",
					seamonkey: t,
					version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
				} : /firefox|iceweasel|fxios/i.test(ua) ? (result = {
					name: "Firefox",
					firefox: t,
					version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
				}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua) && (result.firefoxos = t)) : silk ? result = {
					name: "Amazon Silk",
					silk: t,
					version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
				} : /phantom/i.test(ua) ? result = {
					name: "PhantomJS",
					phantom: t,
					version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
				} : /slimerjs/i.test(ua) ? result = {
					name: "SlimerJS",
					slimer: t,
					version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
				} : /blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua) ? result = {
					name: "BlackBerry",
					blackberry: t,
					version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
				} : webos ? (result = {
					name: "WebOS",
					webos: t,
					version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
				}, /touchpad\//i.test(ua) && (result.touchpad = t)) : /bada/i.test(ua) ? result = {
					name: "Bada",
					bada: t,
					version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
				} : tizen ? result = {
					name: "Tizen",
					tizen: t,
					version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
				} : /qupzilla/i.test(ua) ? result = {
					name: "QupZilla",
					qupzilla: t,
					version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
				} : /chromium/i.test(ua) ? result = {
					name: "Chromium",
					chromium: t,
					version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
				} : /chrome|crios|crmo/i.test(ua) ? result = {
					name: "Chrome",
					chrome: t,
					version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
				} : android ? result = {
					name: "Android",
					version: versionIdentifier
				} : /safari|applewebkit/i.test(ua) ? (result = {
					name: "Safari",
					safari: t
				}, versionIdentifier && (result.version = versionIdentifier)) : iosdevice ? (result = {
					name: "iphone" == iosdevice ? "iPhone" : "ipad" == iosdevice ? "iPad" : "iPod"
				}, versionIdentifier && (result.version = versionIdentifier)) : result = /googlebot/i.test(ua) ? {
					name: "Googlebot",
					googlebot: t,
					version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
				} : {
					name: getFirstMatch(/^(.*)\/(.*) /),
					version: function(regex) {
						var match = ua.match(regex);
						return match && match.length > 1 && match[2] || ""
					}(/^(.*)\/(.*) /)
				}, !result.msedge && /(apple)?webkit/i.test(ua) ? (/(apple)?webkit\/537\.36/i.test(ua) ? (result.name = result.name || "Blink", result.blink = t) : (result.name = result.name || "Webkit", result.webkit = t), !result.version && versionIdentifier && (result.version = versionIdentifier)) : !result.opera && /gecko\//i.test(ua) && (result.name = result.name || "Gecko", result.gecko = t, result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)), result.windowsphone || result.msedge || !android && !result.silk ? result.windowsphone || result.msedge || !iosdevice ? mac ? result.mac = t : xbox ? result.xbox = t : windows ? result.windows = t : linux && (result.linux = t) : (result[iosdevice] = t, result.ios = t) : result.android = t;
				var osVersion = "";
				result.windows ? osVersion = function(s) {
					switch(s) {
						case "NT":
							return "NT";
						case "XP":
							return "XP";
						case "NT 5.0":
							return "2000";
						case "NT 5.1":
							return "XP";
						case "NT 5.2":
							return "2003";
						case "NT 6.0":
							return "Vista";
						case "NT 6.1":
							return "7";
						case "NT 6.2":
							return "8";
						case "NT 6.3":
							return "8.1";
						case "NT 10.0":
							return "10";
						default:
							return
					}
				}(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : result.windowsphone ? osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : result.mac ? (osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i), osVersion = osVersion.replace(/[_\s]/g, ".")) : iosdevice ? (osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i), osVersion = osVersion.replace(/[_\s]/g, ".")) : android ? osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i) : result.webos ? osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : result.blackberry ? osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : result.bada ? osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i) : result.tizen && (osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i)), osVersion && (result.osversion = osVersion);
				var osMajorVersion = !result.windows && osVersion.split(".")[0];
				return tablet || nexusTablet || "ipad" == iosdevice || android && (3 == osMajorVersion || osMajorVersion >= 4 && !mobile) || result.silk ? result.tablet = t : (mobile || "iphone" == iosdevice || "ipod" == iosdevice || android || nexusMobile || result.blackberry || result.webos || result.bada) && (result.mobile = t), result.msedge || result.msie && result.version >= 10 || result.yandexbrowser && result.version >= 15 || result.vivaldi && result.version >= 1 || result.chrome && result.version >= 20 || result.samsungBrowser && result.version >= 4 || result.firefox && result.version >= 20 || result.safari && result.version >= 6 || result.opera && result.version >= 10 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 || result.blackberry && result.version >= 10.1 || result.chromium && result.version >= 20 ? result.a = t : result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20 || result.safari && result.version < 6 || result.opera && result.version < 10 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 || result.chromium && result.version < 20 ? result.c = t : result.x = t, result
			}

			function getVersionPrecision(version) {
				return version.split(".").length
			}

			function map(arr, iterator) {
				var i, result = [];
				if(Array.prototype.map) return Array.prototype.map.call(arr, iterator);
				for(i = 0; i < arr.length; i++) result.push(iterator(arr[i]));
				return result
			}

			function compareVersions(versions) {
				for(var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1])), chunks = map(versions, function(version) {
						var delta = precision - getVersionPrecision(version);
						return version += new Array(delta + 1).join(".0"), map(version.split("."), function(chunk) {
							return new Array(20 - chunk.length).join("0") + chunk
						}).reverse()
					}); --precision >= 0;) {
					if(chunks[0][precision] > chunks[1][precision]) return 1;
					if(chunks[0][precision] !== chunks[1][precision]) return -1;
					if(0 === precision) return 0
				}
			}

			function isUnsupportedBrowser(minVersions, strictMode, ua) {
				var _bowser = bowser;
				"string" == typeof strictMode && (ua = strictMode, strictMode = void 0), void 0 === strictMode && (strictMode = !1), ua && (_bowser = detect(ua));
				var version = "" + _bowser.version;
				for(var browser in minVersions)
					if(minVersions.hasOwnProperty(browser) && _bowser[browser]) {
						if("string" != typeof minVersions[browser]) throw new Error("Browser version in the minVersion map should be a string: " + browser + ": " + String(minVersions));
						return compareVersions([version, minVersions[browser]]) < 0
					}
				return strictMode
			}

			function check(minVersions, strictMode, ua) {
				return !isUnsupportedBrowser(minVersions, strictMode, ua)
			}
			var t = !0,
				bowser = detect("undefined" != typeof navigator ? navigator.userAgent || "" : "");
			return bowser.test = function(browserList) {
				for(var i = 0; i < browserList.length; ++i) {
					var browserItem = browserList[i];
					if("string" == typeof browserItem && browserItem in bowser) return !0
				}
				return !1
			}, bowser.isUnsupportedBrowser = isUnsupportedBrowser, bowser.compareVersions = compareVersions, bowser.check = check, bowser._detect = detect, bowser
		})
	}, function(module, exports) {
		module.exports = function() {
			throw new Error("define cannot be used indirect")
		}
	}])
});
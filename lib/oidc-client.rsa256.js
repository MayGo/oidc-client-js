(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

exports.default = {
    Version: _version.Version,
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
    function AccessTokenEvents() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

        _classCallCheck(this, AccessTokenEvents);

        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        this._accessTokenExpiring = accessTokenExpiringTimer;
        this._accessTokenExpired = accessTokenExpiredTimer;
    }

    AccessTokenEvents.prototype.load = function load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            var duration = container.expires_in;
            _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

            if (duration > 0) {
                // only register expiring if we still have time
                var expiring = duration - this._accessTokenExpiringNotificationTime;
                if (expiring <= 0) {
                    expiring = 1;
                }

                _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
                this._accessTokenExpiring.init(expiring);
            } else {
                _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
                this._accessTokenExpiring.cancel();
            }

            // if it's negative, it will still fire
            var expired = duration + 1;
            _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
            this._accessTokenExpired.init(expired);
        } else {
            this._accessTokenExpiring.cancel();
            this._accessTokenExpired.cancel();
        }
    };

    AccessTokenEvents.prototype.unload = function unload() {
        _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
        this._accessTokenExpiring.cancel();
        this._accessTokenExpired.cancel();
    };

    AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
        this._accessTokenExpiring.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
        this._accessTokenExpiring.removeHandler(cb);
    };

    AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
        this._accessTokenExpired.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
        this._accessTokenExpired.removeHandler(cb);
    };

    return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
    function CheckSessionIFrame(callback, client_id, url, interval) {
        var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        _classCallCheck(this, CheckSessionIFrame);

        this._callback = callback;
        this._client_id = client_id;
        this._url = url;
        this._interval = interval || DefaultInterval;
        this._stopOnError = stopOnError;

        var idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        this._frame.src = url;
    }

    CheckSessionIFrame.prototype.load = function load() {
        var _this = this;

        return new Promise(function (resolve) {
            _this._frame.onload = function () {
                resolve();
            };

            window.document.body.appendChild(_this._frame);
            _this._boundMessageEvent = _this._message.bind(_this);
            window.addEventListener("message", _this._boundMessageEvent, false);
        });
    };

    CheckSessionIFrame.prototype._message = function _message(e) {
        if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
            if (e.data === "error") {
                _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
                if (this._stopOnError) {
                    this.stop();
                }
            } else if (e.data === "changed") {
                _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
                this.stop();
                this._callback();
            } else {
                _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
            }
        }
    };

    CheckSessionIFrame.prototype.start = function start(session_state) {
        var _this2 = this;

        if (this._session_state !== session_state) {
            _Log.Log.debug("CheckSessionIFrame.start");

            this.stop();

            this._session_state = session_state;

            var send = function send() {
                _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
            };

            // trigger now
            send();

            // and setup timer
            this._timer = window.setInterval(send, this._interval);
        }
    };

    CheckSessionIFrame.prototype.stop = function stop() {
        this._session_state = null;

        if (this._timer) {
            _Log.Log.debug("CheckSessionIFrame.stop");

            window.clearInterval(this._timer);
            this._timer = null;
        }
    };

    return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
    function CordovaIFrameNavigator() {
        _classCallCheck(this, CordovaIFrameNavigator);
    }

    CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
        params.popupWindowFeatures = 'hidden=yes';
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
    function CordovaPopupNavigator() {
        _classCallCheck(this, CordovaPopupNavigator);
    }

    CordovaPopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
    function CordovaPopupWindow(params) {
        var _this = this;

        _classCallCheck(this, CordovaPopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this.features = params.popupWindowFeatures || DefaultPopupFeatures;
        this.target = params.popupWindowTarget || DefaultPopupTarget;

        this.redirect_uri = params.startUrl;
        _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
    }

    CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
            return cordovaMetadata.hasOwnProperty(name);
        });
    };

    CordovaPopupWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            if (!window.cordova) {
                return this._error("cordova is undefined");
            }

            var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
            if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
                return this._error("InAppBrowser plugin not found");
            }
            this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
            if (this._popup) {
                _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

                this._exitCallbackEvent = this._exitCallback.bind(this);
                this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

                this._popup.addEventListener("exit", this._exitCallbackEvent, false);
                this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
            } else {
                this._error("Error opening popup window");
            }
        }
        return this.promise;
    };

    CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
        if (event.url.indexOf(this.redirect_uri) === 0) {
            this._success({ url: event.url });
        }
    };

    CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
        this._error(message);
    };

    CordovaPopupWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
        this._resolve(data);
    };

    CordovaPopupWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    CordovaPopupWindow.prototype.close = function close() {
        this._cleanup();
    };

    CordovaPopupWindow.prototype._cleanup = function _cleanup() {
        if (this._popup) {
            _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
            this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
            this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
            this._popup.close();
        }
        this._popup = null;
    };

    _createClass(CordovaPopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
    _inherits(ErrorResponse, _Error);

    function ErrorResponse() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            error = _ref.error,
            error_description = _ref.error_description,
            error_uri = _ref.error_uri,
            state = _ref.state,
            session_state = _ref.session_state;

        _classCallCheck(this, ErrorResponse);

        if (!error) {
            _Log.Log.error("No error passed to ErrorResponse");
            throw new Error("error");
        }

        var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

        _this.name = "ErrorResponse";

        _this.error = error;
        _this.error_description = error_description;
        _this.error_uri = error_uri;

        _this.state = state;
        _this.session_state = session_state;
        return _this;
    }

    return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
    function Event(name) {
        _classCallCheck(this, Event);

        this._name = name;
        this._callbacks = [];
    }

    Event.prototype.addHandler = function addHandler(cb) {
        this._callbacks.push(cb);
    };

    Event.prototype.removeHandler = function removeHandler(cb) {
        var idx = this._callbacks.findIndex(function (item) {
            return item === cb;
        });
        if (idx >= 0) {
            this._callbacks.splice(idx, 1);
        }
    };

    Event.prototype.raise = function raise() {
        _Log.Log.debug("Event: Raising event: " + this._name);
        for (var i = 0; i < this._callbacks.length; i++) {
            var _callbacks;

            (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
        }
    };

    return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
    setInterval: function (_setInterval) {
        function setInterval(_x, _x2) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (cb, duration) {
        return setInterval(cb, duration);
    }),
    clearInterval: function (_clearInterval) {
        function clearInterval(_x3) {
            return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
            return _clearInterval.toString();
        };

        return clearInterval;
    }(function (handle) {
        return clearInterval(handle);
    })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
    function Global() {
        _classCallCheck(this, Global);
    }

    Global._testing = function _testing() {
        testing = true;
    };

    Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
        request = newRequest;
    };

    _createClass(Global, null, [{
        key: 'location',
        get: function get() {
            if (!testing) {
                return location;
            }
        }
    }, {
        key: 'localStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return localStorage;
            }
        }
    }, {
        key: 'sessionStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return sessionStorage;
            }
        }
    }, {
        key: 'XMLHttpRequest',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return request || XMLHttpRequest;
            }
        }
    }, {
        key: 'timer',
        get: function get() {
            if (!testing) {
                return timer;
            }
        }
    }]);

    return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
    function IFrameNavigator() {
        _classCallCheck(this, IFrameNavigator);
    }

    IFrameNavigator.prototype.prepare = function prepare(params) {
        var frame = new _IFrameWindow.IFrameWindow(params);
        return Promise.resolve(frame);
    };

    IFrameNavigator.prototype.callback = function callback(url) {
        _Log.Log.debug("IFrameNavigator.callback");

        try {
            _IFrameWindow.IFrameWindow.notifyParent(url);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
    function IFrameWindow(params) {
        var _this = this;

        _classCallCheck(this, IFrameWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this._boundMessageEvent = this._message.bind(this);
        window.addEventListener("message", this._boundMessageEvent, false);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        window.document.body.appendChild(this._frame);
    }

    IFrameWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            var timeout = params.silentRequestTimeout || DefaultTimeout;
            _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
            this._timer = window.setTimeout(this._timeout.bind(this), timeout);
            this._frame.src = params.url;
        }

        return this.promise;
    };

    IFrameWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("IFrameWindow: Successful response from frame window");
        this._resolve(data);
    };

    IFrameWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    IFrameWindow.prototype.close = function close() {
        this._cleanup();
    };

    IFrameWindow.prototype._cleanup = function _cleanup() {
        if (this._frame) {
            _Log.Log.debug("IFrameWindow: cleanup");

            window.removeEventListener("message", this._boundMessageEvent, false);
            window.clearTimeout(this._timer);
            window.document.body.removeChild(this._frame);

            this._timer = null;
            this._frame = null;
            this._boundMessageEvent = null;
        }
    };

    IFrameWindow.prototype._timeout = function _timeout() {
        _Log.Log.debug("IFrameWindow.timeout");
        this._error("Frame window timed out");
    };

    IFrameWindow.prototype._message = function _message(e) {
        _Log.Log.debug("IFrameWindow.message");

        if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
            var url = e.data;
            if (url) {
                this._success({ url: url });
            } else {
                this._error("Invalid response from frame");
            }
        }
    };

    IFrameWindow.notifyParent = function notifyParent(url) {
        _Log.Log.debug("IFrameWindow.notifyParent");
        if (window.frameElement) {
            url = url || window.location.href;
            if (url) {
                _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
                window.parent.postMessage(url, location.protocol + "//" + location.host);
            }
        }
    };

    _createClass(IFrameWindow, [{
        key: "promise",
        get: function get() {
            return this._promise;
        }
    }, {
        key: "_origin",
        get: function get() {
            return location.protocol + "//" + location.host;
        }
    }]);

    return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
    function InMemoryWebStorage() {
        _classCallCheck(this, InMemoryWebStorage);

        this._data = {};
    }

    InMemoryWebStorage.prototype.getItem = function getItem(key) {
        _Log.Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    };

    InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
        _Log.Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    };

    InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
        _Log.Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    };

    InMemoryWebStorage.prototype.key = function key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    };

    _createClass(InMemoryWebStorage, [{
        key: "length",
        get: function get() {
            return Object.getOwnPropertyNames(this._data).length;
        }
    }]);

    return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
    var jws = _ref.jws,
        KeyUtil = _ref.KeyUtil,
        X509 = _ref.X509,
        crypto = _ref.crypto,
        hextob64u = _ref.hextob64u,
        b64tohex = _ref.b64tohex,
        AllowedSigningAlgs = _ref.AllowedSigningAlgs;

    return function () {
        function JoseUtil() {
            _classCallCheck(this, JoseUtil);
        }

        JoseUtil.parseJwt = function parseJwt(jwt) {
            _Log.Log.debug("JoseUtil.parseJwt");
            try {
                var token = jws.JWS.parse(jwt);
                return {
                    header: token.headerObj,
                    payload: token.payloadObj
                };
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
            _Log.Log.debug("JoseUtil.validateJwt");

            try {
                if (key.kty === "RSA") {
                    if (key.e && key.n) {
                        key = KeyUtil.getKey(key);
                    } else if (key.x5c && key.x5c.length) {
                        var hex = b64tohex(key.x5c[0]);
                        key = X509.getPublicKeyFromCertHex(hex);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
                        return Promise.reject(new Error("RSA key missing key material"));
                    }
                } else if (key.kty === "EC") {
                    if (key.crv && key.x && key.y) {
                        key = KeyUtil.getKey(key);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
                        return Promise.reject(new Error("EC key missing key material"));
                    }
                } else {
                    _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
                    return Promise.reject(new Error( true && key.kty));
                }

                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
            } catch (e) {
                _Log.Log.error(e && e.message || e);
                return Promise.reject("JWT validation failed");
            }
        };

        JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
            if (!clockSkew) {
                clockSkew = 0;
            }

            if (!now) {
                now = parseInt(Date.now() / 1000);
            }

            var payload = JoseUtil.parseJwt(jwt).payload;

            if (!payload.iss) {
                _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
                return Promise.reject(new Error("issuer was not provided"));
            }
            if (payload.iss !== issuer) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
            }

            if (!payload.aud) {
                _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
                return Promise.reject(new Error("aud was not provided"));
            }
            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
            if (!validAudience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
            }
            if (payload.azp && payload.azp !== audience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
                return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
            }

            if (!timeInsensitive) {
                var lowerNow = now + clockSkew;
                var upperNow = now - clockSkew;

                if (!payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
                    return Promise.reject(new Error("iat was not provided"));
                }
                if (lowerNow < payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
                    return Promise.reject(new Error("iat is in the future: " + payload.iat));
                }

                if (payload.nbf && lowerNow < payload.nbf) {
                    _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
                    return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
                }

                if (!payload.exp) {
                    _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
                    return Promise.reject(new Error("exp was not provided"));
                }
                if (payload.exp < upperNow) {
                    _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
                    return Promise.reject(new Error("exp is in the past:" + payload.exp));
                }
            }

            return Promise.resolve(payload);
        };

        JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {

            return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
                try {
                    if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
                        _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
                        return Promise.reject(new Error("signature validation failed"));
                    }

                    return payload;
                } catch (e) {
                    _Log.Log.error(e && e.message || e);
                    return Promise.reject(new Error("signature validation failed"));
                }
            });
        };

        JoseUtil.hashString = function hashString(value, alg) {
            try {
                return crypto.Util.hashString(value, alg);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
            try {
                return hextob64u(value);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        return JoseUtil;
    }();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _rsa = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({ jws: _rsa.jws, KeyUtil: _rsa.KeyUtil, X509: _rsa.X509, crypto: _rsa.crypto, hextob64u: _rsa.hextob64u, b64tohex: _rsa.b64tohex, AllowedSigningAlgs: _rsa.AllowedSigningAlgs });

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
    function JsonService() {
        var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, JsonService);

        if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
            this._contentTypes = additionalContentTypes.slice();
        } else {
            this._contentTypes = [];
        }
        this._contentTypes.push('application/json');
        if (jwtHandler) {
            this._contentTypes.push('application/jwt');
        }

        this._XMLHttpRequest = XMLHttpRequestCtor;
        this._jwtHandler = jwtHandler;
    }

    JsonService.prototype.getJson = function getJson(url, token) {
        var _this = this;

        if (!url) {
            _Log.Log.error("JsonService.getJson: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.getJson, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this._XMLHttpRequest();
            req.open('GET', url);

            var allowedContentTypes = _this._contentTypes;
            var jwtHandler = _this._jwtHandler;

            req.onload = function () {
                _Log.Log.debug("JsonService.getJson: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found == "application/jwt") {
                            jwtHandler(req).then(resolve, reject);
                            return;
                        }

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.getJson: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                } else {
                    reject(Error(req.statusText + " (" + req.status + ")"));
                }
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.getJson: network error");
                reject(Error("Network Error"));
            };

            if (token) {
                _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
                req.setRequestHeader("Authorization", "Bearer " + token);
            }

            req.send();
        });
    };

    JsonService.prototype.postForm = function postForm(url, payload) {
        var _this2 = this;

        if (!url) {
            _Log.Log.error("JsonService.postForm: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.postForm, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this2._XMLHttpRequest();
            req.open('POST', url);

            var allowedContentTypes = _this2._contentTypes;

            req.onload = function () {
                _Log.Log.debug("JsonService.postForm: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                    return;
                }

                if (req.status === 400) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                var payload = JSON.parse(req.responseText);
                                if (payload && payload.error) {
                                    _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
                                    reject(new _ErrorResponse.ErrorResponse(payload));
                                    return;
                                }
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }
                }

                reject(Error(req.statusText + " (" + req.status + ")"));
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.postForm: network error");
                reject(Error("Network Error"));
            };

            var body = "";
            for (var key in payload) {

                var value = payload[key];

                if (value) {

                    if (body.length > 0) {
                        body += "&";
                    }

                    body += encodeURIComponent(key);
                    body += "=";
                    body += encodeURIComponent(value);
                }
            }

            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(body);
        });
    };

    return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
    debug: function debug() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    Log.reset = function reset() {
        level = INFO;
        logger = nopLogger;
    };

    Log.debug = function debug() {
        if (level >= DEBUG) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.debug.apply(logger, Array.from(args));
        }
    };

    Log.info = function info() {
        if (level >= INFO) {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            logger.info.apply(logger, Array.from(args));
        }
    };

    Log.warn = function warn() {
        if (level >= WARN) {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            logger.warn.apply(logger, Array.from(args));
        }
    };

    Log.error = function error() {
        if (level >= ERROR) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            logger.error.apply(logger, Array.from(args));
        }
    };

    _createClass(Log, null, [{
        key: "NONE",
        get: function get() {
            return NONE;
        }
    }, {
        key: "ERROR",
        get: function get() {
            return ERROR;
        }
    }, {
        key: "WARN",
        get: function get() {
            return WARN;
        }
    }, {
        key: "INFO",
        get: function get() {
            return INFO;
        }
    }, {
        key: "DEBUG",
        get: function get() {
            return DEBUG;
        }
    }, {
        key: "level",
        get: function get() {
            return level;
        },
        set: function set(value) {
            if (NONE <= value && value <= DEBUG) {
                level = value;
            } else {
                throw new Error("Invalid log level");
            }
        }
    }, {
        key: "logger",
        get: function get() {
            return logger;
        },
        set: function set(value) {
            if (!value.debug && value.info) {
                // just to stay backwards compat. can remove in 2.0
                value.debug = value.info;
            }

            if (value.debug && value.info && value.warn && value.error) {
                logger = value;
            } else {
                throw new Error("Invalid logger");
            }
        }
    }]);

    return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var MetadataService = exports.MetadataService = function () {
    function MetadataService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

        _classCallCheck(this, MetadataService);

        if (!settings) {
            _Log.Log.error("MetadataService: No settings passed to MetadataService");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
    }

    MetadataService.prototype.getMetadata = function getMetadata() {
        var _this = this;

        if (this._settings.metadata) {
            _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
            return Promise.resolve(this._settings.metadata);
        }

        if (!this.metadataUrl) {
            _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
            return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
        }

        _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

        return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadata: json received");
            _this._settings.metadata = metadata;
            return metadata;
        });
    };

    MetadataService.prototype.getIssuer = function getIssuer() {
        return this._getMetadataProperty("issuer");
    };

    MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    };

    MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    };

    MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
        var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return this._getMetadataProperty("token_endpoint", optional);
    };

    MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    };

    MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    };

    MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
        return this._getMetadataProperty("revocation_endpoint", true);
    };

    MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
        return this._getMetadataProperty("jwks_uri", true);
    };

    MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

        return this.getMetadata().then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

            if (metadata[name] === undefined) {

                if (optional === true) {
                    _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
                    return undefined;
                } else {
                    _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
                    throw new Error("Metadata does not contain property " + name);
                }
            }

            return metadata[name];
        });
    };

    MetadataService.prototype.getSigningKeys = function getSigningKeys() {
        var _this2 = this;

        if (this._settings.signingKeys) {
            _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
            return Promise.resolve(this._settings.signingKeys);
        }

        return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
            _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

            return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
                _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

                if (!keySet.keys) {
                    _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
                    throw new Error("Missing keys on keyset");
                }

                _this2._settings.signingKeys = keySet.keys;
                return _this2._settings.signingKeys;
            });
        });
    };

    _createClass(MetadataService, [{
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                if (this._settings.metadataUrl) {
                    this._metadataUrl = this._settings.metadataUrl;
                } else {
                    this._metadataUrl = this._settings.authority;

                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                            this._metadataUrl += '/';
                        }
                        this._metadataUrl += OidcMetadataUrlPath;
                    }
                }
            }

            return this._metadataUrl;
        }
    }]);

    return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
    function OidcClient() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OidcClient);

        if (settings instanceof _OidcClientSettings.OidcClientSettings) {
            this._settings = settings;
        } else {
            this._settings = new _OidcClientSettings.OidcClientSettings(settings);
        }
    }

    OidcClient.prototype.createSigninRequest = function createSigninRequest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            response_type = _ref.response_type,
            scope = _ref.scope,
            redirect_uri = _ref.redirect_uri,
            data = _ref.data,
            state = _ref.state,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            request = _ref.request,
            request_uri = _ref.request_uri,
            response_mode = _ref.response_mode,
            extraQueryParams = _ref.extraQueryParams,
            extraTokenParams = _ref.extraTokenParams,
            request_type = _ref.request_type,
            skipUserInfo = _ref.skipUserInfo;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSigninRequest");

        var client_id = this._settings.client_id;
        response_type = response_type || this._settings.response_type;
        scope = scope || this._settings.scope;
        redirect_uri = redirect_uri || this._settings.redirect_uri;

        // id_token_hint, login_hint aren't allowed on _settings
        prompt = prompt || this._settings.prompt;
        display = display || this._settings.display;
        max_age = max_age || this._settings.max_age;
        ui_locales = ui_locales || this._settings.ui_locales;
        acr_values = acr_values || this._settings.acr_values;
        resource = resource || this._settings.resource;
        response_mode = response_mode || this._settings.response_mode;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
        extraTokenParams = extraTokenParams || this._settings.extraTokenParams;

        var authority = this._settings.authority;

        if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
            return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
        }

        return this._metadataService.getAuthorizationEndpoint().then(function (url) {
            _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

            var signinRequest = new _SigninRequest.SigninRequest({
                url: url,
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: response_type,
                scope: scope,
                data: data || state,
                authority: authority,
                prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
                resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams, extraTokenParams: extraTokenParams, request_type: request_type, response_mode: response_mode,
                client_secret: _this._settings.client_secret,
                skipUserInfo: skipUserInfo
            });

            var signinState = signinRequest.state;
            stateStore = stateStore || _this._stateStore;

            return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
                return signinRequest;
            });
        });
    };

    OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSigninResponseState");

        var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
        var delimiter = useQuery ? "?" : "#";

        var response = new _SigninResponse.SigninResponse(url, delimiter);

        if (!response.state) {
            _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
            return Promise.reject(new Error("No state in response"));
        }

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

        return stateApi(response.state).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _SigninState.SigninState.fromStorageString(storedStateString);
            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
        var _this2 = this;

        _Log.Log.debug("OidcClient.processSigninResponse");

        return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
            return _this2._validator.validateSigninResponse(state, response);
        });
    };

    OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
        var _this3 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id_token_hint = _ref3.id_token_hint,
            data = _ref3.data,
            state = _ref3.state,
            post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
            extraQueryParams = _ref3.extraQueryParams,
            request_type = _ref3.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSignoutRequest");

        post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        return this._metadataService.getEndSessionEndpoint().then(function (url) {
            if (!url) {
                _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
                throw new Error("no end session endpoint");
            }

            _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

            var request = new _SignoutRequest.SignoutRequest({
                url: url,
                id_token_hint: id_token_hint,
                post_logout_redirect_uri: post_logout_redirect_uri,
                data: data || state,
                extraQueryParams: extraQueryParams,
                request_type: request_type
            });

            var signoutState = request.state;
            if (signoutState) {
                _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

                stateStore = stateStore || _this3._stateStore;
                stateStore.set(signoutState.id, signoutState.toStorageString());
            }

            return request;
        });
    };

    OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSignoutResponseState");

        var response = new _SignoutResponse.SignoutResponse(url);
        if (!response.state) {
            _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

            if (response.error) {
                _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
                return Promise.reject(new _ErrorResponse.ErrorResponse(response));
            }

            return Promise.resolve({ undefined: undefined, response: response });
        }

        var stateKey = response.state;

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
        return stateApi(stateKey).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _State.State.fromStorageString(storedStateString);

            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
        var _this4 = this;

        _Log.Log.debug("OidcClient.processSignoutResponse");

        return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
            var state = _ref4.state,
                response = _ref4.response;

            if (state) {
                _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
                return _this4._validator.validateSignoutResponse(state, response);
            } else {
                _Log.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
                return response;
            }
        });
    };

    OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
        _Log.Log.debug("OidcClient.clearStaleState");

        stateStore = stateStore || this._stateStore;

        return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
    };

    _createClass(OidcClient, [{
        key: '_stateStore',
        get: function get() {
            return this.settings.stateStore;
        }
    }, {
        key: '_validator',
        get: function get() {
            return this.settings.validator;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this.settings.metadataService;
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }
    }]);

    return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
    function OidcClientSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            authority = _ref.authority,
            metadataUrl = _ref.metadataUrl,
            metadata = _ref.metadata,
            signingKeys = _ref.signingKeys,
            client_id = _ref.client_id,
            client_secret = _ref.client_secret,
            _ref$response_type = _ref.response_type,
            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
            _ref$scope = _ref.scope,
            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
            redirect_uri = _ref.redirect_uri,
            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            _ref$filterProtocolCl = _ref.filterProtocolClaims,
            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
            _ref$loadUserInfo = _ref.loadUserInfo,
            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
            _ref$staleStateAge = _ref.staleStateAge,
            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
            _ref$clockSkew = _ref.clockSkew,
            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
            _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
            userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? 'OP' : _ref$userInfoJwtIssue,
            _ref$stateStore = _ref.stateStore,
            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
            _ref$extraQueryParams = _ref.extraQueryParams,
            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams,
            _ref$extraTokenParams = _ref.extraTokenParams,
            extraTokenParams = _ref$extraTokenParams === undefined ? {} : _ref$extraTokenParams;

        _classCallCheck(this, OidcClientSettings);

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = new ResponseValidatorCtor(this);
        this._metadataService = new MetadataServiceCtor(this);

        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
        this._extraTokenParams = (typeof extraTokenParams === 'undefined' ? 'undefined' : _typeof(extraTokenParams)) === 'object' ? extraTokenParams : {};
    }

    // client config


    _createClass(OidcClientSettings, [{
        key: 'client_id',
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            if (!this._client_id) {
                // one-time set only
                this._client_id = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
                throw new Error("client_id has already been assigned.");
            }
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'response_type',
        get: function get() {
            return this._response_type;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'post_logout_redirect_uri',
        get: function get() {
            return this._post_logout_redirect_uri;
        }

        // optional protocol params

    }, {
        key: 'prompt',
        get: function get() {
            return this._prompt;
        }
    }, {
        key: 'display',
        get: function get() {
            return this._display;
        }
    }, {
        key: 'max_age',
        get: function get() {
            return this._max_age;
        }
    }, {
        key: 'ui_locales',
        get: function get() {
            return this._ui_locales;
        }
    }, {
        key: 'acr_values',
        get: function get() {
            return this._acr_values;
        }
    }, {
        key: 'resource',
        get: function get() {
            return this._resource;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }

        // metadata

    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        },
        set: function set(value) {
            if (!this._authority) {
                // one-time set only
                this._authority = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
                throw new Error("authority has already been assigned.");
            }
        }
    }, {
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                this._metadataUrl = this.authority;

                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                        this._metadataUrl += '/';
                    }
                    this._metadataUrl += OidcMetadataUrlPath;
                }
            }

            return this._metadataUrl;
        }

        // settable/cachable metadata values

    }, {
        key: 'metadata',
        get: function get() {
            return this._metadata;
        },
        set: function set(value) {
            this._metadata = value;
        }
    }, {
        key: 'signingKeys',
        get: function get() {
            return this._signingKeys;
        },
        set: function set(value) {
            this._signingKeys = value;
        }

        // behavior flags

    }, {
        key: 'filterProtocolClaims',
        get: function get() {
            return this._filterProtocolClaims;
        }
    }, {
        key: 'loadUserInfo',
        get: function get() {
            return this._loadUserInfo;
        }
    }, {
        key: 'staleStateAge',
        get: function get() {
            return this._staleStateAge;
        }
    }, {
        key: 'clockSkew',
        get: function get() {
            return this._clockSkew;
        }
    }, {
        key: 'userInfoJwtIssuer',
        get: function get() {
            return this._userInfoJwtIssuer;
        }
    }, {
        key: 'stateStore',
        get: function get() {
            return this._stateStore;
        }
    }, {
        key: 'validator',
        get: function get() {
            return this._validator;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }

        // extra query params

    }, {
        key: 'extraQueryParams',
        get: function get() {
            return this._extraQueryParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraQueryParams = value;
            } else {
                this._extraQueryParams = {};
            }
        }

        // extra token params

    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraTokenParams = value;
            } else {
                this._extraTokenParams = {};
            }
        }
    }]);

    return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
    function PopupNavigator() {
        _classCallCheck(this, PopupNavigator);
    }

    PopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _PopupWindow.PopupWindow(params);
        return Promise.resolve(popup);
    };

    PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
        _Log.Log.debug("PopupNavigator.callback");

        try {
            _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
    function PopupWindow(params) {
        var _this = this;

        _classCallCheck(this, PopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        var target = params.popupWindowTarget || DefaultPopupTarget;
        var features = params.popupWindowFeatures || DefaultPopupFeatures;

        this._popup = window.open('', target, features);
        if (this._popup) {
            _Log.Log.debug("PopupWindow.ctor: popup successfully created");
            this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
        }
    }

    PopupWindow.prototype.navigate = function navigate(params) {
        if (!this._popup) {
            this._error("PopupWindow.navigate: Error opening popup window");
        } else if (!params || !params.url) {
            this._error("PopupWindow.navigate: no url provided");
            this._error("No url provided");
        } else {
            _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

            this._id = params.id;
            if (this._id) {
                window["popupCallback_" + params.id] = this._callback.bind(this);
            }

            this._popup.focus();
            this._popup.window.location = params.url;
        }

        return this.promise;
    };

    PopupWindow.prototype._success = function _success(data) {
        _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

        this._cleanup();
        this._resolve(data);
    };

    PopupWindow.prototype._error = function _error(message) {
        _Log.Log.error("PopupWindow.error: ", message);

        this._cleanup();
        this._reject(new Error(message));
    };

    PopupWindow.prototype.close = function close() {
        this._cleanup(false);
    };

    PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
        _Log.Log.debug("PopupWindow.cleanup");

        window.clearInterval(this._checkForPopupClosedTimer);
        this._checkForPopupClosedTimer = null;

        delete window["popupCallback_" + this._id];

        if (this._popup && !keepOpen) {
            this._popup.close();
        }
        this._popup = null;
    };

    PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
        if (!this._popup || this._popup.closed) {
            this._error("Popup window closed");
        }
    };

    PopupWindow.prototype._callback = function _callback(url, keepOpen) {
        this._cleanup(keepOpen);

        if (url) {
            _Log.Log.debug("PopupWindow.callback success");
            this._success({ url: url });
        } else {
            _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
            this._error("Invalid response from popup");
        }
    };

    PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
        if (window.opener) {
            url = url || window.location.href;
            if (url) {
                var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

                if (data.state) {
                    var name = "popupCallback_" + data.state;
                    var callback = window.opener[name];
                    if (callback) {
                        _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
                        callback(url, keepOpen);
                    } else {
                        _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                    }
                } else {
                    _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
            }
        } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
        }
    };

    _createClass(PopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
    function RedirectNavigator() {
        _classCallCheck(this, RedirectNavigator);
    }

    RedirectNavigator.prototype.prepare = function prepare() {
        return Promise.resolve(this);
    };

    RedirectNavigator.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            _Log.Log.error("RedirectNavigator.navigate: No url provided");
            return Promise.reject(new Error("No url provided"));
        }

        if (params.useReplaceToNavigate) {
            window.location.replace(params.url);
        } else {
            window.location = params.url;
        }

        return Promise.resolve();
    };

    _createClass(RedirectNavigator, [{
        key: "url",
        get: function get() {
            return window.location.href;
        }
    }]);

    return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
    function ResponseValidator(settings) {
        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

        _classCallCheck(this, ResponseValidator);

        if (!settings) {
            _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
            throw new Error("settings");
        }

        this._settings = settings;
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._userInfoService = new UserInfoServiceCtor(this._settings);
        this._joseUtil = joseUtil;
        this._tokenClient = new TokenClientCtor(this._settings);
    }

    ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
        var _this = this;

        _Log.Log.debug("ResponseValidator.validateSigninResponse");

        return this._processSigninParams(state, response).then(function (response) {
            _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
            return _this._validateTokens(state, response).then(function (response) {
                _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
                return _this._processClaims(state, response).then(function (response) {
                    _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        if (!state.client_id) {
            _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
            return Promise.reject(new Error("No client_id on state"));
        }

        if (!state.authority) {
            _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
            return Promise.reject(new Error("No authority on state"));
        }

        // this allows the authority to be loaded from the signin state
        if (!this._settings.authority) {
            this._settings.authority = state.authority;
        }
        // ensure we're using the correct authority if the authority is not loaded from signin state
        else if (this._settings.authority && this._settings.authority !== state.authority) {
                _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
                return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
            }
        // this allows the client_id to be loaded from the signin state
        if (!this._settings.client_id) {
            this._settings.client_id = state.client_id;
        }
        // ensure we're using the correct client_id if the client_id is not loaded from signin state
        else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
                _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
                return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
            }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        if (state.nonce && !response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
            return Promise.reject(new Error("No id_token in response"));
        }

        if (!state.nonce && response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
            return Promise.reject(new Error("Unexpected id_token in response"));
        }

        if (state.code_verifier && !response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
            return Promise.reject(new Error("No code in response"));
        }

        if (!state.code_verifier && response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
            return Promise.reject(new Error("Unexpected code in response"));
        }

        if (!response.scope) {
            // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
            response.scope = state.scope;
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processClaims = function _processClaims(state, response) {
        var _this2 = this;

        if (response.isOpenIdConnect) {
            _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

            response.profile = this._filterProtocolClaims(response.profile);

            if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
                _Log.Log.debug("ResponseValidator._processClaims: loading user info");

                return this._userInfoService.getClaims(response.access_token).then(function (claims) {
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

                    if (claims.sub !== response.profile.sub) {
                        _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
                        return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
                    }

                    response.profile = _this2._mergeClaims(response.profile, claims);
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

                    return response;
                });
            } else {
                _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
            }
        } else {
            _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
        var result = Object.assign({}, claims1);

        for (var name in claims2) {
            var values = claims2[name];
            if (!Array.isArray(values)) {
                values = [values];
            }

            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                if (!result[name]) {
                    result[name] = value;
                } else if (Array.isArray(result[name])) {
                    if (result[name].indexOf(value) < 0) {
                        result[name].push(value);
                    }
                } else if (result[name] !== value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        result[name] = this._mergeClaims(result[name], value);
                    } else {
                        result[name] = [result[name], value];
                    }
                }
            }
        }

        return result;
    };

    ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
        _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

        var result = Object.assign({}, claims);

        if (this._settings._filterProtocolClaims) {
            ProtocolClaims.forEach(function (type) {
                delete result[type];
            });

            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
        } else {
            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
        }

        return result;
    };

    ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
        if (response.code) {
            _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
            return this._processCode(state, response);
        }

        if (response.id_token) {
            if (response.access_token) {
                _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
                return this._validateIdTokenAndAccessToken(state, response);
            }

            _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
            return this._validateIdToken(state, response);
        }

        _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processCode = function _processCode(state, response) {
        var _this3 = this;

        var request = {
            client_id: state.client_id,
            client_secret: state.client_secret,
            code: response.code,
            redirect_uri: state.redirect_uri,
            code_verifier: state.code_verifier
        };

        if (state.extraTokenParams && _typeof(state.extraTokenParams) === 'object') {
            Object.assign(request, state.extraTokenParams);
        }

        return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {

            for (var key in tokenResponse) {
                response[key] = tokenResponse[key];
            }

            if (response.id_token) {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
                return _this3._validateIdTokenAttributes(state, response);
            } else {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
            }

            return response;
        });
    };

    ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
        var _this4 = this;

        return this._metadataService.getIssuer().then(function (issuer) {

            var audience = state.client_id;
            var clockSkewInSeconds = _this4._settings.clockSkew;
            _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

            return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds).then(function (payload) {

                if (state.nonce && state.nonce !== payload.nonce) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
                    return Promise.reject(new Error("Invalid nonce in id_token"));
                }

                if (!payload.sub) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
                    return Promise.reject(new Error("No sub present in id_token"));
                }

                response.profile = payload;
                return response;
            });
        });
    };

    ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
        var _this5 = this;

        return this._validateIdToken(state, response).then(function (response) {
            return _this5._validateAccessToken(response);
        });
    };

    ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
        var _this6 = this;

        if (!state.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
            return Promise.reject(new Error("No nonce on state"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header || !jwt.payload) {
            _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        if (state.nonce !== jwt.payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        var kid = jwt.header.kid;

        return this._metadataService.getIssuer().then(function (issuer) {
            _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");

            return _this6._metadataService.getSigningKeys().then(function (keys) {
                if (!keys) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
                    return Promise.reject(new Error("No signing keys from metadata"));
                }

                _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var key = void 0;
                if (!kid) {
                    keys = _this6._filterByAlg(keys, jwt.header.alg);

                    if (keys.length > 1) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
                        return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                    } else {
                        // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                        // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                        key = keys[0];
                    }
                } else {
                    key = keys.filter(function (key) {
                        return key.kid === kid;
                    })[0];
                }

                if (!key) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
                    return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                }

                var audience = state.client_id;

                var clockSkewInSeconds = _this6._settings.clockSkew;
                _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
                    _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

                    if (!jwt.payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = jwt.payload;

                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
        if (!response.profile) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
            return Promise.reject(new Error("No profile loaded from id_token"));
        }

        if (!response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
            return Promise.reject(new Error("No at_hash in id_token"));
        }

        if (!response.id_token) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
            return Promise.reject(new Error("No id_token"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        var hashAlg = jwt.header.alg;
        if (!hashAlg || hashAlg.length !== 5) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var hashBits = hashAlg.substr(2, 3);
        if (!hashBits) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        hashBits = parseInt(hashBits);
        if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var sha = "sha" + hashBits;
        var hash = this._joseUtil.hashString(response.access_token, sha);
        if (!hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        var left = hash.substr(0, hash.length / 2);
        var left_b64u = this._joseUtil.hexToBase64Url(left);
        if (left_b64u !== response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        _Log.Log.debug("ResponseValidator._validateAccessToken: success");

        return Promise.resolve(response);
    };

    return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
    function SessionMonitor(userManager) {
        var _this = this;

        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;
        var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global.timer;

        _classCallCheck(this, SessionMonitor);

        if (!userManager) {
            _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }

        this._userManager = userManager;
        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
        this._timer = timer;

        this._userManager.events.addUserLoaded(this._start.bind(this));
        this._userManager.events.addUserUnloaded(this._stop.bind(this));

        this._userManager.getUser().then(function (user) {
            // doing this manually here since calling getUser 
            // doesn't trigger load event.
            if (user) {
                _this._start(user);
            } else if (_this._settings.monitorAnonymousSession) {
                _this._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a ctor
                    _Log.Log.error("SessionMonitor ctor: error from querySessionStatus:", err.message);
                });
            }
        }).catch(function (err) {
            // catch to suppress errors since we're in a ctor
            _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
        });
    }

    SessionMonitor.prototype._start = function _start(user) {
        var _this2 = this;

        var session_state = user.session_state;

        if (session_state) {
            if (user.profile) {
                this._sub = user.profile.sub;
                this._sid = user.profile.sid;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
            } else {
                this._sub = undefined;
                this._sid = undefined;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
            }

            if (!this._checkSessionIFrame) {
                this._metadataService.getCheckSessionIframe().then(function (url) {
                    if (url) {
                        _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

                        var client_id = _this2._client_id;
                        var interval = _this2._checkSessionInterval;
                        var stopOnError = _this2._stopCheckSessionOnError;

                        _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
                        _this2._checkSessionIFrame.load().then(function () {
                            _this2._checkSessionIFrame.start(session_state);
                        });
                    } else {
                        _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
                    }
                }).catch(function (err) {
                    // catch to suppress errors since we're in non-promise callback
                    _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
                });
            } else {
                this._checkSessionIFrame.start(session_state);
            }
        }
    };

    SessionMonitor.prototype._stop = function _stop() {
        var _this3 = this;

        this._sub = undefined;
        this._sid = undefined;

        if (this._checkSessionIFrame) {
            _Log.Log.debug("SessionMonitor._stop");
            this._checkSessionIFrame.stop();
        }

        if (this._settings.monitorAnonymousSession) {
            // using a timer to delay re-initialization to avoid race conditions during signout
            var timerHandle = this._timer.setInterval(function () {
                _this3._timer.clearInterval(timerHandle);

                _this3._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this3._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a callback
                    _Log.Log.error("SessionMonitor: error from querySessionStatus:", err.message);
                });
            }, 1000);
        }
    };

    SessionMonitor.prototype._callback = function _callback() {
        var _this4 = this;

        this._userManager.querySessionStatus().then(function (session) {
            var raiseEvent = true;

            if (session) {
                if (session.sub === _this4._sub) {
                    raiseEvent = false;
                    _this4._checkSessionIFrame.start(session.session_state);

                    if (session.sid === _this4._sid) {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                    } else {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                        _this4._userManager.events._raiseUserSessionChanged();
                    }
                } else {
                    _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
                }
            } else {
                _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
            }

            if (raiseEvent) {
                if (_this4._sub) {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
                    _this4._userManager.events._raiseUserSignedOut();
                } else {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");
                    _this4._userManager.events._raiseUserSignedIn();
                }
            }
        }).catch(function (err) {
            if (_this4._sub) {
                _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
                _this4._userManager.events._raiseUserSignedOut();
            }
        });
    };

    _createClass(SessionMonitor, [{
        key: '_settings',
        get: function get() {
            return this._userManager.settings;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this._userManager.metadataService;
        }
    }, {
        key: '_client_id',
        get: function get() {
            return this._settings.client_id;
        }
    }, {
        key: '_checkSessionInterval',
        get: function get() {
            return this._settings.checkSessionInterval;
        }
    }, {
        key: '_stopCheckSessionOnError',
        get: function get() {
            return this._settings.stopCheckSessionOnError;
        }
    }]);

    return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
    function SigninRequest(_ref) {
        var url = _ref.url,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            response_type = _ref.response_type,
            scope = _ref.scope,
            authority = _ref.authority,
            data = _ref.data,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            request = _ref.request,
            request_uri = _ref.request_uri,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type,
            client_secret = _ref.client_secret,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninRequest);

        if (!url) {
            _Log.Log.error("SigninRequest.ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            _Log.Log.error("SigninRequest.ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            _Log.Log.error("SigninRequest.ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            _Log.Log.error("SigninRequest.ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            _Log.Log.error("SigninRequest.ctor: No authority passed");
            throw new Error("authority");
        }

        var oidc = SigninRequest.isOidc(response_type);
        var code = SigninRequest.isCode(response_type);

        if (!response_mode) {
            response_mode = SigninRequest.isCode(response_type) ? "query" : null;
        }

        this.state = new _SigninState.SigninState({ nonce: oidc,
            data: data, client_id: client_id, authority: authority, redirect_uri: redirect_uri,
            code_verifier: code,
            request_type: request_type, response_mode: response_mode,
            client_secret: client_secret, scope: scope, extraTokenParams: extraTokenParams, skipUserInfo: skipUserInfo });

        url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

        url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        if (oidc) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
        }
        if (code) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
        }

        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri, response_mode: response_mode };
        for (var key in optional) {
            if (optional[key]) {
                url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
            }
        }

        for (var _key in extraQueryParams) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
        }

        this.url = url;
    }

    SigninRequest.isOidc = function isOidc(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "id_token";
        });
        return !!result[0];
    };

    SigninRequest.isOAuth = function isOAuth(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "token";
        });
        return !!result[0];
    };

    SigninRequest.isCode = function isCode(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "code";
        });
        return !!result[0];
    };

    return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
    function SigninResponse(url) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

        _classCallCheck(this, SigninResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    _createClass(SigninResponse, [{
        key: "expires_in",
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: "expired",
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: "scopes",
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }, {
        key: "isOpenIdConnect",
        get: function get() {
            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
        }
    }]);

    return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
    _inherits(SigninState, _State);

    function SigninState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nonce = _ref.nonce,
            authority = _ref.authority,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            code_verifier = _ref.code_verifier,
            response_mode = _ref.response_mode,
            client_secret = _ref.client_secret,
            scope = _ref.scope,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninState);

        var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

        if (nonce === true) {
            _this._nonce = (0, _random2.default)();
        } else if (nonce) {
            _this._nonce = nonce;
        }

        if (code_verifier === true) {
            // random() produces 32 length
            _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
        } else if (code_verifier) {
            _this._code_verifier = code_verifier;
        }

        if (_this.code_verifier) {
            var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
            _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
        }

        _this._redirect_uri = redirect_uri;
        _this._authority = authority;
        _this._client_id = client_id;
        _this._response_mode = response_mode;
        _this._client_secret = client_secret;
        _this._scope = scope;
        _this._extraTokenParams = extraTokenParams;
        _this._skipUserInfo = skipUserInfo;
        return _this;
    }

    SigninState.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode,
            client_secret: this.client_secret,
            scope: this.scope,
            extraTokenParams: this.extraTokenParams,
            skipUserInfo: this.skipUserInfo
        });
    };

    SigninState.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    };

    _createClass(SigninState, [{
        key: 'nonce',
        get: function get() {
            return this._nonce;
        }
    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        }
    }, {
        key: 'client_id',
        get: function get() {
            return this._client_id;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'code_verifier',
        get: function get() {
            return this._code_verifier;
        }
    }, {
        key: 'code_challenge',
        get: function get() {
            return this._code_challenge;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        }
    }, {
        key: 'skipUserInfo',
        get: function get() {
            return this._skipUserInfo;
        }
    }]);

    return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
    var url = _ref.url,
        id_token_hint = _ref.id_token_hint,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        data = _ref.data,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type;

    _classCallCheck(this, SignoutRequest);

    if (!url) {
        _Log.Log.error("SignoutRequest.ctor: No url passed");
        throw new Error("url");
    }

    if (id_token_hint) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
    }

    if (post_logout_redirect_uri) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

        if (data) {
            this.state = new _State.State({ data: data, request_type: request_type });

            url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        }
    }

    for (var key in extraQueryParams) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
    }

    this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
    _classCallCheck(this, SignoutResponse);

    var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

    this.error = values.error;
    this.error_description = values.error_description;
    this.error_uri = values.error_uri;

    this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
    function SilentRenewService(userManager) {
        _classCallCheck(this, SilentRenewService);

        this._userManager = userManager;
    }

    SilentRenewService.prototype.start = function start() {
        if (!this._callback) {
            this._callback = this._tokenExpiring.bind(this);
            this._userManager.events.addAccessTokenExpiring(this._callback);

            // this will trigger loading of the user so the expiring events can be initialized
            this._userManager.getUser().then(function (user) {
                // deliberate nop
            }).catch(function (err) {
                // catch to suppress errors since we're in a ctor
                _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
            });
        }
    };

    SilentRenewService.prototype.stop = function stop() {
        if (this._callback) {
            this._userManager.events.removeAccessTokenExpiring(this._callback);
            delete this._callback;
        }
    };

    SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
        var _this = this;

        this._userManager.signinSilent().then(function (user) {
            _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
        }, function (err) {
            _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
            _this._userManager.events._raiseSilentRenewError(err);
        });
    };

    return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
    function State() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            data = _ref.data,
            created = _ref.created,
            request_type = _ref.request_type;

        _classCallCheck(this, State);

        this._id = id || (0, _random2.default)();
        this._data = data;

        if (typeof created === 'number' && created > 0) {
            this._created = created;
        } else {
            this._created = parseInt(Date.now() / 1000);
        }
        this._request_type = request_type;
    }

    State.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    };

    State.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    };

    State.clearStaleState = function clearStaleState(storage, age) {

        var cutoff = Date.now() / 1000 - age;

        return storage.getAllKeys().then(function (keys) {
            _Log.Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];

            var _loop = function _loop(i) {
                var key = keys[i];
                p = storage.get(key).then(function (item) {
                    var remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item);

                            _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        } catch (e) {
                            _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    } else {
                        _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });


                promises.push(p);
            };

            for (var i = 0; i < keys.length; i++) {
                var p;

                _loop(i);
            }

            _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    };

    _createClass(State, [{
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'created',
        get: function get() {
            return this._created;
        }
    }, {
        key: 'request_type',
        get: function get() {
            return this._request_type;
        }
    }]);

    return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
    _inherits(Timer, _Event);

    function Timer(name) {
        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
        var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, _Event.call(this, name));

        _this._timer = timer;

        if (nowFunc) {
            _this._nowFunc = nowFunc;
        } else {
            _this._nowFunc = function () {
                return Date.now() / 1000;
            };
        }
        return _this;
    }

    Timer.prototype.init = function init(duration) {
        if (duration <= 0) {
            duration = 1;
        }
        duration = parseInt(duration);

        var expiration = this.now + duration;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }

        this.cancel();

        _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
        this._expiration = expiration;

        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        var timerDuration = TimerDuration;
        if (duration < timerDuration) {
            timerDuration = duration;
        }
        this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
    };

    Timer.prototype.cancel = function cancel() {
        if (this._timerHandle) {
            _Log.Log.debug("Timer.cancel: ", this._name);
            this._timer.clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    };

    Timer.prototype._callback = function _callback() {
        var diff = this._expiration - this.now;
        _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

        if (this._expiration <= this.now) {
            this.cancel();
            _Event.prototype.raise.call(this);
        }
    };

    _createClass(Timer, [{
        key: 'now',
        get: function get() {
            return parseInt(this._nowFunc());
        }
    }, {
        key: 'expiration',
        get: function get() {
            return this._expiration;
        }
    }]);

    return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
    function TokenClient(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenClient);

        if (!settings) {
            _Log.Log.error("TokenClient.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor();
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenClient.prototype.exchangeCode = function exchangeCode() {
        var _this = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "authorization_code";
        args.client_id = args.client_id || this._settings.client_id;
        args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

        if (!args.code) {
            _Log.Log.error("TokenClient.exchangeCode: No code passed");
            return Promise.reject(new Error("A code is required"));
        }
        if (!args.redirect_uri) {
            _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
            return Promise.reject(new Error("A redirect_uri is required"));
        }
        if (!args.code_verifier) {
            _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
            return Promise.reject(new Error("A code_verifier is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");

            return _this._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeCode: response received");
                return response;
            });
        });
    };

    TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
        var _this2 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "refresh_token";
        args.client_id = args.client_id || this._settings.client_id;
        args.client_secret = args.client_secret || this._settings.client_secret;

        if (!args.refresh_token) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
            return Promise.reject(new Error("A refresh_token is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

            return _this2._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
                return response;
            });
        });
    };

    return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
    function TokenRevocationClient(settings) {
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenRevocationClient);

        if (!settings) {
            _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }

        this._settings = settings;
        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenRevocationClient.prototype.revoke = function revoke(token, required) {
        var _this = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

        if (!token) {
            _Log.Log.error("TokenRevocationClient.revoke: No token provided");
            throw new Error("No token provided.");
        }

        if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
            _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
            throw new Error("Invalid token type.");
        }

        return this._metadataService.getRevocationEndpoint().then(function (url) {
            if (!url) {
                if (required) {
                    _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
                    throw new Error("Revocation not supported");
                }

                // not required, so don't error and just return
                return;
            }

            _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
            var client_id = _this._settings.client_id;
            var client_secret = _this._settings.client_secret;
            return _this._revoke(url, client_id, client_secret, token, type);
        });
    };

    TokenRevocationClient.prototype._revoke = function _revoke(url, client_id, client_secret, token, type) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {

            var xhr = new _this2._XMLHttpRequestCtor();
            xhr.open("POST", url);

            xhr.onload = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject(Error(xhr.statusText + " (" + xhr.status + ")"));
                }
            };
            xhr.onerror = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: Network Error.");
                reject("Network Error");
            };

            var body = "client_id=" + encodeURIComponent(client_id);
            if (client_secret) {
                body += "&client_secret=" + encodeURIComponent(client_secret);
            }
            body += "&token_type_hint=" + encodeURIComponent(type);
            body += "&token=" + encodeURIComponent(token);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(body);
        });
    };

    return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
    function UrlUtility() {
        _classCallCheck(this, UrlUtility);
    }

    UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    };

    UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
        var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

        if (typeof value !== 'string') {
            value = global.location.href;
        }

        var idx = value.lastIndexOf(delimiter);
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = value.indexOf('#');
            if (idx >= 0) {
                value = value.substr(0, idx);
            }
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            if (counter++ > 50) {
                _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }

        return {};
    };

    return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(_ref) {
        var id_token = _ref.id_token,
            session_state = _ref.session_state,
            access_token = _ref.access_token,
            refresh_token = _ref.refresh_token,
            token_type = _ref.token_type,
            scope = _ref.scope,
            profile = _ref.profile,
            expires_at = _ref.expires_at,
            state = _ref.state;

        _classCallCheck(this, User);

        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
        this.state = state;
    }

    User.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    };

    User.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    };

    _createClass(User, [{
        key: 'expires_in',
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: 'expired',
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: 'scopes',
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }]);

    return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
    function UserInfoService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserInfoService);

        if (!settings) {
            _Log.Log.error("UserInfoService.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._joseUtil = joseUtil;
    }

    UserInfoService.prototype.getClaims = function getClaims(token) {
        var _this = this;

        if (!token) {
            _Log.Log.error("UserInfoService.getClaims: No token passed");
            return Promise.reject(new Error("A token is required"));
        }

        return this._metadataService.getUserInfoEndpoint().then(function (url) {
            _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

            return _this._jsonService.getJson(url, token).then(function (claims) {
                _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
                return claims;
            });
        });
    };

    UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
        var _this2 = this;

        try {
            var jwt = this._joseUtil.parseJwt(req.responseText);
            if (!jwt || !jwt.header || !jwt.payload) {
                _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
                return Promise.reject(new Error("Failed to parse id_token"));
            }

            var kid = jwt.header.kid;

            var issuerPromise = void 0;
            switch (this._settings.userInfoJwtIssuer) {
                case 'OP':
                    issuerPromise = this._metadataService.getIssuer();
                    break;
                case 'ANY':
                    issuerPromise = Promise.resolve(jwt.payload.iss);
                    break;
                default:
                    issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
                    break;
            }

            return issuerPromise.then(function (issuer) {
                _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

                return _this2._metadataService.getSigningKeys().then(function (keys) {
                    if (!keys) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
                        return Promise.reject(new Error("No signing keys from metadata"));
                    }

                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var key = void 0;
                    if (!kid) {
                        keys = _this2._filterByAlg(keys, jwt.header.alg);

                        if (keys.length > 1) {
                            _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                        } else {
                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                            key = keys[0];
                        }
                    } else {
                        key = keys.filter(function (key) {
                            return key.kid === kid;
                        })[0];
                    }

                    if (!key) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    }

                    var audience = _this2._settings.client_id;

                    var clockSkewInSeconds = _this2._settings.clockSkew;
                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                    return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
                        _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
                        return jwt.payload;
                    });
                });
            });
            return;
        } catch (e) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
            reject(e);
            return;
        }
    };

    UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
    _inherits(UserManager, _OidcClient);

    function UserManager() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
        var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserManager);

        if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
            settings = new _UserManagerSettings.UserManagerSettings(settings);
        }

        var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

        _this._events = new _UserManagerEvents.UserManagerEvents(settings);
        _this._silentRenewService = new SilentRenewServiceCtor(_this);

        // order is important for the following properties; these services depend upon the events.
        if (_this.settings.automaticSilentRenew) {
            _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
            _this.startSilentRenew();
        }

        if (_this.settings.monitorSession) {
            _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
            _this._sessionMonitor = new SessionMonitorCtor(_this);
        }

        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
        _this._tokenClient = new TokenClientCtor(_this._settings);
        _this._joseUtil = joseUtil;
        return _this;
    }

    UserManager.prototype.getUser = function getUser() {
        var _this2 = this;

        return this._loadUser().then(function (user) {
            if (user) {
                _Log.Log.info("UserManager.getUser: user loaded");

                _this2._events.load(user, false);

                return user;
            } else {
                _Log.Log.info("UserManager.getUser: user not found in storage");
                return null;
            }
        });
    };

    UserManager.prototype.removeUser = function removeUser() {
        var _this3 = this;

        return this.storeUser(null).then(function () {
            _Log.Log.info("UserManager.removeUser: user removed from storage");
            _this3._events.unload();
        });
    };

    UserManager.prototype.signinRedirect = function signinRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:r";
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signinRedirect: successful");
        });
    };

    UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
        return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
            if (user.profile && user.profile.sub) {
                _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
            } else {
                _Log.Log.info("UserManager.signinRedirectCallback: no sub");
            }

            return user;
        });
    };

    UserManager.prototype.signinPopup = function signinPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:p";
        var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
            return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.display = "popup";

        return this._signin(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopup: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
        return this._signinCallback(url, this._popupNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopupCallback: no sub");
                }
            }

            return user;
        }).catch(function (err) {
            _Log.Log.error( true && err.message);
        });
    };

    UserManager.prototype.signinSilent = function signinSilent() {
        var _this4 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s";
        // first determine if we have a refresh token, or need to use iframe
        return this._loadUser().then(function (user) {
            if (user && user.refresh_token) {
                args.refresh_token = user.refresh_token;
                return _this4._useRefreshToken(args);
            } else {
                args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
                if (user && _this4._settings.validateSubOnSilentRenew) {
                    _Log.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
                    args.current_sub = user.profile.sub;
                }
                return _this4._signinSilentIframe(args);
            }
        });
    };

    UserManager.prototype._useRefreshToken = function _useRefreshToken() {
        var _this5 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
            if (!result) {
                _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
                return Promise.reject("No response returned from token endpoint");
            }
            if (!result.access_token) {
                _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
                return Promise.reject("No access token returned from token endpoint");
            }

            return _this5._loadUser().then(function (user) {
                if (user) {
                    var idTokenValidation = Promise.resolve();
                    if (result.id_token) {
                        idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
                    }

                    return idTokenValidation.then(function () {
                        _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
                        user.id_token = result.id_token;
                        user.access_token = result.access_token;
                        user.refresh_token = result.refresh_token || user.refresh_token;
                        user.expires_in = result.expires_in;

                        return _this5.storeUser(user).then(function () {
                            _this5._events.load(user);
                            return user;
                        });
                    });
                } else {
                    return null;
                }
            });
        });
    };

    UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
        var _this6 = this;

        return this._metadataService.getIssuer().then(function (issuer) {
            return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew).then(function (payload) {
                if (!payload) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
                    return Promise.reject(new Error("Failed to validate id_token"));
                }
                if (payload.sub !== profile.sub) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                    return Promise.reject(new Error("sub in id_token does not match current sub"));
                }
                if (payload.auth_time && payload.auth_time !== profile.auth_time) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                    return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
                }
                if (payload.azp && payload.azp !== profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                    return Promise.reject(new Error("azp in id_token does not match original azp"));
                }
                if (!payload.azp && profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                    return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
                }
            });
        });
    };

    UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = args.prompt || "none";

        return this._signin(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilent: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
        return this._signinCallback(url, this._iframeNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilentCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinCallback = function signinCallback(url) {
        var _this7 = this;

        return this.readSigninResponseState(url).then(function (_ref) {
            var state = _ref.state,
                response = _ref.response;

            if (state.request_type === "si:r") {
                return _this7.signinRedirectCallback(url);
            }
            if (state.request_type === "si:p") {
                return _this7.signinPopupCallback(url);
            }
            if (state.request_type === "si:s") {
                return _this7.signinSilentCallback(url);
            }
            return Promise.reject(new Error("invalid response_type in state"));
        });
    };

    UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
        var _this8 = this;

        return this.readSignoutResponseState(url).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            if (state) {
                if (state.request_type === "so:r") {
                    return _this8.signoutRedirectCallback(url);
                }
                if (state.request_type === "so:p") {
                    return _this8.signoutPopupCallback(url, keepOpen);
                }
                return Promise.reject(new Error("invalid response_type in state"));
            }
            return response;
        });
    };

    UserManager.prototype.querySessionStatus = function querySessionStatus() {
        var _this9 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s"; // this acts like a signin silent
        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = "none";
        args.response_type = args.response_type || this.settings.query_status_response_type;
        args.scope = args.scope || "openid";
        args.skipUserInfo = true;

        return this._signinStart(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (navResponse) {
            return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
                _Log.Log.debug("UserManager.querySessionStatus: got signin response");

                if (signinResponse.session_state && signinResponse.profile.sub) {
                    _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                    return {
                        session_state: signinResponse.session_state,
                        sub: signinResponse.profile.sub,
                        sid: signinResponse.profile.sid
                    };
                } else {
                    _Log.Log.info("querySessionStatus successful, user not authenticated");
                }
            }).catch(function (err) {
                if (err.session_state && _this9.settings.monitorAnonymousSession) {
                    if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
                        _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
                        return {
                            session_state: err.session_state
                        };
                    }
                }

                throw err;
            });
        });
    };

    UserManager.prototype._signin = function _signin(args, navigator) {
        var _this10 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this10._signinEnd(navResponse.url, args);
        });
    };

    UserManager.prototype._signinStart = function _signinStart(args, navigator) {
        var _this11 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signinStart: got navigator window handle");

            return _this11.createSigninRequest(args).then(function (signinRequest) {
                _Log.Log.debug("UserManager._signinStart: got signin request");

                navigatorParams.url = signinRequest.url;
                navigatorParams.id = signinRequest.state.id;

                return handle.navigate(navigatorParams);
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signinEnd = function _signinEnd(url) {
        var _this12 = this;

        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.processSigninResponse(url).then(function (signinResponse) {
            _Log.Log.debug("UserManager._signinEnd: got signin response");

            var user = new _User.User(signinResponse);

            if (args.current_sub) {
                if (args.current_sub !== user.profile.sub) {
                    _Log.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
                    return Promise.reject(new Error("login_required"));
                } else {
                    _Log.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
                }
            }

            return _this12.storeUser(user).then(function () {
                _Log.Log.debug("UserManager._signinEnd: user stored");

                _this12._events.load(user);

                return user;
            });
        });
    };

    UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
        _Log.Log.debug("UserManager._signinCallback");
        return navigator.callback(url);
    };

    UserManager.prototype.signoutRedirect = function signoutRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:r";
        var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        if (postLogoutRedirectUri) {
            args.post_logout_redirect_uri = postLogoutRedirectUri;
        }
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signoutRedirect: successful");
        });
    };

    UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
        return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
            _Log.Log.info("UserManager.signoutRedirectCallback: successful");
            return response;
        });
    };

    UserManager.prototype.signoutPopup = function signoutPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:p";
        var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        args.post_logout_redirect_uri = url;
        args.display = "popup";
        if (args.post_logout_redirect_uri) {
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            args.state = args.state || {};
        }

        return this._signout(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function () {
            _Log.Log.info("UserManager.signoutPopup: successful");
        });
    };

    UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
        if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
            keepOpen = url;
            url = null;
        }

        var delimiter = '?';
        return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
            _Log.Log.info("UserManager.signoutPopupCallback: successful");
        });
    };

    UserManager.prototype._signout = function _signout(args, navigator) {
        var _this13 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this13._signoutEnd(navResponse.url);
        });
    };

    UserManager.prototype._signoutStart = function _signoutStart() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this14 = this;

        var navigator = arguments[1];
        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

            return _this14._loadUser().then(function (user) {
                _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

                var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
                return revokePromise.then(function () {

                    var id_token = args.id_token_hint || user && user.id_token;
                    if (id_token) {
                        _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
                        args.id_token_hint = id_token;
                    }

                    return _this14.removeUser().then(function () {
                        _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

                        return _this14.createSignoutRequest(args).then(function (signoutRequest) {
                            _Log.Log.debug("UserManager._signoutStart: got signout request");

                            navigatorParams.url = signoutRequest.url;
                            if (signoutRequest.state) {
                                navigatorParams.id = signoutRequest.state.id;
                            }
                            return handle.navigate(navigatorParams);
                        });
                    });
                });
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signoutEnd = function _signoutEnd(url) {
        return this.processSignoutResponse(url).then(function (signoutResponse) {
            _Log.Log.debug("UserManager._signoutEnd: got signout response");

            return signoutResponse;
        });
    };

    UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
        var _this15 = this;

        return this._loadUser().then(function (user) {
            return _this15._revokeInternal(user, true).then(function (success) {
                if (success) {
                    _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

                    user.access_token = null;
                    user.refresh_token = null;
                    user.expires_at = null;
                    user.token_type = null;

                    return _this15.storeUser(user).then(function () {
                        _Log.Log.debug("UserManager.revokeAccessToken: user stored");
                        _this15._events.load(user);
                    });
                }
            });
        }).then(function () {
            _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
        });
    };

    UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
        var _this16 = this;

        if (user) {
            var access_token = user.access_token;
            var refresh_token = user.refresh_token;

            return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
                return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
                    if (!atSuccess && !rtSuccess) {
                        _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
                    }

                    return atSuccess || rtSuccess;
                });
            });
        }

        return Promise.resolve(false);
    };

    UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
        // check for JWT vs. reference token
        if (!access_token || access_token.indexOf('.') >= 0) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(access_token, required).then(function () {
            return true;
        });
    };

    UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
        if (!refresh_token) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
            return true;
        });
    };

    UserManager.prototype.startSilentRenew = function startSilentRenew() {
        this._silentRenewService.start();
    };

    UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
        this._silentRenewService.stop();
    };

    UserManager.prototype._loadUser = function _loadUser() {
        return this._userStore.get(this._userStoreKey).then(function (storageString) {
            if (storageString) {
                _Log.Log.debug("UserManager._loadUser: user storageString loaded");
                return _User.User.fromStorageString(storageString);
            }

            _Log.Log.debug("UserManager._loadUser: no user storageString");
            return null;
        });
    };

    UserManager.prototype.storeUser = function storeUser(user) {
        if (user) {
            _Log.Log.debug("UserManager.storeUser: storing user");

            var storageString = user.toStorageString();
            return this._userStore.set(this._userStoreKey, storageString);
        } else {
            _Log.Log.debug("storeUser.storeUser: removing user");
            return this._userStore.remove(this._userStoreKey);
        }
    };

    _createClass(UserManager, [{
        key: '_redirectNavigator',
        get: function get() {
            return this.settings.redirectNavigator;
        }
    }, {
        key: '_popupNavigator',
        get: function get() {
            return this.settings.popupNavigator;
        }
    }, {
        key: '_iframeNavigator',
        get: function get() {
            return this.settings.iframeNavigator;
        }
    }, {
        key: '_userStore',
        get: function get() {
            return this.settings.userStore;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._events;
        }
    }, {
        key: '_userStoreKey',
        get: function get() {
            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
        }
    }]);

    return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
    _inherits(UserManagerEvents, _AccessTokenEvents);

    function UserManagerEvents(settings) {
        _classCallCheck(this, UserManagerEvents);

        var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

        _this._userLoaded = new _Event.Event("User loaded");
        _this._userUnloaded = new _Event.Event("User unloaded");
        _this._silentRenewError = new _Event.Event("Silent renew error");
        _this._userSignedIn = new _Event.Event("User signed in");
        _this._userSignedOut = new _Event.Event("User signed out");
        _this._userSessionChanged = new _Event.Event("User session changed");
        return _this;
    }

    UserManagerEvents.prototype.load = function load(user) {
        var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _Log.Log.debug("UserManagerEvents.load");
        _AccessTokenEvents.prototype.load.call(this, user);
        if (raiseEvent) {
            this._userLoaded.raise(user);
        }
    };

    UserManagerEvents.prototype.unload = function unload() {
        _Log.Log.debug("UserManagerEvents.unload");
        _AccessTokenEvents.prototype.unload.call(this);
        this._userUnloaded.raise();
    };

    UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
        this._userLoaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
        this._userLoaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
        this._userUnloaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
        this._userUnloaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
        this._silentRenewError.addHandler(cb);
    };

    UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
        this._silentRenewError.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
        _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    };

    UserManagerEvents.prototype.addUserSignedIn = function addUserSignedIn(cb) {
        this._userSignedIn.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedIn = function removeUserSignedIn(cb) {
        this._userSignedIn.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedIn = function _raiseUserSignedIn() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedIn");
        this._userSignedIn.raise();
    };

    UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
        this._userSignedOut.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
        this._userSignedOut.raise();
    };

    UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
        this._userSessionChanged.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged() {
        _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
        this._userSessionChanged.raise();
    };

    return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
    _inherits(UserManagerSettings, _OidcClientSettings);

    function UserManagerSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            popup_redirect_uri = _ref.popup_redirect_uri,
            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
            popupWindowFeatures = _ref.popupWindowFeatures,
            popupWindowTarget = _ref.popupWindowTarget,
            silent_redirect_uri = _ref.silent_redirect_uri,
            silentRequestTimeout = _ref.silentRequestTimeout,
            _ref$automaticSilentR = _ref.automaticSilentRenew,
            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
            _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
            validateSubOnSilentRenew = _ref$validateSubOnSil === undefined ? false : _ref$validateSubOnSil,
            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
            _ref$monitorSession = _ref.monitorSession,
            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
            _ref$monitorAnonymous = _ref.monitorAnonymousSession,
            monitorAnonymousSession = _ref$monitorAnonymous === undefined ? false : _ref$monitorAnonymous,
            _ref$checkSessionInte = _ref.checkSessionInterval,
            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
            _ref$stopCheckSession = _ref.stopCheckSessionOnError,
            stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
            query_status_response_type = _ref.query_status_response_type,
            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$redirectNavigato = _ref.redirectNavigator,
            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
            _ref$popupNavigator = _ref.popupNavigator,
            popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
            _ref$iframeNavigator = _ref.iframeNavigator,
            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
            _ref$userStore = _ref.userStore,
            userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

        _classCallCheck(this, UserManagerSettings);

        var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

        _this._popup_redirect_uri = popup_redirect_uri;
        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        _this._popupWindowFeatures = popupWindowFeatures;
        _this._popupWindowTarget = popupWindowTarget;

        _this._silent_redirect_uri = silent_redirect_uri;
        _this._silentRequestTimeout = silentRequestTimeout;
        _this._automaticSilentRenew = automaticSilentRenew;
        _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        _this._monitorSession = monitorSession;
        _this._monitorAnonymousSession = monitorAnonymousSession;
        _this._checkSessionInterval = checkSessionInterval;
        _this._stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) {
            _this._query_status_response_type = query_status_response_type;
        } else if (arguments[0] && arguments[0].response_type) {
            _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        } else {
            _this._query_status_response_type = "id_token";
        }
        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

        _this._redirectNavigator = redirectNavigator;
        _this._popupNavigator = popupNavigator;
        _this._iframeNavigator = iframeNavigator;

        _this._userStore = userStore;
        return _this;
    }

    _createClass(UserManagerSettings, [{
        key: 'popup_redirect_uri',
        get: function get() {
            return this._popup_redirect_uri;
        }
    }, {
        key: 'popup_post_logout_redirect_uri',
        get: function get() {
            return this._popup_post_logout_redirect_uri;
        }
    }, {
        key: 'popupWindowFeatures',
        get: function get() {
            return this._popupWindowFeatures;
        }
    }, {
        key: 'popupWindowTarget',
        get: function get() {
            return this._popupWindowTarget;
        }
    }, {
        key: 'silent_redirect_uri',
        get: function get() {
            return this._silent_redirect_uri;
        }
    }, {
        key: 'silentRequestTimeout',
        get: function get() {
            return this._silentRequestTimeout;
        }
    }, {
        key: 'automaticSilentRenew',
        get: function get() {
            return this._automaticSilentRenew;
        }
    }, {
        key: 'validateSubOnSilentRenew',
        get: function get() {
            return this._validateSubOnSilentRenew;
        }
    }, {
        key: 'includeIdTokenInSilentRenew',
        get: function get() {
            return this._includeIdTokenInSilentRenew;
        }
    }, {
        key: 'accessTokenExpiringNotificationTime',
        get: function get() {
            return this._accessTokenExpiringNotificationTime;
        }
    }, {
        key: 'monitorSession',
        get: function get() {
            return this._monitorSession;
        }
    }, {
        key: 'monitorAnonymousSession',
        get: function get() {
            return this._monitorAnonymousSession;
        }
    }, {
        key: 'checkSessionInterval',
        get: function get() {
            return this._checkSessionInterval;
        }
    }, {
        key: 'stopCheckSessionOnError',
        get: function get() {
            return this._stopCheckSessionOnError;
        }
    }, {
        key: 'query_status_response_type',
        get: function get() {
            return this._query_status_response_type;
        }
    }, {
        key: 'revokeAccessTokenOnSignout',
        get: function get() {
            return this._revokeAccessTokenOnSignout;
        }
    }, {
        key: 'redirectNavigator',
        get: function get() {
            return this._redirectNavigator;
        }
    }, {
        key: 'popupNavigator',
        get: function get() {
            return this._popupNavigator;
        }
    }, {
        key: 'iframeNavigator',
        get: function get() {
            return this._iframeNavigator;
        }
    }, {
        key: 'userStore',
        get: function get() {
            return this._userStore;
        }
    }]);

    return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
    function WebStorageStateStore() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
            _ref$store = _ref.store,
            store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

        _classCallCheck(this, WebStorageStateStore);

        this._store = store;
        this._prefix = prefix;
    }

    WebStorageStateStore.prototype.set = function set(key, value) {
        _Log.Log.debug("WebStorageStateStore.set", key);

        key = this._prefix + key;

        this._store.setItem(key, value);

        return Promise.resolve();
    };

    WebStorageStateStore.prototype.get = function get(key) {
        _Log.Log.debug("WebStorageStateStore.get", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.remove = function remove(key) {
        _Log.Log.debug("WebStorageStateStore.remove", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);
        this._store.removeItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
        _Log.Log.debug("WebStorageStateStore.getAllKeys");

        var keys = [];

        for (var index = 0; index < this._store.length; index++) {
            var key = this._store.key(index);

            if (key.indexOf(this._prefix) === 0) {
                keys.push(key.substr(this._prefix.length));
            }
        }

        return Promise.resolve(keys);
    };

    return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsbn = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");

var _jsbn2 = _interopRequireDefault(_jsbn);

var _sha = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");

var _sha2 = _interopRequireDefault(_sha);

var _base64Js = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var _base64Js2 = _interopRequireDefault(_base64Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigInteger = _jsbn2.default.BigInteger;

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

var Base64 = {
    b64tohex: function b64tohex(s) {
        var ret = "";
        var i;
        var k = 0; // b64 state, 0-3
        var slop;
        for (i = 0; i < s.length; ++i) {
            if (s.charAt(i) === b64pad) break;
            var v = b64map.indexOf(s.charAt(i));
            if (v < 0) continue;
            if (k === 0) {
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 1;
            } else if (k === 1) {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                slop = v & 0xf;
                k = 2;
            } else if (k === 2) {
                ret += String.fromCharCode(slop);
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 3;
            } else {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                ret += String.fromCharCode(v & 0xf);
                k = 0;
            }
        }
        if (k === 1) ret += String.fromCharCode(slop << 2);
        return ret;
    },
    hexToBase64: function hexToBase64(h) {
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 === h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 === h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        if (b64pad) while ((ret.length & 3) > 0) {
            ret += b64pad;
        }return ret;
    },
    padding: function padding(str) {
        var mod = str.length % 4;
        var pad = 4 - mod;

        if (mod === 0) {
            return str;
        }

        return str + new Array(1 + pad).join('=');
    },
    byteArrayToHex: function byteArrayToHex(raw) {
        var HEX = '';

        for (var i = 0; i < raw.length; i++) {
            var _hex = raw[i].toString(16);
            HEX += _hex.length === 2 ? _hex : '0' + _hex;
        }

        return HEX;
    },
    decodeToHEX: function decodeToHEX(str) {
        return Base64.byteArrayToHex(_base64Js2.default.toByteArray(Base64.padding(str)));
    },
    base64ToBase64Url: function base64ToBase64Url(s) {
        s = s.replace(/=/g, "");
        s = s.replace(/\+/g, "-");
        s = s.replace(/\//g, "_");
        return s;
    },
    urlDecode: function urlDecode(str) {
        str = str.replace(/-/g, '+') // Convert '-' to '+'
        .replace(/_/g, '/') // Convert '_' to '/'
        .replace(/\s/g, ' '); // Convert '\s' to ' '

        return atob(str);
    }
};

var DigestInfoHead = {
    sha1: '3021300906052b0e03021a05000414',
    sha224: '302d300d06096086480165030402040500041c',
    sha256: '3031300d060960864801650304020105000420',
    sha384: '3041300d060960864801650304020205000430',
    sha512: '3051300d060960864801650304020305000440',
    md2: '3020300c06082a864886f70d020205000410',
    md5: '3020300c06082a864886f70d020505000410',
    ripemd160: '3021300906052b2403020105000414'
};

var DigestAlgs = {
    sha256: _sha2.default,
    SHA256: _sha2.default
};

function RSAVerifier(modulus, exp) {
    this.n = null;
    this.e = 0;

    if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
        this.n = new BigInteger(modulus, 16);
        this.e = parseInt(exp, 16);
    } else {
        throw new Error('Invalid key data');
    }
}

function getAlgorithmFromDigest(hDigestInfo) {
    for (var algName in DigestInfoHead) {
        var head = DigestInfoHead[algName];
        var len = head.length;

        if (hDigestInfo.substring(0, len) === head) {
            return {
                alg: algName,
                hash: hDigestInfo.substring(len)
            };
        }
    }
    return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
    encsig = Base64.decodeToHEX(encsig);
    encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');

    var sig = new BigInteger(encsig, 16);

    if (sig.bitLength() > this.n.bitLength()) {
        throw new Error('Signature does not match with the key modulus.');
    }

    var decryptedSig = sig.modPowInt(this.e, this.n);
    var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
    var digestInfo = getAlgorithmFromDigest(digest);

    if (digestInfo.length === 0) {
        return false;
    }

    if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
        throw new Error('Hashing algorithm is not supported.');
    }

    var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
    return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ['RS256'];

var jws = {
    JWS: {
        parse: function parse(token) {
            var parts = token.split('.');
            var header;
            var payload;

            // This diverges from Auth0's implementation, which throws rather than
            // returning undefined
            if (parts.length !== 3) {
                return undefined;
            }

            try {
                header = JSON.parse(Base64.urlDecode(parts[0]));
                payload = JSON.parse(Base64.urlDecode(parts[1]));
            } catch (e) {
                return new Error('Token header or payload is not valid JSON');
            }

            return {
                headerObj: header,
                payloadObj: payload
            };
        },
        verify: function verify(jwt, key) {
            var allowedSigningAlgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            allowedSigningAlgs.forEach(function (alg) {
                if (AllowedSigningAlgs.indexOf(alg) === -1) {
                    throw new Error('Invalid signing algorithm: ' + alg);
                }
            });
            var verify = new RSAVerifier(key.n, key.e);
            var parts = jwt.split('.');

            var headerAndPayload = [parts[0], parts[1]].join('.');
            return verify.verify(headerAndPayload, parts[2]);
        }
    }
};

var KeyUtil = {
    /**
     * Returns decoded keys in Hex format for use in crypto functions.
     * Supports modulus/exponent-style keys.
     *
     * @param {object} key the security key
     * @returns
     */
    getKey: function getKey(key) {
        if (key.kty === 'RSA') {
            return {
                e: Base64.decodeToHEX(key.e),
                n: Base64.decodeToHEX(key.n)
            };
        }

        return null;
    }
};

var X509 = {
    getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
        throw new Error('Not implemented. Use the full oidc-client library if you need support for X509.');
    }
};

var crypto = {
    Util: {
        hashString: function hashString(value, alg) {
            var hashFunc = DigestAlgs[alg];
            return hashFunc(value).toString();
        }
    }
};

function hextob64u(s) {
    if (s.length % 2 === 1) {
        s = '0' + s;
    }
    return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;
exports.jws = jws;
exports.KeyUtil = KeyUtil;
exports.X509 = X509;
exports.crypto = crypto;
exports.hextob64u = hextob64u;
exports.b64tohex = b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;

var _v = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates RFC4122 version 4 guid ()
 */

function random() {
  return (0, _v2.default)().replace(/-/g, '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Version = "1.10.6";exports.Version = Version;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxJbXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9Kb3NlVXRpbFJzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSnNvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkaXJlY3ROYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9uTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWxlbnRSZW5ld1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9rZW5DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXJsVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckluZm9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jcnlwdG8vcnNhLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJWZXJzaW9uIiwiTG9nIiwiT2lkY0NsaWVudCIsIk9pZGNDbGllbnRTZXR0aW5ncyIsIldlYlN0b3JhZ2VTdGF0ZVN0b3JlIiwiSW5NZW1vcnlXZWJTdG9yYWdlIiwiVXNlck1hbmFnZXIiLCJBY2Nlc3NUb2tlbkV2ZW50cyIsIk1ldGFkYXRhU2VydmljZSIsIkNvcmRvdmFQb3B1cE5hdmlnYXRvciIsIkNvcmRvdmFJRnJhbWVOYXZpZ2F0b3IiLCJDaGVja1Nlc3Npb25JRnJhbWUiLCJUb2tlblJldm9jYXRpb25DbGllbnQiLCJTZXNzaW9uTW9uaXRvciIsIkdsb2JhbCIsIlVzZXIiLCJEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsImFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciIsIlRpbWVyIiwiYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIiLCJfYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJfYWNjZXNzVG9rZW5FeHBpcmluZyIsIl9hY2Nlc3NUb2tlbkV4cGlyZWQiLCJsb2FkIiwiY29udGFpbmVyIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc19pbiIsInVuZGVmaW5lZCIsImR1cmF0aW9uIiwiZGVidWciLCJleHBpcmluZyIsImluaXQiLCJjYW5jZWwiLCJleHBpcmVkIiwidW5sb2FkIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmluZyIsImNiIiwiYWRkSGFuZGxlciIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmciLCJyZW1vdmVIYW5kbGVyIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmVkIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkIiwiRGVmYXVsdEludGVydmFsIiwiY2FsbGJhY2siLCJjbGllbnRfaWQiLCJ1cmwiLCJpbnRlcnZhbCIsInN0b3BPbkVycm9yIiwiX2NhbGxiYWNrIiwiX2NsaWVudF9pZCIsIl91cmwiLCJfaW50ZXJ2YWwiLCJfc3RvcE9uRXJyb3IiLCJpZHgiLCJpbmRleE9mIiwiX2ZyYW1lX29yaWdpbiIsInN1YnN0ciIsIl9mcmFtZSIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJfYm91bmRNZXNzYWdlRXZlbnQiLCJfbWVzc2FnZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9yaWdpbiIsInNvdXJjZSIsImNvbnRlbnRXaW5kb3ciLCJkYXRhIiwiZXJyb3IiLCJzdG9wIiwic3RhcnQiLCJzZXNzaW9uX3N0YXRlIiwiX3Nlc3Npb25fc3RhdGUiLCJzZW5kIiwicG9zdE1lc3NhZ2UiLCJfdGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwcmVwYXJlIiwicGFyYW1zIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwIiwiQ29yZG92YVBvcHVwV2luZG93IiwiRGVmYXVsdFBvcHVwRmVhdHVyZXMiLCJEZWZhdWx0UG9wdXBUYXJnZXQiLCJfcHJvbWlzZSIsInJlamVjdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsImZlYXR1cmVzIiwidGFyZ2V0IiwicG9wdXBXaW5kb3dUYXJnZXQiLCJyZWRpcmVjdF91cmkiLCJzdGFydFVybCIsIl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZCIsImNvcmRvdmFNZXRhZGF0YSIsInNvbWUiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuYXZpZ2F0ZSIsIl9lcnJvciIsImNvcmRvdmEiLCJyZXF1aXJlIiwibWV0YWRhdGEiLCJfcG9wdXAiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiX2V4aXRDYWxsYmFja0V2ZW50IiwiX2V4aXRDYWxsYmFjayIsIl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50IiwiX2xvYWRTdGFydENhbGxiYWNrIiwicHJvbWlzZSIsImV2ZW50IiwiX3N1Y2Nlc3MiLCJtZXNzYWdlIiwiX2NsZWFudXAiLCJFcnJvciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVycm9yUmVzcG9uc2UiLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yX3VyaSIsInN0YXRlIiwiRXZlbnQiLCJfbmFtZSIsIl9jYWxsYmFja3MiLCJwdXNoIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInJhaXNlIiwiaSIsImxlbmd0aCIsInRpbWVyIiwiaGFuZGxlIiwidGVzdGluZyIsInJlcXVlc3QiLCJfdGVzdGluZyIsInNldFhNTEh0dHBSZXF1ZXN0IiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJYTUxIdHRwUmVxdWVzdCIsIklGcmFtZU5hdmlnYXRvciIsImZyYW1lIiwiSUZyYW1lV2luZG93Iiwibm90aWZ5UGFyZW50IiwiRGVmYXVsdFRpbWVvdXQiLCJ0aW1lb3V0Iiwic2lsZW50UmVxdWVzdFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIl9vcmlnaW4iLCJmcmFtZUVsZW1lbnQiLCJocmVmIiwicGFyZW50IiwicHJvdG9jb2wiLCJob3N0IiwiX2RhdGEiLCJnZXRJdGVtIiwia2V5Iiwic2V0SXRlbSIsInZhbHVlIiwicmVtb3ZlSXRlbSIsImluZGV4IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEpvc2VVdGlsIiwiandzIiwiS2V5VXRpbCIsIlg1MDkiLCJjcnlwdG8iLCJoZXh0b2I2NHUiLCJiNjR0b2hleCIsIkFsbG93ZWRTaWduaW5nQWxncyIsInBhcnNlSnd0Iiwiand0IiwidG9rZW4iLCJKV1MiLCJwYXJzZSIsImhlYWRlciIsImhlYWRlck9iaiIsInBheWxvYWQiLCJwYXlsb2FkT2JqIiwidmFsaWRhdGVKd3QiLCJpc3N1ZXIiLCJhdWRpZW5jZSIsImNsb2NrU2tldyIsIm5vdyIsInRpbWVJbnNlbnNpdGl2ZSIsImt0eSIsIm4iLCJnZXRLZXkiLCJ4NWMiLCJoZXgiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydEhleCIsImNydiIsIngiLCJ5IiwiSm9zZVV0aWwiLCJfdmFsaWRhdGVKd3QiLCJ2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMiLCJwYXJzZUludCIsIkRhdGUiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsInJlcSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZm91bmQiLCJmaW5kIiwic3RhcnRzV2l0aCIsIkpTT04iLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJwb3N0Rm9ybSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5vcExvZ2dlciIsImluZm8iLCJ3YXJuIiwiTk9ORSIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ2dlciIsImxldmVsIiwicmVzZXQiLCJhcmdzIiwiYXBwbHkiLCJmcm9tIiwiT2lkY01ldGFkYXRhVXJsUGF0aCIsInNldHRpbmdzIiwiSnNvblNlcnZpY2VDdG9yIiwiX3NldHRpbmdzIiwiX2pzb25TZXJ2aWNlIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YVVybCIsImdldElzc3VlciIsIl9nZXRNZXRhZGF0YVByb3BlcnR5IiwiZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50IiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImdldFRva2VuRW5kcG9pbnQiLCJvcHRpb25hbCIsImdldENoZWNrU2Vzc2lvbklmcmFtZSIsImdldEVuZFNlc3Npb25FbmRwb2ludCIsImdldFJldm9jYXRpb25FbmRwb2ludCIsImdldEtleXNFbmRwb2ludCIsImdldFNpZ25pbmdLZXlzIiwic2lnbmluZ0tleXMiLCJqd2tzX3VyaSIsImtleVNldCIsImtleXMiLCJfbWV0YWRhdGFVcmwiLCJhdXRob3JpdHkiLCJjcmVhdGVTaWduaW5SZXF1ZXN0IiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIiwicHJvbXB0IiwibWF4X2FnZSIsInVpX2xvY2FsZXMiLCJpZF90b2tlbl9oaW50IiwibG9naW5faGludCIsImFjcl92YWx1ZXMiLCJyZXNvdXJjZSIsInJlcXVlc3RfdXJpIiwicmVzcG9uc2VfbW9kZSIsImV4dHJhUXVlcnlQYXJhbXMiLCJleHRyYVRva2VuUGFyYW1zIiwicmVxdWVzdF90eXBlIiwic2tpcFVzZXJJbmZvIiwic3RhdGVTdG9yZSIsIlNpZ25pblJlcXVlc3QiLCJpc0NvZGUiLCJfbWV0YWRhdGFTZXJ2aWNlIiwic2lnbmluUmVxdWVzdCIsImNsaWVudF9zZWNyZXQiLCJzaWduaW5TdGF0ZSIsIl9zdGF0ZVN0b3JlIiwic2V0IiwiaWQiLCJ0b1N0b3JhZ2VTdHJpbmciLCJyZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSIsInJlbW92ZVN0YXRlIiwidXNlUXVlcnkiLCJkZWxpbWl0ZXIiLCJyZXNwb25zZSIsIlNpZ25pblJlc3BvbnNlIiwic3RhdGVBcGkiLCJyZW1vdmUiLCJnZXQiLCJzdG9yZWRTdGF0ZVN0cmluZyIsIlNpZ25pblN0YXRlIiwiZnJvbVN0b3JhZ2VTdHJpbmciLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJfdmFsaWRhdG9yIiwidmFsaWRhdGVTaWduaW5SZXNwb25zZSIsImNyZWF0ZVNpZ25vdXRSZXF1ZXN0IiwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiU2lnbm91dFJlcXVlc3QiLCJzaWdub3V0U3RhdGUiLCJyZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUiLCJTaWdub3V0UmVzcG9uc2UiLCJzdGF0ZUtleSIsIlN0YXRlIiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIkRlZmF1bHRSZXNwb25zZVR5cGUiLCJEZWZhdWx0U2NvcGUiLCJEZWZhdWx0U3RhbGVTdGF0ZUFnZSIsIkRlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMiLCJmaWx0ZXJQcm90b2NvbENsYWltcyIsImxvYWRVc2VySW5mbyIsInVzZXJJbmZvSnd0SXNzdWVyIiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfc2VjcmV0IiwiX3Jlc3BvbnNlX3R5cGUiLCJfc2NvcGUiLCJfcmVkaXJlY3RfdXJpIiwiX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wcm9tcHQiLCJfZGlzcGxheSIsIl9tYXhfYWdlIiwiX3VpX2xvY2FsZXMiLCJfYWNyX3ZhbHVlcyIsIl9yZXNvdXJjZSIsIl9yZXNwb25zZV9tb2RlIiwiX2ZpbHRlclByb3RvY29sQ2xhaW1zIiwiX2xvYWRVc2VySW5mbyIsIl9zdGFsZVN0YXRlQWdlIiwiX2Nsb2NrU2tldyIsIl91c2VySW5mb0p3dElzc3VlciIsIl9leHRyYVF1ZXJ5UGFyYW1zIiwiX2V4dHJhVG9rZW5QYXJhbXMiLCJQb3B1cE5hdmlnYXRvciIsIlBvcHVwV2luZG93Iiwia2VlcE9wZW4iLCJub3RpZnlPcGVuZXIiLCJDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwiLCJfY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWQiLCJfaWQiLCJmb2N1cyIsImNsb3NlZCIsIm9wZW5lciIsIlVybFV0aWxpdHkiLCJwYXJzZVVybEZyYWdtZW50IiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJ1c2VSZXBsYWNlVG9OYXZpZ2F0ZSIsInJlcGxhY2UiLCJQcm90b2NvbENsYWltcyIsIlVzZXJJbmZvU2VydmljZUN0b3IiLCJVc2VySW5mb1NlcnZpY2UiLCJqb3NlVXRpbCIsIlRva2VuQ2xpZW50Q3RvciIsIlRva2VuQ2xpZW50IiwiX3VzZXJJbmZvU2VydmljZSIsIl9qb3NlVXRpbCIsIl90b2tlbkNsaWVudCIsIl9wcm9jZXNzU2lnbmluUGFyYW1zIiwiX3ZhbGlkYXRlVG9rZW5zIiwiX3Byb2Nlc3NDbGFpbXMiLCJub25jZSIsImlkX3Rva2VuIiwiY29kZV92ZXJpZmllciIsImNvZGUiLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiX21lcmdlQ2xhaW1zIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJhc3NpZ24iLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidHlwZSIsIl9wcm9jZXNzQ29kZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJleGNoYW5nZUNvZGUiLCJ0b2tlblJlc3BvbnNlIiwiX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsImtpZCIsIl9maWx0ZXJCeUFsZyIsImZpbHRlciIsImF0X2hhc2giLCJoYXNoQWxnIiwiaGFzaEJpdHMiLCJzaGEiLCJoYXNoIiwibGVmdCIsImxlZnRfYjY0dSIsInVzZXJNYW5hZ2VyIiwiQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsIl91c2VyTWFuYWdlciIsIl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiZXZlbnRzIiwiYWRkVXNlckxvYWRlZCIsIl9zdGFydCIsImFkZFVzZXJVbmxvYWRlZCIsIl9zdG9wIiwiZ2V0VXNlciIsInVzZXIiLCJtb25pdG9yQW5vbnltb3VzU2Vzc2lvbiIsInF1ZXJ5U2Vzc2lvblN0YXR1cyIsInRtcFVzZXIiLCJzZXNzaW9uIiwic2lkIiwiY2F0Y2giLCJlcnIiLCJfc3ViIiwiX3NpZCIsIl9jaGVja1Nlc3Npb25JRnJhbWUiLCJfY2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJfc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IiLCJ0aW1lckhhbmRsZSIsInJhaXNlRXZlbnQiLCJfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQiLCJfcmFpc2VVc2VyU2lnbmVkT3V0IiwiX3JhaXNlVXNlclNpZ25lZEluIiwiY2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJzdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsIm9pZGMiLCJpc09pZGMiLCJhZGRRdWVyeVBhcmFtIiwiY29kZV9jaGFsbGVuZ2UiLCJzcGxpdCIsImlzT0F1dGgiLCJPaWRjU2NvcGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc19hdCIsInNjb3BlcyIsImFyZ3VtZW50cyIsIl9ub25jZSIsIl9jb2RlX3ZlcmlmaWVyIiwiX2NvZGVfY2hhbGxlbmdlIiwiX3NraXBVc2VySW5mbyIsInN0cmluZ2lmeSIsImNyZWF0ZWQiLCJzdG9yYWdlU3RyaW5nIiwiU2lsZW50UmVuZXdTZXJ2aWNlIiwiX3Rva2VuRXhwaXJpbmciLCJzaWduaW5TaWxlbnQiLCJfcmFpc2VTaWxlbnRSZW5ld0Vycm9yIiwiX2NyZWF0ZWQiLCJfcmVxdWVzdF90eXBlIiwic3RvcmFnZSIsImFnZSIsImN1dG9mZiIsImdldEFsbEtleXMiLCJwcm9taXNlcyIsInAiLCJhbGwiLCJUaW1lckR1cmF0aW9uIiwibm93RnVuYyIsIl9ub3dGdW5jIiwiZXhwaXJhdGlvbiIsIl90aW1lckhhbmRsZSIsIl9leHBpcmF0aW9uIiwidGltZXJEdXJhdGlvbiIsImRpZmYiLCJncmFudF90eXBlIiwiZXhjaGFuZ2VSZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiQWNjZXNzVG9rZW5UeXBlSGludCIsIlJlZnJlc2hUb2tlblR5cGVIaW50IiwiX1hNTEh0dHBSZXF1ZXN0Q3RvciIsInJldm9rZSIsInJlcXVpcmVkIiwiX3Jldm9rZSIsInhociIsImdsb2JhbCIsImxhc3RJbmRleE9mIiwicmVnZXgiLCJtIiwiY291bnRlciIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcm9wIiwiX2dldENsYWltc0Zyb21Kd3QiLCJpc3N1ZXJQcm9taXNlIiwiU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciIsIlNlc3Npb25Nb25pdG9yQ3RvciIsIlRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IiLCJVc2VyTWFuYWdlclNldHRpbmdzIiwiX2V2ZW50cyIsIlVzZXJNYW5hZ2VyRXZlbnRzIiwiX3NpbGVudFJlbmV3U2VydmljZSIsImF1dG9tYXRpY1NpbGVudFJlbmV3Iiwic3RhcnRTaWxlbnRSZW5ldyIsIm1vbml0b3JTZXNzaW9uIiwiX3Nlc3Npb25Nb25pdG9yIiwiX3Rva2VuUmV2b2NhdGlvbkNsaWVudCIsIl9sb2FkVXNlciIsInJlbW92ZVVzZXIiLCJzdG9yZVVzZXIiLCJzaWduaW5SZWRpcmVjdCIsIm5hdlBhcmFtcyIsIl9zaWduaW5TdGFydCIsIl9yZWRpcmVjdE5hdmlnYXRvciIsInNpZ25pblJlZGlyZWN0Q2FsbGJhY2siLCJfc2lnbmluRW5kIiwic2lnbmluUG9wdXAiLCJwb3B1cF9yZWRpcmVjdF91cmkiLCJfc2lnbmluIiwiX3BvcHVwTmF2aWdhdG9yIiwic2lnbmluUG9wdXBDYWxsYmFjayIsIl9zaWduaW5DYWxsYmFjayIsIl91c2VSZWZyZXNoVG9rZW4iLCJpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJ2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXciLCJjdXJyZW50X3N1YiIsIl9zaWduaW5TaWxlbnRJZnJhbWUiLCJpZFRva2VuVmFsaWRhdGlvbiIsIl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4iLCJhdXRoX3RpbWUiLCJzaWxlbnRfcmVkaXJlY3RfdXJpIiwiX2lmcmFtZU5hdmlnYXRvciIsInNpZ25pblNpbGVudENhbGxiYWNrIiwic2lnbmluQ2FsbGJhY2siLCJzaWdub3V0Q2FsbGJhY2siLCJzaWdub3V0UmVkaXJlY3RDYWxsYmFjayIsInNpZ25vdXRQb3B1cENhbGxiYWNrIiwicXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJuYXZSZXNwb25zZSIsInNpZ25pblJlc3BvbnNlIiwibmF2aWdhdG9yIiwibmF2aWdhdG9yUGFyYW1zIiwic2lnbm91dFJlZGlyZWN0IiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiX3NpZ25vdXRTdGFydCIsIl9zaWdub3V0RW5kIiwic2lnbm91dFBvcHVwIiwicG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3NpZ25vdXQiLCJyZXZva2VQcm9taXNlIiwicmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJfcmV2b2tlSW50ZXJuYWwiLCJzaWdub3V0UmVxdWVzdCIsInNpZ25vdXRSZXNwb25zZSIsInJldm9rZUFjY2Vzc1Rva2VuIiwic3VjY2VzcyIsIl9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsIiwiX3Jldm9rZVJlZnJlc2hUb2tlbkludGVybmFsIiwiYXRTdWNjZXNzIiwicnRTdWNjZXNzIiwic3RvcFNpbGVudFJlbmV3IiwiX3VzZXJTdG9yZSIsIl91c2VyU3RvcmVLZXkiLCJyZWRpcmVjdE5hdmlnYXRvciIsInBvcHVwTmF2aWdhdG9yIiwiaWZyYW1lTmF2aWdhdG9yIiwidXNlclN0b3JlIiwiX3VzZXJMb2FkZWQiLCJfdXNlclVubG9hZGVkIiwiX3NpbGVudFJlbmV3RXJyb3IiLCJfdXNlclNpZ25lZEluIiwiX3VzZXJTaWduZWRPdXQiLCJfdXNlclNlc3Npb25DaGFuZ2VkIiwicmVtb3ZlVXNlckxvYWRlZCIsInJlbW92ZVVzZXJVbmxvYWRlZCIsImFkZFNpbGVudFJlbmV3RXJyb3IiLCJyZW1vdmVTaWxlbnRSZW5ld0Vycm9yIiwiYWRkVXNlclNpZ25lZEluIiwicmVtb3ZlVXNlclNpZ25lZEluIiwiYWRkVXNlclNpZ25lZE91dCIsInJlbW92ZVVzZXJTaWduZWRPdXQiLCJhZGRVc2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQiLCJEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJzdG9yZSIsIl9wb3B1cF9yZWRpcmVjdF91cmkiLCJfcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3BvcHVwV2luZG93RmVhdHVyZXMiLCJfcG9wdXBXaW5kb3dUYXJnZXQiLCJfc2lsZW50X3JlZGlyZWN0X3VyaSIsIl9zaWxlbnRSZXF1ZXN0VGltZW91dCIsIl9hdXRvbWF0aWNTaWxlbnRSZW5ldyIsIl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXciLCJfaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3IiwiX21vbml0b3JTZXNzaW9uIiwiX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwiX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlIiwiX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0IiwicHJlZml4IiwiX3N0b3JlIiwiX3ByZWZpeCIsIkJpZ0ludGVnZXIiLCJKU0JOIiwiYjY0bWFwIiwiYjY0cGFkIiwiQmFzZTY0IiwicyIsInJldCIsImsiLCJzbG9wIiwiY2hhckF0IiwidiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImhleFRvQmFzZTY0IiwiaCIsImMiLCJzdWJzdHJpbmciLCJwYWRkaW5nIiwic3RyIiwibW9kIiwicGFkIiwiam9pbiIsImJ5dGVBcnJheVRvSGV4IiwicmF3IiwiSEVYIiwiX2hleCIsInRvU3RyaW5nIiwiZGVjb2RlVG9IRVgiLCJiYXNlNjRKcyIsInRvQnl0ZUFycmF5IiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJ1cmxEZWNvZGUiLCJhdG9iIiwiRGlnZXN0SW5mb0hlYWQiLCJzaGExIiwic2hhMjI0Iiwic2hhMjU2Iiwic2hhMzg0Iiwic2hhNTEyIiwibWQyIiwibWQ1IiwicmlwZW1kMTYwIiwiRGlnZXN0QWxncyIsIlNIQTI1NiIsIlJTQVZlcmlmaWVyIiwibW9kdWx1cyIsImdldEFsZ29yaXRobUZyb21EaWdlc3QiLCJoRGlnZXN0SW5mbyIsImFsZ05hbWUiLCJoZWFkIiwibGVuIiwicHJvdG90eXBlIiwibXNnIiwiZW5jc2lnIiwic2lnIiwiYml0TGVuZ3RoIiwiZGVjcnlwdGVkU2lnIiwibW9kUG93SW50IiwiZGlnZXN0IiwiZGlnZXN0SW5mbyIsIm1zZ0hhc2giLCJwYXJ0cyIsImFsbG93ZWRTaWduaW5nQWxncyIsImhlYWRlckFuZFBheWxvYWQiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydFBFTSIsImhhc2hGdW5jIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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S0FBVCxFQUFnQndELEdBQWhCLEVBQXFCO0FBQzdCLGdCQUFJNGQsV0FBV3ZCLFdBQVdyYyxHQUFYLENBQWY7QUFDQSxtQkFBTzRkLFNBQVNwaEIsS0FBVCxFQUFnQjZlLFFBQWhCLEVBQVA7QUFDSDtBQUpDO0FBREssQ0FBZjs7QUFTQSxTQUFTbmUsU0FBVCxDQUFtQjhjLENBQW5CLEVBQXNCO0FBQ2xCLFFBQUlBLEVBQUV6ZixNQUFGLEdBQVcsQ0FBWCxLQUFpQixDQUFyQixFQUF3QjtBQUNwQnlmLFlBQUksTUFBTUEsQ0FBVjtBQUNIO0FBQ0QsV0FBT0QsT0FBTzBCLGlCQUFQLENBQXlCMUIsT0FBT1MsV0FBUCxDQUFtQlIsQ0FBbkIsQ0FBekIsQ0FBUDtBQUNIOztJQUVNN2MsUSxHQUFZNGMsTSxDQUFaNWMsUTtRQUdITCxHLEdBQUFBLEc7UUFDQUMsTyxHQUFBQSxPO1FBQ0FDLEksR0FBQUEsSTtRQUNBQyxNLEdBQUFBLE07UUFDQUMsUyxHQUFBQSxTO1FBQ0FDLFEsR0FBQUEsUTtRQUNBQyxrQixHQUFBQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDL1JvQnlnQixNOztBQU54Qjs7Ozs7O0FBRUE7Ozs7QUFJZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQU8sbUJBQVFyVCxPQUFSLENBQWdCLElBQWhCLEVBQXNCLEVBQXRCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsSUFBTXBaLFVBQVUsUUFBaEIsQyxRQUFrQ0EsTyxHQUFBQSxPIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBWZXJzaW9uLFxuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWwgb2YgT2JqZWN0LmNyZWF0ZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKVxuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uIChtX3cpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV96ID0gMHgzYWRlNjhiMTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXNrID0gMHhmZmZmZmZmZjtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBtX3ogPSAoMHg5MDY5ICogKG1feiAmIDB4RkZGRikgKyAobV96ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKG1feiA8PCAweDEwKSArIG1fdykgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCAvPSAweDEwMDAwMDAwMDtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IC41ID8gMSA6IC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XG5cblx0ICAgICAgICAgICAgICAgIHJjYWNoZSA9IF9yKCkgKiAweDNhZGU2N2I3O1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKSAgICAvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHsgICAgLy8gcmV0ID09IDEsIGRvbid0IGJvdGhlciBzcXVhcmluZyBvciBtdWx0aXBseWluZyBpdFxuICAgICAgICAgIGdbd10uY29weVRvKHIpO1xuICAgICAgICAgIGlzMSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdoaWxlKG4gPiAxKSB7IHouc3FyVG8ocixyMik7IHouc3FyVG8ocjIscik7IG4gLT0gMjsgfVxuICAgICAgICAgIGlmKG4gPiAwKSB6LnNxclRvKHIscjIpOyBlbHNlIHsgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICAgICAgei5tdWxUbyhyMixnW3ddLHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUoaiA+PSAwICYmIChlW2pdJigxPDxpKSkgPT0gMCkge1xuICAgICAgICAgIHouc3FyVG8ocixyMik7IHQgPSByOyByID0gcjI7IHIyID0gdDtcbiAgICAgICAgICBpZigtLWkgPCAwKSB7IGkgPSB0aGlzLkRCLTE7IC0tajsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgZ2NkKHRoaXMsYSkgKEhBQyAxNC41NClcbiAgICBmdW5jdGlvbiBibkdDRChhKSB7XG4gICAgICB2YXIgeCA9ICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgeSA9IChhLnM8MCk/YS5uZWdhdGUoKTphLmNsb25lKCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh5KSA8IDApIHsgdmFyIHQgPSB4OyB4ID0geTsgeSA9IHQ7IH1cbiAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKSwgZyA9IHkuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihnIDwgMCkgcmV0dXJuIHg7XG4gICAgICBpZihpIDwgZykgZyA9IGk7XG4gICAgICBpZihnID4gMCkge1xuICAgICAgICB4LnJTaGlmdFRvKGcseCk7XG4gICAgICAgIHkuclNoaWZ0VG8oZyx5KTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKHguc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIGlmKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB4LnJTaGlmdFRvKGkseCk7XG4gICAgICAgIGlmKChpID0geS5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB5LnJTaGlmdFRvKGkseSk7XG4gICAgICAgIGlmKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICB4LnN1YlRvKHkseCk7XG4gICAgICAgICAgeC5yU2hpZnRUbygxLHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHkuc3ViVG8oeCx5KTtcbiAgICAgICAgICB5LnJTaGlmdFRvKDEseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGcgPiAwKSB5LmxTaGlmdFRvKGcseSk7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBmdW5jdGlvbiBibnBNb2RJbnQobikge1xuICAgICAgaWYobiA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBkID0gdGhpcy5EViVuLCByID0gKHRoaXMuczwwKT9uLTE6MDtcbiAgICAgIGlmKHRoaXMudCA+IDApXG4gICAgICAgIGlmKGQgPT0gMCkgciA9IHRoaXNbMF0lbjtcbiAgICAgICAgZWxzZSBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHIgPSAoZCpyK3RoaXNbaV0pJW47XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAxL3RoaXMgJSBtIChIQUMgMTQuNjEpXG4gICAgZnVuY3Rpb24gYm5Nb2RJbnZlcnNlKG0pIHtcbiAgICAgIHZhciBhYyA9IG0uaXNFdmVuKCk7XG4gICAgICBpZigodGhpcy5pc0V2ZW4oKSAmJiBhYykgfHwgbS5zaWdudW0oKSA9PSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgdmFyIHUgPSBtLmNsb25lKCksIHYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgYSA9IG5idigxKSwgYiA9IG5idigwKSwgYyA9IG5idigwKSwgZCA9IG5idigxKTtcbiAgICAgIHdoaWxlKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICB3aGlsZSh1LmlzRXZlbigpKSB7XG4gICAgICAgICAgdS5yU2hpZnRUbygxLHUpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYS5pc0V2ZW4oKSB8fCAhYi5pc0V2ZW4oKSkgeyBhLmFkZFRvKHRoaXMsYSk7IGIuc3ViVG8obSxiKTsgfVxuICAgICAgICAgICAgYS5yU2hpZnRUbygxLGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFiLmlzRXZlbigpKSBiLnN1YlRvKG0sYik7XG4gICAgICAgICAgYi5yU2hpZnRUbygxLGIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHYuaXNFdmVuKCkpIHtcbiAgICAgICAgICB2LnJTaGlmdFRvKDEsdik7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFjLmlzRXZlbigpIHx8ICFkLmlzRXZlbigpKSB7IGMuYWRkVG8odGhpcyxjKTsgZC5zdWJUbyhtLGQpOyB9XG4gICAgICAgICAgICBjLnJTaGlmdFRvKDEsYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWQuaXNFdmVuKCkpIGQuc3ViVG8obSxkKTtcbiAgICAgICAgICBkLnJTaGlmdFRvKDEsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodS5jb21wYXJlVG8odikgPj0gMCkge1xuICAgICAgICAgIHUuc3ViVG8odix1KTtcbiAgICAgICAgICBpZihhYykgYS5zdWJUbyhjLGEpO1xuICAgICAgICAgIGIuc3ViVG8oZCxiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2LnN1YlRvKHUsdik7XG4gICAgICAgICAgaWYoYWMpIGMuc3ViVG8oYSxjKTtcbiAgICAgICAgICBkLnN1YlRvKGIsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgaWYoZC5jb21wYXJlVG8obSkgPj0gMCkgcmV0dXJuIGQuc3VidHJhY3QobSk7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgZC5hZGRUbyhtLGQpOyBlbHNlIHJldHVybiBkO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIHJldHVybiBkLmFkZChtKTsgZWxzZSByZXR1cm4gZDtcbiAgICB9XG5cbiAgICB2YXIgbG93cHJpbWVzID0gWzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N107XG4gICAgdmFyIGxwbGltID0gKDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtcblxuICAgIC8vIChwdWJsaWMpIHRlc3QgcHJpbWFsaXR5IHdpdGggY2VydGFpbnR5ID49IDEtLjVedFxuICAgIGZ1bmN0aW9uIGJuSXNQcm9iYWJsZVByaW1lKHQpIHtcbiAgICAgIHZhciBpLCB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbG93cHJpbWVzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGlmKHhbMF0gPT0gbG93cHJpbWVzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoeC5pc0V2ZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaSA9IDE7XG4gICAgICB3aGlsZShpIDwgbG93cHJpbWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXSwgaiA9IGkrMTtcbiAgICAgICAgd2hpbGUoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSBtICo9IGxvd3ByaW1lc1tqKytdO1xuICAgICAgICBtID0geC5tb2RJbnQobSk7XG4gICAgICAgIHdoaWxlKGkgPCBqKSBpZihtJWxvd3ByaW1lc1tpKytdID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgZnVuY3Rpb24gYm5wTWlsbGVyUmFiaW4odCkge1xuICAgICAgdmFyIG4xID0gdGhpcy5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoayA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgciA9IG4xLnNoaWZ0UmlnaHQoayk7XG4gICAgICB0ID0gKHQrMSk+PjE7XG4gICAgICBpZih0ID4gbG93cHJpbWVzLmxlbmd0aCkgdCA9IGxvd3ByaW1lcy5sZW5ndGg7XG4gICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAvL1BpY2sgYmFzZXMgYXQgcmFuZG9tLCBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGF0IDJcbiAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTtcbiAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLHRoaXMpO1xuICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICB3aGlsZShqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMix0aGlzKTtcbiAgICAgICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHkuY29tcGFyZVRvKG4xKSAhPSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gYm5wVG9SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvID0gYm5wQml0d2lzZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gYm5wTXVsdGlwbHlVcHBlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmUgPSBibkNsb25lO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlID0gYm5JbnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBibkJ5dGVWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gYm5TaG9ydFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW4gPSBibk1pbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGJuT3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gYm5Yb3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGJuU3VidHJhY3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBibk11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGJuUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2UgPSBibk1vZEludmVyc2U7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gYm5Qb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkID0gYm5HQ0Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG5cbiAgICAvLyBKU0JOLXNwZWNpZmljIGV4dGVuc2lvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGJuU3F1YXJlO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBCYXJyZXR0IGZ1bmN0aW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dCA9IEJhcnJldHRcblxuICAgIC8vIEJpZ0ludGVnZXIgaW50ZXJmYWNlcyBub3QgaW1wbGVtZW50ZWQgaW4ganNibjpcblxuICAgIC8vIEJpZ0ludGVnZXIoaW50IHNpZ251bSwgYnl0ZVtdIG1hZ25pdHVkZSlcbiAgICAvLyBkb3VibGUgZG91YmxlVmFsdWUoKVxuICAgIC8vIGZsb2F0IGZsb2F0VmFsdWUoKVxuICAgIC8vIGludCBoYXNoQ29kZSgpXG4gICAgLy8gbG9uZyBsb25nVmFsdWUoKVxuICAgIC8vIHN0YXRpYyBCaWdJbnRlZ2VyIHZhbHVlT2YobG9uZyB2YWwpXG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cbiAgICAvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG4gICAgLy8gPGJvZHkgb25DbGljaz0ncm5nX3NlZWRfdGltZSgpOycgb25LZXlQcmVzcz0ncm5nX3NlZWRfdGltZSgpOyc+XG4gICAgLy8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cbiAgICB2YXIgcm5nX3N0YXRlO1xuICAgIHZhciBybmdfcG9vbDtcbiAgICB2YXIgcm5nX3BwdHI7XG5cbiAgICAvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfaW50KHgpIHtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDE2KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcbiAgICAgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuICAgIH1cblxuICAgIC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG4gICAgICBybmdfc2VlZF9pbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbiAgICBpZihybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgdmFyIHQ7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJOZXRzY2FwZVwiICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uIDwgXCI1XCIpIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgei5sZW5ndGg7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gei5jaGFyQ29kZUF0KHQpICYgMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHQgPSBNYXRoLmZsb29yKDY1NTM2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuICAgICAgfVxuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICAgIGlmKHJuZ19zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICBybmdfc3RhdGUuaW5pdChybmdfcG9vbCk7XG4gICAgICAgIGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgICAgLy9ybmdfcG9vbCA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgICAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBiYS5sZW5ndGg7ICsraSkgYmFbaV0gPSBybmdfZ2V0X2J5dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG4gICAgU2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXMgPSBybmdfZ2V0X2J5dGVzO1xuXG4gICAgLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG4gICAgZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG4gICAgICB2YXIgaSwgaiwgdDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuICAgICAgICB0aGlzLlNbaV0gPSBpO1xuICAgICAgaiA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcbiAgICAgICAgdCA9IHRoaXMuU1tpXTtcbiAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICB0aGlzLlNbal0gPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQVJDNG5leHQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcbiAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICB0ID0gdGhpcy5TW3RoaXMuaV07XG4gICAgICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG4gICAgfVxuXG4gICAgQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuICAgIC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuICAgIGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbiAgICB9XG5cbiAgICAvLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbiAgICAvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcbiAgICB2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuanNibiA9IHtcbiAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tXG4gICAgICAgIH07XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW1xuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXG4gIF0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vVGltZXIuanMnO1xuXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDsgLy8gc2Vjb25kc1xuXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5FdmVudHMge1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyaW5nXCIpLFxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmVkXCIpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG5cbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZyA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lcjtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkID0gYWNjZXNzVG9rZW5FeHBpcmVkVGltZXI7XG4gICAgfVxuXG4gICAgbG9hZChjb250YWluZXIpIHtcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBldmVudHMgaWYgdGhlcmUncyBhbiBhY2Nlc3MgdG9rZW4gYW5kIGl0IGhhcyBhbiBleHBpcmF0aW9uXG4gICAgICAgIGlmIChjb250YWluZXIuYWNjZXNzX3Rva2VuICYmIGNvbnRhaW5lci5leHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbnRhaW5lci5leHBpcmVzX2luO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogYWNjZXNzIHRva2VuIHByZXNlbnQsIHJlbWFpbmluZyBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSByZWdpc3RlciBleHBpcmluZyBpZiB3ZSBzdGlsbCBoYXZlIHRpbWVcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgICAgICAgICAgICAgIGlmIChleHBpcmluZyA8PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJpbmcgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiByZWdpc3RlcmluZyBleHBpcmluZyB0aW1lciBpbjpcIiwgZXhwaXJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgZXhwaXJpbmcgdGltZXIgYmVjYXNlIHdlJ3JlIHBhc3QgZXhwaXJhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgaXQncyBuZWdhdGl2ZSwgaXQgd2lsbCBzdGlsbCBmaXJlXG4gICAgICAgICAgICBsZXQgZXhwaXJlZCA9IGR1cmF0aW9uICsgMTtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyZWQgdGltZXIgaW46XCIsIGV4cGlyZWQpO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmluaXQoZXhwaXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5sb2FkKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy51bmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBhY2Nlc3MgdG9rZW4gdGltZXJzXCIpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgYWRkQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuXG4gICAgYWRkQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmNvbnN0IERlZmF1bHRJbnRlcnZhbCA9IDIwMDA7XG5cbmV4cG9ydCBjbGFzcyBDaGVja1Nlc3Npb25JRnJhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbCB8fCBEZWZhdWx0SW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuX3N0b3BPbkVycm9yID0gc3RvcE9uRXJyb3I7XG5cbiAgICAgICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCB1cmwuaW5kZXhPZihcIi8vXCIpICsgMik7XG4gICAgICAgIHRoaXMuX2ZyYW1lX29yaWdpbiA9IHVybC5zdWJzdHIoMCwgaWR4KTtcblxuICAgICAgICB0aGlzLl9mcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXG4gICAgICAgIC8vIHNob3RndW4gYXBwcm9hY2hcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSB1cmw7XG4gICAgfVxuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9tZXNzYWdlKGUpIHtcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSB0aGlzLl9mcmFtZV9vcmlnaW4gJiZcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBlcnJvciBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0b3BPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJjaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGNoYW5nZWQgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IFwiICsgZS5kYXRhICsgXCIgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KHNlc3Npb25fc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb25fc3RhdGUgIT09IHNlc3Npb25fc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdGFydFwiKTtcblxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuXG4gICAgICAgICAgICBsZXQgc2VuZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHRoaXMuX2NsaWVudF9pZCArIFwiIFwiICsgdGhpcy5fc2Vzc2lvbl9zdGF0ZSwgdGhpcy5fZnJhbWVfb3JpZ2luKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbm93XG4gICAgICAgICAgICBzZW5kKCk7XG5cbiAgICAgICAgICAgIC8vIGFuZCBzZXR1cCB0aW1lclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc2VuZCwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RvcFwiKTtcblxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgQ29yZG92YVBvcHVwV2luZG93IH0gZnJvbSAnLi9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMnO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyA9ICdoaWRkZW49eWVzJztcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IENvcmRvdmFQb3B1cFdpbmRvdyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IENvcmRvdmFQb3B1cFdpbmRvdyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmNvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sem9vbT1ubyc7XG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwV2luZG93IHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcbiAgICAgICAgdGhpcy50YXJnZXQgPSBwYXJhbXMucG9wdXBXaW5kb3dUYXJnZXQgfHwgRGVmYXVsdFBvcHVwVGFyZ2V0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBwYXJhbXMuc3RhcnRVcmw7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5jdG9yOiByZWRpcmVjdF91cmk6IFwiICsgdGhpcy5yZWRpcmVjdF91cmkpO1xuICAgIH1cblxuICAgIF9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlclwiLCBcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3Nlci5pbmFwcGJyb3dzZXJcIiwgXCJvcmcuYXBhY2hlLmNvcmRvdmEuaW5hcHBicm93c2VyXCJdLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJjb3Jkb3ZhIGlzIHVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29yZG92YU1ldGFkYXRhID0gd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvcGx1Z2luX2xpc3RcIikubWV0YWRhdGE7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQoY29yZG92YU1ldGFkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJJbkFwcEJyb3dzZXIgcGx1Z2luIG5vdCBmb3VuZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9wdXAgPSBjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKHBhcmFtcy51cmwsIHRoaXMudGFyZ2V0LCB0aGlzLmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3B1cCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQgPSB0aGlzLl9leGl0Q2FsbGJhY2suYmluZCh0aGlzKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2xvYWRTdGFydENhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImV4aXRcIiwgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgIH1cblxuICAgIGdldCBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9XG5cbiAgICBfbG9hZFN0YXJ0Q2FsbGJhY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKHRoaXMucmVkaXJlY3RfdXJpKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogZXZlbnQudXJsIH0pO1xuICAgICAgICB9ICAgIFxuICAgIH1cbiAgICBfZXhpdENhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5fZXJyb3IobWVzc2FnZSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICBfc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcblxuICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3c6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBjb3Jkb3ZhIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKXtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogY2xlYW5pbmcgdXAgcG9wdXBcIik7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRzdGFydFwiLCB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFcnJvclJlc3BvbnNlIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHtlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24sIGVycm9yX3VyaSwgc3RhdGUsIHNlc3Npb25fc3RhdGV9PXt9XG4gICAgKSB7XG4gICAgICAgICBpZiAoIWVycm9yKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGVycm9yIHBhc3NlZCB0byBFcnJvclJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXJyb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlcihlcnJvcl9kZXNjcmlwdGlvbiB8fCBlcnJvcik7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gXCJFcnJvclJlc3BvbnNlXCI7XG5cbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gZXJyb3JfdXJpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRIYW5kbGVyKGNiKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICB9XG5cbiAgICByZW1vdmVIYW5kbGVyKGNiKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9jYWxsYmFja3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gY2IpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhaXNlKC4uLnBhcmFtcykge1xuICAgICAgICBMb2cuZGVidWcoXCJFdmVudDogUmFpc2luZyBldmVudDogXCIgKyB0aGlzLl9uYW1lKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpXSguLi5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuY29uc3QgdGltZXIgPSB7XG4gICAgc2V0SW50ZXJ2YWw6IGZ1bmN0aW9uIChjYiwgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGNiLCBkdXJhdGlvbik7XG4gICAgfSxcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgfVxufTtcblxubGV0IHRlc3RpbmcgPSBmYWxzZTtcbmxldCByZXF1ZXN0ID0gbnVsbDtcblxuZXhwb3J0IGNsYXNzIEdsb2JhbCB7XG5cbiAgICBzdGF0aWMgX3Rlc3RpbmcoKSB7XG4gICAgICAgIHRlc3RpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgbG9jYXRpb24oKSB7XG4gICAgICAgIGlmICghdGVzdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBsb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgc2Vzc2lvblN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFhNTEh0dHBSZXF1ZXN0KG5ld1JlcXVlc3QpIHtcbiAgICAgICAgcmVxdWVzdCA9IG5ld1JlcXVlc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgdGltZXIoKSB7XG4gICAgICAgIGlmICghdGVzdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgSUZyYW1lV2luZG93IH0gZnJvbSAnLi9JRnJhbWVXaW5kb3cuanMnO1xuXG5leHBvcnQgY2xhc3MgSUZyYW1lTmF2aWdhdG9yIHtcblxuICAgIHByZXBhcmUocGFyYW1zKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IG5ldyBJRnJhbWVXaW5kb3cocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmcmFtZSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZU5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudCh1cmwpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmNvbnN0IERlZmF1bHRUaW1lb3V0ID0gMTAwMDA7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBwYXJhbXMuc2lsZW50UmVxdWVzdFRpbWVvdXQgfHwgRGVmYXVsdFRpbWVvdXQ7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubmF2aWdhdGU6IFVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl90aW1lb3V0LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUuc3JjID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cblxuICAgIF9zdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3c6IGNsZWFudXBcIik7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lb3V0KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cudGltZW91dFwiKTtcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJGcmFtZSB3aW5kb3cgdGltZWQgb3V0XCIpO1xuICAgIH1cblxuICAgIF9tZXNzYWdlKGUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm1lc3NhZ2VcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyICYmXG4gICAgICAgICAgICBlLm9yaWdpbiA9PT0gdGhpcy5fb3JpZ2luICYmXG4gICAgICAgICAgICBlLnNvdXJjZSA9PT0gdGhpcy5fZnJhbWUuY29udGVudFdpbmRvd1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBlLmRhdGE7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgX29yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50XCIpO1xuICAgICAgICBpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQ6IHBvc3RpbmcgdXJsIG1lc3NhZ2UgdG8gcGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UodXJsLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICAgIH1cblxuICAgIHNldEl0ZW0oa2V5LCB2YWx1ZSl7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5zZXRJdGVtXCIsIGtleSk7XG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnJlbW92ZUl0ZW1cIiwga2V5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xuICAgIH1cblxuICAgIGtleShpbmRleCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSlbaW5kZXhdO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pIHtcbiAgICByZXR1cm4gY2xhc3MgSm9zZVV0aWwge1xuXG4gICAgICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnBhcnNlSnd0XCIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3MuSldTLnBhcnNlKGp3dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0b2tlbi5oZWFkZXJPYmosXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRPYmpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dFwiKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gXCJSU0FcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lng1YyAmJiBrZXkueDVjLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IGI2NHRvaGV4KGtleS54NWNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gWDUwOS5nZXRQdWJsaWNLZXlGcm9tQ2VydEhleChoZXgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuY3J2ICYmIGtleS54ICYmIGtleS55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IEVDIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVDIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogVW5zdXBwb3J0ZWQga2V5IHR5cGVcIiwga2V5ICYmIGtleS5rdHkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHZhbGlkYXRlSnd0QXR0cmlidXRlcyhqd3QsIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcbiAgICAgICAgICAgIGlmICghY2xvY2tTa2V3KSB7XG4gICAgICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFub3cpIHtcbiAgICAgICAgICAgICAgICBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0gSm9zZVV0aWwucGFyc2VKd3Qoand0KS5wYXlsb2FkO1xuXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaXNzdWVyIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuaXNzICE9PSBpc3N1ZXIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IEludmFsaWQgaXNzdWVyIGluIHRva2VuXCIsIHBheWxvYWQuaXNzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5pc3MpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogYXVkIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1ZCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWxpZEF1ZGllbmNlID0gcGF5bG9hZC5hdWQgPT09IGF1ZGllbmNlIHx8IChBcnJheS5pc0FycmF5KHBheWxvYWQuYXVkKSAmJiBwYXlsb2FkLmF1ZC5pbmRleE9mKGF1ZGllbmNlKSA+PSAwKTtcbiAgICAgICAgICAgIGlmICghdmFsaWRBdWRpZW5jZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXVkaWVuY2UgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5hdWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gYXVkaWVuY2UpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IEludmFsaWQgYXpwIGluIHRva2VuXCIsIHBheWxvYWQuYXpwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhenAgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5henApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aW1lSW5zZW5zaXRpdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XG4gICAgICAgICAgICAgICAgdmFyIHVwcGVyTm93ID0gbm93IC0gY2xvY2tTa2V3O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXJOb3cgPCBwYXlsb2FkLmlhdCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQuaWF0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQuaWF0KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBuYmYgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLm5iZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLm5iZikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5leHApIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXhwIDwgdXBwZXJOb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgaXMgaW4gdGhlIHBhc3RcIiwgcGF5bG9hZC5leHApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIGlzIGluIHRoZSBwYXN0OlwiICsgcGF5bG9hZC5leHApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGF5bG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBKb3NlVXRpbC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoand0LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKS50aGVuKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghandzLkpXUy52ZXJpZnkoand0LCBrZXksIEFsbG93ZWRTaWduaW5nQWxncykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogc2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihlICYmIGUubWVzc2FnZSB8fCBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgaGFzaFN0cmluZyh2YWx1ZSwgYWxnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uVXRpbC5oYXNoU3RyaW5nKHZhbHVlLCBhbGcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBoZXhUb0Jhc2U2NFVybCh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0gZnJvbSAnLi9jcnlwdG8vcnNhJztcbmltcG9ydCBnZXRKb3NlVXRpbCBmcm9tICcuL0pvc2VVdGlsSW1wbCc7XG5cbmV4cG9ydCBjb25zdCBKb3NlVXRpbCA9IGdldEpvc2VVdGlsKHsgandzLCBLZXlVdGlsLCBYNTA5LCBjcnlwdG8sIGhleHRvYjY0dSwgYjY0dG9oZXgsIEFsbG93ZWRTaWduaW5nQWxncyB9KTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiLi9FcnJvclJlc3BvbnNlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBKc29uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZW50VHlwZXMgPSBudWxsLCBcbiAgICAgICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBcbiAgICAgICAgand0SGFuZGxlciA9IG51bGxcbiAgICApIHtcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gYWRkaXRpb25hbENvbnRlbnRUeXBlcy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgaWYgKGp3dEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qd3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX1hNTEh0dHBSZXF1ZXN0ID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xuICAgICAgICB0aGlzLl9qd3RIYW5kbGVyID0gand0SGFuZGxlcjtcbiAgICB9XG5cbiAgICBnZXRKc29uKHVybCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKCF1cmwpe1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb24sIHVybDogXCIsIHVybCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XG5cbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xuICAgICAgICAgICAgdmFyIGp3dEhhbmRsZXIgPSB0aGlzLl9qd3RIYW5kbGVyO1xuXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHJlcS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCA9PSBcImFwcGxpY2F0aW9uL2p3dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgand0SGFuZGxlcihyZXEpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgQ29udGVudC1UeXBlOiBcIiArIGNvbnRlbnRUeXBlICsgXCIsIGZyb20gVVJMOiBcIiArIHVybCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmVxLnN0YXR1cyArIFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBuZXR3b3JrIGVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogdG9rZW4gcGFzc2VkLCBzZXR0aW5nIEF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9zdEZvcm0odXJsLCBwYXlsb2FkKSB7XG4gICAgICAgIGlmICghdXJsKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UucG9zdEZvcm0sIHVybDogXCIsIHVybCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oJ1BPU1QnLCB1cmwpO1xuXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcblxuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gcmVxLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gYWxsb3dlZENvbnRlbnRUeXBlcy5maW5kKGl0ZW09PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgQ29udGVudC1UeXBlOiBcIiArIGNvbnRlbnRUeXBlICsgXCIsIGZyb20gVVJMOiBcIiArIHVybCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDQwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yUmVzcG9uc2UocGF5bG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmVxLnN0YXR1cyArIFwiKVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBuZXR3b3JrIGVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGF5bG9hZCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGF5bG9hZFtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBcIiZcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCI9XCI7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgcmVxLnNlbmQoYm9keSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmxldCBub3BMb2dnZXIgPSB7XG4gICAgZGVidWcoKXt9LFxuICAgIGluZm8oKXt9LFxuICAgIHdhcm4oKXt9LFxuICAgIGVycm9yKCl7fVxufTtcblxuY29uc3QgTk9ORSA9IDA7XG5jb25zdCBFUlJPUiA9IDE7XG5jb25zdCBXQVJOID0gMjtcbmNvbnN0IElORk8gPSAzO1xuY29uc3QgREVCVUcgPSA0O1xuXG5sZXQgbG9nZ2VyO1xubGV0IGxldmVsO1xuXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xuICAgIHN0YXRpYyBnZXQgRVJST1IoKSB7cmV0dXJuIEVSUk9SfTtcbiAgICBzdGF0aWMgZ2V0IFdBUk4oKSB7cmV0dXJuIFdBUk59O1xuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XG4gICAgc3RhdGljIGdldCBERUJVRygpIHtyZXR1cm4gREVCVUd9O1xuICAgIFxuICAgIHN0YXRpYyByZXNldCgpe1xuICAgICAgICBsZXZlbCA9IElORk87XG4gICAgICAgIGxvZ2dlciA9IG5vcExvZ2dlcjtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldCBsZXZlbCgpe1xuICAgICAgICByZXR1cm4gbGV2ZWw7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQgbGV2ZWwodmFsdWUpe1xuICAgICAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRyl7XG4gICAgICAgICAgICBsZXZlbCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2cgbGV2ZWxcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldCBsb2dnZXIoKXtcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG4gICAgc3RhdGljIHNldCBsb2dnZXIodmFsdWUpe1xuICAgICAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcbiAgICAgICAgICAgIC8vIGp1c3QgdG8gc3RheSBiYWNrd2FyZHMgY29tcGF0LiBjYW4gcmVtb3ZlIGluIDIuMFxuICAgICAgICAgICAgdmFsdWUuZGVidWcgPSB2YWx1ZS5pbmZvO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8gJiYgdmFsdWUud2FybiAmJiB2YWx1ZS5lcnJvcil7XG4gICAgICAgICAgICBsb2dnZXIgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkZWJ1ZyguLi5hcmdzKXtcbiAgICAgICAgaWYgKGxldmVsID49IERFQlVHKXtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zy5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpbmZvKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gSU5GTyl7XG4gICAgICAgICAgICBsb2dnZXIuaW5mby5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YXJuKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gV0FSTil7XG4gICAgICAgICAgICBsb2dnZXIud2Fybi5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBlcnJvciguLi5hcmdzKXtcbiAgICAgICAgaWYgKGxldmVsID49IEVSUk9SKXtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvci5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Mb2cucmVzZXQoKTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XG5cbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gTWV0YWRhdGFTZXJ2aWNlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IoWydhcHBsaWNhdGlvbi9qd2stc2V0K2pzb24nXSk7XG4gICAgfVxuXG4gICAgZ2V0IG1ldGFkYXRhVXJsKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBPaWRjTWV0YWRhdGFVcmxQYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgICB9XG5cbiAgICBnZXRNZXRhZGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IFJldHVybmluZyBtZXRhZGF0YSBmcm9tIHNldHRpbmdzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBnZXR0aW5nIG1ldGFkYXRhIGZyb21cIiwgdGhpcy5tZXRhZGF0YVVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24odGhpcy5tZXRhZGF0YVVybClcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGpzb24gcmVjZWl2ZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJc3N1ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiaXNzdWVyXCIpO1xuICAgIH1cblxuICAgIGdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJhdXRob3JpemF0aW9uX2VuZHBvaW50XCIpO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW5FbmRwb2ludChvcHRpb25hbD10cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidG9rZW5fZW5kcG9pbnRcIiwgb3B0aW9uYWwpO1xuICAgIH1cblxuICAgIGdldENoZWNrU2Vzc2lvbklmcmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJjaGVja19zZXNzaW9uX2lmcmFtZVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRFbmRTZXNzaW9uRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInJldm9jYXRpb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0S2V5c0VuZHBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIsIHRydWUpO1xuICAgIH1cblxuICAgIF9nZXRNZXRhZGF0YVByb3BlcnR5KG5hbWUsIG9wdGlvbmFsPWZhbHNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSgpLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IG1ldGFkYXRhIHJlY2lldmVkXCIpO1xuXG4gICAgICAgICAgICBpZiAobWV0YWRhdGFbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy53YXJuKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IE1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gb3B0aW9uYWwgcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YVtuYW1lXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBSZXR1cm5pbmcgc2lnbmluZ0tleXMgZnJvbSBzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiKS50aGVuKGp3a3NfdXJpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogandrc191cmkgcmVjZWl2ZWRcIiwgandrc191cmkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czoga2V5IHNldCByZWNlaXZlZFwiLCBrZXlTZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IE1pc3Npbmcga2V5cyBvbiBrZXlzZXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcga2V5cyBvbiBrZXlzZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMgPSBrZXlTZXQua2V5cztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gJy4vRXJyb3JSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSAnLi9TaWduaW5SZXF1ZXN0LmpzJztcbmltcG9ydCB7IFNpZ25pblJlc3BvbnNlIH0gZnJvbSAnLi9TaWduaW5SZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBTaWdub3V0UmVxdWVzdCB9IGZyb20gJy4vU2lnbm91dFJlcXVlc3QuanMnO1xuaW1wb3J0IHsgU2lnbm91dFJlc3BvbnNlIH0gZnJvbSAnLi9TaWdub3V0UmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmIChzZXR0aW5ncyBpbnN0YW5jZW9mIE9pZGNDbGllbnRTZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgX3N0YXRlU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnN0YXRlU3RvcmU7XG4gICAgfVxuICAgIGdldCBfdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy52YWxpZGF0b3I7XG4gICAgfVxuICAgIGdldCBfbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0IHNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XG4gICAgICAgIHJlc3BvbnNlX3R5cGUsIHNjb3BlLCByZWRpcmVjdF91cmksXG4gICAgICAgIC8vIGRhdGEgd2FzIG1lYW50IHRvIGJlIHRoZSBwbGFjZSBhIGNhbGxlciBjb3VsZCBpbmRpY2F0ZSB0aGUgZGF0YSB0b1xuICAgICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXG4gICAgICAgIC8vIGFuZCBzbyBub3cgaWYgZGF0YSBpcyBub3QgcGFzc2VkLCBidXQgc3RhdGUgaXMgdGhlbiBzdGF0ZSB3aWxsIGJlIHVzZWRcbiAgICAgICAgZGF0YSwgc3RhdGUsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHNraXBVc2VySW5mbyB9ID0ge30sXG4gICAgICAgIHN0YXRlU3RvcmVcbiAgICApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xuXG4gICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcy5fc2V0dGluZ3Muc2NvcGU7XG4gICAgICAgIHJlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG5cbiAgICAgICAgLy8gaWRfdG9rZW5faGludCwgbG9naW5faGludCBhcmVuJ3QgYWxsb3dlZCBvbiBfc2V0dGluZ3NcbiAgICAgICAgcHJvbXB0ID0gcHJvbXB0IHx8IHRoaXMuX3NldHRpbmdzLnByb21wdDtcbiAgICAgICAgZGlzcGxheSA9IGRpc3BsYXkgfHwgdGhpcy5fc2V0dGluZ3MuZGlzcGxheTtcbiAgICAgICAgbWF4X2FnZSA9IG1heF9hZ2UgfHwgdGhpcy5fc2V0dGluZ3MubWF4X2FnZTtcbiAgICAgICAgdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXMgfHwgdGhpcy5fc2V0dGluZ3MudWlfbG9jYWxlcztcbiAgICAgICAgYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXMgfHwgdGhpcy5fc2V0dGluZ3MuYWNyX3ZhbHVlcztcbiAgICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNvdXJjZTtcbiAgICAgICAgcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZTtcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcbiAgICAgICAgZXh0cmFUb2tlblBhcmFtcyA9IGV4dHJhVG9rZW5QYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFUb2tlblBhcmFtcztcblxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xuXG4gICAgICAgIGlmIChTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSAmJiByZXNwb25zZV90eXBlICE9PSBcImNvZGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3Q6IFJlY2VpdmVkIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcIiwgdXJsKTtcblxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfdHlwZSxcbiAgICAgICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxuICAgICAgICAgICAgICAgIGF1dGhvcml0eSxcbiAgICAgICAgICAgICAgICBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldCxcbiAgICAgICAgICAgICAgICBza2lwVXNlckluZm9cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgc2lnbmluU3RhdGUgPSBzaWduaW5SZXF1ZXN0LnN0YXRlO1xuICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlU3RvcmUuc2V0KHNpZ25pblN0YXRlLmlkLCBzaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XG5cbiAgICAgICAgbGV0IHVzZVF1ZXJ5ID0gdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZSA9PT0gXCJxdWVyeVwiIHx8IFxuICAgICAgICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcbiAgICAgICAgbGV0IGRlbGltaXRlciA9IHVzZVF1ZXJ5ID8gXCI/XCIgOiBcIiNcIjtcblxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN0YXRlIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcblxuICAgICAgICByZXR1cm4gc3RhdGVBcGkocmVzcG9uc2Uuc3RhdGUpLnRoZW4oc3RvcmVkU3RhdGVTdHJpbmcgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9jZXNzU2lnbmluUmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgdHJ1ZSkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lnbm91dFJlcXVlc3Qoe2lkX3Rva2VuX2hpbnQsIGRhdGEsIHN0YXRlLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSB9ID0ge30sXG4gICAgICAgIHN0YXRlU3RvcmVcbiAgICApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdFwiKTtcblxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBObyBlbmQgc2Vzc2lvbiBlbmRwb2ludCB1cmwgcmV0dXJuZWRcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XG5cbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFNpZ25vdXRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgaWRfdG9rZW5faGludCxcbiAgICAgICAgICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcbiAgICAgICAgICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RfdHlwZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzaWdub3V0U3RhdGUgPSByZXF1ZXN0LnN0YXRlO1xuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFNpZ25vdXQgcmVxdWVzdCBoYXMgc3RhdGUgdG8gcGVyc2lzdFwiKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG4gICAgICAgICAgICAgICAgc3RhdGVTdG9yZS5zZXQoc2lnbm91dFN0YXRlLmlkLCBzaWdub3V0U3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZVwiKTtcblxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbm91dFJlc3BvbnNlKHVybCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBzdGF0ZSBpbiByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgTG9nLndhcm4oXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZTogUmVzcG9uc2Ugd2FzIGVycm9yOiBcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt1bmRlZmluZWQsIHJlc3BvbnNlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhdGVLZXkgPSByZXNwb25zZS5zdGF0ZTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgIHZhciBzdGF0ZUFwaSA9IHJlbW92ZVN0YXRlID8gc3RhdGVTdG9yZS5yZW1vdmUuYmluZChzdGF0ZVN0b3JlKSA6IHN0YXRlU3RvcmUuZ2V0LmJpbmQoc3RhdGVTdG9yZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNsZWFyU3RhbGVTdGF0ZVwiKTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgIHJldHVybiBTdGF0ZS5jbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSwgdGhpcy5zZXR0aW5ncy5zdGFsZVN0YXRlQWdlKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xuaW1wb3J0IHsgUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tICcuL1Jlc3BvbnNlVmFsaWRhdG9yLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XG5jb25zdCBEZWZhdWx0U2NvcGUgPSBcIm9wZW5pZFwiO1xuY29uc3QgRGVmYXVsdFN0YWxlU3RhdGVBZ2UgPSA2MCAqIDE1OyAvLyBzZWNvbmRzXG5jb25zdCBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzID0gNjAgKiA1O1xuXG5leHBvcnQgY2xhc3MgT2lkY0NsaWVudFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIC8vIG1ldGFkYXRhIHJlbGF0ZWRcbiAgICAgICAgYXV0aG9yaXR5LCBtZXRhZGF0YVVybCwgbWV0YWRhdGEsIHNpZ25pbmdLZXlzLFxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxuICAgICAgICBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlc3BvbnNlX3R5cGUgPSBEZWZhdWx0UmVzcG9uc2VUeXBlLCBzY29wZSA9IERlZmF1bHRTY29wZSxcbiAgICAgICAgcmVkaXJlY3RfdXJpLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXG4gICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcbiAgICAgICAgc3RhbGVTdGF0ZUFnZSA9IERlZmF1bHRTdGFsZVN0YXRlQWdlLCBjbG9ja1NrZXcgPSBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzLFxuICAgICAgICB1c2VySW5mb0p3dElzc3VlciA9ICdPUCcsXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXG4gICAgICAgIHN0YXRlU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoKSxcbiAgICAgICAgUmVzcG9uc2VWYWxpZGF0b3JDdG9yID0gUmVzcG9uc2VWYWxpZGF0b3IsXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0ge30sXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxuICAgIH0gPSB7fSkge1xuXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSBtZXRhZGF0YVVybDtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcblxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xuICAgICAgICB0aGlzLl9yZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG5cbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fbWF4X2FnZSA9IG1heF9hZ2U7XG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xuICAgICAgICB0aGlzLl9hY3JfdmFsdWVzID0gYWNyX3ZhbHVlcztcbiAgICAgICAgdGhpcy5fcmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSAhIWZpbHRlclByb3RvY29sQ2xhaW1zO1xuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcbiAgICAgICAgdGhpcy5fc3RhbGVTdGF0ZUFnZSA9IHN0YWxlU3RhdGVBZ2U7XG4gICAgICAgIHRoaXMuX2Nsb2NrU2tldyA9IGNsb2NrU2tldztcbiAgICAgICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcblxuICAgICAgICB0aGlzLl9zdGF0ZVN0b3JlID0gc3RhdGVTdG9yZTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcbiAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHR5cGVvZiBleHRyYVRva2VuUGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhVG9rZW5QYXJhbXMgOiB7fTtcbiAgICB9XG5cbiAgICAvLyBjbGllbnQgY29uZmlnXG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgc2V0IGNsaWVudF9pZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudFNldHRpbmdzLnNldF9jbGllbnRfaWQ6IGNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICAgIH1cbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX3R5cGU7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIH1cblxuXG4gICAgLy8gb3B0aW9uYWwgcHJvdG9jb2wgcGFyYW1zXG4gICAgZ2V0IHByb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xuICAgIH1cbiAgICBnZXQgbWF4X2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heF9hZ2U7XG4gICAgfVxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlfbG9jYWxlcztcbiAgICB9XG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3JfdmFsdWVzO1xuICAgIH1cbiAgICBnZXQgcmVzb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcbiAgICB9XG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xuICAgIH1cblxuXG4gICAgLy8gbWV0YWRhdGFcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xuICAgIH1cbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgICB9XG5cbiAgICAvLyBzZXR0YWJsZS9jYWNoYWJsZSBtZXRhZGF0YSB2YWx1ZXNcbiAgICBnZXQgbWV0YWRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgICB9XG4gICAgc2V0IG1ldGFkYXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluZ0tleXM7XG4gICAgfVxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgZ2V0IGZpbHRlclByb3RvY29sQ2xhaW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XG4gICAgfVxuICAgIGdldCBsb2FkVXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XG4gICAgfVxuICAgIGdldCBzdGFsZVN0YXRlQWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcbiAgICB9XG4gICAgZ2V0IGNsb2NrU2tldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcbiAgICB9XG4gICAgZ2V0IHVzZXJJbmZvSnd0SXNzdWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0b3JlO1xuICAgIH1cbiAgICBnZXQgdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgIGdldCBleHRyYVF1ZXJ5UGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcbiAgICB9XG4gICAgc2V0IGV4dHJhUXVlcnlQYXJhbXModmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXh0cmEgdG9rZW4gcGFyYW1zXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVRva2VuUGFyYW1zO1xuICAgIH1cbiAgICBzZXQgZXh0cmFUb2tlblBhcmFtcyh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBQb3B1cFdpbmRvdyB9IGZyb20gJy4vUG9wdXBXaW5kb3cuanMnO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBOYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5jb25zdCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwgPSA1MDA7XG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7Jztcbi8vY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx3aWR0aD01MDAsaGVpZ2h0PTUwMCxsZWZ0PTEwMCx0b3A9MTAwO3Jlc2l6YWJsZT15ZXMnO1xuXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuXG4gICAgICAgIHRoaXMuX3BvcHVwID0gd2luZG93Lm9wZW4oJycsIHRhcmdldCwgZmVhdHVyZXMpO1xuICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyID0gd2luZG93LnNldEludGVydmFsKHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWQuYmluZCh0aGlzKSwgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogbm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lkID0gcGFyYW1zLmlkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHBhcmFtcy5pZF0gPSB0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5fcG9wdXAud2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcblxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gICAgfVxuICAgIF9lcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKGZhbHNlKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cChrZWVwT3Blbikge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jbGVhbnVwXCIpO1xuXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lcik7XG4gICAgICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgZGVsZXRlIHdpbmRvd1tcInBvcHVwQ2FsbGJhY2tfXCIgKyB0aGlzLl9pZF07XG5cbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wdXAgfHwgdGhpcy5fcG9wdXAuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIlBvcHVwIHdpbmRvdyBjbG9zZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKGtlZXBPcGVuKTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2s6IEludmFsaWQgcmVzcG9uc2UgZnJvbSBwb3B1cFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG5vdGlmeU9wZW5lcih1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVuZXIpIHtcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIGRlbGltaXRlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IFwicG9wdXBDYWxsYmFja19cIiArIGRhdGEuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBwYXNzaW5nIHVybCBtZXNzYWdlIHRvIG9wZW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIHN0YXRlIGZvdW5kIGluIHJlc3BvbnNlIHVybFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcblxuICAgIHByZXBhcmUoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZWRpcmVjdE5hdmlnYXRvci5uYXZpZ2F0ZTogTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXJhbXMudXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IFVzZXJJbmZvU2VydmljZSB9IGZyb20gJy4vVXNlckluZm9TZXJ2aWNlLmpzJztcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5cbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VWYWxpZGF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcbiAgICAgICAgam9zZVV0aWwgPSBKb3NlVXRpbCxcbiAgICAgICAgVG9rZW5DbGllbnRDdG9yID0gVG9rZW5DbGllbnQpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIFJlc3BvbnNlVmFsaWRhdG9yXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJJbmZvU2VydmljZSA9IG5ldyBVc2VySW5mb1NlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBzdGF0ZSBwcm9jZXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ2xhaW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IGNsYWltcyBwcm9jZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc1NpZ25pblBhcmFtcyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNsaWVudF9pZCBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlLmF1dGhvcml0eSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgPSBzdGF0ZS5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGF1dGhvcml0eSBpZiB0aGUgYXV0aG9yaXR5IGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICYmIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAhPT0gc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBjbGllbnRfaWQgaWYgdGhlIGNsaWVudF9pZCBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAmJiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgIT09IHN0YXRlLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUubm9uY2UgJiYgcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmNvZGVfdmVyaWZpZXIgJiYgIXJlc3BvbnNlLmNvZGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm90IGV4cGVjdGluZyBjb2RlIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY29kZSBpbiByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnNjb3BlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XG4gICAgICAgICAgICByZXNwb25zZS5zY29wZSA9IHN0YXRlLnNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5pc09wZW5JZENvbm5lY3QpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcblxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc2tpcFVzZXJJbmZvICE9PSB0cnVlICYmIHRoaXMuX3NldHRpbmdzLmxvYWRVc2VySW5mbyAmJiByZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbG9hZGluZyB1c2VyIGluZm9cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9TZXJ2aWNlLmdldENsYWltcyhyZXNwb25zZS5hY2Nlc3NfdG9rZW4pLnRoZW4oY2xhaW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYWltcy5zdWIgIT09IHJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogc3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkLCB1cGRhdGVkIHByb2ZpbGU6XCIsIHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBub3QgbG9hZGluZyB1c2VyIGluZm9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogcmVzcG9uc2UgaXMgbm90IE9JREMsIG5vdCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF9tZXJnZUNsYWltcyhjbGFpbXMxLCBjbGFpbXMyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcblxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGNsYWltczIpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0W25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3VsdFtuYW1lXSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IFtyZXN1bHRbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbHRlclByb3RvY29sQ2xhaW1zKGNsYWltcykge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgY2xhaW1zKTtcblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuX2ZpbHRlclByb3RvY29sQ2xhaW1zKSB7XG4gICAgICAgICAgICBQcm90b2NvbENsYWltcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgY29kZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGlkX3Rva2VuIGFuZCBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogTm8gY29kZSB0byBwcm9jZXNzIG9yIGlkX3Rva2VuIHRvIHZhbGlkYXRlXCIpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc0NvZGUoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgY2xpZW50X2lkOiBzdGF0ZS5jbGllbnRfaWQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBzdGF0ZS5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHN0YXRlLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IHN0YXRlLmNvZGVfdmVyaWZpZXJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3RhdGUuZXh0cmFUb2tlblBhcmFtcyAmJiB0eXBlb2Yoc3RhdGUuZXh0cmFUb2tlblBhcmFtcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHRva2VuUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHByb2Nlc3NpbmcgaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcmV0dXJuaW5nIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcblxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBWYWxpZGFpbmcgSldUIGF0dHJpYnV0ZXM7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhyZXNwb25zZS5pZF90b2tlbiwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmIHN0YXRlLm5vbmNlICE9PSBwYXlsb2FkLm5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHBheWxvYWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBub25jZSBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgand0ID0gdGhpcy5fam9zZVV0aWwucGFyc2VKd3QocmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgIT09IGp3dC5wYXlsb2FkLm5vbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBWYWxpZGFpbmcgSldUOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBqd3QucGF5bG9hZDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2ZpbHRlckJ5QWxnKGtleXMsIGFsZyl7XG4gICAgICAgIHZhciBrdHkgPSBudWxsO1xuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xuXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSwga2V5cy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGF0X2hhc2ggaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIiwgand0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc2hBbGcgPSBqd3QuaGVhZGVyLmFsZztcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc2hCaXRzID0gaGFzaEFsZy5zdWJzdHIoMiwgMyk7XG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcsIGhhc2hCaXRzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzaEJpdHMgPSBwYXJzZUludChoYXNoQml0cyk7XG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hhID0gXCJzaGFcIiArIGhhc2hCaXRzO1xuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xuICAgICAgICBpZiAoIWhhc2gpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBhY2Nlc3NfdG9rZW4gaGFzaCBmYWlsZWQ6XCIsIHNoYSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xuICAgICAgICB2YXIgbGVmdF9iNjR1ID0gdGhpcy5fam9zZVV0aWwuaGV4VG9CYXNlNjRVcmwobGVmdCk7XG4gICAgICAgIGlmIChsZWZ0X2I2NHUgIT09IHJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogc3VjY2Vzc1wiKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uTW9uaXRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcbiAgICAgICAgaWYgKCF1c2VyTWFuYWdlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IuY3RvcjogTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZUN0b3I7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gdGltZXI7XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJMb2FkZWQodGhpcy5fc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIC8vIGRvaW5nIHRoaXMgbWFudWFsbHkgaGVyZSBzaW5jZSBjYWxsaW5nIGdldFVzZXIgXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZSA6IHNlc3Npb24uc2Vzc2lvbl9zdGF0ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFVzZXIucHJvZmlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBfc2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuICAgIGdldCBfY2xpZW50X2lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgIH1cbiAgICBnZXQgX2NoZWNrU2Vzc2lvbkludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgfVxuICAgIGdldCBfc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcbiAgICB9XG5cbiAgICBfc3RhcnQodXNlcikge1xuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgICBpZiAoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YiA9IHVzZXIucHJvZmlsZS5zdWI7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2lkID0gdXNlci5wcm9maWxlLnNpZDtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2lkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbl9zdGF0ZSwgXCIsIGFub255bW91cyB1c2VyXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9jbGllbnRfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUgPSBuZXcgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3Rvcih0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogTm8gY2hlY2sgc2Vzc2lvbiBpZnJhbWUgZm91bmQgaW4gdGhlIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIG5vbi1wcm9taXNlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdG9wKCkge1xuICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3NpZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RvcFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcbiAgICAgICAgICAgIC8vIHVzaW5nIGEgdGltZXIgdG8gZGVsYXkgcmUtaW5pdGlhbGl6YXRpb24gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIGR1cmluZyBzaWdub3V0XG4gICAgICAgICAgICBsZXQgdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvcjogZXJyb3IgZnJvbSBxdWVyeVNlc3Npb25TdGF0dXM6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICB2YXIgcmFpc2VFdmVudCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc3ViID09PSB0aGlzLl9zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFpc2VFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zaWQgPT09IHRoaXMuX3NpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBEaWZmZXJlbnQgc3ViamVjdCBzaWduZWQgaW50byBPUDpcIiwgc2Vzc2lvbi5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZEluKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpZ25pblJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgLy8gbWFuZGF0b3J5XG4gICAgICAgIHVybCwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIHJlc3BvbnNlX3R5cGUsIHNjb3BlLCBhdXRob3JpdHksXG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGUsIGNsaWVudF9zZWNyZXQsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mb1xuICAgIH0pIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWRpcmVjdF91cmlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlc3BvbnNlX3R5cGUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VfdHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHNjb3BlIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2lkYyA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKHJlc3BvbnNlX3R5cGUpO1xuICAgICAgICBsZXQgY29kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2VfbW9kZSkge1xuICAgICAgICAgICAgcmVzcG9uc2VfbW9kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpID8gXCJxdWVyeVwiIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU2lnbmluU3RhdGUoeyBub25jZTogb2lkYywgXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IGNvZGUsIFxuICAgICAgICAgICAgcmVxdWVzdF90eXBlLCByZXNwb25zZV9tb2RlLFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcblxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNsaWVudF9pZFwiLCBjbGllbnRfaWQpO1xuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlc3BvbnNlX3R5cGVcIiwgcmVzcG9uc2VfdHlwZSk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic2NvcGVcIiwgc2NvcGUpO1xuXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgIGlmIChvaWRjKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIiwgXCJTMjU2XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbmFsID0geyBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsIHJlc291cmNlLCByZXF1ZXN0LCByZXF1ZXN0X3VyaSwgcmVzcG9uc2VfbW9kZSB9O1xuICAgICAgICBmb3IobGV0IGtleSBpbiBvcHRpb25hbCl7XG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xuICAgICAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgb3B0aW9uYWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJpZF90b2tlblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT0F1dGgocmVzcG9uc2VfdHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgaXNDb2RlKHJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBcImNvZGVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5jb25zdCBPaWRjU2NvcGUgPSBcIm9wZW5pZFwiO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgZGVsaW1pdGVyID0gXCIjXCIpIHtcblxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgZGVsaW1pdGVyKTtcblxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XG5cbiAgICAgICAgdGhpcy5jb2RlID0gdmFsdWVzLmNvZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHZhbHVlcy5zZXNzaW9uX3N0YXRlO1xuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHZhbHVlcy5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWVzLnNjb3BlO1xuICAgICAgICB0aGlzLnByb2ZpbGUgPSB1bmRlZmluZWQ7IC8vIHdpbGwgYmUgc2V0IGZyb20gUmVzcG9uc2VWYWxpZGF0b3JcblxuICAgICAgICB0aGlzLmV4cGlyZXNfaW4gPSB2YWx1ZXMuZXhwaXJlc19pbjtcbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlc19pbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cGlyZXNfYXQgLSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0IGV4cGlyZXNfaW4odmFsdWUpe1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW5JZENvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5pbmRleE9mKE9pZGNTY29wZSkgPj0gMCB8fCAhIXRoaXMuaWRfdG9rZW47XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpZ25pblN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtub25jZSwgYXV0aG9yaXR5LCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgY29kZV92ZXJpZmllciwgcmVzcG9uc2VfbW9kZSwgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mb30gPSB7fSkge1xuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuXG4gICAgICAgIGlmIChub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25jZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyByYW5kb20oKSBwcm9kdWNlcyAzMiBsZW5ndGhcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZV92ZXJpZmllcikge1xuICAgICAgICAgICAgdGhpcy5fY29kZV92ZXJpZmllciA9IGNvZGVfdmVyaWZpZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvZGVfdmVyaWZpZXIpIHtcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xuICAgICAgICAgICAgdGhpcy5fY29kZV9jaGFsbGVuZ2UgPSBKb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChoYXNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlO1xuICAgICAgICB0aGlzLl9jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IGV4dHJhVG9rZW5QYXJhbXM7XG4gICAgICAgIHRoaXMuX3NraXBVc2VySW5mbyA9IHNraXBVc2VySW5mbztcbiAgICB9XG5cbiAgICBnZXQgbm9uY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcbiAgICB9XG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgICB9XG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcbiAgICB9XG4gICAgZ2V0IGNvZGVfdmVyaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xuICAgIH1cbiAgICBnZXQgY29kZV9jaGFsbGVuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcbiAgICB9XG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xuICAgIH1cbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XG4gICAgfVxuICAgIGdldCBza2lwVXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XG4gICAgfVxuICAgIFxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxuICAgICAgICAgICAgbm9uY2U6IHRoaXMubm9uY2UsXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiB0aGlzLmNvZGVfdmVyaWZpZXIsXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXG4gICAgICAgICAgICBza2lwVXNlckluZm86IHRoaXMuc2tpcFVzZXJJbmZvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIHJldHVybiBuZXcgU2lnbmluU3RhdGUoZGF0YSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHt1cmwsIGlkX3Rva2VuX2hpbnQsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZGF0YSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlfSkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZF90b2tlbl9oaW50KSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImlkX3Rva2VuX2hpbnRcIiwgaWRfdG9rZW5faGludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIGV4dHJhUXVlcnlQYXJhbXNba2V5XSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcblxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpbGVudFJlbmV3U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlcikge1xuICAgICAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayA9IHRoaXMuX3Rva2VuRXhwaXJpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcblxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHRyaWdnZXIgbG9hZGluZyBvZiB0aGUgdXNlciBzbyB0aGUgZXhwaXJpbmcgZXZlbnRzIGNhbiBiZSBpbml0aWFsaXplZFxuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZ2V0VXNlcigpLnRoZW4odXNlcj0+e1xuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMucmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9rZW5FeHBpcmluZygpIHtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuc2lnbmluU2lsZW50KCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogRXJyb3IgZnJvbSBzaWduaW5TaWxlbnQ6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20uanMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpZCwgZGF0YSwgY3JlYXRlZCwgcmVxdWVzdF90eXBlfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQgfHwgcmFuZG9tKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3JlYXRlZCA9PT0gJ251bWJlcicgJiYgY3JlYXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXF1ZXN0X3R5cGUgPSAgcmVxdWVzdF90eXBlO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIGdldCBjcmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcbiAgICB9XG4gICAgZ2V0IHJlcXVlc3RfdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcbiAgICB9XG5cbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xuXG4gICAgICAgIHZhciBjdXRvZmYgPSBEYXRlLm5vdygpIC8gMTAwMCAtIGFnZTtcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGtleXNcIiwga2V5cyk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBzdG9yYWdlLmdldChrZXkpLnRoZW4oaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBnb3QgaXRlbSBmcm9tIGtleTogXCIsIGtleSwgc3RhdGUuY3JlYXRlZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY3JlYXRlZCA8PSBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBubyBpdGVtIGluIHN0b3JhZ2UgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiByZW1vdmVkIGl0ZW0gZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnO1xuXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xuXG5leHBvcnQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lciwgbm93RnVuYyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcblxuICAgICAgICBpZiAobm93RnVuYykge1xuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbm93KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fbm93RnVuYygpKTtcbiAgICB9XG5cbiAgICBpbml0KGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XG5cbiAgICAgICAgdmFyIGV4cGlyYXRpb24gPSB0aGlzLm5vdyArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIHJlaW5pdGlhbGl6ZSB0byBzYW1lIGV4cGlyYXRpb24sIHNvIGJhaWwgb3V0XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIHNraXBwaW5nIGluaXRpYWxpemF0aW9uIHNpbmNlIGFscmVhZHkgaW5pdGlhbGl6ZWQgZm9yIGV4cGlyYXRpb246XCIsIHRoaXMuZXhwaXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgZm9yIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xuXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZVxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXG4gICAgICAgIC8vIHRoZSB0aW1lcnMgZW5kIHVwIGdldHRpbmcgZGVsYXllZC5cbiAgICAgICAgdmFyIHRpbWVyRHVyYXRpb24gPSBUaW1lckR1cmF0aW9uO1xuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lckR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBleHBpcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwaXJhdGlvbjtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRoaXMuX3RpbWVySGFuZGxlKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLl9leHBpcmF0aW9uIC0gdGhpcy5ub3c7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmNhbGxiYWNrOyBcIiArIHRoaXMuX25hbWUgKyBcIiB0aW1lciBleHBpcmVzIGluOlwiLCBkaWZmKTtcblxuICAgICAgICBpZiAodGhpcy5fZXhwaXJhdGlvbiA8PSB0aGlzLm5vdykge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5DbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcigpO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VDb2RlKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjb2RlIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGUgaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXJncy5yZWRpcmVjdF91cmkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmdzLmNvZGVfdmVyaWZpZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlX3ZlcmlmaWVyIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNsaWVudF9pZCBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjbGllbnRfaWQgaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50KGZhbHNlKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICAgICAgYXJncy5jbGllbnRfaWQgPSBhcmdzLmNsaWVudF9pZCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgICAgIGFyZ3MuY2xpZW50X3NlY3JldCA9IGFyZ3MuY2xpZW50X3NlY3JldCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xuXG4gICAgICAgIGlmICghYXJncy5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gcmVmcmVzaF90b2tlbiBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9pZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoZmFsc2UpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBSZWNlaXZlZCB0b2tlbiBlbmRwb2ludFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xuY29uc3QgUmVmcmVzaFRva2VuVHlwZUhpbnQgPSBcInJlZnJlc2hfdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZXR0aW5ncyBwcm92aWRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdEN0b3IgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBObyB0b2tlbiBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IEludmFsaWQgdG9rZW4gdHlwZVwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW4gdHlwZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFJldm9jYXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZva2luZyBcIiArIHR5cGUpO1xuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG5cbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHhoci5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoeGhyLnN0YXR1c1RleHQgKyBcIiAoXCIgKyB4aHIuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7IFxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IE5ldHdvcmsgRXJyb3IuXCIpXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRfc2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBcIiZjbGllbnRfc2VjcmV0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9zZWNyZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbl90eXBlX2hpbnQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodHlwZSk7XG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKTtcblxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICB4aHIuc2VuZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XG4gICAgc3RhdGljIGFkZFF1ZXJ5UGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA8IDApIHtcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgdXJsICs9IFwiJlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdXJsICs9IFwiPVwiO1xuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXJzZVVybEZyYWdtZW50KHZhbHVlLCBkZWxpbWl0ZXIgPSBcIiNcIiwgZ2xvYmFsID0gR2xvYmFsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHZhbHVlID0gZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWR4ID0gdmFsdWUubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBkb2luZyBxdWVyeSwgdGhlbiBzdHJpcCBvZmYgaGFzaCBmcmFnbWVudCBiZWZvcmUgd2UgcGFyc2VcbiAgICAgICAgICAgIGlkeCA9IHZhbHVlLmluZGV4T2YoJyMnKTtcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyYW1zID0ge30sXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXG4gICAgICAgICAgICBtO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKG0gPSByZWdleC5leGVjKHZhbHVlKSkge1xuICAgICAgICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQobVsyXSk7XG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQ6IHJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSBpZF90b2tlbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVzX2luKCkge1xuICAgICAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQgZXhwaXJlc19pbih2YWx1ZSkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cblxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlci50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcbiAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHRoaXMuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgICB0b2tlbl90eXBlOiB0aGlzLnRva2VuX3R5cGUsXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcbiAgICAgICAgICAgIGV4cGlyZXNfYXQ6IHRoaXMuZXhwaXJlc19hdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzZXR0aW5ncywgXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSwgXG4gICAgICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcbiAgICApIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLl9nZXRDbGFpbXNGcm9tSnd0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgfVxuXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IE5vIHRva2VuIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IHJlY2VpdmVkIHVzZXJpbmZvIHVybFwiLCB1cmwpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogY2xhaW1zIHJlY2VpdmVkXCIsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYWltcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0Q2xhaW1zRnJvbUp3dChyZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyIHx8ICFqd3QucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogRmFpbGVkIHRvIHBhcnNlIEpXVFwiLCBqd3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICAgICAgICAgIGxldCBpc3N1ZXJQcm9taXNlO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ09QJzpcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQU5ZJzpcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShqd3QucGF5bG9hZC5pc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFJlY2VpdmVkIGlzc3VlcjpcIiArIGlzc3Vlcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dChyZXEucmVzcG9uc2VUZXh0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tld0luU2Vjb25kcywgdW5kZWZpbmVkLCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBFcnJvciBwYXJzaW5nIEpXVCByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbHRlckJ5QWxnKGtleXMsIGFsZykge1xuICAgICAgICB2YXIga3R5ID0gbnVsbDtcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiUlNBXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJQU1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiRUNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xuXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSAnLi9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlci5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlckV2ZW50cyB9IGZyb20gJy4vVXNlck1hbmFnZXJFdmVudHMuanMnO1xuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xuaW1wb3J0IHsgU2Vzc2lvbk1vbml0b3IgfSBmcm9tICcuL1Nlc3Npb25Nb25pdG9yLmpzJztcbmltcG9ydCB7IFRva2VuUmV2b2NhdGlvbkNsaWVudCB9IGZyb20gJy4vVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gJy4vSm9zZVV0aWwuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlciBleHRlbmRzIE9pZGNDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30sXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXG4gICAgICAgIFNlc3Npb25Nb25pdG9yQ3RvciA9IFNlc3Npb25Nb25pdG9yLFxuICAgICAgICBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yID0gVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcbiAgICAgICAgam9zZVV0aWwgPSBKb3NlVXRpbFxuICAgICkge1xuXG4gICAgICAgIGlmICghKHNldHRpbmdzIGluc3RhbmNlb2YgVXNlck1hbmFnZXJTZXR0aW5ncykpIHtcbiAgICAgICAgICAgIHNldHRpbmdzID0gbmV3IFVzZXJNYW5hZ2VyU2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcblxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2UgPSBuZXcgU2lsZW50UmVuZXdTZXJ2aWNlQ3Rvcih0aGlzKTtcblxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b21hdGljU2lsZW50UmVuZXcpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLmN0b3I6IGF1dG9tYXRpY1NpbGVudFJlbmV3IGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2lsZW50IHJlbmV3XCIpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuY3RvcjogbW9uaXRvclNlc3Npb24gaXMgY29uZmlndXJlZCwgc2V0dGluZyB1cCBzZXNzaW9uIG1vbml0b3JcIik7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uTW9uaXRvciA9IG5ldyBTZXNzaW9uTW9uaXRvckN0b3IodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQgPSBuZXcgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgfVxuXG4gICAgZ2V0IF9yZWRpcmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnBvcHVwTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX2lmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaWZyYW1lTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX3VzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gICAgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIG5vdCBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMudW5sb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblJlZGlyZWN0KGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnJcIjtcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlIDogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBubyBzdWJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5Qb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpwXCI7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLmRpc3BsYXkgPSBcInBvcHVwXCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBzaWduaW5Qb3B1cCBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBubyBzdWJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblBvcHVwQ2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbmluU2lsZW50KGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjtcbiAgICAgICAgLy8gZmlyc3QgZGV0ZXJtaW5lIGlmIHdlIGhhdmUgYSByZWZyZXNoIHRva2VuLCBvciBuZWVkIHRvIHVzZSBpZnJhbWVcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgICAgICAgIGFyZ3MucmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHRoaXMuX3NldHRpbmdzLnZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQsIHN1YmplY3QgcHJpb3IgdG8gc2lsZW50IHJlbmV3OiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU2lsZW50SWZyYW1lKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXNlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW4oYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRUb2tlblZhbGlkYXRpb24gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlblZhbGlkYXRpb24gPSB0aGlzLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4odXNlci5wcm9maWxlLCByZXN1bHQuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkVG9rZW5WYWxpZGF0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogcmVmcmVzaCB0b2tlbiByZXNwb25zZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuYWNjZXNzX3Rva2VuID0gcmVzdWx0LmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IHJlc3VsdC5yZWZyZXNoX3Rva2VuIHx8IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKGlzc3VlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGlkX3Rva2VuLCBpc3N1ZXIsIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCwgdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3KS50aGVuKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5zdWIgIT09IHByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IHN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF1dGhfdGltZSAmJiBwYXlsb2FkLmF1dGhfdGltZSAhPT0gcHJvZmlsZS5hdXRoX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1dGhfdGltZSBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhdXRoX3RpbWVcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhenBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF6cCAmJiBwcm9maWxlLmF6cCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgbm90IGluIGlkX3Rva2VuLCBidXQgcHJlc2VudCBpbiBvcmlnaW5hbCBpZF90b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MucHJvbXB0ID0gYXJncy5wcm9tcHQgfHwgXCJub25lXCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5faWZyYW1lTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFjazogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFjazogbm8gc3ViXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSh1cmwpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6cFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpzXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UmVkaXJlY3RDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxuICAgICAgICBsZXQgdXJsID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLnByb21wdCA9IFwibm9uZVwiO1xuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgYXJncy5zY29wZSA9IGFyZ3Muc2NvcGUgfHwgXCJvcGVuaWRcIjtcbiAgICAgICAgYXJncy5za2lwVXNlckluZm8gPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XG4gICAgICAgIH0pLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKG5hdlJlc3BvbnNlLnVybCkudGhlbihzaWduaW5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUgJiYgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWQ6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc2lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzZnVsLCB1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT0gXCJsb2dpbl9yZXF1aXJlZFwiIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJjb25zZW50X3JlcXVpcmVkXCIgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImFjY291bnRfc2VsZWN0aW9uX3JlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBlcnIuc2Vzc2lvbl9zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKG5hdlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQobmF2UmVzcG9uc2UudXJsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbihoYW5kbGUgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25pblJlcXVlc3QoYXJncykudGhlbihzaWduaW5SZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IGdvdCBzaWduaW4gcmVxdWVzdFwiKTtcblxuICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy51cmwgPSBzaWduaW5SZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWduaW5SZXF1ZXN0LnN0YXRlLmlkO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbmluRW5kKHVybCwgYXJncyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogZ290IHNpZ25pbiByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmN1cnJlbnRfc3ViKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIGRvZXMgbm90IG1hdGNoIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW4uIHN1YiBmcm9tIHNpZ25pbjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibG9naW5fcmVxdWlyZWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIG1hdGNoZXMgdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiB1c2VyIHN0b3JlZFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluQ2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2FsbGJhY2sodXJsKTtcbiAgICB9XG5cbiAgICBzaWdub3V0UmVkaXJlY3QoYXJncyA9IHt9KSB7XG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic286clwiO1xuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmIChwb3N0TG9nb3V0UmVkaXJlY3RVcmkpe1xuICAgICAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0TG9nb3V0UmVkaXJlY3RVcmk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlIDogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLCBuYXZQYXJhbXMpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2s6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcbiAgICAgICAgaWYgKGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKXtcbiAgICAgICAgICAgIC8vIHdlJ3JlIHB1dHRpbmcgYSBkdW1teSBlbnRyeSBpbiBoZXJlIGJlY2F1c2Ugd2VcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB3aW5kb3csIHdoaWNoIGlzIG5lY2Vzc2FyeSBpZiB3ZVxuICAgICAgICAgICAgLy8gcGxhbiB0byByZXR1cm4gYmFjayB0byB0aGUgY2xpZW50IGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIGFyZ3Muc3RhdGUgPSBhcmdzLnN0YXRlIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXQoYXJncywgdGhpcy5fcG9wdXBOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQ6IGFyZ3MucG9wdXBXaW5kb3dUYXJnZXQgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd1RhcmdldFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgICAgICBpZiAodHlwZW9mKGtlZXBPcGVuKSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKHVybCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAga2VlcE9wZW4gPSB1cmw7XG4gICAgICAgICAgICB1cmwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yLmNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRQb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQobmF2UmVzcG9uc2UudXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWdub3V0U3RhcnQoYXJncyA9IHt9LCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGdvdCBuYXZpZ2F0b3Igd2luZG93IGhhbmRsZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBsb2FkZWQgY3VycmVudCB1c2VyIGZyb20gc3RvcmFnZVwiKTtcblxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZva2VQcm9taXNlLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZF90b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogU2V0dGluZyBpZF90b2tlbiBpbnRvIHNpZ25vdXQgcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogdXNlciByZW1vdmVkLCBjcmVhdGluZyBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGdvdCBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWdub3V0UmVxdWVzdC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWdub3V0UmVxdWVzdC5zdGF0ZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IEVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25vdXRFbmQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dEVuZDogZ290IHNpZ25vdXQgcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldm9rZUFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IHJlbW92aW5nIHRva2VuIHByb3BlcnRpZXMgZnJvbSB1c2VyIGFuZCByZS1zdG9yaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuYWNjZXNzX3Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci50b2tlbl90eXBlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogdXNlciBzdG9yZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IGFjY2VzcyB0b2tlbiByZXZva2VkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZUludGVybmFsKHVzZXIsIHJlcXVpcmVkKSB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICB2YXIgYWNjZXNzX3Rva2VuID0gdXNlci5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgICB2YXIgcmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwoYWNjZXNzX3Rva2VuLCByZXF1aXJlZClcbiAgICAgICAgICAgICAgICAudGhlbihhdFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihydFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXRTdWNjZXNzICYmICFydFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIF9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXG4gICAgICAgIGlmICghYWNjZXNzX3Rva2VuIHx8IGFjY2Vzc190b2tlbi5pbmRleE9mKCcuJykgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKS50aGVuKCgpID0+IHRydWUpO1xuICAgIH1cblxuICAgIF9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCkge1xuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQsIFwicmVmcmVzaF90b2tlblwiKS50aGVuKCgpID0+IHRydWUpO1xuICAgIH1cblxuICAgIHN0YXJ0U2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3BTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIGB1c2VyOiR7dGhpcy5zZXR0aW5ncy5hdXRob3JpdHl9OiR7dGhpcy5zZXR0aW5ncy5jbGllbnRfaWR9YDtcbiAgICB9XG5cbiAgICBfbG9hZFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuZ2V0KHRoaXMuX3VzZXJTdG9yZUtleSkudGhlbihzdG9yYWdlU3RyaW5nID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiB1c2VyIHN0b3JhZ2VTdHJpbmcgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IG5vIHVzZXIgc3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXIodXNlcikge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XG5cbiAgICAgICAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gdXNlci50b1N0b3JhZ2VTdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5yZW1vdmUodGhpcy5fdXNlclN0b3JlS2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnO1xuXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIGxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgaW5cIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQgPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBvdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xuICAgIH1cblxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLmxvYWRcIik7XG4gICAgICAgIHN1cGVyLmxvYWQodXNlcik7XG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJhaXNlKHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMudW5sb2FkXCIpO1xuICAgICAgICBzdXBlci51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLnJhaXNlKCk7XG4gICAgfVxuXG4gICAgYWRkVXNlckxvYWRlZChjYikge1xuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyTG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuXG4gICAgYWRkVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3JcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2lnbmVkSW4oY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2lnbmVkSW4oY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICBfcmFpc2VVc2VyU2lnbmVkSW4oKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJhaXNlKCk7XG4gICAgfVxuXG4gICAgYWRkVXNlclNpZ25lZE91dChjYikge1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2lnbmVkT3V0KGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuICAgIF9yYWlzZVVzZXJTaWduZWRPdXQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJhaXNlKCk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgUmVkaXJlY3ROYXZpZ2F0b3IgfSBmcm9tICcuL1JlZGlyZWN0TmF2aWdhdG9yLmpzJztcbmltcG9ydCB7IFBvcHVwTmF2aWdhdG9yIH0gZnJvbSAnLi9Qb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwO1xuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyU2V0dGluZ3MgZXh0ZW5kcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgcG9wdXBfcmVkaXJlY3RfdXJpLFxuICAgICAgICBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgIHBvcHVwV2luZG93VGFyZ2V0LFxuICAgICAgICBzaWxlbnRfcmVkaXJlY3RfdXJpLFxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcbiAgICAgICAgYXV0b21hdGljU2lsZW50UmVuZXcgPSBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gZmFsc2UsXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXG4gICAgICAgIG1vbml0b3JTZXNzaW9uID0gdHJ1ZSxcbiAgICAgICAgbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBmYWxzZSxcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXG4gICAgICAgIHN0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gdHJ1ZSxcbiAgICAgICAgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUsXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxuICAgICAgICByZWRpcmVjdE5hdmlnYXRvciA9IG5ldyBSZWRpcmVjdE5hdmlnYXRvcigpLFxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxuICAgICAgICBpZnJhbWVOYXZpZ2F0b3IgPSBuZXcgSUZyYW1lTmF2aWdhdG9yKCksXG4gICAgICAgIHVzZXJTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSh7IHN0b3JlOiBHbG9iYWwuc2Vzc2lvblN0b3JhZ2UgfSlcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoYXJndW1lbnRzWzBdKTtcblxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcyA9IHBvcHVwV2luZG93RmVhdHVyZXM7XG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XG5cbiAgICAgICAgdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaSA9IHNpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3ID0gYXV0b21hdGljU2lsZW50UmVuZXc7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldztcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XG4gICAgICAgIHRoaXMuX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gbW9uaXRvckFub255bW91c1Nlc3Npb247XG4gICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsID0gY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gICAgICAgIGlmIChxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzWzBdICYmIGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSA/IFwiaWRfdG9rZW5cIiA6IFwiY29kZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBcImlkX3Rva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dDtcblxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xuICAgICAgICB0aGlzLl9wb3B1cE5hdmlnYXRvciA9IHBvcHVwTmF2aWdhdG9yO1xuICAgICAgICB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IgPSBpZnJhbWVOYXZpZ2F0b3I7XG5cbiAgICAgICAgdGhpcy5fdXNlclN0b3JlID0gdXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBwb3B1cF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cFdpbmRvd0ZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICB9XG4gICAgZ2V0IHBvcHVwV2luZG93VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHNpbGVudF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICAgZ2V0IHNpbGVudFJlcXVlc3RUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgfVxuICAgIGdldCBhdXRvbWF0aWNTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcbiAgICB9XG5cbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yU2Vzc2lvbjtcbiAgICB9XG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb247XG4gICAgfVxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsO1xuICAgIH1cbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuICAgIH1cbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgIH1cbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dDtcbiAgICB9XG5cbiAgICBnZXQgcmVkaXJlY3ROYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IHBvcHVwTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBpZnJhbWVOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZnJhbWVOYXZpZ2F0b3I7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XG4gICAgY29uc3RydWN0b3Ioe3ByZWZpeCA9IFwib2lkYy5cIiwgc3RvcmUgPSBHbG9iYWwubG9jYWxTdG9yYWdlfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5zZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuc2V0SXRlbShrZXksIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xuXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgdGhpcy5fc3RvcmUucmVtb3ZlSXRlbShrZXkpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsS2V5cygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0QWxsS2V5c1wiKTtcblxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLl9zdG9yZS5rZXkoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHRoaXMuX3ByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cyk7XG4gICAgfVxufVxuIiwiLypcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXG5odHRwczovL2dpdGh1Yi5jb20vYXV0aDAvaWR0b2tlbi12ZXJpZmllclxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vXG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vTElDRU5TRVxuKi9cblxuLypcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxuICogcmVxdWlyaW5nIHRoZSBmdWxsIGpyc2FzaWduIGZlYXR1cmUgc2V0IChhbmQgcmVzdWx0aW5nIG1hc3NpdmUgYnVuZGxlKS5cbiAqXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcbiAqIC0gUGFyc2UgSldUIHRva2VucyB1c2luZyB0aGUgKG4pIHBhcmFtZXRlci5cbiAqIC0gVmVyaWZ5IHNpZ25hdHVyZSBvZiBpZF90b2tlbnNcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xuICogLSBQZXJmb3JtIGNvbW1vbiBiYXNlNjQgZW5jb2RpbmcvZGVjb2RpbmcgdGFza3MuXG4gKi9cblxuaW1wb3J0IEpTQk4gZnJvbSAnanNibic7XG5pbXBvcnQgU0hBMjU2IGZyb20gJ2NyeXB0by1qcy9zaGEyNTYnO1xuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XG5cbnZhciBCaWdJbnRlZ2VyID0gSlNCTi5CaWdJbnRlZ2VyO1xuXG4vKiEgKGMpIFRvbSBXdSB8IGh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cbiAqL1xudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xudmFyIGI2NHBhZCA9IFwiPVwiO1xuXG5jb25zdCBCYXNlNjQgPSB7XG4gICAgYjY0dG9oZXgocykge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBrID0gMDsgLy8gYjY0IHN0YXRlLCAwLTNcbiAgICAgICAgdmFyIHNsb3A7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09PSBiNjRwYWQpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIHYgPSBiNjRtYXAuaW5kZXhPZihzLmNoYXJBdChpKSk7XG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XG4gICAgICAgICAgICBpZihrID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgICAgICAgICAgayA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDB4ZjtcbiAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoayA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAzO1xuICAgICAgICAgICAgICAgIGsgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiAmIDB4Zik7XG4gICAgICAgICAgICAgICAgayA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoayA9PT0gMSlcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBoZXhUb0Jhc2U2NChoKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgYztcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgIGZvcihpID0gMDsgaSszIDw9IGgubGVuZ3RoOyBpKz0zKSB7XG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzMpLDE2KTtcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaSsxID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XG4gICAgICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjIDw8IDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsyKSwxNik7XG4gICAgICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiNjRwYWQpIHdoaWxlKChyZXQubGVuZ3RoICYgMykgPiAwKSByZXQgKz0gYjY0cGFkO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwYWRkaW5nKHN0cikge1xuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcbiAgICAgICAgdmFyIHBhZCA9IDQgLSBtb2Q7XG5cbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHIgKyAobmV3IEFycmF5KDEgKyBwYWQpKS5qb2luKCc9Jyk7XG4gICAgfSxcblxuICAgIGJ5dGVBcnJheVRvSGV4KHJhdykge1xuICAgICAgICB2YXIgSEVYID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfaGV4ID0gcmF3W2ldLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSEVYO1xuICAgIH0sXG5cbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcbiAgICAgICAgcmV0dXJuIEJhc2U2NC5ieXRlQXJyYXlUb0hleChiYXNlNjRKcy50b0J5dGVBcnJheShCYXNlNjQucGFkZGluZyhzdHIpKSk7XG4gICAgfSxcblxuICAgIGJhc2U2NFRvQmFzZTY0VXJsKHMpIHtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPS9nLCBcIlwiKTtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwvL2csIFwiX1wiKTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHVybERlY29kZShzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcvJykgLy8gQ29udmVydCAnXycgdG8gJy8nXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcgJyk7IC8vIENvbnZlcnQgJ1xccycgdG8gJyAnXG5cbiAgICAgICAgcmV0dXJuIGF0b2Ioc3RyKTtcbiAgICB9XG59O1xuXG5cbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcbiAgICBzaGExOiAnMzAyMTMwMDkwNjA1MmIwZTAzMDIxYTA1MDAwNDE0JyxcbiAgICBzaGEyMjQ6ICczMDJkMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDQwNTAwMDQxYycsXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxuICAgIHNoYTM4NDogJzMwNDEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMjA1MDAwNDMwJyxcbiAgICBzaGE1MTI6ICczMDUxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDMwNTAwMDQ0MCcsXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcbiAgICBtZDU6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjA1MDUwMDA0MTAnLFxuICAgIHJpcGVtZDE2MDogJzMwMjEzMDA5MDYwNTJiMjQwMzAyMDEwNTAwMDQxNCdcbn07XG5cbnZhciBEaWdlc3RBbGdzID0ge1xuICAgIHNoYTI1NjogU0hBMjU2LFxuICAgIFNIQTI1NjpTSEEyNTZcbn07XG5cbmZ1bmN0aW9uIFJTQVZlcmlmaWVyKG1vZHVsdXMsIGV4cCkge1xuICAgIHRoaXMubiA9IG51bGw7XG4gICAgdGhpcy5lID0gMDtcblxuICAgIGlmIChtb2R1bHVzICE9IG51bGwgJiYgZXhwICE9IG51bGwgJiYgbW9kdWx1cy5sZW5ndGggPiAwICYmIGV4cC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcbiAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQoZXhwLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGhEaWdlc3RJbmZvKSB7XG4gICAgZm9yICh2YXIgYWxnTmFtZSBpbiBEaWdlc3RJbmZvSGVhZCkge1xuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xuICAgICAgICB2YXIgbGVuID0gaGVhZC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsZzogYWxnTmFtZSxcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5cblxuUlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChtc2csIGVuY3NpZykge1xuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xuICAgIGVuY3NpZyA9IGVuY3NpZy5yZXBsYWNlKC9bXjAtOWEtZl18W1xcc1xcbl1dL2lnLCAnJyk7XG5cbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XG5cbiAgICBpZiAoc2lnLmJpdExlbmd0aCgpID4gdGhpcy5uLmJpdExlbmd0aCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xuICAgIH1cblxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcbiAgICB2YXIgZGlnZXN0ID0gZGVjcnlwdGVkU2lnLnRvU3RyaW5nKDE2KS5yZXBsYWNlKC9eMWYrMDAvLCAnJyk7XG4gICAgdmFyIGRpZ2VzdEluZm8gPSBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGRpZ2VzdCk7XG5cbiAgICBpZiAoZGlnZXN0SW5mby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xuICAgIHJldHVybiAoZGlnZXN0SW5mby5oYXNoID09PSBtc2dIYXNoKTtcbn07XG5cbmNvbnN0IEFsbG93ZWRTaWduaW5nQWxncyA9IFsnUlMyNTYnXTtcblxuY29uc3QgandzID0ge1xuICAgIEpXUzoge1xuICAgICAgICBwYXJzZTogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyO1xuICAgICAgICAgICAgdmFyIHBheWxvYWQ7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgZGl2ZXJnZXMgZnJvbSBBdXRoMCdzIGltcGxlbWVudGF0aW9uLCB3aGljaCB0aHJvd3MgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHJldHVybmluZyB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1swXSkpO1xuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUb2tlbiBoZWFkZXIgb3IgcGF5bG9hZCBpcyBub3QgdmFsaWQgSlNPTicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxuICAgICAgICAgICAgICAgIHBheWxvYWRPYmo6IHBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB2ZXJpZnk6IGZ1bmN0aW9uKGp3dCwga2V5LCBhbGxvd2VkU2lnbmluZ0FsZ3MgPSBbXSkge1xuICAgICAgICAgICAgYWxsb3dlZFNpZ25pbmdBbGdzLmZvckVhY2goKGFsZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2lnbmluZyBhbGdvcml0aG06ICcgKyBhbGcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHZlcmlmeSA9IG5ldyBSU0FWZXJpZmllcihrZXkubiwga2V5LmUpO1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gand0LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIHZhciBoZWFkZXJBbmRQYXlsb2FkID0gW3BhcnRzWzBdLCBwYXJ0c1sxXV0uam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHZlcmlmeS52ZXJpZnkoaGVhZGVyQW5kUGF5bG9hZCwgcGFydHNbMl0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5jb25zdCBLZXlVdGlsID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxuICAgICAqIFN1cHBvcnRzIG1vZHVsdXMvZXhwb25lbnQtc3R5bGUga2V5cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0S2V5KGtleSkge1xuICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gJ1JTQScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcbiAgICAgICAgICAgICAgICBuOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5Lm4pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59O1xuXG5jb25zdCBYNTA5ID0ge1xuICAgIGdldFB1YmxpY0tleUZyb21DZXJ0UEVNOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuIFVzZSB0aGUgZnVsbCBvaWRjLWNsaWVudCBsaWJyYXJ5IGlmIHlvdSBuZWVkIHN1cHBvcnQgZm9yIFg1MDkuJyk7XG4gICAgfSxcbn07XG5cbmNvbnN0IGNyeXB0byA9IHtcbiAgICBVdGlsOiB7XG4gICAgICAgIGhhc2hTdHJpbmc6IGZ1bmN0aW9uKHZhbHVlLCBhbGcpIHtcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcbiAgICAgICAgICAgIHJldHVybiBoYXNoRnVuYyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xuICAgIGlmIChzLmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgcyA9ICcwJyArIHM7XG4gICAgfVxuICAgIHJldHVybiBCYXNlNjQuYmFzZTY0VG9CYXNlNjRVcmwoQmFzZTY0LmhleFRvQmFzZTY0KHMpKTtcbn1cblxuY29uc3Qge2I2NHRvaGV4fSA9IEJhc2U2NDtcblxuZXhwb3J0IHtcbiAgICBqd3MsXG4gICAgS2V5VXRpbCxcbiAgICBYNTA5LFxuICAgIGNyeXB0byxcbiAgICBoZXh0b2I2NHUsXG4gICAgYjY0dG9oZXgsXG4gICAgQWxsb3dlZFNpZ25pbmdBbGdzXG59O1xuIiwiaW1wb3J0IHV1aWQ0IGZyb20gJ3V1aWQvdjQnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBSRkM0MTIyIHZlcnNpb24gNCBndWlkICgpXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tKCkge1xuICByZXR1cm4gdXVpZDQoKS5yZXBsYWNlKC8tL2csICcnKTtcbn1cbiIsImNvbnN0IFZlcnNpb24gPSBcIjEuMTAuNlwiOyBleHBvcnQge1ZlcnNpb259OyJdLCJzb3VyY2VSb290IjoiIn0=
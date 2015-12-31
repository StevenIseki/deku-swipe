/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _magicVirtualElement = __webpack_require__(2);
	
	var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);
	
	var _deku = __webpack_require__(27);
	
	var _swipe = __webpack_require__(56);
	
	var _swipe2 = _interopRequireDefault(_swipe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = (0, _deku.tree)((0, _magicVirtualElement2.default)(
	  _swipe2.default,
	  { arrows: true, startSlide: 2, speed: 1200, arrowPrev: 'ey prev', arrowNext: 'ey next' },
	  (0, _magicVirtualElement2.default)(
	    'div',
	    null,
	    'slide 0'
	  ),
	  (0, _magicVirtualElement2.default)(
	    'div',
	    null,
	    'slide 1'
	  ),
	  (0, _magicVirtualElement2.default)(
	    'div',
	    null,
	    'slide 2'
	  ),
	  (0, _magicVirtualElement2.default)(
	    'div',
	    null,
	    'another slide'
	  )
	)); /** @jsx dom */
	
	(0, _deku.render)(app, document.getElementById('root'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var toStyle = __webpack_require__(3).string
	var classnames = __webpack_require__(20)
	var element = __webpack_require__(21)
	var type = __webpack_require__(25)
	var slice = __webpack_require__(26)
	
	module.exports = function (t, attributes, children) {
	
	  // Account for JSX putting the children as multiple arguments.
	  // This is essentially just the ES6 rest param
	  if (arguments.length > 2 && Array.isArray(arguments[2]) === false) {
	    children = slice(arguments, 2)
	  }
	
	  var node = element(t, attributes, children)
	
	  if (type(node.attributes.class) === 'array') {
	    node.attributes.class = classnames.apply(null, node.attributes.class)
	  }
	
	  if (type(node.attributes.class) === 'object') {
	    node.attributes.class = classnames(node.attributes.class)
	  }
	
	  if (type(node.attributes.style) === 'object') {
	    node.attributes.style = toStyle(node.attributes.style)
	  }
	
	  return node
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	module.exports = {
	   prefixProperties: __webpack_require__(4) ,
	   cssUnitless: __webpack_require__(5) ,
	   object: __webpack_require__(6),
	   string: __webpack_require__(19)
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	    'border-radius'              : 1,
	    'border-top-left-radius'     : 1,
	    'border-top-right-radius'    : 1,
	    'border-bottom-left-radius'  : 1,
	    'border-bottom-right-radius' : 1,
	    'box-shadow'                 : 1,
	    'order'                      : 1,
	    'flex'                       : function(name, prefix){
	        return [prefix + 'box-flex']
	    },
	    'box-flex'                   : 1,
	    'box-align'                  : 1,
	    'animation'                  : 1,
	    'animation-duration'         : 1,
	    'animation-name'             : 1,
	    'transition'                 : 1,
	    'transition-duration'        : 1,
	    'transform'                  : 1,
	    'transform-style'            : 1,
	    'transform-origin'           : 1,
	    'backface-visibility'        : 1,
	    'perspective'                : 1,
	    'box-pack'                   : 1
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use exports'
	
	//make sure properties are in hyphenated form
	
	module.exports = {
	    'animation'    : 1,
	    'column-count' : 1,
	    'columns'      : 1,
	    'font-weight'  : 1,
	    'opacity'      : 1,
	    'order  '      : 1,
	    'z-index'      : 1,
	    'zoom'         : 1,
	    'flex'         : 1,
	    'box-flex'     : 1,
	    'transform'    : 1,
	    'perspective'  : 1,
	    'box-pack'     : 1,
	    'box-align'    : 1,
	    'colspan'      : 1,
	    'rowspan'      : 1
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var prefixInfo  = __webpack_require__(7)
	var cssPrefixFn = __webpack_require__(9)
	
	var HYPHENATE   = __webpack_require__(13)
	var CAMELIZE   = __webpack_require__(11)
	var HAS_OWN     = __webpack_require__(16)
	var IS_OBJECT   = __webpack_require__(17)
	var IS_FUNCTION = __webpack_require__(18)
	
	var applyPrefix = function(target, property, value, normalizeFn){
	    cssPrefixFn(property).forEach(function(p){
	        target[normalizeFn? normalizeFn(p): p] = value
	    })
	}
	
	var toObject = function(str){
	    str = (str || '').split(';')
	
	    var result = {}
	
	    str.forEach(function(item){
	        var split = item.split(':')
	
	        if (split.length == 2){
	            result[split[0].trim()] = split[1].trim()
	        }
	    })
	
	    return result
	}
	
	var CONFIG = {
	    cssUnitless: __webpack_require__(5)
	}
	
	/**
	 * @ignore
	 * @method toStyleObject
	 *
	 * @param  {Object} styles The object to convert to a style object.
	 * @param  {Object} [config]
	 * @param  {Boolean} [config.addUnits=true] True if you want to add units when numerical values are encountered.
	 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
	 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
	 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
	 * @param  {String}  config.normalizeName A function that normalizes a name to a valid css property name
	 * @param  {String}  config.scope
	 *
	 * @return {Object} The object, normalized with css style names
	 */
	var TO_STYLE_OBJECT = function(styles, config, prepend, result){
	
	    if (typeof styles == 'string'){
	        styles = toObject(styles)
	    }
	
	    config = config || CONFIG
	
	    config.cssUnitless = config.cssUnitless || CONFIG.cssUnitless
	
	    result = result || {}
	
	    var scope    = config.scope || {},
	
	        //configs
	        addUnits = config.addUnits != null?
	                            config.addUnits:
	                            scope && scope.addUnits != null?
	                                scope.addUnits:
	                                true,
	
	        cssUnitless      = (config.cssUnitless != null?
	                                config.cssUnitless:
	                                scope?
	                                    scope.cssUnitless:
	                                    null) || {},
	        cssUnit          = (config.cssUnit || scope? scope.cssUnit: null) || 'px',
	        prefixProperties = (config.prefixProperties || (scope? scope.prefixProperties: null)) || {},
	
	        camelize    = config.camelize,
	        normalizeFn = camelize? CAMELIZE: HYPHENATE
	
	    // Object.keys(cssUnitless).forEach(function(key){
	    //     cssUnitless[normalizeFn(key)] = 1
	    // })
	
	    var processed,
	        styleName,
	
	        propName,
	        propValue,
	        propCssUnit,
	        propType,
	        propIsNumber,
	
	        fnPropValue,
	        prefix
	
	    for (propName in styles) if (HAS_OWN(styles, propName)) {
	
	        propValue = styles[ propName ]
	
	        //the hyphenated style name (css property name)
	        styleName = HYPHENATE(prepend? prepend + propName: propName)
	
	        processed = false
	        prefix    = false
	
	        if (IS_FUNCTION(propValue)) {
	
	            //a function can either return a css value
	            //or an object with { value, prefix, name }
	            fnPropValue = propValue.call(scope || styles, propValue, propName, styleName, styles)
	
	            if (IS_OBJECT(fnPropValue) && fnPropValue.value != null){
	
	                propValue = fnPropValue.value
	                prefix    = fnPropValue.prefix
	                styleName = fnPropValue.name?
	                                HYPHENATE(fnPropValue.name):
	                                styleName
	
	            } else {
	                propValue = fnPropValue
	            }
	        }
	
	        propType     = typeof propValue
	        propIsNumber = propType == 'number' || (propType == 'string' && propValue != '' && propValue * 1 == propValue)
	
	        if (propValue == null || styleName == null || styleName === ''){
	            continue
	        }
	
	        if (propIsNumber || propType == 'string'){
	           processed = true
	        }
	
	        if (!processed && propValue.value != null && propValue.prefix){
	           processed = true
	           prefix    = propValue.prefix
	           propValue = propValue.value
	        }
	
	        // hyphenStyleName = camelize? HYPHENATE(styleName): styleName
	
	        if (processed){
	
	            prefix = prefix || !!prefixProperties[styleName]
	
	            if (propIsNumber){
	                propValue = addUnits && !(styleName in cssUnitless) ?
	                                propValue + cssUnit:
	                                propValue + ''//change it to a string, so that jquery does not append px or other units
	            }
	
	            //special border treatment
	            if (
	                    (
	                     styleName == 'border' ||
	                    (!styleName.indexOf('border')
	                        &&
	                        !~styleName.indexOf('radius')
	                        &&
	                        !~styleName.indexOf('width'))
	                    ) &&
	                    propIsNumber
	                ){
	
	                styleName = styleName + '-width'
	            }
	
	            //special border radius treatment
	            if (!styleName.indexOf('border-radius-')){
	                styleName.replace(/border(-radius)(-(.*))/, function(str, radius, theRest){
	                    var positions = {
	                        '-top'    : ['-top-left',      '-top-right' ],
	                        '-left'   : ['-top-left',    '-bottom-left' ],
	                        '-right'  : ['-top-right',   '-bottom-right'],
	                        '-bottom' : ['-bottom-left', '-bottom-right']
	                    }
	
	                    if (theRest in positions){
	                        styleName = []
	
	                        positions[theRest].forEach(function(pos){
	                            styleName.push('border' + pos + radius)
	                        })
	                    } else {
	                        styleName = 'border'+ theRest + radius
	                    }
	
	                })
	
	                if (Array.isArray(styleName)){
	                    styleName.forEach(function(styleName){
	                        if (prefix){
	                            applyPrefix(result, styleName, propValue, normalizeFn)
	                        } else {
	                            result[normalizeFn(styleName)] = propValue
	                        }
	                    })
	
	                    continue
	                }
	            }
	
	            if (prefix){
	                applyPrefix(result, styleName, propValue, normalizeFn)
	            } else {
	                result[normalizeFn(styleName)] = propValue
	            }
	
	        } else {
	            //the propValue must be an object, so go down the hierarchy
	            TO_STYLE_OBJECT(propValue, config, styleName + '-', result)
	        }
	    }
	
	    return result
	}
	
	module.exports = TO_STYLE_OBJECT

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(8)
	
	var re         = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/
	
	var docStyle   = typeof document == 'undefined'?
	                    {}:
	                    document.documentElement.style
	
	var prefixInfo = (function(){
	
	    var prefix = (function(){
	
	            for (var prop in docStyle) {
	                if( re.test(prop) ) {
	                    // test is faster than match, so it's better to perform
	                    // that on the lot and match only when necessary
	                    return  prop.match(re)[0]
	                }
	            }
	
	            // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
	            // However (prop in style) returns the correct value, so we'll have to test for
	            // the precence of a specific property
	            if ('WebkitOpacity' in docStyle){
	                return 'Webkit'
	            }
	
	            if ('KhtmlOpacity' in docStyle) {
	                return 'Khtml'
	            }
	
	            return ''
	        })(),
	
	    lower = prefix.toLowerCase()
	
	    return {
	        style       : prefix,
	        css       : '-' + lower + '-',
	        dom       : ({
	            Webkit: 'WebKit',
	            ms    : 'MS',
	            o     : 'WebKit'
	        })[prefix] || toUpperFirst(prefix)
	    }
	
	})()
	
	module.exports = prefixInfo

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict'
	
	module.exports = function(value){
	    return value.length?
	                value.charAt(0).toUpperCase() + value.substring(1):
	                value
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10)()

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var camelize     = __webpack_require__(11)
	var hyphenate    = __webpack_require__(13)
	var toLowerFirst = __webpack_require__(15)
	var toUpperFirst = __webpack_require__(8)
	
	var prefixInfo = __webpack_require__(7)
	var prefixProperties = __webpack_require__(4)
	
	var docStyle = typeof document == 'undefined'?
	                {}:
	                document.documentElement.style
	
	module.exports = function(asStylePrefix){
	
	    return function(name, config){
	        config = config || {}
	
	        var styleName = toLowerFirst(camelize(name)),
	            cssName   = hyphenate(name),
	
	            theName   = asStylePrefix?
	                            styleName:
	                            cssName,
	
	            thePrefix = prefixInfo.style?
	                            asStylePrefix?
	                                prefixInfo.style:
	                                prefixInfo.css
	                            :
	                            ''
	
	        if ( styleName in docStyle ) {
	            return config.asString?
	                              theName :
	                            [ theName ]
	        }
	
	        //not a valid style name, so we'll return the value with a prefix
	
	        var upperCased     = theName,
	            prefixProperty = prefixProperties[cssName],
	            result         = []
	
	        if (asStylePrefix){
	            upperCased = toUpperFirst(theName)
	        }
	
	        if (typeof prefixProperty == 'function'){
	            var prefixedCss = prefixProperty(theName, thePrefix) || []
	            if (prefixedCss && !Array.isArray(prefixedCss)){
	                prefixedCss = [prefixedCss]
	            }
	
	            if (prefixedCss.length){
	                prefixedCss = prefixedCss.map(function(property){
	                    return asStylePrefix?
	                                toLowerFirst(camelize(property)):
	                                hyphenate(property)
	
	                })
	            }
	
	            result = result.concat(prefixedCss)
	        }
	
	        if (thePrefix){
	            result.push(thePrefix + upperCased)
	        }
	
	        result.push(theName)
	
	        if (config.asString || result.length == 1){
	            return result[0]
	        }
	
	        return result
	    }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var toCamelFn = function(str, letter){
	       return letter ? letter.toUpperCase(): ''
	   }
	
	var hyphenRe = __webpack_require__(12)
	
	module.exports = function(str){
	   return str?
	          str.replace(hyphenRe, toCamelFn):
	          ''
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = /[-\s]+(.)?/g

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var separate = __webpack_require__(14)
	
	module.exports = function(name){
	   return separate(name).toLowerCase()
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict'
	
	var doubleColonRe      = /::/g
	var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
	var lowerToUpperRe     = /([a-z\d])([A-Z])/g
	var underscoreToDashRe = /_/g
	
	module.exports = function(name, separator){
	
	   return name?
	           name.replace(doubleColonRe, '/')
	                .replace(upperToLowerRe, '$1_$2')
	                .replace(lowerToUpperRe, '$1_$2')
	                .replace(underscoreToDashRe, separator || '-')
	            :
	            ''
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict'
	
	module.exports = function(value){
	    return value.length?
	                value.charAt(0).toLowerCase() + value.substring(1):
	                value
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict'
	
	var objectHasOwn = Object.prototype.hasOwnProperty
	
	module.exports = function(object, propertyName){
	    return objectHasOwn.call(object, propertyName)
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict'
	
	var objectToString = Object.prototype.toString
	
	module.exports = function(v){
	    return !!v && objectToString.call(v) === '[object Object]'
	}
	


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict'
	
	var objectToString = Object.prototype.toString
	
	module.exports = function(v) {
	    return objectToString.apply(v) === '[object Function]'
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var toStyleObject = __webpack_require__(6)
	var hasOwn        = __webpack_require__(16)
	
	/**
	 * @ignore
	 * @method toStyleString
	 *
	 * @param  {Object} styles The object to convert to a style string.
	 * @param  {Object} config
	 * @param  {Boolean} config.addUnits=true True if you want to add units when numerical values are encountered. Defaults to true
	 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
	 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
	 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
	 * @param  {String}  config.scope
	 *
	 * @return {Object} The object, normalized with css style names
	 */
	module.exports = function(styles, config){
	    styles = toStyleObject(styles, config)
	
	    var result = []
	    var prop
	
	    for(prop in styles) if (hasOwn(styles, prop)){
	        result.push(prop + ': ' + styles[prop])
	    }
	
	    return result.join('; ')
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var slice = __webpack_require__(22)
	var flatten = __webpack_require__(24)
	
	/**
	 * This function lets us create virtual nodes using a simple
	 * syntax. It is compatible with JSX transforms so you can use
	 * JSX to write nodes that will compile to this function.
	 *
	 * let node = element('div', { id: 'foo' }, [
	 *   element('a', { href: 'http://google.com' }, 'Google')
	 * ])
	 *
	 * You can leave out the attributes or the children if either
	 * of them aren't needed and it will figure out what you're
	 * trying to do.
	 */
	
	module.exports = element
	
	/**
	 * Create virtual trees of components.
	 *
	 * This creates the nicer API for the user.
	 * It translates that friendly API into an actual tree of nodes.
	 *
	 * @param {*} type
	 * @param {Object} attributes
	 * @param {Array} children
	 * @return {Object}
	 * @api public
	 */
	
	function element (type, attributes, children) {
	  // Default to div with no args
	  if (!type) {
	    throw new TypeError('element() needs a type.')
	  }
	
	  // Skipped adding attributes and we're passing
	  // in children instead.
	  if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
	    children = [ attributes ]
	    attributes = {}
	  }
	
	  // Account for JSX putting the children as multiple arguments.
	  // This is essentially just the ES6 rest param
	  if (arguments.length > 2) {
	    children = slice(arguments, 2)
	  }
	
	  children = children || []
	  attributes = attributes || {}
	
	  // Flatten nested child arrays. This is how JSX compiles some nodes.
	  children = flatten(children, 2)
	
	  // Filter out any `undefined` elements
	  children = children.filter(function (i) { return typeof i !== 'undefined' })
	
	  // if you pass in a function, it's a `Component` constructor.
	  // otherwise it's an element.
	  return {
	    type: type,
	    children: children,
	    attributes: attributes
	  }
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = __webpack_require__(23);


/***/ },
/* 23 */
/***/ function(module, exports) {

	
	/**
	 * An Array.prototype.slice.call(arguments) alternative
	 *
	 * @param {Object} args something with a length
	 * @param {Number} slice
	 * @param {Number} sliceEnd
	 * @api public
	 */
	
	module.exports = function (args, slice, sliceEnd) {
	  var ret = [];
	  var len = args.length;
	
	  if (0 === len) return ret;
	
	  var start = slice < 0
	    ? Math.max(0, slice + len)
	    : slice || 0;
	
	  if (sliceEnd !== undefined) {
	    len = sliceEnd < 0
	      ? sliceEnd + len
	      : sliceEnd
	  }
	
	  while (len-- > start) {
	    ret[len - start] = args[len];
	  }
	
	  return ret;
	}
	


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict'
	
	/**
	 * Expose `arrayFlatten`.
	 */
	module.exports = arrayFlatten
	
	/**
	 * Recursive flatten function with depth.
	 *
	 * @param  {Array}  array
	 * @param  {Array}  result
	 * @param  {Number} depth
	 * @return {Array}
	 */
	function flattenWithDepth (array, result, depth) {
	  for (var i = 0; i < array.length; i++) {
	    var value = array[i]
	
	    if (depth > 0 && Array.isArray(value)) {
	      flattenWithDepth(value, result, depth - 1)
	    } else {
	      result.push(value)
	    }
	  }
	
	  return result
	}
	
	/**
	 * Recursive flatten function. Omitting depth is slightly faster.
	 *
	 * @param  {Array} array
	 * @param  {Array} result
	 * @return {Array}
	 */
	function flattenForever (array, result) {
	  for (var i = 0; i < array.length; i++) {
	    var value = array[i]
	
	    if (Array.isArray(value)) {
	      flattenForever(value, result)
	    } else {
	      result.push(value)
	    }
	  }
	
	  return result
	}
	
	/**
	 * Flatten an array, with the ability to define a depth.
	 *
	 * @param  {Array}  array
	 * @param  {Number} depth
	 * @return {Array}
	 */
	function arrayFlatten (array, depth) {
	  if (depth == null) {
	    return flattenForever(array, [])
	  }
	
	  return flattenWithDepth(array, [], depth)
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * toString ref.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
	
	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object Error]': return 'error';
	  }
	
	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val !== val) return 'nan';
	  if (val && val.nodeType === 1) return 'element';
	
	  val = val.valueOf
	    ? val.valueOf()
	    : Object.prototype.valueOf.apply(val)
	
	  return typeof val;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	
	/**
	 * An Array.prototype.slice.call(arguments) alternative
	 *
	 * @param {Object} args something with a length
	 * @param {Number} slice
	 * @param {Number} sliceEnd
	 * @api public
	 */
	
	module.exports = function (args, slice, sliceEnd) {
	  var ret = [];
	  var len = args.length;
	
	  if (0 === len) return ret;
	
	  var start = slice < 0
	    ? Math.max(0, slice + len)
	    : slice || 0;
	
	  if (sliceEnd !== undefined) {
	    len = sliceEnd < 0
	      ? sliceEnd + len
	      : sliceEnd
	  }
	
	  while (len-- > start) {
	    ret[len - start] = args[len];
	  }
	
	  return ret;
	}
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Create the application.
	 */
	
	exports.tree =
	exports.scene =
	exports.deku = __webpack_require__(28)
	
	/**
	 * Render scenes to the DOM.
	 */
	
	if (typeof document !== 'undefined') {
	  exports.render = __webpack_require__(30)
	}
	
	/**
	 * Render scenes to a string
	 */
	
	exports.renderString = __webpack_require__(55)

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(29)
	
	/**
	 * Expose `scene`.
	 */
	
	module.exports = Application
	
	/**
	 * Create a new `Application`.
	 *
	 * @param {Object} element Optional initial element
	 */
	
	function Application (element) {
	  if (!(this instanceof Application)) return new Application(element)
	  this.options = {}
	  this.sources = {}
	  this.element = element
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Application.prototype)
	
	/**
	 * Add a plugin
	 *
	 * @param {Function} plugin
	 */
	
	Application.prototype.use = function (plugin) {
	  plugin(this)
	  return this
	}
	
	/**
	 * Set an option
	 *
	 * @param {String} name
	 */
	
	Application.prototype.option = function (name, val) {
	  this.options[name] = val
	  return this
	}
	
	/**
	 * Set value used somewhere in the IO network.
	 */
	
	Application.prototype.set = function (name, data) {
	  this.sources[name] = data
	  this.emit('source', name, data)
	  return this
	}
	
	/**
	 * Mount a virtual element.
	 *
	 * @param {VirtualElement} element
	 */
	
	Application.prototype.mount = function (element) {
	  this.element = element
	  this.emit('mount', element)
	  return this
	}
	
	/**
	 * Remove the world. Unmount everything.
	 */
	
	Application.prototype.unmount = function () {
	  if (!this.element) return
	  this.element = null
	  this.emit('unmount')
	  return this
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dependencies.
	 */
	
	var raf = __webpack_require__(31)
	var isDom = __webpack_require__(32)
	var uid = __webpack_require__(33)
	var keypath = __webpack_require__(34)
	var events = __webpack_require__(35)
	var svg = __webpack_require__(36)
	var defaults = __webpack_require__(39)
	var forEach = __webpack_require__(40)
	var assign = __webpack_require__(44)
	var reduce = __webpack_require__(45)
	var nodeType = __webpack_require__(49)
	
	/**
	 * Expose `dom`.
	 */
	
	module.exports = render
	
	/**
	 * Render an app to the DOM
	 *
	 * @param {Application} app
	 * @param {HTMLElement} container
	 * @param {Object} opts
	 *
	 * @return {Object}
	 */
	
	function render (app, container, opts) {
	  var frameId
	  var isRendering
	  var rootId = 'root'
	  var currentElement
	  var currentNativeElement
	  var connections = {}
	  var components = {}
	  var entities = {}
	  var handlers = {}
	  var mountQueue = []
	  var children = {}
	  children[rootId] = {}
	
	  if (!isDom(container)) {
	    throw new Error('Container element must be a DOM element')
	  }
	
	  /**
	   * Rendering options. Batching is only ever really disabled
	   * when running tests, and pooling can be disabled if the user
	   * is doing something stupid with the DOM in their components.
	   */
	
	  var options = defaults(assign({}, app.options || {}, opts || {}), {
	    batching: true
	  })
	
	  /**
	   * Listen to DOM events
	   */
	  var rootElement = getRootElement(container)
	  addNativeEventListeners()
	
	  /**
	   * Watch for changes to the app so that we can update
	   * the DOM as needed.
	   */
	
	  app.on('unmount', onunmount)
	  app.on('mount', onmount)
	  app.on('source', onupdate)
	
	  /**
	   * If the app has already mounted an element, we can just
	   * render that straight away.
	   */
	
	  if (app.element) render()
	
	  /**
	   * Teardown the DOM rendering so that it stops
	   * rendering and everything can be garbage collected.
	   */
	
	  function teardown () {
	    removeNativeEventListeners()
	    removeNativeElement()
	    app.off('unmount', onunmount)
	    app.off('mount', onmount)
	    app.off('source', onupdate)
	  }
	
	  /**
	   * Swap the current rendered node with a new one that is rendered
	   * from the new virtual element mounted on the app.
	   *
	   * @param {VirtualElement} element
	   */
	
	  function onmount () {
	    invalidate()
	  }
	
	  /**
	   * If the app unmounts an element, we should clear out the current
	   * rendered element. This will remove all the entities.
	   */
	
	  function onunmount () {
	    removeNativeElement()
	    currentElement = null
	  }
	
	  /**
	   * Update all components that are bound to the source
	   *
	   * @param {String} name
	   * @param {*} data
	   */
	
	  function onupdate (name, data) {
	    if (!connections[name]) return;
	    connections[name].forEach(function(update) {
	      update(data)
	    })
	  }
	
	  /**
	   * Render and mount a component to the native dom.
	   *
	   * @param {Entity} entity
	   * @return {HTMLElement}
	   */
	
	  function mountEntity (entity) {
	    register(entity)
	    setSources(entity)
	    children[entity.id] = {}
	    entities[entity.id] = entity
	
	    // commit initial state and props.
	    commit(entity)
	
	    // callback before mounting.
	    trigger('beforeMount', entity, [entity.context])
	    trigger('beforeRender', entity, [entity.context])
	
	    // render virtual element.
	    var virtualElement = renderEntity(entity)
	    // create native element.
	    var nativeElement = toNative(entity.id, '0', virtualElement)
	
	    entity.virtualElement = virtualElement
	    entity.nativeElement = nativeElement
	
	    // Fire afterRender and afterMount hooks at the end
	    // of the render cycle
	    mountQueue.push(entity.id)
	
	    return nativeElement
	  }
	
	  /**
	   * Remove a component from the native dom.
	   *
	   * @param {Entity} entity
	   */
	
	  function unmountEntity (entityId) {
	    var entity = entities[entityId]
	    if (!entity) return
	    trigger('beforeUnmount', entity, [entity.context, entity.nativeElement])
	    unmountChildren(entityId)
	    removeAllEvents(entityId)
	    var componentEntities = components[entityId].entities;
	    delete componentEntities[entityId]
	    delete components[entityId]
	    delete entities[entityId]
	    delete children[entityId]
	  }
	
	  /**
	   * Render the entity and make sure it returns a node
	   *
	   * @param {Entity} entity
	   *
	   * @return {VirtualTree}
	   */
	
	  function renderEntity (entity) {
	    var component = entity.component
	    var fn = typeof component === 'function' ? component : component.render
	    if (!fn) throw new Error('Component needs a render function')
	    var result = fn(entity.context, setState(entity))
	    if (!result) throw new Error('Render function must return an element.')
	    return result
	  }
	
	  /**
	   * Whenever setState or setProps is called, we mark the entity
	   * as dirty in the renderer. This lets us optimize the re-rendering
	   * and skip components that definitely haven't changed.
	   *
	   * @param {Entity} entity
	   *
	   * @return {Function} A curried function for updating the state of an entity
	   */
	
	  function setState (entity) {
	    return function (nextState) {
	      updateEntityState(entity, nextState)
	    }
	  }
	
	  /**
	   * Tell the app it's dirty and needs to re-render. If batching is disabled
	   * we can just trigger a render immediately, otherwise we'll wait until
	   * the next available frame.
	   */
	
	  function invalidate () {
	    if (!options.batching) {
	      if (!isRendering) render()
	    } else {
	      if (!frameId) frameId = raf(render)
	    }
	  }
	
	  /**
	   * Update the DOM. If the update fails we stop the loop
	   * so we don't get errors on every frame.
	   *
	   * @api public
	   */
	
	  function render () {
	    // If this is called synchronously we need to
	    // cancel any pending future updates
	    clearFrame()
	
	    // If the rendering from the previous frame is still going,
	    // we'll just wait until the next frame. Ideally renders should
	    // not take over 16ms to stay within a single frame, but this should
	    // catch it if it does.
	    if (isRendering) {
	      frameId = raf(render)
	      return
	    } else {
	      isRendering = true
	    }
	
	    // 1. If there isn't a native element rendered for the current mounted element
	    // then we need to create it from scratch.
	    // 2. If a new element has been mounted, we should diff them.
	    // 3. We should update check all child components for changes.
	    if (!currentNativeElement) {
	      currentElement = app.element
	      currentNativeElement = toNative(rootId, '0', currentElement)
	      if (container.children.length > 0) {
	        console.info('deku: The container element is not empty. These elements will be removed. Read more: http://cl.ly/b0Sr')
	      }
	      if (container === document.body) {
	        console.warn('deku: Using document.body is allowed but it can cause some issues. Read more: http://cl.ly/b0SC')
	      }
	      removeAllChildren(container)
	      container.appendChild(currentNativeElement)
	    } else if (currentElement !== app.element) {
	      currentNativeElement = patch(rootId, currentElement, app.element, currentNativeElement)
	      currentElement = app.element
	      updateChildren(rootId)
	    } else {
	      updateChildren(rootId)
	    }
	
	    // Call mount events on all new entities
	    flushMountQueue()
	
	    // Allow rendering again.
	    isRendering = false
	
	  }
	
	  /**
	   * Call hooks for all new entities that have been created in
	   * the last render from the bottom up.
	   */
	
	  function flushMountQueue () {
	    while (mountQueue.length > 0) {
	      var entityId = mountQueue.shift()
	      var entity = entities[entityId]
	      trigger('afterRender', entity, [entity.context, entity.nativeElement])
	      trigger('afterMount', entity, [entity.context, entity.nativeElement, setState(entity)])
	    }
	  }
	
	  /**
	   * Clear the current scheduled frame
	   */
	
	  function clearFrame () {
	    if (!frameId) return
	    raf.cancel(frameId)
	    frameId = 0
	  }
	
	  /**
	   * Update a component.
	   *
	   * The entity is just the data object for a component instance.
	   *
	   * @param {String} id Component instance id.
	   */
	
	  function updateEntity (entityId) {
	    var entity = entities[entityId]
	    setSources(entity)
	
	    if (!shouldUpdate(entity)) {
	      commit(entity)
	      return updateChildren(entityId)
	    }
	
	    var currentTree = entity.virtualElement
	    var nextProps = entity.pendingProps
	    var nextState = entity.pendingState
	    var previousState = entity.context.state
	    var previousProps = entity.context.props
	
	    // hook before rendering. could modify state just before the render occurs.
	    trigger('beforeUpdate', entity, [entity.context, nextProps, nextState])
	    trigger('beforeRender', entity, [entity.context])
	
	    // commit state and props.
	    commit(entity)
	
	    // re-render.
	    var nextTree = renderEntity(entity)
	
	    // if the tree is the same we can just skip this component
	    // but we should still check the children to see if they're dirty.
	    // This allows us to memoize the render function of components.
	    if (nextTree === currentTree) return updateChildren(entityId)
	
	    // apply new virtual tree to native dom.
	    entity.nativeElement = patch(entityId, currentTree, nextTree, entity.nativeElement)
	    entity.virtualElement = nextTree
	    updateChildren(entityId)
	
	    // trigger render hook
	    trigger('afterRender', entity, [entity.context, entity.nativeElement])
	
	    // trigger afterUpdate after all children have updated.
	    trigger('afterUpdate', entity, [entity.context, previousProps, previousState, setState(entity)])
	  }
	
	  /**
	   * Update all the children of an entity.
	   *
	   * @param {String} id Component instance id.
	   */
	
	  function updateChildren (entityId) {
	    forEach(children[entityId], function (childId) {
	      updateEntity(childId)
	    })
	  }
	
	  /**
	   * Remove all of the child entities of an entity
	   *
	   * @param {Entity} entity
	   */
	
	  function unmountChildren (entityId) {
	    forEach(children[entityId], function (childId) {
	      unmountEntity(childId)
	    })
	  }
	
	  /**
	   * Remove the root element. If this is called synchronously we need to
	   * cancel any pending future updates.
	   */
	
	  function removeNativeElement () {
	    clearFrame()
	    removeElement(rootId, '0', currentNativeElement)
	    currentNativeElement = null
	  }
	
	  /**
	   * Create a native element from a virtual element.
	   *
	   * @param {String} entityId
	   * @param {String} path
	   * @param {Object} vnode
	   *
	   * @return {HTMLDocumentFragment}
	   */
	
	  function toNative (entityId, path, vnode) {
	    switch (nodeType(vnode)) {
	      case 'text': return toNativeText(vnode)
	      case 'empty': return toNativeEmptyElement(entityId, path)
	      case 'element': return toNativeElement(entityId, path, vnode)
	      case 'component': return toNativeComponent(entityId, path, vnode)
	    }
	  }
	
	  /**
	   * Create a native text element from a virtual element.
	   *
	   * @param {Object} vnode
	   */
	
	  function toNativeText (text) {
	    return document.createTextNode(text)
	  }
	
	  /**
	   * Create a native element from a virtual element.
	   */
	
	  function toNativeElement (entityId, path, vnode) {
	    var el
	    var attributes = vnode.attributes
	    var tagName = vnode.type
	    var childNodes = vnode.children
	
	    // create element either from pool or fresh.
	    if (svg.isElement(tagName)) {
	      el = document.createElementNS(svg.namespace, tagName)
	    } else {
	      el = document.createElement(tagName)
	    }
	
	    // set attributes.
	    forEach(attributes, function (value, name) {
	      setAttribute(entityId, path, el, name, value)
	    })
	
	    // add children.
	    forEach(childNodes, function (child, i) {
	      var childEl = toNative(entityId, path + '.' + i, child)
	      if (!childEl.parentNode) el.appendChild(childEl)
	    })
	
	    // store keys on the native element for fast event handling.
	    el.__entity__ = entityId
	    el.__path__ = path
	
	    return el
	  }
	
	  /**
	   * Create a native element from a virtual element.
	   */
	
	  function toNativeEmptyElement (entityId, path) {
	    var el = document.createElement('noscript')
	    el.__entity__ = entityId
	    el.__path__ = path
	    return el
	  }
	
	  /**
	   * Create a native element from a component.
	   */
	
	  function toNativeComponent (entityId, path, vnode) {
	    var child = new Entity(vnode.type, assign({ children: vnode.children }, vnode.attributes), entityId)
	    children[entityId][path] = child.id
	    return mountEntity(child)
	  }
	
	  /**
	   * Patch an element with the diff from two trees.
	   */
	
	  function patch (entityId, prev, next, el) {
	    return diffNode('0', entityId, prev, next, el)
	  }
	
	  /**
	   * Create a diff between two trees of nodes.
	   */
	
	  function diffNode (path, entityId, prev, next, el) {
	    var leftType = nodeType(prev)
	    var rightType = nodeType(next)
	
	    // Type changed. This could be from element->text, text->ComponentA,
	    // ComponentA->ComponentB etc. But NOT div->span. These are the same type
	    // (ElementNode) but different tag name.
	    if (leftType !== rightType) return replaceElement(entityId, path, el, next)
	
	    switch (rightType) {
	      case 'text': return diffText(prev, next, el)
	      case 'empty': return el
	      case 'element': return diffElement(path, entityId, prev, next, el)
	      case 'component': return diffComponent(path, entityId, prev, next, el)
	    }
	  }
	
	  /**
	   * Diff two text nodes and update the element.
	   */
	
	  function diffText (previous, current, el) {
	    if (current !== previous) el.data = current
	    return el
	  }
	
	  /**
	   * Diff the children of an ElementNode.
	   */
	
	  function diffChildren (path, entityId, prev, next, el) {
	    var positions = []
	    var hasKeys = false
	    var childNodes = Array.prototype.slice.apply(el.childNodes)
	    var leftKeys = reduce(prev.children, keyMapReducer, {})
	    var rightKeys = reduce(next.children, keyMapReducer, {})
	    var currentChildren = assign({}, children[entityId])
	
	    function keyMapReducer (acc, child, i) {
	      if (child && child.attributes && child.attributes.key != null) {
	        acc[child.attributes.key] = {
	          element: child,
	          index: i
	        }
	        hasKeys = true
	      }
	      return acc
	    }
	
	    // Diff all of the nodes that have keys. This lets us re-used elements
	    // instead of overriding them and lets us move them around.
	    if (hasKeys) {
	
	      // Removals
	      forEach(leftKeys, function (leftNode, key) {
	        if (rightKeys[key] == null) {
	          var leftPath = path + '.' + leftNode.index
	          removeElement(
	            entityId,
	            leftPath,
	            childNodes[leftNode.index]
	          )
	        }
	      })
	
	      // Update nodes
	      forEach(rightKeys, function (rightNode, key) {
	        var leftNode = leftKeys[key]
	
	        // We only want updates for now
	        if (leftNode == null) return
	
	        var leftPath = path + '.' + leftNode.index
	
	        // Updated
	        positions[rightNode.index] = diffNode(
	          leftPath,
	          entityId,
	          leftNode.element,
	          rightNode.element,
	          childNodes[leftNode.index]
	        )
	      })
	
	      // Update the positions of all child components and event handlers
	      forEach(rightKeys, function (rightNode, key) {
	        var leftNode = leftKeys[key]
	
	        // We just want elements that have moved around
	        if (leftNode == null || leftNode.index === rightNode.index) return
	
	        var rightPath = path + '.' + rightNode.index
	        var leftPath = path + '.' + leftNode.index
	
	        // Update all the child component path positions to match
	        // the latest positions if they've changed. This is a bit hacky.
	        forEach(currentChildren, function (childId, childPath) {
	          if (leftPath === childPath) {
	            delete children[entityId][childPath]
	            children[entityId][rightPath] = childId
	          }
	        })
	      })
	
	      // Now add all of the new nodes last in case their path
	      // would have conflicted with one of the previous paths.
	      forEach(rightKeys, function (rightNode, key) {
	        var rightPath = path + '.' + rightNode.index
	        if (leftKeys[key] == null) {
	          positions[rightNode.index] = toNative(
	            entityId,
	            rightPath,
	            rightNode.element
	          )
	        }
	      })
	
	    } else {
	      var maxLength = Math.max(prev.children.length, next.children.length)
	
	      // Now diff all of the nodes that don't have keys
	      for (var i = 0; i < maxLength; i++) {
	        var leftNode = prev.children[i]
	        var rightNode = next.children[i]
	
	        // Removals
	        if (rightNode === undefined) {
	          removeElement(
	            entityId,
	            path + '.' + i,
	            childNodes[i]
	          )
	          continue
	        }
	
	        // New Node
	        if (leftNode === undefined) {
	          positions[i] = toNative(
	            entityId,
	            path + '.' + i,
	            rightNode
	          )
	          continue
	        }
	
	        // Updated
	        positions[i] = diffNode(
	          path + '.' + i,
	          entityId,
	          leftNode,
	          rightNode,
	          childNodes[i]
	        )
	      }
	    }
	
	    // Reposition all the elements
	    forEach(positions, function (childEl, newPosition) {
	      var target = el.childNodes[newPosition]
	      if (childEl && childEl !== target) {
	        if (target) {
	          el.insertBefore(childEl, target)
	        } else {
	          el.appendChild(childEl)
	        }
	      }
	    })
	  }
	
	  /**
	   * Diff the attributes and add/remove them.
	   */
	
	  function diffAttributes (prev, next, el, entityId, path) {
	    var nextAttrs = next.attributes
	    var prevAttrs = prev.attributes
	
	    // add new attrs
	    forEach(nextAttrs, function (value, name) {
	      if (events[name] || !(name in prevAttrs) || prevAttrs[name] !== value) {
	        setAttribute(entityId, path, el, name, value)
	      }
	    })
	
	    // remove old attrs
	    forEach(prevAttrs, function (value, name) {
	      if (!(name in nextAttrs)) {
	        removeAttribute(entityId, path, el, name)
	      }
	    })
	  }
	
	  /**
	   * Update a component with the props from the next node. If
	   * the component type has changed, we'll just remove the old one
	   * and replace it with the new component.
	   */
	
	  function diffComponent (path, entityId, prev, next, el) {
	    if (next.type !== prev.type) {
	      return replaceElement(entityId, path, el, next)
	    } else {
	      var targetId = children[entityId][path]
	
	      // This is a hack for now
	      if (targetId) {
	        updateEntityProps(targetId, assign({ children: next.children }, next.attributes))
	      }
	
	      return el
	    }
	  }
	
	  /**
	   * Diff two element nodes.
	   */
	
	  function diffElement (path, entityId, prev, next, el) {
	    if (next.type !== prev.type) return replaceElement(entityId, path, el, next)
	    diffAttributes(prev, next, el, entityId, path)
	    diffChildren(path, entityId, prev, next, el)
	    return el
	  }
	
	  /**
	   * Removes an element from the DOM and unmounts and components
	   * that are within that branch
	   *
	   * side effects:
	   *   - removes element from the DOM
	   *   - removes internal references
	   *
	   * @param {String} entityId
	   * @param {String} path
	   * @param {HTMLElement} el
	   */
	
	  function removeElement (entityId, path, el) {
	    var childrenByPath = children[entityId]
	    var childId = childrenByPath[path]
	    var entityHandlers = handlers[entityId] || {}
	    var removals = []
	
	    // If the path points to a component we should use that
	    // components element instead, because it might have moved it.
	    if (childId) {
	      var child = entities[childId]
	      el = child.nativeElement
	      unmountEntity(childId)
	      removals.push(path)
	    } else {
	
	      // Just remove the text node
	      if (!isElement(el)) return el && el.parentNode.removeChild(el)
	
	      // Then we need to find any components within this
	      // branch and unmount them.
	      forEach(childrenByPath, function (childId, childPath) {
	        if (childPath === path || isWithinPath(path, childPath)) {
	          unmountEntity(childId)
	          removals.push(childPath)
	        }
	      })
	
	      // Remove all events at this path or below it
	      forEach(entityHandlers, function (fn, handlerPath) {
	        if (handlerPath === path || isWithinPath(path, handlerPath)) {
	          removeEvent(entityId, handlerPath)
	        }
	      })
	    }
	
	    // Remove the paths from the object without touching the
	    // old object. This keeps the object using fast properties.
	    forEach(removals, function (path) {
	      delete children[entityId][path]
	    })
	
	    // Remove it from the DOM
	    el.parentNode.removeChild(el)
	  }
	
	  /**
	   * Replace an element in the DOM. Removing all components
	   * within that element and re-rendering the new virtual node.
	   *
	   * @param {Entity} entity
	   * @param {String} path
	   * @param {HTMLElement} el
	   * @param {Object} vnode
	   *
	   * @return {void}
	   */
	
	  function replaceElement (entityId, path, el, vnode) {
	    var parent = el.parentNode
	    var index = Array.prototype.indexOf.call(parent.childNodes, el)
	
	    // remove the previous element and all nested components. This
	    // needs to happen before we create the new element so we don't
	    // get clashes on the component paths.
	    removeElement(entityId, path, el)
	
	    // then add the new element in there
	    var newEl = toNative(entityId, path, vnode)
	    var target = parent.childNodes[index]
	
	    if (target) {
	      parent.insertBefore(newEl, target)
	    } else {
	      parent.appendChild(newEl)
	    }
	
	    // walk up the tree and update all `entity.nativeElement` references.
	    if (entityId !== 'root' && path === '0') {
	      updateNativeElement(entityId, newEl)
	    }
	
	    return newEl
	  }
	
	  /**
	   * Update all entities in a branch that have the same nativeElement. This
	   * happens when a component has another component as it's root node.
	   *
	   * @param {String} entityId
	   * @param {HTMLElement} newEl
	   *
	   * @return {void}
	   */
	
	  function updateNativeElement (entityId, newEl) {
	    var target = entities[entityId]
	    if (target.ownerId === 'root') return
	    if (children[target.ownerId]['0'] === entityId) {
	      entities[target.ownerId].nativeElement = newEl
	      updateNativeElement(target.ownerId, newEl)
	    }
	  }
	
	  /**
	   * Set the attribute of an element, performing additional transformations
	   * dependning on the attribute name
	   *
	   * @param {HTMLElement} el
	   * @param {String} name
	   * @param {String} value
	   */
	
	  function setAttribute (entityId, path, el, name, value) {
	    if (!value) {
	      removeAttribute(entityId, path, el, name)
	      return
	    }
	    if (events[name]) {
	      addEvent(entityId, path, events[name], value)
	      return
	    }
	    switch (name) {
	      case 'checked':
	      case 'disabled':
	      case 'selected':
	        el[name] = true
	        break
	      case 'innerHTML':
	        el.innerHTML = value
	        break
	      case 'value':
	        setElementValue(el, value)
	        break
	      case svg.isAttribute(name):
	        el.setAttributeNS(svg.namespace, name, value)
	        break
	      default:
	        el.setAttribute(name, value)
	        break
	    }
	  }
	
	  /**
	   * Remove an attribute, performing additional transformations
	   * dependning on the attribute name
	   *
	   * @param {HTMLElement} el
	   * @param {String} name
	   */
	
	  function removeAttribute (entityId, path, el, name) {
	    if (events[name]) {
	      removeEvent(entityId, path, events[name])
	      return
	    }
	    switch (name) {
	      case 'checked':
	      case 'disabled':
	      case 'selected':
	        el[name] = false
	        break
	      case 'innerHTML':
	        el.innerHTML = ''
	      case 'value':
	        setElementValue(el, null)
	        break
	      default:
	        el.removeAttribute(name)
	        break
	    }
	  }
	
	  /**
	   * Checks to see if one tree path is within
	   * another tree path. Example:
	   *
	   * 0.1 vs 0.1.1 = true
	   * 0.2 vs 0.3.5 = false
	   *
	   * @param {String} target
	   * @param {String} path
	   *
	   * @return {Boolean}
	   */
	
	  function isWithinPath (target, path) {
	    return path.indexOf(target + '.') === 0
	  }
	
	  /**
	   * Is the DOM node an element node
	   *
	   * @param {HTMLElement} el
	   *
	   * @return {Boolean}
	   */
	
	  function isElement (el) {
	    return !!(el && el.tagName)
	  }
	
	  /**
	   * Remove all the child nodes from an element
	   *
	   * @param {HTMLElement} el
	   */
	
	  function removeAllChildren (el) {
	    while (el.firstChild) el.removeChild(el.firstChild)
	  }
	
	  /**
	   * Trigger a hook on a component.
	   *
	   * @param {String} name Name of hook.
	   * @param {Entity} entity The component instance.
	   * @param {Array} args To pass along to hook.
	   */
	
	  function trigger (name, entity, args) {
	    if (typeof entity.component[name] !== 'function') return
	    return entity.component[name].apply(null, args)
	  }
	
	  /**
	   * Update an entity to match the latest rendered vode. We always
	   * replace the props on the component when composing them. This
	   * will trigger a re-render on all children below this point.
	   *
	   * @param {Entity} entity
	   * @param {String} path
	   * @param {Object} vnode
	   *
	   * @return {void}
	   */
	
	  function updateEntityProps (entityId, nextProps) {
	    var entity = entities[entityId]
	    entity.pendingProps = defaults({}, nextProps, entity.component.defaultProps || {})
	    entity.dirty = true
	    invalidate()
	  }
	
	  /**
	   * Update component instance state.
	   */
	
	  function updateEntityState (entity, nextState) {
	    entity.pendingState = assign(entity.pendingState, nextState)
	    entity.dirty = true
	    invalidate()
	  }
	
	  /**
	   * Commit props and state changes to an entity.
	   */
	
	  function commit (entity) {
	    entity.context = {
	      state: entity.pendingState,
	      props: entity.pendingProps,
	      id: entity.id
	    }
	    entity.pendingState = assign({}, entity.context.state)
	    entity.pendingProps = assign({}, entity.context.props)
	    entity.dirty = false
	    if (typeof entity.component.validate === 'function') {
	      entity.component.validate(entity.context)
	    }
	  }
	
	  /**
	   * Try to avoid creating new virtual dom if possible.
	   *
	   * Later we may expose this so you can override, but not there yet.
	   */
	
	  function shouldUpdate (entity) {
	    if (!entity.dirty) return false
	    if (!entity.component.shouldUpdate) return true
	    var nextProps = entity.pendingProps
	    var nextState = entity.pendingState
	    var bool = entity.component.shouldUpdate(entity.context, nextProps, nextState)
	    return bool
	  }
	
	  /**
	   * Register an entity.
	   *
	   * This is mostly to pre-preprocess component properties and values chains.
	   *
	   * The end result is for every component that gets mounted,
	   * you create a set of IO nodes in the network from the `value` definitions.
	   *
	   * @param {Component} component
	   */
	
	  function register (entity) {
	    registerEntity(entity)
	    var component = entity.component
	    if (component.registered) return
	
	    // initialize sources once for a component type.
	    registerSources(entity)
	    component.registered = true
	  }
	
	  /**
	   * Add entity to data-structures related to components/entities.
	   *
	   * @param {Entity} entity
	   */
	
	  function registerEntity(entity) {
	    var component = entity.component
	    // all entities for this component type.
	    var entities = component.entities = component.entities || {}
	    // add entity to component list
	    entities[entity.id] = entity
	    // map to component so you can remove later.
	    components[entity.id] = component
	  }
	
	  /**
	   * Initialize sources for a component by type.
	   *
	   * @param {Entity} entity
	   */
	
	  function registerSources(entity) {
	    var component = components[entity.id]
	    // get 'class-level' sources.
	    // if we've already hooked it up, then we're good.
	    var sources = component.sources
	    if (sources) return
	    var entities = component.entities
	
	    // hook up sources.
	    var map = component.sourceToPropertyName = {}
	    component.sources = sources = []
	    var propTypes = component.propTypes
	    for (var name in propTypes) {
	      var data = propTypes[name]
	      if (!data) continue
	      if (!data.source) continue
	      sources.push(data.source)
	      map[data.source] = name
	    }
	
	    // send value updates to all component instances.
	    sources.forEach(function (source) {
	      connections[source] = connections[source] || []
	      connections[source].push(update)
	
	      function update (data) {
	        var prop = map[source]
	        for (var entityId in entities) {
	          var entity = entities[entityId]
	          var changes = {}
	          changes[prop] = data
	          updateEntityProps(entityId, assign(entity.pendingProps, changes))
	        }
	      }
	    })
	  }
	
	  /**
	   * Set the initial source value on the entity
	   *
	   * @param {Entity} entity
	   */
	
	  function setSources (entity) {
	    var component = entity.component
	    var map = component.sourceToPropertyName
	    var sources = component.sources
	    sources.forEach(function (source) {
	      var name = map[source]
	      if (entity.pendingProps[name] != null) return
	      entity.pendingProps[name] = app.sources[source] // get latest value plugged into global store
	    })
	  }
	
	  /**
	   * Add all of the DOM event listeners
	   */
	
	  function addNativeEventListeners () {
	    forEach(events, function (eventType) {
	      rootElement.addEventListener(eventType, handleEvent, true)
	    })
	  }
	
	  /**
	   * Add all of the DOM event listeners
	   */
	
	  function removeNativeEventListeners () {
	    forEach(events, function (eventType) {
	      rootElement.removeEventListener(eventType, handleEvent, true)
	    })
	  }
	
	  /**
	   * Handle an event that has occured within the container
	   *
	   * @param {Event} event
	   */
	
	  function handleEvent (event) {
	    var target = event.target
	    var eventType = event.type
	
	    // Walk up the DOM tree and see if there is a handler
	    // for this event type higher up.
	    while (target) {
	      var fn = keypath.get(handlers, [target.__entity__, target.__path__, eventType])
	      if (fn) {
	        event.delegateTarget = target
	        if (fn(event) === false) break
	      }
	      target = target.parentNode
	    }
	  }
	
	  /**
	   * Bind events for an element, and all it's rendered child elements.
	   *
	   * @param {String} path
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  function addEvent (entityId, path, eventType, fn) {
	    keypath.set(handlers, [entityId, path, eventType], function (e) {
	      var entity = entities[entityId]
	      if (entity) {
	        return fn.call(null, e, entity.context, setState(entity))
	      } else {
	        return fn.call(null, e)
	      }
	    })
	  }
	
	  /**
	   * Unbind events for a entityId
	   *
	   * @param {String} entityId
	   */
	
	  function removeEvent (entityId, path, eventType) {
	    var args = [entityId]
	    if (path) args.push(path)
	    if (eventType) args.push(eventType)
	    keypath.del(handlers, args)
	  }
	
	  /**
	   * Unbind all events from an entity
	   *
	   * @param {Entity} entity
	   */
	
	  function removeAllEvents (entityId) {
	    keypath.del(handlers, [entityId])
	  }
	
	  /**
	   * Used for debugging to inspect the current state without
	   * us needing to explicitly manage storing/updating references.
	   *
	   * @return {Object}
	   */
	
	  function inspect () {
	    return {
	      entities: entities,
	      handlers: handlers,
	      connections: connections,
	      currentElement: currentElement,
	      options: options,
	      app: app,
	      container: container,
	      children: children
	    }
	  }
	
	  /**
	   * Return an object that lets us completely remove the automatic
	   * DOM rendering and export debugging tools.
	   */
	
	  return {
	    remove: teardown,
	    inspect: inspect
	  }
	}
	
	/**
	 * A rendered component instance.
	 *
	 * This manages the lifecycle, props and state of the component.
	 * It's basically just a data object for more straightfoward lookup.
	 *
	 * @param {Component} component
	 * @param {Object} props
	 */
	
	function Entity (component, props, ownerId) {
	  this.id = uid()
	  this.ownerId = ownerId
	  this.component = component
	  this.propTypes = component.propTypes || {}
	  this.context = {}
	  this.context.id = this.id
	  this.context.props = defaults(props || {}, component.defaultProps || {})
	  this.context.state = this.component.initialState ? this.component.initialState(this.context.props) : {}
	  this.pendingProps = assign({}, this.context.props)
	  this.pendingState = assign({}, this.context.state)
	  this.dirty = false
	  this.virtualElement = null
	  this.nativeElement = null
	  this.displayName = component.name || 'Component'
	}
	
	/**
	 * Retrieve the nearest 'body' ancestor of the given element or else the root
	 * element of the document in which stands the given element.
	 *
	 * This is necessary if you want to attach the events handler to the correct
	 * element and be able to dispatch events in document fragments such as
	 * Shadow DOM.
	 *
	 * @param  {HTMLElement} el The element on which we will render an app.
	 * @return {HTMLElement}    The root element on which we will attach the events
	 *                          handler.
	 */
	
	function getRootElement (el) {
	  while (el.parentElement) {
	    if (el.tagName === 'BODY' || !el.parentElement) {
	      return el
	    }
	    el = el.parentElement
	  }
	  return el
	}
	
	/**
	 * Set the value property of an element and keep the text selection
	 * for input fields.
	 *
	 * @param {HTMLElement} el
	 * @param {String} value
	 */
	
	function setElementValue (el, value) {
	  if (el === document.activeElement && canSelectText(el)) {
	    var start = el.selectionStart
	    var end = el.selectionEnd
	    el.value = value
	    el.setSelectionRange(start, end)
	  } else {
	    el.value = value
	  }
	}
	
	/**
	 * For some reason only certain types of inputs can set the selection range.
	 *
	 * @param {HTMLElement} el
	 *
	 * @return {Boolean}
	 */
	
	function canSelectText (el) {
	  return el.tagName === 'INPUT' && ['text','search','password','tel','url'].indexOf(el.type) > -1
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Expose `requestAnimationFrame()`.
	 */
	
	exports = module.exports = window.requestAnimationFrame
	  || window.webkitRequestAnimationFrame
	  || window.mozRequestAnimationFrame
	  || fallback;
	
	/**
	 * Fallback implementation.
	 */
	
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime();
	  var ms = Math.max(0, 16 - (curr - prev));
	  var req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}
	
	/**
	 * Cancel.
	 */
	
	var cancel = window.cancelAnimationFrame
	  || window.webkitCancelAnimationFrame
	  || window.mozCancelAnimationFrame
	  || window.clearTimeout;
	
	exports.cancel = function(id){
	  cancel.call(window, id);
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	/*global window*/
	
	/**
	 * Check if object is dom node.
	 *
	 * @param {Object} val
	 * @return {Boolean}
	 * @api public
	 */
	
	module.exports = function isNode(val){
	  if (!val || typeof val !== 'object') return false;
	  if (window && 'object' == typeof window.Node) return val instanceof window.Node;
	  return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	/** generate unique id for selector */
	var counter = Date.now() % 1e9;
	
	module.exports = function getUid(){
		return (Math.random() * 1e9 >>> 0) + (counter++);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
	  'use strict';
	
	  /*istanbul ignore next:cant test*/
	  if (typeof module === 'object' && typeof module.exports === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    // Browser globals
	    root.objectPath = factory();
	  }
	})(this, function(){
	  'use strict';
	
	  var
	    toStr = Object.prototype.toString,
	    _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  function isEmpty(value){
	    if (!value) {
	      return true;
	    }
	    if (isArray(value) && value.length === 0) {
	        return true;
	    } else if (!isString(value)) {
	        for (var i in value) {
	            if (_hasOwnProperty.call(value, i)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    return false;
	  }
	
	  function toString(type){
	    return toStr.call(type);
	  }
	
	  function isNumber(value){
	    return typeof value === 'number' || toString(value) === "[object Number]";
	  }
	
	  function isString(obj){
	    return typeof obj === 'string' || toString(obj) === "[object String]";
	  }
	
	  function isObject(obj){
	    return typeof obj === 'object' && toString(obj) === "[object Object]";
	  }
	
	  function isArray(obj){
	    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
	  }
	
	  function isBoolean(obj){
	    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
	  }
	
	  function getKey(key){
	    var intKey = parseInt(key);
	    if (intKey.toString() === key) {
	      return intKey;
	    }
	    return key;
	  }
	
	  function set(obj, path, value, doNotReplace){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isString(path)) {
	      return set(obj, path.split('.').map(getKey), value, doNotReplace);
	    }
	    var currentPath = path[0];
	
	    if (path.length === 1) {
	      var oldVal = obj[currentPath];
	      if (oldVal === void 0 || !doNotReplace) {
	        obj[currentPath] = value;
	      }
	      return oldVal;
	    }
	
	    if (obj[currentPath] === void 0) {
	      //check if we assume an array
	      if(isNumber(path[1])) {
	        obj[currentPath] = [];
	      } else {
	        obj[currentPath] = {};
	      }
	    }
	
	    return set(obj[currentPath], path.slice(1), value, doNotReplace);
	  }
	
	  function del(obj, path) {
	    if (isNumber(path)) {
	      path = [path];
	    }
	
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if(isString(path)) {
	      return del(obj, path.split('.'));
	    }
	
	    var currentPath = getKey(path[0]);
	    var oldVal = obj[currentPath];
	
	    if(path.length === 1) {
	      if (oldVal !== void 0) {
	        if (isArray(obj)) {
	          obj.splice(currentPath, 1);
	        } else {
	          delete obj[currentPath];
	        }
	      }
	    } else {
	      if (obj[currentPath] !== void 0) {
	        return del(obj[currentPath], path.slice(1));
	      }
	    }
	
	    return obj;
	  }
	
	  var objectPath = function(obj) {
	    return Object.keys(objectPath).reduce(function(proxy, prop) {
	      if (typeof objectPath[prop] === 'function') {
	        proxy[prop] = objectPath[prop].bind(objectPath, obj);
	      }
	
	      return proxy;
	    }, {});
	  };
	
	  objectPath.has = function (obj, path) {
	    if (isEmpty(obj)) {
	      return false;
	    }
	
	    if (isNumber(path)) {
	      path = [path];
	    } else if (isString(path)) {
	      path = path.split('.');
	    }
	
	    if (isEmpty(path) || path.length === 0) {
	      return false;
	    }
	
	    for (var i = 0; i < path.length; i++) {
	      var j = path[i];
	      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
	        obj = obj[j];
	      } else {
	        return false;
	      }
	    }
	
	    return true;
	  };
	
	  objectPath.ensureExists = function (obj, path, value){
	    return set(obj, path, value, true);
	  };
	
	  objectPath.set = function (obj, path, value, doNotReplace){
	    return set(obj, path, value, doNotReplace);
	  };
	
	  objectPath.insert = function (obj, path, value, at){
	    var arr = objectPath.get(obj, path);
	    at = ~~at;
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	    arr.splice(at, 0, value);
	  };
	
	  objectPath.empty = function(obj, path) {
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    var value, i;
	    if (!(value = objectPath.get(obj, path))) {
	      return obj;
	    }
	
	    if (isString(value)) {
	      return objectPath.set(obj, path, '');
	    } else if (isBoolean(value)) {
	      return objectPath.set(obj, path, false);
	    } else if (isNumber(value)) {
	      return objectPath.set(obj, path, 0);
	    } else if (isArray(value)) {
	      value.length = 0;
	    } else if (isObject(value)) {
	      for (i in value) {
	        if (_hasOwnProperty.call(value, i)) {
	          delete value[i];
	        }
	      }
	    } else {
	      return objectPath.set(obj, path, null);
	    }
	  };
	
	  objectPath.push = function (obj, path /*, values */){
	    var arr = objectPath.get(obj, path);
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	
	    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
	  };
	
	  objectPath.coalesce = function (obj, paths, defaultValue) {
	    var value;
	
	    for (var i = 0, len = paths.length; i < len; i++) {
	      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
	        return value;
	      }
	    }
	
	    return defaultValue;
	  };
	
	  objectPath.get = function (obj, path, defaultValue){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return defaultValue;
	    }
	    if (isString(path)) {
	      return objectPath.get(obj, path.split('.'), defaultValue);
	    }
	
	    var currentPath = getKey(path[0]);
	
	    if (path.length === 1) {
	      if (obj[currentPath] === void 0) {
	        return defaultValue;
	      }
	      return obj[currentPath];
	    }
	
	    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
	  };
	
	  objectPath.del = function(obj, path) {
	    return del(obj, path);
	  };
	
	  return objectPath;
	});


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * All of the events can bind to
	 */
	
	module.exports = {
	  onBlur: 'blur',
	  onChange: 'change',
	  onClick: 'click',
	  onContextMenu: 'contextmenu',
	  onCopy: 'copy',
	  onCut: 'cut',
	  onDoubleClick: 'dblclick',
	  onDrag: 'drag',
	  onDragEnd: 'dragend',
	  onDragEnter: 'dragenter',
	  onDragExit: 'dragexit',
	  onDragLeave: 'dragleave',
	  onDragOver: 'dragover',
	  onDragStart: 'dragstart',
	  onDrop: 'drop',
	  onError: 'error',
	  onFocus: 'focus',
	  onInput: 'input',
	  onInvalid: 'invalid',
	  onKeyDown: 'keydown',
	  onKeyPress: 'keypress',
	  onKeyUp: 'keyup',
	  onMouseDown: 'mousedown',
	  onMouseEnter: 'mouseenter',
	  onMouseLeave: 'mouseleave',
	  onMouseMove: 'mousemove',
	  onMouseOut: 'mouseout',
	  onMouseOver: 'mouseover',
	  onMouseUp: 'mouseup',
	  onPaste: 'paste',
	  onReset: 'reset',
	  onScroll: 'scroll',
	  onSubmit: 'submit',
	  onTouchCancel: 'touchcancel',
	  onTouchEnd: 'touchend',
	  onTouchMove: 'touchmove',
	  onTouchStart: 'touchstart',
	  onWheel: 'wheel'
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  isElement: __webpack_require__(37).isElement,
	  isAttribute: __webpack_require__(38),
	  namespace: 'http://www.w3.org/2000/svg'
	}


/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Supported SVG elements
	 *
	 * @type {Array}
	 */
	
	exports.elements = {
	  'animate': true,
	  'circle': true,
	  'defs': true,
	  'ellipse': true,
	  'g': true,
	  'line': true,
	  'linearGradient': true,
	  'mask': true,
	  'path': true,
	  'pattern': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'svg': true,
	  'text': true,
	  'tspan': true
	}
	
	/**
	 * Is element's namespace SVG?
	 *
	 * @param {String} name
	 */
	
	exports.isElement = function (name) {
	  return name in exports.elements
	}


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Supported SVG attributes
	 */
	
	exports.attributes = {
	  'cx': true,
	  'cy': true,
	  'd': true,
	  'dx': true,
	  'dy': true,
	  'fill': true,
	  'fillOpacity': true,
	  'fontFamily': true,
	  'fontSize': true,
	  'fx': true,
	  'fy': true,
	  'gradientTransform': true,
	  'gradientUnits': true,
	  'markerEnd': true,
	  'markerMid': true,
	  'markerStart': true,
	  'offset': true,
	  'opacity': true,
	  'patternContentUnits': true,
	  'patternUnits': true,
	  'points': true,
	  'preserveAspectRatio': true,
	  'r': true,
	  'rx': true,
	  'ry': true,
	  'spreadMethod': true,
	  'stopColor': true,
	  'stopOpacity': true,
	  'stroke': true,
	  'strokeDasharray': true,
	  'strokeLinecap': true,
	  'strokeOpacity': true,
	  'strokeWidth': true,
	  'textAnchor': true,
	  'transform': true,
	  'version': true,
	  'viewBox': true,
	  'x1': true,
	  'x2': true,
	  'x': true,
	  'y1': true,
	  'y2': true,
	  'y': true
	}
	
	/**
	 * Are element's attributes SVG?
	 *
	 * @param {String} attr
	 */
	
	module.exports = function (attr) {
	  return attr in exports.attributes
	}


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict'
	
	module.exports = function(target) {
	  target = target || {}
	
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i]
	    if (!source) continue
	
	    Object.getOwnPropertyNames(source).forEach(function(key) {
	      if (undefined === target[key])
	        target[key] = source[key]
	    })
	  }
	
	  return target
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var forEachArray = __webpack_require__(41),
	    forEachObject = __webpack_require__(43);
	
	/**
	 * # ForEach
	 *
	 * A fast `.forEach()` implementation.
	 *
	 * @param  {Array|Object} subject     The array or object to iterate over.
	 * @param  {Function}     fn          The visitor function.
	 * @param  {Object}       thisContext The context for the visitor.
	 */
	module.exports = function fastForEach (subject, fn, thisContext) {
	  if (subject instanceof Array) {
	    return forEachArray(subject, fn, thisContext);
	  }
	  else {
	    return forEachObject(subject, fn, thisContext);
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindInternal3 = __webpack_require__(42);
	
	/**
	 * # For Each
	 *
	 * A fast `.forEach()` implementation.
	 *
	 * @param  {Array}    subject     The array (or array-like) to iterate over.
	 * @param  {Function} fn          The visitor function.
	 * @param  {Object}   thisContext The context for the visitor.
	 */
	module.exports = function fastForEach (subject, fn, thisContext) {
	  var length = subject.length,
	      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
	      i;
	  for (i = 0; i < length; i++) {
	    iterator(subject[i], i, subject);
	  }
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Internal helper to bind a function known to have 3 arguments
	 * to a given context.
	 */
	module.exports = function bindInternal3 (func, thisContext) {
	  return function (a, b, c) {
	    return func.call(thisContext, a, b, c);
	  };
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindInternal3 = __webpack_require__(42);
	
	/**
	 * # For Each
	 *
	 * A fast object `.forEach()` implementation.
	 *
	 * @param  {Object}   subject     The object to iterate over.
	 * @param  {Function} fn          The visitor function.
	 * @param  {Object}   thisContext The context for the visitor.
	 */
	module.exports = function fastForEachObject (subject, fn, thisContext) {
	  var keys = Object.keys(subject),
	      length = keys.length,
	      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
	      key, i;
	  for (i = 0; i < length; i++) {
	    key = keys[i];
	    iterator(subject[key], key, subject);
	  }
	};


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Analogue of Object.assign().
	 * Copies properties from one or more source objects to
	 * a target object. Existing keys on the target object will be overwritten.
	 *
	 * > Note: This differs from spec in some important ways:
	 * > 1. Will throw if passed non-objects, including `undefined` or `null` values.
	 * > 2. Does not support the curious Exception handling behavior, exceptions are thrown immediately.
	 * > For more details, see:
	 * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 *
	 *
	 *
	 * @param  {Object} target      The target object to copy properties to.
	 * @param  {Object} source, ... The source(s) to copy properties from.
	 * @return {Object}             The updated target object.
	 */
	module.exports = function fastAssign (target) {
	  var totalArgs = arguments.length,
	      source, i, totalKeys, keys, key, j;
	
	  for (i = 1; i < totalArgs; i++) {
	    source = arguments[i];
	    keys = Object.keys(source);
	    totalKeys = keys.length;
	    for (j = 0; j < totalKeys; j++) {
	      key = keys[j];
	      target[key] = source[key];
	    }
	  }
	  return target;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var reduceArray = __webpack_require__(46),
	    reduceObject = __webpack_require__(48);
	
	/**
	 * # Reduce
	 *
	 * A fast `.reduce()` implementation.
	 *
	 * @param  {Array|Object} subject      The array or object to reduce over.
	 * @param  {Function}     fn           The reducer function.
	 * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}       thisContext  The context for the reducer.
	 * @return {Array|Object}              The array or object containing the results.
	 */
	module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
	  if (subject instanceof Array) {
	    return reduceArray(subject, fn, initialValue, thisContext);
	  }
	  else {
	    return reduceObject(subject, fn, initialValue, thisContext);
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindInternal4 = __webpack_require__(47);
	
	/**
	 * # Reduce
	 *
	 * A fast `.reduce()` implementation.
	 *
	 * @param  {Array}    subject      The array (or array-like) to reduce.
	 * @param  {Function} fn           The reducer function.
	 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}   thisContext  The context for the reducer.
	 * @return {mixed}                 The final result.
	 */
	module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
	  var length = subject.length,
	      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
	      i, result;
	
	  if (initialValue === undefined) {
	    i = 1;
	    result = subject[0];
	  }
	  else {
	    i = 0;
	    result = initialValue;
	  }
	
	  for (; i < length; i++) {
	    result = iterator(result, subject[i], i, subject);
	  }
	
	  return result;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Internal helper to bind a function known to have 4 arguments
	 * to a given context.
	 */
	module.exports = function bindInternal4 (func, thisContext) {
	  return function (a, b, c, d) {
	    return func.call(thisContext, a, b, c, d);
	  };
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindInternal4 = __webpack_require__(47);
	
	/**
	 * # Reduce
	 *
	 * A fast object `.reduce()` implementation.
	 *
	 * @param  {Object}   subject      The object to reduce over.
	 * @param  {Function} fn           The reducer function.
	 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}   thisContext  The context for the reducer.
	 * @return {mixed}                 The final result.
	 */
	module.exports = function fastReduceObject (subject, fn, initialValue, thisContext) {
	  var keys = Object.keys(subject),
	      length = keys.length,
	      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
	      i, key, result;
	
	  if (initialValue === undefined) {
	    i = 1;
	    result = subject[keys[0]];
	  }
	  else {
	    i = 0;
	    result = initialValue;
	  }
	
	  for (; i < length; i++) {
	    key = keys[i];
	    result = iterator(result, subject[key], key, subject);
	  }
	
	  return result;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var type = __webpack_require__(50)
	
	/**
	 * Returns the type of a virtual node
	 *
	 * @param  {Object} node
	 * @return {String}
	 */
	
	module.exports = function nodeType (node) {
	  var v = type(node)
	  if (v === 'null' || node === false) return 'empty'
	  if (v !== 'object') return 'text'
	  if (type(node.type) === 'string') return 'element'
	  return 'component'
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/**
	 * toString ref.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
	
	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object Error]': return 'error';
	  }
	
	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val !== val) return 'nan';
	  if (val && val.nodeType === 1) return 'element';
	
	  if (typeof Buffer != 'undefined' && Buffer.isBuffer(val)) return 'buffer';
	
	  val = val.valueOf
	    ? val.valueOf()
	    : Object.prototype.valueOf.apply(val)
	
	  return typeof val;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51).Buffer))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(52)
	var ieee754 = __webpack_require__(53)
	var isArray = __webpack_require__(54)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51).Buffer, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 53 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 54 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var defaults = __webpack_require__(39)
	var nodeType = __webpack_require__(49)
	var type = __webpack_require__(50)
	
	/**
	 * Expose `stringify`.
	 */
	
	module.exports = function (app) {
	  if (!app.element) {
	    throw new Error('No element mounted')
	  }
	
	  /**
	   * Render to string.
	   *
	   * @param {Component} component
	   * @param {Object} [props]
	   * @return {String}
	   */
	
	  function stringify (component, optProps, children) {
	    var propTypes = component.propTypes || {}
	    var props = defaults(optProps || {}, component.defaultProps || {})
	    var state = component.initialState ? component.initialState(props) : {}
	    props.children = children;
	
	    for (var name in propTypes) {
	      var options = propTypes[name]
	      if (options.source) {
	        props[name] = app.sources[options.source]
	      }
	    }
	
	    if (component.beforeMount) component.beforeMount({ props: props, state: state })
	    if (component.beforeRender) component.beforeRender({ props: props, state: state })
	    var node = component.render({ props: props, state: state })
	    return stringifyNode(node, '0')
	  }
	
	  /**
	   * Render a node to a string
	   *
	   * @param {Node} node
	   * @param {Tree} tree
	   *
	   * @return {String}
	   */
	
	  function stringifyNode (node, path) {
	    switch (nodeType(node)) {
	      case 'empty': return '<noscript />'
	      case 'text': return node
	      case 'element':
	        var children = node.children
	        var attributes = node.attributes
	        var tagName = node.type
	        var innerHTML = attributes.innerHTML
	        var str = '<' + tagName + attrs(attributes) + '>'
	
	        if (innerHTML) {
	          str += innerHTML
	        } else {
	          for (var i = 0, n = children.length; i < n; i++) {
	            str += stringifyNode(children[i], path + '.' + i)
	          }
	        }
	
	        str += '</' + tagName + '>'
	        return str
	      case 'component': return stringify(node.type, node.attributes, node.children)
	    }
	
	    throw new Error('Invalid type')
	  }
	
	  return stringifyNode(app.element, '0')
	}
	
	/**
	 * HTML attributes to string.
	 *
	 * @param {Object} attributes
	 * @return {String}
	 * @api private
	 */
	
	function attrs (attributes) {
	  var str = ''
	  for (var key in attributes) {
	    var value = attributes[key]
	    if (key === 'innerHTML') continue
	    if (isValidAttributeValue(value)) str += attr(key, attributes[key])
	  }
	  return str
	}
	
	/**
	 * HTML attribute to string.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @return {String}
	 * @api private
	 */
	
	function attr (key, val) {
	  return ' ' + key + '="' + val + '"'
	}
	
	/**
	 * Is a value able to be set a an attribute value?
	 *
	 * @param {Any} value
	 *
	 * @return {Boolean}
	 */
	
	function isValidAttributeValue (value) {
	  var valueType = type(value)
	  switch (valueType) {
	  case 'string':
	  case 'number':
	    return true;
	
	  case 'boolean':
	    return value;
	
	  default:
	    return false;
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _swipeJsIso = __webpack_require__(57);
	
	var _swipeJsIso2 = _interopRequireDefault(_swipeJsIso);
	
	var _virtualElement = __webpack_require__(21);
	
	var _virtualElement2 = _interopRequireDefault(_virtualElement);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/** @jsx element */
	
	var Swipe = {
	  initialState: function initialState() {
	    return { secondsElapsed: 0 };
	  },
	
	  propTypes: {
	    classPrefix: {
	      type: 'string'
	    },
	    startSlide: {
	      type: 'number'
	    },
	    slideToIndex: {
	      type: 'number'
	    },
	    speed: {
	      type: 'number'
	    },
	    auto: {
	      type: 'number'
	    },
	    continuous: {
	      type: 'boolean'
	    },
	    callback: {
	      type: 'function'
	    },
	    transitionEnd: {
	      type: 'function'
	    }
	  },
	
	  defaultProps: {
	    classPrefix: 'deku-swipe'
	  },
	
	  render: function render(component) {
	    var props = component.props;
	    var state = component.state;
	    var arrows = props.arrows;
	    var arrowNext = props.arrowNext;
	    var arrowPrev = props.arrowPrev;
	    var children = props.children;
	    var classPrefix = props.classPrefix;
	
	    function getArrows() {
	      if (!arrows) return null;
	
	      return (0, _virtualElement2.default)('div', { 'class': classPrefix + '__arrows', 'class': 'swipe-buttons' }, (0, _virtualElement2.default)('button', { 'class': classPrefix + '__arrows  ' + classPrefix + '__arrows--prev' }, arrowPrev || null), (0, _virtualElement2.default)('button', { 'class': classPrefix + '__arrows  ' + classPrefix + '__arrows--next' }, arrowNext || null));
	    }
	
	    return (0, _virtualElement2.default)('div', { id: 'deku-swipe', 'class': '' + classPrefix }, (0, _virtualElement2.default)('div', { 'class': classPrefix + '__wrap' }, children), getArrows());
	  },
	  afterUpdate: function afterUpdate(component) {
	    var props = component.props;
	    var state = component.state;
	  },
	  afterMount: function afterMount(component, el, setState) {
	    var props = component.props;
	    var state = component.state;
	    var arrows = props.arrows;
	    var startSlide = props.startSlide;
	    var speed = props.speed;
	    var auto = props.auto;
	    var continuous = props.continuous;
	    var callback = props.callback;
	    var transitionEnd = props.transitionEnd;
	    var classPrefix = props.classPrefix;
	
	    var swipe = (0, _swipeJsIso2.default)(document.getElementById('deku-swipe'), {
	      startSlide: startSlide,
	      speed: speed,
	      auto: auto,
	      continuous: continuous,
	      callback: callback,
	      transitionEnd: transitionEnd
	    });
	
	    if (arrows) {
	      var prev = el.querySelector('.' + classPrefix + '__arrows--prev');
	      var next = el.querySelector('.' + classPrefix + '__arrows--next');
	
	      prev.addEventListener('click', function (e) {
	        e.preventDefault();
	        swipe.prev();
	      });
	
	      next.addEventListener('click', function (e) {
	        e.preventDefault();
	        swipe.next();
	      });
	    }
	  },
	  beforeUnmount: function beforeUnmount(component) {
	    clearInterval(component.interval);
	  }
	};
	
	exports.default = Swipe;

/***/ },
/* 57 */
/***/ function(module, exports) {

	/*
	 * Swipe 2.0.0
	 * Brad Birdsall
	 * https://github.com/thebird/Swipe
	 * Copyright 2013-2015, MIT License
	 *
	*/
	
	(function (root, factory) {
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = factory();
	    } else {
	        root.Swipe = factory();
	    }
	}(this, function () {
	  'use strict';
	
	  return function Swipe (container, options) {
	    // utilities
	    var noop = function() {}; // simple no operation function
	    var offloadFn = function(fn) { setTimeout(fn || noop, 0); }; // offload a functions execution
	
	    // check browser capabilities
	    var browser = {
	      addEventListener: !!window.addEventListener,
	      touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
	      transitions: (function(temp) {
	        var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
	        for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
	        return false;
	      })(document.createElement('swipe'))
	    };
	
	    // quit if no root element
	    if (!container) return;
	    var element = container.children[0];
	    var slides, slidePos, width, length;
	    options = options || {};
	    var index = parseInt(options.startSlide, 10) || 0;
	    var speed = options.speed || 300;
	    options.continuous = options.continuous !== undefined ? options.continuous : true;
	
	    function setup() {
	
	      // cache slides
	      slides = element.children;
	      length = slides.length;
	
	      // set continuous to false if only one slide
	      if (slides.length < 2) options.continuous = false;
	
	      //special case if two slides
	      if (browser.transitions && options.continuous && slides.length < 3) {
	        element.appendChild(slides[0].cloneNode(true));
	        element.appendChild(element.children[1].cloneNode(true));
	        slides = element.children;
	      }
	
	      // create an array to store current positions of each slide
	      slidePos = new Array(slides.length);
	
	      // determine width of each slide
	      width = container.getBoundingClientRect().width || container.offsetWidth;
	
	      element.style.width = (slides.length * width) + 'px';
	
	      // stack elements
	      var pos = slides.length;
	      while(pos--) {
	
	        var slide = slides[pos];
	
	        slide.style.width = width + 'px';
	        slide.setAttribute('data-index', pos);
	
	        if (browser.transitions) {
	          slide.style.left = (pos * -width) + 'px';
	          move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
	        }
	
	      }
	
	      // reposition elements before and after index
	      if (options.continuous && browser.transitions) {
	        move(circle(index-1), -width, 0);
	        move(circle(index+1), width, 0);
	      }
	
	      if (!browser.transitions) element.style.left = (index * -width) + 'px';
	
	      container.style.visibility = 'visible';
	
	    }
	
	    function prev() {
	
	      if (options.continuous) slide(index-1);
	      else if (index) slide(index-1);
	
	    }
	
	    function next() {
	
	      if (options.continuous) slide(index+1);
	      else if (index < slides.length - 1) slide(index+1);
	
	    }
	
	    function circle(index) {
	
	      // a simple positive modulo using slides.length
	      return (slides.length + (index % slides.length)) % slides.length;
	
	    }
	
	    function slide(to, slideSpeed) {
	
	      // do nothing if already on requested slide
	      if (index == to) return;
	
	      if (browser.transitions) {
	
	        var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward
	
	        // get the actual position of the slide
	        if (options.continuous) {
	          var natural_direction = direction;
	          direction = -slidePos[circle(to)] / width;
	
	          // if going forward but to < index, use to = slides.length + to
	          // if going backward but to > index, use to = -slides.length + to
	          if (direction !== natural_direction) to =  -direction * slides.length + to;
	
	        }
	
	        var diff = Math.abs(index-to) - 1;
	
	        // move all the slides between index and to in the right direction
	        while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
	
	        to = circle(to);
	
	        move(index, width * direction, slideSpeed || speed);
	        move(to, 0, slideSpeed || speed);
	
	        if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
	
	      } else {
	
	        to = circle(to);
	        animate(index * -width, to * -width, slideSpeed || speed);
	        //no fallback for a circular continuous if the browser does not accept transitions
	      }
	
	      index = to;
	      offloadFn(options.callback && options.callback(index, slides[index]));
	    }
	
	    function move(index, dist, speed) {
	
	      translate(index, dist, speed);
	      slidePos[index] = dist;
	
	    }
	
	    function translate(index, dist, speed) {
	
	      var slide = slides[index];
	      var style = slide && slide.style;
	
	      if (!style) return;
	
	      style.webkitTransitionDuration =
	      style.MozTransitionDuration =
	      style.msTransitionDuration =
	      style.OTransitionDuration =
	      style.transitionDuration = speed + 'ms';
	
	      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	      style.msTransform =
	      style.MozTransform =
	      style.OTransform = 'translateX(' + dist + 'px)';
	
	    }
	
	    function animate(from, to, speed) {
	
	      // if not an animation, just reposition
	      if (!speed) {
	
	        element.style.left = to + 'px';
	        return;
	
	      }
	
	      var start = +new Date();
	
	      var timer = setInterval(function() {
	
	        var timeElap = +new Date() - start;
	
	        if (timeElap > speed) {
	
	          element.style.left = to + 'px';
	
	          if (delay) begin();
	
	          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
	
	          clearInterval(timer);
	          return;
	
	        }
	
	        element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';
	
	      }, 4);
	
	    }
	
	    // setup auto slideshow
	    var delay = options.auto || 0;
	    var interval;
	
	    function begin() {
	
	      interval = setTimeout(next, delay);
	
	    }
	
	    function stop() {
	
	      delay = 0;
	      clearTimeout(interval);
	
	    }
	
	
	    // setup initial vars
	    var start = {};
	    var delta = {};
	    var isScrolling;
	
	    // setup event capturing
	    var events = {
	
	      handleEvent: function(event) {
	
	        switch (event.type) {
	          case 'touchstart': this.start(event); break;
	          case 'touchmove': this.move(event); break;
	          case 'touchend': offloadFn(this.end(event)); break;
	          case 'webkitTransitionEnd':
	          case 'msTransitionEnd':
	          case 'oTransitionEnd':
	          case 'otransitionend':
	          case 'transitionend': offloadFn(this.transitionEnd(event)); break;
	          case 'resize': offloadFn(setup); break;
	        }
	
	        if (options.stopPropagation) event.stopPropagation();
	
	      },
	      start: function(event) {
	
	        var touches = event.touches[0];
	
	        // measure start values
	        start = {
	
	          // get initial touch coords
	          x: touches.pageX,
	          y: touches.pageY,
	
	          // store time to determine touch duration
	          time: +new Date()
	
	        };
	
	        // used for testing first move event
	        isScrolling = undefined;
	
	        // reset delta and end measurements
	        delta = {};
	
	        // attach touchmove and touchend listeners
	        element.addEventListener('touchmove', this, false);
	        element.addEventListener('touchend', this, false);
	
	      },
	      move: function(event) {
	
	        // ensure swiping with one touch and not pinching
	        if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;
	
	        if (options.disableScroll) event.preventDefault();
	
	        var touches = event.touches[0];
	
	        // measure change in x and y
	        delta = {
	          x: touches.pageX - start.x,
	          y: touches.pageY - start.y
	        };
	
	        // determine if scrolling test has run - one time test
	        if ( typeof isScrolling == 'undefined') {
	          isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
	        }
	
	        // if user is not trying to scroll vertically
	        if (!isScrolling) {
	
	          // prevent native scrolling
	          event.preventDefault();
	
	          // stop slideshow
	          stop();
	
	          // increase resistance if first or last slide
	          if (options.continuous) { // we don't add resistance at the end
	
	            translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
	            translate(index, delta.x + slidePos[index], 0);
	            translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);
	
	          } else {
	
	            delta.x =
	              delta.x /
	                ( (!index && delta.x > 0 ||         // if first slide and sliding left
	                  index == slides.length - 1 &&     // or if last slide and sliding right
	                  delta.x < 0                       // and if sliding at all
	                ) ?
	                ( Math.abs(delta.x) / width + 1 )      // determine resistance level
	                : 1 );                                 // no resistance if false
	
	            // translate 1:1
	            translate(index-1, delta.x + slidePos[index-1], 0);
	            translate(index, delta.x + slidePos[index], 0);
	            translate(index+1, delta.x + slidePos[index+1], 0);
	          }
	
	        }
	
	      },
	      end: function(event) {
	
	        // measure duration
	        var duration = +new Date() - start.time;
	
	        // determine if slide attempt triggers next/prev slide
	        var isValidSlide =
	              Number(duration) < 250 &&         // if slide duration is less than 250ms
	              Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
	              Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width
	
	        // determine if slide attempt is past start and end
	        var isPastBounds =
	              !index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
	              index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0
	
	        if (options.continuous) isPastBounds = false;
	
	        // determine direction of swipe (true:right, false:left)
	        var direction = delta.x < 0;
	
	        // if not scrolling vertically
	        if (!isScrolling) {
	
	          if (isValidSlide && !isPastBounds) {
	
	            if (direction) {
	
	              if (options.continuous) { // we need to get the next in this direction in place
	
	                move(circle(index-1), -width, 0);
	                move(circle(index+2), width, 0);
	
	              } else {
	                move(index-1, -width, 0);
	              }
	
	              move(index, slidePos[index]-width, speed);
	              move(circle(index+1), slidePos[circle(index+1)]-width, speed);
	              index = circle(index+1);
	
	            } else {
	              if (options.continuous) { // we need to get the next in this direction in place
	
	                move(circle(index+1), width, 0);
	                move(circle(index-2), -width, 0);
	
	              } else {
	                move(index+1, width, 0);
	              }
	
	              move(index, slidePos[index]+width, speed);
	              move(circle(index-1), slidePos[circle(index-1)]+width, speed);
	              index = circle(index-1);
	
	            }
	
	            options.callback && options.callback(index, slides[index]);
	
	          } else {
	
	            if (options.continuous) {
	
	              move(circle(index-1), -width, speed);
	              move(index, 0, speed);
	              move(circle(index+1), width, speed);
	
	            } else {
	
	              move(index-1, -width, speed);
	              move(index, 0, speed);
	              move(index+1, width, speed);
	            }
	
	          }
	
	        }
	
	        // kill touchmove and touchend event listeners until touchstart called again
	        element.removeEventListener('touchmove', events, false);
	        element.removeEventListener('touchend', events, false);
	
	      },
	      transitionEnd: function(event) {
	
	        if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
	
	          if (delay) begin();
	
	          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
	
	        }
	
	      }
	
	    };
	
	    // trigger setup
	    setup();
	
	    // start auto slideshow if applicable
	    if (delay) begin();
	
	
	    // add event listeners
	    if (browser.addEventListener) {
	
	      // set touchstart event on element
	      if (browser.touch) element.addEventListener('touchstart', events, false);
	
	      if (browser.transitions) {
	        element.addEventListener('webkitTransitionEnd', events, false);
	        element.addEventListener('msTransitionEnd', events, false);
	        element.addEventListener('oTransitionEnd', events, false);
	        element.addEventListener('otransitionend', events, false);
	        element.addEventListener('transitionend', events, false);
	      }
	
	      // set resize event on window
	      window.addEventListener('resize', events, false);
	
	    } else {
	
	      window.onresize = function () { setup(); }; // to play nice with old IE
	
	    }
	
	    // expose the Swipe API
	    return {
	      setup: function() {
	
	        setup();
	
	      },
	      slide: function(to, speed) {
	
	        // cancel slideshow
	        stop();
	
	        slide(to, speed);
	
	      },
	      prev: function() {
	
	        // cancel slideshow
	        stop();
	
	        prev();
	
	      },
	      next: function() {
	
	        // cancel slideshow
	        stop();
	
	        next();
	
	      },
	      stop: function() {
	
	        // cancel slideshow
	        stop();
	
	      },
	      getPos: function() {
	
	        // return current index position
	        return index;
	
	      },
	      getNumSlides: function() {
	
	        // return total number of slides
	        return length;
	      },
	      kill: function() {
	
	        // cancel slideshow
	        stop();
	
	        // reset element
	        element.style.width = '';
	        element.style.left = '';
	
	        // reset slides
	        var pos = slides.length;
	        while(pos--) {
	
	          var slide = slides[pos];
	          slide.style.width = '';
	          slide.style.left = '';
	
	          if (browser.transitions) translate(pos, 0, 0);
	        }
	
	        // removed event listeners
	        if (browser.addEventListener) {
	
	          // remove current event listeners
	          element.removeEventListener('touchstart', events, false);
	          element.removeEventListener('webkitTransitionEnd', events, false);
	          element.removeEventListener('msTransitionEnd', events, false);
	          element.removeEventListener('oTransitionEnd', events, false);
	          element.removeEventListener('otransitionend', events, false);
	          element.removeEventListener('transitionend', events, false);
	          window.removeEventListener('resize', events, false);
	
	        } else {
	          window.onresize = null;
	        }
	      }
	    };
	  };
	}));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handlers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handlers.js":
/*!*********************!*\
  !*** ./handlers.js ***!
  \*********************/
/*! exports provided: importApplicant, createTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_importApplicant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/importApplicant */ "./handlers/importApplicant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importApplicant", function() { return _handlers_importApplicant__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _handlers_createTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/createTemplates */ "./handlers/createTemplates.js");
/* harmony import */ var _handlers_createTemplates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_handlers_createTemplates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createTemplates", function() { return _handlers_createTemplates__WEBPACK_IMPORTED_MODULE_1___default.a; });





/***/ }),

/***/ "./handlers/createTemplates.js":
/*!*************************************!*\
  !*** ./handlers/createTemplates.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

'https://import-applicant.s3-us-west-1.amazonaws.com/templates/WPD_Reference_Questionnaire.docx';

/***/ }),

/***/ "./handlers/importApplicant.js":
/*!*************************************!*\
  !*** ./handlers/importApplicant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const xlsx = __webpack_require__(/*! ../helpers/xlsxReader */ "./helpers/xlsxReader.js");

const AWS = __webpack_require__(/*! aws-sdk */ "aws-sdk");

AWS.config.update({
  region: 'us-west-1'
});
const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});
/* harmony default export */ __webpack_exports__["default"] = (async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('start');
    const params = {
      Bucket: event.Records[0].s3.bucket.name,
      Key: event.Records[0].s3.object.key
    };
    const stream = s3.getObject(params, (err, data) => {
      console.log('getObject start');

      if (err) {
        console.error('ERROR: ', err);
      } else {
        console.log('data running');
      }
    }).createReadStream();
    console.log('stream created');
    const newApplicant = xlsx.parseStream(stream);
    console.log(newApplicant);
    console.log('end');
  } catch (ex) {
    console.error(ex);
  }
}); // const filePath = `https://import-applicant.s3-us-west-1.amazonaws.com/${event.Records[0].s3.object.key}`

/***/ }),

/***/ "./helpers/xlsxReader.js":
/*!*******************************!*\
  !*** ./helpers/xlsxReader.js ***!
  \*******************************/
/*! exports provided: parseStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStream", function() { return parseStream; });
const XLSX = __webpack_require__(/*! xlsx */ "xlsx");

const parseStream = stream => {
  try {
    console.log('begin stream read');
    const buffers = [];
    stream.on('data', data => buffers.push(data));
    stream.on('end', () => {
      console.log('end event');
      const buffer = Buffer.concat(buffers);
      const workbook = XLSX.read(buffer, {
        type: 'buffer'
      });
      const result = read(workbook);
      console.log('end stream read');
      return result;
    });
  } catch (ex) {
    console.error('ERROR: parseStream - ', ex);
    return ex;
  }
};
const tabs = ['applicant'];

const read = workbook => {
  try {
    console.log('begin part workbook contents');
    return tabs.reduce((result, tab) => ({ ...result,
      [tab]: XLSX.utils.sheet_to_json(workbook.Sheets[tab])
    }), {});
  } catch (ex) {
    console.error('ERROR: read - ', ex);
    return ex;
  }
};

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ })

/******/ })));
//# sourceMappingURL=handlers.js.map
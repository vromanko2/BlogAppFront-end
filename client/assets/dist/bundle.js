/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/componentParts/CreatePost/CreatePost.css":
/*!*********************************************************!*\
  !*** ./client/componentParts/CreatePost/CreatePost.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./CreatePost.css */ \"./node_modules/css-loader/dist/cjs.js!./client/componentParts/CreatePost/CreatePost.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/componentParts/CreatePost/CreatePost.css?");

/***/ }),

/***/ "./client/componentParts/CreatePost/CreatePost.js":
/*!********************************************************!*\
  !*** ./client/componentParts/CreatePost/CreatePost.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CreatePost = () => {\n    let container = document.createElement('div');\n    container.className = 'create-post__wrapper';\n    container.innerHTML = `\n        <form>\n            <label for=\"title\">Title</label>\n            <input class=\"create-post__input\" type=\"text\" id=\"title\" name=\"title\">\n            <label for=\"text\">Last Name</label>\n            <input class=\"create-post__input\" type=\"text\" id=\"text\" name=\"text\">\n        </form>\n    `;\n\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePost);\n\n\n//# sourceURL=webpack:///./client/componentParts/CreatePost/CreatePost.js?");

/***/ }),

/***/ "./client/componentParts/CreatePost/index.js":
/*!***************************************************!*\
  !*** ./client/componentParts/CreatePost/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreatePost_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePost.css */ \"./client/componentParts/CreatePost/CreatePost.css\");\n/* harmony import */ var _CreatePost_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CreatePost_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CreatePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatePost */ \"./client/componentParts/CreatePost/CreatePost.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _CreatePost__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/componentParts/CreatePost/index.js?");

/***/ }),

/***/ "./client/componentParts/Post/Post.css":
/*!*********************************************!*\
  !*** ./client/componentParts/Post/Post.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Post.css */ \"./node_modules/css-loader/dist/cjs.js!./client/componentParts/Post/Post.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/componentParts/Post/Post.css?");

/***/ }),

/***/ "./client/componentParts/Post/Post.js":
/*!********************************************!*\
  !*** ./client/componentParts/Post/Post.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Post = () => {\n    let container = document.createElement('div');\n    container.className = 'post__wrapper';\n    container.innerHTML = `\n        <h2 class=\"post__title\"></h2>\n        <p class=\"post__text\"></p>\n        <h3 class=\"post__author\"></h3>\n        <span class=\"post__created\"></span>\n    `;\n\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n\n//# sourceURL=webpack:///./client/componentParts/Post/Post.js?");

/***/ }),

/***/ "./client/componentParts/Post/index.js":
/*!*********************************************!*\
  !*** ./client/componentParts/Post/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.css */ \"./client/componentParts/Post/Post.css\");\n/* harmony import */ var _Post_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Post_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./client/componentParts/Post/Post.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/componentParts/Post/index.js?");

/***/ }),

/***/ "./client/componentParts/UserObj/UserObj.css":
/*!***************************************************!*\
  !*** ./client/componentParts/UserObj/UserObj.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./UserObj.css */ \"./node_modules/css-loader/dist/cjs.js!./client/componentParts/UserObj/UserObj.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/componentParts/UserObj/UserObj.css?");

/***/ }),

/***/ "./client/componentParts/UserObj/UserObj.js":
/*!**************************************************!*\
  !*** ./client/componentParts/UserObj/UserObj.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UserObj = () => {\n    let container = document.createElement('div');\n    container.className = 'user__wrapper';\n    container.innerHTML = `\n        <h2 class=\"user__username\"></h2>\n        <button class=\"user__subscribe\">Subscribe</button>\n    `;\n\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserObj);\n\n\n//# sourceURL=webpack:///./client/componentParts/UserObj/UserObj.js?");

/***/ }),

/***/ "./client/componentParts/UserObj/index.js":
/*!************************************************!*\
  !*** ./client/componentParts/UserObj/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserObj_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserObj.css */ \"./client/componentParts/UserObj/UserObj.css\");\n/* harmony import */ var _UserObj_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_UserObj_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserObj */ \"./client/componentParts/UserObj/UserObj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _UserObj__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/componentParts/UserObj/index.js?");

/***/ }),

/***/ "./client/components/NavBar/NavBar.css":
/*!*********************************************!*\
  !*** ./client/components/NavBar/NavBar.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./NavBar.css */ \"./node_modules/css-loader/dist/cjs.js!./client/components/NavBar/NavBar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.css?");

/***/ }),

/***/ "./client/components/NavBar/NavBar.js":
/*!********************************************!*\
  !*** ./client/components/NavBar/NavBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst NavBar = () => {\n    let container = document.createElement(\"nav\");\n    container.className = \"nav-bar\";\n    container.innerHTML =\n        `<div class=\"nav-bar__wrapper\">\n            <a>\n                <div class=\"nav-bar__logo\">\n                    <div class=\"icon__logo\">Logo</div>\n                </div>\n            </a>\n            <div class=\"nav-bar__navigation\">\n                <a><div class=\"nav-bar__home\">Main page</div></a>\n                <a><div class=\"nav-bar__post-create\">Create a post</div></a>\n                <a><div class=\"nav-bar__users\">All users</div></a>\n            </div>\n        </div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.js?");

/***/ }),

/***/ "./client/components/NavBar/index.js":
/*!*******************************************!*\
  !*** ./client/components/NavBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.css */ \"./client/components/NavBar/NavBar.css\");\n/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NavBar_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./client/components/NavBar/NavBar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/index.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.scss */ \"./client/layout.scss\");\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _componentParts_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentParts/Post */ \"./client/componentParts/Post/index.js\");\n/* harmony import */ var _componentParts_UserObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentParts/UserObj */ \"./client/componentParts/UserObj/index.js\");\n/* harmony import */ var _componentParts_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentParts/CreatePost */ \"./client/componentParts/CreatePost/index.js\");\n\n\n\n\n\n\n\n\nconst LayoutHeader = document.getElementsByClassName(\"Layout__header\")[0];\nconst LayoutMain = document.getElementsByClassName(\"Layout__main\")[0];\nconst LayoutFooter = document.getElementsByClassName(\"Layout__footer\")[0];\n\nconst backend_url = \"http://0.0.0.0:8000/api/v1/\";\n\nLayoutHeader.appendChild(Object(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\nconst sample_data = {\n    \"id\": 1,\n    \"first_name\": \"Veronika\",\n    \"last_name\": \"Romanko\",\n    \"email\": \"veronika.romanko@gmail.com\"\n};\n\n\nconst getUserNewsFeed = () => {\n    let Url = backend_url + 'user/' + sample_data['id'] + '/news_feed';\n    let otherParam = {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n        }\n\n    };\n    let i = 0;\n    fetch(Url, otherParam)\n        .then(response => response.json())\n        .then((contents) => {\n            // console.log(contents)\n            contents.forEach(elem => {\n                let user = document.getElementsByClassName('user__wrapper')[0];\n                let post = document.getElementsByClassName('nav-bar__post-create')[0];\n                if (user) {\n                    LayoutMain.removeChild(user);\n                }\n                if (post){\n                    LayoutMain.removeChild(post);\n                }\n                LayoutMain.appendChild(Object(_componentParts_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n                document.getElementsByClassName('post__title')[i].innerHTML = elem['title'];\n                document.getElementsByClassName('post__text')[i].innerHTML = elem['text'];\n                document.getElementsByClassName('post__author')[i].innerHTML = \"Author id: \" + elem['author'];\n                document.getElementsByClassName('post__created')[i].innerHTML = \"Created at: \" + elem['created_at'];\n                i++;\n            })\n        })\n        .catch(() => console.log(\"Can’t access \" + Url + \" response. Blocked by browser?\"));\n};\n\nconst getAllUsers = async (e) => {\n    e.preventDefault();\n    let response = await fetch(backend_url + 'users/', {\n        method: 'GET', // или 'PUT'\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    });\n    let jsonResponse = await response.json();\n    let i = 0;\n    // console.log(jsonResponse)\n    jsonResponse.forEach(elem => {\n        let post = document.getElementsByClassName('post__wrapper')[0];\n        LayoutMain.removeChild(post);\n        LayoutMain.appendChild(Object(_componentParts_UserObj__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n        document.getElementsByClassName('user__username')[i].innerHTML = elem['username'];\n        console.log(elem)\n        i++\n    })\n};\n\nconst create_post = () => {\n    let users = document.getElementsByClassName('user__wrapper');\n    users.forEach(user_elem => {\n        LayoutMain.removeChild(user_elem);\n    });\n    let posts = document.getElementsByClassName('nav-bar__post-create').length;\n    posts.forEach(post_elem => {\n        LayoutMain.removeChild(post_elem);\n    });\n    LayoutMain.appendChild(Object(_componentParts_CreatePost__WEBPACK_IMPORTED_MODULE_4__[\"default\"])())\n    // if (user) {\n    //     LayoutMain.removeChild(user);\n    // }\n    // if (post){\n    //\n    // }\n\n    // let data = {\n    //     'title': document.getElementsByClassName('create-post__input')[0].text,\n    //     'text': document.getElementsByClassName('create-post__input')[1].text\n    // };\n    // e.preventDefault();\n    // let response = await fetch(backend_url + \"api/\", {\n    //     method: 'POST', // или 'PUT'\n    //     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!\n    //     headers: {\n    //         'Content-Type': 'application/json',\n    //     }\n    // });\n    //\n    // let jsonResponse = await response.json();\n\n};\n\n\n// let all_users_button = document.getElementsByClassName('nav-bar__about')[0];\n// all_users_button.addEventListener('click', getAllUsers);\n//\n// let main_paige_button = document.getElementsByClassName('nav-bar__home')[0];\n// main_paige_button.addEventListener('click', getUserNewsFeed);\n\n//\n// let post_create_button = document.getElementsByClassName('nav-bar__post-create')[0];\n// post_create_button.addEventListener('click', create_post);\n\n\n\n\ngetUserNewsFeed();\n\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/layout.scss":
/*!****************************!*\
  !*** ./client/layout.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./layout.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/layout.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/layout.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/componentParts/CreatePost/CreatePost.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/componentParts/CreatePost/CreatePost.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"create-post__wrapper {\\n  border: 1px solid white;\\n  border-radius: 15px;\\n  padding: 20px;\\n}\\ncreate-post__input {\\n  width: 100%;\\n  padding: 12px 20px;\\n  margin: 8px 0;\\n  box-sizing: border-box;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/componentParts/CreatePost/CreatePost.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/componentParts/Post/Post.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/componentParts/Post/Post.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".post__wrapper {\\n  width: 100%;\\n  background: white;\\n  margin-bottom: 30px;\\n  padding: 20px;\\n  border-radius: 15px;\\n}\\n.post__author {\\n  font-size: 15px;\\n}\\n.post__created {\\n  font-size: 10px;\\n  color: gray;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/componentParts/Post/Post.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/componentParts/UserObj/UserObj.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/componentParts/UserObj/UserObj.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".user__wrapper {\\n  border-radius: 10px;\\n  background: white;\\n  margin-bottom: 30px;\\n  padding: 15px;\\n}\\n.user__subscribe {\\n  border: none;\\n  color: white;\\n  padding: 15px 32px;\\n  text-align: center;\\n  text-decoration: none;\\n  background: #C3F7AF;\\n  font-size: 12px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/componentParts/UserObj/UserObj.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/components/NavBar/NavBar.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/components/NavBar/NavBar.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".nav-bar {\\n  border-bottom: 1px solid white;\\n}\\n.nav-bar a {\\n  cursor: pointer;\\n  text-decoration: none;\\n}\\n.nav-bar__wrapper {\\n  margin: auto;\\n  box-sizing: border-box;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-direction: row;\\n  max-width: 1000px;\\n}\\n.nav-bar__logo {\\n  display: flex;\\n  margin: 10px;\\n  padding: 15px 30px;\\n  background: white;\\n}\\n.nav-bar__navigation {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  flex-direction: row;\\n}\\n.nav-bar__home, .nav-bar__post-create, .nav-bar__profile, .nav-bar__users {\\n  margin: 15px;\\n  padding: 15px 30px;\\n  background: white;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/layout.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/layout.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body, html {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Gill Sans Extrabold, sans-serif;\\n  font-size: 15px; }\\n\\nbody {\\n  background: #C3F7AF; }\\n\\n.Layout__header {\\n  margin: auto; }\\n\\n.Layout__main {\\n  padding-top: 55px;\\n  max-width: 800px;\\n  margin: auto;\\n  display: flex;\\n  flex-direction: column;\\n  box-sizing: content-box;\\n  border: 1px transparent; }\\n\\n.Layout__profile {\\n  box-sizing: content-box;\\n  border: 1px transparent; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/layout.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });
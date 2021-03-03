/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");;
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");;
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./src/server/models/Results.ts

const Result = new external_mongoose_namespaceObject.Schema({
    time: Number,
    name: String,
    moves: Number,
});
const ResultModel = (0,external_mongoose_namespaceObject.model)('Result', Result);
/* harmony default export */ const Results = (ResultModel);

;// CONCATENATED MODULE: ./src/server/routes/result.route.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const router = (0,external_express_namespaceObject.Router)();
router.post('/set', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = new Results({
            name: req.body.name,
            time: req.body.time,
            moves: req.body.moves,
        });
        yield result.save();
        return res.status(200).json({ message: 'Result upload.' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error ' });
    }
}));
router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Results.find({});
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error ' });
    }
}));
/* harmony default export */ const result_route = (router);

;// CONCATENATED MODULE: ./src/server/utils/mongodb.ts

const URL = 'mongodb+srv://student:1234qwer@cluster0.n1cm5.mongodb.net/app?retryWrites=true&w=majority';
external_mongoose_default().connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");;
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: ./src/server/Server.tsx




const port = 3000;
const server = external_express_default()();
server.use(external_cors_default()());
server.use(external_express_default().json());
server.use('/api/result', result_route);
server.listen(port, () => console.log(`Listening on port ${port}`));

/******/ })()
;
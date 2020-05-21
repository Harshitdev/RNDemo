"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
/* ------------- Assemble The Reducers ------------- */
var rootReducer = redux_1.combineReducers({
    user: require('./userRedux').reducer,
});
exports.default = rootReducer;

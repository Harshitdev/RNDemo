"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
/* ------------- Types and Action Creators ------------- */
var _b = reduxsauce_1.createActions({
    signin: ['data'],
    signinSuccess: ['data'],
    signinFailure: ['error'],
    logout: ['data'],
    logoutSuccess: ['data'],
    logoutFailure: ['error'],
}), Types = _b.Types, Creators = _b.Creators;
exports.UserTypes = Types;
exports.default = Creators;
/* ------------- Initial State ------------- */
exports.INITIAL_STATE = seamless_immutable_1.default({
    token: null,
    fetching: false,
    error: null,
    exists: null,
});
/* ------------- Reducers ------------- */
exports.initialState = function (state) {
    return __assign(__assign({}, state), { fetching: false, error: null });
};
exports.initialStateSuccess = function (state) {
    return __assign(__assign({}, state), { fetching: false, error: null });
};
/* signin */
exports.signin = function (state) {
    return __assign(__assign({}, state), { fetching: true, error: null, user_Data: null });
};
exports.signinSuccess = function (state, action) {
    var data = action.data;
    return __assign(__assign({}, state), { fetching: false, error: null, token: data.auth_token, user_Data: data, exists: false, allAboutYou: true, alreadyExist: data.data.profilecompleted });
};
exports.signinFailure = function (state, error) {
    return __assign(__assign({}, state), { fetching: false, error: error, exists: false });
};
/* logout */
exports.logout = function (state) {
    return __assign(__assign({}, state), { fetching: false });
};
exports.logoutSuccess = function (state, action) {
    return { INITIAL_STATE: exports.INITIAL_STATE };
};
exports.logoutFailure = function (state, error) {
    return { INITIAL_STATE: exports.INITIAL_STATE };
};
/* ------------- Hookup Reducers To Types ------------- */
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.SIGNIN] = exports.signin,
    _a[Types.SIGNIN_SUCCESS] = exports.signinSuccess,
    _a[Types.SIGNIN_FAILURE] = exports.signinFailure,
    _a[Types.LOGOUT] = exports.logout,
    _a[Types.LOGOUT_SUCCESS] = exports.logoutSuccess,
    _a[Types.LOGOUT_FAILURE] = exports.logoutFailure,
    _a));

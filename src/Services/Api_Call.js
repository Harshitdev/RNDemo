"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// a library to wrap and simplify api calls
var apisauce_1 = __importDefault(require("apisauce"));
var react_native_1 = require("react-native");
var api_1 = require("../Config/api");
var constant_1 = require("../Config/constant");
var accessToken = "";
var create = function (baseURL) {
    if (baseURL === void 0) { baseURL = api_1.base_url_API; }
    var api = apisauce_1.default.create({
        baseURL: baseURL,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        // 20 second timeout...
        timeout: constant_1.TIMEOUT
    });
    var setAuthToken = function (token, type) {
        if (type == undefined || type == null) {
            type = "application/json";
            console.log(type, "typetypetype------");
        }
        else {
            console.log(type, "typetypetype---------======-");
            type = "multipart/form-data";
        }
        react_native_1.AsyncStorage.setItem('authtoken', token);
        api.setHeader('Authorization', "Bearer " + token);
        api.setHeader('Content-Type', type);
        // api.defaults.headers.common['Content-Type'] = type;
    };
    /* USER */
    var post_api = function (data) {
        return api.post(data.api_name, data.data).then(function (response) {
            console.log(response, "response");
            var data = response;
            if (response.problem != "CLIENT_ERROR") {
                var retval = data;
                return retval;
            }
            else {
                data.error = true;
                return data;
            }
        }).catch(function (err) {
            return err;
        });
    };
    var get_api = function (data) {
        return api.get(data.api_name).then(function (response) {
            console.log(response, "response of get_api");
            var data = response;
            if (response.problem != "CLIENT_ERROR") {
                var retval = data;
                return retval;
            }
            else {
                data.error = true;
                return data;
            }
        }).catch(function (err) {
            return err;
        });
    };
    return {
        setAuthToken: setAuthToken,
        post_api: post_api,
        get_api: get_api
    };
};
// let's return back our create method as the default.
exports.default = {
    create: create
};

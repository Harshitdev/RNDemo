"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), height = _a.height, width = _a.width;
exports.w = function (percent) { return (width * percent) / 100; };
exports.h = function (percent) { return (height * percent) / 100; };
exports.totalSize = function (num) { return (Math.sqrt((height * height) + (width * width)) * num) / 100; };
exports.TIMEOUT = 120000;

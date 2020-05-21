"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Login.prototype.render = function () {
        console.log("----");
        return (<react_native_1.View>
                <react_native_1.Text>
                    login
                </react_native_1.Text>
            </react_native_1.View>);
    };
    return Login;
}(react_1.default.Component));
var mapStateToProps = function (state) {
    return {
        state: state,
        error: state.user.error,
        fetching: state.user.fetching,
        user: state.user
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
    // signin: (data: any) => dispatch(UserActions.signin(data)),
    // register: (data: any) => dispatch(UserActions.register(data)),
    // initialState: () => dispatch(UserActions.initialState()),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

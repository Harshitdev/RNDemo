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
var NavigationService_1 = __importDefault(require("../Services/NavigationService"));
var Login_1 = __importDefault(require("../components/Login"));
// import CreateAccount from '../components/CreateAccount';
var react_navigation_1 = require("react-navigation");
var react_navigation_stack_1 = require("react-navigation-stack");
var Splash_1 = __importDefault(require("../components/Splash"));
console.disableYellowBox = true;
var MainNavigator = react_navigation_stack_1.createStackNavigator({
    Splash: { screen: Splash_1.default, navigationOptions: { headerShown: false } },
    LoginScreen: { screen: Login_1.default, navigationOptions: { headerShown: false } },
}, { initialRouteName: 'Splash' });
var AppNavigator = react_navigation_1.createAppContainer(MainNavigator);
var RootScreen = /** @class */ (function (_super) {
    __extends(RootScreen, _super);
    function RootScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootScreen.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, width: "100%" }}>
        <AppNavigator ref={function (navigatorRef) {
            NavigationService_1.default.setTopLevelNavigator(navigatorRef);
        }}/>
      </react_native_1.View>);
    };
    return RootScreen;
}(react_1.default.Component));
exports.default = RootScreen;

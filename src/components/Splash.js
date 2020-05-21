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
var Splash = /** @class */ (function (_super) {
    __extends(Splash, _super);
    function Splash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Splash.prototype.componentDidMount = function () {
        try {
            // setTimeout(() => {
            //   NavigationService.navigate("LoginScreen")
            // }, 3000);
        }
        catch (e) {
            console.log(e);
        }
    };
    Splash.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
            <react_native_1.Text>
                Splash
        </react_native_1.Text>
        </react_native_1.View>);
    };
    return Splash;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 150,
    },
    backgroundView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
});
var mapStateToProps = function (state) {
    return {
        state: state,
        error: state.user.error,
        fetching: state.user.fetching,
        exists: state.user.exists,
        isfirstTime: state.user.isfirstTime,
        allAboutYou: state.user.allAboutYou,
        youScreen: state.user.youScreen,
        createBio: state.user.createBio,
        aboutYourChildren: state.user.aboutYourChildren,
        addInterest: state.user.addInterest,
        profileCompleted: state.user.profileCompleted,
        alreadyExist: state.user.alreadyExist
    };
};
var mapDispatchToProps = function (dispatch) {
    return {};
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Splash);

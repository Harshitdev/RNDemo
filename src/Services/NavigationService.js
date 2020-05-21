"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
var navigator;
/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}
/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params) {
    if (navigator != undefined) {
        navigator.dispatch(react_navigation_1.NavigationActions.navigate({
            routeName: routeName,
            params: params,
        }));
    }
}
function goBack(params) {
    if (params === void 0) { params = null; }
    var action = react_navigation_1.NavigationActions.back({ params: { action: params } });
    navigator.dispatch(action);
}
/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
    navigator.dispatch(react_navigation_1.StackActions.reset({
        index: 0,
        key: null,
        actions: [
            react_navigation_1.NavigationActions.navigate({
                routeName: routeName,
                params: params,
            }),
        ],
    }));
}
exports.default = {
    navigate: navigate,
    navigateAndReset: navigateAndReset,
    setTopLevelNavigator: setTopLevelNavigator,
    goBack: goBack
};

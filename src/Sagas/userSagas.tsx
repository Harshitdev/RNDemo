import { call, put, select } from 'redux-saga/effects'
// import UserActions from '../Redux/userRedux'
import NavigationService from '../Services/NavigationService';
// import isEmpty from "../Utills/checkObject";
import { AsyncStorage } from 'react-native';
// import Constant from '../utilities/constant';

let accessToken;

function* signin(api: any, action: any) {
    // try {
    //     let { data } = action;
    //     let _data = {
    //         data,
    //         api_name: "/facebook/login" //Api Name.
    //     }
    //     const res = yield call(api.post_api, _data);
    //     if (res.status == 200) {
    //         console.log('sign in response', res.data)
    //         yield put(UserActions.signinSuccess(res.data));
    //         accessToken = res.data.auth_token;
    //         AsyncStorage.setItem('authtoken', accessToken);
    //         if (res.data.data.profilecompleted === "true") {
    //             NavigationService.navigate('TabBarScreen');
    //         } else {
    //             NavigationService.navigate('AllAboutYouScreen', { reDirect: false, routeName: "saga" })
    //         }
    //     } else {
    //         yield put(UserActions.signinFailure(res))
    //     }
    // } catch (err) {
    //     console.log(err, "errerrerr")
    //     yield put(UserActions.signinFailure(err))
    // }
}


function* logout(api: any, action: any) {
    // try {
    //     NavigationService.navigateAndReset('LoginScreen')
    //     yield put(UserActions.logoutSuccess());
    // } catch (err) {
    //     yield put(UserActions.logoutFailure())
    // }
    // try {
    //     let { data = {} } = action;
    //     let _data = {
    //         data,
    //         api_name: "logout"//Api Name.
    //     }
    //     let accessToken = yield AsyncStorage.getItem('authtoken');
    //     yield call(api.setAuthToken, accessToken)
    //     const res = yield call(api.post_api, _data);
    //     console.log('response of logout--------', res);
    //     if (res.status == 200) {
    //         NavigationService.navigateAndReset('LoginScreen')
    //         yield put(UserActions.logoutSuccess());

    //     } else {
    //         NavigationService.navigateAndReset('LoginScreen')
    //         yield put(UserActions.logoutFailure())
    //     }
    // } catch (err) {
    //     console.log(err, "errerrerr")
    //     NavigationService.navigateAndReset('LoginScreen')
    //     yield put(UserActions.logoutFailure(err))
    // }
}


export { signin, logout }
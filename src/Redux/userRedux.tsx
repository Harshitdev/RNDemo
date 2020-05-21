import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({

    signin: ['data'],
    signinSuccess: ['data'],
    signinFailure: ['error'],

    logout: ['data'],
    logoutSuccess: ['data'],
    logoutFailure: ['error'],

})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    token: null,
    fetching: false,
    error: null,
    exists: null,
})

/* ------------- Reducers ------------- */
export const initialState = (state: Object) => {
    return { ...state, fetching: false, error: null }
}
export const initialStateSuccess = (state: Object) => {
    return { ...state, fetching: false, error: null }
}

/* signin */
export const signin = (state: Object) => {
    return { ...state, fetching: true, error: null, user_Data: null }
}
export const signinSuccess = (state: Object, action: Object) => {
    const { data } = action
    return { ...state, fetching: false, error: null, token: data.auth_token, user_Data: data, exists: false, allAboutYou: true, alreadyExist: data.data.profilecompleted }
}
export const signinFailure = (state: Object, error: Object) => {
    return { ...state, fetching: false, error, exists: false, }
}

/* logout */
export const logout = (state: Object) => {
    return { ...state, fetching: false }
}
export const logoutSuccess = (state: Object, action: Object) => {
    return { INITIAL_STATE }
}
export const logoutFailure = (state: Object, error: Object) => {
    return { INITIAL_STATE }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGNIN]: signin,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,

    [Types.LOGOUT]: logout,
    [Types.LOGOUT_SUCCESS]: logoutSuccess,
    [Types.LOGOUT_FAILURE]: logoutFailure,

})

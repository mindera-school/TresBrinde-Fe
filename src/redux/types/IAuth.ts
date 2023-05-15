import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from './../../constants/constants';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../../constants/constants";

interface UserLoginRequestAction {
    type: typeof LOGIN_REQUEST
  }
  interface UserLoginSuccessAction {
    type: typeof LOGIN_SUCCESS
    payload: string
  }
  interface UserLoginFailAction {
    type: typeof LOGIN_FAIL
    payload: string
  }
  interface UserLogoutAction {
    type: typeof LOGOUT
  }
  export type UserLoginActionTypes =
    | UserLoginRequestAction
    | UserLoginSuccessAction
    | UserLoginFailAction
    | UserLogoutAction



    interface UserRegisterRequestAction {
      type: typeof REGISTER_REQUEST
    }
    interface UserRegisterSuccessAction {
      type: typeof REGISTER_SUCCESS
      payload: string
    }
    interface UserRegisterFailAction {
      type: typeof REGISTER_FAIL
      payload: string
    }
    
    export type UserRegisterActionTypes =
      | UserRegisterRequestAction
      | UserRegisterSuccessAction
      | UserRegisterFailAction
    
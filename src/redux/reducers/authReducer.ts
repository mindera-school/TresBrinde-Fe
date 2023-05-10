import { UserRegisterActionTypes } from './../types/IAuth';
import { Reducer } from "redux";
import { LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./../../constants/constants";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../constants/constants";
import { LOGIN_REQUEST } from "../../constants/constants";
import { UserLoginActionTypes } from "../types/IAuth";

const initialLoginState = {
  loading: false,
  isAuthenticating: false,
  error: undefined,
};
export type UserState = {
  loading?: boolean;
  user?: any;
  isAuthenticating?: boolean;
  error?: string;
};

export const LoginReducer: Reducer<UserState, UserLoginActionTypes> = (
  state = initialLoginState,
  action: UserLoginActionTypes
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticating: true,
      };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};



const initialRegisterState = {
  loading: false,
  error: undefined,
};
export type RegisterState = {
  loading?: boolean;
  user?: any;
  error?: string;
};

export const RegisterReducer: Reducer<RegisterState, UserRegisterActionTypes> = (
  state = initialRegisterState,
  action: UserRegisterActionTypes
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

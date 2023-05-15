import { message } from 'antd';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../constants/constants";
import { LOGIN_REQUEST } from "../../constants/constants";
import { Dispatch } from "redux";
import { loginService, logoutService, registerService } from "../../services/authService";

const loginRequestAction = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccessAction = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFailAction = (error: any) => ({
  type: LOGIN_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const login =
  (email: string, password: any, history: any) => async (dispatch: Dispatch) => {
    dispatch(loginRequestAction());

    loginService(email, password).then(
      (data) => {
        dispatch(loginSuccessAction(data));
        history.push("/");
      },
      (error) => {
        dispatch(loginFailAction(error.toString()));
        message.success("Login failed");
      }
    );
  };


  


  const registerRequestAction = () => ({
    type: REGISTER_REQUEST,
  });
  
  const registerSuccessAction = (data: any) => ({
    type: REGISTER_SUCCESS,
    payload: data,
  });
  
  const registerFailAction = (error: any) => ({
    type: REGISTER_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  

  export const register =
  (name: string,email: string, password: any, history: any) => async (dispatch: Dispatch) => {
    dispatch(registerRequestAction());

    registerService(name, email, password).then(
      (data) => {
        dispatch(registerSuccessAction(data));
        message.success("Conta criada com sucesso.");
        history.push("/");
      },
      (error) => {
        dispatch(registerFailAction(error.toString()));
        message.success("Register failed");
      }
    );
  };

  export const logout = () => async (dispatch: Dispatch) => {
    logoutService();
    dispatch({ type: LOGOUT })
  };




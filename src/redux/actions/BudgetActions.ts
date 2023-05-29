import { message } from "antd";
import { Dispatch } from "redux";
import {
  createBudgetService,
  getListBudgetService,
} from "../../services/budgetService";
import {
  BUDGET_CREATE_FAIL,
  BUDGET_CREATE_SUCCESS,
  BUDGET_CREATE_REQUEST,
  BUDGET_LIST_REQUEST,
  BUDGET_LIST_SUCCESS,
  BUDGET_LIST_FAIL,
} from "./../../constants/constants";

const listBudgetRequestAction = () => ({
  type: BUDGET_LIST_REQUEST,
});

const listBudgetSuccessAction = (data: any) => ({
  type: BUDGET_LIST_SUCCESS,
  payload: data,
});

const listBudgetFailAction = (error: any) => ({
  type: BUDGET_LIST_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const ListBudgetAction = () => async (dispatch: Dispatch) => {
  dispatch(listBudgetRequestAction());

  getListBudgetService().then(
    (data) => {
      const newData = data?.map((item: { budgetProducts: any[] }) => {
        const quantity =
          item?.budgetProducts?.reduce(
            (acc: any, entry: { quantity: any }) =>
              (acc += entry?.quantity ?? 0),
            0
          ) ?? 0;
        return { ...item, budgetProducts: quantity };
      });

      dispatch(listBudgetSuccessAction(newData));
    },
    (error) => {
      dispatch(listBudgetFailAction(error.toString()));
      // message.error("Error listing Products", error.toString());
    }
  );
};

// create action to create Budget
const createBudgetRequestAction = () => ({
  type: BUDGET_CREATE_REQUEST,
});

const createBudgetSuccessAction = (data: any) => ({
  type: BUDGET_CREATE_SUCCESS,
  payload: data,
});

const createBudgetFailAction = (error: any) => ({
  type: BUDGET_CREATE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const CreateBudgetAction =
  (budget: any, history: any) => async (dispatch: Dispatch) => {
    dispatch(createBudgetRequestAction());

    createBudgetService(budget).then(
      (data) => {
        dispatch(createBudgetSuccessAction(data));
        history.push("/");
        message.success("Pedido de Orçamento enviado");
      },
      (error) => {
        dispatch(createBudgetFailAction(error.toString()));
        message.error("Error creating Budget", error.toString());
      }
    );
  };

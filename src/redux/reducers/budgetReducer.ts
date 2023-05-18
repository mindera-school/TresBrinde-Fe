import {
  BUDGET_CREATE_REQUEST,
  BUDGET_CREATE_SUCCESS,
  BUDGET_CREATE_FAIL,
  BUDGET_LIST_REQUEST,
  BUDGET_LIST_SUCCESS,
  BUDGET_LIST_FAIL,
} from "./../../constants/constants";
import {
  CreateBudgetActionTypes,
  IBudget,
  ListBudgetActionTypes,
} from "./../types/IBudget";
//create budget reducer BudgetCreateReduce

import { Reducer } from "redux";

const initialBudgetCreate = {
  loading: false,
  budget: [],
  error: undefined,
};
export type BudgetCreateState = {
  loading?: boolean;
  budget?: IBudget[];
  error?: string;
};
const initialBudgetList = {
  loading: false,
  budget: [],
  error: undefined,
};
export type BudgetListState = {
  loading?: boolean;
  budget?: IBudget[];
  error?: string;
};

export const BudgetCreateReducer: Reducer<
  BudgetCreateState,
  CreateBudgetActionTypes
> = (state = initialBudgetCreate, action: CreateBudgetActionTypes) => {
  switch (action.type) {
    case BUDGET_CREATE_REQUEST:
      return { loading: true };
    case BUDGET_CREATE_SUCCESS:
      return {
        loading: false,
        categories: action.payload.budget,
      };
    case BUDGET_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BudgetListReducer: Reducer<
  BudgetListState,
  ListBudgetActionTypes
> = (state = initialBudgetList, action: ListBudgetActionTypes) => {
  switch (action.type) {
    case BUDGET_LIST_REQUEST:
      return { loading: true };
    case BUDGET_LIST_SUCCESS:
      return {
        loading: false,
        budget: Object.entries(action.payload)[0]?.slice(1) as IBudget[],
      };
    case BUDGET_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

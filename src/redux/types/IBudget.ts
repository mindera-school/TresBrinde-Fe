import { BUDGET_CREATE_REQUEST, BUDGET_CREATE_SUCCESS, BUDGET_CREATE_FAIL, BUDGET_LIST_FAIL, BUDGET_LIST_SUCCESS, BUDGET_LIST_REQUEST } from './../../constants/constants';

export interface IBudget {
    userId?: any;
    email?: string;
    NIF?: string;
    name?: string;
    company_name?: string;
    country?: string;
    postal_code?: string;
    city?: string;
    address?: string;
    contact?: string
    expectedPrice?: string;
    description?: string;
    budgetProducts?: Array<IProductBudget>;
  }

  export interface IProductBudget {
    productId: number;
    quantity: number;
  }


  interface CreateBudgetRequestAction {
    type: typeof BUDGET_CREATE_REQUEST;
  }
  interface CreateBudgetSuccessAction {
    type: typeof BUDGET_CREATE_SUCCESS;
    payload: { budget: IBudget[] };
  }
  interface CreateBudgetFailAction {
    type: typeof BUDGET_CREATE_FAIL;
    payload: string;
  }
  interface ListBudgetRequestAction {
    type: typeof BUDGET_LIST_REQUEST;
  }
  interface ListBudgetSuccessAction {
    type: typeof BUDGET_LIST_SUCCESS;
    payload: { budget: IBudget[] };
  }
  interface ListBudgetFailAction {
    type: typeof BUDGET_LIST_FAIL;
    payload: string;
  }
  export type CreateBudgetActionTypes =
    | CreateBudgetRequestAction
    | CreateBudgetSuccessAction
    | CreateBudgetFailAction;

    export type ListBudgetActionTypes =
    | ListBudgetRequestAction
    | ListBudgetSuccessAction
    | ListBudgetFailAction;
import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
} from "./../../constants/constants";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../../constants/constants";

export interface ISubCategories {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
  subCategories?: Array<ISubCategories>;
}

interface ListCategoriesRequestAction {
  type: typeof CATEGORY_LIST_REQUEST;
}
interface ListCategoriesSuccessAction {
  type: typeof CATEGORY_LIST_SUCCESS;
  payload: { categories: ICategory[] };
}
interface ListCategoriesFailAction {
  type: typeof CATEGORY_LIST_FAIL;
  payload: string;
}
export type ListCategoriesActionTypes =
  | ListCategoriesRequestAction
  | ListCategoriesSuccessAction
  | ListCategoriesFailAction;

interface DetailsCategoriesRequestAction {
  type: typeof CATEGORY_DETAILS_REQUEST;
}
interface DetailsCategoriesSuccessAction {
  type: typeof CATEGORY_DETAILS_SUCCESS;
  payload: ICategory;
}
interface DetailsCategoriesFailAction {
  type: typeof CATEGORY_DETAILS_FAIL;
  payload: string;
}
export type DetailsCategoriesActionTypes =
  | DetailsCategoriesRequestAction
  | DetailsCategoriesSuccessAction
  | DetailsCategoriesFailAction;

interface CreateCategoriesRequestAction {
  type: typeof CATEGORY_CREATE_REQUEST;
}
interface CreateCategoriesSuccessAction {
  type: typeof CATEGORY_CREATE_SUCCESS;
  payload: { categories: ICategory[] };
}
interface CreateCategoriesFailAction {
  type: typeof CATEGORY_CREATE_FAIL;
  payload: string;
}
export type CreateCategoriesActionTypes =
  | CreateCategoriesRequestAction
  | CreateCategoriesSuccessAction
  | CreateCategoriesFailAction;

interface UpdateCategoriesRequestAction {
  type: typeof CATEGORY_UPDATE_REQUEST;
}
interface UpdateCategoriesSuccessAction {
  type: typeof CATEGORY_UPDATE_SUCCESS;
  payload: ICategory;
}
interface UpdateCategoriesFailAction {
  type: typeof CATEGORY_UPDATE_FAIL;
  payload: string;
}
export type UpdateCategoriesActionTypes =
  | UpdateCategoriesRequestAction
  | UpdateCategoriesSuccessAction
  | UpdateCategoriesFailAction;

interface DeleteCategoriesRequestAction {
  type: typeof CATEGORY_DELETE_REQUEST;
}
interface DeleteCategoriesSuccessAction {
  type: typeof CATEGORY_DELETE_SUCCESS;
}
interface DeleteCategoriesFailAction {
  type: typeof CATEGORY_DELETE_FAIL;
  payload: string;
}
export type DeleteCategoriesActionTypes =
  | DeleteCategoriesRequestAction
  | DeleteCategoriesSuccessAction
  | DeleteCategoriesFailAction;

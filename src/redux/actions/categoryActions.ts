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
  deleteCategoryService,
  getDetailsCategoryService,
  getListCategoriesService,
  updateCategoryService,
} from "./../../services/categoriesServices";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../../constants/constants";
import { Dispatch } from "redux";

import { createCategoryService } from "../../services/categoriesServices";
import { message } from "antd";

const listCategoriesRequestAction = () => ({
  type: CATEGORY_LIST_REQUEST,
});

const listCategoriesSuccessAction = (data: any) => ({
  type: CATEGORY_LIST_SUCCESS,
  payload: data,
});

const listCategoriesFailAction = (error: any) => ({
  type: CATEGORY_LIST_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const ListCategories = () => async (dispatch: Dispatch) => {
  dispatch(listCategoriesRequestAction());

  getListCategoriesService().then(
    (data) => {
      dispatch(listCategoriesSuccessAction(data));
    },
    (error) => {
      dispatch(listCategoriesFailAction(error.toString()));
      message.error("Error listing categories", error.toString());
      console.log(error.toString());
    }
  );
};

const detailsCategoryRequestAction = () => ({
  type: CATEGORY_DETAILS_REQUEST,
});

const detailsCategorySuccessAction = (data: any) => ({
  type: CATEGORY_DETAILS_SUCCESS,
  payload: data,
});

const detailsCategoryFailAction = (error: any) => ({
  type: CATEGORY_DETAILS_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const detailsCategory = (id: any) => async (dispatch: Dispatch) => {
  dispatch(detailsCategoryRequestAction());

  getDetailsCategoryService(id).then(
    (data) => {
      dispatch(detailsCategorySuccessAction(data));
    },
    (error) => {
      dispatch(detailsCategoryFailAction(error.toString()));
      message.error("Error listing categories", error.toString());
    }
  );
};

const createCategoriesRequestAction = () => ({
  type: CATEGORY_CREATE_REQUEST,
});

const createCategoriesSuccessAction = (data: any) => ({
  type: CATEGORY_CREATE_SUCCESS,
  payload: data,
});

const createCategoriesFailAction = (error: any) => ({
  type: CATEGORY_CREATE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const createCategory =
  (name: any, history: any) => async (dispatch: Dispatch) => {
    dispatch(createCategoriesRequestAction());

    createCategoryService(name).then(
      (data) => {
        dispatch(createCategoriesSuccessAction(data));
        message.success("Categoria criada com sucesso!");
        history.push("/admin/categories");
      },
      (error) => {
        dispatch(createCategoriesFailAction(error.toString()));
        message.error("Erro ao criar categoria", error.toString());
      }
    );
  };

const deleteCategoriesRequestAction = () => ({
  type: CATEGORY_DELETE_REQUEST,
});

const deleteCategoriesSuccessAction = (data: any) => ({
  type: CATEGORY_DELETE_SUCCESS,
  payload: data,
});

const deleteCategoriesFailAction = (error: any) => ({
  type: CATEGORY_DELETE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const deleteCategory = (id: any) => async (dispatch: Dispatch) => {
  dispatch(deleteCategoriesRequestAction());

  deleteCategoryService(id).then(
    (data) => {
      dispatch(deleteCategoriesSuccessAction(data));
      message.success("Categoria deletada com sucesso!");
    },
    (error) => {
      dispatch(deleteCategoriesFailAction(error.toString()));
      message.error("Erro ao deletar categoria", error.toString());
    }
  );
};

const updateCategoriesRequestAction = () => ({
  type: CATEGORY_UPDATE_REQUEST,
});

const updateCategoriesSuccessAction = (data: any) => ({
  type: CATEGORY_UPDATE_SUCCESS,
  payload: data,
});

const updateCategoriesFailAction = (error: any) => ({
  type: CATEGORY_UPDATE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const updateCategory =
  (id: number, name: string, history: any) => async (dispatch: Dispatch) => {
    dispatch(updateCategoriesRequestAction());

    updateCategoryService(id, name).then(
      (data) => {
        dispatch(updateCategoriesSuccessAction(data));
        message.success("Categoria atualizada com sucesso!");
        history.push("/admin/categories");
      },
      (error) => {
        dispatch(updateCategoriesFailAction(error.toString()));
        message.error("Erro ao atualizar categoria", error.toString());
      }
    );
  };

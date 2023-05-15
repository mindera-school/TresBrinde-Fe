import { createProductService, getDetailsProductsService, updateProductService } from './../../services/productsService';
import { Dispatch } from "redux";
import { getListProductsService } from "../../services/productsService";
import { message } from "antd";
import {PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_FAIL, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../../constants/constants";


const listProductsRequestAction = () => ({
    type: PRODUCT_LIST_REQUEST,
  });
  
  const listProductsSuccessAction = (data: any) => ({
    type: PRODUCT_LIST_SUCCESS,
    payload: data,
  });
  
  const listProductsFailAction = (error: any) => ({
    type: PRODUCT_LIST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  
  export const ListProductsAction = (limit: number, subCategory:string) => async (dispatch: Dispatch) => {
    dispatch(listProductsRequestAction());
  
    getListProductsService(limit, subCategory).then(
      (data) => {
        dispatch(listProductsSuccessAction(data));
      },
      (error) => {
        dispatch(listProductsFailAction(error.toString()));
       // message.error("Error listing Products", error.toString());
      }
    );
  };


  //create action createProduct 
  const createProductRequestAction = () => ({
    type: PRODUCT_CREATE_REQUEST,
  });
  
  const createProductSuccessAction = (data: any) => ({
    type: PRODUCT_CREATE_SUCCESS,
    payload: data,
  });
  
  const createProductFailAction = (error: any) => ({
    type: PRODUCT_CREATE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  
  export const CreateProductAction = (product: any, history:any) => async (dispatch: Dispatch) => {
    dispatch(createProductRequestAction());
  
    createProductService(product).then(
      (data) => {
        dispatch(createProductSuccessAction(data));
        history.push("/admin/products");
        message.success("Produto criado com sucesso");
      },
      (error) => {
        dispatch(createProductFailAction(error.toString()));
        message.error("Error creating Product", error.toString());
      }
    );
  };


  // create action DetailsProductAction
  const detailsProductRequestAction = () => ({
    type: PRODUCT_DETAILS_REQUEST,
  });
  
  const detailsProductSuccessAction = (data: any) => ({
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  });
  
  const detailsProductFailAction = (error: any) => ({
    type: PRODUCT_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  
  export const DetailsProductAction = (id: number) => async (dispatch: Dispatch) => {
    dispatch(detailsProductRequestAction());
  
    getDetailsProductsService(id).then(
      (data) => {
        dispatch(detailsProductSuccessAction(data));
      },
      (error) => {
        dispatch(detailsProductFailAction(error.toString()));
      }
    );
  };

  // update action updateProduct
  const updateProductRequestAction = () => ({
    type: PRODUCT_UPDATE_REQUEST,
  });
  
  const updateProductSuccessAction = (data: any) => ({
    type: PRODUCT_UPDATE_SUCCESS,
    payload: data,
  });
  
  const updateProductFailAction = (error: any) => ({
    type: PRODUCT_UPDATE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  
  export const UpdateProductAction = (product: any, history:any) => async (dispatch: Dispatch) => {
    dispatch(updateProductRequestAction());
  
    updateProductService(product)
      .then((data) => {
        dispatch(updateProductSuccessAction(data));
        history.push("/admin/products");
        message.success("Produto atualizado com sucesso");
      },(error) => {
        dispatch(updateProductFailAction(error.toString()));
       // message.error("Error updating Product", error.toString());
      }
    );
  };
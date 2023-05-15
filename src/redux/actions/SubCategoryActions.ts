import { message } from 'antd';
import { Dispatch } from 'redux';
import { SUBCATEGORY_DETAILS_FAIL, SUBCATEGORY_DETAILS_REQUEST, SUBCATEGORY_DETAILS_SUCCESS } from "../../constants/constants";
import { getDetailsSubCategoryService } from "../../services/subCategoryService";

const detailsSubCategoryRequestAction = () => ({
    type: SUBCATEGORY_DETAILS_REQUEST,
  });
  
  const detailsSubCategorySuccessAction = (data: any) => ({
    type: SUBCATEGORY_DETAILS_SUCCESS,
    payload: data,
  });
  
  const detailsSubCategoryFailAction = (error: any) => ({
    type: SUBCATEGORY_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  
  export const detailsSubCategory = (id: any) => async (dispatch: Dispatch) => {
    dispatch(detailsSubCategoryRequestAction());
  
    getDetailsSubCategoryService(id).then(
      (data) => {
        dispatch(detailsSubCategorySuccessAction(data));
      },
      (error) => {
        dispatch(detailsSubCategoryFailAction(error.toString()));
        message.error("Error listing categories", error.toString());
      }
    );
  };
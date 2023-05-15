import { Reducer } from "redux";
import {  SUBCATEGORY_DETAILS_FAIL, SUBCATEGORY_DETAILS_REQUEST, SUBCATEGORY_DETAILS_SUCCESS } from "../../constants/constants";
import { ISubCategories } from "../types/ICategory";
import { DetailsSubCategoriesActionTypes } from "../types/ISubCategory";

const initialSubCategoryDetails = {
    loading: false,
    category: {
      id: "",
      name: "",
      subCategories: [],
    },
    error: undefined,
  };
  export type SubCategoryDetailsState = {
    loading?: boolean;
    category?: ISubCategories;
    error?: string;
  };
  
  export const SubCategoryDetailsReducer: Reducer<
  SubCategoryDetailsState,
  DetailsSubCategoriesActionTypes
  > = (state = initialSubCategoryDetails, action: DetailsSubCategoriesActionTypes) => {
    switch (action.type) {
      case SUBCATEGORY_DETAILS_REQUEST:
        return { loading: true };
      case SUBCATEGORY_DETAILS_SUCCESS:
        return {
          loading: false,
          category: action.payload,
        };
      case SUBCATEGORY_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
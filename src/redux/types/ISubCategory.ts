import { SUBCATEGORY_DETAILS_REQUEST, SUBCATEGORY_DETAILS_SUCCESS, SUBCATEGORY_DETAILS_FAIL } from "../../constants/constants";
import { ISubCategories } from "./ICategory";

interface DetailsSubCategoriesRequestAction {
    type: typeof SUBCATEGORY_DETAILS_REQUEST;
  }
  interface DetailsSubCategoriesSuccessAction {
    type: typeof SUBCATEGORY_DETAILS_SUCCESS;
    payload: ISubCategories;
  }
  interface DetailsSubCategoriesFailAction {
    type: typeof SUBCATEGORY_DETAILS_FAIL;
    payload: string;
  }
  export type DetailsSubCategoriesActionTypes =
    | DetailsSubCategoriesRequestAction
    | DetailsSubCategoriesSuccessAction
    | DetailsSubCategoriesFailAction;
  
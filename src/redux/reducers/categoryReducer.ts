import {
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
} from "./../../constants/constants";
import { Reducer } from "redux";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
} from "../../constants/constants";
import {
  CreateCategoriesActionTypes,
  DeleteCategoriesActionTypes,
  DetailsCategoriesActionTypes,
  ICategory,
  ListCategoriesActionTypes,
  UpdateCategoriesActionTypes,
} from "../types/ICategory";

const initialCategoryList = {
  loading: false,
  categories: [
    {
      id: "",
      name: "",
      subCategories: [],
    },
  ],
  error: undefined,
};
export type CategoryListState = {
  loading?: boolean;
  categories?: ICategory[];
  error?: string;
};

export const CategoryListReducer: Reducer<
  CategoryListState,
  ListCategoriesActionTypes
> = (state = initialCategoryList, action: ListCategoriesActionTypes) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
      };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialCategoryDetails = {
  loading: false,
  category: {
    id: "",
    name: "",
    subCategories: [],
  },
  error: undefined,
};
export type CategoryDetailsState = {
  loading?: boolean;
  category?: ICategory;
  error?: string;
};

export const CategoryDetailsReducer: Reducer<
  CategoryDetailsState,
  DetailsCategoriesActionTypes
> = (state = initialCategoryDetails, action: DetailsCategoriesActionTypes) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialCategoryCreate = {
  loading: false,
  categories: [
    {
      id: "",
      name: "",
      subCategories: [],
    },
  ],
  error: undefined,
};
export type CategoryCreateState = {
  loading?: boolean;
  categories?: ICategory[];
  error?: string;
};

export const CategoryCreateReducer: Reducer<
  CategoryCreateState,
  CreateCategoriesActionTypes
> = (state = initialCategoryCreate, action: CreateCategoriesActionTypes) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
      };
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialCategoryUpdate = {
  loading: false,
  success: false,
  category: {
    id: "",
    name: "",
    subCategories: [],
  },
  error: undefined,
};
export type CategoryUpdateState = {
  loading?: boolean;
  success?: boolean;
  category: ICategory;
  error?: string;
};

export const UpdateCategoryReducer: Reducer<
  CategoryUpdateState,
  UpdateCategoriesActionTypes
> = (state = initialCategoryUpdate, action: UpdateCategoriesActionTypes) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        success: true,
        category: action.payload,
        loading: false,
      };
    case CATEGORY_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialCategoryDelete = {
  loading: false,
  success: false,
  error: undefined,
};
export type CategoryDeleteState = {
  loading?: boolean;
  success?: boolean;
  error?: string;
};

export const DeleteCategoryReducer: Reducer<
  CategoryDeleteState,
  DeleteCategoriesActionTypes
> = (state = initialCategoryDelete, action: DeleteCategoriesActionTypes) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case CATEGORY_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

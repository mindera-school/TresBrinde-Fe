import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "./../../constants/constants";
import {
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../../constants/constants";
import { ISubCategories } from "./ICategory";

export interface IpriceQuantity {
  quantity: number;
  unitPrice: number;
}

export interface IProductProperty {
  name: string;
  value: string;
}

export interface IProductPropertyResponse {
  property: string;
  value: string;
}

export interface IProduct {
  id?: number;
  reference?: string;
  catalogReference?: string;
  productName?: string;
  description?: string;
  keywords?: string;
  mainImage?: string;
  brand?: string;
  price?: number;
  material?: string;
  minimumQuantity?: number;
  subCategories?: Array<ISubCategories>;
  priceQuantity?: Array<IpriceQuantity>;
  productProperty?: Array<IProductProperty>;
  tableImage?: Array<String>;
}

export interface ICreateProduct {
  id?: string;
  reference?: string;
  catalogReference?: string;
  productName?: string;
  description?: string;
  keywords?: string;
  brand?: string;
  price?: number;
  material?: string;
  minimumQuantity?: number;
  subCategories?: Array<Number>;
  priceQuantities?: IpriceQuantity[];
  productProperties?: IProductProperty[];
}

interface ListProductsRequestAction {
  type: typeof PRODUCT_LIST_REQUEST;
}
interface ListProductsSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: { products: IProduct[] };
}
interface ListProductsFailAction {
  type: typeof PRODUCT_LIST_FAIL;
  payload: string;
}
export type ListProductsActionTypes =
  | ListProductsRequestAction
  | ListProductsSuccessAction
  | ListProductsFailAction;

// create CreateProductActionTypes types to create product
interface CreateProductRequestAction {
  type: typeof PRODUCT_CREATE_REQUEST;
}
interface CreateProductSuccessAction {
  type: typeof PRODUCT_CREATE_SUCCESS;
  payload: { product: ICreateProduct };
}
interface CreateProductFailAction {
  type: typeof PRODUCT_CREATE_FAIL;
  payload: string;
}
export type CreateProductActionTypes =
  | CreateProductRequestAction
  | CreateProductSuccessAction
  | CreateProductFailAction;

//create DetailsProductActionTypes types to create product
interface DetailsProductRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST;
}
interface DetailsProductSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  payload: IProduct;
}
interface DetailsProductFailAction {
  type: typeof PRODUCT_DETAILS_FAIL;
  payload: string;
}
export type DetailsProductActionTypes =
  | DetailsProductRequestAction
  | DetailsProductSuccessAction
  | DetailsProductFailAction;

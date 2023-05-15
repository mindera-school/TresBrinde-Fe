import { IProduct, ICreateProduct, DetailsProductActionTypes } from './../types/IProduct';
import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from './../../constants/constants';
import { Reducer } from "redux";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../../constants/constants";
import { CreateProductActionTypes, ListProductsActionTypes } from "../types/IProduct";

const initialProductList = {
    loading: false,
    products: [],
    error: undefined,
  };
  export type ProductListState = {
    loading?: boolean;
    products?: IProduct[];
    error?: string;
  };
  
  export const ProductsListReducer: Reducer<
    ProductListState,
    ListProductsActionTypes
  > = (state = initialProductList, action: ListProductsActionTypes) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
        };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  


  const initialProductCreate = {
    loading: false,
    product: undefined,
    error: undefined,
  };
  export type ProductCreateState = {
    loading?: boolean;
    product?: ICreateProduct;
    error?: string;
  };
  
  export const ProductCreateReducer: Reducer<
    ProductCreateState,
    CreateProductActionTypes
  > = (state = initialProductCreate, action: CreateProductActionTypes) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return {
          loading: false,
          product: action.payload.product,
        };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  const initialProductDetails = {
    loading: false,
    product: {
      id: 0,
      reference: "",
      catalogReference: "",
      productName: "",
      description: "",
      keywords: "",
      mainImage: "",
      brand: "",
      price: 0,
      material: "12312",
      minimumQuantity: 0,
      subCategories: [],
      priceQuantity:[],
      productProperty:[],
      tableImage: "",
    },
    error: undefined,
  };
  export type ProductDetailsState = {
    loading?: boolean;
    product?: IProduct;
    error?: string;
  };
  
  export const ProductDetailsReducer: Reducer<
  ProductDetailsState,
  DetailsProductActionTypes
  > = (state = initialProductDetails, action: DetailsProductActionTypes) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          product: action.payload,
        };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


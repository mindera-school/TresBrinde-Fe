import { API_URL } from "../constants/constants";
import { authHeader } from "../utils/authHeader";
import { handleResponse } from "./api";

export const getListProductsService = (
  limit: any,
  specificCategory: any,
  categoryCheck: boolean
) => {
  const requestOptions: any = {
    method: "GET",
  };

  const limitNumber = limit || 20;

  const categoryTypePath = categoryCheck ? "category" : "subCategory";

  return fetch(
    `${API_URL}/product?limit=${limitNumber}&${categoryTypePath}=${specificCategory}`,
    requestOptions
  )
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem("productsList", JSON.stringify(data.products));
      return data;
    });
};

export const getSearchedListProductsService = (search: any) => {
  const requestOptions: any = {
    method: "GET",
  };

  return fetch(`${API_URL}/product?search=${search}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      const products = data.products;

      localStorage.setItem("productsList", JSON.stringify(products));

      return products; 
    });
};


export const createProductService = (product: any) => {
  const requestOptions: any = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };

  return fetch(`${API_URL}/product`, requestOptions).then(handleResponse);
};

// create getDetailsProductsService to show product details
export const getDetailsProductsService = (id: number) => {
  const requestOptions: any = {
    method: "GET",
  };

  return fetch(`${API_URL}/product/${id}`, requestOptions).then(handleResponse);
};

export const updateProductService = (product: any) => {
  const requestOptions: any = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };

  return fetch(`${API_URL}/product/${product.id}`, requestOptions).then(
    handleResponse
  );
};

export const deleteProductService = (id: number) => {
  const requestOptions: any = {
    method: "DELETE",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return fetch(`${API_URL}/product/${id}`, requestOptions).then(handleResponse);
};

export const getProductsListService = () => {
  return JSON.parse(localStorage.getItem("productsList") as string);
};

export const getProductService = (id: number) => {
  return JSON.parse(localStorage.getItem("productsList") as string).filter(
    (product: { id: number }) => product.id === id
  )[0];
};

export const getProductByNameService = (name: string) => {
  return JSON.parse(localStorage.getItem("productsList") as string).filter(
    (product: { name: string }) => product.name === name
  )[0];
};

export const getProductByCategoryService = (category: any) => {
  return JSON.parse(localStorage.getItem("productsList") as string).filter(
    (product: { category: any }) => product.category === category
  )[0];
};

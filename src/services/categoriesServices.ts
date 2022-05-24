import { API_URL } from "../constants/constants";
import { authHeader } from "../utils/authHeader";
import { handleResponse } from "./api";

export const getListCategoriesService = () => {
  const requestOptions: any = {
    method: "GET",
  };

  return fetch(`${API_URL}/categories/categories`, requestOptions).then(
    handleResponse
  );
};

export const getDetailsCategoryService = (id: number) => {
  const requestOptions: any = {
    method: "GET",
  };

  return fetch(`${API_URL}/categories/category/${id}`, requestOptions).then(
    handleResponse
  );
};

export const createCategoryService = (name: string) => {
  const requestOptions: any = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  };

  return fetch(`${API_URL}/categories/category`, requestOptions).then(
    handleResponse
  );
};

export const updateCategoryService = (id: number, name: string) => {
  const requestOptions: any = {
    method: "PATCH",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  };

  return fetch(`${API_URL}/categories/category/${id}`, requestOptions).then(
    handleResponse
  );
};

export const deleteCategoryService = (id: number) => {
  const requestOptions: any = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${API_URL}/categories/category/${id}`, requestOptions).then(
    handleResponse
  );
};

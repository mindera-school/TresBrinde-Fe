import { API_URL } from "../constants/constants";
import { authHeader } from "../utils/authHeader";
import { handleResponse } from "./api";

export const getListBudgetService = () => {
  const requestOptions: any = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${API_URL}/budget`, requestOptions).then(handleResponse);
};

// create createBudgetService to post budget
export const sendBudgetImageService = (photo: any, budgetId: any) => {
  const requestOptions: any = {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: photo,
  };

  return fetch(`${API_URL}/budget`, requestOptions).then(handleResponse);
};

export const createBudgetService = (budget: any) => {
  const requestOptions: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(budget),
  };

  return fetch(`${API_URL}/budget`, requestOptions).then(handleResponse);
};

import FormData from "form-data";
import { appendFile } from "fs";
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
  const formData = new FormData();

  formData.append("toEmail", budget.toEmail);
  formData.append("name", budget.name);
  formData.append("address", budget.address);
  formData.append("zipCode", budget.zipCode);
  formData.append("message", budget.message);
  formData.append("budgets", JSON.stringify(budget.budgets));

  budget.toPrintImages.forEach((f, index) => {
    formData.append(`toPrintImages[${index}]`, f);
  });

  const requestOptions: any = {
    method: "POST",
    body: formData,
  };

  return fetch(`${API_URL}/email/send-budget`, requestOptions).then(
    handleResponse
  );
};

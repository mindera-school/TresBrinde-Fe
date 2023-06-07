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

  budget.toPrintImages.forEach((f) => {
    formData.append(`toPrintImages`, f, f.name);
  });

  formData.append("toEmail", budget.toEmail);
  formData.append("name", budget.name);
  formData.append("address", budget.address);
  formData.append("zipCode", budget.zipCode);
  formData.append("message", budget.message);
  formData.append("budgets", parseToObjectString(budget.budgets));

  const requestOptions: any = {
    method: "POST",
    body: formData,
  };

  return fetch(`${API_URL}/email/send-budget`, requestOptions).then(
    handleResponse
  );
};

const parseToObjectString = (budgets: any) => {
  const budgetsArray = JSON.stringify(budgets);

  const budgetsString = budgetsArray.slice(1);
  
  return budgetsString.slice(0, budgetsString.length - 1);
};

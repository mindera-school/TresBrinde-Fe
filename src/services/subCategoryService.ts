import { API_URL } from "../constants/constants";
import { authHeader } from "../utils/authHeader";
import { handleResponse } from "./api";

export const getDetailsSubCategoryService = (id: number) => {
    const requestOptions: any = {
      method: "GET",
    };
  
    return fetch(`${API_URL}/categories/subcategory/${id}`, requestOptions).then(
      handleResponse
    );
  };
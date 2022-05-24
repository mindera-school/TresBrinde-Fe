import { API_URL } from "../constants/constants";
import { handleResponse } from "./api";

export const loginService = (email: string, password: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  };

  return fetch(`${API_URL}/Auth/log-in`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("jwtToken", JSON.stringify(data.jwtToken));

      return data;
    });
};


export const registerService = (name:string, email: string, password: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, email: email, password: password, NIF: "", company_name: "", country: "", postal_code: "", city: "", address: "", contact: ""  }),
  };

  return fetch(`${API_URL}/Auth/register`, requestOptions)
    .then(handleResponse);
};

export const logoutService = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("jwtToken");
}


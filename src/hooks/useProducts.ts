import axios from "axios";
import { API_URL } from "../constants/constants";
import { useQuery } from "react-query";

export default function useProducts() {
  return useQuery("products", () =>
    axios.get(`${API_URL}/product`).then((res) => res.data.products)
  );
}

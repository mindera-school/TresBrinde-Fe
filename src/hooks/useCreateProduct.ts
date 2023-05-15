import { API_URL } from "./../constants/constants";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import request from "../utils/apiUtils";

export default function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation(
    async (values) =>
      await request({
        url: `${API_URL}/product`,
        method: "POST",
        body: JSON.stringify(values),
      }),
    {
      onSuccess: () => queryClient.invalidateQueries("products"),
    }
  );
}

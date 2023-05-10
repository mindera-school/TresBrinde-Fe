import { message } from "antd";
import { Dispatch } from "redux";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/constants";
import { getDetailsProductsService } from "../../services/productsService";

export const addToCart =
  (id: any, quantity: any, priceQty: any) =>
  async (dispatch: Dispatch, getState: any) => {
    getDetailsProductsService(id).then((data) => {
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          id: data?.id,
          reference: data?.reference,
          productName: data?.productName,
          image: data?.mainImage,
          price: priceQty,
          quantity,
        },
      });
    });

    message.success("Produto adicionado ao carrinho!");
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (id: string) => (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

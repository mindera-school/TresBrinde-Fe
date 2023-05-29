import { message } from "antd";
import { Dispatch } from "redux";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_EDIT_ITEM,
} from "../../constants/constants";
import { getDetailsProductsService } from "../../services/productsService";

export const addToCart =
  (id: any, quantity: any, priceQty: any, color: any) =>
  async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getDetailsProductsService(id);
      const cartItems = getState().cart.cartItems;
      const itemExists = cartItems.some((item: any) => item.id == id);

      if (itemExists) {
        message.warning("Produto já existe no carrinho");
      } else {
        dispatch({
          type: CART_ADD_ITEM,
          payload: {
            id: data?.id,
            reference: data?.reference,
            productName: data?.productName,
            image: data?.mainImage,
            color: color,
            price: priceQty,
            quantity,
          },
        });
        message.success("Produto adicionado ao carrinho!");
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cart.cartItems)
        );
      }
    } catch (error) {
      console.error(error);
    }
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

export const removeAllFromCart = () => (dispatch: Dispatch, getState: any) => {
  dispatch({
    type: CART_REMOVE_ALL_ITEMS,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const editItemFromCart =
  (id: any, quantity: any, color: any) =>
  async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getDetailsProductsService(id);
      dispatch({
        type: CART_EDIT_ITEM,
        payload: {
          id: data?.id,
          reference: data?.reference,
          productName: data?.productName,
          image: data?.mainImage,
          color: color,
          price: data?.priceQty,
          quantity: quantity,
        },
      });
      message.success("Produto editado!");
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.error(error);
    }
  };

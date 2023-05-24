import { message } from "antd";
import { Dispatch } from "redux";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/constants";
import { getDetailsProductsService } from "../../services/productsService";

export const addToCart =
  (id: any, quantity: any, priceQty: any) =>
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
            price: priceQty,
            quantity,
          },
        });

        message.success("Produto adicionado ao carrinho!");
        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

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

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_EDIT_ITEM,
} from "../../constants/constants";
import { Reducer } from "redux";
import { ICartItem, CartActionTypes } from "./../types/ICart";

const initialCartState = {
  loading: false,
  error: "",
  cartItems: [],
  totalPrice: 0,
};

export type CartState = {
  loading?: boolean;
  cartItems: ICartItem[];
  error?: string;
  totalPrice: number;
};

export const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialCartState,
  action: CartActionTypes
) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case CART_REMOVE_ALL_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    case CART_EDIT_ITEM: {
      const { id, reference, productName, image, color, price, quantity } =
        action.payload;

      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id
          ? {
              id: item.id,
              reference: reference !== null ? reference : item.reference,
              productName:
                productName !== null ? productName : item.productName,
              image: image !== null ? image : item.image,
              color: color !== null ? color : item.color,
              price: price !== null ? price : item.price,
              quantity: quantity !== null ? quantity : item.quantity,
            }
          : item
      );

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    default:
      return state;
  }
};

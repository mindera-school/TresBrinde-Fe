import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_EDIT_ITEM,
  ADD_UPLOAD_IMAGE,
} from "../../constants/constants";
import { Reducer } from "redux";
import { ICartItem, CartActionTypes } from "./../types/ICart";

const initialCartState = {
  loading: false,
  error: "",
  cartItems: [],
  totalPrice: 0,
  uploadImages: [],
};

export type CartState = {
  loading?: boolean;
  cartItems: ICartItem[];
  error?: string;
  totalPrice: number;
  uploadImages: any;
};

export const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialCartState,
  action: CartActionTypes
) => {
  switch (action.type) {
    case ADD_UPLOAD_IMAGE: {
      const newImage = action.payload;
      return {
        ...state,
        uploadImages: [...state.uploadImages, newImage],
      };
    }

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
      const { id, color, price, quantity, size } = action.payload;

      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id
          ? {
              id: item.id,
              reference: item.reference,
              productName: item.productName,
              image: item.image,
              color: color !== null ? color : item.color,
              price: price !== null ? price : item.price,
              quantity: quantity !== null ? quantity : item.quantity,
              size: size !== null ? size : item.size,
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

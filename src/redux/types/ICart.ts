import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_EDIT_ITEM,
  ADD_UPLOAD_IMAGE,
} from "../../constants/constants";

export interface ICartItem {
  id: string;
  reference: string;
  productName: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  size: number;
}

interface CartAddItemAction {
  type: typeof CART_ADD_ITEM;
  payload: ICartItem;
}

interface CartRemoveItemAction {
  type: typeof CART_REMOVE_ITEM;
  payload: string;
}

interface CartRemoveAllItemsAction {
  type: typeof CART_REMOVE_ALL_ITEMS;
}

interface CartEditItem {
  payload: {
    id: any;
    reference: any;
    productName: any;
    image: any;
    color: any;
    price: any;
    quantity: any;
    size: any;
  };
  type: typeof CART_EDIT_ITEM;
}

interface AddUploadImage {
  payload: any;
  type: typeof ADD_UPLOAD_IMAGE;
}

export type CartActionTypes =
  | AddUploadImage
  | CartAddItemAction
  | CartRemoveItemAction
  | CartRemoveAllItemsAction
  | CartEditItem;

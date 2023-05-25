import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from "../../constants/constants";

export interface ICartItem {
  id: string;
  reference: string;
  productName: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
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

export type CartActionTypes =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartRemoveAllItemsAction;

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/constants";

export interface ICartItem {
  id: string
  reference: string
  productName: string
  image: string
  price: number
  quantity: number
}

interface CartAddItemAction {
  type: typeof CART_ADD_ITEM
  payload: ICartItem
}

interface CartRemoveItemAction {
  type: typeof CART_REMOVE_ITEM
  payload: string
}


export type CartActionTypes =
  | CartAddItemAction
  | CartRemoveItemAction

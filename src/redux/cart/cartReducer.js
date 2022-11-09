import { CartActionTypes } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

      case CartActionTypes.CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        }
        case CartActionTypes.UPDATE_CART_DATA:
          return{
            ...state,
            payload: action.cartItems
          }
    default:
      return state;
  }
};


export default cartReducer
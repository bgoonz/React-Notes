import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//--------------------Cart Reducer--------------------
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //the findIndex below checks if the item we are currently looking at in the array has the same id as the item we are trying to add to the cart (with the action that was dispatched)
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    //if the item we are trying to add to the cart already exists in the cart, we want to update the amount of that item in the cart
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //concat returns a new array as opposed to push which mutates the existing array
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    ); //find the index of an existing item
    const existingItem = state.items[existingCartItemIndex]; //find the existing item it's self
    const updatedTotalAmount = state.totalAmount - existingItem.price; //update the total amount
    let updatedItems;
    if (existingItem.amount === 1) {
      //if the amount of the existing item is 1, we want to remove it from the cart
      updatedItems = state.items.filter((item) => item.id !== action.id); //keep all items that don't have the same id as found on the action
    } else {
      //if the amount of the existing item is greater than 1, we want to update the amount of the existing item
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; //update the amount of the existing item
      updatedItems = [...state.items]; //copy of state items
      updatedItems[existingCartItemIndex] = updatedItem; //on the copy we overwrite the existing item with the updated item
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
//--------------------Cart Provider Component--------------------
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  //----------------------JSX----------------------
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

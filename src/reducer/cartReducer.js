import { act } from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find((cur) => cur.id == id);

    console.log(existingProduct);

    let cartProduct;

    cartProduct = {
      id: id,
      name: product.name,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((cur) => {
      if (cur.id == action.payload) {
        let incAmount = cur.amount + 1;

        if (incAmount >= cur.max) {
          incAmount = cur.max;
        }

        return {
          ...cur,
          amount: incAmount,
        };
      } else {
        return cur;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((cur) => {
      if (cur.id == action.payload) {
        let decAmount = cur.amount - 1;

        if (decAmount <= 0) {
          decAmount = 1;
        }

        return {
          ...cur,
          amount: decAmount,
        };
      } else {
        return cur;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((cur) => cur.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, cur) => {
      let { amount } = cur;

      initialVal = initialVal + amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, cur) => {
      let { price, amount } = cur;
      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;

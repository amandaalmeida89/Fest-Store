import React, { useReducer, useEffect } from "react";

let reducer = (cart, newCart) => {
  if (newCart === null) {
    localStorage.removeItem("cart");
    return initialState;
  }
  return { ...cart, ...newCart };
};

const localState = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: {},
};

const CartContext = React.createContext();

function CartProvider(props) {
    const [cart, setCart] = useReducer(reducer, localState || initialState);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
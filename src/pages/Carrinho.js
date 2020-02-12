import React, { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { CartContext } from "../CartContext";
import CartItem from "../components/CartItem";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%"
  },
  span: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
    fontWeight: 'bolder',
  },
  ButtonPosition: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
  },
});

const Carrinho = () => {
  const { cart, setCart } = useContext(CartContext);

  const total = () => {
    if (!cart.products) {
      return 0;
    } else {
      const arr = [0];
      for (let i in cart.products) {
        arr.push(cart.products[i].price * cart.products[i].quantity);
      }
      return arr.reduce((acc, currentValue) => acc + currentValue);
    }
  };

  const addItemToList = item => {
    item.quantity = item.quantity + 1;
    cart.products[item.id] = item;
    setCart(cart);
  };

  const removeItemList = item => {
    if (item.quantity === 1) {
      delete cart.products[item.id];
      setCart(cart);
    } else {
      item.quantity = item.quantity - 1;
      cart.products[item.id] = item;
      setCart(cart);
    }
  };

  return (
    <>
      <Header />
      <main className={css(styles.main)}>
        {Object.values(cart.products).map(item => (
          <CartItem
            key={item.id}
            addItemToList={addItemToList}
            removeItemList={removeItemList}
            item={item}
            total={total}
          ></CartItem>
        ))}
        <div>
          <span className={css(styles.span)}>
            {total().toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })}
          </span>
        </div>
        <div className={css(styles.ButtonPosition)}>
          <Button name="Finalizar Compra" />
        </div>
      </main>
    </>
  );
};

export default Carrinho;

import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Input from "./Input";

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    justifyContent: 'center',
  },
  Cart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid gray',
    width: '60%',
    padding: '10px',
    fontWeight: 'bolder',
  },
  list: {
    padding: '10px',
  },
  name: {
    width: '500px',
  },
  plusMinus: {
    width: '50px',
    height: '40px',
    fontSize: '30px',
    background: '#FFCC02',
  },
});

const CartItem = (props) => {
  const item = props.item;
  return (
    <section className={css(styles.section)}>
      <div className={css(styles.Cart)} key={item.id}>
        <div className={css(styles.list, styles.name)}>{item.name}</div>
        <div className={css(styles.list)}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
        <Input className={css(styles.plusMinus)} id={item.id} value='-' type='submit' onClick={(e) => {
          props.removeItemList(item)
          e.preventDefault();
        }}
        ></Input>
        <div className={css(styles.list)}>{item.quantity}</div>
        <Input className={css(styles.plusMinus)} id={item.id} value='+' type='submit' onClick={(e) => {
          props.addItemToList(item)
          e.preventDefault();
        }}></Input>
      </div>
    </section>
  );
};
export default CartItem;
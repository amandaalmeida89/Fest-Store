import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Input from "./Input";

const styles = StyleSheet.create({

  Cart: {
    width: '80%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '25px',
    marginBottom: '20px',
    border: '#348bcb groove 1px',
    '@media (min-width: 1270px)': {
      display: 'flex',
      marginLeft: '300px',
      width: '60%',
      height: '30vh',
      justifyContent: 'center',
      marginTop: '0%'
    }
  },

  containerCard: {
    width: '100%',
  },

  inputPosition: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  number: {
    padding: '10px',
  },
  
  plusMinus: {
    width: '50px',
    height: '40px',
    fontSize: '30px',
    background: '#FFCC02',
    '@media (max-width: 1270px)': {
      width: '30px',
      height: '30px',
      fontSize: '15px',
    }
  },

  pName: {
    fontWeight: 'bolder',
    textAlign: 'center',
  }
})

const CartItem = (props) => {
  const item = props.item;

  return (
    <section className={css(styles.Cart)} key={item.id}>
      <div className={css(styles.containerCard)}>
        <p className={css(styles.pName)}>{item.name}</p>
        <p className={css(styles.pName)}>{item.price.toLocaleString("pt-BR",
          { style: "currency", currency: "BRL" })}</p>
        <div className={css(styles.inputPosition)}>
          <Input className={css(styles.plusMinus)} id={item.id} value='-' type='submit' onClick={(e) => {
            props.removeItemList(item)
            e.preventDefault();
          }}
          ></Input>
          <div className={css(styles.number)}>{item.quantity}</div>
          <Input className={css(styles.plusMinus)} id={item.id} value='+' type='submit' onClick={(e) => {
            props.addItemToList(item)
            e.preventDefault();
          }}></Input>
        </div>
      </div>
    </section>
  );
};
export default CartItem;
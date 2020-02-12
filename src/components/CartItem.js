import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Input from "./Input";

const styles = StyleSheet.create({

  Cart: {
    width: '80%',
      borderRadius:'10px',
      display:'flex',
      alignItems:'center',
      marginLeft:'25px',
      marginBottom:'20px',
      border: '1px solid gray',
     
    '@media (min-width: 1270px)': {
      display: 'flex',
      marginLeft:'150px',
      width: '80%',
      height:'100px',
      justifyContent:'center',
    }
  },
  /* List:{
   
    

  }, */
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

  pName:{
    fontWeight:'bolder',
    textAlign:'center',
  }
})

const CartItem = (props) => {
  const item = props.item;

  return (
    <section className={css(styles.Cart)} key={item.id}>
      <div className={css(styles.List)}>
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
import React from 'react';
import Input from './Input';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Card:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'80%',
    height:'300px',
    boxShadow:'2px 2px 2px 2px gray',
    padding:'10px',
    marginTop:'5%',   
  },

  ImageCard:{
    width:'200px',
    height:'200px',
    '@media only screen (min-width: 1270px)': {
      Card:{
        width:'400px',
        height:'400px',
      }
    }
  }
})

const ItemCard = (props) => {
  const item = props.item;

  return (
    <section className={css(styles.Card)}>
      <Input className={css(styles.ImageCard)}onClick={props.onClick} src={item.image} type="image" id={item.id} value={item.id} />
      <label htmlFor={item.id}>{item.name}</label>
      <label htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </section>
  )
}
export default ItemCard;
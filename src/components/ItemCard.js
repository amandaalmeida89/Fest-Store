import React from 'react';
import Input from './Input';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Card: {
    backgroundColor:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    height: '400px',
    boxShadow: '2px 2px 2px 2px gray',
    borderRadius:'10px',
    padding: '10px',
    marginTop: '5%',
    marginBottom:'5%',
    '@media (min-width: 1270px)': {
      width: '20%',
      height: '400px',
      marginRight: '5%',
    }
  },
  ImageCard: {
    width: '200px',
    height: '200px',
  },
  labelCard: {
    padding: '10px',
    marginTop: '10%',
    fontWeight: 'bolder',
    fontSize: '18px',
  }
})

const ItemCard = (props) => {
  const item = props.item;

  return (
    <section className={css(styles.Card)}>
      <Input className={css(styles.ImageCard)} onClick={props.onClick} src={item.thumbnail} type="image" id={item.id} value={item.id} />
      <label className={css(styles.labelCard)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.labelCard)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </section>
  )
}
export default ItemCard;
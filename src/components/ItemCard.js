import React from 'react';
import Input from './Input'

const ItemCard = (props) => {
  const item = props.item;

  return (
    <section className={props.class}>
      <Input onClick={props.onClick} src={item.image} type="image" id={item.id} value={item.id} />
      <label htmlFor={item.id}>{item.name}</label>
      <label htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </section>
  )
}
export default ItemCard;
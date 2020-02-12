import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
  },

});

const Carrinho = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart)

  // const total = cart.products.reduce((acc, currentValue) => acc + (currentValue.price * currentValue.quantity));
  const total = () => {
    const arr = [];
    for (let i in cart.products){
      arr.push(cart.products[i].price*cart.products[i].quantity)
    console.log(arr);
    }
    
    return arr.reduce((acc, currentValue) => acc + currentValue);
  }

  const addItemToList = (item) => {
    item.quantity = item.quantity + 1;
    cart.products[item.id] = item;
    setCart(cart);
  };

  const removeItemList = (item) => {
    if (item.quantity === 1) {
      delete cart.products[item.id];
      setCart(cart);
    } else {
      item.quantity = item.quantity - 1;
      cart.products[item.id] = item;
      setCart(cart);
    }
  }

  return (
    <>
      <Header />
      <main className={css(styles.main)}>
        {Object.values(cart.products).map((item) => <CartItem key={item.id} addItemToList={addItemToList} 
        removeItemList={removeItemList} item={item} total={total}></CartItem>)}
      <div>
        <span>{total().toLocaleString('pt-br', 
        { style: 'currency', currency: 'BRL' })}</span>
      </div>
        <Button
          name='Finalizar Compra'
        />
      </main>
    </>
  )
}

export default Carrinho;
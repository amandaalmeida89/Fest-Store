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

  const addItemToList = (item) => {
    // console.log(item)
    item.quantity = item.quantity + 1;
    cart.products[item.id] = item;
    setCart(cart);
  };

  const removeItemList = (item) => {
    console.log(item)
    if (item.quantity >= 0) {
      delete item.id
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
        removeItemList={removeItemList} item={item}></CartItem>)}
        <Button
          name='Finalizar Compra'
        />
      </main>
    </>
  )
}

export default Carrinho;
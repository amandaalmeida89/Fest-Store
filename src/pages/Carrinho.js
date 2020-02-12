import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem';
import { StyleSheet, css } from 'aphrodite';
import app from "../Utils/firebaseconfig";


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

  const total = () => {
    if (!cart.products) {
      return 0;
    } else {
      const arr = [0];
      for (let i in cart.products) {
        arr.push(cart.products[i].price * cart.products[i].quantity)
        console.log(arr);
      }
      return arr.reduce((acc, currentValue) => acc + currentValue);
    }
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

  const createOrder = () => {
    app
      .firestore()
      .collection("orders")
      .add({
        order: cart,
        addedAt: new Date().getTime(),
      })
      .then(() => {
        console.log('oi')
      }).catch((err) => {
        console.log(err)
      })
  };

  return (
    <>
      <Header />
      <main className={css(styles.main)}>
        {Object.values(cart.products).map((item) => <CartItem key={item.id} addItemToList={addItemToList}
          removeItemList={removeItemList} item={item}></CartItem>)}
        <div>
          <span>{total().toLocaleString('pt-br',
            { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <Button
          name='Finalizar Compra'
          handleClick={(e) => {
            createOrder()
            e.preventDefault()
          }}
        />
      </main>
    </>
  )
}

export default Carrinho;
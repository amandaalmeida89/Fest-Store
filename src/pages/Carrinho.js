import React, { useState ,useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
import app from "../Utils/firebaseconfig";
import Swal from 'sweetalert2'

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%"
  }
});

const Carrinho = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const total = () => {
      let totalItem = [0];
      let totalValue = [0];
      for (let i in cart.products){
        totalValue.push(cart.products[i].price*cart.products[i].quantity)
        totalItem.push(cart.products[i].quantity)
      }
      totalValue = totalValue.reduce((acc, currentValue) => acc + currentValue)
      totalItem = totalItem.reduce((acc, currentValue) => acc + currentValue)
      return {totalValue,totalItem};
  }

  const addItemToList = item => {
    item.quantity = item.quantity + 1;
    cart.products[item.id] = item;
    setCart(cart);
    console.log(Header)
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

  const createOrder = () => {
    if(!Object.keys(cart).length){
      history.push('/')
    } else {
      app
        .firestore()
        .collection("orders")
        .add({
          order: cart,
          addedAt: new Date().getTime(),
        })
        .then(() => {
          Swal.fire({
            title: 'Pedido enviado',
            icon: 'success',
          }).then(() => {
            localStorage.removeItem('cart');
          }).then(() => history.push('/'))
        })
        .catch((err) => {
          Swal.fire({
            title: 'Erro ao enviar pedido',
            icon: 'error',
          })
        })
      }
  };

  return (
    <>
      <Header 
      quant={total().totalItem}
      total={total().totalValue}
      handleClick={() => history.push('/carrinho')}
      />
      <main className={css(styles.main)}>
        {Object.values(cart.products).map((item) => <CartItem key={item.id} addItemToList={addItemToList} 
        removeItemList={removeItemList} item={item} ></CartItem>)}
      <div>
        <span>{total().totalValue.toLocaleString('pt-br', 
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
  );
};

export default Carrinho;

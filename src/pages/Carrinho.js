import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem';
import { StyleSheet, css } from 'aphrodite';
import app from "../Utils/firebaseconfig";
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    '@media (min-width: 768px)': {
      marginTop: "5%",
    }
  },

  span: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
    fontWeight: 'bolder',
  },
  
  ButtonPosition: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
  },
});

const Carrinho = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const total = () => {

    let totalItem = [0];
    let totalValue = [0];
    for (let i in cart.products) {
      totalValue.push(cart.products[i].price * cart.products[i].quantity)
      totalItem.push(cart.products[i].quantity)
    }
    totalValue = totalValue.reduce((acc, currentValue) => acc + currentValue)
    totalItem = totalItem.reduce((acc, currentValue) => acc + currentValue)
    return { totalValue, totalItem };

  }

  const addItemToList = item => {
    item.quantity = item.quantity + 1;
    cart.products[item.id] = item;
    setCart(cart);
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
      <Header
        quant={total().totalItem}
        total={total().totalValue}
        handleClick={() => history.push('/carrinho')}
      />
      <main className={css(styles.main)}>

        {Object.values(cart.products).map((item) => <CartItem key={item.id} addItemToList={addItemToList}
          removeItemList={removeItemList} item={item} ></CartItem>)}
        <div>
          <span className={css(styles.span)}>{total().totalValue.toLocaleString('pt-br',
            { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className={css(styles.ButtonPosition)}>
          <Button
            name='Finalizar Compra'
            handleClick={(e) => {
              createOrder()
              e.preventDefault()
            }}
          />
        </div>


      </main>
    </>
  );
};

export default Carrinho;


import React, { useState ,useContext } from 'react'
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
import app from "../Utils/firebaseconfig";
import Swal from 'sweetalert2'
import Input from '../components/Input';

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    '@media (min-width: 768px)': {
      marginTop: "5%",
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: '0 auto',
    width: '700px',
    height: '40px',
    borderRadius: '6px',
    marginBottom: '0.5%'
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
  const [cpfState, setCpf] = useState("");
  const [nameState, setName] = useState("");
  const [cepState, setCep] = useState("");
  const [streetState, setStreet] = useState("");
  const [neighborhoodState, setNeighborhood] = useState("");
  const [cityState, setCity] = useState("");
  const [numberState, setNumber] = useState("");

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
          CPF: cpfState,
          name: nameState,
          CEP: cepState,
          street: streetState,
          neighborhood: neighborhoodState,
          city: cityState,
          number: numberState,
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
          <span className={css(styles.span)}>{total().totalValue.toLocaleString('pt-br',
            { style: 'currency', currency: 'BRL' })}</span>
        </div>s
        <form>
          <Input className={css(styles.form)} placeholder="CPF" type="number" value={cpfState} onChange={(e) => setCpf(e.currentTarget.value)}></Input>
          <Input className={css(styles.form)} placeholder="Nome" type="text" value={nameState} onChange={(e) => setName(e.currentTarget.value)}></Input>
          <Input className={css(styles.form)} placeholder="CEP" type="number" value={cepState} onChange={(e) => setCep(e.currentTarget.value)}
          ></Input>
          <Input className={css(styles.form)} placeholder="Rua" type="text" value={streetState} onChange={(e) => setStreet(e.currentTarget.value)}></Input>
          <Input className={css(styles.form)} placeholder="Bairro" type="text" value={neighborhoodState} onChange={(e) => setNeighborhood(e.currentTarget.value)}></Input>
          <Input className={css(styles.form)} placeholder="Cidade" type="text" value={cityState} onChange={(e) => setCity(e.currentTarget.value)}></Input>
          <Input className={css(styles.form)} placeholder="Numero" type="text" value={numberState} onChange={(e) => setNumber(e.currentTarget.value)}></Input>
        </form>
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

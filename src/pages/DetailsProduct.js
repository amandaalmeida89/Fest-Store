import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const styles = StyleSheet.create({
  img: {
    marginTop: '20px',
    border: 'none',
    width: '45vw',
    margin: 'auto',
    '@media (max-width: 768px)': {
      width: '80vw'
    },
  },
  section: {
    border: 'none',
    width: '50vw',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    margin: 'auto',
    '@media (max-width: 768px)': {
      width: '80vw',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (min-width: 768px)': {
      justifyContent: 'center',
      display: 'flex',
    },
  },

});

const DetailsProduct = () => {
  const [products, setProducts] = useState('');
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();


  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id')
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/products/' + id)
      .then(res => res.json())
      .then((response) => {
        setProducts(response)
      })
  }, [])

  const addItemToCart = () => {
    if (cart.products[products.id]) {
      cart.products[products.id].quantity = cart.products[products.id].quantity + 1;
    } else {
      cart.products[products.id] = {
        ...products,
        quantity: 1,
      };
    }
    setCart(cart);
    history.push('/carrinho');
  }

  return (
    <>
      <Header
      />
      <Link to="/">Voltar</Link>
      <main className={css(styles.main)}>
        <img className={css(styles.img)} src={products.image} alt="foto do produto" />
        <section className={css(styles.section)}>
          <h1>{products.name}</h1>
          <p>{products.description}</p>
          <p>{Number(products.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          <Button
            id={products.id}
            handleClick={(e) => {
              addItemToCart()
              e.preventDefault()
            }}
            name='Adicionar ao carrinho'
          />
        </section>
      </main>
    </>
  )
}

export default DetailsProduct


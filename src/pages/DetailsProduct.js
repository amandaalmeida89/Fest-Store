import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { CartContext } from '../CartContext';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const styles = StyleSheet.create({
  img: {
    marginTop: '20px',
    borderRadius: '10px',
    border: '#348bcb groove 1px',
    width: '45vw',
    margin: 'auto',
    '@media (max-width: 768px)': {
      width: '80vw'
    },
  },

  section: {
    width: '50vw',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 'auto',
    lineHeight: '30px',
    '@media (max-width: 768px)': {
      width: '80vw',
      lineHeight: '25px',

    },

  },

  Title: {
    marginBottom: '10%'
  },

  main: {
    justifyContent: 'center',
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    }

  },

  Link: {
    display: 'flex',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    borderRadius: '6px',
    padding: '2%',
    color: '#348bcb',
    fontSize: '25px',
    '@media (max-width: 768px)': {
      fontSize: '18px',
      marginBottom: '5%',
      marginTop: '3%'
    },
  },

  ButtonPosition: {
    display: 'flex',
    justifyContent: 'flex-end'
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
      <Link to="/" className={css(styles.Link)}><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <main className={css(styles.main)}>
        <img className={css(styles.img)} src={products.image} alt="foto do produto" />
        <section className={css(styles.section)}>
          <h1 className={css(styles.Title)}>{products.name}</h1>
          <p>{products.description}</p>
          <p>{Number(products.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          <div className={css(styles.ButtonPosition)}>
            <Button
              id={products.id}
              handleClick={(e) => {
                addItemToCart()
                e.preventDefault()
              }}
              name='Adicionar ao carrinho'
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default DetailsProduct


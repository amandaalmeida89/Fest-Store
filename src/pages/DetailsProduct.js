import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  img: {
    marginTop:'20px',
    border: 'none',
    width: '45vw',
    margin:'auto',
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
    margin:'auto',
    '@media (max-width: 768px)': {
      width: '80vw',
    },
  },
  main: {
    display: 'flex',
    flexDirection:'column',
    width:'100%',
    '@media (min-width: 768px)': {
      justifyContent: 'center',
      display: 'flex',
    },
},
  
});

const DetailsProduct = () => {

  const [products, setProducts] = useState('');
 
  
  useEffect(() => {
    const xuxu = new URL (window.location.href);
    const id = xuxu.searchParams.get('id')
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/products/' + id)
      .then(res => res.json())
      .then((snap) => {
        setProducts(snap)
        
      })
  }, [])


  
	return (
		<>
    <Header
      quant='1'
      total='10'
      handleClick={() => console.log('oi')}
      />
    <main className={css(styles.main)}>
			<img className={css(styles.img)} src={products.image} alt="foto do produto" />
      <section className={css(styles.section)}>
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <p>{Number(products.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</p>
        <Button 
        id={products.id}
        onClick={() => console.log('oi')}
        name='Adicionar ao carrinho'
        />
      </section>
    </main>
		</>
	)
}

export default DetailsProduct


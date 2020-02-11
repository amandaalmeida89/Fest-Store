import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  img: {
    border: 'none',
  },
});

const DetailsProduct = () => {

  const [products, setProducts] = useState('');
 
  
  useEffect(() => {
    const url = new URL (window.location.href);
    const id = url.searchParams.get('id')
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/products/' + id)
      .then(res => res.json())
      .then((snap) => {
        setProducts(snap)
        
      })
  }, [])

	return (
		<>
      <Header />
    <main>
			<img className={css(styles.img)} src={products.image} alt="foto do produto" />
      <h1>{products.name}</h1>
      <p>{products.description}</p>
      <p>{products.price}</p>
      <Button />
    </main>
		</>
	)
}

export default DetailsProduct


import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';


const Carrinho = () => {

  const [products, setProducts] = useState('');
 
  useEffect(() => {
 
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/products/1')
      .then(res => res.json())
      .then((snap) => {
        setProducts(snap)
        
      })
  }, [])

	return (
		<>
      <Header />
    <main>
    
      <Button />
    </main>
		</>
	)
}

export default Carrinho;
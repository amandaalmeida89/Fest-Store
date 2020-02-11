import React, { useState, useEffect } from "react";
import Header from '../components/Header';

const Home = () => {
  const [products, setProducts] = useState('');
  console.log(products)

  useEffect(() => {
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/db')
      .then(res => res.json())
      .then((snap) => {
        const productsList = snap.products;
        setProducts(productsList)
      })
  }, [])

  return (
    <div>
      <Header
        name="Teste"
        handleClick={() => console.log('oi')}
        id="button" />
    </div>
  )

}

export default Home;
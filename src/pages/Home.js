import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Card from "../components/Card";

const Home = () => {
  const [products, setProducts] = useState('');


  useEffect(() => {
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/db')
      .then(res => res.json())
      .then((snap) => {
        const productsList = snap.products;
        setProducts(productsList)
      })
  }, [])

  return (
    <>
      <div>
        <Header
          name="Teste"
          handleClick={() => console.log('oi')}
          id="button" />
      </div>
      <section>
          <Card productsState={products}/>
      </section>
    </>

  )

}

export default Home;
import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Card from "../components/Card";

const Home = () => {
  const [products, setProducts] = useState('');
  //   console.log(products)

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
      quant='1'
      total='10'
        name="Teste"
        handleClick={() => console.log('oi')}
        id="button" />
      {/* <section>
        <Card productsState={products} />
      </section> */}
    </div>

  )

}

export default Home;
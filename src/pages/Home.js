import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [products, setProducts] = useState('');

useEffect(()=> {
  fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/db')
  .then(res => res.json())
  .then((snap)=> {
    const productsList = snap.products;
    setProducts(productsList)
  })
},[])

  return (
    <section>
        <Card productsState={products}/>
    </section>
  )

}

export default Home;
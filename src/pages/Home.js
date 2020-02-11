import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Card from "../components/Card";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState('');
  const  history = useHistory();


  useEffect(() => {
    fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/db')
      .then(res => res.json())
      .then((snap) => {
        const productsList = snap.products;
        setProducts(productsList)
      })
  }, [])

  const productsDetails = (item) => {
    const id = item.id;
    history.push("/product?id="+id)
  }

  return (
    <>
      <div>
        <Header
          name="Teste"
          handleClick={() => console.log('oi')}
          id="button" />
      </div>
      <section>
          <Card productsState={products} productsDetails={productsDetails}/>
      </section>
    </>

  )

}

export default Home;
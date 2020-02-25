import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Card from "../components/Card";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState('');
  const history = useHistory();


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/product-list')
      .then(res => res.json())
      .then((resonse) => {
        const productsList = resonse;
        setProducts(productsList)
      })
  }, [])

  const productsDetails = (item) => {
    const id = item.id;
    history.push("/product?id=" + id)
  }

  return (
    <>
      <div>
        <Header
        />
        <section>
          <Card productsState={products} productsDetails={productsDetails} />
        </section>
      </div>
    </>

  )
}

export default Home;
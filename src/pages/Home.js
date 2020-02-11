import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState('');
  console.log(products)

useEffect(()=> {
  fetch('http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/db')
  .then(res => res.json())
  .then((snap)=> {
    const productsList = snap.products;
    setProducts(productsList)
  })
},[])

  return (
    <div></div>
  )

}

export default Home;
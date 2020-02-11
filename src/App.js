import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import DetailsProduct from './pages/DetailsProduct';
import Carrinho from './pages/Carrinho';


const App = () => {

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={DetailsProduct} />
      <Route exact path="/carrinho" component={Carrinho} />

    </>
  );
};

export default App;
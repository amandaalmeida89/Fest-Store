import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import DetailsProduct from './pages/DetailsProduct';
import Carrinho from './pages/Carrinho';
import { CartProvider } from './CartContext';

const App = () => {

  return (
    <CartProvider>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={DetailsProduct} />
      <Route exact path="/carrinho" component={Carrinho} />
    </CartProvider>
  );
};

export default App;
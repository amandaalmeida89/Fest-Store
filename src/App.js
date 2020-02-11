import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import DetailsProduct from './pages/DetailsProduct';

const App = () => {

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={DetailsProduct} />
    </>
  );
};

export default App;
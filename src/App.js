import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import Cart from "./components/Cart";
import { Grid } from '@material-ui/core';

import CartCustomProvider from './context/CartContext';

const URL_PUBLIC = process.env.REACT_APP_API_URL

function App() {
  return (
    <CartCustomProvider>
      <Grid container direction="column" style={{ backgroundColor: "#ebebeb" }}>
        <Router basename={URL_PUBLIC}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/formBuy">
            </Route>
          </Switch>
        </Router>
      </Grid>
    </CartCustomProvider>
  );
}

export default App;
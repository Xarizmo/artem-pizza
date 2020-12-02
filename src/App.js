import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { PizzaConfiguratorPage } from './PizzaConfiguratorPage';
import { PizzaPreviewPage } from './PizzaPreviewPage';
import { CheckoutPage } from './CheckoutPage';
import { RegisterPage } from "./RegisterPage";
import { NotFoundPage } from './NotFoundPage';
import { LoginPage } from './LoginPage';
import { OrdersPage } from './OrdersPage';

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/orders">Заказы</Link></li>
          <li><Link to="/register">Зарегистрироваться</Link></li>
          <li><Link to="/login">Войти</Link></li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/pizza-preview">
          <PizzaPreviewPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <PizzaConfiguratorPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PizzaConfiguratorPage } from "./PizzaConfiguratorPage";
import { CheckoutPage } from "./CheckoutPage";
import { RegisterPage } from "./RegisterPage";
import { NotFoundPage } from "./NotFoundPage";
import { LoginPage } from "./LoginPage";
import { OrderPage } from "./Order";
import { OrdersPage } from "./OrdersPage";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/orders">Заказы</Link>
          </li>
          <li>
            <Link to="/register">Зарегистрироваться</Link>
          </li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/order">
          <OrderPage />
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
  );
}

export default App;

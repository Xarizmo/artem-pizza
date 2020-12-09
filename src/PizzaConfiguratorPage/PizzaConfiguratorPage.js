import React from 'react';
import { usePizza } from '../PizzaContext';
import { PizzaForm } from './PizzaForm';
import { useHistory } from 'react-router-dom';

import PizzaImg from './assets/thin.png'

export const PizzaConfiguratorPage = ({ _usePizzaHook = usePizza }) => {
  const { setPizza } = _usePizzaHook();
  const history = useHistory();
  
  const onPizzaChange = (pizza) => {
    setPizza(pizza);
    history.push('/pizza-preview');
  }
  
  return (
    <>
      <img src={PizzaImg} alt="pizza"/>
      <h1>Соберите пиццу</h1>
      <PizzaForm onPizzaSubmit={onPizzaChange}/>
    </>
  );
};
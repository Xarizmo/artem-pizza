import React, { useState } from 'react';
import { SIZES, DOUGHS, SAUCES, CHEESES, VEGETABLES, MEATS } from '../../data/constants';
import { RadioGroup } from '../../components/Radiogroup/RadioGroup';
import { CheckboxGroup } from '../../components/CheckboxGroup/CheckboxGroup';
import { OrderPage } from '../OrderPage';

import PizzaImg from './assets/thin.png'

const PizzaConfigurator = () => {
  const [orderOptions, setOrderOptions] = useState({
    size: "30 см",
    dough: "Тонкое",
    sauce: "Томатный",
    extra: []
  });
  const [isShowOrderPage, setIsShowOrderPage] = useState(false);
  
  const handleCheckboxSelectOption = (value) => {
    const newExtras = orderOptions.extra.includes(value)
      ? orderOptions.extra.filter((i) => i !== value)
      : [...orderOptions.extra, value];
    
    const newOptions = {
      ...orderOptions,
      extra: newExtras
    };
    
    setOrderOptions(newOptions);
  };
  
  const handleRadioSelectOption = (name, value) => {
    const newOrderOptions = { ...orderOptions, [name]: value };
    setOrderOptions(newOrderOptions);
  };
  
  const getTotalPrice = () => {
    const sizeCost = orderOptions.size === "30 см" ? 0 : 50;
    const extraCost = orderOptions.extra.length * 29;
    
    return 200 + sizeCost + extraCost;
  };
  
  const handleShowOrderPage = () => {
    setIsShowOrderPage(true);
  };
  
  return (
    <div>
      <img src={PizzaImg} alt="pizza"/>
      <p>Размер</p>
      <RadioGroup
        groupName="size"
        isSelected={orderOptions["size"]}
        options={SIZES}
        handleRadioSelectOption={handleRadioSelectOption}
      />
      <p>Тесто</p>
      <RadioGroup
        groupName="dough"
        isSelected={orderOptions["dough"]}
        options={DOUGHS}
        handleRadioSelectOption={handleRadioSelectOption}
      />
      <p>Выберите соус:</p>
      <RadioGroup
        groupName="sauce"
        isSelected={orderOptions["sauce"]}
        options={SAUCES}
        handleRadioSelectOption={handleRadioSelectOption}
      />
      <p>Выберите сыр:</p>
      <CheckboxGroup
        groupName="cheese"
        options={CHEESES}
        handleCheckboxSelectOption={handleCheckboxSelectOption}
      />
      <p>Выберите овощи:</p>
      <CheckboxGroup
        groupName="vegetable"
        options={VEGETABLES}
        handleCheckboxSelectOption={handleCheckboxSelectOption}
      />
      <p>Выберите мясо:</p>
      <CheckboxGroup
        groupName="meat"
        options={MEATS}
        handleCheckboxSelectOption={handleCheckboxSelectOption}
      />
      <button onClick={handleShowOrderPage}>
        Заказать за {getTotalPrice()}руб
      </button>
      {isShowOrderPage && <OrderPage orderOptions={orderOptions} totalPrice={getTotalPrice()}/>}
    </div>
  );
}

export default PizzaConfigurator;
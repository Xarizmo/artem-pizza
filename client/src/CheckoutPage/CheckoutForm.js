import React from "react";
import { useForm } from "react-hook-form";
import { useOrder } from "../OrderContext";
import { calculatePrice } from "../utils/calculatePrice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import visaLogo from "./assets/visa-logo.svg";
import mastercardLogo from "./assets/mastercard-logo.svg";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/\d{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

const schema = yup.object().shape({
  address: yup.string().required("Обязательное поле!"),
  entrance: yup.string().required("Обязательное поле!"),
  floor: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Только числовое значение!")
    .positive()
    .integer(),
  apartment: yup.string().required("Обязательное поле!"),
  cardNumber: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Только числовое значение!")
    .positive()
    .integer()
    .required("Обязательное поле!"),
  expirationDate: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Только числовое значение!")
    .positive()
    .integer()
    .required("Обязательное поле!"),
  cvc: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Только числовое значение!")
    .positive()
    .integer()
    .required("Обязательное поле!"),
});

export const CheckoutForm = ({ onOrderSubmit }) => {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const { pizza } = useOrder();

  const cardNumber = watch("cardNumber");
  const price = calculatePrice(pizza);
  const totalPrice = price + 180;

  const onSubmit = (data) => {
    onOrderSubmit(data);
  };

  return (
    <>
      <h2>Адрес доставки</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Адрес
            <input
              type="text"
              name="address"
              placeholder="Введите адрес"
              ref={register}
            />
          </label>
          <p>{errors.address?.message}</p>
        </div>
        <div>
          <label>
            Подъезд
            <input type="text" name="entrance" ref={register} />
          </label>
          <p>{errors.entrance?.message}</p>
        </div>
        <div>
          <label>
            Этаж
            <input type="text" name="floor" ref={register} />
          </label>
          <p>{errors.floor?.message}</p>
        </div>
        <div>
          <label>
            Квартира
            <input type="text" name="apartment" ref={register} />
          </label>
          <p>{errors.apartment?.message}</p>
        </div>
        <h2>Данные для оплаты</h2>
        <p>
          <label>
            Номер карты
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="cardNumber"
              placeholder="Введите номер карты"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeCardNumber(value);
              }}
              ref={register}
            />
            {cardNumber?.startsWith("4") && (
              <img src={visaLogo} alt="Visa logotype" style={{ width: 100 }} />
            )}
            {(cardNumber?.startsWith("2") || cardNumber?.startsWith("5")) && (
              <img
                src={mastercardLogo}
                alt="Mastercard logotype"
                style={{ width: 100 }}
              />
            )}
          </label>
        </p>
        <p>
          <label>
            Срок действия
            <input type="text" name="expirationDate" ref={register} />
          </label>
        </p>
        <p>
          <label>
            CVC/CVV
            <input type="text" name="cvc" ref={register} />
          </label>
        </p>
        <p>Стоимость заказа - {price} руб</p>
        <p>Доставка - 180 руб</p>
        <p>К оплате - {totalPrice} руб</p>
        <button>Оплатить {totalPrice}</button>
      </form>
    </>
  );
};

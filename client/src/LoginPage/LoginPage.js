import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email!")
    .required("Обязательное поле!"),
  password: yup.string().required("Обязательное поле!"),
});

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Войдите в аккаунт</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>
            E-mail:
            <input type="text" name="email" ref={register} />
          </label>
          <p>{errors.email?.message}</p>
        </p>
        <p>
          <label>
            Пароль:
            <input type="text" name="password" ref={register} />
          </label>
          <p>{errors.password?.message}</p>
        </p>
        <button>Авторизоваться</button>
      </form>
      <hr />
      <div>
        Ещё не зарегистрированы?
        <Link to="/register">Страница регистрации</Link>
      </div>
    </div>
  );
};

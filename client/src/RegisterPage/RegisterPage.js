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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Обязательное поле!"),
});

export const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Зарегистрируйтесь</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>
            E-mail:
            <input type="text" name="email" ref={register} />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
        </p>
        <p>
          <label>
            Пароль:
            <input type="password" name="password" ref={register} />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        </p>
        <p>
          <label>
            Подтверждение пароля:
            <input type="password" name="confirmPassword" ref={register} />
          </label>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          {/*<p>{errors.password?.message}</p>*/}
        </p>
        <button>Зарегистрироваться</button>
      </form>
      <hr />
      <div>
        Уже зарегистрированы?
        <Link to="/login">Войдите в аккаунт</Link>
      </div>
    </div>
  );
};

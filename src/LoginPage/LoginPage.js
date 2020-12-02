import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <h1>Войдите в аккаунт</h1>
      <form>
        <label>
          E-mail:
          <input type="text" />
        </label>
        <label>
          Пароль:
          <input type="text" />
        </label>
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

import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Зарегистрируйтесь</h1>
      <form>
        <label>
          Логин:
          <input type="text" />
        </label>
        <label>
          Пароль:
          <input type="text" />
        </label>
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

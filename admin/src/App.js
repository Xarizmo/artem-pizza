import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  price: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Цена должна быть числом")
    .required("Обязательное поле!"),
  name: yup.string().required("Обязательное поле!"),
  slug: yup.string().required("Обязательное поле!"),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="price">Цена:</label>
        <input id="price" ref={register} type="tel" name="price" />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="name">Название:</label>
        <input id="name" ref={register} type="text" name="name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input id="slug" ref={register} type="text" name="slug" />
        {errors.slug && <p>{errors.slug.message}</p>}
      </div>
      <div>
        <label htmlFor="picture">Картинка:</label>
        <input id="picture" ref={register} type="file" name="picture" />
      </div>
      <button>Отправить</button>
    </form>
  );
}

export default App;

import style from "../styles/Form.module.css";
const Form = () => {
  return (
    <div className={style.form_flexDiv}>
      <div className={style.form_text}>
        <h4>Нужен тепловоз в аренду?</h4>
        <p>Оставьте заявку и мы подберем самый оптимальный вариант</p>
      </div>
      <div className={style.form_div}>
        <form action="#" method="post">
          <label htmlFor="text">
            <input
              type="text"
              required
              placeholder="Ваше имя *"
              className={style.input}
            />
          </label>
          <label htmlFor="tel">
            <input
              type="tel"
              required
              placeholder="Ваш телефон *"
              className={style.input}
            />
          </label>
          <textarea cols="20" placeholder="Комментарий"></textarea>
          <div className={style.checkboxDiv}>
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Я даю согласие на обработку персональных данных
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

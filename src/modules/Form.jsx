import style from "../styles/Form.module.css"
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
          <input type="text" required placeholder="Ваше имя *" />
          </label>
          <label htmlFor="tel">
          <input type="tel" required placeholder="Ваш телефон *"/>
          </label>
          <textarea cols="20" placeholder="Комментарий"></textarea>
          <input сlassName={style.checkbox} type="checkbox" />
          <label сlassName={style.checkboxLabel} htmlFor="checkbox">
          Я даю согласие на обработку персонаьных данных
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form;
import style from "../styles/Form.module.css";
import { IMaskInput } from "react-imask";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(null);
  const numberMask = "+7 (000) 000-00-00";
  const form = useRef();

  const checkForm = () => {
    if (tel.length === 18 && tel !== "" && name !== "" && checked) {
      console.log("nice!");
      emailjs
        .sendForm(
          "service_tdlhokx",
          "template_ax0d4a7",
          form.current,
          "ihQVhtzRKs7BPxNN3"
        )
        .then(
          (result) => {
            console.log("all good");
            console.log(result);
            setSend(true);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("bad!");
      setSend(false);
    }
  };

  return (
    <div className={style.form_flexDiv}>
      <div className={style.form_text}>
        <h4>Нужен тепловоз в аренду?</h4>
        <p>Оставьте заявку и мы подберем самый оптимальный вариант</p>
      </div>
      <div className={style.form_div}>
        <p
          style={{
            fontWeight: "800",
          }}
        >
          * - обязательно
        </p>
        <p
          className={style.false_input}
          style={{
            display: !send && send !== null ? "block" : "none",
          }}
        >
          Заполните все важные поля!
        </p>
        <p
          className={style.true_input}
          style={{
            display: send && send !== null ? "block" : "none",
          }}
        >
          Заявка отправлена!
        </p>
        <form ref={form}>
          <label htmlFor="text">
            <input
              value={name}
              type="text"
              required
              placeholder="Ваше имя *"
              className={style.input}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </label>
          <label htmlFor="tel">
            <IMaskInput
              onChange={(e) => setTel(e.target.value)}
              mask={numberMask}
              value={tel}
              required
              placeholder="Ваш телефон *"
              className={style.input}
              name="tel"
            />
          </label>
          <textarea
            cols="20"
            placeholder="Комментарий"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
          ></textarea>
          <div className={style.checkboxDiv}>
            <input type="checkbox" onClick={() => setChecked(!checked)} />
            <label htmlFor="checkbox">
              Я даю согласие на обработку персональных данных *
            </label>
          </div>
        </form>
        <div className={style.btn_div}>
          <button onClick={checkForm}>
            Отправить
            <img src="/imgs/arrowRight.svg" alt="отправить" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

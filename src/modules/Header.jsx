import style from "../styles/Header.module.css";
import { IMaskInput } from "react-imask";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Header = () => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [send, setSend] = useState(null);
  const numberMask = "+7 (000) 000-00-00";
  const form = useRef();

  const checkForm = () => {
    if (tel.length === 18 && tel !== "" && name !== "" && checked) {
      console.log("nice!");
      emailjs
        .sendForm(
          "service_6cllipu",
          "template_cc01fqb",
          form.current,
          "OcT-JT2wZQy8PvZqJ"
        )
        .then(
          (result) => {
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

  if (blocked) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  return (
    <>
      <div
        className={style.black_block}
        style={{
          display: blocked ? "block" : "none",
        }}
        onClick={() => setBlocked(false)}
      ></div>
      <div className={style.logo_contacts}>
        <div className={style.logo__text}>
          <img src="/imgs/Logooo.svg" alt="logo" className={style.logo} />
          <div className={style.logo_div}>
            <h3>ПРОМТРАНС-СП</h3>
            <span>Професиональные решения, качества и надежность</span>
          </div>
        </div>
        <div className={style.time_days}>
          <div className={style.time_phone}>
            <div className={style.days__time}>
              <img
                src="/imgs/clock.svg"
                alt="time"
                className={style.time_icon}
              />
              <div className={style.days}>
                <span className={style.work_days}>
                  <b>Пн - Пт:</b> 09:00 - 18:00
                </span>
                <span className={style.days_off}>
                  <b>Сб - Вс:</b> выходной
                </span>
              </div>
            </div>
            <div className={style.telephone}>
              <img src="/imgs/phone.svg" alt="telephone" />
              <div className={style.phone_text}>
                <a href="tel:+7 (xxx) xxx-xx-xx">+7 (916) 332-86-08</a>
                <span>
                  <button onClick={() => setBlocked(true)}>
                    Заказать обратный звонок
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.callback_div}
        style={{
          display: blocked ? "block" : "none",
        }}
      >
        <button className={style.close_btn} onClick={() => setBlocked(false)}>
          <img src="/imgs/closeBtn.svg" alt="закрыть" />
        </button>
        <h3>Оставьте заявку и наш специалист свяжется с вами</h3>
        <div className={style.form}>
          <p
            style={{
              fontWeight: "800",
              textAlign: "center",
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
          </form>
          <div className={style.checkboxDiv}>
            <input type="checkbox" onClick={() => setChecked(!checked)} />
            <label htmlFor="checkbox">
              Я даю согласие на обработку персональных данных *
            </label>
          </div>
          <div className={style.btn_div}>
            <button onClick={checkForm}>Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

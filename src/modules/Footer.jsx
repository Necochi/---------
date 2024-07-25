import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer_main}>
      <div className={style.footer_block}>
        <div className={style.logo_politic}>
          <div className={style.logo}>
            <img src="/imgs/Logooo.svg" alt="logo" />
            <div>
              <h4>ПРОМТРАНС-СП</h4>
              <span>Професиональные решения, качества и надежность</span>
            </div>
          </div>
          <div className={style.politic}>
            <span>«Промтранс-СП» 2019-2024</span>
            <button>Политика обработки персональных данных</button>
          </div>
        </div>
        <div className={style.about_div}>
          <h5>Главная</h5>
          <div className={style.info}>
            <ul>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Аренда тепловозов</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.contacts_div}>
          <h5>Контакты</h5>
          <div className={style.contacts}>
            <ul>
              <li>
                <img src="/imgs/phone.svg" alt="phone" />
                <a href="tel:+7 (xxx) xxx-xx-xx">
                  <b>+7 (916) 332-86-08</b>
                </a>
              </li>
              <li>
                <img src="/imgs/location.svg" alt="loacation" />
                <span>
                  141303, Московская Область, г.о. Сергиево-Посадский, г.
                  Сергиев Посад, ул. Пограничная, д. 5, помещ. 10
                </span>
              </li>
              <li>
                <img src="/imgs/mail.svg" alt="mail" />
                <span>teplovoz24rf@yandex.ru</span>
              </li>
              <li>
                <img src="imgs/clock.svg" alt="time" />
                <div className={style.time}>
                  <span>
                    <b>Пн - Пт:</b> 09:00 - 18:00
                  </span>
                  <span>
                    <b>Сб - Вс:</b> выходной
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

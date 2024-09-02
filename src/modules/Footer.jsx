import style from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", text: "Главная" },
  { path: "about", text: "О компании" },
  { path: "booking", text: "Аренда тепловозов" },
  { path: "contact", text: "Контакты" },
];

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
            <span>© Промтранс-СП 2019-2024</span>
            <button>Политика обработки персональных данных</button>
          </div>
        </div>
        <div className={style.about_div}>
          <h5>Главная</h5>
          <div className={style.info}>
            <ul>
              <li>
                <NavLink to={links[1].path}>
                  <a href="#" onClick={() => window.scrollTo(0, 0)}>
                    {links[1].text}
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={links[2].path}>
                  <a href="#" onClick={() => window.scrollTo(0, 0)}>
                    {links[2].text}
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={links[3].path}>
                  <a href="#" onClick={() => window.scrollTo(0, 0)}>
                    {links[3].text}
                  </a>
                </NavLink>
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
                <a href="tel:+7 (916) 332-86-08">
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
                    <b> Сб - Вс:</b> выходной
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

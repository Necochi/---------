import { useState } from "react";
import style from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", text: "Главная" },
  { path: "about", text: "О компании" },
  { path: "booking", text: "Аренда тепловозов" },
  { path: "contact", text: "Контакты" },
];

const Footer = () => {
  const [politic, setPolitic] = useState(false);
  if (politic) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
  return (
    <div className={style.footer_main}>
      <div
        className={style.black_block}
        style={{
          display: politic ? "block" : "none",
        }}
        onClick={() => setPolitic(false)}
      ></div>
      <div className={style.politic_div}
      style={{
        display: politic ? 'block' : 'none',
      }}>
        <button onClick={() => setPolitic(false)}>
          <img src="/imgs/closeBtn.svg" alt="Закрыть" />
        </button>
        <div className={style.text}>
          <h2>Политика обработки персональных данных</h2>
          <p>Администрация гарантирует конфиденциальность получаемой информации. Обработка персональных данных осуществляется в целях эффективного исполнения заказов, договоров и иных обязательств, принятых Администрацией в качестве обязательных к исполнению.</p>
          <p>Настоящее согласие распространяется на следующие Ваши персональные данные: фамилия, имя и отчество, адрес электронной почты, контактный телефон.</p>
          <p>Обращаем ваше внимание, что отзыв согласия на обработку персональных данных влечёт за собой удаление записей, содержащих ваши персональные данные в системах обработки персональных данных Администрации.</p>
          <p>Гарантирую, что представленная мной информация является полной, точной и достоверной, а также что при представлении информации не нарушаются действующее законодательство Российской Федерации, законные права и интересы третьих лиц. Вся представленная информация заполнена мною в отношении себя лично.</p>
          <p>Настоящее согласие действует в течение всего периода хранения персональных данных, если иное не предусмотрено законодательством Российской Федерации.</p>
        </div>
      </div>
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
            <button onClick={() => setPolitic(true)}>Политика обработки персональных данных</button>
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

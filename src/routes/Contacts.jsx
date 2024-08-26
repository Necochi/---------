import style from "../styles/Contacts.module.css";
import Form from "../modules/Form";

const Contacts = () => {
  return (
    <>
      <div className={style.contacts_main_div}>
        <div className={style.contacts}>
          <h3>Контакты</h3>
          <ul>
            <li>
              <img src="/imgs/location.svg" alt="локация" />
              <p>
                <b>Адрес: </b>141303, Московская Область, г.о. Сергиево-Посадский, г. Сергиев Посад, ул. Пограничная, д. 5, помещ. 10
              </p>
            </li>
            <li>
              <img src="/imgs/phone.svg" alt="локация" />
              <p>
                <b>Телефон: </b>
                <a href="tel:+7 (916) 332-86-08">
                +7 (916) 332-86-08
                </a>
              </p>
            </li>
            <li>
              <img src="/imgs/mail.svg" alt="локация" />
              <p>
                <b>E-mail: </b>teplovoz24rf@yandex.ru
              </p>
            </li>
            <li>
              <img src="/imgs/clock.svg" alt="локация" />
              <p>
                <b>Режим работы: Пн-Пт: </b>09.00-18.00 <b>Сб-Вс: </b> выходной
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Form />
    </>
  );
};

export default Contacts;

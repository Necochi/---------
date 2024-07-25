import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.logo_contacts}>
        <div className={style.logo__text}>
          <img src="/imgs/Logooo.svg" alt="logo" className={style.logo} />
          <div className={style.logo_div}>
            <h3>ПРОМТРАНС-СП</h3>
            <span>Професиональные решения, качества и надежность</span>
          </div>
        </div>
        <div>
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
                  <button>Перезвоните мне</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.logo_contacts}>
        <div className={style.logo__text}>
          <img src="" alt="logo" className={style.logo} />
          <div className={style.logo_div}>
            <h3>logo name</h3>
            <span>Професиональные решения, качества и надежность</span>
          </div>
        </div>
        <div>
          <div className={style.days__time}>
            <img src="/imgs/clock.svg" alt="time-icon" className={style.time_icon}/>
            <div className={style.days}>
              <span className={style.work_days}>
                <b>Пн - Пт:</b> 09:00 - 18:00
              </span>
              <span className={style.days_off}>
                <b>Сб - Вс:</b> выходной
              </span>
            </div>
          </div>
          <div className={style.telephone}></div>
        </div>
      </div>
    </>
  );
};

export default Header;

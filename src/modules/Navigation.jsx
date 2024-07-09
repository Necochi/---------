import style from "../styles/Navigation.module.css";

const Navigation = () => {
  let activeLink = {
    background: "linear-gradient(0.4turn, #fffa22, #bebb00)",
  };

  return (
    <div className={style.links}>
      <button className={style.main}>
        <span>Главная</span>
      </button>
      <span className={style.line}></span>
      <button className={style.about}>
        <span>О компании</span>
      </button>
      <span className={style.line}></span>
      <button className={style.renting}>
        <span>Аренда тепловозов</span>
      </button>
      <span className={style.line}></span>
      <button className={style.contacts}>
        <span>Контакты</span>
      </button>
    </div>
  );
};

export default Navigation;

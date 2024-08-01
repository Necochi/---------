import style from "../styles/Navigation.module.css";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", text: "Главная" },
  { path: "about", text: "О компании" },
  { path: "booking", text: "Аренда тепловозов" },
  { path: "contact", text: "Контакты" },
];

const Navigation = () => {
  return (
    <div className={style.links}>
      <NavLink to={links[0].path} className={style.main}>
        <span>{links[0].text}</span>
      </NavLink>
      <span className={style.line}></span>
      <NavLink to={links[1].path} className={style.about}>
        <span>{links[1].text}</span>
      </NavLink>
      <span className={style.line}></span>
      <NavLink to={links[2].path} className={style.renting}>
        <span>{links[2].text}</span>
      </NavLink>
      <span className={style.line}></span>
      <NavLink to={links[3].path} className={style.contacts}>
        <span>{links[3].text}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;

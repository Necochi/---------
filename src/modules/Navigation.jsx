import { useState } from "react";
import style from "../styles/Navigation.module.css";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", text: "Главная" },
  { path: "about", text: "О компании" },
  { path: "booking", text: "Аренда тепловозов" },
  { path: "contact", text: "Контакты" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  let navigationOff = {
    display: "none",
  };

  let openLine1 = {};

  let openLine2 = {};

  let closedLinks = {};

  if (open) {
    navigationOff = {
      display: "flex",
    };

    closedLinks = {
      display: "block",
      backgroundColor: "initial",
      border: "none",
    };

    openLine1 = {
      position: "absolute",
      zIndex: "11",
      width: "2px",
      height: "48px",
      transform: "rotate(45deg)",
      backgroundColor: "#ffffff",
      right: "22px",
      top: "-2px",
    };

    openLine2 = {
      position: "absolute",
      zIndex: "11",
      width: "2px",
      height: "48px",
      transform: "rotate(135deg)",
      backgroundColor: "#ffffff",
      right: "22px",
      top: "-2px",
    };
  } else {
    navigationOff = {
      display: "none",
    };

    closedLinks = {
      display: "block",
      background: 'linear-gradient(1turn, #111111, #3a3a3a)',
      border: "none",
    };
    openLine1 = {
      position: "absolute",
      zIndex: "11",
      width: "2px",
      height: "36px",
      transform: "rotate(90deg)",
      backgroundColor: "#ffffff",
      right: "24px",
      top: "-2px",
    };

    openLine2 = {
      position: "absolute",
      zIndex: "11",
      width: "2px",
      height: "36px",
      transform: "rotate(90deg)",
      backgroundColor: "#ffffff",
      right: "24px",
      top: "14px",
    };
  }

  if (window.innerWidth > 945) {
    navigationOff = {
      display: "flex",
    };
    closedLinks = {
      display: "none",
    };
  }

  return (
    <div>
      <button
        className={style.close_btn_nav}
        style={closedLinks}
        onClick={() => setOpen(!open)}
      >
        <div className={style.line_one} style={openLine1}></div>
        <div className={style.line_two} style={openLine2}></div>
      </button>
      <div className={style.links} style={navigationOff}>
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
    </div>
  );
};

export default Navigation;

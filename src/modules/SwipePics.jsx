import style from "../styles/SwipePics.module.css";
import { useEffect, useRef, useState } from "react";

const SwipePics = () => {
  const imgsArr = [
    "https://tpmplus.ru/images/slider/slide-1.jpg",
    "https://tpmplus.ru/images/slider/slide-2.jpg",
    "https://tpmplus.ru/images/slider/slide-3.jpg",
  ];
  const [id, setId] = useState(0);

  let backgroundImg = {};
  backgroundImg = {
    backgroundImage: `url(${imgsArr[id]})`,
  };

  let hidden = {
    display: "none",
  };

  const prevPhoto = () => {
    if (id === 0) {
      setId(imgsArr.length - 1);
    } else {
      setId(id - 1);
    }
  };

  const nextPhoto = () => {
    if (id === imgsArr.length - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  return (
    <>
      <div className={style.imgs_list}>
        {imgsArr.map((v, i) => {
          if (i === id) {
            return (
              <div className={style.background} key={i}>
                <img className={style.backImg} src={v} alt="img" />
                <div className={style.btn_text}>
                  <h1>АРЕНДА ТЕПЛОВОЗОВ</h1>
                  <a href="#">Подробнее</a>
                </div>
                <button className={style.leftArrow} onClick={() => prevPhoto()}>
                  <img src="/imgs/arrowLeft.svg" alt="arrow-left" />
                </button>
                <button
                  className={style.rightArrow}
                  onClick={() => nextPhoto()}
                >
                  <img src="/imgs/arrowRight.svg" alt="arrow-right" />
                </button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SwipePics;

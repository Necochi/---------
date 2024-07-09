import style from "../styles/SwipePics.module.css";
import { useState } from "react";

const SwipePics = () => {
  const imgsArr = [
    "https://storage.yandexcloud.net/umn/images/optimized/66a75bd92765479da5220704d6327511_large@2x.jpg",
    "https://workingplatform.ro/uploaded_files/00%20Nacele%20noi%202021/Nacele%20articulate%20diesel/HA%2041%20RTJ%20PRO/HA%2041%20RTJ%20PRO%20Image%201.jpg",
    "https://fscl01.fonpit.de/userfiles/6675138/image/j7-pro-brazil-samsung-launch.png",
  ];
  const [id, setId] = useState(0);

  let backgroundImg = {};

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

  backgroundImg = {
    backgroundImage: `url(${imgsArr[id]})`,
    transition: "3s, ease",
  };

  return (
    <div className={style.text_btn}>
      <h1>АРЕНДА ТЕПЛОВОЗОВ</h1>
      <a href="#">Подробнее</a>
      <button className={style.leftArrow} onClick={() => prevPhoto()}>
        <img src="/imgs/arrowLeft.svg" alt="arrow-left" />
      </button>
      <button className={style.rightArrow} onClick={() => nextPhoto()}>
        <img src="/imgs/arrowRight.svg" alt="arrow-right" />
      </button>
      <div className={style.background} style={backgroundImg}></div>
    </div>
  );
};

export default SwipePics;

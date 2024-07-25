import style from "../styles/SwipePics.module.css";
import { useEffect, useRef, useState } from "react";

const SwipePics = () => {
  const imgsArr = [
    "./imgs/Slide2.jpg",
    "./imgs/Slide1.jpg",
    "./imgs/Slide3.jpg",
  ];
  const [id, setId] = useState(0);
  const [prevId, setPrevId] = useState(id);
  const imgRef = useRef();
  const imgRef2 = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();

  let hidden = {
    opacity: "0",
  };

  const prevPhoto = () => {
    if (id === 0) {
      setPrevId(id);
      setId(imgsArr.length - 1);
    } else {
      setPrevId(id);
      setId(id - 1);
    }
  };

  const nextPhoto = () => {
    if (id === imgsArr.length - 1) {
      setPrevId(id);
      setId(0);
    } else {
      setPrevId(id);
      setId(id + 1);
    }
  };

  return (
    <>
      <div className={style.absolute}>
        <div className={style.imgs_list}>
          {imgsArr.map((v, i) => {
            if (i === id) {
              return (
                <div key={i}>
                  <img
                    ref={imgRef}
                    className={style.backImg}
                    src={v}
                    alt="img"
                  />
                </div>
              );
            } else {
              return (
                <div style={hidden} key={i}>
                  <img
                    ref={imgRef2}
                    className={style.backImg}
                    src={v}
                    alt="img"
                  />
                </div>
              );
            }
          })}
          <div className={style.btn_text}>
            <h1>АРЕНДА ТЕПЛОВОЗОВ</h1>
          </div>
          <button
            ref={leftArrow}
            className={style.leftArrow}
            onClick={() => prevPhoto()}
          >
            <img src="/imgs/arrowLeft.svg" alt="arrow-left" />
          </button>
          <button
            ref={rightArrow}
            className={style.rightArrow}
            onClick={() => nextPhoto()}
          >
            <img src="/imgs/arrowRight.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SwipePics;

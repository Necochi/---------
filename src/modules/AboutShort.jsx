import style from "../styles/AboutShort.module.css";
const AboutShort = () => {
  return (
    <div className={style.about_flexDiv}>
      <img src="https://tpmplus.ru/images/company.jpg" alt="img" />
      <div className={style.about_text}>
        <h2>О компании</h2>
        <p>
          «Промтранс-СП» осуществляет свою деятельность с 2018г. Одним из
          направлений нашей деятельности является сдача в аренду маневровых
          тепловозов серии ТЭМ2 с локомотивными бригадами.
        </p>
        <ul>
          <li>
            Основным направлением нашей деятельности является сдача в аренду
            маневровых тепловозов, а также оказание комплексной услуги с
            предоставлением локомотивных бригад, обслуживанием и экипировкой.
          </li>
          <li>Наличие собственной ремонтной базы.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutShort;

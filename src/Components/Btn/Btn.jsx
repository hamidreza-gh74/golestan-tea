import s from "./Btn.module.css";
import up from "../../../public/image/btn/new2.svg";

const Btn = () => {

  return (
    <div id="btn" className={s.btn}>
      <a className={s.link} href="#">
        <img src={up} alt="" />
      </a>
    </div>
  );
 
};

export default Btn;

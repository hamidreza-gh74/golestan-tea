import s from "./SubBottom.module.css";

// import images
import f_pic from "../../../../public/image/footer/first.png";

const SubBottom1 = () => {
  return (
    <>
      <div className={s.first}>
        <div className={s.second}>
          <div className={s.pic}>
            <div className={s.pic_border}>
              <img className={s.img} src={f_pic} alt="" />
            </div>
          </div>

          <div className={s.text}>
            <p>چای گلستان</p>
          </div>

          <div className={s.list}>
            <ul className={s.item}>
              <li className={s.items}>
                <a className={s.link} href="">
                  چای ممتاز هندوستان
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  چای ممتاز ارل گری
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  چای سیلان عطری
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  چای ممتاز سیلان
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  چای صبحانه گلستان
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBottom1;

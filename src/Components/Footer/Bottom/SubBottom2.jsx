import s from "./SubBottom.module.css";

// import images
import s_pic from "../../../../public/image/footer/second.png";

const SubBottom2 = () => {
  return (
    <>
      <div className={s.first}>
        <div className={s.second}>
          <div className={s.pic}>
            <div className={s.pic_border}>
              <img className={s.img} src={s_pic} alt="" />
            </div>
          </div>

          <div className={s.text}>
            <p>تی بگ گلستان</p>
          </div>

          <div className={s.list}>
            <ul className={s.item}>
              <li className={s.items}>
                <a className={s.link} href="">
                  تی بگ بلک لاین
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  تی بگ ارل گری
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                    دمنوش نعنا
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  دمنوش بابونه
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  دمنوش چای سبز
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBottom2;

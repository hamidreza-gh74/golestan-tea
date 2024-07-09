
import s from "./SubBottom.module.css";

// import images
import th_pic from "../../../../public/image/footer/third.png";
const SubBottom4 = () => {
    return ( 
        <>
            <div className={s.first}>
        <div className={s.second}>
          <div className={s.pic}>
            <div className={s.pic_border}>
              <img className={s.img} src={th_pic} alt="" />
            </div>
          </div>

          <div className={s.text}>
            <p>ادویه گلستان</p>
          </div>

          <div className={s.list}>
            <ul className={s.item}>
              <li className={s.items}>
                <a className={s.link} href="">
                  زعفران ممتاز خراسان
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                    ادویه کاری
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  ادویه ماست و خیار
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  فلفل سیاه خالص
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                    زردچوبه ممتاز
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
        </>
     );
}
 
export default SubBottom4;
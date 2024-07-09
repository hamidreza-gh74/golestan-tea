
import s from "./SubBottom.module.css";

// import images
import fo_pic from "../../../../public/image/footer/fourth.png";
const SubBottom4 = () => {
    return ( 

        <>
            <div className={s.first}>
        <div className={s.second}>
          <div className={s.pic}>
            <div className={s.pic_border}>
              <img className={s.img} src={fo_pic} alt="" />
            </div>
          </div>

          <div className={s.text}>
            <p>حبوبات  گلستان</p>
          </div>

          <div className={s.list}>
            <ul className={s.item}>
              <li className={s.items}>
                <a className={s.link} href="">
                    لوبیا قرمز ممتاز
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                    لوبیا چیتی گلستان
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  عدسی کانادایی
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  نخود زودپز کرمانشاه
                </a>
              </li>
              <li className={s.items}>
                <a className={s.link} href="">
                  لوبیا سفید گلستان
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
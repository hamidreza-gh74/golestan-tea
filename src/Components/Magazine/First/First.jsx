import s from "./First.module.css";
import first from "../../../../public/image/magazine/one.jpg";
import second from "../../../../public/image/magazine/two.jpg";
import third from "../../../../public/image/magazine/three.jpg";


const First = () => {
  return (
    <div className={s.magazine}>
      <div className={s.titr1}>
        <p className={s.text}>مجله گلستان</p>
      </div>

      <div className={s.show}>
        <div className={s.cards}>
          <div className={s.article}>
            <div className={s.pic}>
              <a className={s.link} href="">
                <img className={s.img} src={first} alt="" />
              </a>
            </div>

            <div className={s.content}>
              <h3 className={s.titr2}>
                <a className={s.link2} href="">
                  ماکارونی با سبزیجات
                </a>
              </h3>
              <p className={s.exp}>
                {" "}
                ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
                می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
                روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
              </p>

              <a className={s.link3} href="">
                ادامه مطلب
              </a>
            </div>
          </div>
          <div className={s.article}>
            <div className={s.pic}>
              <a className={s.link} href="">
                <img className={s.img} src={second} alt="" />
              </a>
            </div>

            <div className={s.content}>
              <h3 className={s.titr2}>
                <a className={s.link2} href="">
                  سوپ مکزیکی{" "}
                </a>
              </h3>
              <p className={s.exp}>
                گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا
                روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع
                آن بیرون آورده…
              </p>

              <a className={s.link3} href="">
                ادامه مطلب
              </a>
            </div>
          </div>
          <div className={s.article}>
            <div className={s.pic}>
              <a className={s.link} href="">
                <img className={s.img} src={third} alt="" />
              </a>
            </div>

            <div className={s.content}>
              <h3 className={s.titr2}>
                <a className={s.link2} href="">
                چیلاکیله                </a>
              </h3>
              <p className={s.exp}>
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…
              </p>

              <a className={s.link3} href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;



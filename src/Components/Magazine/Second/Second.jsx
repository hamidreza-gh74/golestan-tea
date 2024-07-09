import s from "./Second.module.css";

import Frame_two from "./Frame_two";
import Frame_one from "./Frame_one";
import Frame_three from "./Frame_three";

const Second = () => {
  return (
    <div className={s.show}>
      <div className={s.cards}>
        <div className={s.article}>
          <Frame_one />

          <div className={s.content}>
            <h3 className={s.titr2}>
              <a className={s.link2} href="">
                سالاد نودل{" "}
              </a>
            </h3>
            <p className={s.exp}>
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>

            <a className={s.link3} href="">
              ویدیو های بیشتر{" "}
            </a>
          </div>
        </div>
        <div className={s.article}>
          <Frame_two />

          <div className={s.content}>
            <h3 className={s.titr2}>
              <a className={s.link2} href="">
                اینستاگرام هاتی نودل
              </a>
            </h3>
            <p className={s.exp}>
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است
            </p>

            <a className={s.link3} href="">
              ادامه مطلب
            </a>
          </div>
        </div>
        <div className={s.article}>
          <Frame_three />
          <div className={s.content}>
            <h3 className={s.titr2}>
              <a className={s.link2} href="">
                برنج گلستان{" "}
              </a>
            </h3>
            <p className={s.exp}>
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>

            <a className={s.link3} href="">
              مشاهده محصولات{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

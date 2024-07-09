import s from "./Banner.module.css";
import logo from "../../../../public/image/introduction/tea-header.png";
import 'animate.css';
const Banner = () => {
  return (
    <div className={s.section}>
      <div className={s.banner}>
        <div className={s.right}>
          <div>
            <h2 className={s.red}>قرعه کشی ماهیانه گلستان</h2>
          </div>
          <div>
            <h2 className={s.titr}>قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان</h2>
          </div>
          <div>
            <h2 className={s.text}>
              هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد
              قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال
              1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
              است.
            </h2>
          </div>
          <div className={s.btn}>
            <a href="#" className={s.link}> اطلاعات بیشتر</a>

          </div>
        </div>
        <div className={s.left}>
          <img src={logo} alt="" className={s.pic} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

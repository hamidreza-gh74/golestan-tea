// css
import s from "./Menue.module.css";
// image
import m_logo from "../../../public/image/menu/menu-logo.png";
// component
import Sub1 from "./SubMenu/Sub1";
import Sub3 from "./SubMenu/Sub3";
import Sub2 from "./SubMenu/Sub2";
import Sub4 from "./SubMenu/Sub4";





const Menu = () => {
  return (
    <div className={s.menu}>
      <div className={s.right}>
        <a className={s.link} href="#">
        <img className={s.logo} src={m_logo} alt="" />

        </a>
      </div>

      <div className={s.left}>
        <nav className={s.nav}>
          <div className={s.item}>
            <a className={s.link} href="#" style={{color:"white"}}>صفحه اصلی </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="#">شرکت گلستان</a>
            <Sub1/>
          </div>
          <div className={s.item} >
            <a className={s.link} href="#">محصولات</a>
            <Sub2/>
          </div>
          <div className={s.item}>
            <a className={s.link} href="#">وبلاگ</a>
            <Sub3/>
          </div>
          <div className={s.item}>
            <a className={s.link} href="#">قرعه کشی </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="#">استخدام</a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="#">تماس با ما</a>
            <Sub4/>
          </div>
          <div className={s.item}>
            <a className={s.link} id={s.last} href="">EN</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;

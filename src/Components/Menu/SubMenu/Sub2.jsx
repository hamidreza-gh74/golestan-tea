import s from "./Sub1.module.css";

const Sub2 = () => {
  return (
    <div className={s.sub}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href="">چای</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> ناتس </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> ادویه و چاشنی   </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> برنج </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> زعفران و زرشک  </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">دمنوش  </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> حبوبات و غلات </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> عصاره های گیاهی گلستان </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> قند و شکر </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">  هاتی نودل  </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">  سایر محصولات  </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">  گل کیس  </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sub2;

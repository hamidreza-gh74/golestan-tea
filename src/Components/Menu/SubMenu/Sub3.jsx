import s from "./Sub1.module.css";

const Sub3 = () => {
  return (
    <div className={s.sub}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href=""> مجله گلستان</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> فرهنگ غذایی </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> سلامت غذایی   </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> تاریخچه </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">  میزبانی و دیزاین </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sub3;

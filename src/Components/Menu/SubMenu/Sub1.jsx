import s from "./Sub1.module.css";

const Sub1 = () => {
  return (
    <div className={s.sub}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href="">معرفی شرکت</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> تاریخچه گلستان</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">اخبار و اطلاعیه ها </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">مسئولیت های اجتماعی</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> سازمان فروش </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">سازمان توزیع </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href=""> برند ها</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sub1;

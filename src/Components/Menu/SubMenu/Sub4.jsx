import s from "./Sub1.module.css";

const Sub4 = () => {
  return (
    <div className={s.sub}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href=""> دفتر مرکزی  </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">  صدای مصرف کنندگان </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="">   ارتباط با مشترکین  </a>
          </li>
          
          
        </ul>
      </nav>
    </div>
  );
};

export default Sub4;

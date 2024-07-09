import s from "./Bottom.module.css";
import SubBottom1 from "./SubBottom1";
import SubBottom2 from "./SubBottom2";
import SubBottom3 from "./SubBottom3";
import SubBottom4 from "./SubBottom4";

const Bottom = () => {
  return (
    <div className={s.footer}>
      <div className={s.main}>
        <div className={s.inside}>
          <SubBottom1 />
          <SubBottom2 />
          <SubBottom3 />
          <SubBottom4 />
        </div>
      </div>

      <div className={s.design}>
        <span className={s.first}>
          All Right Reserved Golestan Company 2022-2025
        </span>
        <span className={s.second}>
        Design By: Golestan Studio        </span>
      </div>
    </div>
  );
};

export default Bottom;

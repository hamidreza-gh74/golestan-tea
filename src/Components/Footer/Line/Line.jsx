//  import images....logo
import gl_b from "../../../../public/image/footer/logo/golestan_b.png";
import ap_b from "../../../../public/image/footer/logo/aparat_b.png";
import tg_b from "../../../../public/image/footer/logo/telegram_b.png";
import inst_b from "../../../../public/image/footer/logo/insta_b.png";
import ld_b from "../../../../public/image/footer/logo/linkd_b.png";
import fb_b from "../../../../public/image/footer/logo/facebook_b.png";
// import css
import s from "./Line.module.css";

const Line = () => {
  return (
    <div className={s.social}>
      <div className={s.gray}>
        <div className={s.logo}>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.fb} src={fb_b} alt="" />
            </a>
          </div>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.ld} src={ld_b} alt="" />
            </a>
          </div>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.inst} src={inst_b} alt="" />
            </a>
          </div>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.tg} src={tg_b} alt="" />
            </a>
          </div>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.ap} src={ap_b} alt="" />
            </a>
          </div>
          <div className={s.pic}>
            <a className={s.link} href="">
              <img id={s.gl} src={gl_b} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={s.red}></div>
    </div>
  );
};

export default Line;

import s from "./Picture.module.css";



import first from "../../../../public/image/introduction/picture/first.png"
import second from "../../../../public/image/introduction/picture/second.png"
import third from "../../../../public/image/introduction/picture/third.png"
import fourth from "../../../../public/image/introduction/picture/fourth.png"

const Picture = () => {
  return (
    <div className={s.picture}>
      <div className={s.group}>

        <div className={s.first}>
          <div className={s.pic}>
            <img className={s.img} src={first} alt="" />
          </div>

          <div className={s.text}>
            <p className={s.p}>سرمایه انسانی</p>
          </div>
        </div>
        <div className={s.first}>
          <div className={s.pic}>
            <img className={s.img} src={second} alt="" />
          </div>

          <div className={s.text}>
            <p className={s.p}> مراکز فروش</p>
          </div>
        </div>
        <div className={s.first}>
          <div className={s.pic}>
            <img className={s.img} src={third} alt="" />
          </div>

          <div className={s.text}>
            <p className={s.p}>  محصولات گلستان</p>
          </div>
        </div>
        <div className={s.first}>
          <div className={s.pic}>
            <img className={s.img} src={fourth} alt="" />
          </div>

          <div className={s.text}>
            <p className={s.p}>  مشاریان گلستان</p>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default Picture;

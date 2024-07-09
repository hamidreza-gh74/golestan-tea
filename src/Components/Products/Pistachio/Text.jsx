import s from "./Text.module.css";

const Textp = () => {
  return (
    <div className={s.pistachio}>
      <div className={s.titr}>
        <h2 className={s.text}>آجيل‌های خوش خنده</h2>
      </div>

      <div className={s.content}>
        <p className={s.text}>
          خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
          معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
        </p>

        <p className={s.text}>
          <span className={s.red}>پسته گلستان</span> اما حسابش از دیگر پسته‌های
          بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین
          می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با
          زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و
          رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
        </p>
      </div>

      <div className={s.btn}>
        <div className={s.first}>
          <a className={s.link} href="">
            ناتس گلستان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Textp;

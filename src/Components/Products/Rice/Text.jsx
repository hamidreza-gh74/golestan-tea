import s from "./Text.module.css";

const Text = () => {
  return (
    <div className={s.rice}>

      <div className={s.titr}>
        <h2 className={s.text}>رکن اول غذای ایرانی</h2>
      </div>

      <div className={s.content}>

        <p className={s.text}>مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.</p>
      </div>

      <div className={s.btn}>
        <div className={s.first}>
            <a className={s.link} href="#">محصولات برنج</a>
        </div>
        <div className={s.second}>
            <a className={s.link} href="#">آشپزخانه گلستان</a>
        </div>
      </div>
    </div>
  );
};

export default Text;

import s from "./Text.module.css";

const Text = () => {
  return (
    <div className={s.tea}>
      <div className={s.titr}>
        <h2 className={s.text}>سابقه‌ای به قدمت یک عمر</h2>
      </div>

      <div className={s.content}>
        <p className={s.text}>
        چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.
        </p>

        <p className={s.text}>
        برای مردمان ایران زمین نام <span className={s.red}>گلستان</span> با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است. 



        </p>
      </div>

      <div className={s.btn}>
        <div className={s.first}>
          <a className={s.link} href="">
            محصولات چای
          </a>
        </div>

      </div>
    </div>
  );
};

export default Text;

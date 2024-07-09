import s from "./Fourth.module.css";

const Fourth = () => {
  return (
    <div className={s.four}>

      <div className={s.titr}>
        <h2 className={s.text}> مسئوليت‌های اجتماعی گلستان </h2>
      </div>

      <div className={s.content}>

        <p className={s.text}> 
        
        كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. <span style={{color:"red",fontWeight:"bold",fontSize:"16px"}}>گلستان</span> در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.


        </p>
      </div>

      <div className={s.btn}>
        <div className={s.first}>
            <a className={s.link} href="#">اطلاعات بیشتر </a>
        </div>
       
      </div>
    </div>
  );
};

export default Fourth;

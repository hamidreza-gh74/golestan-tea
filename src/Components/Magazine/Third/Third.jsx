
import s from "./Third.module.css"

import hospital from "../../../../public/image/magazine/hospital.jpg"
const Third = () => {
    return ( 

        <div className={s.back}>

            <div className={s.green}>

                <h2 className={s.one}> مسئوليت‌های اجتماعی شركت گلستان </h2>
                <div className={s.line}></div>
                <div className={s.two}>
                    <span className={s.bold}>Golestan{" "}</span>
                    <span className={s.normal}>Social Responsibility</span>
                </div>
                <h2 className={s.three}>Mahdi Hospital</h2>

            </div>

            <div className={s.hospital}>
            <img className={s.pic} src={hospital} alt="" />


            </div>



        </div>
     );
}
 
export default Third;
import s from "./Tea.module.css"
import tea from "../../../../public/image/products/tea.jpg"
const Tea = () => {
    return ( 

        <div className={s.back}>
            <div className={s.pic}>
                <img className={s.img} src={tea} alt="" />


            </div>
            <div className={s.float}>
                <div className={s.top}>چای گلستان</div>
                <div className={s.bottom}> معرفی محصول</div>

            </div>


        </div>
     );
}
 
export default Tea;
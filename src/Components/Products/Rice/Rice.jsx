import s from "./Rice.module.css"
import rice from "../../../../public/image/products/rice.jpg"
const Rice = () => {
    return ( 

        <div className={s.back}>
            <div className={s.pic}>
                <img className={s.img} src={rice} alt="" />


            </div>
            <div className={s.float}>
                <div className={s.top}>برنج گلستان</div>
                <div className={s.bottom}> معرفی محصول</div>

            </div>


        </div>
     );
}
 
export default Rice;
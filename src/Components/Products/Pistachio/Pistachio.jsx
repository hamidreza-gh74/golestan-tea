import s from "./Pistachio.module.css"
import pistachio from "../../../../public/image/products/pistachio.jpg"
const Pistachio = () => {
    return ( 

        <div className={s.back}>
            <div className={s.pic}>
                <img className={s.img} src={pistachio} alt="" />


            </div>
            <div className={s.float}>
                <div className={s.top}>پسته گلستان</div>
                <div className={s.bottom}> معرفی محصول</div>

            </div>


        </div>
     );
}
 
export default Pistachio;
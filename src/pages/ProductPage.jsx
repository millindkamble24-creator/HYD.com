import {useParams} from "react-router-dom";
import brownTshirt from '../assets/images/browntshirtplain.webp';
export function ProductPage(){
    const {id}=useParams();

    return (
        <div className="product-image">

            <img src={brownTshirt} alt="image not found" />
        </div>
        );
    }
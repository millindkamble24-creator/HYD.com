import {useParams} from "react-router-dom";
import {products} from "../data/products"
export function ProductPage(){
    const {name}=useParams();
        const product=products.find(
            (p)=>p.name===name
            );
         if(!product){
                        return <h2>Product Not found</h2>
                     }

    return (
        <div className="product-image">

            <img src={product.image}
             alt="image not found"
             />
             <h2>{product.name}</h2>
             <h3>{product.price}</h3>
        </div>
        );
    }
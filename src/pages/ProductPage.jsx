import {useParams} from "react-router-dom";
import brownTshirt from '../assets/images/browntshirtplain.webp';
import blackTshirt from "../assets/images/ChrisCrossBlackCottonT-Shirt.webp";
import redTshirt from "../assets/images/printedredtshirt.webp";
import whiteTshirt from "../assets/images/whitetshirt.jpg";
export function ProductPage(){
    const {name}=useParams();
        const products=[
            {
                id:1,
                name:"Brown-T-shirt",
                image:brownTshirt,
                price:499
            },
            {
                id:2,
                name:"Black-T-shirt",
                image:blackTshirt,
                price:599
            },
            {
                id:3,
                name:"Red-T-shirt",
                image:redTshirt,
                price:699
            },
            {
                id:4,
                name:"white-T-shirt",
                image:whiteTshirt,
                price:799
            }
            ];
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
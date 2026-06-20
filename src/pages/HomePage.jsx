import './HomePage.css';
import brownTshirt from '../assets/images/browntshirtplain.webp';
import blackCottontshirt  from '../assets/images/ChrisCrossBlackCottonT-Shirt.webp'
import redTshirt from '../assets/images/printedredtshirt.webp'
import whiteTshirt from '../assets/images/whitetshirt.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export function HomePage(){
    const products=[
        {id:1, image:brownTshirt, name:'Brown-T-shirt',price:299},
        {id:2, image:blackCottontshirt, name:'Black-T-shirt', price:399},
        {id:3, image:redTshirt, name:'Red-T-shirt', price:349},
        {id:4, image:whiteTshirt, name:'white-T-shirt', price:499}
        ];

    return(
        <div className="home-page">
            <div className="products-grid">
                {products.map((product)=>(
                    <Link key={product.name}
                    to={`/product/${product.name}`}
                    className="product-link"
                    >
                    <div className="product-card">
                        <div className="product-image-container">
                            <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                            />
                        </div>
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p className="price">{product.price}</p>
                        </div>
                    </div>
                    </Link>
                    ))}
            </div>
        </div>
        );
    }
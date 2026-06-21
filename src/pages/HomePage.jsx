import './HomePage.css';
import {products} from "../data/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export function HomePage(){
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
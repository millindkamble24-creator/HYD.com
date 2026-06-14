import './header.css';
import './HomePage.css';

export function HomePage(){
    return(
        <>
         <div className="header">
             <div className="href-section">
                 <a href="index.html" className="header-link">
                     <img className="logo"
                     src="" alt="image not found" />
                     <img className="mobile-logo"
                     src="" alt="image not found" />
                 </a>
             </div>

             <div className="home-page">
                 <div className="products-grid">
                     <div className="product-container">
                         <div className="product-image-container">
                             <img className="product-image"
                             src="" alt="image not found" />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </>
        )
    }
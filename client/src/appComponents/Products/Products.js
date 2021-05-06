
import './Products.css';

import { Link } from 'react-router-dom';

const Products = ({ name, picture, summary, price, productId }) => {
    return (
        <div className="product">
            {/* THESE WILL A JSX VALUES */}
            <img src={picture} alt={name} />

            {/* Product View and Template */}
            <div className="product_info">
                <p className="product_name"> {name}</p>
                <p className="product_summary"> {summary.substring( 0, 100 )}... </p>

                <p className="product_price"> {price} </p>

                {/* RIGHT NOW THIS IS HARD CODE AND WILL IMPORT A CUSTOM FETCH HOOK TO HANDLE THE ROUTES */}
                <Link to={`/product/${productId}`} className='product_button'>
                    View Now
                </Link>
            </div>
        </div>
    )
}

export default Products;
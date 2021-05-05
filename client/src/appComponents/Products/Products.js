
import './Products.css';

import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="product">
            {/* THESE WILL A JSX VALUES */}
            <img src="" alt="" />

            {/* Product View and Template */}
            <div className="product_info">
                <p className="product_name"> Product Name</p>
                <p className="product_summary"> Product Summary </p>

                <p className="product_price"> Product Price </p>

                {/* RIGHT NOW THIS IS HARD CODE AND WILL IMPORT A CUSTOM FETCH HOOK TO HANDLE THE ROUTES */}
                <Link to={`/product/${1}`} className='product_button'>
                    View Now
                </Link>
            </div>
        </div>
    )
}

export default Products;

import Products from '../../appComponents/Products/Products';
import './HomeScreen.css';

import { useEffect } from 'react';

// give function components the ability to use local component state,
// execute side effects, and more.
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../../appRedux/actions/plantAction'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, err } = getProducts;

    useEffect(() => {
        console.log('render');
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen_title">
                Products
            </h2>
            <div className="homescreen_products">
               { loading ? <h2>Loading...</h2> : err ? <h2>{err}</h2> : products.map(product => (
                    <Products 
                        key={product.id} 
                        productId={product.id} 
                        price={product.price} 
                        picture={product.picture}
                        summary={product.summary}
                        name={product.name}
                    /> 
                    ))}
            </div>
        </div>
    )
}

export default HomeScreen;
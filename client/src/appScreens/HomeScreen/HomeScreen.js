
import Products from '../../appComponents/Products/Products';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen_title">
                Products
            </h2>
            <div className="homescreen_products">
                <Products />
            </div>
        </div>
    )
}

export default HomeScreen;
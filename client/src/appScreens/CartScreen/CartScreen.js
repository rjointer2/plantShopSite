
import CartItem from '../../appComponents/CartItem/CartItem';
import './CartScreen.css';



const CartScreen = () => {
    return (
        <div className="cart_conatiner">
            <div className="cart">
                <div className="cart_item">
                    <h2>
                        Shopping Cart
                    </h2>
                    <CartItem />
                </div>
                <div className="cart_item">
                    <p>
                        Subtotal (0) items
                    </p>
                    <p>
                        Price
                    </p>
                    <button type='button'>
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;
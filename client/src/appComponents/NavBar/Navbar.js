
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar_logo">
                <h2>
                    Shopping Cart
                </h2>
            </div>
            {/* Links */}
            <ul className='navbar_links'>
                <li>
                    <Link to='/cart' className='cart_link'>
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cart_qty">0</span>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        {/* Icon */}
                        Shop
                        <span className="cartlogo">0</span>
                    </Link>
                </li>
            </ul>
            <div className="hamburger_menu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;

// <i class="fas fa-bars"></i>
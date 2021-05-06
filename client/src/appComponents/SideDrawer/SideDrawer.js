

import './SideDrawer.css';

import { Link } from 'react-router-dom'

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ['sideDrawer'];

    if(show) sideDrawerClass.push('show')

    return <div className={sideDrawerClass.join(' ')}>
        <ul className='sideDrawer_links' onClick={click}>
            <li>
                <Link to="/cart">
                    <span>
                        <i className="fas fa-shopping-cart"></i>
                        Cart <span className="cart_qty">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to='/shop'>
                    <span>
                        <i className="fas fa-shopping-bag"></i>
                        Shop <span className="cart_qty">0</span>
                    </span>
                </Link>
            </li>
        </ul>
    </div>
}

export default SideDrawer;
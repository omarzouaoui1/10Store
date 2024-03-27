import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

    return(
        <>
        <nav className='navbar'>
            
            <div className='container'>
                <div className='logo'>
                    <h2>10 store</h2>
                </div>

            <div className='nav-elements'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>

                <li><NavLink to='/services'>Services</NavLink></li>

                <li><NavLink to='/products'>Products</NavLink></li>

                <li><NavLink to='/watches'>Watches</NavLink></li>

                <li><NavLink to='/blogs'>Blog</NavLink></li>

                <li><NavLink to='#'>cart</NavLink></li>

            </ul>
            </div>

            </div>
        </nav>
        </>
    )
}

export default Navbar;
import './header.css'
import logo from '../../assets/images/icons/logo.png'
import search from '../../assets/images/icons/search-icon.png'
import cart from '../../assets/images/icons/cart.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav>
        <div className="header-container">
            <ul>
                <NavLink className='list' to="/"><img src = {logo}/></NavLink>
                <NavLink className='list' to="/store">Store</NavLink>
                <NavLink className='list' to="/mac">Mac</NavLink>
                <NavLink className='list' to="/ipad">ipad</NavLink>
                <NavLink className='list' to="/iphone">iphone</NavLink>
                <NavLink className='list' to="/watch">Watch</NavLink>
                <NavLink className='list' to="/airpods">Airpods</NavLink>
                <NavLink className='list' to="/tv-home">Tv & Home</NavLink>
                <NavLink className='list' to="/entertainment">Entertainment</NavLink>
                <NavLink className='list' to="/accessories">Accessories</NavLink>
                <NavLink className='list' to="/support">Support</NavLink>
                <NavLink className='list' to="/search"><img src = {search}/></NavLink>
                <NavLink className='list' to="/cart"><img src = {cart}/></NavLink>
            </ul>
        </div>
    </nav>
    <br />
    <br />
   </>
  )
}
export default Header;

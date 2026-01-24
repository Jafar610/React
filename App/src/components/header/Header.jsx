import './header.css'
import logo from '../../assets/images/icons/logo.png'
import search from '../../assets/images/icons/search-icon.png'
import cart from '../../assets/images/icons/cart.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav>
        <div className="header-container">
            <ul>
                <Link to="/"><img src = {logo}/></Link>
                <Link to="/store">Store</Link>
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">ipad</Link>
                <Link to="/iphone">iphone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/airpods">Airpods</Link>
                <Link to="/tv-home">Tv & Home</Link>
                <Link to="/entertainment">Entertainment</Link>
                <Link to="/accessories">Accessories</Link>
                <Link to="/support">Support</Link>
                <Link to="/search"><img src = {search}/></Link>
                <Link to="/cart"><img src = {cart}/></Link>
            </ul>
        </div>
    </nav>
    <br />
    <br />
   </>
  )
}
export default Header;

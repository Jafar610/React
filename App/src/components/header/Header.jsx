import './header.css'
import logo from '../../assets/images/icons/logo.png'
import search from '../../assets/images/icons/search-icon.png'
import cart from '../../assets/images/icons/cart.png'
function Header() {
  return (
    <>
    <nav>
        <div className="header-container">
            <ul>
                <li><a href="#"><img src = {logo}/></a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">ipad</a></li>
                <li><a href="#">iphone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Airpods</a></li>
                <li><a href="#">Tv & Home</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#"><img src = {search}/></a></li>
                <li><a href="#"><img src = {cart}/></a></li>
            </ul>
        </div>
    </nav>
    <br />
    <br />
   </>
  )
}
export default Header;

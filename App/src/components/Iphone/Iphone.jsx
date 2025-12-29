import './iphone.css'
import Iphone_img from '../../assets/images/hero_iphone.jpg'

function Iphone() {
  return (
    <div className="iphone">
        <h1>iPhone</h1>
        <p>Say hello to the latest generation of iphone</p>
        <div className="links">
            <button className='btn1'>Learn More</button>
            <button className='btn2'>Stop iPhone</button>
        </div>
      <img src={Iphone_img} alt="iPhone" />
    </div>
  )
}
export default Iphone

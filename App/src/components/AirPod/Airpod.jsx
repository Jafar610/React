import './Airpod.css'
import Airpod_img from '../../assets/images/hero_airpodspro_3.jpg'
function Airpod() {
  return (
    <div className="airpod">
        <h1>AirPods Pro 3</h1>
        <p>Magic like you’ve never heard.</p>
        <div>
            <button className='btn1'>Learn more</button>
            <button className='btn2'>Buy</button>
        </div>
        <img src =  {Airpod_img} />
    </div>
  )
}
export default Airpod

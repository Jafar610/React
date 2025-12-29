import './watch.css'
import logo from '../../assets/images/apple_icon.png'
import watch from '../../assets/images/hero_apple_watch.jpg'

function Watch() {
  return (
    <>
    <div className='watch'>
        <div className='header'>
            <img src={logo} />
            <h1>WATCH <span>SERIES 11</span></h1>
        </div>
        <p>Turn resolutions into routines.</p>
        <p>Quit quitting your fitness goals.</p>
        <div className="links">
            <button className="btn1">Learn More</button>
            <button className="btn2">Buy</button>
        </div>
        <img src={watch} />
    </div>
    </>
  )
}
export default Watch
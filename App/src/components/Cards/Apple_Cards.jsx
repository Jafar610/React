import "./cards.css";
import ipadAir from "../../assets/images/promo_ipad_air.jpg";
import apple_card from "../../assets/images/promo_apple_card.jpg";
import iphone from "../../assets/images/promo_iphone.jpg";
import macbook from "../../assets/images/promo_macbook_air.jpg";
import ipad from "../../assets/images/promo_ipad.jpg";
import homepod from "../../assets/images/tile_homepod_mini.jpg";

function Apple_Cards() {
  return (
    <>
      <div className="apple_cards">
        <div className="container">
          <div className="content">
            <div>
              <h2>iPad Air</h2>
              <p>Now Supercharged by M3 Chip.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>
            <img src={ipadAir} />
          </div>

          <div className="content">
            <div>
              <h2>Apple Card</h2>
              <p>Get up to 3% Daily Cash back with every purchase.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>

            <img src={apple_card} />
          </div>
        </div>

        <div className="container">
          <div className="content">
            <div>
              <h2>iPhone 15 Pro</h2>
              <p>Titanium. So strong. So light. So Pro.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>
            <img src={iphone} />
          </div>

          <div className="content">
            <div>
              <h2>MacBook Air</h2>
              <p>Supercharged by M3 Chip.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>
            <img src={macbook} />
          </div>
        </div>

        <div className="container">
          <div className="content">
            <div>
              <h2>iPad</h2>
              <p>Now Supercharged by M3 Chip.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>
            <img src={ipad} />
          </div>

          <div className="content">
            <div>
              <h2>HomePod mini</h2>
              <p>A new generation of HomePod.</p>
              <div className="links">
                <button className="btn1">Learn More</button>
                <button className="btn2">Buy</button>
              </div>
            </div>
            <img src={homepod} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Apple_Cards;

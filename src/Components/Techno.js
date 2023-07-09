
import React, {  } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../materialize.css';
import '../App.css';

// img
import logo1 from '../img/logo/html.png'
import logo3 from '../img/logo/mongo.png'
import logo2 from '../img/logo/myadmin 1.png'
import logo4 from '../img/logo/node.png'
import logo5 from '../img/logo/php.png'
import logo6 from '../img/logo/react.png'

function Techno() {
  return (
    <div className="">
      <div className="techno">
        <div className="card-techno">
          <div className="techo-txt">
            <h2>TECHNOLOGIES</h2>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          </div>

          <div className="background-img-techno">
            <div className="techno-logo">
              <div className="logo1 logo"><img className="responsive-img" src={logo1} alt="" /></div>
              <div className="logo2 logo"><img className="responsive-img" src={logo2} alt="" /></div>
              <div className="logo3 logo"><img className="responsive-img" src={logo3} alt="" /></div>
              <div className="logo4 logo"><img className="responsive-img" src={logo4} alt="" /></div>
              <div className="logo5 logo"><img className="responsive-img" src={logo5} alt="" /></div>
              <div className="logo6 logo"><img className="responsive-img" src={logo6} alt="" /></div>
             
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Techno;
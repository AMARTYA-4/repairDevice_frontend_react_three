import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import "./homeHeader.css"

function HomeHeader() { 
  const [showContact,setShowContact]=useState(false);
  const history = useHistory()
  const home = () => {

        history.push("/")
    }
  return (
    <header   className="homeHeader body_header2 row"> 
      <div className="col-lg-3 col-md-3 col-5">
          <div className="logoAreahome">
        <div onClick= {home}>  <img  className="newLogohome" src="/logo-vertical.png" alt="logo"/> 
        </div>
           </div> 
      </div>
      
      <div className="col-5 col-md-4 col-lg-4 offset-lg-4 offset-md-4 offset-2">
        <div className="row">
      {/* <div className="offset-lg-1 col-md-3 col-2">
        <a href="https://api.whatsapp.com/send?phone=9933445566&text=Hi!%20I%20am%20your%20client"><button className="whatsappIcon"><i className="fab fa-whatsapp"></i></button></a>
      </div> */}
      <div className="contactButtonhome">
        {showContact?
        <button className="ContactButtonBluehome"onClick={()=>setShowContact(false)}><i className="fas fa-phone-volume"></i>9922334455</button>:
        <button className="ContactButtonhome"onClick={()=>setShowContact(true)}><i className="fas fa-phone-volume"></i>Contact us</button>}
        </div>
      </div>
      </div>
    </header>
  );
}

export default HomeHeader;
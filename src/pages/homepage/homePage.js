import React,{useEffect,useState} from "react";
import HomeHeader from '../../components/homeHeader/homeHeader';

import { Link} from 'react-router-dom';
import "./homepage.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { motion } from "framer-motion";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


function HomePage(props){
    // const history = useHistory();
    // const gotoBookPage=()=>{
    //     history.push("/quotedetailfirst")
    // }
    // if (typeof window !== "undefined") {
    //     return { width: 1200, height: 800 };
    //   }
    
      const [windowSize, setWindowSize] = useState("");
    
     useEffect(() => {
        let e=window.event 
		//bounds=img.getBoundingClientRect()

        console.log('e',e);
        console.log('e pageX',e.pageX);
        window.addEventListener("resize", () => {
          setWindowSize({ width: window.event, height: window.innerHeight });
        });
        setTimeout(()=>{
            console.log("hello");
            console.log(windowSize.width);
        },2000);
      }, []);

    return(
        <div className="fullBack">
            <div className="fixTop row">
                <HomeHeader/>
            </div>
            <a href="https://api.whatsapp.com/send?phone=9933445566&text=Hi!%20I%20am%20your%20client"><button className="whatsappIconHome"><i className="fab fa-whatsapp"></i></button></a>
        <div className="col-12 Home"style={{
            width:`${windowSize.width}`
            }}>
                <div className="row  myMainTitle">
                <div className="col-lg-6 col-12 mySec">
                    <h1 className="whatThis">Device Repair</h1>
                    <h1 className="whatThis">& Tech Support</h1>
                    <div className="gotoBookPage">
                    <Link to="/Device">
                    <button type="button" className="btn btn-info bookBtn1">Book Now</button>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mySec">
                    <h1 className="whatThis">Business</h1>
                    <h1 className="whatThis">IT Support</h1>
                    <div className="gotoBookPage">
                    <Link to="/Device">
                    <button type="button" className="btn btn-info bookBtn">Get Started</button>
                    </Link>
                    </div>
                </div>
            </div>  
            
         </div>
         <div className="owlArea">
         <OwlCarousel
            className="owl-theme"
            loop
            margin={0}
            items={5}
            nav
        >
            <div className="item">
                <img src="/homeImg/entrepreneur.png"alt="first"/>
            </div>
            <div className="item">
            <img src="/homeImg/forbes.png"alt="first"/>
            </div>
            <div className="item">
            <img src="/homeImg/TheNational.png"alt="first"/>
            </div>
            <div className="item">
            <img src="/homeImg/arabian-business.png"alt="first"/>
            </div>
            <div className="item">
            <img src="/homeImg/dmcc.png"alt="first"/>
            </div>
            <div className="item">
            <img src="/homeImg/Wamda.png"alt="first"/>
            </div>
    
        </OwlCarousel>
        </div> 
        <div className="ourwork">
            <h1>
            Dubai’s leading IT Support company
            </h1>
            <p>TechFix is reinventing the world of IT. As On-Demand and Automated IT Support providers for both businesses and consumers, our team of certified and dynamic Geeks is committed to efficiently assist in all of your Tech needs.</p>
        </div>
        <div className="ourwork ourwork2">
            <h1>
            How It Works
            </h1>
            <p>Simply log a request, state your IT inquiry and one of our certified Geeks will be in touch!</p>
        </div>
        <div className="allDesigns row">
            <div className="col-xl-4 col-lg-12">
            <div className="fullContainer">
                <div className="imgContainer"> 
                    <img  className="thisImg" src="/homeImg/HIW-Step-3.png"alt="thisImg"/>
                </div>
                <div className="textContainer">
                    <h2>
                        1
                    </h2>
                    <h5>
                    Get In Touch
                    </h5>
                    <p>Whatever your IT crisis
                        is, call Geeks!
                    </p>
                </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-12">
            <div className="fullContainerMiddle">
                <div className="imgContainer"> 
                    <img className="thisImg"src="/homeImg/HIW-Step-3.png"alt="thisImg"/>
                </div>
                <div className="textContainer">
                    <h2>
                        2
                    </h2>
                    <h5>
                    We’ll Come To You
                    </h5>
                    <p>A TechFix will come to your desired location without delay.

                        Tech Bliss
                        3
                        Tech Bliss
                        All your personal or business
                        tech issues are taken care
                        of immediately.


                    </p>
                </div>
            </div>
            </div>
            <div className="col-xl-4">
            <div className="fullContainer">
                <div className="imgContainer"> 
                    <img className="thisImg" src="/homeImg/HIW-Step-3.png"alt="thisImg"/>
                </div>
                <div className="textContainer">
                    <h2>
                        3
                    </h2>
                    <h5>
                    Tech Bliss
                    </h5>
                    <p>All your personal or business
                        tech issues are taken care
                        of immediately.
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div className="ourwork ourwork2">
            <h1>
            Why Us
            </h1>
            <p>The most efficient and reliable tech team in town!</p>
        </div>
        
        <motion.ul
            className="containerHome serviceArea row"
            variants={container}
            initial="hidden"
            animate="visible"
        >

        <motion.li key={2} className="item3 col-xl-12 col-12 row" variants={item} >
            <div className="col-xl-12 col-12 row">
                <div className="col-3">
                    <img className="logImg"src="/homeImg/whyus1.png"alt="as"/>
                </div>
                <div className="col-9 detai">
                    <h2>On-Demand</h2>
                    <p>No long waits, parking issues or queues. Submit a request and we'll be in touch as soon as possible</p>
                </div>
            </div>
        </motion.li>
        <motion.li key={1} className="item3 col-xl-12 col-12" variants={item} >
            <div className="col-xl-12 col-12 row">
                <div className="col-3">
                    <img className="logImg"src="/homeImg/whyus2.png"alt="as"/>
                </div>
                <div className="col-9 detai">
                    <h2>At Your Location</h2>
                    <p>Your tech issues will never distract you from your priorities again. We'll come to your location.</p>
                </div>
            </div>
        </motion.li>
        <motion.li key={0} className="item3 col-xl-12 col-12" variants={item} >
            <div className="col-xl-12 col-12 row">
                <div className="col-3">
                    <img className="logImg"src="/homeImg/hands.png"alt="as"/>
                </div>
                <div className="col-9 detai">
                    <h2>Solid partnerships</h2>
                    <p>Through our partnership with Microsoft, Cisco, Lenovo, Arlo and others, you will always benefit from the highest quality of services.</p>
                </div>
            </div>
        </motion.li>
       

        </motion.ul>
            <div className="lastFooter">
                <div className="row desktopOnly">
                    <div className="col-6">
                        <h4>Tech Support Services</h4>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="sngl">
                                    <h5>Phone & Tablet Repair Services</h5>
                                    <ul>
                                        <li>iPhone Repair</li>
                                        <li>iPad Repair</li>
                                        <li>Samsung Galaxy Repair</li>
                            
                                    </ul>
                                </div>
                                <div className="sngl">
                                    <h5>Mac Support Services</h5>
                                    <ul>
                                        <li>MacBook Pro Repair & Support</li>
                                        <li>iMac Repair & Support</li>
                                        <li>MacBook Air Repair & Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sngl">
                                        <h5>Laptop & Computer Repair & Support</h5>
                                        <ul>
                                            <li>Acer Laptop Support</li>
                                            <li>Alienware Laptop Support</li>
                                            <li>Asus Laptop Support</li>
                                            <li>Dell Laptop Support</li>
                                            <li>Lenovo Laptop Support</li>
                                            <li>Microsoft Surface Laptop Support</li>
                                            <li>Toshiba Laptop Support</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4>On-Demand IT Support Services</h4>
                        <hr></hr>
                        <div className="row onDem">
                            <div className="col-6">
                                    <ul>
                                        <li>Laptop Software Cleanup</li>
                                        <li>Home Automation Services</li>
                                        <li>IT Health Checks & Audit Services</li>
                                        <li>Wi-Fi Support Services</li>
                                        <li>Network Setup & Support Services</li>
                                        <li>Email Support</li>
                                        <li>Audio Video Services</li>
                                    </ul>
                                </div>
                            <div className="col-6">
                                    <ul>
                                        <li>NAS, Storage & Cloud Backup Solutions</li>
                                        <li>Office IT Setup & Relocation</li>
                                        <li>Office PBX Solutions & IP Phone Systems</li>
                                        <li>Email Migration</li>
                                        <li>Server Support Services</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4>Company</h4>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <div className="sngl">
                                    <ul>
                                        <li>Instant On-Demand Services</li>
                                        <li>IT Support for Businesses</li>
                                        <li>Become a TechFix</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sngl">
                                        
                                        <ul>
                                            <li>About TexchFix</li>
                                            <li>Terms of Use</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 lastAdd">
                        <h4>Address</h4>
                        <hr></hr>
                        <h4>
                        HDS business Center - Cluster M - JLT Office 1901 - Dubai, United Arab Emirates
                        </h4>
                        <p>TexhFix has been rated 4.6 out of 5 based on 162 reviews as of August 2018. - Read all customer reviews.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h5 className="lastAdd">
                        © TechFix Technology, DMCC 2020. All Rights Reserved.
                        </h5>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="allSocial">
                            <li><FacebookIcon className="socIcon"/></li>
                            <li><InstagramIcon className="socIcon"/></li>
                            <li><LinkedInIcon className="socIcon"/></li>
                            <li><WhatsAppIcon className="socIcon"/></li>
                        </ul>
                    </div>
                </div>

            </div>


            
        
        </div>
    )
}
export default HomePage;
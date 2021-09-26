import Aos from "aos";
import React, { useEffect, Animate } from "react";
import '../../Allcss/Header.css';
import MidHeader from "./MidHeader";

const Header = () => {
    
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])

    return (
        <>
            <div  data-aos="ease-in" className="header container-fluid">
               <div className="row align-items-center">
               <div className="col-md-2 text-center ">
                    <h4 className="logo"><span className="text-primary">Softi</span>Bazzr</h4>
                </div>
                <div className="col-md-5 ">
                    <MidHeader />
                </div>
                <div className="col-md-5 text-end">
                        <span className="btn me-5 header-signin-btn">
                            <button className="btn signup-btn">Sign up</button>
                        </span>
                </div>
               </div>
            </div>
        </>
    )
}





export default Header;
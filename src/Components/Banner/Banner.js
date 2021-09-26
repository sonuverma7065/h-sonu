import React from "react"
import '../../Allcss/Banner.css';
const Banner = () =>{


    return (
        <>
        <div className="container-fluid banner-parent-d">
            <div className="row">
                <div className="col-md-6 text-center banner-img-d border-1">
                        <img src="./hp-banner-img.svg"  />
                </div>
                <div className="col-md-5 credit-score-d">
                    <h4 className="blue">Your Credit Score 	&amp; Report </h4>
                    <h4 className="blue"><span className="span-1">Worth 	&#8377; 1200</span> <span className="span-2">Absolutely Free</span></h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;
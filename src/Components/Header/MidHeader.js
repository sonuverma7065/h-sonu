import React from "react";
import '../../Allcss/MidHeader.css';
import NavLearn from "./NavProduct/NavLearn";
import NavProduct from "./NavProduct/NavProduct";

const MidHeader = () => {


    return (
        <>
            <div className="mid-header-d"> 
                   <div className="all-products-d p-4">
                        <span className="spann spn ">All Products</span>
                        <NavProduct />
                    </div>
                    <div className="learn-resorces p-4">
                        <span className="spann spn">Learn and Resources</span>
                        <NavLearn />
                    </div> 
                   <div className="Cotact p-4">
                       <span className="spn">contact</span>
                    </div>
            </div>
         
        </>
    )
}






export default MidHeader;
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/Images/burnning.png'

const Pricing = () => {

  return (
    // <div className='Pricing'>
    //     <div className=" container">

    //     <div className="PricingSearch">
    //     <div className=" PricingSearchTittle row">
    //                     <div className="PricingSearchTittleParent col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
    //                         <div className="PricingSearchTittleParent section-title-2 text-center mb-70">
    //                             <h2 className="mb-20">Experience the most simple way
    //                             to manage business</h2>
    //                         </div>
    //                     </div>
    //                 </div>
    //                <div className="container">
    //                <div className="searchInput row">
    //                     <div className="searchInputParent col-lg-9">
    //                     <div className="form-input">
    //                         <input type="email" />
    //                     <button>free trial</button>
    //                     </div>
    //                     </div>
    //                     <div className="  col-lg-3">
    //                     <div className="burnnig">
    //                                 <img src={img1} alt="" />
    //                             </div>
    //                       </div>
    //                 </div>
    //                </div>
    //                 {/* <div className="container">
    //                 <div className="PricingSearchInput row">
    //                     <div className="PricingSearchInputParent col-lg-8 ">
    //                         <div className="PricingSearchInputChild newsletter newsletter-4">
    //                             <form action="#">
    //                                <div className="form-input"> <input type="email" placeholder="Enter your email" /></div>
    //                                 <button type="submit">free trial</button>
    //                             </form>
    //                         </div>
    //                     </div>
    //                     <div className="  col-lg-4">
    //                     <div className="burnnig">
    //                                 <img src={img1} alt="" />
    //                             </div>
    //                       </div>
    //                     </div>
    //                 </div> */}
    //        </div>
    //     </div>
    // </div>
    <div className="searchBurnning">
        <div className="Container">
        <div className="search-container">
            <div className="search-container-top">
                <h1>Discover the easiest way to handle audits
                </h1>
            </div>
            <div className="search-container-body">
                <div className=" search-box">
                    <div className="search-input">
                    <input type="text" />
                    <button>Free Trail</button>
                    </div>
                    <div className="burnning">
                    <img src={img1} alt="" />
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Pricing

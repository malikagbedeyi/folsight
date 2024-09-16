import React, { useState } from 'react'
import img1 from '../../assets/Images/pi1.png'
import img2 from '../../assets/Images/pi2.png'
import img3 from '../../assets/Images/pi3.png'
import img4 from '../../assets/Images/price-tab1.png'
import img5 from '../../assets/Images/price-tab2.png'
import img6 from '../../assets/Images/price-tab3.png'
import img7 from '../../assets/Images/price-01.png'
import img8 from '../../assets/Images/price-02.png'
import img9 from '../../assets/Images/price-03.png'
import img10 from '../../assets/Images/price-icon.png'


const PlansBody = () => {
  const [pageSwitch,setPageSwitch] = useState(1)


    function updatepageSwitch(id){
        setPageSwitch(id)
    }
    
  return (
    <div className='pricingBody'>
      <div className="pricingBodyTop">
      <div className=" container">
        <div className="PricingContainer row">
            <div className="PricingContainerParent col-lg-12">
                <div className="PricingContainerChild">
                <h1>Choose Your Plan</h1>
                <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let behold over he whose of sea moved called.</p>
            </div>
        </div>
        </div>

        <div className="priceTable">
            <div className="priceTableButtton">
                <button  onClick={()=>updatepageSwitch(1)} className={pageSwitch === 1 ? "PricingActive" : "nonTrue"}>MONTHLY</button>
                < button onClick={()=>updatepageSwitch(2)} className={pageSwitch === 2 ? "PricingActive" : "nonTrue"}>ANNUAL</button>
            </div>

            <div className="pricingWrapper">
                <div  className={pageSwitch === 1 ? "pricingWrapperMain" : "content"}>
        <div className="priceTableContainer row">
            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img1} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Standard</h2>
                        <h3>$32.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img2} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Professional</h2>
                        <h3>$42.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img3} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Business</h2>
                        <h3>$59.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
            
            <div className={pageSwitch === 2 ? "pricingWrapperMain" : "content"}>
            <div className="priceTableContainer row">
            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img1} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Standard</h2>
                        <h3>$79.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img2} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Professional</h2>
                        <h3>$89.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>

            <div  className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img3} alt="" />
                    </div>
                    <div className="priceTableChildBody">
                        <h2>Business</h2>
                        <h3>$99.50</h3>
                        <ul>
                            <li>
                                <p>Unlimited products</p>
                            </li>
                            <li>
                                <p>Discount code</p>
                            </li>
                            <li>
                                <p> 2GB file storage</p>
                            </li>
                            <li style={{border:"none"}}>
                                <p>    24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
                   
            </div>
        </div>
        </div>
        <div className="pricingBodyTopButtom container-fluid">
        <div className="PricingContainer row">
            <div className="PricingContainerParent col-lg-12">
                <div className="PricingContainerChild">
                  <p>Pricing plan</p>
                <h1>No Extra Charges! Choose your Plan.</h1>
            </div>
        </div>
        </div>

        <div className="priceTable">
            <div className="priceTableButtton">
                <button  onClick={()=>updatepageSwitch(1)} className={pageSwitch === 1 ? "PricingActive" : "nonTrue"}>MONTHLY</button>
                < button onClick={()=>updatepageSwitch(2)} className={pageSwitch === 2 ? "PricingActive" : "nonTrue"}>ANNUAL</button>
            </div>

            <div className="pricingWrapper">
                <div  className={pageSwitch === 1 ? "pricingWrapperMain" : "content"}>
        <div className="priceTableContainer row">
            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img4} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$32.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img5} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$45.50</h2>
                        <p>Business</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img6} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$65.50</h2>
                        <p>Ultimate</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
            
            <div className={pageSwitch === 2 ? "pricingWrapperMain" : "content"}>
            <div className="priceTableContainer row">
            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img4} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$60.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img5} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$70.50</h2>
                        <p>Bussiness</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div  className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img6} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$70.50</h2>
                        <p>Ultimate</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
                   
            </div>
        </div>
        </div>
      </div>

      <div className="pricingBodyMiddle container-fluid">
      <div className="pricingBodyMiddleTop">
        <div className="PricingContainer row">
            <div className="PricingContainerParent col-lg-12">
                <div className="PricingContainerChild">
                  <p>Pricing plan</p>
                <h1>No Extra Charges! Choose your Plan.</h1>
            </div>
        </div>
        </div>
        <div className="priceTable">

            <div className="pricingWrapper">
            <div className='pricingWrapperMain'>
        <div className="priceTableContainer row">
            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img7} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$32.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img8} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$54.50</h2>
                        <p>Business</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
            </div>

            <div className="priceTableParent col-lg-4 col-md-6">
                <div className="priceTableChild">
                    <div className="priceTableChildTop">
                        <img src={img9} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$65.50</h2>
                        <p>Ultimate</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
                   
            </div>
        </div>
        </div>
        <div className="priceBodtMiddleButtom container">
          <div className="priceBodtMiddleButtomTittleContainer row">
            <div className="priceBodtMiddleButtomTittleParent col-lg-12">
              <div className="priceBodtMiddleButtomTittleChild">
                <h2>No hidden charge, Affordable plan</h2>
                <p>Him have deep brought life darkness firmament unto move</p>
              </div>
            </div>
          </div>
          <div className="pricingMiddleButtomMain">
            <div className="pricingMiddleButtomMainContainer row">
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                            <h2>Standard</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild pricingMiddleMainActive">
                        <div className="pricingMiddleButtomMainChildTop">
                            <h2>Professional</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                            <h2>Business</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                            <h2>Ultimate</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricingBodyButtom container-fluid">
        <div className="pricingBodyButtomTop">
            <div className="priceChangeCombine">
            <div className="pricingBodyButtomTopContainer row">
            <div className="pricingBodyButtomParent col-lg-12">
                <div className="pricingBodyButtomChild">
                <div className="PricingContainerChildTittle">
                  <span>Pricing plan</span>
                <h1>No extra charges! choose your plan</h1>
                <p>Gathering creepeth good divide yielding living lesser signs itseld Sea made isn't together be have yielding after light which days there minion isn't spirit to</p>
            </div>
                <div className="priceTableBodyButtomChildButtton">
                <button  onClick={()=>updatepageSwitch(1)} className={pageSwitch === 1 ? "PricingActive" : "nonTrue"}>MONTHLY</button>
                < button onClick={()=>updatepageSwitch(2)} className={pageSwitch === 2 ? "PricingActive" : "nonTrue"}>ANNUAL</button>
            </div>
                </div>
            </div>
            </div>
            <div className="PriceChange">
                <div className={pageSwitch === 1 ? "pricingWrapperMain" : "content"}>
            <div className="row PriceChangeContainer">
            <div className=" pricingBodyButtomParent col-lg-6">
                <div className="pricingBodyButtomChild">
                    <div className="priceTableBodyButtomChildButttonTop">
                    <div className="priceTableChildTop">
                        <img src={img5} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$60.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="pricingBodyButtomParent col-lg-6">
                <div className="pricingBodyButtomChild">
                <div className="priceTableBodyButtomChildButttonTop">
                    <div className="priceTableChildTop">
                        <img src={img6} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$32.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            <div className={pageSwitch === 2 ? "pricingWrapperMain" : "content"}>
            <div className="row PriceChangeContainer">
            <div className=" pricingBodyButtomParent col-lg-6">
                <div className="pricingBodyButtomChild">
                    <div className="priceTableBodyButtomChildButttonTop">
                    <div className="priceTableChildTop">
                        <img src={img7} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$32.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="pricingBodyButtomParent col-lg-6">
                <div className="pricingBodyButtomChild">
                <div className="priceTableBodyButtomChildButttonTop">
                    <div className="priceTableChildTop">
                        <img src={img5} alt="" />
                        <div className='borderSpace'></div>
                    </div>
                    <div className="priceTableChildBody">
                        <h2>$70.50</h2>
                        <p>Professional</p>
                        <ul>
                            <li>
                              <p>Does one given seasons sixth brought. Fill second years set stars divided gathering seed he He whose. God day mad into the over.</p>                           </li>
                        </ul>
                    </div>
                    <div className="priceTableChildBottom">
                        <button>GET PACKAGE</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="pricingBodyButtomDown">
          <div className="priceBodtMiddleButtomTittleContainer row">
            <div className="priceBodtMiddleButtomTittleParent col-lg-12">
              <div className="priceBodtMiddleButtomTittleChild">
                <h2>Pricing Plan</h2>
                <p>Gathered was to yielding god heaven lights about void thing.</p>
              </div>
            </div>
          </div>
          <div className="pricingMiddleButtomMain">
            <div className="pricingMiddleButtomMainContainer row">
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                            <img src={img10} alt="" />
                            <h2>Standard</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild pricingMiddleMainActive">
                        <div className="pricingMiddleButtomMainChildTop">
                        <img src={img10} alt="" />
                            <h2>Professional</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                        <img src={img10} alt="" />
                            <h2>Business</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
                <div className="pricingMiddleButtomMainParent col-lg-3 col-md-6">
                    <div className="pricingMiddleButtomMainChild">
                        <div className="pricingMiddleButtomMainChildTop">
                        <img src={img10} alt="" />
                            <h2>Ultimate</h2>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildBody">
                            <h2>$25/<span>month</span></h2>
                            <ul>
                                <li>15GB Clould Storage</li>
                                <li>Unlimited Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domin Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div></div>
                        </div>
                        <div className="pricingMiddleButtomMainChildButtom">
                            <a href="#">PURCHASE NOW</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlansBody

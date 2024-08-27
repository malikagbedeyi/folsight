import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/topbar.scss'
import logo from '../assets/Images/folsight.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../assets/Images/p1.png'
import icon2 from '../assets/Images/p2.png'
import icon3 from '../assets/Images/p3.png'
import icon4 from '../assets/Images/light.png'
import icon5 from '../assets/Images/gea-02.png'
import icon6 from '../assets/Images/gea-03.png'
import icon7 from '../assets/Images/rd-01.png'
import icon8 from '../assets/Images/rd-02.png'
import icon9 from '../assets/Images/rd-03.png'
// import icon1 from '../assets/Images/p1.png'
// import icon1 from '../assets/Images/p1.png'
// import icon1 from '../assets/Images/p1.png'

const TOpbar = () => {
        const [scroll,setScroll] = useState(false)
        const [input,setInput] = useState("")
        const [toggle, setToggle] = useState(false);
        const [openMenu, setOpenMeu] = useState(false)
        const [openMenu2, setOpenMeu2] = useState(false)
        const [openMenu3, setOpenMeu3] = useState(false)
        const [openMenu4, setOpenMeu4] = useState(false)
        const [openMenu5, setOpenMeu5] = useState(false)
        const [openMenu6, setOpenMeu6] = useState(false)
        const navigate =  useNavigate()

        useEffect(() => {
            AOS.init({initClassName: true})
        },[])
    
        const changeBackground = () => {
            if(window.scrollY >= 150){
                setScroll(true);
            }else{
                setScroll(false);
            }
            console.log(setScroll)
        };
        window.addEventListener('scroll',changeBackground);
    
    
      return (
        <div className="topbar">
        <section className="menuSection">
            <div className=" ">
            <header className= {scroll ? 'scrollChange':'navbarChange'}
             // data-aos="fade-in-down" data-aos-delay="300" data-aos-duratio="2000"
              >
        <div className="Container">

            <div className="logo">
            <a onClick={() => navigate('/')}>  <img src={logo} alt="" /></a>
            </div>
            <div className='topbarMenu'>
                <ul className='topbarMenu-ul'>
                    <li className='nav-item' > 
                    <a className='nav-link active' href="#">PRODUCTS</a>
                     <ul className="submenu">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 01 </a>
                                <span>Performance that delivers.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 02 </a>
                                <span>Performance that delivers.</span>
                                </p>
                                 </li>
                             <li>
                                 <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 03 </a>
                                <span>Performance that delivers.</span>
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon3} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 04 </a>
                                <span>Performance that delivers</span>
                                </p>
                                  </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 01 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon8} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 02 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                             <li>
                                 <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 03 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon9} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 04 </a>
                                <span>Designed for flexibility/Built empower</span>
                                </p>
                                  </li>
                       </ul>
                        </li>
                    </ul>
                    <div className="triangle"></div>
                    </li>
                    <li className="nav-item" ><a className="nav-link" href="#">FRAMEWORKS</a>
                    <ul className="submenu">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_01')}>IS027001</a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_02')}>HIPAA </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon3} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_03')}>SOC2 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                             <li>
                             <div className="hoverImg">
                              <img src={icon8} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_04')}>GDPR </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_05')}>NIST </a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                        </li>
                    </ul>
                     <div className="triangle"></div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="#">PLANS</a>
                    </li>
                    <li className="nav-item"> <a className="nav-link"  href="#">COMPANY</a> 
                         <ul className="submenu2">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="#/about_us">About US</a>
                                <span>Performance that delivers.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                              <li> 
                              <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a href="/">Team</a>
                                <span>Performance that delivers.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Contact US</a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                        </li>
                    </ul>
                    <div className="triangle"></div>
                    </li>
                </ul>
                </div>
                <div className="loginButton">
                <a onClick={() => navigate('/login')}>LOGIN</a>
               <button onClick={() => navigate('/register')}className='btn submit'> Sign UP </button>
               <button className="btn toggle navbar-toggler" type="button" onClick={() => setToggle(!toggle)} >
                          <i className="fa-solid svg fa-bars"></i>
                 </button>
                </div>
            </div>
    
            <div className='mobileResponsive' id={toggle ? "open" : "close"}>
                <ul>
                    <li className=''><a className="nav-link" href="#">HOME</a>
                       <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">Home Version 01 </a> <span className="i"></span> </li>
                             <li> <a href="#">Home Version 02</a> <span className="i"></span> </li>
                             <li> <a href="#">Home Version 03</a> <span className="i"></span>  </li>
                             <li> <a href="#">Home Version 04</a> <span className="i"></span> </li>
                             <li>  <a href="#">Home Version 05</a> <span className="i"></span>  </li> 
                             <li>  <a href="#">Home Version 06</a> <span className="i"></span>  </li>
                             <li> <a href="#">Home Version 07</a> <span className="i"></span> </li>
                        </ul>
                        <i className="fa-solid fa-plus" onClick={() => setOpenMeu(!openMenu)}></i>
                    </li>
    
                    <li className=''><a className="nav-link" href="#">PAGES</a>
                    <ul className="submenu"id={openMenu2 ? "open" : "close"}>
                          <li><a href="/about">About</a> <span className="i"></span> </li>
                           <li> <a href="/services">Serivces</a> <span className="i"></span> </li>
                           <li> <a href="/pricing">Pricing</a> <span className="i"></span> </li>
                           <li><a href="/">Faq</a> <span className="i"></span></li>
                           <li> <a href="/contact">Contact Us</a> <span className="i"></span> </li>
                           <li> <a href="/">Process</a> <span className="i"></span> </li>
                           <li>  <a href="/team">Team</a> <span className="i"></span> </li>
                           <li> <a href="/login">Login</a> <span className="i"></span> </li>
                           <li><a href="/login">Register</a> <span className="i"></span> </li>
                           <li> <a href="/comingSoon">Comming Soon</a> <span className="i"></span> </li>
                           <li>  <a href="/error">404 Error</a>  <span className="i"></span></li>
                    </ul>
                    <i className="fa-solid fa-plus" onClick={() => setOpenMeu2(!openMenu2)}></i>
                    </li>
    
                    <li className='nav-item'> <a className="nav-link" href="#">PORTFOLIO</a>
                       <ul className="submenu" id={openMenu3 ? "open" : "close"}>
                          <li> <a href="/portfolio_01">Portfolio Grid 01</a> <span className="i"></span> </li>
                          <li> <a href="/portfolio_02">Portfolio Grid 02</a> <span className="i"></span> </li>
                          <li> <a href="/portfolio_03">Portfolio Grid 03</a>  <span className="i"></span></li>
                          <li> <a href="/portfolio_full">Portfolio Grid Full</a> <span className="i"></span></li>
                          <li> <a href="/portfolio_masonry">Portfolio Masonry </a> <span className="i"></span> </li> 
                          <li> <a href="/portfolio_masonry_02">Portfolio Masonry 02</a> <span className="i"></span></li>
                          <li> <a href="/portfolio_masonry_slide">Portfolio Slider Full</a> <span className="i"></span></li>
                          <li> <a href="/portfolio_masonry_slide_Box">Portfolio Slider Box</a> <span className="i"></span> </li>
                          <li> <a href="/portfolio_masonry_single_01">Portfolio Single 01</a>  <span className="i"></span></li>
                          <li> <a href="/portfolio_masonry_single_02">Portfolio Single 02</a>  <span className="i"></span> </li>
                          <li> <a href="/portfolio_masonry_single_03">Portfolio Single 03</a> <span className="i"></span> </li>
                          <li> <a href="/portfolio_masonry_single_04">Portfolio Single 04</a> <span className="i"></span></li>
                       </ul>
                        <i className="fa-solid fa-plus" onClick={() => setOpenMeu3(!openMenu3)}></i>
                    </li>
                    <li className='nav-item'><a className="nav-link" href="#">ELEMENTS</a>
                       {/* <ul className="submenu2" id='submenu'>
                             <li className='dFlex'>
                                <h1>ELEMENT 1</h1>
                                     <ul>
                                            <li> <a href="#">According</a> </li>
                                           <li>  <a href="#">Alerts</a> </li>
                                           <li>  <a href="#">Badges</a> </li>
                                           <li>  <a href="#">Brand Logo</a> </li>
                                           <li> <a href="#">Breadcrumbs</a>  </li> 
                                           <li> <a href="#">Buttons</a>  </li>
                                     </ul>
                                      <i className="fa-solid fa-plus" onClick={() => setOpenMeu(!openMenu)}></i>
                                        </li>
    
                             <li className='dFlex'>
                                 <h1>ELEMENT 2</h1>
                                     <ul>
                                         <li> <a href="#">Columns</a> </li>
                                        <li> <a href="#">Counter</a> </li>
                                        <li>  <a href="#">Contact form</a> </li>
                                        <li> <a href="#">Call to action</a> </li>
                                        <li> <a href="#">Dropdown</a> </li> 
                                        <li> <a href="#">Fancy text</a> </li>
                                     </ul>
                             </li>
    
                             <li className='dFlex'>
                                  <h1>ELEMENT 3</h1>
                                      <ul>
                                         <li> <a href="#">Footer</a> </li>
                                        <li> <a href="#">Gallery</a>  </li>
                                        <li> <a href="#">Lightbox</a> </li>
                                        <li>  <a href="#"> Page tittles</a> </li>
                                        <li> <a href="#">Lastest Post</a> </li> 
                                        <li> <a href="#">Progressbar</a> </li>
                                     </ul>
                             </li>
    
                             <li className='dFlex'>
                                  <h1>ELEMENT 4</h1>
                                     <ul>
                                         <li> <a href="#">Subscribe</a> </li>
                                        <li> <a href="#">Tab</a> </li>
                                        <li>  <a href="#">Team</a> </li>
                                        <li> <a href="#">Testimonials</a> </li>
                                        <li> <a href="#">tooltips</a> </li> 
                                        <li> <a href="#">Typography</a> </li>
                                            </ul>
                             </li>
                                    </ul> */}
                                     <i className="fa-solid fa-plus" onClick={() => setOpenMeu4(!openMenu4)}></i>
                     </li>
                    <li className='nav-item'> <a className="nav-link"  href="#">BLOG</a> 
                            <ul className="submenu" id={openMenu5 ? "open" : "close"}> 
                                         <li> <a href="#">Blog Right Siderbar</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog Left Siderbar</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog No Siderbar</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog Two Column 01</a> <span className="i"></span> </li>
                                        <li> <a href="#">Blog Two Column 02 </a> <span className="i"></span> </li> 
                                        <li> <a href="#">Blog Two Col Masonry</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog Three Column</a> <span className="i"></span> </li>
                                        <li> <a href="#">Blog Three Col Masonry</a> <span className="i"></span></li>
                                        <li> <a href="#">Blog Image Details</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog Audio Details</a> <span className="i"></span> </li>
                                        <li> <a href="#">Blog Video Details</a>  <span className="i"></span></li>
                                        <li> <a href="#">Blog Gallary Details</a> <span className="i"></span></li>
                                    </ul>
                                     <i className="fa-solid fa-plus" onClick={() => setOpenMeu5(!openMenu5)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link" href="#">SHOP</a>
                         <ul className="submenu" id={openMenu6 ? "open" : "close"}>
                                        <li> <a href="/shop_default">Shop Default</a> <span className="i"></span></li><li> <a href="/shop_list">Shop List</a>          <span className="i"></span> </li>
                                        <li> <a href="/shop_product">Product Details</a>  <span className="i"></span></li>
                                        <li> <a href="/shop_cart">Shopping Cart</a> <span className="i"></span> </li>
                                        <li> <a href="/checkout">Checkout</a>    <span className="i"></span></li> 
                                        <li> <a href="/wishlist">Wishlist</a>   <span className="i"></span> </li>
                                    </ul>
                                     <i className="fa-solid fa-plus" onClick={() => setOpenMeu6(!openMenu6)}></i>
                    </li>
                </ul>
                </div>
            </header> 
            </div>
            </section>
            <div className="headerCover"></div>
            </div>
  )
}

export default TOpbar

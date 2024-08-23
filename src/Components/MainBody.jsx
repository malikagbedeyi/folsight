import React, { useEffect, useReducer, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from   '../assets/Images/sisterPartner/swiftprofile.png'
import img2 from   '../assets/Images/sisterPartner/Zahtech.png'
import img3 from   '../assets/Images/sisterPartner/sprintcue.png'
import img4 from '../assets/Images/sisterPartner/starcircle.png'
import img5 from   '../assets/Images/sisterPartner/Safepro.png'
import img6 from     '../assets/Images/sisterPartner/lentsource.png'
import img7 from    '../assets/Images/sisterPartner/isleridge.png'
import img8 from   '../assets/Images/sisterPartner/cansulting.png'
// import LearnMore from './LearnMore';
// import MiddleCover from './MiddleCover';
const MainBody = () => {
    const [input,setInput] = useState("")
     const itemRef = useRef(null);
     const intervalRef = useRef(null);
   
     useEffect(() => {
       const scrollSpeed = 2; // Speed of the scroll
       const intervalTime = 30; // Interval time in milliseconds for smooth scrolling
   
       const startScrolling = () => {
         intervalRef.current = setInterval(() => {
           if (itemRef.current) {
             itemRef.current.scrollLeft += scrollSpeed;
   
             // If the scroll reaches the end, reset to start
             if (itemRef.current.scrollLeft >= itemRef.current.scrollWidth - itemRef.current.clientWidth) {
               itemRef.current.scrollLeft = 0;
             }
           }
         }, intervalTime);
       };
   
       startScrolling(); // Start the scrolling
   
       return () => clearInterval(intervalRef.current); // Clean up the interval on component unmount
     }, []);
   
     const handleMouseDown = () => clearInterval(intervalRef.current); // Pause on mouse down
   
     const handleMouseUp = () => {
       const intervalTime = 50; // Interval time in milliseconds for smooth scrolling
       const scrollSpeed = 1; // Speed of the scroll
   
       intervalRef.current = setInterval(() => {
         if (itemRef.current) {
           itemRef.current.scrollLeft += scrollSpeed;
           if (itemRef.current.scrollLeft >= itemRef.current.scrollWidth - itemRef.current.clientWidth) {
             itemRef.current.scrollLeft = 0;
           }
         }
       }, intervalTime);
     };
    // useEffect(() => {
    //     const scrollSpeed = 1; // Speed of the scroll
    //     const delay = 10000; // 10 seconds interval
    
    //     intervalRef.current = setInterval(() => {
    //       if (itemRef.current) {
    //         // Scrolls the container to the right by `scrollSpeed` pixels
    //         itemRef.current.scrollLeft += scrollSpeed;
    
    //         // If the scroll reaches the end, reset to start
    //         if (itemRef.current.scrollLeft >= itemRef.current.scrollWidth - itemRef.current.clientWidth) {
    //           itemRef.current.scrollLeft = 0;
    //         }
    //       }
    //     }, delay); // Adjust the interval time to 10 seconds (10000 milliseconds)
    
    //     return () => clearInterval(intervalRef.current); // Clean up the interval on component unmount
    //   }, []);
    
    //   const handleMouseDown = () => clearInterval(intervalRef.current); // Pause on mouse down
    //   const handleMouseUp = () => {
    //     const delay = 10000; // Reapply 10 seconds interval
    //     intervalRef.current = setInterval(() => {
    //       if (itemRef.current) {
    //         itemRef.current.scrollLeft += 1;
    //         if (itemRef.current.scrollLeft >= itemRef.current.scrollWidth - itemRef.current.clientWidth) {
    //           itemRef.current.scrollLeft = 0;
    //         }
    //       }
    //     }, delay);
    //   };


    

  return (
    <div className='mainBody'>
          <div className="container">
            <div className="row">
                <div className="mainTittle col-lg-12">
                <h1>Our worldwide clients</h1>
                </div>
            </div>
            <div class="brand-pattern" 
            ref={itemRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            >
                 <img src={img1}alt="" />
                 <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    {/* <img src={img4} alt="" /> */}
                   {/* <img src={img5} alt="" /> */}
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img1}alt="" />
                 <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    {/* <img src={img4} alt="" /> */}
                   {/* <img src={img5} alt="" /> */}
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    </div>
            </div>

        {/* <LearnMore />
        <MiddleCover /> */}
        </div>
  )
}

export default MainBody

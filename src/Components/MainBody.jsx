import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/Images/01.png'
import img2 from   '../assets/Images/02.png'
import img3 from     '../assets/Images/03.png'
import img4 from    '../assets/Images/04.png'
import img5 from   '../assets/Images/05.png'
// import LearnMore from './LearnMore';
// import MiddleCover from './MiddleCover';
const MainBody = () => {
    const [input,setInput] = useState("")
    const itemRef = useReducer(null);
    const [isMouseDown,setIsMouseDown] = useState(false)
    const [startX,setstartX] = useState(0)
    const [scrolleft,setScrolleft] = useState(0)

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setstartX(e.pageX - - itemRef.current.offsetLeft);
        setScrolleft(itemRef.current.scrolleft)
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false)
    }
    const handleMouseUp = () => {
        setIsMouseDown(false)
    }
    const handleMouseMove = (e) => {
        if(!isMouseDown) return
        e.preventDefault();
        const x = e.pageX - itemRef.current.offsetLeft;
        const walk = (x-startX)*2;
        itemRef.current.scrolleft = scrolleft - walk
    }

    

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
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            >
                 <img src={img1}alt="" />
                 <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                 <img src={img5} alt="" />
                    <img src={img1} alt="" />
 
                    </div>
            </div>

        {/* <LearnMore />
        <MiddleCover /> */}
        </div>
  )
}

export default MainBody

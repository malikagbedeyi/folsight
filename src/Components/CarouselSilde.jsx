import React, { useEffect, useRef, useState } from 'react';
import img1 from "../assets/Images/ImageBlog/01.jpg"
import img2 from "../assets/Images/ImageBlog/03.jpg"
import img3 from "../assets/Images/ImageBlog/04.jpg"
import '../assets/scss/carouselSlide.scss'
const CarouselSilde = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
  
    useEffect(() => {
      const firstContainer = carouselRef.current.querySelector('.CarouselParent');
      if (firstContainer) {
        setContainerWidth(firstContainer.offsetWidth + 50); // Add gap between containers (50px in your case)
      }
    }, []);
  
    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };
  
    const onMouseLeave = () => {
      setIsDragging(false);
    };
  
    const onMouseUp = () => {
      setIsDragging(false);
    };
  
    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const scrollLeftHandler = () => {
      carouselRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    };
  
    const scrollRightHandler = () => {
      carouselRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    };
  
    return (
      <div className="Carousel">
         <div className="learnMoreCategoryContainerChildTop">
        <h1>GRC Made Easy</h1>
        <p className='textDisplay-2'>Effortlessly manage your organization's governance, risk, and compliance needs with Folsight. </p>
        </div>
        <div
          className="CarouselSilde"
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
        <div class="CarouselContainer">
            <div class="CarouselParent">
              <div class="CarouselChild">
                <div className="CarouselChildTop">
                <a href="#">
                    <div class="Tools_title">Risk Management</div>
                 </a>
                 </div>
                <div class="CarouselChildMiddle">
                    <img src={img1} alt="Find A Doctor Page Example" width="238" height="169" loading="lazy" />
                 </div>
                 <div className="CarouselChildBottom">
                 <div class="Tools_card-text"> 
                    <p>Folsight streamlines risk management by identifying, assessing, and prioritizing risks across your organization. The tool facilitates the implementation and tracking of mitigation strategies while providing continuous monitoring and real-time reporting. This ensures that risks are proactively managed, enabling timely adjustments and minimizing potential disruptions to organizational goals.</p>
                    </div>
                 </div>
             </div>
            </div>
            <div class="CarouselParent">
              <div class="CarouselChild">
                <div className="CarouselChildTop">
                <a href="#">
                    <div class="Tools_title">Compliance</div>
                 </a>
                 </div>
                <div class="CarouselChildMiddle">
                    <img src={img2} alt="Find A Doctor Page Example" width="238" height="169" loading="lazy" />
                 </div>
                 <div className="CarouselChildBottom">
                 <div class="Tools_card-text">
                    <p>Folsight helps organizations meet industry-specific regulations and standards such as GDPR, HIPAA, or SOX by ensuring compliance through the development, distribution, and enforcement of comprehensive policies. It streamlines the policy management process, Making it easier to keep policies up to date and accessible across the organization. Additionally, the tool plays a critical role in audit management by facilitating the planning, execution, and oversight of both internal and external audits.</p>
                 </div>
                 </div>
             </div>
            </div>
            <div class="CarouselParent">
              <div class="CarouselChild">
                <div className="CarouselChildTop">
                <a href="#">
                    <div class="Tools_title">Controls</div>
                 </a>
                 </div>
                <div class="CarouselChildMiddle">
                    <img src={img3} alt="Find A Doctor Page Example" width="238" height="169" loading="lazy" />
                 </div>
                 <div className="CarouselChildBottom">
                 <div class="Tools_card-text">
                    <p> Folsight assigns specific controls to responsible individuals or teams, ensuring clear ownership. It automates workflows to guide users through the implementation and execution of these controls. The tool also automates control testing, scheduling periodic checks like security assessments or audits, and continuously monitors control effectiveness, providing real-time alerts for any deviations or failures.</p>
                 </div>
                 </div>
             </div>
            </div>
            <div class="CarouselParent last-slide">
              <div class="CarouselChild">
                <div className="CarouselChildTop">
                <a href="#">
                    <div class="Tools_title">Operational Efficiency</div>
                 </a>
                 </div>
                <div class="CarouselChildMiddle">
                    <img src={img1} alt="Find A Doctor Page Example" width="238" height="169" loading="lazy" />
                 </div>
                 <div className="CarouselChildBottom">
                 <div class="Tools_card-text">
                    <p> Folsight enhances efficiency by automating repetitive tasks related to governance, risk, and compliance, reducing manual effort and errors. It integrates seamlessly with enterprise systems such as ERP, HR, and finance, streamlining workflows and ensuring consistent data flow across the organization. Additionally, the tool facilitates collaboration among departments and teams involved in GRC activities, promoting better communication, coordination, and alignment of goals. </p>
                 </div>
                 </div>
             </div>
            </div>
        </div>
    </div>
    <div className="carousel-wrapper">
      <button className="scroll-button left" onClick={scrollLeftHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>    
      </button>
      <div className="middle">swipe</div>
      <button className="scroll-button right" onClick={scrollRightHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      </button>
      </div>
    </div>
  )
}

export default CarouselSilde

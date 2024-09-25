import React, { useEffect, useState } from 'react'
import PlansBody from '../PlansBody/PlansBody'
import icon1 from '../../assets/Images/Products Icons/AI.png'
import icon2 from '../../assets/Images/Products Icons/AuditRoom.png'
import icon3 from '../../assets/Images/Products Icons/Compl.ai.png'
import icon4 from '../../assets/Images/Products Icons/Integration.png'
import icon5 from '../../assets/Images/Products Icons/RiskCore.png'
import icon6 from '../../assets/Images/Products Icons/API.png'
import FrameWorkResource from './FrameWorkResource'
import ProductReasource from './ProductReasource'
import PlatformReource from './PlatformReource'
const ResourcesBody = () => {
    const[page , setPage] = useState(1)

    const handlePage = (id) => {
        setPage(id);
        window.scrollTo(0, 0);
        const container = document.querySelector('main'); // Replace with your container class
        if (container) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  return (
    <div className='resourcesBody'>
        <div className="resourcesWrapper">
        <aside className='sticky sidebar'>
           <div className="sidebarChild">
            <div className="sidebarLink">
           <ul>
                <li onClick={()=>handlePage(1)} className={page === 1 ? 'activeli' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0L3 5v14l9 5 9-5V5l-9-5zm0 2.5l7 3.5v10l-7 3.5-7-3.5V5.5l7-3.5zm-5 6v6l5 2.5V12l-5-2.5z"></path></svg>
                        <p>Product</p>
                </li>
                <li  onClick={()=>handlePage(2)} className={page === 2 ? 'activeli' : ''}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 18H5a4 4 0 0 1 0-8 4.1 4.1 0 0 1 1.41-.24 5.6 5.6 0 0 1 10.18-2.76A4 4 0 0 1 19 18z"></path></svg>
                     <p>platform</p>
                </li>
                <li  onClick={()=>handlePage(3)} className={page === 3 ? 'activeli' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2l-10 6 10 6 10-6-10-6zm0 8l-10 6 10 6 10-6-10-6z"></path></svg>
                    <p>frameWork</p>
                </li>
            </ul>
            </div>
           </div>
        </aside>
        <main>
            <ProductReasource page={page} />
            <PlatformReource page={page}/>
         <FrameWorkResource page={page} />
         </main>
        </div>
    </div>
  )
}

export default ResourcesBody



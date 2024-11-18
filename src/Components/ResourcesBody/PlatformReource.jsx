import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlatformReource = ({page}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        window.open(`${window.location.origin}/#/frameworkPage`, "_blank", "noopener,noreferrer");
      };
      
  return (
    <div className= {page === 2 ?  "rightbar" : "nonrightbar" }>
    <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Ai</h1>
                    <p>Audit room supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent ">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Api</h1>
                    <p>Folsight leverages cutting-edge Artificial Intelligence (AI) to enhance efficiency and accuracy while ensuring full compliance with industry standards and regulations.</p>
                    </div>
                    <button onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Integration</h1>
                    <p>Risk core supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default PlatformReource

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductReasource = ({page}) => {
    const navigate = useNavigate()
  return (
    <div className= {page === 1 ?  "rightbar" : "nonrightbar" }>
    <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Audit Room</h1>
                    <p>Audit room supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button onClick={() => navigate('/frameworkPage')}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent ">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Compl.ai</h1>
                    <p>Folsight leverages cutting-edge Artificial Intelligence (AI) to enhance efficiency and accuracy while ensuring full compliance with industry standards and regulations.</p>
                    </div>
                    <button onClick={() => navigate('/frameworkPage')}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>RiskCore</h1>
                    <p>Risk core supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button onClick={() => navigate('/frameworkPage')}>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default ProductReasource

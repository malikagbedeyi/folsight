import React from 'react'
import ProductReasource from './ProductReasource'
import PlatformReource from './PlatformReource'
import FrameWorkResource from './FrameWorkResource'

const AllReasource = ({page}) => {
    const handleClick = () => {
        window.open(`${window.location.origin}/#/frameworkPage`, "_blank", "noopener,noreferrer");
      };
      
    return (
        <>
      <div className= {page === 4 ?  "rightbar" : "nonrightbar" }>
        <div className="Fillter">
            <h1>Product</h1>
            <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Audit Room</h1>
                    <p>Audit room supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
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
                    <button  onClick={handleClick}>Learn More</button>
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
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
        </div>
        <div className="Fillter">
            <h1>Platform</h1>
            <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>Ai</h1>
                    <p>Audit room supports both internal and external audits end-to-end, including annual internal audit planning.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
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
                    <button  onClick={handleClick}>Learn More</button>
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
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
        </div>
        <div className="Fillter">
            <h1>FrameWork</h1>
            <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>IS027001</h1>
                    <p>ensures that organizations implement comprehensive information security management to protect sensitive data.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent ">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>HIPAA</h1>
                    <p> regulates the protection of healthcare information, ensuring patient privacy and secure medical data handling.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>SOC2</h1>
                    <p>outlines controls for securing customer data in the cloud, focusing on security, confidentiality, and privacy.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>GDPR</h1>
                    <p>enforces strict data protection laws for individuals in the EU, giving users control over their personal information.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>NIST</h1>
                    <p>provides a cybersecurity framework with best practices to help organizations protect against evolving cyber threats.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
        <div className="rightbarParent">
            <div className="rightbarChild ">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>PCI DSS</h1>
                    <p>sets standards to ensure the secure processing, storage, and transmission of payment card information, protecting against fraud and breaches.</p>
                    </div>
                    <button  onClick={handleClick}>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
    <div className="viewFrameWork">
        <button>View More</button>
    </div>
        </div>
    </div>
    </>
  )
}

export default AllReasource

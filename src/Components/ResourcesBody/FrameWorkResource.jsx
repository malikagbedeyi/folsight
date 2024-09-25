import React from 'react'

const FrameWorkResource = ({page}) => {
  return (
    <div className= {page === 3 ?  "rightbar" : "nonrightbar" }>
    <div className="rightbarContainer">
        <div className="rightbarParent">
            <div className="rightbarChild">
                <div className="rightbarRight">
                    <div className="rightbarText">
                    <h1>IS027001</h1>
                    <p>ensures that organizations implement comprehensive information security management to protect sensitive data.</p>
                    </div>
                    <button>Learn More</button>
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
                    <button>Learn More</button>
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
                    <button>Learn More</button>
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
                    <button>Learn More</button>
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
                    <button>Learn More</button>
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
                    <button>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
    <div className="viewFrameWork">
        <button>View More</button>
    </div>
    </div>
  )
}

export default FrameWorkResource

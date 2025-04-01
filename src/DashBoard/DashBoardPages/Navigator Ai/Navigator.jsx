import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../../../assets/scss/Dashboard/Navigator/navigator.scss'
import img1 from '../../../assets/Images/Dashboard/profile-img.png'
import img2 from '../../../assets/Images/Dashboard/logo-upload.png'
const Navigator = ({ page, handlePage}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");

  const handleKey = (event) => {
    if (event.key === "Enter" && inputText.trim() != ""){
      setIsSend(!isSend)
      setInputText("");

      if (event.key === "Enter" && inputText2.trim() != ""){
        setIsSend(!isSend)
      }
    }
  }
  return (
          <div className={page === 19 ? "navigator" : "navigator"}>
<div className="navMenuContainer row"> 
      <div className="navMenuParent col-lg-12">
        <div className="navMenuChild">
          <div className="topWrapper">
            <div className="leftTopWrapper">
              <h1>Navigator</h1> 
              <div className="leftwrapper-contet">
              <p>Dashboard </p>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span> 
               <a> AI navigator</a>
              </div>
            </div>
            <div className="rightTopWrapper">
              <div className="menuicon">
              <div className="notification">
              <svg  width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9997 17V17.75C12.9997 18.5456 12.6837 19.3087 12.1211 19.8713C11.5585 20.4339 10.7954 20.75 9.99974 20.75C9.20409 20.75 8.44103 20.4339 7.87842 19.8713C7.31581 19.3087 6.99974 18.5456 6.99974 17.75V17M18.0472 15.4733C16.8435 14 15.9936 13.25 15.9936 9.18828C15.9936 5.46875 14.0943 4.14359 12.531 3.5C12.3233 3.41469 12.1279 3.21875 12.0646 3.00547C11.7904 2.07219 11.0216 1.25 9.99974 1.25C8.97787 1.25 8.20865 2.07266 7.93724 3.00641C7.87396 3.22203 7.67849 3.41469 7.47084 3.5C5.90568 4.14453 4.00818 5.465 4.00818 9.18828C4.00584 13.25 3.15599 14 1.95224 15.4733C1.45349 16.0836 1.89037 17 2.76271 17H17.2415C18.1091 17 18.5432 16.0808 18.0472 15.4733Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
              <div className="notificationtext">2</div>
              </div>
            </div>
            <div className="menuProfile">
              <div className="profileImg">
                <img src={img1} alt="" />
              </div>
              <div className="image-upload">
                <img src={img2} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="navigator-contaner">
        <div className="navigator-content">
            <div className="navigator-flex ">
                <div className="navigator-flex-Parent">
                    <div className="left-navigator">
                      <div className="left-navigato-container">
                        <div className="left-navigator-content">
                            <div className="left-navigator-title">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 6.66497C16.5737 6.66497 17.0832 7.03221 17.2647 7.57666L19.0539 12.9442L24.4214 14.7334C24.9659 14.9149 25.3331 15.4244 25.3331 15.9983C25.3331 16.5722 24.9659 17.0817 24.4214 17.2632L19.0539 19.0524L17.2647 24.4199C17.0832 24.9644 16.5737 25.3316 15.9998 25.3316C15.4259 25.3316 14.9163 24.9644 14.7349 24.4199L12.9457 19.0524L7.57813 17.2632C7.03368 17.0817 6.66644 16.5722 6.66644 15.9983C6.66644 15.4244 7.03368 14.9149 7.57813 14.7334L12.9457 12.9442L14.7349 7.57666C14.9163 7.03221 15.4259 6.66497 15.9998 6.66497ZM15.9998 12.2147L15.2647 14.4199C15.132 14.8181 14.8195 15.1305 14.4214 15.2632L12.2161 15.9983L14.4214 16.7334C14.8195 16.8661 15.132 17.1785 15.2647 17.5767L15.9998 19.7819L16.7349 17.5767C16.8676 17.1785 17.18 16.8661 17.5781 16.7334L19.7834 15.9983L17.5781 15.2632C17.18 15.1305 16.8676 14.8181 16.7349 14.4199L15.9998 12.2147Z" fill="#36363E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.568 4.20042C18.8034 3.50268 19.5599 3.12789 20.2576 3.3633C20.8087 3.54923 21.3473 3.77089 21.8696 4.02675C22.5309 4.3507 22.8044 5.1494 22.4804 5.8107C22.1565 6.47199 21.3578 6.74546 20.6965 6.42151C20.278 6.21655 19.8466 6.03898 19.4052 5.89003C18.7074 5.65462 18.3326 4.89816 18.568 4.20042ZM13.3789 4.21093C13.6178 4.90748 13.2468 5.66581 12.5502 5.90472C12.3312 5.97985 12.1129 6.06259 11.8958 6.15309C11.6787 6.2436 11.4663 6.34036 11.2588 6.44306C10.5988 6.76963 9.79898 6.49932 9.47241 5.83932C9.14584 5.17931 9.41615 4.37953 10.0762 4.05297C10.3351 3.92485 10.5997 3.80431 10.8698 3.69171C11.1399 3.57912 11.4118 3.47602 11.6851 3.3823C12.3816 3.14339 13.1399 3.51438 13.3789 4.21093ZM26.1587 9.47095C26.8188 9.14438 27.6185 9.41468 27.9451 10.0747C28.0732 10.3336 28.1938 10.5982 28.3063 10.8683C28.4189 11.1384 28.522 11.4103 28.6158 11.6836C28.8547 12.3801 28.4837 13.1385 27.7871 13.3774C27.0906 13.6163 26.3322 13.2453 26.0933 12.5488C26.0182 12.3297 25.9355 12.1115 25.845 11.8944C25.7545 11.6772 25.6577 11.4649 25.555 11.2573C25.2284 10.5973 25.4987 9.79752 26.1587 9.47095ZM5.81216 9.51766C6.47345 9.84161 6.74693 10.6403 6.42298 11.3016C6.21801 11.72 6.04044 12.1514 5.8915 12.5929C5.65609 13.2907 4.89962 13.6654 4.20188 13.43C3.50415 13.1946 3.12936 12.4382 3.36476 11.7404C3.5507 11.1893 3.77235 10.6508 4.02822 10.1285C4.35217 9.46719 5.15086 9.19371 5.81216 9.51766ZM27.7976 18.5666C28.4954 18.802 28.8702 19.5584 28.6348 20.2562C28.4488 20.8073 28.2272 21.3458 27.9713 21.8681C27.6474 22.5294 26.8487 22.8029 26.1874 22.4789C25.5261 22.155 25.2526 21.3563 25.5765 20.695C25.7815 20.2766 25.9591 19.8451 26.108 19.4037C26.3434 18.7059 27.0999 18.3312 27.7976 18.5666ZM4.2124 18.6192C4.90894 18.3803 5.66728 18.7513 5.90618 19.4478C5.98131 19.6669 6.06405 19.8851 6.15456 20.1022C6.24506 20.3194 6.34182 20.5317 6.44452 20.7393C6.77109 21.3993 6.50079 22.1991 5.84078 22.5257C5.18078 22.8522 4.381 22.5819 4.05443 21.9219C3.92631 21.663 3.80577 21.3984 3.69318 21.1283C3.58058 20.8581 3.47749 20.5863 3.38376 20.313C3.14485 19.6165 3.51585 18.8581 4.2124 18.6192ZM22.5271 26.1573C22.8537 26.8173 22.5834 27.6171 21.9234 27.9436C21.6644 28.0718 21.3998 28.1923 21.1297 28.3049C20.8596 28.4175 20.5877 28.5206 20.3145 28.6143C19.6179 28.8532 18.8596 28.4822 18.6207 27.7857C18.3818 27.0891 18.7528 26.3308 19.4493 26.0919C19.6684 26.0168 19.8866 25.934 20.1037 25.8435C20.3208 25.753 20.5332 25.6562 20.7408 25.5535C21.4008 25.227 22.2005 25.4973 22.5271 26.1573ZM9.51913 26.1859C9.84308 25.5246 10.6418 25.2511 11.3031 25.5751C11.7215 25.7801 12.1529 25.9576 12.5944 26.1066C13.2921 26.342 13.6669 27.0984 13.4315 27.7962C13.1961 28.4939 12.4396 28.8687 11.7419 28.6333C11.1908 28.4474 10.6523 28.2257 10.1299 27.9698C9.46865 27.6459 9.19518 26.8472 9.51913 26.1859Z" fill="#36363E"/></svg>
                                 <h3> AI Navigator</h3>
                            </div>
                            <div className="navigator-question">
                              <div className="left-question">
                                <img src={img1} />
                              </div>
                              <div className="right-question">
                                <div className="right-question-content">
                                  <div className="top-content">
                                    <p>You</p>
                                    <span>02:22pm</span>
                                  </div>
                                  <div className="bottom-content">
                                    <div className="input-box">
                                    <input type="text"
                                     placeholder='Ask me anything about GRC'
                                     value={inputText}
                                     onChange={(e) =>setInputText(e.target.value)}
                                     onKeyDown={handleKey} />
                                  </div>
                                  <div className="question-suggestion">
                                    <div className="suggestion-text">
                                      <p>suggestion:</p>
                                      <span>What question will you ask to <strong># Audit</strong> control ISO-1234?</span> 
                                    </div>
                                    <div onClick={() => setIsSend(!isSend)} className="suggestion-icon">
                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 8.2846V9.99888C13 11.5902 12.3679 13.1163 11.2426 14.2415C10.1174 15.3667 8.5913 15.9989 7 15.9989M7 15.9989C5.4087 15.9989 3.88258 15.3667 2.75736 14.2415C1.63214 13.1163 1 11.5902 1 9.99888V8.2846M7 15.9989V19.4275M3.57143 19.4275H10.4286M7 0.570312C6.31801 0.570313 5.66396 0.84123 5.18173 1.32347C4.69949 1.8057 4.42857 2.45976 4.42857 3.14174V9.99888C4.42857 10.6809 4.69949 11.3349 5.18173 11.8172C5.66396 12.2994 6.31801 12.5703 7 12.5703C7.68199 12.5703 8.33604 12.2994 8.81827 11.8172C9.30051 11.3349 9.57143 10.6809 9.57143 9.99888V3.14174C9.57143 2.45976 9.30051 1.8057 8.81827 1.32347C8.33604 0.84123 7.68199 0.570313 7 0.570312Z" stroke="#36363E" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9271 3.07245C20.2251 2.37045 19.231 2.09445 18.265 2.33545L5.15221 5.61346C3.40421 6.05046 2.23808 7.55444 2.25108 9.35644C2.26408 11.1584 3.45021 12.6454 5.20421 13.0584L9.85021 14.1515L10.9432 18.7964C11.3562 20.5504 12.8431 21.7364 14.6451 21.7494C14.6541 21.7494 14.6642 21.7494 14.6732 21.7494C16.4622 21.7494 17.9521 20.5864 18.3871 18.8484L21.6651 5.73544C21.9051 4.77044 21.6301 3.77545 20.9271 3.07245ZM20.2091 5.37146L16.931 18.4844C16.602 19.7974 15.5412 20.2574 14.6542 20.2494C13.8092 20.2434 12.7132 19.7695 12.4032 18.4535L11.2992 13.7624L15.5301 9.53045C15.8231 9.23745 15.8231 8.76245 15.5301 8.46945C15.2371 8.17645 14.7621 8.17645 14.4691 8.46945L10.2372 12.7014L5.54601 11.5974C4.22901 11.2874 3.75513 10.1905 3.74913 9.34546C3.74313 8.50046 4.20202 7.39645 5.51402 7.06845L18.6271 3.79043C18.7341 3.76343 18.8421 3.75045 18.9481 3.75045C19.2881 3.75045 19.6161 3.88445 19.8651 4.13345C20.1921 4.45945 20.3211 4.92246 20.2091 5.37146Z" fill="#25314C"/></svg>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className= {isSend ? "navigator-guide": "d-none"} >
                              <div className="left-guide">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#D4E5F7"/><rect width="48" height="48" rx="24" fill="white" fill-opacity="0.2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 14.665C24.5737 14.665 25.0832 15.0322 25.2647 15.5767L27.0539 20.9442L32.4214 22.7334C32.9659 22.9149 33.3331 23.4244 33.3331 23.9983C33.3331 24.5722 32.9659 25.0817 32.4214 25.2632L27.0539 27.0524L25.2647 32.4199C25.0832 32.9644 24.5737 33.3316 23.9998 33.3316C23.4259 33.3316 22.9163 32.9644 22.7349 32.4199L20.9457 27.0524L15.5781 25.2632C15.0337 25.0817 14.6664 24.5722 14.6664 23.9983C14.6664 23.4244 15.0337 22.9149 15.5781 22.7334L20.9457 20.9442L22.7349 15.5767C22.9163 15.0322 23.4259 14.665 23.9998 14.665ZM23.9998 20.2147L23.2647 22.4199C23.132 22.8181 22.8195 23.1305 22.4214 23.2632L20.2161 23.9983L22.4214 24.7334C22.8195 24.8661 23.132 25.1785 23.2647 25.5767L23.9998 27.7819L24.7349 25.5767C24.8676 25.1785 25.18 24.8661 25.5781 24.7334L27.7834 23.9983L25.5781 23.2632C25.18 23.1305 24.8676 22.8181 24.7349 22.4199L23.9998 20.2147Z" fill="#0152FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.568 12.2004C26.8034 11.5027 27.5599 11.1279 28.2576 11.3633C28.8087 11.5492 29.3473 11.7709 29.8696 12.0268C30.5309 12.3507 30.8044 13.1494 30.4804 13.8107C30.1565 14.472 29.3578 14.7455 28.6965 14.4215C28.278 14.2165 27.8466 14.039 27.4052 13.89C26.7074 13.6546 26.3326 12.8982 26.568 12.2004ZM21.3789 12.2109C21.6178 12.9075 21.2468 13.6658 20.5502 13.9047C20.3312 13.9798 20.1129 14.0626 19.8958 14.1531C19.6787 14.2436 19.4663 14.3404 19.2588 14.4431C18.5988 14.7696 17.799 14.4993 17.4724 13.8393C17.1458 13.1793 17.4161 12.3795 18.0762 12.053C18.3351 11.9248 18.5997 11.8043 18.8698 11.6917C19.1399 11.5791 19.4118 11.476 19.6851 11.3823C20.3816 11.1434 21.1399 11.5144 21.3789 12.2109ZM34.1587 17.4709C34.8188 17.1444 35.6185 17.4147 35.9451 18.0747C36.0732 18.3336 36.1938 18.5982 36.3063 18.8683C36.4189 19.1384 36.522 19.4103 36.6158 19.6836C36.8547 20.3801 36.4837 21.1385 35.7871 21.3774C35.0906 21.6163 34.3322 21.2453 34.0933 20.5488C34.0182 20.3297 33.9355 20.1115 33.845 19.8944C33.7545 19.6772 33.6577 19.4649 33.555 19.2573C33.2284 18.5973 33.4987 17.7975 34.1587 17.4709ZM13.8122 17.5177C14.4735 17.8416 14.7469 18.6403 14.423 19.3016C14.218 19.72 14.0404 20.1514 13.8915 20.5929C13.6561 21.2907 12.8996 21.6654 12.2019 21.43C11.5041 21.1946 11.1294 20.4382 11.3648 19.7404C11.5507 19.1893 11.7724 18.6508 12.0282 18.1285C12.3522 17.4672 13.1509 17.1937 13.8122 17.5177ZM35.7976 26.5666C36.4954 26.802 36.8702 27.5584 36.6348 28.2562C36.4488 28.8073 36.2272 29.3458 35.9713 29.8681C35.6474 30.5294 34.8487 30.8029 34.1874 30.4789C33.5261 30.155 33.2526 29.3563 33.5765 28.695C33.7815 28.2766 33.9591 27.8451 34.108 27.4037C34.3434 26.7059 35.0999 26.3312 35.7976 26.5666ZM12.2124 26.6192C12.9089 26.3803 13.6673 26.7513 13.9062 27.4478C13.9813 27.6669 14.0641 27.8851 14.1546 28.1022C14.2451 28.3194 14.3418 28.5317 14.4445 28.7393C14.7711 29.3993 14.5008 30.1991 13.8408 30.5257C13.1808 30.8522 12.381 30.5819 12.0544 29.9219C11.9263 29.663 11.8058 29.3984 11.6932 29.1283C11.5806 28.8581 11.4775 28.5863 11.3838 28.313C11.1449 27.6165 11.5158 26.8581 12.2124 26.6192ZM30.5271 34.1573C30.8537 34.8173 30.5834 35.6171 29.9234 35.9436C29.6644 36.0718 29.3998 36.1923 29.1297 36.3049C28.8596 36.4175 28.5877 36.5206 28.3145 36.6143C27.6179 36.8532 26.8596 36.4822 26.6207 35.7857C26.3818 35.0891 26.7528 34.3308 27.4493 34.0919C27.6684 34.0168 27.8866 33.934 28.1037 33.8435C28.3208 33.753 28.5332 33.6562 28.7408 33.5535C29.4008 33.227 30.2005 33.4973 30.5271 34.1573ZM17.5191 34.1859C17.8431 33.5246 18.6418 33.2511 19.3031 33.5751C19.7215 33.7801 20.1529 33.9576 20.5944 34.1066C21.2921 34.342 21.6669 35.0984 21.4315 35.7962C21.1961 36.4939 20.4396 36.8687 19.7419 36.6333C19.1908 36.4474 18.6523 36.2257 18.1299 35.9698C17.4686 35.6459 17.1952 34.8472 17.5191 34.1859Z" fill="#0152FF"/></svg>
                              </div>
                              <div className="right-guide">
                              <div className="right-guide-content">
                                  <div className="top-content">
                                    <p>AI Navigator</p>
                                    <span>02:22pm</span>
                                  </div>
                                  <div className="bottom-content">
                                    <p>Implementing audit control in a Governance, Risk, and Compliance (GRC) tool requires setting up processes and configurations that enable tracking, monitoring, and reporting of compliance and risk-related activities. Here’s a structured approach:</p>
                                    <div className="bottom-content-text">
                                      <h1>1. Define Audit Control Objectives</h1>
                                       <p>   Identify key areas to audit (e.g., compliance with security policies, access controls, regulatory requirements). </p>
                                       <p>  Determine audit frequency and scope. </p>
                                       <p>  Align audit controls with frameworks like ISO 27001, NIST, SOX, HIPAA, etc. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>2. Configure Audit Logging & Monitoring</h1>
                                      <p> Enable detailed logging for key activities (e.g., user access, policy changes, risk assessments). </p>
                                        <p> Ensure logs capture who, what, when, and where changes occur. </p>
                                        <p> Implement real-time monitoring and alerting for critical actions. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>3. Role-Based Access Control (RBAC)</h1>
                                      <p> Define user roles and permissions to ensure only authorized personnel can access sensitive data.</p>
                                        <p> Enforce least privilege access to prevent unauthorized changes. Log all privileged user activities for audits. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>4. Automate Compliance Checks</h1>
                                      <p> Set up automated scans to detect non-compliance issues. </p>
                                      <p>Schedule periodic risk assessments and control effectiveness reviews ards for real-time compliance status tracking. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>5. Incident and Risk Management Integration</h1>
                                      <p> Ensure the GRC tool records and tracks security incidents and compliance violations. </p>
                                       <p> Link audit findings with corrective actions and risk mitigation strategies. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>6. Reporting & Documentation</h1>
                                      <p>Generate audit trails and reports that detail compliance status and risks. </p>
                                        <p> Maintain historical records for regulatory audits.</p>
                                        <p>  Use customizable reports to meet different audit and compliance needs. </p>
                                    </div>
                                    <div className="bottom-content-text">
                                      <h1>7. Implement Continuous Improvement</h1>
                                      <p>Regularly review and refine audit controls. </p>
                                       <p> Conduct internal audits to validate control effectiveness. </p>
                                       <p> Train teams on audit best practices and compliance requirements. </p>
                                    </div>
                                    <p>Would you like guidance on a specific GRC tool, such as ServiceNow GRC, SAP GRC, or Archer GRC?</p>
                                  </div>
                                  </div>
                              </div>
                              </div>
                        </div>
                        <div className={isSend ? "navigator-AI": "d-none"} >
                        <div className="navigator-AI-content">
                              <div className="left-question">
                                <img src={img1} />
                              </div>
                              <div className="right-question">
                                <div className="right-question-content">
                                  <div className="top-content">
                                    <p>You</p>
                                    <span>02:22pm</span>
                                  </div>
                                  <div className="bottom-content">
                                    <div className="input-box">
                                    <input type="text"
                                     placeholder='Ask me anything about GRC'
                                    //  value={inputText2}
                                    //  onChange={(e) =>setInputText2(e.target.value)}
                                    //  onKeyDown={handleKey}
                                     />
                                  </div>
                                  <div className="question-suggestion">
                                    <div className="suggestion-text">
                                      <p>suggestion:</p>
                                      <span>Helper text</span>
                                    </div>
                                    <div className="suggestion-icon">
                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 8.2846V9.99888C13 11.5902 12.3679 13.1163 11.2426 14.2415C10.1174 15.3667 8.5913 15.9989 7 15.9989M7 15.9989C5.4087 15.9989 3.88258 15.3667 2.75736 14.2415C1.63214 13.1163 1 11.5902 1 9.99888V8.2846M7 15.9989V19.4275M3.57143 19.4275H10.4286M7 0.570312C6.31801 0.570313 5.66396 0.84123 5.18173 1.32347C4.69949 1.8057 4.42857 2.45976 4.42857 3.14174V9.99888C4.42857 10.6809 4.69949 11.3349 5.18173 11.8172C5.66396 12.2994 6.31801 12.5703 7 12.5703C7.68199 12.5703 8.33604 12.2994 8.81827 11.8172C9.30051 11.3349 9.57143 10.6809 9.57143 9.99888V3.14174C9.57143 2.45976 9.30051 1.8057 8.81827 1.32347C8.33604 0.84123 7.68199 0.570313 7 0.570312Z" stroke="#36363E" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9271 3.07245C20.2251 2.37045 19.231 2.09445 18.265 2.33545L5.15221 5.61346C3.40421 6.05046 2.23808 7.55444 2.25108 9.35644C2.26408 11.1584 3.45021 12.6454 5.20421 13.0584L9.85021 14.1515L10.9432 18.7964C11.3562 20.5504 12.8431 21.7364 14.6451 21.7494C14.6541 21.7494 14.6642 21.7494 14.6732 21.7494C16.4622 21.7494 17.9521 20.5864 18.3871 18.8484L21.6651 5.73544C21.9051 4.77044 21.6301 3.77545 20.9271 3.07245ZM20.2091 5.37146L16.931 18.4844C16.602 19.7974 15.5412 20.2574 14.6542 20.2494C13.8092 20.2434 12.7132 19.7695 12.4032 18.4535L11.2992 13.7624L15.5301 9.53045C15.8231 9.23745 15.8231 8.76245 15.5301 8.46945C15.2371 8.17645 14.7621 8.17645 14.4691 8.46945L10.2372 12.7014L5.54601 11.5974C4.22901 11.2874 3.75513 10.1905 3.74913 9.34546C3.74313 8.50046 4.20202 7.39645 5.51402 7.06845L18.6271 3.79043C18.7341 3.76343 18.8421 3.75045 18.9481 3.75045C19.2881 3.75045 19.6161 3.88445 19.8651 4.13345C20.1921 4.45945 20.3211 4.92246 20.2091 5.37146Z" fill="#25314C"/></svg>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
                <div  className={`navigator-flex-right-Parent ${isSidebarOpen ? "expanded" : "collapsed"}`}>
                    <div className="right-navigator">
                    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="toggle-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5C1 6.60949 1.06075 7.43281 1.19863 8.0532C1.33399 8.66225 1.53001 9.01274 1.75864 9.24136C1.98726 9.46999 2.33775 9.66601 2.9468 9.80137C3.56719 9.93925 4.39051 10 5.5 10C6.60949 10 7.43281 9.93925 8.0532 9.80137C8.66225 9.66601 9.01274 9.46999 9.24136 9.24136C9.46999 9.01274 9.66601 8.66225 9.80137 8.0532C9.93925 7.43281 10 6.60949 10 5.5C10 4.39051 9.93925 3.56719 9.80137 2.9468C9.66601 2.33775 9.46999 1.98726 9.24136 1.75864C9.01274 1.53001 8.66225 1.33399 8.0532 1.19863C7.43281 1.06075 6.60949 1 5.5 1C4.39051 1 3.56719 1.06075 2.9468 1.19863C2.33775 1.33399 1.98726 1.53001 1.75864 1.75864C1.53001 1.98726 1.33399 2.33775 1.19863 2.9468C1.06075 3.56719 1 4.39051 1 5.5Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 18.5C1 19.6095 1.06075 20.4328 1.19863 21.0532C1.33399 21.6622 1.53001 22.0127 1.75864 22.2414C1.98726 22.47 2.33775 22.666 2.9468 22.8014C3.56719 22.9392 4.39051 23 5.5 23C6.60949 23 7.43281 22.9392 8.0532 22.8014C8.66225 22.666 9.01274 22.47 9.24136 22.2414C9.46999 22.0127 9.66601 21.6622 9.80137 21.0532C9.93925 20.4328 10 19.6095 10 18.5C10 17.3905 9.93925 16.5672 9.80137 15.9468C9.66601 15.3378 9.46999 14.9873 9.24136 14.7586C9.01274 14.53 8.66225 14.334 8.0532 14.1986C7.43281 14.0608 6.60949 14 5.5 14C4.39051 14 3.56719 14.0608 2.9468 14.1986C2.33775 14.334 1.98726 14.53 1.75864 14.7586C1.53001 14.9873 1.33399 15.3378 1.19863 15.9468C1.06075 16.5672 1 17.3905 1 18.5Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 5.5C14 6.60949 14.0608 7.43281 14.1986 8.0532C14.334 8.66225 14.53 9.01274 14.7586 9.24136C14.9873 9.46999 15.3378 9.66601 15.9468 9.80137C16.5672 9.93925 17.3905 10 18.5 10C19.6095 10 20.4328 9.93925 21.0532 9.80137C21.6622 9.66601 22.0127 9.46999 22.2414 9.24136C22.47 9.01274 22.666 8.66225 22.8014 8.0532C22.9392 7.43281 23 6.60949 23 5.5C23 4.39051 22.9392 3.56719 22.8014 2.9468C22.666 2.33775 22.47 1.98726 22.2414 1.75864C22.0127 1.53001 21.6622 1.33399 21.0532 1.19863C20.4328 1.06075 19.6095 1 18.5 1C17.3905 1 16.5672 1.06075 15.9468 1.19863C15.3378 1.33399 14.9873 1.53001 14.7586 1.75864C14.53 1.98726 14.334 2.33775 14.1986 2.9468C14.0608 3.56719 14 4.39051 14 5.5Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 18.5C14 19.6095 14.0608 20.4328 14.1986 21.0532C14.334 21.6622 14.53 22.0127 14.7586 22.2414C14.9873 22.47 15.3378 22.666 15.9468 22.8014C16.5672 22.9392 17.3905 23 18.5 23C19.6095 23 20.4328 22.9392 21.0532 22.8014C21.6622 22.666 22.0127 22.47 22.2414 22.2414C22.47 22.0127 22.666 21.6622 22.8014 21.0532C22.9392 20.4328 23 19.6095 23 18.5C23 17.3905 22.9392 16.5672 22.8014 15.9468C22.666 15.3378 22.47 14.9873 22.2414 14.7586C22.0127 14.53 21.6622 14.334 21.0532 14.1986C20.4328 14.0608 19.6095 14 18.5 14C17.3905 14 16.5672 14.0608 15.9468 14.1986C15.3378 14.334 14.9873 14.53 14.7586 14.7586C14.53 14.9873 14.334 15.3378 14.1986 15.9468C14.0608 16.5672 14 17.3905 14 18.5Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <div className={`${isSidebarOpen ? "toggle-dropdown " : "close"}`}>
                    <div className="toggle-dropdown-content">
                      <div className="dropdown-content-container">
                        <div className="dropdown-content-title">
                          <div className="left-title">
                            <h3>Today</h3>
                          </div>
                          <div className="right-title">
                            <h3>12</h3>
                            <h3>Total</h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2959 9.79586L12.7959 17.2959C12.6914 17.4007 12.5672 17.484 12.4304 17.5407C12.2937 17.5975 12.1471 17.6267 11.999 17.6267C11.851 17.6267 11.7043 17.5975 11.5676 17.5407C11.4309 17.484 11.3067 17.4007 11.2021 17.2959L3.70215 9.79586C3.4908 9.58451 3.37207 9.29787 3.37207 8.99898C3.37207 8.7001 3.4908 8.41345 3.70215 8.20211C3.91349 7.99076 4.20014 7.87203 4.49902 7.87203C4.79791 7.87203 5.08455 7.99076 5.2959 8.20211L12 14.9062L18.704 8.20117C18.9154 7.98983 19.202 7.87109 19.5009 7.87109C19.7998 7.87109 20.0864 7.98983 20.2978 8.20117C20.5091 8.41252 20.6278 8.69916 20.6278 8.99805C20.6278 9.29693 20.5091 9.58358 20.2978 9.79492L20.2959 9.79586Z" fill="#1E293B"/></svg>
                            </div>
                      </div>
                      <div className="dropdown-item">
                        <ul>
                          <li>How can i implement audit control in grc tool?</li>
                          <li>Audit room</li>
                          <li>Gap assessment process</li>
                          <li>SOC 2 Guidance </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-content-container">
                        <div className="dropdown-content-title">
                          <div className="left-title">
                            <h3>Previous 7 Days</h3>
                          </div>
                          <div className="right-title">
                            <h3>27</h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2959 9.79586L12.7959 17.2959C12.6914 17.4007 12.5672 17.484 12.4304 17.5407C12.2937 17.5975 12.1471 17.6267 11.999 17.6267C11.851 17.6267 11.7043 17.5975 11.5676 17.5407C11.4309 17.484 11.3067 17.4007 11.2021 17.2959L3.70215 9.79586C3.4908 9.58451 3.37207 9.29787 3.37207 8.99898C3.37207 8.7001 3.4908 8.41345 3.70215 8.20211C3.91349 7.99076 4.20014 7.87203 4.49902 7.87203C4.79791 7.87203 5.08455 7.99076 5.2959 8.20211L12 14.9062L18.704 8.20117C18.9154 7.98983 19.202 7.87109 19.5009 7.87109C19.7998 7.87109 20.0864 7.98983 20.2978 8.20117C20.5091 8.41252 20.6278 8.69916 20.6278 8.99805C20.6278 9.29693 20.5091 9.58358 20.2978 9.79492L20.2959 9.79586Z" fill="#1E293B"/></svg>
                            </div>
                      </div>
                      <div className="dropdown-item">
                        <ul>
                          <li>How to create framework </li>
                          <li>Compliance</li>
                          <li>Control Audit guidance</li>
                          <li>how to import requirement using template </li>
                          <li>folsight</li>
                        </ul>
                      </div>
                    </div>
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

export default Navigator

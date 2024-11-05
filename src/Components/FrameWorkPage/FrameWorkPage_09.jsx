import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/frameworkPages_01.scss'

const FrameWorkPage_09 = ({page}) => {
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);

    const OpenHandle = () => {
        setOpen(!open);
    }
  return (
    <div>
       <div className= {page === 9 ? "FrameWorkPageBodyChild":"d-none"}>
                        <div className="FrameWorkPageBodyChildTittle">
                            <h1>What Are the Different Roles for Organization Admins in Deel?</h1>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>You can establish a hierarchical organization structure to reflect your organization's unique needs and use it to filter, search, and identify your workforce.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>This article guides clients on how they can configure organization structure, define worker relationships, establish departments, and assign teams and roles to individuals.</p>
                            </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Please note that Deel only supports linear hierarchical reporting structures. We cannot support complex manager reporting structures that permit loops (sometimes called circular reporting lines).</p>
                        </div>
                        <div className="FrameWorkPageBodyChildTextLink">
                            <h2>in this Article</h2>
                            <ul>
                                <li> <a href="#">What is an Organization Structure, Worker Relations and Organization Positions </a></li>
                                <li> <a href="#"> How to Configure Organization Structure </a></li>
                                <li> <a href="#"> How to define worker relations</a></li>
                                <li> <a href="#"> How to view a worker position and assign worker roles</a></li>
                                <p style={{marginBottom:"0"}}>How to view Org Structure </p>
                                <li> <a href="#"> Frequently Asked Questions</a></li>
                            </ul>
                        </div>
                        <div className="FrameWorkPageBodyChildarticle">
                         <div className="article-step" style={{margin:"15% 0"}}>
                            <h2 style={{marginBottom:"40px",fontWeight:"300"}}>What is an Organization Structure, Worker Relations, and Organization Positions </h2>
                            <p><span>Organizational structure</span> defines the formal arrangement of roles and departments within your organization. It establishes the hierarchy, roles, responsibilities, and reporting relationships within the organization. An org structure lets you group and view your workforce on the platform. </p>
                            <p><span>Worker relations</span> refer to the interactions and collaboration between the workers in an organization. Worker relations play a significant role in shaping the organization structure by defining how teams and departments interact with one another.</p>
                            <p><span>Organizational positions</span> are specific positions or roles within an organization. Each role has its own set of responsibilities, tasks, and authority levels. These roles are organized hierarchically within the organizational structure.</p>
                        </div>
                        <div className="article-step">
                            <h2 style={{marginBottom:"20px",fontWeight:"300"}}> How to Configure Organization Structure </h2>
                            <h3 style={{fontSize:"1.3rem"}} >✅ Step 1 – Organization Settings icon <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg> Org chart and Structure card</h3>
                            <p>Go to the <span>Organization Settings</span> icon on your Homepage and select the <span> Org chart and structure</span> card.</p>
                            <p>In the Org Chart and Structures page, click on <span>Org Structures tab</span>. </p>
                            <div className="article-img">
                            <img src="https://help.letsdeel.com/hc/article_attachments/28801064399121" alt="article-image" />
                            <div className="error-box">
                            <svg style={{width:"10%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
                          <p style={{marginTop:"0",fontSize:"15px"}}>  Please note that the Department is a pre-enabled organization structure that is directly reflected in the Org Chart and is used to group and filter Org Charts by departments.</p>
                            </div>
                        </div>
                        </div>
                         <div className="article-step">
                            <h3 style={{fontSize:"1.3rem"}} >✅ Step 2 – Click on Create New Structure </h3>
                            <p>Clients can now set their org structure to group workers in different structures, view org charts and correctly configure approvals.</p>
                            <p>Please enter the org structure details and define the levels and sublevels. You can also choose to make this structure mandatory. This will ensure that during contract creation or editing of a worker profile, the worker will be mandatorily assigned to this structure. </p>
                            <p>Clients can also choose if they want their employees to be assigned to multiple teams and departments (structures).</p>
                            <div className="article-img">
                            <img src="https://help.letsdeel.com/hc/article_attachments/28801064409489" alt="article-image" />
                        </div>
                        <p style={{margin:"-12% 0 10%"}}> You can now view the created Org structure by going to the People Icon on your Hompage and clicking on View Org Chart.  </p>
                        </div>
                        <div className="article-step">
                            <h2 style={{marginBottom:"20px",fontWeight:"400"}}> How to define worker relations</h2>
                            <h3 style={{fontSize:"1.3rem"}} >✅ Step 1 – Organization Settings Icon  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>  Org Chart and Structure card</h3>
                            <p>Go to the <span>Organization Settings</span> icon on your Homepage and select the <span> Org chart and structure</span> card.</p>
                            <p>In the Org Chart and Structures page, click on <span>Org Structures tab</span>. </p>
                            <div className="article-img">
                            <img src="https://help.letsdeel.com/hc/article_attachments/28801924024977" alt="article-image" />
                        </div>
                        </div>
                        <div className="article-step">
                            <h3 style={{fontSize:"1.5rem"}} >✅ Step 2 – Click on Create Relationship </h3>
                            <p>You can now define a name for the primary party and secondary party. </p>
                            <p>Clients can also choose to make a new or existing worker relation mandatory. This will ensure during that contract creation or while editing a worker's profile, workers will be mandatorily assigned as one of the parties in the worker relation.</p>
                            <div className="article-img">
                            <img style={{width:"30%"}}  src="https://help.letsdeel.com/hc/article_attachments/28801969353873" alt="article-image" />
                            <p style={{marginTop:"-20px"}}>Deel only supports linear hierarchical reporting structures.  </p>
                            <div className="error-box">
                            <svg style={{width:"10%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
                          <p style={{marginTop:"0",fontSize:"15px"}}> Please note that the <strong>Direct Manager</strong> is a pre-enabled worker relation that is directly reflected in Org Charts and is used to group and filter org charts by Direct Managers.</p>
                            </div>
                        </div>
                        </div>
                        <div className="article-step">
                            <h2 style={{marginBottom:"20px",fontWeight:"400" , fontSize:"1.8rem"}}> How to view and assign a Worker Organization Position</h2>
                            <h3>✅ Step 1 – Go  to the People Icon and Click on All People tab</h3>
                            <p style={{background:"#fff", padding:"20px 0 0", fontSize:"14px",marginBottom:"10%"}} >In the All People tab search for the applicable worker. </p>
                        </div>
                        <div className="article-step">
                            <h3>✅ Step 2 – View the Worker's Organization Position </h3>
                            <p>In the worker profile, scroll down to Organization Position, here you can view the worker position based on the organization structure created by you. </p>
                            <p>If the worker role is not assigned then you can click on edit and assign a worker role in the Organization Position section. You can also add the worker to multiple teams. </p>
                            <p>Click confirm and update. </p> 
                            <div className="article-img">
                            <img src="https://wiki.deel.network/internal/pkb/deel-hr/Org-Structure/screenshot_2024-05-10_at_14.26.32.png" alt="article-image" />
                        </div>
                            </div>
                            <div className="article-step">
                            <h2 style={{marginBottom:"20px",fontWeight:"400" , fontSize:"1.8rem"}}> How to view Org Structure</h2>
                            <h3>✅ Step 1 – Go  to the People Icon and Click on All People tab</h3>
                            <div className="article-img">
                            <img src="https://help.letsdeel.com/hc/article_attachments/28803357430801" alt="article-image" />
                        </div>
                       <p>Clients can also view their organization structure by clicking on the <span>Organization Setting Icon <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg> Org Chart and Structure</span> card.</p>
                        </div>
                        <div className="article-step">
                            <h3> ✅ Step 2 – Group the Org Chart </h3>
                            <p>Clients can group the org chart on the basis of worker <span>relations, org structures,</span> and<span>  worker country.</span> </p>

                            <p>Clients can also visualize multiple org structures within an org chart.  </p> 
                            </div>
                        </div>
                        <div className="FrequentlyContainer">
                        <h2>Frequently Asked Questions</h2>
                        <div className="Frequently">
                            <div onClick={OpenHandle} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>How is the organizational structure displayed in the worker profile?</p>
                                </div>
                                <div   className="Frequently_boxRight">
                                <button className={open ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button className={open ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                            <div className={open ? "Frequently_boxTest": " close_box"}>
                                <p>  Once you have configured your organization structure it is displayed in terms of <span> Organization Position</span>, the worker's <span> Direct Manager</span>, and existing <span> Worker Relations</span> on the worker's profile.</p>
                                <p>You can click on the People Tab on your Homepage and select the applicable worker.</p>
                                <p>In the worker profile, scroll down to view your worker's <span> organization position</span>, their <span> Direct Manager</span>, and existing <span> worker relations</span>. </p>
                                </div>
                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen2(!open2)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>What manager-direct report structure is not supported?</p>
                                </div>
                                <div className="Frequently_boxRight">
                                <button  className={open2 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open2 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                <div className={open2 ? "Frequently_boxTest": " close_box"}>
                                    <p>Deel does not support complex manager reporting structures that permit loops (sometimes called circular reporting lines).  This means that a People Manager will not be able to directly report to their own managers.</p>
                                    <p>n example of a circular reporting structure that is not supported in the Deel HR Org Chart hierarchy is : </p>
                                    <p style={{background:"#fff"}}> (A -> B -> C -> A) or (A -> A). </p>
                                    <p>John reports to Jessica reports to John is an example of an org chart hiearchy that is not supported in the current framework.</p>
                                    <p>Deel only supports linear hierarchical reporting structures. </p>
                                </div>

                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen3(!open3)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>How do I export the Org Chart?</p>
                                </div>
                                <div className="Frequently_boxRight">
                                <button className={open3 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open3 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                 <div className={open3 ? "Frequently_boxTest": " close_box"}>
                                   <p>You can export High-quality Org Chart for Hierarchical or Org Structure views with filters applied.</p>
                                    <p>In the Org Chart page, click the export button and select the information to display in the exported org chart.</p>
                                   <img src="https://wiki.deel.network/internal/pkb/deel-hr/Org-Structure/relations.png" alt="" />
                                </div>
                        </div>
                        </div>
                        <div className="Frequently_link_box">
                            <div className="Frequently_link_boxLeft linkboxLR">
                            <h3>Recently viewed articles</h3>
                            <ul>
                                <li> <a href="#">Global Payroll Entity Level Permissions</a> </li>
                                <li> <a href="#">What Are The Different Roles For Group Admins In Deel?</a> </li>
                                <li> <a href="#">How to Create Groups and Add Group Admins</a> </li>
                            </ul>
                            </div>
                            <div className="Frequently_link_boxRight linkboxLR">
                            <h3>Related articles </h3>
                            <ul>
                            <li> <a href="#">How to Configure Organization Structure and Worker Relations</a> </li>
                            <li> <a href="#">About Groups on Deel</a> </li>
                                <li> <a href="#">How to Adjust Time Off Balances for Your Workers</a> </li>
                                <li> <a href="#">How to Create Groups and Add Group Admins</a> </li>
                                <li> <a href="#">How to Manage Registration Files</a> </li>
                            </ul>



                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default FrameWorkPage_09

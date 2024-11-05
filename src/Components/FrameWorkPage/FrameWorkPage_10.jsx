import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/frameworkPages_01.scss'

const FrameWorkPage_10 = ({page}) => {
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
    const [open4,setOpen4] = useState(false);
    const [open5,setOpen5] = useState(false);
    const [open6,setOpen6] = useState(false);

    const OpenHandle = () => {
        setOpen(!open);
    }
  return (
    <div>
       <div className= {page === 10 ? "FrameWorkPageBodyChild":"d-none"}>
                        <div className="FrameWorkPageBodyChildTittle">
                            <h1 style={{fontWeight:"500"}}>What Are The Different Roles For Group Admins In Deel?</h1>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p><strong>Note:</strong> This feature is actively being rolled out and may not be available to all clients.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildText" style={{marginTop:"5% "}}>
                            <p>This article explains the entity level permissions available to Global Payroll clients when assigning roles and responsibilities to admins of their organization.
                            Clients can now grant new and existing users rights to perform specific actions within an entity or restrict access to certain actions within the Deel platform.</p>
                            </div>
                        <div className="FrameWorkPageBodyChildText"style={{margin:"4% 0"}}>
                            <strong>Entity Level Roles:</strong>
                            <ul style={{padding:'0'}}>
                                <li> - Payer</li>
                                <li>- Payroll Approver</li>
                                <li>- People Admin</li>
                                <li>  - People & Payroll Admin</li>
                               


                            </ul>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p><strong> Note: </strong><span style={{background:"#e6edfa"}}>Adoption of this feature is optional</span>. All existing users and user permissions will remain unchanged until edited by the client.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildTextLink">
                        <h2 style={{fontSize:"16px", fontWeight:"500", marginTop:"7%"}}>Entity Level Permissions:</h2>
        <table>
            <tbody>
                <tr>
                    <td className="header-cell" rowSpan="2" style={{width:"14%"}}><p>Product Area</p></td>
                    <td className="header-cell"  rowSpan="2" style={{width:"32%"}}><p>Action</p></td>
                    <td className="header-cell" colSpan="4" style={{textAlign:"center" , margin :"auto 0"}}><p>Entity Level Role</p></td>
                </tr>
                <tr>
                    <td className="header-cell"><p>Payer</p></td>
                    <td className="header-cell"><p>Payroll Approver</p></td>
                    <td className="header-cell"><p>People Admin</p></td>
                    <td className="header-cell"><p>People & Payroll Admin</p></td>
                </tr>
                <tr>
                    <td rowSpan="6"><p style={{textAlign:"left", marginLeft:"10px"}}>Payroll Submission</p></td>
                    <td style={{textAlign:"left",padding:"5px 0"}}>View Payroll table</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Submit payroll</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell" colSpan="3">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Approve payroll</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell">Yes</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Upload, download docs</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Comm. center interaction</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Mark as paid</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell">Yes</td>
                </tr>
                <tr>
                    <td rowSpan="2"><p style={{textAlign:"left", marginLeft:"10px"}}>Expenses</p></td>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Create, edit, view, delete</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Approve, Reject</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell">Yes</td>
                    <td className="no-cell">No</td>
                    <td className="no-cell">No</td>
                </tr>
                <tr>
                    <td rowSpan="3"><p style={{textAlign:"left", marginLeft:"10px"}}>Reports</p></td>
                    <td style={{textAlign:"left",padding:"5px 0"}}>GTN, recurring, total payroll summary - View all, download, filter</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="no-cell">No</td>
                    <td className="no-cell">No</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Cost center summary & cost center detailed, Direct Employee Contributions, Direct Employee Deductions, Direct Employee Payment History</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="no-cell">No</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Non GP reports (that show GP details)</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                </tr>
                <tr>
                    <td rowSpan="4"><p style={{textAlign:"left", marginLeft:"10px"}}>Employees</p></td>
                    <td style={{textAlign:"left",padding:"5px 0"}}>View</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Add new</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Assign cost centers</td>
                    <td className="no-cell">No</td>
                    <td className="no-cell">No</td>
                    <td className="yes-cell">Yes</td>
                    <td className="yes-cell">Yes</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Edit job information</td>
                    <td className="yes-cell" colSpan="4">Yes</td>
                </tr>
                <tr>
                    <td rowSpan="3"><p style={{textAlign:"left", marginLeft:"10px"}}>Entity Level Actions</p></td>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Assign role</td>
                    <td className="no-cell" colSpan="4">No</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>View entity details</td>
                    <td className="no-cell" colSpan="4">No</td>
                </tr>
                <tr>
                    <td style={{textAlign:"left",padding:"5px 0"}}>Add entities</td>
                    <td className="no-cell" colSpan="4">No</td>
                </tr>
            </tbody>
        </table>
                        </div>
                        <div className="FrameWorkPageBodyChildTextLink">
                            <strong>Note:</strong> 
                            <ul className='listText'>
                                <li > <div className='dotted'></div><p> The roles' abilities are hard coded, meaning we require a code change for adjusting the permissions or creating new roles</p> </li>
                                <li ><div className='dotted'></div> <p>Any Deel product that is not mentioned in the matrix above will have full access to clients with entity level permissions</p></li>
                            </ul>
                        </div>
                        <div className="FrameWorkPageBodyChildarticle">
                         <div className="article-step">
                            <h2>Set up and Manage Entity Level Permissions  </h2>
                            <h3>✅ Step 1 - Go to Access Management</h3>
                            <p>Click <strong>Organization Settings</strong> in the top right</p>
                            <p>Select <span>View</span> on the <span> Access Management</span> Card to see all of your organization managers and their current roles.</p>
                        </div>
                        <div className="article-step">
                        <h3>✅ Step 2 - Manage Roles and Access </h3>
                        <p>Locate an admin in the list and select the More menu (Three dots icon)</p>
                        </div>
                        </div>
                        <div className="FrequentlyContainer">
                        <p>Select <strong>Assign Role, Manage Access</strong>, or <strong> Remove Access</strong>.</p>
                        <div className="Frequently">
                            <div onClick={OpenHandle} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <h3>- Assign Role</h3>
                                </div>
                                <div   className="Frequently_boxRight">
                                <button className={open ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button className={open ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                            <div className={open ? "Frequently_boxTest": " close_box"}>
                                <p>Select <strong>Entity Level Access</strong> to set admin permissions for specific entities. Click <strong>Continue</strong>.</p>
                                <p>Next, select to either grant access to predefined entities only or grant access to all entities that may exist in the organization.</p>
                                <p>Assign a role by pressing the <strong>Assign Role </strong>button for the entities you want to grant the employee permissions to.</p>
                                <p>If you require the same permissions for the user, toggle Apply the same role for all entities.</p>
                                <p>  A drawer will appear with the new entity-level roles and the entity admin role. Select the role you wish to set to the employee and click <strong>Assign Role</strong> to confirm.</p>
                                <p>New role assignments and permissions will take effect immediately. </p>
                                </div>
                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen2(!open2)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <h3>- Manage Access</h3>
                                </div>
                                <div className="Frequently_boxRight">
                                <button  className={open2 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open2 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                <div className={open2 ? "Frequently_boxTest": " close_box"}>
                                    <p>Select Manage Access from the More menu to review all of the user’s existing roles.</p>
                                    <p> Select <strong>Edit</strong> to apply a different role/permission level for the user</p>
                                    <p>
                                    If the client is unsure of which access level the user should have, select <strong>View</strong> for full details on each permissions level. Expand the sections to see exactly which rights will be granted in each area.</p>
                                </div>

                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen3(!open3)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <h3>- Remove Access</h3>
                                </div>
                                <div className="Frequently_boxRight">
                                <button className={open3 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open3 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                 <div className={open3 ? "Frequently_boxTest": " close_box"}>
                                    <p>You can use the <strong>Manage Access</strong> option to remove an admin’s access to a specific group(s) or select Remove Access from the More menu to completely remove an admin’s access from all of your organizations at once.</p>
                                    <ul style={{listStyleType:"circle!important"}}>
                                     <li> <p>To remove one or more access groups/roles, select the user’s name from the Access Management list.Next, check the box beside all of the roles that you’d like to remove. Click <strong> Remove Access</strong> at the top of the screen to remove and confirm.</p></li>
                                   <li><p>To remove all of an admin’s access at once, select <strong>Remove Access</strong> from the More menu. After reviewing all of the groups that the admin is currently a part of, select <strong>Remove Access</strong> again to confirm. </p></li>
                                   </ul>
                                    <p><strong style={{color:"red"}}>IMPORTANT NOTE:</strong> Removing a admin’s access altogether will reduce the number of approvers needed for payments in the groups that they are members of. Be sure that you want to proceed before clicking <strong>Remove Access</strong> again to confirm. </p>
                                </div>
                        </div>
                        </div>
                        <div className="FrequentlyContainer">
                            <h1>FAQ</h1>
                        <div className="Frequently">
                            <div onClick={() => setOpen4(!open4)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>Can clients un-do changes they make to admin access and permissions?</p>
                                </div>
                                <div   className="Frequently_boxRight">
                                <button className={open4 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button className={open4 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                            <div className={open4 ? "Frequently_boxTest": " close_box"}>
                                <p>Yes, clients can un-do changes made to admin access and permissions. Once an entity level permission is applied to a platform user, through the use of an assigned role, this can easily be reverted by removing the role from the user.</p>
                                </div>
                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen5(!open5)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>Is it possible to copy/duplicate entity level permissions from one user to another?</p>
                                </div>
                                <div className="Frequently_boxRight">
                                <button  className={open5 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open5 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                <div className={open5 ? "Frequently_boxTest": " close_box"}>
                                   <p>Replicating entity level permissions is made easy because all permission groups are set up with pre-defined Role Actions. This means you simply need to select the role you want to apply to a platform user, and all the pre-set permission configurations will be applied.</p>
                                </div>

                        </div>
                        <div className="Frequently">
                            <div onClick={() => setOpen6(!open6)} className="Frequently_box">
                            <div className="Frequently_boxLeft">
                                    <p>Is it possible to stack and/or customize entity level permissions?</p>
                                </div>
                                <div className="Frequently_boxRight">
                                <button className={open6 ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button  className={open6 ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                                 <div className={open6 ? "Frequently_boxTest": " close_box"}>
                                   <p>
                                   It is not currently possible to customize entity level permissions. Today, pre-defined roles are available to clients for better management of user access levels. Custom Role Action configurations are noted as an ideal solution for enterprise clients and may be delivered in the near future.</p>
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

export default FrameWorkPage_10

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/frameworkPages_01.scss'
const FrameWorkPage_04 = ({page}) => {
    const [open,setOpen] = useState(false);

    const OpenHandle = () => {
        setOpen(!open);
    }
  return (
    <div>
       <div className= {page === 4 ? "FrameWorkPageBodyChild":"d-none"}>
                        <div className="FrameWorkPageBodyChildTittle">
                            <h1>About Groups on Deel</h1>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Clients can set up different groups on Deel and assign group members varying levels of visibility and <a href="#">permissions</a> so that they can easily view and manage their contractors and employees.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Please see <a href="#">How To Create Groups And Add Group Admins </a> for a detailed guide on adding groups to an organization and assigning group admins and admins.</p>
                            </div>
                        <div className="FrameWorkPageBodyChildTextLink" >
                            <h2 style={{margin:"5% 0 3%"}}>Benefits of Creating Groups</h2>
                            <p>Creating groups makes it easier for clients to manage their contractors and employees.</p>
                            <p>For example, clients can set up a different group for tech support workers, delivery drivers, and graphic designers. Within each group of those three groups, clients can assign admins who can approve payments, adjust payroll items, or manage contract details.</p>
                            <p >Other benefits of setting up groups include:</p>
                            <ul style={{margin:"-5px 0 0"}} className='listText'>
                                <li > <div className='dotted' style={{width:"10px"}}></div><p>Creating groups within the Deel account to manage multiple items on a group-by-group basis (contracts, payments, invoicesAny Deel product that is not mentioned in the matrix above will have full access to clients with entity level permissions, etc.)</p> </li>
                                <li style={{margin:"-1% 0 0"}} ><div className='dotted'></div> <p>Having a dedicated admin for each group, where each admin(s) can only access relevant information</p></li>
                                <li style={{margin:"-1% 0 0"}} ><div className='dotted'></div> <p>Allocating different payment methods for each group is a great benefit for clients that use bank accounts from several countries</p></li>
                            </ul>
                        </div>
                        <div className="FrameWorkPageBodyChildText" style={{margin:"-5% 0 0"}}>
                            <p>Please note that Group Admins can add admins and edit roles, but only in their group.</p>
                            <p style={{margin:"-2% 0 0"}}>Organization Admins can edit roles and permissions, and add or remove admins, to any group.</p>
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

export default FrameWorkPage_04

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../assets/scss/Dashboard/dasHome.scss'
import { useTable } from "react-table";
import { data,  } from "./Data";
import DataTable from './DataTable';
// import '../../assets/Images/'
const DashHome = ({page}) => {
  return (
<div className={page === 17 ? "dasHome" : "d-none"}>
      <div className="dasHomeContainer row">
        <div className="dasHomeParent col-lg-12">
          <div className="dasHomeChild">
            <div className="topWrapper">
              <div className="leftTopWrapper">
                <h1>Administration</h1>
                <p>Manage admin Lorem ipsum dolor sit amet, con sectetur adipi scing elit. </p>
              </div>
              <div className="rightTopWrapper">
                <div className="menuicon">
                <HelpOutlineIcon  className='topicons' />
                <div className="notification">
                <NotificationsNoneOutlinedIcon  className='topicons'/>
                <div className="notificationtext">2</div>
                </div>
              </div>
              <div className="menuProfile">
                <div className="profileImg">
                  <img src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJXDfuohWIXSjYK4URY7EHT14A9FD8I7bTag2CdxoXFYCAHyuo1tYGcstif9nzqS6QQbulhhnF6b6tWOYgncjQKCt7ANbX1bo5rxmclOFKzVcKBviboJTva7K0xmiaM1R5TW-T30PlauOj~gB~D3OH3n6tTL-lIGb0QQtkQrikNpdtBlT~9m0Vfq2SWCMUhPSh2w19a~L4GlcTirkRznMcZRjaeVHfAU9ga~FBWDzP6XzaqajC1YskwMQQfxxa2dICLs5LRqKXRZ7T-0vEiilm4B~ChEHJ5RKRTIgRT0jNdbnRFG4cWHlq~NJHcudFVHGPnt4kOWShQIkZKSUpdheQ__" alt="" />
                </div>
                <div className="profileText">
                  <p>Felix Adam</p>
                  <span>Root User</span>
                </div>
              </div>
              </div>
            </div>
            <div className="buttomWrapper">
              <div className="buttomWrapperLeft">
                <button className='button'>Create User Access</button>
                <button className="buttomUser">
                  <p>Modules</p>
                  <div className="bottomText">21</div>
                </button>
                <button className="buttomUser">
                  <p>Admin Users</p>
                  <div className="bottomText">21</div>
                </button>
              </div>
              <div className="buttomWrapperRight">
                <div className="imgList">
                  <div className="imagerendering">
                    <img src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJXDfuohWIXSjYK4URY7EHT14A9FD8I7bTag2CdxoXFYCAHyuo1tYGcstif9nzqS6QQbulhhnF6b6tWOYgncjQKCt7ANbX1bo5rxmclOFKzVcKBviboJTva7K0xmiaM1R5TW-T30PlauOj~gB~D3OH3n6tTL-lIGb0QQtkQrikNpdtBlT~9m0Vfq2SWCMUhPSh2w19a~L4GlcTirkRznMcZRjaeVHfAU9ga~FBWDzP6XzaqajC1YskwMQQfxxa2dICLs5LRqKXRZ7T-0vEiilm4B~ChEHJ5RKRTIgRT0jNdbnRFG4cWHlq~NJHcudFVHGPnt4kOWShQIkZKSUpdheQ__" alt="" />
                  </div>
                  <div className="imagerendering">
                    <img src="https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0MoBclsQvN-AVdKA1YyEfoMiUVGN42Kg4cq9xoNLE0ncP-LOc55e5c7jULLK~R4O8nzwUEJYSE98a5Q5wlNGQZ8ATBCrGrvvYhCi07CSZpvZdHSKaDa3O52Fy2EE4WvugPEy2iVWpHQnSUrVKHEeCbK2VvB4p4hdFZY06-v7DkCJlS~92Q1NbEQ3iNV09mh4F5JNBxaKYGn6GR3Xi5dWHFcNsi-kaTmWpmjE9-TN3XArq98~kqKzJr13LoeQ94PyCkXviq1Vpc7qhF04fYtIkiZjkWy7c-yRglLpCqFpOkXtXMnV7gPGP79O~ga-0xE8wfswWwqgK4qtn8R~NiSRg__" alt="" />
                  </div>
                  <div className="imagerendering">
                    <img src="https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMQVJBTEvb~RwECIcTPfKKJK7RsQQK1pHcUQu5nyUEoue1ISbK5JM1Rk36zISvDphIhArOkqpKNgYfczXnyw~Ndm0BZ42MKnAfTyQCo3DSQ4s3Wuc3aHvRpK0tLJibnS63kuZl~nuxIaHfaQlE88kU0ULY6lqzMg5gZCwwInD4GZ2QPTzq59pdMKLZaZdmOE7bKZdLxZPsDSOVuZGaULiGu-GJfzJ-gnjOFhoA3QtGUzs2PHsLKxr~CZwMZ3WHsHXqjgKqBXrSkOhCvkmrBzQD0IJdNtqrBqb5G7t~O2MIbCdPfTmtdcZBwAKUP5YBC~8nrPnT0RD0b1pGBRG-8eFw__" alt="" />
                  </div>
                  <div className="Textrendering">
                    <p>+19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TotalRequest">
        <div className="requestContainer">
          <div className="requestParent">
            <div className="requestChild">
              <div className="requestChildLeft">
              <h1>0</h1>
              <p>Total Call Request</p>
              <span>0 pending</span>
              </div>
              <div className="requestChildRight">
                <MoreVertIcon />
              </div>
            </div>
            <div className="requestChild">
              <div className="requestChildLeft">
              <h1>232</h1>
              <p>Total Call Request</p>
              <span>16 pending</span>
              </div>
              <div className="requestChildRight">
                <MoreVertIcon />
              </div>
            </div>
            <div className="requestChild">
              <div className="requestChildLeft">
              <h1>130</h1>
              <p>Total Call Request</p>
              <span>21 pending</span>
              </div>
              <div className="requestChildRight">
                <MoreVertIcon />
              </div>
            </div>
            <div className="requestChild">
              <div className="requestChildLeft">
              <h1>0</h1>
              <p>Total Call Request</p>
              <span>0 pending</span>
              </div>
              <div className="requestChildRight">
                <MoreVertIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="requestTittle">
        <div className="requestTittleContainer">
        <div className="requestTittleWrapper">
          <div className="requestTittleLeft">
            <h1>Request</h1>
            <div className="requestSearch">
              <SearchIcon className='search' />
              <input type="text" 
              placeholder='Search'
              />
            </div>
          </div>
          <div className="requestTittleRight">
            <div className="requestTittleParent">
              <p>sort</p>
              <div className="requestTittleChild" style={{width:"150px"}}>
                <p>All</p>
                <KeyboardArrowDownIcon />
              </div>
              <div className="requestTittleChild">
                <p>start Date</p>
                <CalendarMonthIcon />
              </div>
              <div className="requestTittleChild">
                <p>End Date</p>
                <CalendarMonthIcon />
              </div>
              <button>Apply</button>
            </div>
          </div>
        </div>
        <div className="data">
          <div className="dataList">
          {/* <table {...getTableProps()} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    textAlign: "center",
                      padding: "8px 12px",
                    backgroundColor: "#fcfcfc",
                    margin: "20px 0",
                    fontSize:"14px",
                    fontWeight:"500",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      backgroundColor: "#fcfcfc",
                      padding: "20px 10px",
                      border: "none",
                      textAlign:"center",
                      fontSize:"14px"
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <DataTable />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}


export default DashHome

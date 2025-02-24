import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../../assets/scss/Dashboard/dasHome.scss'
import { useTable } from "react-table";
import { data,  } from "../../DashBoardBody/Data";
import DataTable from '../../DashBoardBody/DataTable';
import img1 from '../../../assets/Images/Dashboard/dashbarImg.png'
import img2 from '../../../assets/Images/Dashboard/dashbarImg2.png'
import img3 from '../../../assets/Images/Dashboard/dashbarImg3.png'
// import '../../assets/Images/'

const Administration = ({page}) => {
  return (
    <div className={page ===18 ? "dasHome" : 'd-none'}>
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
                <img src={img1} alt="" />
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
                     <img src={img1} alt="" />
                </div>
                <div className="imagerendering">
                     <img src={img2} alt="" />
                </div>
                <div className="imagerendering">
                     <img src={img3} alt="" />
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


export default Administration


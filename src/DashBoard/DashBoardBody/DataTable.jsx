import React from "react";
import '../../assets/scss/Dashboard/table.scss'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import {data} from './Data'
const DataTable = () => {
  return (
    <div className="data-table">
      {/* Table Header */}
      <div className="table-header">
        <div>SN</div>
        <div>Date</div>
        <div>Company</div>
        <div>Email</div>
        <div>Request ID</div>
        <div>Pricing Type</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      {/* Table Body */}
      <ul className="table-body">
        {/* {data.map((item, index) => (
          <li className="table-row" key={index}>
            <div>{item.sn}</div>
            <div>{item.date}</div>
            <div>{item.company}</div>
            <div>{item.email}</div>
            <div>{item.requestId}</div>
            <div>{item.pricingType}</div>
            <div>{item.status} </div>
            <div>
              <a href="#" className="action-link">
                {item.action}
              </a>
            </div>
          </li>
        ))} */}
         <ul className="table-body">
        {data.map((item, index) => (
          <li className="table-row" key={index}>
            <div>{item.sn}</div>
            <div>{item.date}</div>
            <div>{item.company}</div>
            <div>{item.email}</div>
            <div>{item.requestId}</div>
            <div>{item.pricingType}</div>
            {/* <div className={`status ${String(item.status).toLowerCase()}`}>
              {item.status}
            </div> */}
            <div className="status">
              <p>call</p>
              <span>pending</span>
            </div>
            <div className="action-icons">
              <a href="#" title="View">
                <RemoveRedEyeOutlinedIcon className="box-icon" />
              </a>
              <a href="#" title="Approve">
                <CheckBoxOutlinedIcon  className="box-icon" />
              </a>
              <a href="#" title="Delete">
                <RestoreFromTrashOutlinedIcon className="box-icon" />
              </a>
            </div>
          </li>
        ))}
      </ul>
      </ul>
    </div>
  );
};

export default DataTable;

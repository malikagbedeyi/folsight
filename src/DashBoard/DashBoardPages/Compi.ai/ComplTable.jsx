import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
const ComplTable = () => {
  return (
    <div>
              {/* <div className="tableHead">
              <div className="tableHeadbox">Reference ID</div>
              <div className="tableHeadbox">Title</div>
                <div className="tableHeadbox">Description</div>
                <div className="tableHeadbox">Owner</div>
                <div className="tableHeadbox">Map Control</div>
                <div className="tableHeadbox">Map Risk</div>
                <div className="tableHeadbox">Map Framework</div>
                <div className="tableHeadbox">Date</div>
                <div className="tableHeadbox">Status</div>
                <div className="tableHeadbox">Actions</div>
                </div> */}
                <div className="tablebody">
                  <div className="tablebodybox">RID0123</div>
                  <div className="tablebodybox">Policy for Information Security</div>
                  <div className="tablebodybox">Lorem ipsum dolor sit ame, con secte tur a amet  amet Lorem Lore ipsum dolor sit ame, consecte tur a amet  amet</div>
                  <div className="tablebodybox">RID 0123</div>
                  <div className="tablebodybox">Felix Uzor, Sen Auditor</div>
                  <div className="tablebodybox">Felix Uzor, Ben Alice, Shola Cooker, Audi Nasr</div>
                  <div className="tablebodybox">Lorem ipsum dolor sit ame, con secte tur a amet</div>
                  <div className="tablebodybox">05:20 pm,16 Aug, 2024</div>
                  <div className="tablebodybox">Active</div>
                  <div className="tablebodybox">
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
            </div>
    </div>
  )
}

export default ComplTable

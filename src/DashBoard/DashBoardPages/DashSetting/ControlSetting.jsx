import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ControlSetting = ({settingPage}) => {
  return (
    <div className={settingPage === 6 ? '' : 'controlSetting'}>
      Control Setting
    </div>
  )
}

export default ControlSetting

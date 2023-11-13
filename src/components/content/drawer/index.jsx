import React from 'react'
import './index.scss';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Drawer() {

  return (

    <div className='drawer-container'>
      <div className="drawer-profile">
        <div className="drawer-profile-icon">
          <AccountCircleIcon fontSize="large"/>
        </div>
        <h1>profile A</h1>
      </div>


      <div className="drawer-items">
        <div className="drawer-items-icon">
          <MenuIcon/>
        </div>
        <h4>project1</h4>
      </div>
      <div className="drawer-items">
        <div className="drawer-items-icon">
          <MenuIcon/>
        </div>
        <h4>project2</h4>
      </div>
      <div className="drawer-items">
        <div className="drawer-items-icon">
          <MenuIcon/>
        </div>
        <h4>project3</h4>
      </div>



      
    </div>
  )
}

export default Drawer;
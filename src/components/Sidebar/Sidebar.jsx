import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link style={{textDecoration: 'none', color: '#555555'}} to="/" className="link">
            <li className="sidebarListItem active">
              <PersonOutlineIcon className="sidebarIcon" />
              Students
            </li>
            </Link>
            <li className="sidebarListItem active">
              <AccountCircleIcon className="sidebarIcon" />
              Attendance
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
};

export default Sidebar
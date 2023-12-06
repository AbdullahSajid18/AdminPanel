import React from 'react'
import "./sidebar.css";
import { GanttChartSquare, LineChart , TrendingUp, User, Store, DollarSign, BarChart4, Mail, Computer, MessageCircle, FolderKanban, AlertOctagon} from 'lucide-react';
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
              <GanttChartSquare className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <LineChart  className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link style={{textDecoration: 'none', color: '#555555'}} to="/users" className="link">
              <li className="sidebarListItem">
                <User className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link style={{textDecoration: 'none', color: '#555555'}} to="/products" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <DollarSign   className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart4 className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Computer className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageCircle className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FolderKanban className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <LineChart className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AlertOctagon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Sidebar
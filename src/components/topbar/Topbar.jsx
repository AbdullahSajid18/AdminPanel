import "./topbar.css"
import { Bell, Globe, Settings } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">Admin Panel</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <Bell />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <Globe />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <Settings />
        </div>
        <img src="https://i.pinimg.com/736x/7b/3a/3b/7b3a3b6f66d1e31cc27665bd814fdff8.jpg " alt="" className="topAvatar" style={{objectFit: 'cover'}} />
      </div>
    </div>
  </div>
  )
}

export default Topbar
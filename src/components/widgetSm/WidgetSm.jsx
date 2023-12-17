import './widgetSm.css'
import { Eye } from 'lucide-react';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
    <ul className="widgetSmList">
      <li className="widgetSmListItem">
      <div className="widgetSmUser">
          <span className="widgetSmUsername">1</span>
        </div>
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Abdullah</span>
        </div>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Web and App</span>
        </div>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Password</span>
        </div>
        <div className='buttons'><button className="widgetSmButton">
          <ContentPasteGoIcon className="widgetSmIcon" />
        </button>
        <button className="widgetSmButton">
          <Eye className="widgetSmIcon" />
        </button></div>
      </li>
    </ul>
  </div>
  )
}

export default WidgetSm
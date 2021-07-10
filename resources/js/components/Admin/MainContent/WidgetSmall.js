import { Visibility  } from '@material-ui/icons';
import React from 'react'
import "/resources/css/WidgetSmall.css";

export default function WidgetSmall() {
    return (
        
            <div className="WidgetSmall">
                <span className="WidgetSmallTitle">
                    New Joined Members
                </span>
                <ul className="WidgetSmallList">
                    <li className="WidgetSmallListItem">
                        <img src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetSmallImg" />
                        <div className="widgetSmallUser">
                            <span className="WidgetSmallUserName">John Doe</span>
                            <span className="WidgetSmallUserTitle">Software Engineer</span>
                        </div>
                        <button className="WidgetSmallButton">
                            <Visibility className="WidgetSmallIcon" />
                            Display
                        </button>
                    </li>
                    <li className="WidgetSmallListItem">
                        <img src="https://images.pexels.com/photos/5474034/pexels-photo-5474034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetSmallImg" />
                        <div className="widgetSmallUser">
                            <span className="WidgetSmallUserName">John Doe</span>
                            <span className="WidgetSmallUserTitle">Software Engineer</span>
                        </div>
                        <button className="WidgetSmallButton">
                            <Visibility className="WidgetSmallIcon" />
                            Display
                        </button>
                    </li>
                    <li className="WidgetSmallListItem">
                        <img src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetSmallImg" />
                        <div className="widgetSmallUser">
                            <span className="WidgetSmallUserName">John Doe</span>
                            <span className="WidgetSmallUserTitle">Software Engineer</span>
                        </div>
                        <button className="WidgetSmallButton">
                            <Visibility className="WidgetSmallIcon" />
                            Display
                        </button>
                    </li>
                    <li className="WidgetSmallListItem">
                        <img src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetSmallImg" />
                        <div className="widgetSmallUser">
                            <span className="WidgetSmallUserName">John Doe</span>
                            <span className="WidgetSmallUserTitle">Software Engineer</span>
                        </div>
                        <button className="WidgetSmallButton">
                            <Visibility className="WidgetSmallIcon" />
                            Display
                        </button>
                    </li>
                </ul>  
            </div>
            
    )
}

import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react'
import "/resources/css/TopBar.css";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarContainer">
                <div className="logo">iServe</div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="http://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

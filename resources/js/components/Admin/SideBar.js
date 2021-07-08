import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import React from 'react'
import "/resources/css/SideBar.css";

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem active">
                            <LineStyle /> Home
                        </li>
                        <li className="sideBarListItem">
                             <Timeline/> Analytics
                        </li>
                        <li className="sideBarListItem">
                           <TrendingUp/> Sales
                        </li>
                    </ul>
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <LineStyle /> Home
                        </li>
                        <li className="sideBarListItem">
                             <Timeline/> Analytics
                        </li>

                        <li className="sideBarListItem">
                           <TrendingUp/> Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

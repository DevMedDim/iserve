import { ChatBubbleOutline, EmailOutlined, EuroOutlined, HomeWork, LineStyle, PeopleAltOutlined, QuestionAnswerOutlined, ReceiptOutlined, ReportOutlined, StorefrontOutlined, Timeline, TrendingUp, Work, WorkOffOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import "/resources/css/SideBar.css";

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                    <Link to="/admin/dashboard" className="link">
                        <li className="sideBarListItem active">
                            <LineStyle className="sideBarIcon" />
                            Home                    
                        </li>
                        </Link> 
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon" />
                            Sales
                        </li>
                    </ul>
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                    <Link to="/admin/users" className="link" >
                        <li className="sideBarListItem ">
                            <PeopleAltOutlined className="sideBarIcon" />
                            Users
                            
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <StorefrontOutlined className="sideBarIcon" />
                            Products
                        </li>
                        <li className="sideBarListItem">
                            <EuroOutlined className="sideBarIcon" />
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <ReceiptOutlined className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <EmailOutlined className="sideBarIcon" />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <QuestionAnswerOutlined className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutline className="sideBarIcon" />
                            Messages
                        </li>
                    </ul>
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <HomeWork className="sideBarIcon" />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <ReportOutlined className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

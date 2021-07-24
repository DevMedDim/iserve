import { CalendarToday, CalendarTodayOutlined, EmailOutlined, LocationSearchingOutlined, PermIdentity, PhoneAndroidOutlined, PublishOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "/resources/css/User.css"

export default function User() {
  return (
    <div className="User">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/admin/newUser" >  
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img className="userShowImg" src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jon Snow</span>
              <span className="userShowUserTitle">Nights Watch</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfoContainer">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">john99</span>
            </div>
            <div className="userShowInfoContainer">
              <CalendarTodayOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">10.04.1995</span>

            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfoContainer">
              <PhoneAndroidOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">+212 24 52 77 85</span>
            </div>
            <div className="userShowInfoContainer">
              <EmailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">email@email.com</span>
            </div>
            <div className="userShowInfoContainer">
              <LocationSearchingOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">rue 02 boulevard la fitco</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="john99"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Jon Snow"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email@email.com"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="rue 02 boulevard la fitco"
                  className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="+212 24 52 77 85"
                  className="userUpdateInput" />
              </div>

            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img alt="" className="userUpdateImg" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"  />
               <label htmlFor="file"> <PublishOutlined className="userUpdateIcon" /> </label>
                <input type="file" name="" id="file" style={{display: "none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

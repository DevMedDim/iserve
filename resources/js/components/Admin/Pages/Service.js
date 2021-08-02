import { CalendarTodayOutlined, EmailOutlined, LocationSearchingOutlined, PermIdentity, PhoneAndroidOutlined, PublishOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "/resources/css/Service.css"

function Service() {
    return (
        <div className="Service">
            <div className="serviceTitleContainer">
        <h1 className="serviceTitle">Edit Service</h1>
        <Link to="/admin/services/newservice" >  
        <button className="serviceAddButton">Create</button>
        </Link>
      </div>
      <div className="serviceContainer">
        <div className="serviceShow">
          <div className="serviceShowTop">
            <img className="serviceShowImg" src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar" />
            <div className="serviceShowTopTitle">
              <span className="serviceShowServicename">Jon Snow</span>
              <span className="serviceShowServiceTitle">Nights Watch</span>
            </div>
          </div>
          <div className="serviceShowBottom">
            <span className="serviceShowTitle">Account Details</span>
            <div className="serviceShowInfoContainer">
              <PermIdentity className="serviceShowIcon" />
              <span className="serviceShowInfoTitle">john99</span>
            </div>
            <div className="serviceShowInfoContainer">
              <CalendarTodayOutlined className="serviceShowIcon" />
              <span className="serviceShowInfoTitle">10.04.1995</span>

            </div>
            <span className="serviceShowTitle">Contact Details</span>
            <div className="serviceShowInfoContainer">
              <PhoneAndroidOutlined className="serviceShowIcon" />
              <span className="serviceShowInfoTitle">+212 24 52 77 85</span>
            </div>
            <div className="serviceShowInfoContainer">
              <EmailOutlined className="serviceShowIcon" />
              <span className="serviceShowInfoTitle">email@email.com</span>
            </div>
            <div className="serviceShowInfoContainer">
              <LocationSearchingOutlined className="serviceShowIcon" />
              <span className="serviceShowInfoTitle">rue 02 boulevard la fitco</span>
            </div>
          </div>
        </div>
        <div className="serviceUpdate">
          <span className="serviceUpdateTitle">Edit</span>
          <form action="" className="serviceUpdateForm">
            <div className="serviceUpdateLeft">
              <div className="serviceUpdateItem">
                <label htmlFor="">Servicename</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="john99"
                  className="serviceUpdateInput" />
              </div>
              <div className="serviceUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Jon Snow"
                  className="serviceUpdateInput" />
              </div>
              <div className="serviceUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email@email.com"
                  className="serviceUpdateInput" />
              </div>
              <div className="serviceUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="rue 02 boulevard la fitco"
                  className="serviceUpdateInput" />
              </div>
              <div className="serviceUpdateItem">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="+212 24 52 77 85"
                  className="serviceUpdateInput" />
              </div>

            </div>
            <div className="serviceUpdateRight">
              <div className="serviceUpdateUpload">
                <img alt="" className="serviceUpdateImg" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"  />
               <label htmlFor="file"> <PublishOutlined className="serviceUpdateIcon" />  Upload your Photo </label>
                <input type="file" name="" id="file" style={{display: "none"}} />
              </div>
              <button className="serviceUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}

export default Service

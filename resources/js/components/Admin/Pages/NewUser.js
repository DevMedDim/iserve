import React from 'react'
import "/resources/css/NewUser.css"

function NewUser() {
    return (
       <div className="newUser">
           <h1 className="newUserTitle">New User</h1>
           <form action="" className="newUserForm">
               <div className="newUserItem">
                   <label htmlFor="">Username</label>
                   <input type="text" name="" placeholder="John" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Full Name</label>
                   <input type="text" name="" placeholder="John Doe" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Email</label>
                   <input type="text" name="" placeholder="JohnDoe@gmail.com" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Password</label>
                   <input type="password" name="" placeholder="password" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Phone</label>
                   <input type="text" name="" placeholder="+212 6 25 50 99 60" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Address</label>
                   <input type="text" name=""  placeholder="somewhere in the middle of nowhere" id="" />
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Gender</label>
                   <div className="newUserGender">
                   <input type="radio" name="" value="male" id="" />
                   <label htmlFor="male">Male</label>
                   <input type="radio" name="" value="female" id="" />
                   <label htmlFor="female">Female</label>
                   <input type="radio" name="" value="other" id="" />
                   <label htmlFor="other">Other</label>
                   </div>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Active</label>
                   <select name="" id="active" className="newUserSelect">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>
               <button className="newUserButton">Create</button>
           </form>
       </div>
    )
}

export default NewUser

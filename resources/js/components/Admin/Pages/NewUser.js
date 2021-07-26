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
           </form>
       </div>
    )
}

export default NewUser

'use strict'

class AdminController {
 
  test(){
    return "Hello world";
  }

  index ({ view }) {
    const message = "Developed by Akdim"
    return view.render('admin',{ message })
  }

}

module.exports = AdminController

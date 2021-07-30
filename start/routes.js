'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('admin/dashboard', 'AdminController.index')

Route.group(() => {
    Route.get('/', 'AdminController.index')
    Route.get('user:userId', 'AdminController.index')
    Route.get('newUser', 'AdminController.index')
}).prefix('admin/users')

Route.group(()=>{
    Route.get('/', 'AdminController.index')
    Route.get('service:serviceId', 'AdminController.index')
    Route.get('newservice', 'AdminController.index')
}).prefix('admin/services')


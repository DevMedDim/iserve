import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Admin/SideBar';
import TopBar from './Admin/TopBar';
import Home from './Admin/MainContent/Home';
import "/resources/css/Main.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './Admin/Pages/Users';
import User from './Admin/Pages/User';
import NewUser from './Admin/Pages/NewUser';
import Services from './Admin/Pages/Services';
import Service from './Admin/Pages/Service';
import  NewService from './Admin/Pages/NewService';

function Main() {
    return (
        <Router>
        <div>
            <TopBar />
            <div className="container">
                <SideBar />
                <Switch>
                    <Route path="/admin/dashboard" exact component={Home} />
                    <Route path="/admin/users" exact component={Users} />
                    <Route path="/admin/users/user:userId" exact component={User} />
                    <Route path="/admin/newUser" exact component={NewUser} />
                    <Route path="/admin/services" exact component={Services} />
                    <Route path="/admin/services/service:serviceId" exact component={Service} />
                    <Route path="/admin/services/newservice" exact component={NewService} />
                </Switch>
               

            </div>

        </div>
        </Router>
    )
};

export default Main;
ReactDOM.render(<Main />, document.getElementById('main'));
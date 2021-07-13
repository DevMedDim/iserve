import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Admin/SideBar';
import TopBar from './Admin/TopBar';
import Home from './Admin/MainContent/Home';
import "/resources/css/Main.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './Admin/Pages/Users';

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
                </Switch>
               

            </div>

        </div>
        </Router>
    )
};

export default Main;
ReactDOM.render(<Main />, document.getElementById('main'));
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Admin/SideBar';
import TopBar from './Admin/TopBar';
import Home from './Admin/MainContent/Home';
import "/resources/css/Main.css";

function Main() {
    return (
        <div>
            <TopBar />
            <div className="container">
                <SideBar />
               <Home/>

            </div>

        </div>
    )
};

export default Main;
ReactDOM.render(<Main />, document.getElementById('main'));
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Admin/SideBar';
import TopBar from './Admin/TopBar';
import "/resources/css/Main.css";

function Main() {
    return (
        <div>
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="others">
                    other pages
                </div>

            </div>

        </div>
    )
};

export default Main;
ReactDOM.render(<Main />, document.getElementById('main'));
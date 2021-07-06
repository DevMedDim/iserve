import React from 'react';
import  ReactDOM  from 'react-dom';
import TopBar from './Admin/TopBar';

function Main() {
    return (
        <div>
        <TopBar/>
        </div>
    )
};

 export default Main;
 ReactDOM.render(<Main />, document.getElementById('main'));
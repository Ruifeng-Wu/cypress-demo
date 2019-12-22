import React, {lazy} from 'react';
import './App.css';
import LazyComponent from "./LazyComponent";

function App() {
    const handle = () => {
        window.location.href = 'http://www.baidu.com';
    };
    return (
        <div className="App">
            <div id="list">
                <li id='b'>1</li>
                <li>2</li>
                <li>3</li>
                <LazyComponent/>
            </div>
            <div id="button">
                <button>button A</button>
                <button onClick={handle}>button B</button>
            </div>
            <div><input type="text"/></div>

        </div>
    );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

import Home from "./components/home/home.jsx";
import Solar from "./components/solar/solar.jsx";

import {Routes,Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            
            <div className="main">
                <Navbar />
                <Solar/>
                <Routes>
                        <Route component={<Home/>} exact path="/" />
                        <Route path="/solar" component={<Solar/>} />
                </Routes>
            </div>
            <Sidebar />
        </div>
    );
}

export default App;

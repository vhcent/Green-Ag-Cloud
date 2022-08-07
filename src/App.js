import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import LiveData from "./components/liveData/LiveData.jsx";
import Weather from "./components/weather/Weather.jsx";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <Navbar />
                <LiveData />
                <Weather />
            </div>
        </div>
    );
}

export default App;

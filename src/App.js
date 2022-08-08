import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import LiveData from "./components/liveData/LiveData.jsx";
import Weather from "./components/weather/Weather.jsx";
import Dropdown from "./components/dropdown/Dropdown.jsx";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <Navbar />
                <LiveData />
                <Weather />
                <Dropdown header="Select Building" data={["Building 1", "Building 2", "Building 3", "Building 4"]}/>
            </div>
        </div>
    );
}

export default App;

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import HomeSolar from "./pages/home/solar/HomeSolar.jsx";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <Navbar />
                <HomeSolar />

            </div>
        </div>
    );
}

export default App;

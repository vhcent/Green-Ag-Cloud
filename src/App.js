import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <Navbar />
            </div>
        </div>
    );
}

export default App;

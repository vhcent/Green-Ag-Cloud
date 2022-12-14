import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
    return (
        <div className="App">
            <div className="main">
                <Navbar />
            </div>
            
            <Sidebar />
        </div>
    );
}

export default App;

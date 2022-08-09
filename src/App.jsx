import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import HomeSolar from "./pages/home/solar/HomeSolar.jsx";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <HomeSolar />
        </div>
    );
}

export default App;

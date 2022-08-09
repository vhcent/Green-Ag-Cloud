import react from 'react';
import Navbar from "../../../components/navbar/Navbar.jsx";
import LiveData from "../../../components/liveData/LiveData.jsx";
import Weather from "../../../components/weather/Weather.jsx";
import Dropdown from "../../../components/dropdown/Dropdown.jsx";

function HomeSolar() {
    return (
        <div className="main">
            <Navbar />
            <Dropdown header="Select Building" data={["Building 1", "Building 2", "Building 3", "Building 4"]} />
            <LiveData />
            <Weather />
        </div>
    )
}

export default HomeSolar;
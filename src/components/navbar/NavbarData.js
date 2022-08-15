import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdBatteryCharging } from "react-icons/io";
import { AiFillCamera } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { IoIosSpeedometer } from "react-icons/io";


export const NavbarData = [
    {
        title: "Solar",
        icon: <BsFillSunFill />,
        link: "/solar",
    },
    {
        title: "Storage",
        icon: <IoMdBatteryCharging />,
        link: "/storage",
    },
    {
        title: "Camera",
        icon: <AiFillCamera />,
        link: "/camera",
    },
    {
        title: "IoT",
        icon: <BiNetworkChart />,
        link: "/iot",
    },
    {
        title: "Meter",
        icon: <IoIosSpeedometer/>,
        link: "/meter",
    },
];

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiDeviceFill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { AiFillControl } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        icon: <AiFillHome />,
        link: "/home",
    },
    {
        title: "Device Management",
        icon: <RiDeviceFill />,
        link: "/device",
    },
    {
        title: "Monitering and Tracking",
        icon: <IoMdAnalytics />,
        link: "/monitering",
    },
    {
        title: "Control and Configuration",
        icon: <AiFillControl />,
        link: "/control",
    },
    {
        title: "Calendar",
        icon: <AiFillCalendar />,
        link: "/calendar",
    },
    {
        title: "Services",
        icon: <BiTask />,
        link: "/services",
    },
    {
        title: "Billing",
        icon: <AiFillDollarCircle />,
        link: "/billing",
    },
    {
        title: "Messages",
        icon: <AiFillMessage />,
        link: "/messages",
    },
    {
        title: "Settings",
        icon: <AiFillSetting />,
        link: "settings",
    },
];

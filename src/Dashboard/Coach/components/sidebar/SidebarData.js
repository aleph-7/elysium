import React from 'react';
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaVolleyball } from "react-icons/fa6";
import { FaTableTennis } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoFootballOutline } from "react-icons/io5";
import { GiHockey } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import badminton from "./../../media/badminton.png";
import squash from "./../../media/squash.png";


export const SidebarData = [
    {
        title:"basketball",
        icon:<MdOutlineSportsBasketball size={14}/>,
        link: "/#"
    },
    {
        title:"cricket",
        icon:<MdOutlineSportsCricket size={14}/>,
        link: "/#"
    },
    {
        title:"volleyball",
        icon:<FaVolleyball size={14}/>,
        link: "#"
    },
    {
        title:"badminton",
        icon:<img src={badminton} style={{ width: '15px', height: 'auto' }} />,
        link: "/#"
    },
    {
        title:"tennis",
        icon:<GiTennisRacket size={14}/>,
        link: "/#"
    },
    {
        title:"table tennis",
        icon:<FaTableTennis size={14}/>,
        link: "/#"
    },
    {
        title:"swimming",
        icon:<FaPersonSwimming size={14}/>,
        link: "/#"
    },
    {
        title:"squash",
        icon:<img src={squash} style={{ width: '15px', height: 'auto' }} />,
        link: "/#"
    },
    {
        title:"football",
        icon:<IoFootballOutline size={14}/>,
        link: "/#"
    },
    {
        title:"hockey",
        icon:<GiHockey size={14}/>,
        link: "/#"
    },
    {
        title:"yoga",
        icon:<GrYoga size={14}/>,
        link: "/#"
    },
    {
        title:"gym",
        icon:<CgGym size={14}/>,
        link: "/#"
    },
]
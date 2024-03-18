import React from "react";
import { FaPenNib } from "react-icons/fa";
import counsellor from "./assets/counsellor.png";

export const SidebarData_MentalWellness = [
  {
    title: "counsellors",
    icon: <img src={counsellor} style={{ width: "15px", height: "auto" }} />,
    link: "/consellor",
  },
  {
    title: "self-help blogs",
    icon: <FaPenNib size={14} />,
    link: "/self-help",
  },
];

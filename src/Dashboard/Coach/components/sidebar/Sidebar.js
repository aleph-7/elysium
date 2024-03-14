import React from "react";
import "./Sidebar.css";
import {SidebarData} from './SidebarData';
import counsellor from "./../../media/counsellor.png";
import { FaPenNib } from "react-icons/fa";

function Sidebar(){
    return (
        <div className="Sidebar">
        <ul className='mainlist'>
            <li className='section'>physical wellness
                <ul className='SidebarList'>
                    {SidebarData.map((val,key)=>{
                        return (
                            <li key={key} className='row' onClick={()=> {window.location.pathname = val.link}}>
                            <div>{val.icon}{" "}{val.title}
                            </div>
                            </li>
                        );
                    })}
                </ul>
            </li>

            <li className='section'>mental wellness
                <ul className='SidebarList'>
                    <li className='row' onClick={()=> {window.location.pathname = '/#'}}>
                    <div><img src={counsellor} style={{ width: '15px', height: 'auto' }} />
                    {" "}counsellors</div>
                    </li>

                    <li className='row' onClick={()=> {window.location.pathname = '/#'}}>
                    <div><FaPenNib size={14} />
                    {" "}self-help blogs</div>
                    </li>
                </ul>
            </li>
        </ul>
        
        </div>
    );
}

export default Sidebar;
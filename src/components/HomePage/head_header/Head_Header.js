import React, { useEffect, useRef, useState } from 'react';
import "./Head_Header.css"
import { Routes, Route, Link } from "react-router-dom";

const Head_Header = () => {
    // const openSidebar =()=>{
    //     document.getElementById("sidebar_section").classList.toggle("sidebar_show");
    // };
    // const closeSidebar = ()=>{
    //     document.getElementById("sidebar_section").classList.toggle("sidebar_show");
    // };
    // const closeSidebarOnOuterClick = (event)=>{
    //     // let sidebarSection = document.getElementById("sidebar_section");
    //     let sidebarSection = document.getElementById("sidebar_container_id");
    //     // document.getElementById("sidebar_container_id").addEventListener("click", (event) => {
    //     // document.querySelector(".sidebar_container").addEventListener("click", (event) => {
    //         let clickedInside = sidebarSection.contains(event.target);
    //         console.log(clickedInside)
    //         console.log(event.target)
    //         if (!clickedInside){closeSidebar();};
    //     // });
    // };
    // // closeSidebarOnOuterClick();

    let [isOpen, setIsOpen] = useState(false);
    // let sidebarRef = useRef();
    // useEffect(()=>{
    //     let sidebarHandler = (event)=>{
    //         if(!sidebarRef.current.contains(event.target)){
    //             setIsOpen(false);
    //         }
            
    //     };
    //     document.addEventListener("click", sidebarHandler)
    //     return ()=>{
    //         document.removeEventListener("click", sidebarHandler)
    //     }
    // });
    const openSidebar =()=>setIsOpen(true);
    const closeSidebar = ()=> setIsOpen(false);
    return (
        <div>
            <header className='header_section'>
                <nav className='navigation_bar'>
                    <li className='navigation_li'>
                        <img src='logomakr.com/app/7TLVYv' />
                    </li>
                    <li className='navigation_li navigation_links'>
                        <Link to="/" className='navigation_link'>Home</Link>
                        <Link to="/blog" className='navigation_link'>Blog</Link>
                        <Link to="/about" className='navigation_link'>About</Link>
                        
                    </li>
                    {/* <div className="ham_burger_nav_icon_wrapper" onClick={openSidebar}> */}
                    <div className="ham_burger_nav_icon_wrapper" onClick={openSidebar} >
                            <span className="ham_burger_nav_icon">
                                <svg className="ham_burger_nav_icon_size" xmlns="http://www.w3.org/2000/svg" width="26.5" height="17.5" viewBox="0 0 26.5 17.5"> <g id="Menu_icon" data-name="Menu icon" transform="translate(-299.25 -36.25)"> <line id="Shape_3" data-name="Shape 3" x2="20" transform="translate(300 53)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> <line id="Shape_2" data-name="Shape 2" x2="15" transform="translate(300 45)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> <line id="Shape_1" data-name="Shape 1" x2="25" transform="translate(300 37)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> </g> 
                                </svg>
                            </span>
                        </div>
                </nav>
            </header>
            {/* sidebar sidebar_popup sidebar_show */}
            <div  className={isOpen === true ? "sidebar sidebar_popup sidebar_show" : "sidebar sidebar_popup"} id='sidebar_section' >
                {/* <div className='sidebar_container' id='sidebar_container_id' onClick={closeSidebarOnOuterClick}> */}
                <div className='sidebar_container' id='sidebar_container_id' >
                    <div>
                        {/* <span className="sidebar_close_icon_wrapper" id='sidebar_close_icon' onClick={closeSidebar}> */}
                        <span className="sidebar_close_icon_wrapper" id='sidebar_close_icon' onClick={closeSidebar}>
                            <svg className="sidebar_close_icon" xmlns="http://www.w3.org/2000/svg" width="17.121" height="17.121" viewBox="0 0 17.121 17.121"> <g id="Menu_icon" data-name="Menu icon" transform="translate(-301.439 -35.439)"> <line id="Shape_3" data-name="Shape 3" x2="21.213" transform="translate(302.5 51.5) rotate(-45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line> <line id="Shape_1" data-name="Shape 1" x2="21.213" transform="translate(302.5 36.5) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line> </g> </svg></span>
                    </div>
                    <li className='navigation_link_list sidebar_nav_link_wrapper'>
                        <Link to="/" className='navigation_link sidebar_nav_link'>Home</Link>
                        <Link to="/blog" className='navigation_link sidebar_nav_link'>Blog</Link>
                        <Link to="/about" className='navigation_link sidebar_nav_link'>About</Link>
                    </li>
                </div>
            </div>


        </div>
    );
};

export default Head_Header;
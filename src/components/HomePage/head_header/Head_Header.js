import React, { useEffect, useRef, useState } from 'react';
import "./Head_Header.css"
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Head_Header = () => {
    let [isOpen, setIsOpen] = useState(false);
    const openSidebar =()=>setIsOpen(true);
    const closeSidebar = ()=> setIsOpen(false);
    const clicOutsideSidebar = () =>{

    };
    const openResumeDownloadLink = ()=> window.open("https://drive.google.com/uc?id=1FnL80vK5G8XMDEJgedlrp6RyVYTlexYz&export=download")
    return (
        <div>
            <header className='header_section'>
                <nav className='navigation_bar'>
                    <li className='navigation_li'>
                        {/* <img src='logomakr.com/app/7TLVYv' /> */}
                        {/* <div className='navigation_link navigation_link_image'>Diganta</div> */}
                        <Link to="/" className='navigation_link navigation_link_image'>Diganta</Link>
                    </li>
                    <li className='navigation_li navigation_links'>
                        <Link to="/" className='navigation_link'>Home</Link>
                        <Link to="/blog" className='navigation_link'>Blog</Link>
                        <Link to="/about" className='navigation_link'>About</Link>
                        <Link to="/portfolio" className='navigation_link'>Portfolio</Link>
                        <div onClick={openResumeDownloadLink} className='navigation_link'>Hire Me <FontAwesomeIcon icon={faDownload} /></div>
                        
                    </li>
                    <div className="ham_burger_nav_icon_wrapper" onClick={openSidebar} >
                            <span className="ham_burger_nav_icon">
                                <svg className="ham_burger_nav_icon_size" xmlns="http://www.w3.org/2000/svg" width="26.5" height="17.5" viewBox="0 0 26.5 17.5"> <g id="Menu_icon" data-name="Menu icon" transform="translate(-299.25 -36.25)"> <line id="Shape_3" data-name="Shape 3" x2="20" transform="translate(300 53)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> <line id="Shape_2" data-name="Shape 2" x2="15" transform="translate(300 45)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> <line id="Shape_1" data-name="Shape 1" x2="25" transform="translate(300 37)" fill="none" stroke="#fff" strokelnecap="round" strokeWidth="1.5"></line> </g> 
                                </svg>
                            </span>
                        </div>
                </nav>
            </header>
            <div className={isOpen === true ? "sidebar sidebar_popup sidebar_show" : "sidebar sidebar_popup"} id='sidebar_section' >
                <div className='sidebar_container' id='sidebar_container_id' >
                    <div>
                        <span className="sidebar_close_icon_wrapper" id='sidebar_close_icon' onClick={closeSidebar}>
                            <svg className="sidebar_close_icon" xmlns="http://www.w3.org/2000/svg" width="17.121" height="17.121" viewBox="0 0 17.121 17.121"> <g id="Menu_icon" data-name="Menu icon" transform="translate(-301.439 -35.439)"> <line id="Shape_3" data-name="Shape 3" x2="21.213" transform="translate(302.5 51.5) rotate(-45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line> <line id="Shape_1" data-name="Shape 1" x2="21.213" transform="translate(302.5 36.5) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line> </g> </svg></span>
                    </div>
                    <li className='navigation_link_list sidebar_nav_link_wrapper'>
                        <Link to="/" className='navigation_link sidebar_nav_link'>Home</Link>
                        <Link to="/blog" className='navigation_link sidebar_nav_link'>Blog</Link>
                        <Link to="/about" className='navigation_link sidebar_nav_link'>About</Link>
                        <Link to="/portfolio" className='navigation_link sidebar_nav_link'>Portfolio</Link>
                    </li>
                </div>
            </div>


        </div>
    );
};

export default Head_Header;
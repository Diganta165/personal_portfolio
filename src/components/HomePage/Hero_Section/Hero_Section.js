import React from 'react';
import "./Hero_Section.css"
import 'animate.css';
// import hero_image from "../../../utils/images/diganta.jpg";
// import hero_image from "../../../utils/images/Diganta1.jpg";
import hero_image from "../../../utils/images/Diganta2.jpg";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faHand } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faMedium, faMediumM, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
// import hero_image from "../../../utils/images/test.jpg";

const Hero_Section = () => {

    return (
        <div className='hero_section'>
            <div className='container  hero_section_elements_wrapper'>
                <div className='hero_section_img'>
                    {/* <img src = '../../../utils/images/diganta.jpg' /> */}
                    <img src = {hero_image} />
                </div>
                <div className='hero_section_content'>
                    <div className='hero_section_content_wrapper'>
                        <h1><span>Hi, <FontAwesomeIcon icon={faHand} /> I'm </span><br/><p className='animate__animated animate__bounce' id='my_name_id'>Md. Shafiur Rahman Diganta</p></h1>
                        {/* <FontAwesomeIcon icon='fa-solid' /> */}
                        {/* <i className="fa-solid fa-user"></i> */}
                        
                        {/* <FontAwesomeIcon icon={'sort-circle-down'} /> */}
                        <span>Now working as a front-end developer at <a href='https://bd.linkedin.com/company/conceptxltd?original_referer=https%3A%2F%2Fwww.google.com%2F' target = "_blank">ConceptX.</a></span>
                        <span>Currently working on <a href='https://soppiya.com'>Soppiya.</a></span>
                        <span>I like to do sketch and play competetive video games.</span>
                        <div className='hero_section_content_wrapper_button'>
                            <button >Let's build something distinct</button>
                        </div>
                        <span className='social_icons'>
                            <a href='https://www.linkedin.com/in/md-shafiur-rahman-diganta-592a96202/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='https://github.com/Diganta165' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://medium.com/@shafiurrahmandiganta' target='_blank'><FontAwesomeIcon icon={faMediumM} /></a>
                            <a href='https://dev.to/diganta' target='_blank'><FontAwesomeIcon icon={faDev} /></a>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero_Section;
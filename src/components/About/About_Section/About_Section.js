import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import "./About_Section.css"

const About_Section = () => {
    const openSoppiyaLink = () =>{
        window.open("https://www.linkedin.com/company/soppiya/")
    }
    const openSoppiyaWebsite = () =>{
        window.open("https://soppiya.com")
    }
    const openThemesLink = () =>{
        window.open("https://store.soppiya.com/themes")
    }
    const openWidgetsLink = () =>{
        window.open("https://store.soppiya.com/widgets")
    }
    // const openResumeDownloadLink = ()=> window.open("https://drive.google.com/uc?id=1ptedcFPS6xUZRjPZeMyyysbmnyLanlU9&export=download")
    const openResumeDownloadLink = ()=> window.open("https://drive.google.com/uc?id=1KtXFm0-goPYlp0DH6AmTVhhuL5oBAjwf&export=download")
    return (
        <>
            <div className='about_section'>
                <div className='about_me_section'>
                    <h1>About Me</h1>
                    <p>I was born and raised in Bogura Cantonment, Bogura. I have completed both of my SSC and HSC from Bogura Cantonment Pullic School and College. After that I have completed my BSc in CSIT from University of South Asia. Currently I am working as a Jr. Software Engineer at Soppiya Innovation Limited. I love to play competetive video games. I also like to do sketch and hitting gym regularly. They actully helps me to keep my mind and body fit.</p>
                </div>

                <div className='current_employment_section'>
                    <h1>Current Employment</h1>
                    <p>At this moment I am working as a <span className='highlighted_text'>Jr. Software Engineer</span> at <span onClick={openSoppiyaLink} className='highlighted_text'>Soppiya Innovation Limited</span>. I have been working here for over a year now. Here I build <span className='highlighted_text' onClick={openThemesLink}>themes</span> for <span onClick={openSoppiyaWebsite} className='highlighted_text'>Soppiya</span>. We build the whole theme in <span >Vanilla JavaScript</span>. I handle all the JavaScript functionalities, DOM manipulation and do all the logical implementation for <span onClick={openThemesLink} className='highlighted_text'>Themes</span> and <span onClick={openWidgetsLink} className='highlighted_text'>Widgets</span>.</p>
                </div>

                <div className='skills_section'>
                    <h1>Skills</h1>
                    <div className='skill_wrapper'>
                        <span className='highlighted_text_skills'>React</span>
                        <span className='highlighted_text_skills'>Redux</span>
                        <span className='highlighted_text_skills'>Vue</span>
                        <span className='highlighted_text_skills'>VueX</span>
                        <span className='highlighted_text_skills'>HTML</span>
                        <span className='highlighted_text_skills'>CSS</span>
                        <span className='highlighted_text_skills'>Bootstrap</span>
                        <span className='highlighted_text_skills'>JavaScript</span>

                    </div>
                    <p className='resume_download highlighted_text' onClick={openResumeDownloadLink}>Hire Me <FontAwesomeIcon icon={faDownload} /></p>
                </div>
            </div>
        </>
    );
};

export default About_Section;
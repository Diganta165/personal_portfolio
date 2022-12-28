import React, { useEffect, useState } from 'react';
import "./Portfolio_Title_Capsule.css"
import Capsule_Buttons from '../Capsule_Buttons/Capsule_Buttons';
import airThemeImage from "../../../utils/images/air_theme.webp";
import harvestThemeImage from "../../../utils/images/harvest_theme.webp";
import furnishThemeImage from "../../../utils/images/furnish_theme.webp";
import galaxyThemeImage from "../../../utils/images/galaxy_theme.webp";
import themeWidgetsImage from "../../../utils/images/widgets.PNG";


const Portfolio_Title_Capsule = (props) => {
    const capsuleButtonsData = [
        {
            name: "All",
            id:1,
            data: [
                {
                    title: "Air Theme",
                    linK: "https://store.soppiya.com/themes/62566cc003e3ac02b5a49c4a",
                    livePreviewLink: "https://air.soppiya.com",
                    image: airThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Harvest Theme",
                    linK: "https://store.soppiya.com/themes/6252701be8395ab980e914bb",
                    livePreviewLink: "https://harvest.soppiya.com",
                    image: harvestThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Furnish Theme",
                    linK: "https://store.soppiya.com/themes/625536bc03e3ac02b5a49c49",
                    livePreviewLink: "https://furnish.soppiya.com",
                    image: furnishThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Galaxy Theme",
                    linK: "https://store.soppiya.com/themes/61cbfca84763300bc4ae90b8",
                    livePreviewLink: "https://galaxy.soppiya.com",
                    image: galaxyThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Theme Widgets",
                    linK: "https://store.soppiya.com/widgets",
                    livePreviewLink: "",
                    image: themeWidgetsImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
            ]
        },
        {
            name: "Work",
            id:2,
            data: [
                {
                    title: "Air Theme",
                    linK: "https://store.soppiya.com/themes/62566cc003e3ac02b5a49c4a",
                    livePreviewLink: "https://air.soppiya.com",
                    image: airThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Harvest Theme",
                    linK: "https://store.soppiya.com/themes/6252701be8395ab980e914bb",
                    livePreviewLink: "https://harvest.soppiya.com",
                    image: harvestThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Furnish Theme",
                    linK: "https://store.soppiya.com/themes/625536bc03e3ac02b5a49c49",
                    livePreviewLink: "https://furnish.soppiya.com",
                    image: furnishThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Galaxy Theme",
                    linK: "https://store.soppiya.com/themes/61cbfca84763300bc4ae90b8",
                    livePreviewLink: "https://galaxy.soppiya.com",
                    image: galaxyThemeImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
                {
                    title: "Theme Widgets",
                    linK: "https://store.soppiya.com/widgets",
                    livePreviewLink: "",
                    image: themeWidgetsImage,
                    technologies: "Html, Css & Vanilla JavaScript"
                },
            ]
        },
        {
            name: "Personal",
            id:3,
            data: []
        },
    ];

    // const [projectType, setProjectType] = useState("");
    const [capsuleButtons, setCapsuleButtons] = useState([]);
    

    // const selectedProjectType = (v) =>{
    //     // setProjectType(previousValue => previousValue = button);
    //     // console.log("projectType", button.id)
    //     console.log("hi", v)
    // };

    useEffect(()=>{
        setCapsuleButtons(capsuleButtonsData);
    }, []);

    const clickedMe = (element) =>{
        // console.log("element",element)
        // const newData = element;
        // setPortfolioData(newData);
        props.portfolioSelectedDataFunction(element)
    };
    // props.portfolioSelectedDataFunction(capsuleButtons[0].data)
    

    return (
        <div className='capsule_buttons'>
            <div className='capsule_buttons_container'>
                <div className='capsule_buttons_wrapper'>
                    {
                        capsuleButtons.map((element, index) => <Capsule_Buttons handler={()=> clickedMe(element)} key={index} button ={element}></Capsule_Buttons>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio_Title_Capsule;
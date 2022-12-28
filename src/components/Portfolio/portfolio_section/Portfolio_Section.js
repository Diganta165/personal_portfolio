import React, { useState } from 'react';
import Portfolio_Data_Load_Section from '../Portfolio_Data_Load_Section/Portfolio_Data_Load_Section';
import Portfolio_Title_Capsule from '../Portfolio_Title_Capsule/Portfolio_Title_Capsule';

import airThemeImage from "../../../utils/images/air_theme.webp";
import harvestThemeImage from "../../../utils/images/harvest_theme.webp";
import furnishThemeImage from "../../../utils/images/furnish_theme.webp";
import galaxyThemeImage from "../../../utils/images/galaxy_theme.webp";
import themeWidgetsImage from "../../../utils/images/widgets.PNG";

const Portfolio_Section = () => {
    const [portfolioData, setPortfolioData] = useState([]);

    const portfolioSelectedData = (elementData) =>{
        console.log("elementData", elementData)
        const newPortfolioData = elementData;
        setPortfolioData(newPortfolioData);
    };
    console.log("portfolioData.data", portfolioData.data)
    const tempData = [
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

    return (
        <>
            <div className='portfolio_section'>
                <Portfolio_Title_Capsule portfolioSelectedDataFunction = {portfolioSelectedData}/>
                <Portfolio_Data_Load_Section data = {portfolioData.data || tempData} />
            </div>               
        </>
    );
};

export default Portfolio_Section;
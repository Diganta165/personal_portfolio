import React, { useState } from 'react';
import Portfolio_Data_Load_Section from '../Portfolio_Data_Load_Section/Portfolio_Data_Load_Section';
import Portfolio_Title_Capsule from '../Portfolio_Title_Capsule/Portfolio_Title_Capsule';

const Portfolio_Section = () => {
    const [portfolioData, setPortfolioData] = useState([]);

    const portfolioSelectedData = (elementData) =>{
        console.log("elementData", elementData)
        const newPortfolioData = elementData;
        setPortfolioData(newPortfolioData);
    };
    

    return (
        <>
            <div className='portfolio_section'>
                <Portfolio_Title_Capsule portfolioSelectedDataFunction = {portfolioSelectedData}/>
                <Portfolio_Data_Load_Section data = {portfolioData.data} />
            </div>               
        </>
    );
};

export default Portfolio_Section;
import React from 'react';
import Portfolio_Element from '../Portfolio_Element/Portfolio_Element';
import "../Portfolio_Data_Load_Section/Portfolio_Data_Load_Section.css"

const Portfolio_Data_Load_Section = ({data}) => {
    return (
        <>
            <div className='project_portfolio_section'>
                {
                    data?.map((element, index) => <Portfolio_Element data= {element} key={index} /> )
                }
            </div>
        </>
    );
};

export default Portfolio_Data_Load_Section;
import React from 'react';
import "./Portfolio_Element.css"

const Portfolio_Element = ({data}) => {
    const openCardLink = (elementLink)=> window.open(elementLink);
    return (
        <>
            <div onClick={()=>{openCardLink(data.livePreviewLink)}} className='single_card'>
                <div className='image_wrapper'>
                    <img src={data.image}/>
                </div>
                <div className='card_content'>
                    <h3 className='card_title'>{data.title}</h3>
                    <p>
                        <span className='content_title'>Used:</span> {data.technologies}
                    </p>
                </div>
            </div>
            
        </>
    );
};

export default Portfolio_Element;
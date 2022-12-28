import React from 'react';
import "./Blog_Card.css";

const Blog_Card = ({elementData}) => {
    const openBlog = (elementLink) => window.open(elementLink);
    return (
        <>
            <div className='card_item'>
                <div className='date_line_wrapper'>
                    <div className='date'>{elementData.date}</div>
                    <div className='line'></div>
                </div>
                <div className='title_document_wrapper'>
                    <div onClick={()=>openBlog(elementData.source)} className='card_title'>{elementData.title }</div>
                    <div className='card_description'>{elementData.description}</div>
                </div>
            </div>
            <div className='card_item_bottom_line_wrapper'>
                <span className='card_item_bottom_line'></span>
            </div>
            
        </>
    );
};

export default Blog_Card;
import React from 'react';
import "./Blog_Card.css";

const Blog_Card = ({elementData}) => {
    return (
        <>
            <div className='card_item'>
                <div className='image_wrapper'>
                    <img src=''/>
                </div>
                <div className='bottom_part_wrapper'>
                    {console.log()}
                    <h3>{elementData?.name || ""}</h3>
                </div>
            </div>
        </>
    );
};

export default Blog_Card;
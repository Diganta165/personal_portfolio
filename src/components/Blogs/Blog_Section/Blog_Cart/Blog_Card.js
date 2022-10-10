import React from 'react';
import "./Blog_Card.css";

const Blog_Card = ({elementData}) => {
    return (
        <>
            <div className='card_item'>
                {/* <div className='date_wrapper'>

                </div>
                <div className='bottom_part_wrapper'>
                    <h3>{elementData?.name || ""}</h3>
                </div> */}
                <div className='date_line_wrapper'>
                    <div className='date'>{elementData.date || "6th Dec 1996"}</div>
                    <div className='line'></div>
                </div>
                <div className='title_document_wrapper'>
                    <a href='' className='card_title'>{elementData.title || "Diganta's birthday"}</a>
                    <div className='card_description'>{elementData.description || "dasdhsadkagdashdgasjdhgasjdhgasjdhgasdjh dasdhsadkagdashdgasjdhgasjdhgasjdhgasdjh dbajhdcgaj ldgasldkjhabdjhav djashd vakjshd gaslidy gasdjha sgdajhg dasdhasjhdgasjkhdgskdgakds dasdhsadkagdashdgasjdhgasjdhgasjdhgasdjh dbajhdcgaj ldgasldkjhabdjhav djashd vakjshd gaslidy gasdjha sgdajhg dasdhasjhdgasjkhdgskdgakds dasdhsadkagdashdgasjdhgasjdhgasjdhgasdjh dbajhdcgaj ldgasldkjhabdjhav djashd vakjshd gaslidy gasdjha sgdajhg dasdhasjhdgasjkhdgskdgakds dasdhsadkagdashdgasjdhgasjdhgasjdhgasdjh dbajhdcgaj ldgasldkjhabdjhav djashd vakjshd gaslidy gasdjha sgdajhg dasdhasjhdgasjkhdgskdgakdsdbajhdcgaj ldgasldkjhabdjhav djashd vakjshd gaslidy gasdjha sgdajhg dasdhasjhdgasjkhdgskdgakds"}</div>
                </div>
                {/* <span className='card_item_bottom_line'></span> */}
            </div>
            <div className='card_item_bottom_line_wrapper'>
                <span className='card_item_bottom_line'></span>
            </div>
            
        </>
    );
};

export default Blog_Card;
import React from 'react';
import "./Portfolio_Title_Capsule.css"
import Capsule_Buttons from '../Capsule_Buttons/Capsule_Buttons';

const Portfolio_Title_Capsule = () => {

    const capsuleButtons = [
        {
            name: "All",
            id:1,
            data: []
        },
        {
            name: "Work",
            id:2,
            data: []
        },
        {
            name: "Personal",
            id:3,
            data: []
        },
    ];

    return (
        <div className='capsule_buttons'>
            <div className='capsule_buttons_container'>
                <div className='capsule_buttons_wrapper'>
                    {capsuleButtons.map(button => <Capsule_Buttons button = {button} key ={button.id}/>)}
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio_Title_Capsule;
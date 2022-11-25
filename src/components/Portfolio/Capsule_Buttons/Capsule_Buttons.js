import React, { useState } from 'react';
import "./Capsule_buttons.css"
const Capsule_Buttons = ({button}) => {
    const [project, setProject] = useState();
    const loadPortfolioData = () =>{
        // console.log("o", button.name)
        setProject(previousValue => previousValue = button.name);
        console.log("project", project)
    }
    return (
        <>
            <button onClick={loadPortfolioData} className='capsule_button'> {button.name}</button>
        </>
    );
};

export default Capsule_Buttons;
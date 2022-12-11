import React, { useState } from 'react';
import "./Capsule_buttons.css"
const Capsule_Buttons = ({button}) => {
    // let [project, setProject] = useState("");
    const loadPortfolioData = () =>{
        // console.log("o", button.name)
        // const projectName = button.name;
        // setProject(previousValue => previousValue = projectName);
        // setProject(projectName);
        // console.log(project)
        console.log(button.name)
    }
    return (
        <>
            {/* <button onClick={loadPortfolioData} className='capsule_button'> {button.name}</button> */}
            <button onClick={loadPortfolioData}  className='capsule_button'> {button.name}</button>
            
        </>
    );
};

export default Capsule_Buttons;
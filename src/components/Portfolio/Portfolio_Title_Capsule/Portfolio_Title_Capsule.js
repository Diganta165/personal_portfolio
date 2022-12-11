import React, { useEffect, useState } from 'react';
import "./Portfolio_Title_Capsule.css"
import Capsule_Buttons from '../Capsule_Buttons/Capsule_Buttons';


const Portfolio_Title_Capsule = () => {
    const capsuleButtonsData = [
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

    // const [projectType, setProjectType] = useState("");
    const [capsuleButtons, setCapsuleButtons] = useState([]);

    // const selectedProjectType = (v) =>{
    //     // setProjectType(previousValue => previousValue = button);
    //     // console.log("projectType", button.id)
    //     console.log("hi", v)
    // };

    useEffect(()=>{
        setCapsuleButtons(capsuleButtonsData);
    }, []);

    

    return (
        <div className='capsule_buttons'>
            <div className='capsule_buttons_container'>
                <div className='capsule_buttons_wrapper'>
                    {/* {capsuleButtons.map(button => <Capsule_Buttons onClick = {this.selectedProjectType.bind(this)} button = {button} key ={button.id}/>)} */}
                    {/* {capsuleButtons.map((button, index) => <Capsule_Buttons onClick = {(button)=>selectedProjectType(button.name)}  button = {button} key ={index} />)} */}
                    {/* {capsuleButtons.map((button, index) => <Capsule_Buttons onClick = {selectedProjectType}  button = {button} key ={index} />)} */}
                    {/* {capsuleButtons.map((button, index) => {
                        console.log(button.name);
                        <div onClick ={selectedProjectType} key = {index}>button</div>
                    })} */}
                    {
                        capsuleButtons.map((element, index) => <Capsule_Buttons key={index} button ={element}></Capsule_Buttons>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio_Title_Capsule;
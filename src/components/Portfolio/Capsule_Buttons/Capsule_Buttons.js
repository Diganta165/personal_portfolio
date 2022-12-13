import React, { useEffect, useState } from 'react';
import "./Capsule_buttons.css"
const Capsule_Buttons = ({button}) => {
    const [buttonData, setButtonData] = useState({
        name:"All",
        id:1,
        data:[

        ]
    });

    useEffect(()=>{
        setButtonData((stateElement)=>{
            return{...stateElement, name: button.name, id: button.id, data: [button.data]};
        });
        console.log("buttonData1",buttonData)
    },[]);

    const loadPortfolioData = () =>{
        console.log(button.name)
        setButtonData((stateElement)=>{
            return{...stateElement, name: button.name, id: button.id, data: [button.data]};
        });
        console.log("buttonData",buttonData)
    };
    return (
        <>
            {/* <button onClick={loadPortfolioData} className='capsule_button'> {button.name}</button> */}
            <button onClick={loadPortfolioData}  className='capsule_button'> {button.name}</button>
            
        </>
    );
};

export default Capsule_Buttons;
import React, { useEffect, useState } from 'react';
import "./Capsule_buttons.css"
const Capsule_Buttons = ({button, handler}) => {
    // const [buttonData, setButtonData] = useState({
    //     name:"All",
    //     id:1,
    //     data:[

    //     ]
    // });

    // useEffect(()=>{
    //     setButtonData((stateElement)=>{
    //         return{...stateElement, name: button.name, id: button.id, data: [button.data]};
    //     });
    // },[]);

    return (
        <>
            <button onClick={handler}  className='capsule_button'> {button.name}</button>
            
        </>
    );
};

export default Capsule_Buttons;
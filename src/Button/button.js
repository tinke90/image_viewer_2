import React, {useEffect, useState} from "react";
import "../Styling/button.css";

function Button(prop){
    const [click, setClick] = useState(0);
    
    let increase = ">>";
    let decrease = "<<";

    /*const Increase = () => {
        if(click < 5000){
            
        }
        setClick(click => click + 1);
        console.log(click);
    }
    const Decrease = () => {
        if(click > 0){
            
        }
        setClick(click => click - 1);
        console.log(click);
    }*/

    const Increase = () => {
        if(click < 4999){
            setClick(click => click + 1);
        }
    }

    const Decrease = () => {
        if(click > 0){
            setClick(click => click - 1);
        }
    }

    useEffect(() => {
        prop.clicks(click);
    },[click])

    return(
        <>
            <button className="btn_background" onClick={() => Decrease()}>
                <span> {decrease} </span>
            </button>
            <button className="btn_background" onClick={() => Increase()}>
                <span> {increase} </span>
            </button>
        </>
    );
}

export default Button;
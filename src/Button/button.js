import React, {useEffect, useState} from "react";
import "../Styling/button.css";

function Button(prop){
    const [click, setClick] = useState(prop.currentImage);
    
    // increase / decrease button texts
    let increase = ">>";
    let decrease = "<<";

    // Increase the size of JSON IMG list
    const Increase = () => {
        if(click < 4999){
            setClick(click => click + 1);
        }
    }

    // Decrease till value is zero
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
            <table className="btn_table">
                <tr>
                    <th className="btn_left_column">
                        <button className="btn_background" onClick={() => Decrease()}>
                            <span> {decrease} </span>
                        </button>
                    </th>
                    <th className="btn_right_column">
                        <button className="btn_background" onClick={() => Increase()}>
                            <span> {increase} </span>
                        </button>
                    </th>
                </tr>
            </table>
        </>
    );
}

export default Button;
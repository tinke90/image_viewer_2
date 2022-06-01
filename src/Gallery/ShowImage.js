import React, {useState, useEffect} from "react";
import Button from '../Button/button';
import "../Styling/show.css";


function Show(prop){
    const [click, setClick] = useState(0);

    useEffect(() => {
        console.log(click);
    },[click])

    return(
        <div className="show_background">
            <div className="show_img_plate">

                <table className="show_table">
                    <tr>
                        <th className="show_top_col">
                            <img className="show_img_frames"
                                src={prop.url}
                                alt={prop.title}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="show_bottom_col">
                            <Button clicks={click => setClick(click)}/>
                        </th>
                    </tr>
                </table>

            </div>
        </div>
    );
}

export default Show;
import React, {useState, useEffect} from "react";
import Button from '../Button/button';
import "../Styling/show.css";

/**
 * 
 * @param prop 
 *      Params: url, title, images, currentImage, viewImage
 * @returns 
 * 
 * Allowe user to review images by clicking [previous=<<] or [next=>>]
 */
function Show(prop){
    const [click, setClick] = useState(prop.currentImage);
    const [imageSlider, setImageSlider] = useState(true);

    const CloseImageSlider = () => {
        setImageSlider(false);
    }

    useEffect(() => {
        setClick(prop.currentImage);
    },[])

    useEffect(() => {
        prop.viewImage(imageSlider);
    },[imageSlider]);

    return(
        <div className="show_background">
            <div className="show_img_plate">

                <table className="show_table">
                    <tr>
                        <th className="show_top_col">
                            <table className="show_table">
                                <tr>
                                    <th>
                                        <span>
                                            {prop.images[click].title}
                                        </span>
                                    </th>
                                    <th className="show_close" onClick={() => CloseImageSlider()}>
                                        <span>
                                            {"X"}
                                        </span>
                                    </th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <th className="show_mid_col">
                            <img className="show_img_frames"
                                src={prop.images[click].url}
                                alt={prop.title}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="show_bottom_col">
                            <Button clicks={click => setClick(click)} currentImage={prop.currentImage}/>
                        </th>
                    </tr>
                </table>

            </div>
        </div>
    );
}

export default Show;
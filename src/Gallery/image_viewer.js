import React, {useState, useEffect} from 'react';
import ExtractData from '../Utils/ExtractData';
import image_data from './image_data';
import ShowImageSlider from './ShowImage';
import Button from '../Button/button';
import "../Styling/image_viewer.css";

/** 
 * Show image grid pane in main page
 * 
 * allow user to click any of the displayed image and
 * bring darkened background, and image viewer
 */
function ImageViewer(){
    const [imageSlider, setImageSlider] = useState(false);
    const [imageGrid, setImageGrid] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [imgData, setImgData] = useState([
        {
            albumId : '',
            id : '',
            thumbnailUrl : '',
            title : '',
            url : '',
        } 
    ]);

    const ShowImage = (imgNumber) => {
        setCurrentImage(imgNumber);
        setImageSlider(true);
    }

    const CreateImgElement = (url, title, imgNumber) => {
        
        return(
            <th>
                <table>
                    <tr>
                        <th>
                            <img
                                className='img_v_image_layout'
                                onClick={() => {ShowImage(imgNumber)}}
                                src={url}/>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <span>{title}</span>
                        </th>
                    </tr>
                </table>
            </th>
        );
    }

    useEffect(() => {
        var data = image_data.GetJSONData().then(result => {
            setImgData(result);
        });
    },[])

    useEffect(() => {

        var grid_element = [];
        var img_element  = [];
        let row = 1;
        for(const [index, value] of imgData.entries()){
            
            // Create single element, create table element
            // and store element to the array
            img_element = img_element.concat(
                CreateImgElement(value.url, value.title, value.id)
            );

            // If four elements in row has reached
            // its time to take move on next row
            if(row == 4){
                grid_element = grid_element.concat(
                    <tr>
                        {img_element}
                    </tr>
                );
                row = 0;
                img_element = [];
            }
            row++;
        
            // If 24 images reached in 
            // grip pane, render all elements in page
            if(index > 24){
                setImageGrid(grid_element);
                break;
            }
        }

    },[imgData]);

    return (
        <>
             {imageSlider
             ? <ShowImageSlider
             url={imgData[currentImage].url}
             title={imgData[currentImage].title}
             images={imgData}
             currentImage={currentImage-1}
             viewImage={imageSlider => setImageSlider(imageSlider)}/>
            : null}
             <table className='img_v_table'>
                {imageGrid}
             </table>
        </>
    )
};

export default ImageViewer;

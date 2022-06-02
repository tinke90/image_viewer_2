import React, {useState, useEffect} from 'react';
import ExtractData from '../Utils/ExtractData';
import image_data from './image_data';
import ShowImageSlider from './ShowImage';
import Button from '../Button/button';
import "../Styling/image_viewer.css";

//import JSONData from "./image_data"

var items = [];
var images = [];

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
            img_element = img_element.concat(
                CreateImgElement(value.url, value.title, value.id)
            );

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
        // Tee palapelimainen, ota kolme ensimmäistä samalle
        // riville ja liitä se vasta uuteen objektiin,
        // lopuksi julkaistaan objekti joka sisältää koko elementin
        /**
         * 1..2..3 menee objectiin A
         * objecti A menee objectiin B joka
         * on kokonais elementti joka myös näytetään
         * renderöinnissä...
         */
            //console.log(index)
            //grid_element = grid_element.concat();

            if(index > 24){
                setImageGrid(grid_element);
                console.log("break point...");
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

/*
<tr key={index} className='img_v_row'>
                    <th key="1" className='img_v_col'>
                        <img className='img_v_image_layout' src={value.url}/>
                    </th>
                    <th key="2" className='img_v_col'>
                        <img className='img_v_image_layout' src={value.url}/>
                    </th>
                    <th key="3" className='img_v_col'>
                        <img className='img_v_image_layout' src={value.url}/>
                    </th>
                    <th key="4" className='img_v_col'>
                        <img className='img_v_image_layout' src={value.url}/>
                    </th>
                </tr>
*/



/*
var tmp = [];
        for(const [index, value] of imgData.entries()){

        // Tee palapelimainen, ota kolme ensimmäistä samalle
        // riville ja liitä se vasta uuteen objektiin,
        // lopuksi julkaistaan objekti joka sisältää koko elementin
        /**
         * 1..2..3 menee objectiin A
         * objecti A menee objectiin B joka
         * on kokonais elementti joka myös näytetään
         * renderöinnissä...
         *

        //for(let i = 0; i < imgData.length / 4; i++){
            console.log(index)
            tmp = tmp.concat(
                <tr key={index} className='img_v_row'>
                    <th key="1" className='img_v_col'>
                        <img src={value.url}/>
                    </th>
                    <th key="2" className='img_v_col'>
                        <img src={value.url}/>
                    </th>
                    <th key="3" className='img_v_col'>
                        <img src={value.url}/>
                    </th>
                    <th key="4" className='img_v_col'>
                        <img src={value.url}/>
                    </th>
                </tr>
            );

            if(index > 24){
                setImageGrid(tmp);
                console.log("break point...");
                break;
            }
        }
*/



/*{imageSlider
             ? <ShowImageSlider
             url={imgData[0].url}
             title={imgData[0].title}
             images={imgData}
             viewImage={imageSlider => setImageSlider(imageSlider)}/>
            : null}
             <table>
                {imageGrid}
             </table> */


/*<div>
                <div>
                    <span>ID: </span>
                    {imgData[0].id}
                </div>

                <div>
                    <span>Title: </span>
                    {imgData[0].title}
                </div>

                <div>
                    <span>Album id: </span>
                    {imgData[0].albumId}
                </div>

                <div>
                    <span>URL: </span>
                    {imgData[0].url}
                </div>

                <div>
                    <span>Tumbnail url: </span>
                    {imgData[0].thumbnailUrl}
                </div>

                <div>
                <img
                    src={imgData[0].url}
                    alt={imgData[0].title}
                    onClick={() => ShowImage()}/>
                </div>
            </div> */


            /*var tmp = [];
        for(let i = 0; i < imgData.length / 3; i++){
            tmp = tmp.concat(
                <tr className='img_v_row'>
                    <th className='img_v_col'>1</th>
                    <th className='img_v_col'>2</th>
                    <th className='img_v_col'>3</th>
                    <th className='img_v_col'>4</th>
                </tr>
            );

            if(i > 24){
                setImageGrid(tmp);
                console.log("break point");
                break;
            }
        } */
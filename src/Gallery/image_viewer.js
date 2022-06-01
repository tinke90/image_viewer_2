import React, {useState, useEffect} from 'react';
import ExtractData from '../Utils/ExtractData';
import image_data from './image_data';
import ShowImageSlider from './ShowImage';
import Button from '../Button/button';

//import JSONData from "./image_data"

var items = [];

function ImageViewer(){
    const [imageSlider, setImageSlider] = useState(false);
    const [imgData, setImgData] = useState([
        {
            albumId : '',
            id : '',
            thumbnailUrl : '',
            title : '',
            url : '',
        } 
    ]);

    const ShowImage = () => {
        setImageSlider(true);
    }

    useEffect(() => {
        //items = ExtractData.Extract(imgData);
        var data = image_data.GetJSONData().then(result => {
            //var parse = ExtractData.Extract(result);
            var parse = result;
            //console.log(parse[4999]);
            setImgData(parse);
        })

        
    }, []);

    return (
        <>
             {imageSlider
             ? <ShowImageSlider
             url={imgData[0].url}
             title={imgData[0].title}
             viewImage={imageSlider => setImageSlider(imageSlider)}/>
            : null}
             <div>
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
            </div>
        </>
    )
};

export default ImageViewer;
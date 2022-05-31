import React, {useState, useEffect} from 'react';
import ExtractData from '../Utils/ExtractData';
import image_data from './image_data';
//import JSONData from "./image_data"

var items = [];

function ImageViewer(){
    const [imgData, setImgData] = useState([
        {
            albumId : 'asdf',
            id : '1',
            tumbnailUrl : 'asdöfioa',
            title : 'vittu',
            url : 'https://www.google.com/fuck-you/',
        } 
    ]);

    const [test, setTest] = useState([]);
    
    useEffect(() => {
        //items = ExtractData.Extract(imgData);
        var asdf = image_data.GetJSONData().then(result => {
            //var parse = ExtractData.Extract(result);
            var parse = result;
            console.log(parse[4999].albumId);
            setImgData(parse);
        }) 
        
    }, []);

    return (
        <>
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
                    {imgData[0].tumbnailUrl}
                </div>
            </div>
        </>
    )
};

export default ImageViewer;
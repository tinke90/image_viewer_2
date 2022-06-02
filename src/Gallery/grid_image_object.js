import React, {useState, useEffect} from "react";

function GridImageObject(prop){
    const [image, setImage] = useState();


    const CreateGridPage = () => {
        let row = 1;

        for(let i = 0; i < prop.imageList.length / 3; i++){
            setImage([
                {
                    
                }
            ]);
        }
    }


    return(
        <>
            
        </>
    );
}

export default GridImageObject;

/*return(
        <>
            <table>
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>

                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>

                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>
            </table>
        </>
    ); */
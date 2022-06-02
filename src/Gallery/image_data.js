import axios from "axios";

/**
 * Get the JSON data from url
 * which contains punch of image links
 * and other information
 */
async function GetJSONData(){
    const URL = "http://jsonplaceholder.typicode.com/photos";

    return await axios.get(URL)
    .then(response => {
        response = response.data;

        return response;
    });
};


export default {GetJSONData};

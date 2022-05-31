import React, {useState} from "react";
import image_data from "../Gallery/image_data";

/* Extract the JSON data that was get from
 *  axios http get request
 */
const Extract = (data) => {

    // Initialize empty array
    var items = [];

    // Go through the data and store to array
    for(var i = 0; i < data.length; i++){
        items = items.concat(data[i]);
    }

    // simply return the data
    return items;
}

export default {Extract};
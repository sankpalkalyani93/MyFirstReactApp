import React from "react";

function AttributesInJSX(){
    const imageUrl = 'https://via.placeholder.com/150';
    return (
        <div>
            <h2>Hell, World!</h2>
            <img src={imageUrl} alt="Placeholder"/>
        </div> 
    );
}

export default AttributesInJSX;
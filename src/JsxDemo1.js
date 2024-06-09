import React from "react";

function DemoJSX(){

    const message = "Hello All.! Welcome to React Session.!";
    const num1 = 10;
    const num2 = 20;
    let sum = num1 + num2;
    let radius = 2;
    let area = 3.14 * radius * radius;
    let x = 10;
    let y = 5;
    let temp = x;
    x = y; 
    y = temp;
    return (
        <div>
            <h2>JSX Demo</h2>
            <p>My message : {message}</p>
            <p>Addition : {sum}</p>
            <p>Area of Circle : {area}</p>
            <p>Swapped value of x : {x}, and y : {y}</p>
        </div>
        
    );
}

export default DemoJSX;
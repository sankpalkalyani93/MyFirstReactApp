import React from "react";

function addition(n1, n2){
    return n1 + n2;
}

function multiplication(n1, n2){
    return n1 * n2;
}

function greaterNumber(n1, n2){
    // eslint-disable-next-line no-useless-concat
    return n1 > n2 ? "n1 " + n1 + " is greater" : "n2 " + n2 + " is greater";
}
function evenOddNumber(num){
    if(num % 2 === 0){
        return <p>{ num } is even </p>
    }
    else{
        return <p>{num} is odd</p>
    }
}

function userGreeting(userName){
    if (userName === "kalyani sankpal"){
        return <p>Welcome, {userName}</p>
    }
    else{
        return <p>Welcome, Guest</p>
    }
}

function FunctionDemo(){
    const userName = "kalyani";

    return(
        <div>
            <p>Summation : {addition(10, 5)}</p>
            <p>Multiplication : {multiplication(3, 5)}</p>
            <p>Which number is greater? : {greaterNumber(12, 7)}</p>
            {evenOddNumber(5)}
            {userGreeting(userName)}
        </div>

    );
}

export default FunctionDemo;
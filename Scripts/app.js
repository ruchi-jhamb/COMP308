let myGlobalVariable = 0;

// Sef-Executing Anonymous function
//IIFE - Immediately Invoked Function Expression
(function(){
    let myFunctionVariable = 0;

    function Start(){
        let startVariable = 0;
    console.log(`%cApp Started.. ${startVariable}`, " font-size: 20px");
    console.warn("hi");
    console.error("hi");

}

window.addEventListener("load",Start);

}) ();
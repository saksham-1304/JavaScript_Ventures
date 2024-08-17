//Immediately Invoked Function Expression(IIFE)

(function chai() {
    //Named IIFE
    console.log("DB CONNECTED")
})(); //here semicolon is necessary


(() => {
    console.log("DB CONNECTED TWO")
})();

((name) => {
    console.log(`Name is ${name}`)
})("Saksham");


/*
Javascript Execution Context

{}->Global Execution Context    <-this


->Global Exection Context
->Function Execution Context
->Eval Execution Context


{} ->Memory Creation Phase
   ->Execution Phase
*/
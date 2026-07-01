// Immediately Invoked Function Expressions (IIFE)

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// semicolon is used to end the function explictely

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("priya")
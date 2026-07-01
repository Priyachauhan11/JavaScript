const userEmail = ""

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("do not get user email");
    
}

// ++++++++++++++++++falsy value++++++++++++++++++++++
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// ++++++++++++++++++truthy value+++++++++++++++++++++
// "0", "false", " ", [], {}, function(){}

// check if array is empty
if (userEmail.length === 0) {
    console.log("array is empty");    
}

// check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");    
}
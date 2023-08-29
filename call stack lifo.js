function firstFunction() {
    secondFunction();
    console.log("First Function");
  // if we write console first than console first
}

function secondFunction() {
    thirdFunction();
    console.log("Second Function");
}

function thirdFunction() {
    console.log("Third Function");
}

firstFunction(); 
// output 321



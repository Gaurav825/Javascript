// async return promise 
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {console.log(value);}
);
//The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I am await !!");}, 3000);
  });
  console.log(await myPromise);
}

myDisplay();


// output:
// Hello
// I am await !!

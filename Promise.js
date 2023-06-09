let myPromise1 = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise1.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
// myPromise.state      	myPromise.result
// "pending"	            undefined
// "fulfilled"           	a result value
// "rejected"	            an error object

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);
let p=new Promise((myResolve,myReject)=>{
  setTimeout(()=>{myResolve("i am Gaurav")},3000);
});
p.then((value)=>{console.log(value);},(error)=>{console.log(error);});
/*
output:
OK
i am Gaurav
*/


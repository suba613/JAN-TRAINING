//promises

//var myPromise = new Promise(function(resolve,reject)=>{
//    setTimeout(function(){
//   resolve("success -1");
//    },2000);

//    setTimeout(function(){
//   reject ("error occured");
//},7000);
//});
//myPromise
//.than((data)) => (data +="hey"))
// .then ((data)=>
//  {console.log(data);
//})
// .catch ((error)=>
//  {console.log( each block "error");
//});
//
// console.log(" This is at the last -2 ");
//
 //async and await js

// setTimeout(function)(){
//     console.log("1");
//  };5000);
//a->b $1000.00
//validating pwd => 3sec

//  console.lpog("2");
//transfer $1000.00

//  var  myPromise = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        resolve("success");
//    },3000);
//  });
// 
//let getOurPromiseResult;
// var getOurPromise = async () =>{
//    getOurPromiseResult =await myPromise;
//    //return getOutPromiseResult
// console.log(getOurPromiseResult);
// };
//
// getOurPromise();
// console.log("out of promis");


var  myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("subaresbeinxeuy");
    },3000);
    setTimeout(function(){
        reject("err");
    },6000);
  });

 var getOurPromise = async () =>{
  try{
      let getOurPromiseResult = myPromise;

 console.log(getOurPromiseResult);
 //throw new error;
 //console.log(errotr);
 }catch(error) {
    console.log(error);
 }
};

 getOurPromise();
 console.log("out of promis");
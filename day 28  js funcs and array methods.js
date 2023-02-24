//arrow function 
//var sum =(a,b) =>{
//    console.log(a+b);
//}
//sum(4,5)//;
//
// No need of {} for a single line of function// 
//
//var sum = (a,b) => console.log (a+b);
//sum(5,5);

//array methodalogy methods 

//var array = [ 1,2,3,4,5];
//console.log("current array =>",array);

//1. Map
//Call back function 

//var newarray = array.map((data) => data+2);
//var newarray = array.map((data) => data*2);
//var newarray = array.map((item) => item*2);
//var newarray = array.map((item,index) => { return console.log ( item*2, "=>",index)});
//console.log("newarray => with map =>",newarray);

//2.Filter
//const newArray2 =aaray.filter((data)=>data <=3);
//const newArray2 =array.filter((data)=>{
//if(data <3)
//        return data;
////});
////console.log("filter =>",newArray2//)
//
////3.find
//var newArray3 =array.find((data) =>data<3);
//console.log("find =>",newArray3)

//4.Reduce

//var totalsum = array.reduce ((accumulation,currentValue)=>{
//    return accumulation * currentValue;
// },0)
// console.log(totalsum);
//
// var FlipkartCart = [
//    {
//        price:200,
//        quantity:2
//    },
//    {
//        price:400,
//        quantity:1
//    },
//    {
//        price:100,
//        quantity:4
//    },
//    {
//        price:1200,
//        quantity:2
//    },
//    {
//        price:500,
//        quantity:2
//    },
// ];
// var totalCost= FlipkartCart.reduce ((accumulator, currentVAlue)=>{
//    return accumulator * currentVAlue.price *currentVAlue.quantity;
// },0)
// console.log(totalCost)

//promises
//It is an object that returns a value that we hope to recieve in the future but not immediatley
//eg: yt playlist
//2:20sec buffer 2:55sec
//1.pending state (need to watch)
//2.fullfill (playing)
//3.Reject (not able to play)

//syntax: var myPromises = new Promise(() => {})
//syntax: var myPromises =new myPromises(function() {})

var myPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
   resolve("success");
    },000);

    setTimeout(function(){
   reject ("error occured");
},7000);
});
myPromise
 .then ((data)=> {console.log(data)})
 .catch ((err)=> {console.log(err)});





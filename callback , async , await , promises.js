// ++++++++++++++++++++++++++++++++++++ asynchromous programming  ++++++++++++++++++++++++++++++++++++++++//                         
//                   asynchromous programming                           --  It is the way of write code if in somehow any function or any line of code is taking time to execute then by using asynchrous coding way we can execute next line of code if they codes are not depend on that delay code 
// function hello() {
//     console.log("hello! welcome to javascript")
// }

// setTimeout (hello , 5000)  // 1sec = 1000 miniseconds


// by using arrow function
//  setTimeout (()=>{
//     console.log("hello! welcome to javascript")
// }, 4000)

// console.log("first line ")
// console.log("second line ")
// console.log("third line ")
// console.log("fourth line ")
// setTimeout (()=>{
//     console.log("hello! welcome to javascript")
// }, 4000)
// console.log("fifth line ")
// console.log("six line ")

                               // callback hell

// function callData (data){
//     setTimeout(()=>{
//         console.log("data id =", data )
//     }, 4000)
// }
// callData(5)
// callData(6)
// callData(7)
// callData(8)

// executing the function after 4 seconds
function callData (data ){
    setTimeout(()=>{
        console.log("data id =", data )
    }, 2000)
};

// callData(5, () => {
//     callData(10, () => {
//         callData(15);
//     });
// });


callData(5, () => {
    callData(10, () => {
        callData(15);
    });
});


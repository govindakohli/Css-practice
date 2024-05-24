// How to create a function in javascript 
// function myFunction() {
//     console.log("Hello ! i am function");
//     console.log("Hello ! i am function");
//     console.log("Hello ! i am function");
//     console.log("Hello ! i am function");
// }
// How to call a function
// myFunction();
// Hello ! i am function
// Hello ! i am function
// Hello ! i am function
// Hello ! i am function

// Arrow Function 
// const arrowMul = (a = prompt("enter Your age ") ) => {
//    if ( a >=18) {
//     console.log("Congratulation!. You are eligible for the driving.")
//    }
//   else (
//     console.log("Sorry! You are not eligible for the driving.")
//   )

// }

// function table() {
//     for(let i=0;i<=10;i++)
//         {
//             console.log(i*2);
//         }
// }
// // table();
// // table();
// for(let i=0;i<=10;i++){
//         table()
//     }
// function table2() // table of 2 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log(i*2);
//         }
// }
// table();
// table();
// for(let i=0;i<=10;i++)
//     {
      
//         console.log("line change" , i);
//         table();
//     }
//++++++++++++++++table form 2 to 10 
// function table2() // table of 2 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `2 x ${i} =`, i*2);
//         }
// }
// function table3() // table of 3 
// {
//     for(let i=1;i<=10;i++)
//         {
//             console.log( `3 x ${i} =`, i*3);
//         }
// }

// function table4() // table of 4 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `4 x ${i} =`, i*4);
//         }
// }

// function table5() // table of 5 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `5 x ${i} =`, i*5);
//         }
// }

// function table6() // table of 6 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `6 x ${i} =`, i*6);
//         }
// }

// function table7() // table of 7 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `7 x ${i} =` ,  i*7);
//         }
// }

// function table8() // table of 8 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `8 x ${i} =` , i*8);
//         }
// }

// function table9() // table of 9 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `9 x ${i} =`, i*9);
//         }
// }

// function table10() // table of 10 
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `10 x ${i} =`, i*10);
//         }
// }

// table2()
// console.log("next table ")
// table3()
// console.log("next table ")
// table4()
// console.log("next table ")
// table5()
// console.log("next table ")
// table6()
// console.log("next table ")
// table7()
// console.log("next table ")
// table8()
// console.log("next table ")
// table9()
// console.log("next table ")
// table10()

// how to print any table by function 


// function table(a)  
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log( `${a} x ${i} =`, i*a);
//         }
// }
//  table(5)
// table(6)


                                             // high order function  // it only apply on array .

1. // map function - a provide the array value and b provide the index value and c provide the entire array in the console 

// let arr = [1,2,3,4,10,20,30,40];

// arr.map(function(a){
//     console.log(a)
// })

// by using arrow function 
// arr.map((a ,b , c )=>{
//     // let map = console.log(a ,b , c )
//    })

//   short way of write   [1,2,3,4,10,20,30,40].map((a)=>console.log(a*10))



// In the return we can do arthimetic operation like + - * /  with each element of array 


// let map = arr.map((a )=>{
//     return a +5
//    })
// console.log( map)


2. // filter -  a provide the array value and b provide the index value and c provide the entire array in the console 

// let arr = [1,2,3,4,10,20,30,40];
//  arr.filter((a , b , c )=>{
//     console.log(a,b,c)
//  })

// in the return we use to filter the value 
// let filter = arr.filter((a )=>{
    // if(a>=5 && a<=30 ){
    //     return a
    // }
    
//     if (a%2==0){
//         console.log(a)
//     }

//  })
// console.log (filter)


3. // sort -- in which a provide the array value but delete the 1st element from the array - it start print the array value form the 2nd number -- b provide the array value from the 1st but it delete the last value in the console -- In the c it shows the (undefined)..

// let arr = [1,40,2,3,4,10,20,30,4,10];

// arr.sort((a,b)=>{
//     console.log(a,b)
// })

// in the return -- It is basically used to arrange the element in accending or deccending order 
// for accending  a-b
// for decending b-a
// let sort = arr.sort((a , b)=>{
//    return b-a
// })

// console.log(sort)

4. //forEach -- a provide the array value and b provide the index value and c provide the entire array in the console 

// let arr = [1,40,2,3,4,10,20,30,4,10];

// arr.forEach((a,b,c)=>{
//     console.log(a,b,c)
// })


// it return nothing with a , b , c 
// let forEach = arr.forEach((a)=>{
//     return a
// })

5. // reduce --It shows (undefined) while print a . a,b . a,b,c    -- it is basically use to calculate the addtion of entire array by using return

let arr = [1,40,2,3,4,10,30,10];

// arr.reduce((a)=>{
//     console.log(a)  
// })


// In the return function  if we pass single value it shows 1st element of array if we pass a,b as an argument and a+b in the return then it add entire array..
// let reduce = arr.reduce((a,b )=>{
//     return a+b
// },18)
// console.log(reduce)


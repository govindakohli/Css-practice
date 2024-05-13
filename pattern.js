// for(let i = 0;i<4; i++){ //outerloop  //for row
//     let value = ''; //***** /

//   for(let j = 0; j<4; j++){ //innerloop  //for column
//      // value+='*'
//      value = value+'*'  //  value = '*'  '*'+'*' = '**'
//   }
//   console.log(value)
    
// }
//  o/p 
//  ****
//  ****
//  ****
//  ****




// for(let i = 0;i<6; i++){ //outerloop  //for row
//     let value = '*'; //***** /

//   for(let j = 0; j<i; j++){ //innerloop  //for column
//      // value+='*'
//      value =value+'*'  //  value = '*'  '*'+'*' = '**'
//     //  console.log(value)
//   }
//   console.log(value)
// }
// o/p 
// *
// **
// ***
// ****
// *****
// ******

// for(let i = 0;i<1; i++){ //outerloop  //for row
//     let value = '*'; //***** /
//     console.log(value)
//   for(let j = 0; j<5; j++){ //innerloop  //for column
//      value =value+'*'  //  value = '*'  '*'+'*' = '**'
//      console.log(value)
//   }
// }
// o/p 
// *
// **
// ***
// ****
// *****
// ******



// for(let i = 0;i<5; i++){ //outerloop  //for row
//     let value = '*'; //***** /
//     console.log(value)
//   for(let j = 6; j<0; j--){ //innerloop  //for column
//     value = "*" , "*" , "*" , "*" , "*" , "*" , 
//     value = value-"*" //  value = '*'  '*'+'*' = '**'
//      console.log(value)
//   }
// //   console.log(value)
// }


//     for (let i = 0; i < 5; i++) {
//         let row = '';
//         for (let j = 0; j < 5 - i - 1; j++) {
//             row += ' ';
//         }
//         for (let k = 0; k < i + 1; k++) {
//             row += '*';
//         }
//         console.log(row);
//     }
//     *
//     **
//    ***
//   ****
//  *****


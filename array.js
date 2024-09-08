// Array it can hold more than 0ne value with diffrent data type for example -
// let array = [ "car" , "bus", "truck" , "train" , "bike" ]
             // 0       1       2         3         4 
//  console.log(array)   [ 'car', 'bus', 'truck', 'train', 'bike' ]


///  .length property - it always one extra than index value of an array
//  console.log(array.length) 5

// Array methoda in Javascript 

// 1. Array toString() - it is used to convert array into string 
// console.log(array.toString())   car,bus,truck,train,bike

// 2. Array at() - to get any element from the array by index number 
// console.log(array.at(4))   bike

// 3. Array join() - The join() method also joins all array elements into a string.
//                   It behaves just like toString(), but in addition you can specify the separator for exp - "/" , "*".
//    console.log(array.join("/"))      car/bus/truck/train/bike

// 4. Array pop() - it is used to delete or remove an item from the array it remove the item from the last , it remove or delete one item at one time but we  can remove or delete multiple itme but using multiple time 
// array.pop()   
// console.log(array)         [ 'car', 'bus', 'truck', 'train' ]
// array.pop()
// console.log(array)         [ 'car', 'bus', 'truck' ]
// array.pop()
// console.log(array)         [ 'car', 'bus' ]

// 5. Array push() - it is used to add the item in the array it can add one or more than one item in the array 
//  array.push("cycle")   
//  console.log(array)    [ 'car', 'bus', 'truck', 'train', 'bike', 'cycle' ]
//  array.push("superbike","ship")
//  console.log(array)  [ 'car', 'bus', 'truck', 'train', 'bike', 'superbike', 'ship' ]
// 6. Array shift() - it remove the item from the first - it similar to pop but only diff is it remove from start and pop delete from End .
//  array.shift()
//  console.log(array)   [ 'bus', 'truck', 'train', 'bike' ]

// 7. Array unshift() - it used to add item from the start in the array another wise it similar to push method
// array.unshift("cycle")
// console.log(array)   [ 'cycle', 'car', 'bus', 'truck', 'train', 'bike' ]
// array.unshift("superbike","ship")
// console.log(array)     [ 'superbike', 'ship', 'car', 'bus', 'truck', 'train', 'bike' ]

// 8. Array concat() - it is used to join two diff array and more than 2 array as well .
//  let arr1 = [2 , 3 , 4 , 5 , 6 ,7]
//  let arr2 = ["man" , "person" , "india"]
//  let arr3 = arr1.concat(arr2)
//  console.log(arr3)    [ 2, 3, 4, 5, 6, 7, 'man', 'person', 'india' ]
// let arr4 = arr1.concat(array).concat(arr2)
// console.log(arr4)
// [
//     2,        3,       4,
//     5,        6,       7,
//     'car',    'bus',   'truck',
//     'train',  'bike',  'man',
//     'person', 'india'
//   ]
    // **not clear//  9. Array copyWithin() - it is used to copy the item exp- Copy to index 2, all elements from index 0:
// console.log(array)
//  array.copyWithin(2 , 0 )
//  console.log(array)

// 10. Array flat() - it convert sub-array to an array
//  let str = [["car"/,"bus"],[1,3,4],[false , true ]] ;
//  let newarray = str.flat();
//  console.log(newarray)
//    ['car', 'bus', 1, 3, 4, false, true]
// 11. Array slice() - it used to print piece of code from the array
//  let Slice= array.slice(1 , 4 )
// console.log(Slice)   [ 'bus', 'truck', 'train' ]

// 12. Array splice() - it is use to remove , add and replace the item in the array 
// console.log(array)
// array.splice(0 , 0 , "babybike")
// console.log(array)
// array.splice(0 , 3 )
// console.log(array)

// 13 . indexof() Returns the index of the first element that satisfies the testing function.
// const arr = [1, 1,2,2, 3, 4];
// const index = arr.indexOf(3)

// console.log(index)




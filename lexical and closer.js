// closure  and lexical scopping in js 
                
// lexical scoping in js  
                //   in lexical scoping gives you access to an outer function's scope from an inner function. but sub child function  not gives you access . 
                // in otherwords a child can take access of paresnts  but parents can't take child function access and sub child also can't take access of each others
// function gradparents () {
//     let gradparents = "gradparents"
//     function parents1 () {
//         let parents_1 = " parents 1 "
//         // console.log(gradparents)
//     }
//     parents1 ()
// }
// gradparents ()

                                                       // closure scoping in js  

//   closure gives you access to an outer function's scope from an inner function.

// this is normal way to change the color by button but if we have 50 color then we have to repeat our code 50times so to avoid this scenerio we have  closure

//   document.getElementById("orange").onclick = function(){
//         console.log("clicked")
//         document.body.style.backgroundColor = "orange"
//     }
//     document.getElementById("green").onclick=()=>{
//         document.body.style.backgroundColor = "green"
//     }

// if we create a fucntion and pass value 
 
// function clickhandler (color) {
// document.body.style.backgroundColor = `${color}`
// }
// document.getElementById("orange").onclick = clickhandler("orange")
// document.getElementById("green").onclick = clickhandler("green")
//    // it change the color without clickb 

// by using closure scoping 

function clickhandler (color) {
     return function (){
        document.body.style.backgroundColor = `${color}`
     }

    }
    document.getElementById("orange").onclick = clickhandler("orange")
    document.getElementById("green").onclick = clickhandler("green")


// const employee = {
//     calcTax() {
//         console.log("The tax rate is 10 %");
//     }
// };

// const Aman = {
//     salary : 50000,
//     calcTax() {
//         console.log("The tax rate is 20 %");
//     },
// }

// adding to different object by using prototype (__proto__)
// Aman.__proto__= employee ;


                                                         // classes 
                
// class car {
//     constructor(){
//         console.log("Creating your dream Car") // autometically involked by new(keyword).
//     }    
//     start() {
//         console.log("start the car")
//     }
//     stop() {
//         console.log("stop the car")
//     }
//     setBrand(Brand) {
//         this.brandname=Brand;
//     }
// }

// const Tata = new car();
// const Kia = new car();
// const Fortuner = new car();
// Fortuner.setBrand("fortuner");   // Fortuner 

                                                // inheritance in Js
                
// class person {
//     eat() {
//         console.log("Eating mode ")
//     }
//     sleep() {
//         console.log("sleeping  mode ")
//     }
// }

// class engineer extends person {
//     work(){
//         console.log("Problem solving and exploring new features")
//     }
// }

// let sonam = new engineer 

                                                 // super keyword in js // to call property from parents class in the child class
    
// class person {
//     eat() {
//         console.log("Eating mode ")
//     }
//     sleep() {
//         console.log("sleeping  mode ")
//     }
// }

// class engineer extends person {
   
//     work(){
//         super.eat();
//         console.log("Problem solving and exploring new features")
//     }
// }

// let sonam = new engineer 

// DOM methods in JavaScript

//++++++++++++++++++++++++++++++++++++++++++1.  Element Selection by id ++++++++++++++++++++++++++++++++++++++++++
let ID = document.getElementById("btn");
// console.dir(ID);
  // console.log(ID)

//++++++++++++++++++++++++++++++++++++2.  Element Selection by Class ++++++++++++++++++++++++++++++++++++++++++++
 let Class = document.getElementsByClassName("heading");
//  console.dir(Class);
//  console.log(Class);

//+++++++++++++++++++++++++++++++++++++3. Elemet Selection by tag name +++++++++++++++++++++++++++++++++++++++++++++
let TagName = document.getElementsByTagName( "h1");
// console.dir(TagName);

    // +++++++++++++++++++++++++++++++By Query selector 
//+++++++++++++++++++++++++++++++++++++4. Element Selection by QuerySelector - three of kind of request like 1. by #id , .class , tagname ..
// let QuerySelector = document.querySelector("#btn");
// console.dir ( QuerySelector);

//++++++++++++++++++++++++++++++++++5. Element Selection by QuerySelectorAll++++++++++++++++++++++++++++++++++++
let QuerySelectorAll = document.querySelectorAll("he");
// console.dir(QuerySelectorAll);

// let getatt = element.getAttribute("class");
// console.dir (getatt)

//++++++++++++++++++++++++++++++++++++ 6. changing the innertext of html by using javascript
// var element = document.querySelector("h1");
// let getatt = element.innerHTML="Welcome to DOM";
// var element = document.querySelector("p");
// let getattr  = element.innerText="Have a good day ";
// console.log(getatt)
// console.log(getattr)
// let btn = document.querySelector("#btn");
// let newBtn = btn.innerHTML = "click here to submit";
// console.dir (newBtn)

//++++++++++++++++++++++++++++++++++ */ difference between interText and interHtml+++++++++++++++++++++++++++++

// let Div = document.querySelector("#exampleDiv");
//  console.log(Div.innerHTML)  // This is <b>bold</b> text.
//  console.log(Div.innerText) //This is bold text.

// ++++++++++++++++++++++++++++++++++++++++how to apply CSS in js ++++++++++++++++++++++++++++++++

// let btn = document.querySelector("#btn");
// btn.style.color= "skyblue";
// btn.style.backgroundColor= "black "

// +++++++++++++++++++++++++++++++++for apply multiple Css property 
// btn.style.cssText = "background-color : white; color:blue ; border:2px solid rgb(47, 0, 255) ;  " 


//+++++++++++++++++++++++++++++++ attribute related 
// ++++++++++++++++how to call an attribute
//  call single attribute by attribute name 
let attribute = document.querySelector("button")

// let attributeValue = attribute.getAttribute("style")
// call all availbe  attribute in element  
// let attributeValues = attribute.attributes;
// console.dir(attributeValue)
// console.dir(attributeValues)
// console.log(attributeValues)

//++++++++++++++++++++++++++++++++++ Change the attribute value of an HTML element++++++++++++++++++++++++++++++++++
// by using methode 
  // let new_class=attribute.setAttribute("class" , "clickbutton") 
//  by using property  
  // attribute.classList = "clickbutton"
  // attribute.id = "clickbutton"
  // attribute.className = "clickbutton"

  // for class  // let attributeValue = attribute.getAttribute("class");
  // console.dir(attributeValue)
  // for id // let attributeValue = attribute.getAttribute("id");
  // console.dir(attributeValue)

  // +++++++++++++++++++++++++++++++++++++insert element by js +++++++++++++++++++++++++++++++

  // ++++++++++++++++++++add a button in html by js
  // 1. appren   add at the inside the end  of selected element 
   
  let button = document.createElement("button");
  button.innerText="click me !";
    button.style.cssText = "background-color : white; color:blue ; border:2px solid rgb(47, 0, 255) ;  " // css is optional

  let parentsNode = document.querySelector("p");
//  parentsNode.appendChild(button); 

//2. prepand   add at the inside the start  of selected element
// parentsNode.prepend(button); 

//3. before     add at the outside  the before  start   of selected element
// parentsNode.before(button); 

//4. after     add at the outside  the after   end    of selected element
parentsNode.after(button); 

// +++++++++++++++++++++++++++++++++++++Delete element by js +++++++++++++++++++++++++++++++









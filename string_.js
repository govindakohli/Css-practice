// String methods in Javascript

//length
//1.  string.length() => it start from 0 index
let str = "internet";
     //    01234567
// console.log(str.length) 8 
 
// for print single character from the string 
// 2.  String charAt()
// console.log(str.charAt(1)) n 
  
// 3.  String charCodeAt()
//  console.log(str.charCodeAt(0)) it provide the code of ASCII 

// 4.  String at()
// console.log(str.charAt(6)) e 

// 5.  String [ ]
// console.log(str[6])  e 

// There are 3 methods for extracting a part of a string

// 6. slice(start, end) = In whick the last value is not inclusive in which we can put negative value as well

// console.log(str.slice(2 , 8)) ternet
// console.log(str.slice(-9 , -1)) interne
// console.log(str.slice(-8 )) internet 

// 7.substring(start, end) = it is similar to slice method 
// console.log(str.substring(2 , 8)) ternet 
// console.log(str.substring(-9)) internet 

// 8.substr(start, length) In which we select 1 start char and second number take as length and length start from started number which we have selected  exp if select 4 as second number then it count next four char from the 1st number 
// console.log(str.substr(3,7)) ernet
// console.log(str.substr(-8 ,5)) inter 
// console.log(str.substr(2)) ternet 
 
// 9. String toUpperCase()
//      string = "javascript"
//  console.log(string.toUpperCase()) JAVASCRIPT

// 10. String toLowerCase()
//  string = "JAVASCRIPT"
// console.log(string.toLowerCase()) javascript

// 11. String concat() to joint two strings 
//   let char1 = "GOOD"
//   let char2 = "BYE"
//   console.log( char1+char2)  GOODBYE     normal way  
// console.log(char1.concat(char2)) GOODBYE 
// console.log(char1.concat("Bad") , char2.concat(char1))  GOODBad BYEGOOD
// console.log(char1.concat(" HUMAN"))  GOOD HUMAN 

// 12.  String trim() = To remove the space from start and end in the string 

let rim  = "   letter   ";
// console.log(rim)  (   letter   )
// console.log(rim.trim()) letter 

// 13. String trimStart() 
//  console.log(rim.trimStart()) (letter   )

// 14. String trimEnd()
// console.log(rim.trimEnd()) (   letter)

// 15. String padStart() = It is use to add padding or space from start
let chr="development"
//  console.log(chr.padStart(20)) (         development)

// 16. String padEnd() =It is use to add padding or space from end 
// console.log(chr.padEnd(20))  (development         )

// 17.String repeat()
 let chr2= "H"
// console.log(chr2.repeat(4))  HHHH

// 18. String replace()

let repl = `welcome to my code`
// console.log(repl)   welcome to my code
// console.log(repl.replace(`code` , `world`)) welcome to my world
  
// 19. String replaceAll()
//   console.log(repl.replaceAll(`e` , `o`)) wolcomo to my codo

// 20. String split()
// let repl2 = `Ram , Sakshi , Sonam`
//  console.log(repl2.split(",")) [ 'Ram ', ' Sakshi ', ' Sonam' ]
//  console.log(repl2.split("")) 
//  [
//     'R', 'a', 'm', ' ', ',',
//     ' ', 'S', 'a', 'k', 's',
//     'h', 'i', ' ', ',', ' ',
//     'S', 'o', 'n', 'a', 'm'
//   ]

   

  






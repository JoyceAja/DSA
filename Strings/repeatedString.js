/**
 * Given two strings A and B, find the minimum number of times A has to be repeated such 
 *  that B is a substring of it. If no such solution, return -1.

 * For example, with A = "abcd" and B = "cdabcdab".
 * Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and 
 * B is not a substring of A repeated two times ("abcdabcd").
 * 
 * Peusdo
 * So basically I know I will be creating a new string each time using A
 * let newStr = A
 * I want to check that B is a subString of that new string
 * Things that I care about is possibly the length of that string
 * 
 * with A = "abcd" and B = "cdabcdab".
 * newStr = "abcd"
 * newStr = "abcdabcd"
 * newStr = "abcdabcdabcd"
 * 
 * Say that I loop through the A
 * Find first instance of the character of B => c
 * Then I want to start a new loop from that index to the end of newStr
 * Use a while loop for that iteration
 * Use two pointers and my conditional statement is OR
 * 
 * I think to have a break through with this problem is discovering how to find substring
 * Because essentially that is what we are doing except we are also finding a new substring in 
 * new string we are creating by adding on string A
 */

 const repeatedString = (A, B) => {
    let newStr = A;
    let p1 = 0;
    let p2 = 0;
    let count = 0;
   
   //I need to loop through my B and newStr
   //Thinking of solving these linearly
    while(p2 < B.length && p1 < 2 * B.length) {
        //if my newString is a little short of my string B add A to newStr
        if(!newStr[p1]){
            newStr += A
            count++
        }
        
        //When to stop my while loop => at the end of string B
        if(newStr[p1] === B[p2] && p2 !== B.length - 1){
            p1++
            p2++
        }else if(newStr[p1] !== B[p2]){
            p1++
            p2 = 0
        }else if(newStr[p1] === B[p2] && p2 === B.length - 1){
           count++
           return count;
        }
    }
   return -1;
     
 }
let A = "abcd", B = "cdabcdab"
console.log(repeatedString(A,B))

// let C = "abcdabcdabcd", D = "cdabcdab"
// const findingSubStr = (C,D) => {
//     let p3 = 0;
//     for(let i=0; i< C.length; i++){
//         while(C[i] === D[p3]){
//             p3++
//         }else{

//         }
//     }
// }
var repeatedStringMatch = function(A, B) {
    let newStr = A;
    let p1 = A.length - 1;
    let p2 = B.length - 1;
    let count = 1;
   
   //I need to loop through my B and newStr
   //Thinking of solving these linearly
    while(p2 >= 0 && p1 < 1000) {
        //if my newString is a little short of my string B add A to newStr
        if(!newStr[p1]){
            newStr = A + newStr
            count++
            p1 = A.length
            console.log('here p1', p1, newStr[p1], p2, B[p2])
        }
        
        //When to stop my while loop => at the end of string B
        if(newStr[p1] === B[p2] ){
            if(p2 === 0) {
               return count
            }
            p1--
            p2--
        }else{
            p1--
        }
    }
   return -1;
};
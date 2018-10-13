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
 */

 const repeatedString = (A, B) => {
     let newStr = "";
     let idx = 0;
     let p1 = 0;
     let p2 = 0;
     let count = 0;

     //Setting my starting index of my A or rather should i just slice it out? 
    while(A[idx] !== B[0] && idx < A.length){
        idx++
    }
    //reassigning newStr
     newStr = A.slice(idx);

     //I need to loop through my B and newStr
     //Thinking of solving these linearly
     while(p2 < B.length){
         if(!newStr[p1]){
             newStr += A
             count++
         }
         if(newStr[p1] === B[p2] && p2 !== B.length - 1){
             p1++
             p2++
         }else if(newStr[p1] !== B[p2] && p2 !== B.length - 1){
             return false;
         }
     }
     return count;
     
 }
let A = "abcd", B = "cdabcdab"
console.log(repeatedString(A,B))
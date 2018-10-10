/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 * Hints: #44, #7 7 7, #732
 */

 const isUnique = (str) => {
     const set = new Set([])

     for(let i=0; i< str.length; i++){
         let char = str[i]

         if(set.has(char)) return false
         set.add(char)
     }
     return true;
 }

 /**
  * In the case where we cant use an additional data structure
  */
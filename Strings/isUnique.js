/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 * Hints: #44, #7 7 7, #732
 */

 const isUnique = (str) => {
     if(str.length === 0 || str.length === 1) return true;

     const set = new Set([]);

     for(let i=0; i< str.length; i++){
         let char = str[i];

         if(set.has(char)) return false;
         set.add(char);
     }
     return true;
 }

 /**
  * In the case where we cant use an additional data structure
  * Example "hello" "yay"
  * I would use two pointers
  */

  const isUnique2 = (str) => {
      let p1 = 0;
      let p2 = p1 + 1;

      while(p1 < str.length){
          while(p2 < str.length){
            if(str[p1] === str[p2]) return false;
              p2++;
          }
          p1++;
          p2 = p1;

      }
      return true;
  }

  module.exports = {
      isUnique: isUnique,
      isUnique2: isUnique2
  }
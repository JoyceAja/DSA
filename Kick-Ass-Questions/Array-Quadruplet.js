/**
 * Given an unsorted array of integers arr and a number s, write a function 
 * findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. 
 * Your function should return an array of these numbers in an ascending order. If 
 * such a quadruplet doesn’t exist, return an empty array.

 * Note that there may be more than one quadruplet in arr whose sum is s. You’re asked 
 * to return the first one you encounter (considering the results are sorted).
 
 * Example
 * arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 10
 * sum i need 10 - 0 = 10
 * [0,1,2,3,4,5,7,9] => 0,1,2,7
 */


 const findArrayQuadruplet = (arr, s) => {
    // your code goes here
    const sortArr = arr.sort((a,b) => a-b);
    let result = [];
    let left = 0;
    let right = arr.length -1;
    
    for(let i = 0; i <arr.length - 4; i++){
      for(let j = i+1; j < arr.length; j++){
        
      }
    }
    
    
  }
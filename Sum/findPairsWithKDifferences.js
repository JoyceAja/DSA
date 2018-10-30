/**
 * Given an array arr of distinct integers and a nonnegative integer k, write a function 
 * findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that 
 * x - y = k. If no such pairs exist, return an empty array.
 */
const findPairsWithGivenDifference = (arr, k) => {
    // your code goes here
    let result = [];
    let hash = createHash(arr);
    
    for(let i=0; i<arr.length; i++){
      let xVal = arr[i];
      
      if(hash[xVal + k] >= 0){
        result.push([xVal + k, xVal]);
      }
    }
    return result;
  }


const createHash = (arr) => {
    let obj = {};
    
    for(let i=0; i< arr.length; i++){
      obj[arr[i]] = i
    }
    
    return obj
  }
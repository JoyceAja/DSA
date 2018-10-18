/**
 * Given an unsorted array of integers arr and a number s, write a function 
 * findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. 
 * Your function should return an array of these numbers in an ascending order. If such 
 * a quadruplet doesn’t exist, return an empty array.
 * Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to 
 * return the first one you encounter (considering the results are sorted).
 * 
 * Example:
 * arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
 * output: [0, 4, 7, 9]
 */

 const findArrayQuadruplet = (arr, s) => {
     let sortedArr = arr.sort((a,b) => a-b);

     for(let i = 0; i<arr.length - 4; i++){
         for(let j = i+1; j < arr.length - 3; j++){
             let p1 = j+1;
             let p2 = arr.length - 1;
             let r = s - arr[i] + arr[j]
             if(arr[p1] + arr[p2] > s){
                 p2--
             }else if(arr[p1] + arr[p2] < s){
                 p1++
             }else{
                 return [arr[i], arr[j], arr[p1], arr[p2]]
             }
         }
     }
 }

 let arrSum = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
 console.log(findArrayQuadruplet(arrSum,s))
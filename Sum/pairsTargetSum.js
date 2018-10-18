const sumPairs = (arr, k)=> {
let result = {};
let sortedArr = arr.sort((a,b) => a-b)
let p1 = 0
let p2 = arr.length -1
while(p1 < arr.length){
    while(p1 < p2){
        let sum = arr[p1] + arr[p2]
        if(sum === k){
            let pairs = [arr[p1], arr[p2]]
            if(!result[pairs]){
                result[pairs] = pairs
            }
            p1++
        }else if(sum > k){
            p2--
        }
    }
    p1++
}
return Object.values(result);
}

console.log(sumPairs([0,1,2,2,2,6,7,8,9,2,3,4,5], 4))
/**
 * [0,2,1,5,4,3, 2] , k = 5
 * [1,2,2,3,4,5]
 * [[0,5], [1,4], [2,3]]
 * unique sums
 */

var threeSum = function(nums) {
    let arr = nums.sort((a,b) => a-b)
    let result = []
    for(let i = 0; i< arr.length; i++){
        let low = i+1
        let high = arr.length -1
        while(low < high){
            let sum = arr[low] + arr[high]
            if(sum > 0){
                high--
            }else if(sum < 0){
                low++
            }else{
                result.push([arr[i], arr[low], arr[high]])
            }
        }
    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
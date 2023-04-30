var pivotIndex = function(nums) {
    var pivotIndex = -1
    if(nums.length == 0) {
        return pivotIndex
    } 
    for (let i = 0; i < nums.length; i++) {
        var leftSum = i == 0 ? 0 : getSumForRange(nums, 0, i);
        var rightSum = getSumForRange(nums, i + 1, nums.length);
        if(leftSum == rightSum) {
            pivotIndex = i
            break
        }
    }
    return pivotIndex

    // //calculate total sum
    // let total = 0
    // for(let j=0;j<nums.length;j++) total+=nums[j]
    // //traverse the array from left to right searching for the pivot
    // let leftsum = 0
    // for(let i=0;i<nums.length;i++){
    //     if(leftsum===(total-nums[i]-leftsum)) return i
    //     leftsum+=nums[i]
    // }
    // return -1
};

var getSumForRange = (arr, start, end) => {
    var total = 0
    for (let i = start; i < end; i++) {
        total += arr[i]
    }
    return total
}

console.log(pivotIndex([1,0]))
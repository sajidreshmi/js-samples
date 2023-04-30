var runningSum = (nums) => {
    for(var i=1; i< nums.length; ++i) {
        nums[i] += nums[i-1];
    }
    return nums;
    // return nums.reduce((acc, num)=>{
    //     if(!acc[acc.length - 1]) {
    //         acc.push(num)
    //     } else {
    //         acc.push(acc[acc.length - 1] + num)
    //     }
    //    return acc
    // },[])
};

console.log(runningSum([1,3,5,6]))
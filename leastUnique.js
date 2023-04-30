var findLeastNumOfUniqueInts = function(arr, k) {
    var countr = {}
    arr.forEach(c => {
        countr[c] = countr[c] ? countr[c] + 1 : 1
    })
    let frequencyArr = Object.values(countr).sort((a,b)=>a-b)

    for (let i= 0; i < frequencyArr.length; i++) {
        k = k - frequencyArr[i]
        if(k < 0) return  frequencyArr.length - i
    }
    return 0
};

console.log(findLeastNumOfUniqueInts([5,5,4], 1))
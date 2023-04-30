function heavyDuty(index) {
  const bigData = new Array(10000).fill(":-D")
  console.log("created")
  console.log(bigData[index])
}

// heavyDuty(700)
// heavyDuty(702)
// heavyDuty(705)

function heavyDuty2() {
  const bigData = new Array(10000).fill(":-D")
  console.log("created")
  return function (index) {
    console.log(bigData[index])
  }
}

const getHeavyDuty = heavyDuty2()
getHeavyDuty(3)
getHeavyDuty(4)
getHeavyDuty(6)

let arr = [1, 2, 3, 4]
for (var index = 0; index < arr.length; index++) {
  ;(function (closureI) {
    setTimeout(() => {
      console.log("I am at index" + arr[closureI])
    }, 3000)
  })(index)
}

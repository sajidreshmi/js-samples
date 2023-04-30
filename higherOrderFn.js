const multiplyBy = function (num1) {
  return function (num2) {
    console.log(num1 * num2)
  }
}

multiplyBy(2)(5)

Date.prototype.lastYear = () => {
  return this.getFullYear() - 1
}

console.log(new Date("2021/01/01").lastYear())

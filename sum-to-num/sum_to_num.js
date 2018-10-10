function simpleAdding(num) {
  if (num === 1) {
    return num
  } else {
    return num + simpleAdding(num - 1)
  }
}

console.log(simpleAdding(10))

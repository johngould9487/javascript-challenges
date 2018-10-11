function Greater(num1, num2) {
  if (num1 === num2) {
    return -1
  } else if (num1 > num2) {
    return 'false'
  } else {
    return 'true'
  }
}

console.log(Greater(3,3))

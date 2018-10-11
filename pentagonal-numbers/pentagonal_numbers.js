function PentagonalNumber(number) {
  if (number === 1) {
    return 1
  } else {
    return 5 * (number - 1) + PentagonalNumber(number - 1)
  }
}

console.log(PentagonalNumber(5))

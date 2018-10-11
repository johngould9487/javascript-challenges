function KaprekarsConstant(num) {
  let iterations = 0
  let difference = 0
  while (difference !== 6174) {
    iterations++
    let digits = String(num).split('').map(char => parseInt(char))
    switch (digits.length) {
      case 1:
        digits.push(0,0,0)
      case 2:
        digits.push(0,0)
      case 3:
        digits.push(0)
    }
    let ascending = digits.sort(function (a, b) {
      return a - b
    }).join('')
    let descending = digits.sort(function (a, b) {
      return b - a
    }).join('')
    let bigNumber = parseInt(descending)
    let smallNumber = parseInt(ascending)
    difference = bigNumber - smallNumber
    num = difference
  }
  return iterations
}

function MaximalSquare(strArr) {
  // turn strArr into 2D array
  const matrix = strArr.map(entry => entry.split('').map(digit => parseInt(digit)))
  const width = matrix[0].length
  const height = matrix.length
  let length = 0
  height > width ? length = width : length = height
  length++
  let found = false

  // check for 5x5, then 4x4, then 3x3...
  while (!found) {
    length--
    found = CheckMatrixForSquare(matrix, height, width, length)
  }
  return length
}

function CheckMatrixForSquare(matrix, height, width, length) {
  for (var i = 0; i <= height - length; i++) {
    for (var j = 0; j <= width - length; j++) {
      let subMatrix = []
      for (var k = 0; k < length; k++) {

      }
    }
  }
}


// ["10100", "10111", "11111", "10010"]
// this is format of strArr

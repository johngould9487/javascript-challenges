function Factorial(num) {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * Factorial(num - 1)
  }
}

function ChessboardTraveling(str) {
  const stringCoordinates = str.slice(1,-1).split(")(")
  const xStart = parseInt(stringCoordinates[0][0])
  const yStart = parseInt(stringCoordinates[0][2])
  const xEnd = parseInt(stringCoordinates[1][0])
  const yEnd = parseInt(stringCoordinates[1][2])
  const differenceX = xEnd - xStart
  const differenceY = yEnd - yStart
  return Factorial(differenceY + differenceX) / (Factorial(differenceX) * Factorial(differenceY))
}

console.log(ChessboardTraveling("(1 1)(8 8)"))

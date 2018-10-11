function AlphabetSoup(str) {
  sortedUnicodes = str.split('').map(char => char.charCodeAt(0)).sort(function(a, b) {
    return a - b
  })
  sortedString = sortedUnicodes.map(code => String.fromCharCode(code)).join('')
  return sortedString
}

console.log(AlphabetSoup('love'))

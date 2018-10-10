function LetterChanges(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  let letters = str.split('')
  const newLetters = letters.map(function(letter) {
    if (/\w/.test(letter)) {
      nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1)
      if (/[aeiou]/.test(nextLetter)) {
        return nextLetter.toUpperCase()
      } else if (/z/.test(letter)) {
        return "A"
      } else {
        return nextLetter
      }
    } else {
      return letter
    }
  })
  return newLetters.join("")
}

console.log(LetterChanges("abcdefz"))

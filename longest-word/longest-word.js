function LongestWord(sen) {
  const words = sen.split(' ')
  let size = 0
  let position = 0
  words.forEach(function(word, index) {
    if (word.length > size) {
      size = word.length
      position = index
    }
  })
  return words[position]
}

console.log(LongestWord("The quick brown fox jumped over the lazy dog."))

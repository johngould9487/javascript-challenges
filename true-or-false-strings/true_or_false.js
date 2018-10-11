function SimpleSymbols(string) {
  let verdict = true
  string.split("").forEach(function(symbol, index) {
    if (/\w/.test(symbol)) {
      if (string.split("")[index + 1] !== "+" || string.split("")[index - 1] !== "+") {
        verdict = false
      }
    }
  })
  return verdict
}

console.log(SimpleSymbols("++d+===+c++=="))

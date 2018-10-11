function TimeConvert(minutes) {
  return `${Math.floor(minutes / 60)}:${minutes % 60}`
}

console.log(TimeConvert(125))

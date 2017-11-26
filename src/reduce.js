const countWords = (inputWords) => {
   return inputWords.reduce((previous, current) => {
        previous[current] = !previous[current] ? 1 : previous[current] + 1
       return previous;
   }, {})
}
module.exports = countWords


 function duckCount(){
   const args = [...arguments];
    return (function duckList(arr) {
      if (!arr.length) return 0
      const isDuck = Object.prototype.hasOwnProperty.call(arr[0], 'quack') || 0;
      return duckList(arr.slice(1)) + isDuck;
  })(args)
}
function duckCountOfficial() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}
module.exports = duckCount
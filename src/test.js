var repeat =require('./trampoline')
var count = 0
repeat(function() {
  count++
}, 2)

console.log('executed %d times.', count)
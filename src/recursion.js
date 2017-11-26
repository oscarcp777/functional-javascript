const reducev1 = (arr, fn, initial) => {
    if (!arr.length) return initial             // end condition
    var head = arr[0]                      // item to operate on
    let accumulator = fn.call(undefined,initial, head, arr.length, arr)                // perform action
    var tail = arr.slice(1)                // next
    return reduce(tail,fn,accumulator)
}
function reduceOfficial(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}
const reduceTail = (arr,fn,index,accumulator) =>{
    if (index > arr.length -1) return accumulator
    return  reduceTail(arr,fn,index + 1, fn(accumulator,arr[index],index,arr))
}
const reduce = (arr, fn, initial) => {
    return reduceTail(arr,fn,0,initial)
}

module.exports = reduce
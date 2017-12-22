function arrayMap(arr, fn) {
   return arr.reduce((acc, item, index, array) => {
        acc.push(fn(item))
        return acc;
   },[])

  }
  module.exports = arrayMap;
var slice = Array.prototype.slice
const Spy = (target, method) =>{
  let spyData = {count:0}
  const methodOld = target[method];
    target[method] = function(){
        spyData.count++;
        return methodOld.apply(null,slice.call(arguments));
    }
    return spyData
  }
module.exports = Spy
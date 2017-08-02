
var _ = {
  each: function(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i])
    }
  },
  map: function(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] =  callback(arr[i])
    }
    return arr
  },
  reduce: function(arr, callback) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
      total += callback(arr[i], 0)
    }
    return total
  },
  find: function(arr, callback) {
    var value;
    for (var i = 0; i < arr.length; i++) {
      value = callback(arr[i])
      if (value) {
        return value
      }
    }
    return null
  },
  filter: function(arr, callback) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(callback(arr[i]))
      }
    }
    return newArr;
  },
  reject: function(arr, callback) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }
}

_.each([1,2,3], function(num) {console.log(num);})
console.log(_.map([1,2,3], function(num) {return num * 2}));
console.log(_.reduce([1,2,3], function(num, value) {return num + value}));
console.log(_.find([1,2,3], function(num) { if (num % 2 == 0) {return num} }));
console.log(_.filter([1,2,3], function(num) { if (num % 2 == 0) {return num} }));
console.log(_.reject([1,2,3], function(num) { if (num % 2 == 0) {return num} }));

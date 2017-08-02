// function fibonacci(num, curr=0, next=1) {
//   if (num < 0) {
//     return next
//   }
//
//   return fibonacci(num-1, next, next+curr)
// }
// console.log(fibonacci(10));



function fib() {
  var count = 0
  var next = 1
  var temp;
  function nacci() {
    temp = next
    next = next + count
    count = temp
    console.log(count);
  }
  return nacci
}
var counter = fib()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()

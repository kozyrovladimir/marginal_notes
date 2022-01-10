const inc = function () {
   counter = 0;
   return function () {
      return ++counter;
   }
}();

console.log(inc());
console.log(inc());


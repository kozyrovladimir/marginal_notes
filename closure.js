const inc = function () {
   counter = 0;
   return function () {
      return ++counter;
   }
}();

// console.log(inc());
// console.log(inc());

function sum(firstNum){
   return function (secondNum) {
      return firstNum + secondNum;
   }
};

//console.log(sum(1)(2));

const Module = (function (){
   let _privateValue = 1;
   return {
      inc: function () {
        ++_privateValue;
        console.log(_privateValue);
      },
      dec: function () {
         --_privateValue;
         console.log(_privateValue);
      },
      set: function (newValue) {
         _privateValue = newValue;
         console.log(_privateValue);
      },
      reset: function () {
         _privateValue = 0;
         console.log(_privateValue);
      }
   }
    }
)();

// Module.inc();
// Module.dec();
// Module.set(8);
// Module.reset();

function toZero(num) {
   if(num > 0) {
      console.log(num);
      toZero(--num);
   } else {
      console.log(num);
      console.log('finish');
   }
}

// toZero(10);

// const interval = setInterval(()=> console.log('AAA') , 200);
// setTimeout(() => clearInterval(interval) ,2000);

function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// logA();
// setTimeout(logB, 0);
// Promise.resolve().then(logC);
// logD();



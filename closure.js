// Замыкания

const inc = function () {
    counter = 0;
    return function () {
        return ++counter;
    }
}();

// console.log(inc());
// console.log(inc());

// Каррирование
function sum(firstNum) {
    return function (secondNum) {
        return firstNum + secondNum;
    }
};

//console.log(sum(1)(2));

// Паттерн "Модуль"
const Module = (function () {
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


//Рекурсия
function toZero(num) {
    if (num > 0) {
        console.log(num);
        toZero(--num);
    } else {
        console.log(num);
        console.log('finish');
    }
}

// toZero(10);


// Event Loop
// const interval = setInterval(()=> console.log('AAA') , 200);
// setTimeout(() => clearInterval(interval) ,2000);

function logA() {
    console.log('A')
}

function logB() {
    console.log('B')
}

function logC() {
    console.log('C')
}

function logD() {
    console.log('D')
}

// logA();
// setTimeout(logB, 0);
// Promise.resolve().then(logC);
// logD();


//Модификация прототипа Array
const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
    console.log(this);
}

//array.multBy();

//Сортировка пузырьком
const bigArray = [4, 9, 9, 5, 2, 5, 4, 36, 6, 426, 0, 4, 8];

for (let i = 0; i < bigArray.length; i++) {
    for (let j = 0; j < bigArray.length; j++) {
        if (bigArray[j + 1] < bigArray[j]) {
            let temp = bigArray[j];
            bigArray[j] = bigArray[j + 1];
            bigArray[j + 1] = temp;
        }
    }
}

//console.log(bigArray);

//Алгоритм быстрой сортировки
const quickArray = [1,9,2,8,3,7,4,6,5,11,15,19,44,33,25];

function quicksort(array){
    if (array.length <=1) {
        return array
    }
    let pivotIndex = Math.floor(array.length/2);
    pivot = array[pivotIndex];
    let less = [];
    let grater = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] === pivot){
            continue;
        }
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            grater.push(array[i])
        }
    }
    return [...quicksort(less), pivot, ...quicksort(grater)]
}

console.log(quicksort(quickArray));


//надо поправить тело фукнции foo, чтобы выводило в консоль: 0 1 2 3 4 ‘finished’, не убирая 1000 * Math.random().

// function foo(cb) {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000 * Math.random());
//     }
//     cb();
// }
//
// foo(() => console.log('finished'));

// моё решение с промисами:

// async function foo(cb) {
//     for (var i = 0; i < 5; i++) {
//         var promise = new Promise(function (resolve, reject){
//             setTimeout(() => {
//                 console.log(i);
//                 resolve();
//             }, 1000 * Math.random());
//         });
//         var s = await promise;
//     }
//     cb();
// }
//
// foo(() => console.log('finished'));

//решение через замыкания(тоже не совсем правильное):

// function foo(cb) {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(function(local_i) {
//             return function() {
//                 console.log(local_i);
//                 if (local_i === 4) {
//                     cb();
//                 }
//             }
//         }(i), 1000 * Math.random() + i * 1000);
//     }
// }
//
// foo(() => console.log('finished'));


function foo(cb) {
    var promises = [];

    for (var i = 0; i < 5; i++) {
        var promise = new Promise(function (resolve) {
            setTimeout(function (local_i) {
                return function () {
                    console.log(local_i);
                    resolve();
                }
            }(i), 1000 * Math.random());
        });
        promises.push(promise);
    }
    Promise.all(promises).then(() => {
        cb();
    });
}

foo(() => console.log('finished'));

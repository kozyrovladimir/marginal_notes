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


async function foo(cb) {
    for (var i = 0; i < 5; i++) {
        var promise = new Promise(function (resolve, reject){
            setTimeout(() => {
                console.log(i);
                resolve();
            }, 1000 * Math.random());
        });
        var s = await promise;
    }
    cb();
}

foo(() => console.log('finished'));

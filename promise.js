let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve('Yes!')}, 2000);
});

async function f(){
    // let a = await promise;
    // console.log(a);

    promise.then(a => console.log(a));
};

f();


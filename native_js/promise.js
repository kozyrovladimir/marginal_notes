let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve('Yes!')}, 2000);
});

async function f(){
        promise.then(a => console.log(a));
};

f();


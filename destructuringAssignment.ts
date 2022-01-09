type CarType = {
    model: string,
    hp: number,
    country: string,
}

const bmw: CarType= {
    model: 'BMW',
    hp: 249,
    country: 'Germany',
}

const {
    model,
    hp,
    country
} = bmw;

console.log(model);
console.log(country);

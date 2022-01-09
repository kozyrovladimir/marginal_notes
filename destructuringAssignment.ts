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

function changeModel({car} : {car: CarType}):CarType {
    return car
}

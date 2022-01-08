// ниже приведен продвинутый прммер использования generic в TS
// https://habr.com/ru/company/ruvds/blog/426729/

type Stydent = {
    name: string,
    age: number,
    fromGrodno: boolean
}

type Car = {
    model: string,
    hp: number,
    country: string,
}

const stydentDB: Array<Stydent> = [
    {
        name: 'Max',
        age: 17,
        fromGrodno: false,
    },
    {
        name: 'Vladimir',
        age: 26,
        fromGrodno: true,
    },
    {
        name: 'Dina',
        age: 23,
        fromGrodno: true,
    },
]

const carDB: Array<Car> = [
    {
        model: 'VW Passat',
        hp: 200,
        country: 'Germany',
    },
    {
        model: 'Geely Coolray',
        hp: 170,
        country: 'China',
    },
    {
        model: 'Toyota Camry',
        hp: 250,
        country: 'Japan',
    },
]

function find<T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null {
    return model.filter(item => item[prop] === value)[0] || null;
}

console.log(find(stydentDB, 'name', 'Vladimir'));
console.log(find(carDB, 'country', 'Germany'));
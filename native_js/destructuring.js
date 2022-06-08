const person = {
    name: 'Vladimir',
    surname: 'Kozyro',
    isMarried: true,
}

const {isMarried} = person;


// new syntax
const skier = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};
//console.log(isMarried);


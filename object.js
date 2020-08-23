const myInfo = {
    name: 'lao tzu',
    age: 22,
    proffession(){
        console.log(`${this} am a programmer`);
    },
    country(){
        console.log(`${this} am from nigeria`);
    },
    city(){
        console.log(`${this} am from Abuja fct`);
    }
}


myInfo.proffession();
myInfo.country();
myInfo.city();
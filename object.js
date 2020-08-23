const myInfo = {
    name: 'lao tzu',
    age: 22,
    proffession(){
        console.log(this);
    },
    country(){
        console.log(this);
    },
    city(){
        console.log(this);
    }
}


myInfo.proffession();

for (info in myInfo){
    console.log(info);
}

const proffession = myInfo.proffession.bind(myInfo);
proffession();
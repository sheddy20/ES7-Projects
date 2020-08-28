// const groceries = ['cumcumber', 'vegetables', 'lettuce', 'tomato'];

// const mystore = groceries.map(store => `<li> ${store} </li>`);
// console.log(mystore);

let pi = new Promise((resolve, reject)=>{
    const valueOfPi = 3.143;
    if (valueOfPi == 3.142) {
        resolve('value of pi is correct');
    } else {
        reject('value of pi is incorrect');
    }
})

pi.then((m)=>{
    console.log(`${m}`);
}).catch((e)=>{
    console.log(`${e}`);
});
const square = (number) => number * number + 10;

console.log(square(4));

const infos = [
    {id: 1, name: 'austin', age: 43, isMarried: false},
    {id: 2, name: 'westinghouse', age: 53, isMarried: true},
    {id: 3, name: 'elias howe', age: 63, isMarried: false},
    {id: 3, name: 'marconi', age: 20, isMarried: true},
];

const check = infos.filter(info=> info.name === 'westinghouse');
console.log(check);
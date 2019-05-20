const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 1, name: '탄이', age: 30},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2},
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);
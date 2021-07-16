let people = [
    { name: 'Luu', age: 21 },
    { name: 'Dang', age: 22 },
    { name: 'Pho', age: 23 },
    { name: 'Hehe', age: 24 },
    { name: 'Haha', age: 25 }
];

people.sort((a, b) => a.age - b.age)

let hehe = people.find((a) => a.name == 'Hehe');

let users = people.filter((user) => 22 <= user.age && user.age <= 25);

console.log(people)
console.log(hehe)
console.log(users)



// Type aliases & Object types

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }
//
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }

type User = { name: string; age: number };

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}
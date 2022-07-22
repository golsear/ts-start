// Tuple: fixed-length array
// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Serhii',
    age: 48,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author']
};

person.role.push('admin');
// person.role[1] = 10; // !!! ERROR
// person.role = ['admin', 10]; // !!! ERROR
// person.role = [10, 'admin', 10]; // !!! ERROR

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR
}

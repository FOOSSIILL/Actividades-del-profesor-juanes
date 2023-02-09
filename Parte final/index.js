//reference
const user = {
    name:'Andrew',
    age: 12
}

let admin = user;
console.log(admin.name);

admin.name = "peter";
console.log(admin.name);
console.log(user.name);

let object1 = {}
let object2 = object1;

console.log(object1 === object2);
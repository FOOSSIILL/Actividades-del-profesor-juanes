//copying
let object3= JSON.parse(JSON.stringify(object1));

class Person{ 
    constructor(name, lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    greet() {
        return "listening...." + this.name;
    }

    getfullname() {
        return this.name + " " + this.lastname;
    }

}

let Juan = new Person("Juan", "Ramirez",12);
let Andres = new Person("Andres", "Ramirez",20);

console.log(Juan.greet());

let Camilo = {...Juan}; //ECS6
Camilo.name = "Camilo"; 
console.log(Juan);

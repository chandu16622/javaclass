// Task3:  Create a parent class Person with properties like name and age, and a method introduce(). Then create a child class Student that inherits from Person, adds an extra property grade, and a method study(). Finally, create a Student object and call both parent and child methods.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
      
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying in grade ${this.grade}.`;
    }
  }

// Creating a Student object
const student = new Student("Alia", 20, "A");
// Calling parent and child methods
console.log(student.introduce());
console.log(student.study());

// Task 1: Create a student management system using classes,
// objects and a constructor with all the student info like 
// // name, age, gender, phone, email, course, and marks, etc.
   
class candidate {
    constructor(name,age,gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        this.marks = marks;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, gender: ${this.gender}, Phone: ${this.phone}, Email: ${this.email}, Course: ${this.course}, Marks: ${this.marks}`;
    }
}
// Creating student objects
const candidate1 = new candidate("Ali", 20, " male", "123-456-7890", "ali@12.com", "Math", 85);
const candidate2 = new candidate("Bommi", 22,"female", "987-654-3210", "boomi@mail.com", "Science", 90);
const candidate3 = new candidate("Charu",23,"female", "555-555-5555", "charu@gmail.com", "History", 78);

// Displaying student details
console.log(candidate1.getDetails());
console.log(candidate2.getDetails());
console.log(candidate3.getDetails());
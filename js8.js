// Task 2: Create a separate code block for the 
// class and encapsulate the student's marks.

class StudentWithEncapsulation {
    _marks; // Private field for marks
    constructor(name, age, gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        if (marks >= 0 && marks <= 100) {
        this._marks = marks;
    } else {
        this._marks = 0; // or any default value
        console.log("Invalid marks. Please enter a value between 0 and 100.");
    }
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, gender: ${this.gender}, Phone: ${this.phone}, Email: ${this.email}, Course: ${this.course}, Marks: ${this._marks}`;
    }
  }

// Creating student objects with encapsulation
const student = new StudentWithEncapsulation("Ali", 20, "male", "123-456-7890", "ali@12.com", "Math", 95);

// Displaying student details
console.log(student.getDetails());

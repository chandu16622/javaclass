// Task 1: Polymorphism
// Create a Student base class with a method getRole().
// Then create two subclasses, and override the method to show different messages.
// Parent Class

class Student {
  getRole() {
    return "I am a student.";
  }
}

class Undergraduate extends Student {
  getRole() {
    return "I am an undergraduate student.";
  }
}

class Postgraduate extends Student {
  getRole() {
    return "I am a postgraduate student.";
  }
}

const students = [new Student(), new Undergraduate(), new Postgraduate()];
students.forEach(s => console.log(s.getRole()));



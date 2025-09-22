
class Student {
  #fees;
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.#fees = 0;
  }
  setFees(fees) { this.#fees = fees; }
  getFees() { return this.#fees; }
  #internalFeeCalc() { return this.#fees * 1.1; }
  calculateFinalFees() { return this.#internalFeeCalc(); }
  getDetails() { return `${this.name}, ${this.age}, ${this.course}`; }
}

class SchoolStudent extends Student {
  getDetails() { return `School Student ${this.name} joined school.`; }
}

class CollegeStudent extends Student {
  getDetails() { return `College Student ${this.name} joined college.`; }
}

const s1 = new SchoolStudent("Amit", 15, "Math");
const s2 = new CollegeStudent("Priya", 19, "Physics");
s1.setFees(1000);
s2.setFees(2000);
console.log(s1.getDetails(), s1.calculateFinalFees());
console.log(s2.getDetails(), s2.calculateFinalFees());

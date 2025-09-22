
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
  #internalFeeCalc() { return this.#fees }
  calculateFinalFees() { return this.#internalFeeCalc(); }
}

class SchoolStudent extends Student {
  getDetails() { return `School Student name:${this.name},age:${this.age},course:${this.course},amount:${this.calculateFinalFees()} joined school`; }
}

class CollegeStudent extends Student {
  getDetails() { return `College Student name:${this.name},age:${this.age},course:${this.course},amount:${this.calculateFinalFees()} joined college.`; }
}

const s1 = new SchoolStudent("Amit", 15, "10th");
const s2 = new CollegeStudent("Priya", 19, "btech");
s1.setFees(1400);
s2.setFees(26000);
console.log(s1.getDetails());
console.log(s2.getDetails());



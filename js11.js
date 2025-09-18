
// Task 2: Abstraction
// Hide student’s internal details (like marks) and expose only methods to interact.

 class student {
  #marks = 0; // private property

  constructor(name) {
    this.name = name;
  }

  // Public method to set marks
  setMarks(marks) {
    if (marks >= 0 && marks <= 100) {
      this.#marks = marks;
    } else {
      console.log("Invalid marks. Must be between 0 and 100.");
    }
  }

  // Public method to get marks
  getMarks() {
    return this.#marks;
  }

  // Public method to display student info
  displayInfo() {
    console.log(`Name: ${this.name}, Marks: ${this.#marks}`);
  }
 }
 const s1 = new student("Aliaa");
s1.setMarks(850);
s1.displayInfo();
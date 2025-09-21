class Student {
    #fees;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.#fees = 0;
    }

    setFees(amount) {this.#fees = amount;}
     getFees() { return this.#fees;}
    //   #calculateDiscount() {return this.#fees * 0.1;}
    //    calculateFinalFees() { return this.#fees - this.#calculateDiscount();}

    getDetails() {return `${this.name}, Age: ${this.age}, Course: ${this.course}`;}
}   
   class SchoolStudent extends Student {
    getDetails() {
        return `School Student: ${super.getDetails()} - Welcome to school!`;
    }
}
   class CollegeStudent extends Student {
    getDetails() {
        return `College Student: ${super.getDetails()} - Welcome to college!`;
    }
}
const s = new SchoolStudent("meera", 14, "Math");
const c = new CollegeStudent("chinnu", 19, "Engineering");
s.setFees(1000);
c.setFees(2000);
console.log(s.getDetails(), "Final Fees:", );
console.log(c.getDetails(), "Final Fees:",);
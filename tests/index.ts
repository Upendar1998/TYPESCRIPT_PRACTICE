class StudentDetails {
    name: string = "TetsUser";
    constructor() {
        console.log("Student Name : " + this.name);
    }
}
class Student extends StudentDetails {
    constructor() {
        super();
    }
}

// Create an object instance
const student = new Student();

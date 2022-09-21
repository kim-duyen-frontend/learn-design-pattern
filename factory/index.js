class Person {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Student extends Person {
    constructor(name, type, level) {
        super(name, type);
        this.level = level;
    }
    toString() {
        return JSON.stringify(this);
    }
}

class Instructor extends Person {
    constructor(name, type, position, earning) {
        super(name, type);
        this.position = position;
        this.earning = earning;
    }
    toString() {
        return JSON.stringify(this);
    }
}

const userFactory = (name, type, position, earning = 0, level = "beginner") => {
    if (type === "instructor") {
        return new Instructor(name, type, position, earning)
    }
    if (type === "student") {
        return new Student(name, type, level);
    }
}

const paul = userFactory("Paul", "instructor", "Software engineer", 1000);
const john = userFactory("John", "student", "Beginner");
console.log(paul.toString());//{"name":"Paul","type":"instructor","position":"Software engineer","earning":1000}
console.log(john.toString());//{"name":"John","type":"student","level":"beginner"}
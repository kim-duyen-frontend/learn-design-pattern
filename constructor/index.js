class Triangle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    display() {
        return this.name + " " + this.color;
    }
}
const con1 = new Triangle("triangle", "orange");
console.log(con1.display());
const con2 = new Triangle("triangle", "sky");
console.log(con2.display());


//Cách 2 dùng hàm
// function Triangle(name, color) {
//     this.name = name;
//     this.color = color;
//     this.display = function () {
//         return this.name + " " + this.color;
//     }
// }
// const con1 = new Triangle("triangle", "orange");
// console.log(con1.display());
// const con2 = new Triangle("triangle", "sky");
// console.log(con2.display());


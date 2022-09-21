function Superman(name, power) {
    this.name = name;
    this.power = power;
    this.display = function () {
        return this.name + " " + this.power;
    }
}

function prototypeMan(prototype) {
    this.prototype = prototype;
    this.clone = () => {
        let con = new Superman();
        con.name = prototype.name;
        con.power = prototype.power;
        return con;
    };
}
let spiderman = new Superman("Spider", "bắn tơ");
let heroSpider = new prototypeMan(spiderman);
let rs1 = heroSpider.clone();
console.log(rs1.display());

let greenGiant = new Superman("Green Giant", "phá hoại");
let heroGreenGiant = new prototypeMan(greenGiant);
let rs2 = heroGreenGiant.clone();
console.log(rs2.display());

let falcon = new Superman("Falcon", "bay");
let heroFalcon = new prototypeMan(falcon);
let rs3 = heroFalcon.clone();
console.log(rs3.display());

////class
// class Superman {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }

//     display() {
//         return this.name + " " + this.power;
//     }
// }

// // Usage:
// const spiderman = new Superman("Spider", "bắn tơ");
// const greenGiant = new Superman("Green Giant", "phá hoại");
// const falcon = new Superman("Falcon", "bay");
// console.log(spiderman.display());
// console.log(greenGiant.display());
// console.log(falcon.display()); 

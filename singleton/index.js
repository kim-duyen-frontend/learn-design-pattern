class Singleton {
    constructor() {
        this.message = "I am an Instance";
    }
    //public static use global
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const con1 = Singleton.getInstance();
console.log(con1.message);
con1.message = "Foo Bar";

const con2 = Singleton.getInstance();
console.log(con2.message);
console.log(con1 === con2);
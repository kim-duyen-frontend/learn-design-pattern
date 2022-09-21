////demo syntax prototype
// function Animal(name, leg) {
//     this.name = name;
//     this.leg = leg;
// }
// Animal.prototype.about = function () {
//     return this.name + " has " + this.leg + " legs";
// };

// var dog = new Animal("Dog", 4);
// var bird = new Animal("Bird", 2);
// console.log(dog.about());
// console.log(bird.about());


// Nơi lưu trữ người đăng ký và các phương thức
function Observable() {
    this.observers = [];
}

// Đăng ký nhận tin
Observable.prototype.subscribe = function (subscriber) {
    this.observers.push(subscriber);
}

// Huỷ đăng ký nhận tin
Observable.prototype.unsubscribe = function (subscriber) {
    this.observers = this.observers.filter(observer => observer !== subscriber);
}

// Thông báo khi có bài viết mới
Observable.prototype.notify = function (data) {
    this.observers.forEach(observer => {
        observer(data);
    })
}

const usersSubscribe = new Observable();

const userOne = (data) => console.log("Subscriber 1 " + data);
const userTwo = (data) => console.log("Subscriber 2 " + data);
const userThree = (data) => console.log("Subscriber 3 " + data);

usersSubscribe.subscribe(userOne); // Người đăng ký
usersSubscribe.subscribe(userTwo); // Người đăng ký
usersSubscribe.subscribe(userThree); // Người đăng ký
usersSubscribe.unsubscribe(userOne); // Người huỷ đăng ký

usersSubscribe.notify("được thông báo bài viết mới")
//let isim:string ="melike"; // string için  type safe hale getirmek gerek
console.log("typescript nasıl çalışır"); // terminalde tsc main.ts ts yi js ye dönüştürür
function sayHello(name) {
    console.log("Hello ".concat(name));
}
sayHello("Seren");
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp();
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("What's up?");
    };
    return Greeter;
}());
var greeter = new Greeter("Halit");
greeter.sayHi();
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.addUsers = function (name) {
        this.users.push(name);
    };
    UserService.prototype.getUserNames = function () {
        return this.users;
    };
    return UserService;
}());
var userService = new UserService();
userService.addUsers("isim");
userService.getUserNames();

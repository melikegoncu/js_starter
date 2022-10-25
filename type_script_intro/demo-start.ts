//let isim:string ="melike"; // string için  type safe hale getirmek gerek

console.log("typescript nasıl çalışır");// terminalde tsc main.ts ts yi js ye dönüştürür
function sayHello(name: string) {
	console.log(`Hello ${name}`);
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

class UserService{
    private users:string[]=[];

    addUsers(name:string){
        this.users.push(name);
    }
    getUserNames():string[]{
        return this.users;
    }
}

let userService = new UserService();
userService.addUsers("isim");
userService.getUserNames();
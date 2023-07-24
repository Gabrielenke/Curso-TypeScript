var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function withoutReturn() {
    console.log("Função sem retorno");
    //return 1
}
withoutReturn();
console.log("--------------------------------------------------");
// callback como argumento
function greeting(name) {
    return "Ola ".concat(name);
}
function preGreeting(f, userName) {
    console.log("Preparando a funcao");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Gabriel");
console.log(" ");
preGreeting(greeting, "Alguma coisa ");
console.log("--------------------------------------------------");
// Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Gabriel" }, { age: 20, job: "dev" });
console.log(newObject);
console.log("--------------------------------------------------");
//  constrains
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 4));
console.log(biggestNumber("12", "4"));
console.log(biggestNumber(3, 4));
console.log("--------------------------------------------------");
// especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
console.log("--------------------------------------------------");
// parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        console.log("Ola ".concat(greet, " ").concat(name));
    }
    else {
        console.log("Ola ".concat(name));
    }
}
modernGreeting("Gabriel");
modernGreeting("Gabriel", "Sr.");
console.log("--------------------------------------------------");
// parametros padrao
function greeting2(name, greet) {
    if (greet === void 0) { greet = "Sr."; }
    console.log("Ola ".concat(greet, " ").concat(name));
}
greeting2("Gabriel");
greeting2("Gabriela", "Sra.");
console.log("--------------------------------------------------");
// unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else {
        console.log(x);
    }
}
doSomething("Gabriel");
doSomething([1, 2, 3]);
console.log("--------------------------------------------------");
// never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Erro encontrado");
// rest parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (i, total) { return i + total; });
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(4, 5, 12, 123, 1223213123132));
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto e ".concat(name, " e o preco e R$ ").concat(price);
}
var shirt = { name: "Camisa", price: 49.9 };
console.log(showProductDetails(shirt));

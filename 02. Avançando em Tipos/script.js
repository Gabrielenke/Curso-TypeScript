// 1- Arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
console.log(numbers[2]);
var nomes = ["gabriel", "enke", "lima"];
console.log(nomes[0]);
console.log("--------------------------------------------------");
// 2 - Outra Sinxtaxe para Array
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.push(11);
console.log(nums[3]);
console.log("--------------------------------------------------");
// 3 - any
var arr1 = [1, "gabriel", true, { nome: "gabriel" }];
console.log(arr1);
console.log("--------------------------------------------------");
// Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(1, 4);
console.log("--------------------------------------------------");
// soma("A",2) // erro pois o parametros foi setado como number
// 5 - retorno de funções
function greeting(name) {
    return "Hello ".concat(name);
}
console.log(greeting("Gabriel"));
// 6 - funcoes anonimas
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary);
}, 1);
console.log("--------------------------------------------------");
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}
var objCoord = { x: 100, y: 200 };
passCoordinates(objCoord);
console.log("--------------------------------------------------");
// 8 - props opcionais
function showNumbers(a, b) {
    console.log(a);
    if (b) {
        console.log(b);
    }
    else {
        console.log("Nao foi dado valor de B");
    }
}
showNumbers(1, 2);
showNumbers(1);
console.log("--------------------------------------------------");
//  9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log("Hello ".concat(firstName, " ").concat(lastName));
    }
    else {
        console.log("Nothing here");
    }
}
advancedGreeting("Gabriel", "Enke");
advancedGreeting("Gabriel");
console.log("--------------------------------------------------");
// 10 -  Union types
function showBalance(balance) {
    console.log("O saldo da conta e ".concat(balance));
}
showBalance("1000");
showBalance(1000);
// showBalance(true);
var arr2 = [1, "gabriel", 2, "enke"];
console.log(arr2);
console.log("--------------------------------------------------");
// 11 -  Avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        console.log("Usuario nao aprovado");
    }
    console.log("A funcao do usaario e ".concat(role));
}
showUserRole(false);
showUserRole("admin");
console.log("--------------------------------------------------");
function showId(id) {
    console.log("O id do usuario e ".concat(id));
}
showId(1);
showId("1");
console.log("--------------------------------------------------");
function showCoords(point) {
    console.log("X: ".concat(point.x, " Y: ").concat(point.y, " Z: ").concat(point.z));
}
showCoords({ x: 1, y: 2, z: 3 });
var coordObj = { x: 10, y: 22, z: 33 };
showCoords(coordObj);
console.log("--------------------------------------------------");
var somePerson = {
    name: "Gabriel",
    age: 20,
};
console.log(somePerson);
// type personType = {
// 	age: number;
// };
console.log("--------------------------------------------------");
// 15 - Literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(direction);
}
showDirection("left");
showDirection("right");
showDirection("up");
showDirection("down");
// showDirection("blue"); - erro pois nao existe essa opcao
console.log("--------------------------------------------------");
// 16 - Non null assertion operator
// const p = document.getElementById("p1")!;
// console.log(p!.innerText);
// 17 - Bigint
var n;
n = 100n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
console.log("--------------------------------------------------");
// 18 -  Symbol
var symbolA = Symbol("a");
console.log(symbolA == Symbol("a"));
console.log(symbolA === Symbol("a"));

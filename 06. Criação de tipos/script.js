// generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log("--------------------------------------------------");
// constraints em generic
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = {
    name: "Celular",
    color: "white",
};
console.log(showProductName(myObj));
console.log("--------------------------------------------------");
var myCar = {
    name: "Fusca",
    whells: 4,
    engine: 1.0,
};
var myPen = {
    name: "Bic",
    whells: false,
    engine: false,
};
console.log(myCar);
console.log(myPen);
// type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat([key], " esta presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: "2tb",
    ram: "32gb",
};
console.log(getSomeKey(server, "ram"));
console.log("--------------------------------------------------");
function showCharName(obj, name) {
    return obj[name];
}
var char = {
    name: "Gabriel",
    age: 20,
    hasDriveLicense: true,
};
console.log(showCharName(char, "name"));
console.log("--------------------------------------------------");
// typeof type operator
var userName = "Gabriel";
var userName2 = "cleber";
console.log(typeof userName);
console.log(typeof userName2);
console.log("--------------------------------------------------");
var someVar = 5;
var testing = "some text";

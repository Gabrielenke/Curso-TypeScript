// tipo de objeto para funcao com interface
function showProductDetails(product) {
    if (product.isAvaliable === true) {
        console.log("".concat(product.name, " custa ").concat(product.price, " reais."));
    }
    else {
        console.log("".concat(product.name, " n\u00E3o est\u00E1 dispon\u00EDvel no momento."));
    }
}
showProductDetails({ name: "Notebook", price: 2000, isAvaliable: true }); // Notebook custa 2000 reais.
showProductDetails({ name: "Smartphone", price: 1000, isAvaliable: false }); // Smartphone não está disponível no momento.
var camiseta = {
    name: "Camiseta",
    price: 50,
    isAvaliable: true,
};
showProductDetails(camiseta); // Camiseta custa 50 reais.
console.log("--------------------------------------------------");
function showUserDetails(user) {
    console.log("O usuario tem o e-mail: ".concat(user.email, " "));
    if (user.role) {
        console.log("O usuario tem o cargo: ".concat(user.role, " "));
    }
}
var u1 = {
    email: "teste@teste.com",
    role: "admin",
};
var u2 = {
    email: "teste@testando.com",
};
showUserDetails(u1);
showUserDetails(u2);
console.log("--------------------------------------------------");
var fusca = {
    brand: "Volkswagen",
    whells: 4,
};
console.log(fusca);
var coords = {
    x: 10,
    y: 20,
};
console.log(coords);
console.log("--------------------------------------------------");
var gabriel = {
    name: "Gabriel",
    age: 20,
};
var superGabriel = {
    name: "Super Gabriel",
    age: 20,
    superpowers: ["Voar", "Super Força"],
};
console.log(gabriel);
console.log(superGabriel);
console.log("--------------------------------------------------");
var humanWithGun = {
    name: "Gabriel",
    type: "Pistol",
    caliber: 9,
};
console.log(humanWithGun);
console.log("--------------------------------------------------");
// readonly array
var myArray = ["Maça", "Laranja", "Banana"];
// myArray[3] = "Mamão";
// console.log(myArray);
myArray.forEach(function (fruit) { return console.log("Fruit: ".concat(fruit)); });
console.log("--------------------------------------------------");
var tuple = [1, "Gabriel", true];

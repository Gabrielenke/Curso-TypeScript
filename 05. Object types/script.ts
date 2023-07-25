// tipo de objeto para funcao com interface

interface Product {
	name: string;
	price: number;
	isAvaliable: boolean;
}

function showProductDetails(product: Product) {
	if (product.isAvaliable === true) {
		console.log(`${product.name} custa ${product.price} reais.`);
	} else {
		console.log(`${product.name} não está disponível no momento.`);
	}
}

showProductDetails({ name: "Notebook", price: 2000, isAvaliable: true }); // Notebook custa 2000 reais.
showProductDetails({ name: "Smartphone", price: 1000, isAvaliable: false }); // Smartphone não está disponível no momento.

const camiseta: Product = {
	name: "Camiseta",
	price: 50,
	isAvaliable: true,
};
showProductDetails(camiseta); // Camiseta custa 50 reais.

console.log("--------------------------------------------------");
// propiedade opcional em interface

interface IUser {
	email: string;
	role?: string;
}

function showUserDetails(user: IUser) {
	console.log(`O usuario tem o e-mail: ${user.email} `);

	if (user.role) {
		console.log(`O usuario tem o cargo: ${user.role} `);
	}
}

const u1: IUser = {
	email: "teste@teste.com",
	role: "admin",
};

const u2: IUser = {
	email: "teste@testando.com",
};

showUserDetails(u1);
showUserDetails(u2);

console.log("--------------------------------------------------");

// readonly

interface Car {
	brand: string;
	readonly whells: number;
}

const fusca: Car = {
	brand: "Volkswagen",
	whells: 4,
};

console.log(fusca);

// index signature

interface ICoordObject {
	[index: string]: number;
}

let coords: ICoordObject = {
	x: 10,
	y: 20,
};

console.log(coords);

console.log("--------------------------------------------------");

// extending types

interface IHuman {
	name: string;
	age: number;
}

interface SuperHuman extends IHuman {
	superpowers: string[];
}

const gabriel: IHuman = {
	name: "Gabriel",
	age: 20,
};

const superGabriel: SuperHuman = {
	name: "Super Gabriel",
	age: 20,
	superpowers: ["Voar", "Super Força"],
};

console.log(gabriel);

console.log(superGabriel);

console.log("--------------------------------------------------");

// intersection types
interface Character {
	name: string;
}

interface Gun {
	type: string;
	caliber: number;
}

type HumanWithGun = Character & Gun;

const humanWithGun: HumanWithGun = {
	name: "Gabriel",
	type: "Pistol",
	caliber: 9,
};

console.log(humanWithGun);

console.log("--------------------------------------------------");

// readonly array

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"];

// myArray[3] = "Mamão";

// console.log(myArray);

myArray.forEach((fruit) => console.log(`Fruit: ${fruit}`));

console.log("--------------------------------------------------");

// tuplas

type MyTuple = [number, string, boolean];

const tuple: MyTuple = [1, "Gabriel", true];

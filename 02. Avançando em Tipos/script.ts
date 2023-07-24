// 1- Arrays

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);

console.log(numbers[2]);

const nomes: string[] = ["gabriel", "enke", "lima"];

console.log(nomes[0]);
console.log("--------------------------------------------------");
// 2 - Outra Sinxtaxe para Array

const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.push(11);

console.log(nums[3]);
console.log("--------------------------------------------------");
// 3 - any

const arr1: any[] = [1, "gabriel", true, { nome: "gabriel" }];

console.log(arr1);
console.log("--------------------------------------------------");
// Parametros tipados

function soma(a: number, b: number) {
	console.log(a + b);
}

soma(1, 4);
console.log("--------------------------------------------------");
// soma("A",2) // erro pois o parametros foi setado como number

// 5 - retorno de funções

function greeting(name: string): string {
	return `Hello ${name}`;
}

console.log(greeting("Gabriel"));

// 6 - funcoes anonimas

setTimeout(function () {
	const sallary: number = 1000;

	// console.log(parseFloat(sallary))

	// console.log(sallary);
}, 1);
console.log("--------------------------------------------------");
// 7 - tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
	console.log("X coordinates " + coord.x);
	console.log("Y coordinates " + coord.y);
}

const objCoord = { x: 100, y: 200 };

passCoordinates(objCoord);
console.log("--------------------------------------------------");
// 8 - props opcionais

function showNumbers(a: number, b?: number) {
	console.log(a);
	if (b) {
		console.log(b);
	} else {
		console.log("Nao foi dado valor de B");
	}
}

showNumbers(1, 2);
showNumbers(1);
console.log("--------------------------------------------------");
//  9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
	if (lastName !== undefined) {
		console.log(`Hello ${firstName} ${lastName}`);
	} else {
		console.log("Nothing here");
	}
}

advancedGreeting("Gabriel", "Enke");
advancedGreeting("Gabriel");

console.log("--------------------------------------------------");
// 10 -  Union types

function showBalance(balance: string | number) {
	console.log(`O saldo da conta e ${balance}`);
}

showBalance("1000");
showBalance(1000);
// showBalance(true);

const arr2: Array<string | number> = [1, "gabriel", 2, "enke"];

console.log(arr2);

console.log("--------------------------------------------------");

// 11 -  Avancando em union types

function showUserRole(role: boolean | string) {
	if (typeof role === "boolean") {
		console.log("Usuario nao aprovado");
	}

	console.log(`A funcao do usaario e ${role}`);
}

showUserRole(false);
showUserRole("admin");

console.log("--------------------------------------------------");

// 12 -  Type Alias
type ID = number | string;

function showId(id: ID) {
	console.log(`O id do usuario e ${id}`);
}

showId(1);
showId("1");

console.log("--------------------------------------------------");

// 13 -  Interfaces

interface Point {
	x: number;
	y: number;
	z: number;
}

function showCoords(point: Point) {
	console.log(`X: ${point.x} Y: ${point.y} Z: ${point.z}`);
}

showCoords({ x: 1, y: 2, z: 3 });

const coordObj: Point = { x: 10, y: 22, z: 33 };

showCoords(coordObj);

console.log("--------------------------------------------------");

// 14 -  Interfaces x type alias

interface person {
	name: string;
}

interface person {
	age: number;
}

const somePerson: person = {
	name: "Gabriel",
	age: 20,
};

console.log(somePerson);

// com type alias nao e possivel adiconar mais propriedades
type personType = {
	name: string;
};

// type personType = {
// 	age: number;
// };

console.log("--------------------------------------------------");

// 15 - Literal types

let test: "testando";

test = "testando";

console.log(test);

function showDirection(direction: "left" | "right" | "up" | "down") {
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

let n: bigint;

n = 100n;
console.log(n);

console.log(typeof n);

console.log(n + 100n);

console.log("--------------------------------------------------");

// 18 -  Symbol

let symbolA = Symbol("a");

console.log(symbolA == Symbol("a"));
console.log(symbolA === Symbol("a"));

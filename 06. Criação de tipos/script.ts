// generics

function showData<T>(arg: T): string {
	return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));

console.log("--------------------------------------------------");

// constraints em generic

function showProductName<T extends { name: string }>(obj: T) {
	return `O nome do produto é ${obj.name}`;
}

const myObj = {
	name: "Celular",
	color: "white",
};

console.log(showProductName(myObj));

console.log("--------------------------------------------------");

// interface com generics

interface MyObject<T, U> {
	name: string;
	whells: T;
	engine: U;
}

type Car = MyObject<number, number>;
type Pen = MyObject<boolean, boolean>;

const myCar: Car = {
	name: "Fusca",
	whells: 4,
	engine: 1.0,
};

const myPen: Pen = {
	name: "Bic",
	whells: false,
	engine: false,
};

console.log(myCar);
console.log(myPen);

// type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
	return `A chave ${[key]} esta presente no objeto e tem o valor de ${
		obj[key]
	}`;
}

const server = {
	hd: "2tb",
	ram: "32gb",
};

console.log(getSomeKey(server, "ram"));

console.log("--------------------------------------------------");

// keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C) {
	return obj[name];
}

const char: Character = {
	name: "Gabriel",
	age: 20,
	hasDriveLicense: true,
};

console.log(showCharName(char, "name"));

console.log("--------------------------------------------------");

// typeof type operator

const userName: string = "Gabriel";

const userName2: typeof userName = "cleber";

console.log(typeof userName);
console.log(typeof userName2);

console.log("--------------------------------------------------");

// indexed access types

type Truck = { km: number; kg: number; description: string };

type km = Truck["km"];

// conditional types

interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = "string";

// template literals types

type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = "some text";

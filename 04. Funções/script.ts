function withoutReturn(): void {
	console.log("Função sem retorno");
	//return 1
}

withoutReturn();

console.log("--------------------------------------------------");

// callback como argumento

function greeting(name: string) {
	return `Ola ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
	console.log("Preparando a funcao");

	const greet = f(userName);
	console.log(greet);
}

preGreeting(greeting, "Gabriel");
console.log(" ");
preGreeting(greeting, "Alguma coisa ");

console.log("--------------------------------------------------");

// Generic function

function firstElement<T>(arr: T[]): T {
	return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
	return {
		...obj1,
		...obj2,
	};
}

const newObject = mergeObjects({ name: "Gabriel" }, { age: 20, job: "dev" });

console.log(newObject);

console.log("--------------------------------------------------");

//  constrains

function biggestNumber<T extends number | string>(a: T, b: T): T {
	let biggest: T;

	if (+a > +b) {
		biggest = a;
	} else {
		biggest = b;
	}

	return biggest;
}

console.log(biggestNumber(5, 4));
console.log(biggestNumber("12", "4"));
console.log(biggestNumber(3, 4));

console.log("--------------------------------------------------");

// especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
	return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));

console.log("--------------------------------------------------");

// parametros opcionais

function modernGreeting(name: string, greet?: string) {
	if (greet) {
		console.log(`Ola ${greet} ${name}`);
	} else {
		console.log(`Ola ${name}`);
	}
}

modernGreeting("Gabriel");
modernGreeting("Gabriel", "Sr.");

console.log("--------------------------------------------------");
// parametros padrao

function greeting2(name: string, greet: string = "Sr.") {
	console.log(`Ola ${greet} ${name}`);
}

greeting2("Gabriel");
greeting2("Gabriela", "Sra.");

console.log("--------------------------------------------------");

// unknown

function doSomething(x: unknown) {
	if (Array.isArray(x)) {
		console.log(x[0]);
	} else {
		console.log(x);
	}
}

doSomething("Gabriel");
doSomething([1, 2, 3]);

console.log("--------------------------------------------------");

// never

function showErrorMessage(msg: string): never {
	throw new Error(msg);
}

// showErrorMessage("Erro encontrado");

// rest parameters
function sumAll(...numbers: number[]) {
	return numbers.reduce((i, total) => i + total);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(4, 5, 12, 123, 1223213123132));

// destructuring como parametro
interface Product {
	name: string;
	price: number;
}
function showProductDetails({ name, price }: Product): string {
	return `O nome do produto e ${name} e o preco e R$ ${price}`;
}

const shirt = { name: "Camisa", price: 49.9 };

console.log(showProductDetails(shirt));

// 1  - type guard

function sum(a: number | string, b: number | string) {
	if (typeof a === "string" && typeof b === "string") {
		console.log(parseFloat(a) + parseFloat(b));
	} else if (typeof a === "number" && typeof b === "number") {
		console.log(a + b);
	} else {
		console.log("Nao e possivel somar");
	}
}

sum("10", "20");
sum(20, 24);
sum("20", 24);

console.log("--------------------------------------------------");

// 2 - checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
	if (operation) {
		if (operation === "sum") {
			const sum = arr.reduce((i, total) => i + total);
			console.log(sum);
		} else if (operation === "sub") {
			const sub = arr.reduce((i, total) => i - total);
			console.log(sub);
		} else if (operation === "mult") {
			const mult = arr.reduce((i, total) => i * total);
			console.log(mult);
		}
	} else {
		console.log("Por favor,defina uma operação");
	}
}
operations([1, 2, 3, 4, 5], "sum");
operations([1, 2, 3, 4, 5], "sub");
operations([1, 2, 3, 4, 5], "mult");

console.log("--------------------------------------------------");

// 3 - instanceof

class User {
	name;

	constructor(name: string) {
		this.name = name;
	}
}

class SuperUser extends User {
	constructor(name: string) {
		super(name);
	}
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
	if (user instanceof SuperUser) {
		console.log(`Ola ${user.name},deseja ver os dados do sistema`);
	} else if (user instanceof User) {
		console.log(`ola ${user.name}`);
	}
}

userGreeting(jhon);
userGreeting(paul);

console.log("--------------------------------------------------");

// 4 - operator in

class Dog {
	name;
	breed;
	constructor(name: string, breed?: string) {
		this.name = name;
		if (breed) {
			this.breed = breed;
		}
	}
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pitbull");

function showDogDetails(dog: Dog) {
	console.log(dog.name);
	if ("breed" in dog) {
		console.log(`O cachorro e da raca ${dog.breed}`);
	} else {
		console.log(`O cachorro e um srd`);
	}
}

showDogDetails(turca);
console.log(" ");
showDogDetails(bob);

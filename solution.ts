function formatValue(value: string | number | boolean): string | number | boolean {
if (typeof value === "string") {
return value.toUpperCase();
} else if (typeof value === "number") {
return value * 10;
} else {
return !value;
}
}

function getLength(num2: string | any[]): number {
if (typeof num2 === "string") {
return num2.length;
} else if (Array.isArray(num2)) {
return num2.length;
}
return 0;
}



class Person {
name: string;
age: number;

constructor(name: string, age: number) {
this.name = name;
this.age = age;
}

getDetails(): string {
return `'Name: ${this.name}, Age: ${this.age}'`;
}
}



interface RatedItem {
title: string;
rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
return items.filter(item => item.rating >= 4);
}

const books = [
{ title: 'Book A', rating: 4.5 },
{ title: 'Book B', rating: 3.2 },
{ title: 'Book C', rating: 5.0 },
];



interface User {
id: number;
name: string;
email: string;
isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
return users.filter(user => user.isActive);
}


const users = [
{ id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
{ id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
{ id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
title: string;
author: string;
publishedYear: number;
isAvailable: boolean;
}


function printBookDetails(book: Book): void {
console.log(
`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
);
}
const myBook: Book = {
title: 'The Great Gatsby',
author: 'F. Scott Fitzgerald',
publishedYear: 1925,
isAvailable: true,
};
printBookDetails(myBook);


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
const result: (string | number)[] = [];

const addIfNotExists = (value: string | number) => {
let exists = false;
for (let i = 0; i < result.length; i++) {
if (result[i] === value) {
exists = true;
break;
}
}
if (!exists) result.push(value);
};

for (let i = 0; i < arr1.length; i++) addIfNotExists(arr1[i]);
for (let i = 0; i < arr2.length; i++) addIfNotExists(arr2[i]);

return result;
}


interface Product {
name: string;
price: number;
quantity: number;
discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
return products
.map(product => {
const total = product.price * product.quantity;
const discount = product.discount ? (total * product.discount) / 100 : 0;
return total - discount;
})
.reduce((sum, curr) => sum + curr, 0);
}

const products = [
{ name: 'Pen', price: 10, quantity: 2 },
{ name: 'Notebook', price: 25, quantity: 3, discount: 10 },
{ name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
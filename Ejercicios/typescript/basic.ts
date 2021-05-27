// console.log("Hello, TypeScript");

// function add(a:number, b:number) {
//   return a + b;
// }

// const sum = add(2, 3);

//Boolean
let muted:boolean = true;
muted = false;

//Números
let age = 'age';
let numerador:number = 42;
let denominador:number = 6;
let resultado:number = numerador / denominador;

//String
let nombre:string = 'Antonio';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people:string[] = [];
people = ['Isabel', 'Coroline'];
// people.push('9000');

let peopleAndNumbers:Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9007);

//Enum
// enum Color {
//   Rojo = "Rojo",
//   Verde = "Verde",
//   Azul = "Azul"
// }

// let colorFavorito:Color = Color.Azul;

// console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin:any = "Joker";
comodin = {type: 'Wildcard'};

//Object
let someObject:object = {type: 'Wildcard'};
//Research and use all array functions
var arrayTarea = [5, 8, 4, 2, 11];

//Function Array.prototype[@@iterator]()
let function1 = arrayTarea[Symbol.iterator]();
for (let number of function1) {
    console.log("El resultado de la función Array.prototype[@@iterator]() es: " + number); //Imprime el valor que hay en cada posición de la lista
}

//Function Array.prototype.at()
let function2 = arrayTarea.at(-1);  //Retorna el último valor del arreglo
let function2_1 = arrayTarea.at(-2);  //Retorna el penúltimo valor del arreglo
console.log("El resultado de la función Array.prototype.at() es: " + function2 + " y " + function2_1); 

//Function Array.prototype.concat()
let arrayConcat = [9, 14, 7, 1, 15];
arrayConcat = arrayConcat.concat(arrayTarea); //Une dos arreglos
console.log("El resultado de la función Array.prototype.concat() es: " + arrayConcat); 

//Function Array.prototype.copyWithin()
let arrayWithin = arrayTarea.copyWithin(1, 3);
console.log("El resultado de la función Array.prototype.copyWithin() es: " + arrayWithin);

//Function Array.prototype.entries()
let iteratorEntries = arrayTarea.entries();
console.log("El resultado de la función Array.prototype.entries() es: " + iteratorEntries.next().value); //Imprime un objeto Array Iterator que contiene el par clave/valor del índice 0

//Function Array.prototype.every()
console.log("El resultado de la función Array.prototype.every() es: " + arrayTarea.every(elem => elem < 500)); //Retorna true si la condición la cumple todo el arreglo, o false si no es así.

//Function Array.prototype.fill()
console.log("El resultado de la función Array.prototype.every() es: " + arrayTarea.fill(2, 4, 5)); //Imprime el arreglo con la posición 4 y 5 con valores de 2

//Function Array.prototype.filter()
let result = arrayTarea.filter(number => number > 2);
console.log("El resultado de la función Array.prototype.filter() es: " + result); //Imprime el arreglo filtrado por la condición, en este caso los números mayores a 2.

//Function Array.prototype.find()
let found = arrayTarea.find(number => number > 1);
console.log("El resultado de la función Array.prototype.find() es: " + found); //Imprime el primer valor del arreglo que cumpla la condición

//Function Array.prototype.findIndex()
let condition = (number) => number > 2;
console.log("El resultado de la función Array.prototype.findIndex() es: " + arrayTarea.findIndex(condition)); //Imprime el primer index que cumpla la condición

//Function Array.prototype.findLast()
console.log("El resultado de la función Array.prototype.findLast() es: " + arrayTarea.findLast((number) => number > 2)); //Imprime el último valor que cumple la condición

//Function Array.prototype.findLastIndex()
console.log("El resultado de la función Array.prototype.findLastIndex() es: " + arrayTarea.findLastIndex((number) => number > 2)); //Imprime el último index que cumpla la condición

//Function Array.prototype.flat()
let arrayN = [13, 14, 2, 8, [5, 7, 1]];
console.log("El resultado de la función Array.prototype.flat() es: " + arrayN.flat()); //Imprime el arreglo aplanando las dimensiones que lo componen

//Function Array.prototype.flatMap()
let araryM = [8, 2, [8, 3], [2, 9], 6, 7, []];
console.log("El resultado de la función Array.prototype.flatMap() es: " + araryM.flatMap(num => num)); //Imprime un arreglo que mapea cada elemento y luego aplana las dimensiones de los valores que cumplan la condición

//Function Array.prototype.forEach()
console.log("El resultado de la función Array.prototype.forEach() es: ");
arrayTarea.forEach(number => console.log("El número dentro del arreglo es: " + number)); //Imprime la función una vez por cada elemento

//Function Array.from()
console.log("El resultado de la función Array.from() es: " + Array.from('Desa')); //Forma un arrreglo con lo que se le envía a la función como parámetro

//Function Array.prototype.includes()
console.log("El resultado de la función Array.prototype.includes() es: " + arrayTarea.includes(2)); //Imprime true si el valor de la función está incluido en el arreglo, si no, imprime false

//Function Array.prototype.indexOf()
console.log("El resultado de la función Array.prototype.indexOf() es: " + arrayTarea.indexOf(2)); //Imprime el primer indice que coincide con el valor de la función, si no, imprime -1

//Function Array.prototype.join()
console.log("El resultado de la función Array.prototype.join() es: " + arrayTarea.join(' - ')); //Imprime todos los elementos de una matriz en una cadena

//Function Array.prototype.keys()
let iteratorKeys = arrayTarea.keys();
console.log("El resultado de la función Array.prototype.keys es: ")
console.log(iteratorKeys.next()); //Imprime un nuevo objeto Array Iterator que tiene las claves del primer elemento en el array

//Function Array.prototype.lastIndexOf()
console.log("El resultado de la función Array.prototype.lastIndexOf() es: " + arrayTarea.lastIndexOf(2)); //Imprime el último índice en el que se encuentra el elemento, si no se encuentra imrpime -1

//Function Array.prototype.map()
console.log("El resultado de la función Array.prototype.map() es: " + arrayTarea.map(function(x){
    return x*3;
})); //Imprime un nuevo array con los resultados de la función aplicada a cada uno de los elementos

//Function Array.prototype.pop()
console.log("El resultado de la función Array.prototype.pop() es: " + arrayTarea.pop()); //Elimina el último elemento del array y lo devuelve, afectando la longitud del array

//Function Array.prototype.push()
console.log("El resultado de la función Array.prototype.push() es: " + arrayTarea.push(7, 3)); //Añade uno o más elementos e imprime la nueva longitud del array 

//Function Array.prototype.reduce()
console.log("El resultado de la función Array.prototype.reduce() es: " + arrayTarea.reduce((valorAnterior, valorActual) => valorAnterior + valorActual));

//Function Array.prototype.reduceRight()
console.log("El resultado de la función Array.prototype.reduceRight() es: " + arrayTarea.reduceRight((valorAnterior, valorActual) => valorAnterior + valorActual));

//Function Array.prototype.reverse()
console.log("El resultado de la función Array.prototype.reduceRight() es: " + arrayTarea.reverse()); //Imprime el arreglo con el ordel de los valores invertidos

//Function Array.prototype.shift()
console.log("El resultado de la función Array.prototype.shift() es: " + arrayTarea.shift()); //Elimina el primer elemento del array y lo retorna

//Function Array.prototype.slice()
console.log("El resultado de la función Array.prototype.slice() es: " + arrayTarea.slice(1, 4)); //Imprime una copia de una parte del array sin contar el elemento final

//Function Array.prototype.some()
console.log("El resultado de la función Array.prototype.some() es: " + arrayTarea.some( number => number % 5 === 0 )); //Imprime true si al menos un elemento del array cumple la condición

//Function Array.prototype.sort()
console.log("El resultado de la función Array.prototype.sort() es: " + arrayTarea.sort()); //Ordena los elementos de un arreglo y devuelve el arreglo ordenado

//Function Array.prototype.splice()
console.log("El resultado de la función Array.prototype.splice() es: " + arrayTarea.splice(2, 1, 3)); //Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos

//Function Array.prototype.toLocaleString()
console.log("El resultado de la función Array.prototype.toLocaleString() es: " + arrayTarea.toLocaleString()); //Imprime una cadena de texto representando los elementos del Array

//Function Array.prototype.toString() 
console.log("El resultado de la función Array.prototype.toString()  es: " + arrayTarea.toString()); //Imprime una cadena de caracteres representando el array y sus elementos

//Function Array.prototype.unshift()
console.log("El resultado de la función Array.prototype.unshift() es: " + arrayTarea.unshift(8, 3)); //Agrega e imprime uno o más elementos al inicio del array y devuelve la longitud

//Function Array.prototype.values()
console.log("El resultado de la función Array.prototype.values() es: " + arrayTarea.values().next().value);
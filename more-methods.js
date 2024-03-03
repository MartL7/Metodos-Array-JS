// más métodos de array en JS

// Método Map -> Crea un nuevo array con los resultados de la iteración de una funcion sobre cada elemento del array

const numbers = [1, 2, 3, 4, 5, 6]

// Duplicar los números
const doubleNumbers = numbers.map(n => n * 2) // -> Devuelve un nuevo array, es decir, no muta al array original

console.log({ doubleNumbers }) // -> [2, 4, 6, 8, 10, 12]
console.log({ numbers }) // -> [1, 2, 3, 4, 5, 6] -> mismo array original


// método reverse, toReversed --> invierten un array 
// reverse -> muta al array original
// toReversed -> no muta al array original

const names = ['Peter', 'Pepito', 'Pepe', 'Paco', 'Pablo']

// Invertir el array
const reversedNames = names.reverse() // -> Mutará al array original ❌

const arrayReverse = names.toReversed() // -> No mutará al array original ✅
console.log({ reversedNames })

// método at --> obtiene el elemento de un array en una posición específica, incluso se puede usar negativos

const fruits = ['🍎', '🍌', '🍇', '🍊', '🍋']

// Accede al último y al primer elemento del array
const firstFruit = fruits.at(0)
const lastFruit = fruits.at(-1)
console.log({ firstFruit, lastFruit })

// método flat --> aplana un array, es decir, elimina los arrays dentro del mismo array y devuelve un nuevo array con los elementos juntos

const arrayNumbers = [1, 2, 3, [4, 5, 6], [7, 8, 9], 10]

// Aplanar el array
const flatArray = arrayNumbers.flat(2) // --> Recibe como parámetro el número de veces que quieras que se aplane
console.log({ flatArray })
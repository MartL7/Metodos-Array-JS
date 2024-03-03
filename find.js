// Método Find -> Encuentra el primer elemento de un array que cumpla una condición
// Detiene la iteración una vez que encuentra el primer elemento que cumpla la condición

const names = ['Peter', 'Pepito', 'Pepe', 'Paco', 'Pablo']

// Encuentra el primer nombre que empiece por la letra 'P'

const foundName = names.find(name => name.startsWith('P'))
console.log({ foundName }) // -> Peter

// findIndex -> Encuentra el índice del primer elemento de un array que cumpla una condición

// Obtiene el indice del primer nombre que empiece por la letra 'P'
const foundIndex = names.findIndex(name => name.startsWith('P'))
console.log({ foundIndex }) // -> 0

// findLast -> Encuentra al último elemento de un array que cumpla una condición, sin necesidad de usar reverse()

// Obten el últimm nombre que empiece por la letra 'P'
const foundLastName = names.findLast(name => name.startsWith('P'))
console.log({ foundLastName }) // -> Pablo


// Obtiene el índice del último nombre que empiece por la letra 'P'
const foundLastIndex = names.findLastIndex(name => name.startsWith('P'))
console.log({ foundLastIndex }) // -> 4
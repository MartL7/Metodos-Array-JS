// método some -> Verifica si al menos un elemento de un array cumple una condición
// --> Devuelve un booleano

const love = ['❤️', '💔', '❤️', '💔', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️']

// Verifica si al menos un elemento del array es un corazón roto
const isNoteLove = love.some(love => love === '💔')
console.log({ isNoteLove }) // -> true

const numbers = [1, 1, 1, 1, 1, 2, 1]

// Verifica si al menos un elemento del array es un número par
const isEven = numbers.some(n => n % 2 === 0)
console.log({ isEven }) // -> true

const names = ['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Goten']

// Verifica si al menos un nombre empieza por la letra 'F'
const isNameStartWithF = names.some(name => name.startsWith('F'))
console.log({ isNameStartWithF }) // -> false

// every --> a diferencia de some, verifica si todos los elementos de un array cumplen una condición -> retorna un booleano

// Verifica si todos los elementos del array son un corazón
const isAllLove = love.every(love => love === '❤️')
console.log({ isAllLove }) // -> false -> porque hay un corazón roto

const fruits = ['🍎', '🍎', '🍎', '🍎' ]

// Verifica si todas las frutas son manzanas
const isAllApple = fruits.every(fruit => fruit === '🍎')
console.log({ isAllApple }) // -> true
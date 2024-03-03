// Métodos de array en JS

// Método Filter -> Filtra los elementos de un array que cumplan una condición

const numbers = [1, 2, 3, 4, 5, 6]
const heroes = [
    { name: 'Spider-Man', isAvenger: true },
    { name: 'Batman', isAvenger: false },
    { name: 'Superman', isAvenger: false },
    { name: 'Iron-Man', isAvenger: true },
]

// Filtrar los heroes que sean Avengers
const heroesOfAvengers = heroes.filter(hero => hero.isAvenger === true)
console.log({ heroesOfAvengers })

// Filtrar los números pares
const evenNumbers = numbers.filter(n => n % 2 === 0)
console.log({ evenNumbers })

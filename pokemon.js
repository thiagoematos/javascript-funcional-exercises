// Factory Function
const Treinador = (nome, pokemons) => ({ nome, pokemons })
const Pokemon = (nome, tipo) => ({ nome, tipo })

const eletrico = 'Elétrico'
const planta = 'Planta'
const psiquico = 'Psíquico'

const treinadores = [
    Treinador('Ash', [Pokemon('Pikachu', eletrico), Pokemon('Bulbassaur', planta)]),
    Treinador('Misty', [Pokemon('Psyduck', psiquico)]),
    Treinador('Brock', [Pokemon('Newtow', psiquico)])
]

// Flat Map
const pokemons =
    treinadores
        .map(treinador => treinador.pokemons)
        .reduce((pokemons, pokemon) => [...pokemons, ...pokemon], []); // Destructuring
console.log(pokemons)

// Currying
const porTipo = tipo => pokemon => tipo === pokemon.tipo
const pokemonsPsiquicos = pokemons.filter(porTipo(psiquico))
console.log(pokemonsPsiquicos)

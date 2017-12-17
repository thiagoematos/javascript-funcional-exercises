// Factory Function
const Treinador = (nome, pokemons) => ({ nome, pokemons })
const Pokemon = (nome, tipo) => ({ nome, tipo })

// Enum
const Tipo = {
    ELETRICO: 'Elétrico',
    PLANTA: 'Planta',
    PSIQUICO: 'Psíquico'
}

const treinadores = [
    Treinador('Ash', [Pokemon('Pikachu', Tipo.ELETRICO), Pokemon('Bulbassaur', Tipo.PLANTA)]),
    Treinador('Misty', [Pokemon('Psyduck', Tipo.PSIQUICO)]),
    Treinador('Brock', [Pokemon('Newtow', Tipo.PSIQUICO)])
]

// Flat Map
const pokemons =
    treinadores
        .map(treinador => treinador.pokemons)
        .reduce((pokemons, pokemon) => [...pokemons, ...pokemon], []); // Destructuring
console.log(pokemons)

// Currying
const porTipo = tipo => pokemon => tipo === pokemon.tipo
const pokemonsPsiquicos = pokemons.filter(porTipo(Tipo.PSIQUICO))
console.log(pokemonsPsiquicos)

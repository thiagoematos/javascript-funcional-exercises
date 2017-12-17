// Composition over Inheritance
const Saudador =
    (nome, preposicao, localDeNascimento) =>
        ({ saudar: () => `Olá, eu sou ${nome}. Nasci ${preposicao} ${localDeNascimento}.` })
const Despedidor =
    () =>
        ({ despedir: pessoa => `Tchau! ${pessoa.nome}` })
const Mutador =
    nome =>
        ({ fazerMutaçãoCom: elementoFn => `${nome} vira ${elementoFn()}` })

const Terraquio = nome => {
    const preposicao = 'na'
    const localDeNascimento = 'Terra'
    return Object.assign(
        {},
        { nome },
        Saudador(nome, preposicao, localDeNascimento),
        Despedidor(),
        Mutador(nome)
    )
}

const Kriptoniano = nome => {
    const preposicao = 'em'
    const localDeNascimento = 'Kripton'
    return Object.assign(
        {},
        { nome },
        Saudador(nome, preposicao, localDeNascimento),
        Despedidor(),
        Mutador(nome)
    )
}

const peterParker = Terraquio('Peter Parker')
const kalEl = Kriptoniano('Kal-El')
const kimberly = Terraquio('Kimberly')

console.log(peterParker.nome)

console.log(peterParker.saudar())
console.log(kalEl.saudar())

console.log(peterParker.despedir(kalEl))
console.log(kalEl.despedir(peterParker))

// Functors
const aranha = () => 'o Homem-Aranha'
const sol = () => 'o Super-Man'
const mofadorRosa = () => 'a Ranger Rosa'
console.log(peterParker.fazerMutaçãoCom(aranha))
console.log(kalEl.fazerMutaçãoCom(sol))
console.log(kimberly.fazerMutaçãoCom(mofadorRosa))

// Composition over Inheritance
const Saudador =
    (nome, preposicao, localDeNascimento) =>
        ({ saudar: () => `Olá, eu sou ${nome}. Nasci ${preposicao} ${localDeNascimento}.` })
const Despedidor =
    () =>
        ({ despedir: pessoa => `Tchau! ${pessoa.nome}` })
const Evoluidor =
    nome =>
        ({ evoluir: evolucaoFn => `${nome} evolui para ${evolucaoFn()}` })

const Terraquio = nome => {
    const preposicao = 'na'
    const localDeNascimento = 'Terra'
    return Object.assign(
        {},
        { nome },
        Saudador(nome, preposicao, localDeNascimento),
        Despedidor(),
        Evoluidor(nome)
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
        Evoluidor(nome)
    )
}

const joao = Terraquio('João')
const kalEl = Kriptoniano('Kal-El')

console.log(joao.nome)

console.log(joao.saudar())
console.log(kalEl.saudar())

console.log(joao.despedir(kalEl))
console.log(kalEl.despedir(joao))

// Functor
console.log(joao.evoluir(() => 'X-Man'))
console.log(kalEl.evoluir(() => 'Super-Man'))
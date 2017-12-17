const generator = function* () {
    yield 2
    yield 3
    yield 4
}

// Generators com função especial de leitura
const generatorRunner = (generator, accumulator = []) => {
    const next = generator.next()
    if (next.done) {
        return accumulator
    }
    return generatorRunner(generator, [...accumulator, next.value])
}

const instanceofGenerator = generator()
console.log(generatorRunner(instanceofGenerator))

const fibonacciGenerator = function* (numberOfItems) {
    let pre = 0, cur = 1
    while (numberOfItems-- > 0) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}

// Com for
for (let item of fibonacciGenerator(10)) {
    console.log(item)
}

// Com destructuring
const numeros = [...fibonacciGenerator(8)]
console.log(numeros)
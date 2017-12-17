const generator = function* () {
    yield 2
    yield 3
    yield 4
}

const generatorRunner = (generator, accumulator = []) => {
    const next = generator.next()
    if (next.done) {
        return accumulator
    }
    return generatorRunner(generator, [...accumulator, next.value])
}

const instanceofGenerator = generator()
console.log(generatorRunner(instanceofGenerator))
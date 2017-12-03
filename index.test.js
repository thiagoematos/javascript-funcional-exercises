console.log({ expected: 2, result: sum({ x: 1, y: 1 }) })
console.log({ expected: 3, result: sum({ x: 2, y: 1 }) })

console.log({ expected: true, result: isPairWithGivenSum({ pair: { x: 1, y: 1 }, givenSum: 2 }) })
console.log({ expected: true, result: isPairWithGivenSum({ pair: { x: 1, y: 2 }, givenSum: 3 }) })
console.log({ expected: true, result: isPairWithGivenSum({ pair: { x: 8, y: 2 }, givenSum: 10 }) })

console.log({ result: getPairsWithGivenSum([{ x: 8, y: 2 }], 10), expected: [{ x: 8, y: 2 }] })
console.log({ result: getPairsWithGivenSum([{ x: 5, y: 2 }, { x: 1, y: 2 }], 7), expected: [{ x: 5, y: 2 }] })
console.log({ result: getPairsWithGivenSum([{ x: 0, y: 8 }, { x: 6, y: 2 }], 9), expected: [] })

console.log({ expected: [2, 3, 4], result: arrayFromIndex({ array: [1, 2, 3, 4], index: 1 }) })
console.log({ expected: [3, 4], result: arrayFromIndex({ array: [1, 2, 3, 4], index: 2 }) })

console.log({ expected: [1, 2, 3, 4], result: joinTwoArrays([1, 2], [3, 4]) })
console.log({ expected: [1, 2], result: joinTwoArrays([1], [2]) })
console.log({ expected: [{ x: 1, y: 2 }, { x: 3, y: 4 }], result: joinTwoArrays([{ x: 1, y: 2 }], [{ x: 3, y: 4 }]) })

console.log({ expected: false, result: arrayNotEmpty([]) })
console.log({ expected: true, result: arrayNotEmpty([1]) })

console.log({ result: convertArrayToPairs(1, [2, 3]), expected: [{ x: 1, y: 2 }, { x: 1, y: 3 }] })
console.log({ result: convertArrayToPairs(1, [2]), expected: [{ x: 1, y: 2 }] })

console.log({
    expected: [[1, 2], [3, 4]],
    result: convertPairsToArray([{ x: 1, y: 2 }, { x: 3, y: 4 }])
})

console.log({ result: buildArrayOfPairs([1, 2, 3]), expected: [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }] })

console.log({
    result: findPairsWithGivenSumArray({ givenSum: 10, array: [8, 7, 2, 5, 3, 1] }),
    expected: [[8, 2], [7, 3]]
})
console.log({
    result: findPairsWithGivenSumArray({ givenSum: 3, array: [1, 2, 3, 4, 5, 6] }),
    expected: [[1, 2]]
})

const index = require('./index.js')

it('sums two number', () => expect(index.sum({ x: 1, y: 1 })).toBe(2))
it('sums two number', () => expect(index.sum({ x: 2, y: 1 })).toBe(3))

it('checks if a pair is with a given sum', () => expect(index.isPairWithGivenSum({ pair: { x: 1, y: 1 }, givenSum: 2 })).toBeTruthy())
it('checks if a pair is with a given sum', () => expect(index.isPairWithGivenSum({ pair: { x: 1, y: 1 }, givenSum: 3 })).toBeFalsy())
it('checks if a pair is with a given sum', () => expect(index.isPairWithGivenSum({ pair: { x: 8, y: 2 }, givenSum: 10 })).toBeTruthy())

it('gets pairs with a given sum', () => expect(index.getPairsWithGivenSum([{ x: 5, y: 2 }, { x: 1, y: 2 }], 7)).toEqual([{ x: 5, y: 2 }]))
it('gets pairs with a given sum', () => expect(index.getPairsWithGivenSum([{ x: 8, y: 2 }], 10)).toEqual([{ x: 8, y: 2 }]))
it('gets pairs with a given sum', () => expect(index.getPairsWithGivenSum([{ x: 0, y: 8 }, { x: 6, y: 2 }], 9)).toEqual([]))

it('converts a number and a array to a pair', () => expect(index.convertArrayToPairs(1, [2, 3])).toEqual([{ x: 1, y: 2 }, { x: 1, y: 3 }]))
it('converts a number and a array to a pair', () => expect(index.convertArrayToPairs(1, [2])).toEqual([{ x: 1, y: 2 }]))

it('converts a array of pairs into a array os arrays.', () => expect(index.convertPairsToArray([{ x: 1, y: 2 }, { x: 3, y: 4 }])).toEqual([[1, 2], [3, 4]]))

it('builds a array into a array of pairs.', () => expect(index.buildArrayOfPairs([1, 2, 3])).toEqual([{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }]))

it('find pairs with a given sum.', () => expect(index.findPairsWithGivenSumArray({ givenSum: 10, array: [8, 7, 2, 5, 3, 1] })).toEqual([[8, 2], [7, 3]]))
it('find pairs with a given sum.', () => expect(index.findPairsWithGivenSumArray({ givenSum: 3, array: [1, 2, 3, 4, 5, 6] })).toEqual([[1, 2]]))
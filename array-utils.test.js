const arrayUtils = require('./array-utils.js')

it('returns a new array from the index', () => expect(arrayUtils.arrayFromIndex({ array: [1, 2, 3, 4], index: 1 })).toEqual([2, 3, 4]))
it('returns a new array from the index', () => expect(arrayUtils.arrayFromIndex({ array: [1, 2, 3, 4], index: 2 })).toEqual([3, 4]))

it('joins two arrays', () => expect(arrayUtils.joinTwoArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]))
it('joins two arrays', () => expect(arrayUtils.joinTwoArrays([1], [2])).toEqual([1, 2]))
it('joins two arrays', () => expect(arrayUtils.joinTwoArrays([{ x: 1, y: 2 }], [{ x: 3, y: 4 }])).toEqual([{ x: 1, y: 2 }, { x: 3, y: 4 }]))

it('checks if a array is empty', () => expect(arrayUtils.arrayNotEmpty([])).toBeFalsy())
it('checks if a array is empty', () => expect(arrayUtils.arrayNotEmpty([1])).toBeTruthy())

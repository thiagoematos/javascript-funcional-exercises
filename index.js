const sum = ({ x, y }) => x + y
const isPairWithGivenSum = ({ pair, givenSum }) => sum(pair) === givenSum
const getPairsWithGivenSum =
    (pairs, givenSum) => pairs.filter(pair => isPairWithGivenSum({ pair, givenSum }))

const arrayFromIndex = ({ array, index }) => array.slice(index);
const joinTwoArrays = (array1, array2) => [...array1, ...array2]
const arrayNotEmpty = array => array.length !== 0

const convertArrayToPairs = (x, array) => array.map(y => { return { x, y } })
const convertPairsToArray = pairs => pairs.map(pair => [pair.x, pair.y])

const buildArrayOfPairs =
    array => array
        .map((item, index) => convertArrayToPairs(item, arrayFromIndex({ array, index: index + 1 })))
        .filter(arrayNotEmpty)
        .reduce(joinTwoArrays)

const findPairsWithGivenSumArray = ({ givenSum, array }) => {
    const pairs = buildArrayOfPairs(array)
    const result = getPairsWithGivenSum(pairs, givenSum)
    return convertPairsToArray(result)
}

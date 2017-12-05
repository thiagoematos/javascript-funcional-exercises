const arrayUtils = require('./array-utils.js')
const arrayFromIndex = arrayUtils.arrayFromIndex
const arrayNotEmpty = arrayUtils.arrayNotEmpty
const joinTwoArrays = arrayUtils.joinTwoArrays

const sum = ({ x, y }) => x + y
const isPairWithGivenSum = ({ pair, givenSum }) => sum(pair) === givenSum
const getPairsWithGivenSum = (pairs, givenSum) => pairs.filter(pair => isPairWithGivenSum({ pair, givenSum }))

// Tentar remover o conceito de pairs ou então isolá-lo em uma classe
const convertArrayToPairs = (x, array) => array.map(y => { return { x, y } })
const convertPairsToArray = pairs => pairs.map(pair => [pair.x, pair.y])

const buildArrayOfPairs =
	array => array
		// TODO: Acho que dá para inverter esses parâmetros da função convertArrayToPairs chamá-la direto
		.map((item, index) => convertArrayToPairs(item, arrayFromIndex({ array, index: index + 1 })))
		.filter(arrayNotEmpty)
		.reduce(joinTwoArrays)

// Dá para aplicar o conceito de composition ou curry?
const findPairsWithGivenSumArray = ({ givenSum, array }) => {
	const pairs = buildArrayOfPairs(array)
	const result = getPairsWithGivenSum(pairs, givenSum)
	return convertPairsToArray(result)
}

module.exports = {
	sum,
	isPairWithGivenSum,
	getPairsWithGivenSum,
	convertArrayToPairs,
	convertPairsToArray,
	buildArrayOfPairs,
	findPairsWithGivenSumArray
}
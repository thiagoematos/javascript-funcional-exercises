const arrayFromIndex = ({ array, index }) => array.slice(index);
const joinTwoArrays = (array1, array2) => [...array1, ...array2]
const arrayNotEmpty = array => array.length !== 0

module.exports = { arrayFromIndex, joinTwoArrays, arrayNotEmpty }
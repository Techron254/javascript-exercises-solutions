function removeFromArray(array, ...valuesToRemove) {
  const result = [];
  for (const item of array) {
    if (!valuesToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
// Do not edit below this line
module.exports = removeFromArray;

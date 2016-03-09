function getMedianOfMedians(array) {
  if (array.length <= 5) return getMedianOfFiveOrLess(array);
  const medians = [];
  for (let i = 0; i < array.length; i += 5) {
    const group = [];
    for (let j = i; j < i + 5; j++) {
      if (array[j] !== undefined) group.push(array[j]);
    }
    medians.push(getMedianOfFiveOrLess(group));
  }
  return getMedianOfMedians(medians);
}
// Utility function to sort small list and pull out median
function getMedianOfFiveOrLess(array) {
  if (array.length < 2) return array[0];
  insertionSort(array);
  if (array.length < 4) return array[1];
  return array[2];
}
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      let before = j - 1;
      if (array[j] < array[before]) {
        let temp = array[j];
        array[j] = array[before];
        array[before] = temp;
        j = before;
      }
      else break;
    }
  }
  return array;
}

const util = {
  getMedianOfMedians: getMedianOfMedians,
  insertionSort: insertionSort,
};

export default util;

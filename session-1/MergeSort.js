// Merge Sort
function merge(rVal, lVal) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < lVal.length && rightIndex < rVal.length) {
    if (lVal[leftIndex].localeCompare(rVal[rightIndex]) <= 0) {
      result.push(lVal[leftIndex]);
      leftIndex++;
    } else {
      result.push(rVal[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(lVal.slice(leftIndex), rVal.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, middleIndex);
  const rightSide = arr.slice(middleIndex);
  const leftValue = mergeSort(leftSide);
  const rightValue = mergeSort(rightSide);
  return merge(leftValue, rightValue);
}

function printSecondSortedName(nameString) {
  const names = nameString.split(' ');
  const sortedNames = mergeSort(names);
  return sortedNames[sortedNames.length - 2];
}

const namesStr = 'nastaran shayan ahamad niloofar';
const result = printSecondSortedName(namesStr);

console.log(result);

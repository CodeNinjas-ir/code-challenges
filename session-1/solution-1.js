function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].localeCompare(pivot) <= 0) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

function printSecondSortedName(nameString) {
  const names = nameString.split(' ');
  const sortedNames = quickSort(names);
  return sortedNames[sortedNames.length - 2];
}

const namesStr = 'nastaran shayan ahamad niloofar';
const result = printSecondSortedName(namesStr);

console.log(result);

function insertionSort(nums: Array<number>): Array<number> {
  const sortedNums = nums.slice();

  for(let i = 1; i < nums.length; i++) {
    let j = i;

    while(j > 0 && sortedNums[j] < sortedNums[j-1]) {
      const temp = sortedNums[j];
      sortedNums[j] = sortedNums[j-1];
      sortedNums[j-1] = temp;
      j--;
    }
  }

  return sortedNums;
}

console.log(insertionSort([1,2,6,3,2,5,9,4]));
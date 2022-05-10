function bubbleSort (arr: number[]) {
  let sortedTill = arr.length - 1;

  while(sortedTill > 0) {
    for(let i = 0; i < sortedTill; i++) {
      if(arr[i] > arr[i+1]) {
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    sortedTill--;
  }

  return arr;
}

console.log(bubbleSort([]));
console.log(bubbleSort([1,2,3,5]));
console.log(bubbleSort([3,42,1234,2,4]));

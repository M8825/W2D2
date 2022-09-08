function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}


console.log(bubbleSort([8,5,3,1,7,6,4,2]));
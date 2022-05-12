function bubbleSort(input: Array<number>) {
  let unorderNum = input.length - 1;
  let i = 1;
  while (unorderNum > 0) {
    for (let i = 0; i < unorderNum; i++) {
      if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]];
        console.log(input, 'index keberapa ' + i);
      }
      console.log(`index keberapa ${i} dan input ${input}`);
    }
    console.log('pass yang keberapa ' + i);
    i += 1;
    unorderNum -= 1;
  }
}

// bubbleSort([3,2])
// bubbleSort([1,3,2])
// bubbleSort([4,1,3,2])
// bubbleSort([4,1,5,3,2])
bubbleSort([4, 1, 6, 5, 3, 2]);
// bubbleSort([4,1,7,6,5,3,2])

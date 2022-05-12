export default function bubbleSort(input: Array<number>) {
  let unorderNum = input.length - 1;
  while (unorderNum > 0) {
    for (let i = 0; i < unorderNum; i++) {
      if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]];
      }
    }
    unorderNum -= 1;
  }
  return input;
}

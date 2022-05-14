export const bubbleSort = (input: Array<number>): Array<number> => {
  let unorderNum = input.length - 1;
  while (unorderNum > 0) {
    for (let i = 0; i < unorderNum; i++) {
      if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]];
      } // ! STILL WRONG
    }
    unorderNum -= 1;
  }
  return input;
};

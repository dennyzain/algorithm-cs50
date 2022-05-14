export const selectionSort = (input: Array<number>): Array<number> => {
  let lowestNum: number = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > lowestNum) {
      lowestNum = input[i];
    }
  }
};

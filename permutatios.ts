function permute(nums: number[]): number[][] {
  const permutations = [];
  solve(nums, permutations, []);
  return permutations;
};

function solve(nums: number[], permutations: number[][], running: number[] ) {
  if (nums.length === 0) {
      permutations.push(running);
      return;
  }
  
  for (let i = 0; i < nums.length; i++) {
      // take the num out and add it to running
      const numsCopy = [...nums];
      const selected = numsCopy.splice(i, 1);

      solve(numsCopy, permutations, [...running, ...selected]);
  }
};

  //             0 1 3
  //     [0] 13    [1] 0 3   [3] 0 1
  // [01] 3   [03] 1
  // [013][]    [031] []    
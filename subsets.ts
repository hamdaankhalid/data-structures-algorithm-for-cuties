function subsets(nums: number[]): number[][] {
  const res = [];
  recursive(nums, res, []);
  return res;
};

// [1,2,3]
// 1 [2, 3]; [] [2,3]; 2 [3]; 3 []; -> Return [3]
// [1,2] [3];   [2], [3];   2,3 [];
// [1,2] []; [1,2,3] []; [2,3] []; 

function recursive(nums: number[], res: number[][], running: number[], map: Set<string> = new Set()) {
  if(nums.length === 0){
      running.sort();
      const joined = running.join('->');
      if (!map.has(joined)) {
          res.push(running);
          map.add(joined);
      }
  }
  
  for (let i = 0; i < nums.length; i++) {
      // include
      const removedNums = [...nums];
      const tbd = removedNums.splice(i);
      recursive(removedNums, res, running, map);

      // exclude
      recursive(removedNums, res, running.concat(tbd) as number[], map);
  }
}

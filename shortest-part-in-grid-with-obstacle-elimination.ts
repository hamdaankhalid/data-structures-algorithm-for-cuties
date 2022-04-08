interface StepAndState {
  step: number;
  kLeft: number;
  row: number;
  col: number;
};

/*
0 1
1 1
0 0
*/

function shortestPath(grid: number[][], k: number): number {
  const manhattanDist = getManhattanDistance(grid);
  
  if(manhattanDist === k) {
      return manhattanDist;
  }
  
  return bfs(grid, k);
};

function bfs(grid: number[][], k: number): number {
  const target = [grid.length - 1, grid[0].length - 1];
  
  const start = {   
          step: 0,
          kLeft: k,
          row: 0,
          col: 0
  };
    
  const queue: StepAndState[] = [
      start
  ];
  
  const seenBefore = new Set();
  seenBefore.add([0, 0, k].join(","));
  
  while (queue.length > 0) {
      
      const potential = queue.shift();
      if (potential.row === target[0] && potential.col === target[1]) {
          return potential.step;
      }
      
      const neighbors = getNeighbors(grid, potential.row, potential.col);
      
      const filteredNeighbors = validPaths(grid, neighbors, potential.kLeft);
 
      const filteredNonSeenBefore = [];
      
      for (let neighborIdx = 0; neighborIdx < filteredNeighbors.length; neighborIdx++) {
        const neighbor = filteredNeighbors[neighborIdx];
        if (!seenBefore.has(neighbor.join(","))) {
            filteredNonSeenBefore.push(neighbor);
            seenBefore.add(neighbor.join(","));
        }
      }
      
      const mappedNeighbor = filteredNonSeenBefore.map( (neighborArr) => {
              return {
                  step: potential.step + 1,
                  kLeft: neighborArr[2],
                  row: neighborArr[0],
                  col: neighborArr[1]
              } 
      });

      for (let neighbor of mappedNeighbor) {
          queue.push(neighbor);
      }
  }
  
  return -1;
};

function validPaths(grid: number[][], neighbors: number[][], kLeft: number): number[][] {
  const filteredNeighbors = [];
  
  for (let neighbor of neighbors) {
      if (grid[neighbor[0]][neighbor[1]] === 1 && kLeft > 0) {
        filteredNeighbors.push([neighbor[0], neighbor[1], kLeft - 1]);
      } else if (grid[neighbor[0]][neighbor[1]] === 0){
        filteredNeighbors.push( [neighbor[0], neighbor[1], kLeft]);  
        }
  }
  
  return filteredNeighbors;
};

function getNeighbors(grid:number[][], row: number, col: number): number[][] {
  const neighbors = [];
  const operations = [
      [0 , -1], // left
      [0, 1], // right
      [-1, 0], // up
      [1, 0] // down
  ]
  
  for(let operation of operations) {
      const neighbor = [row + operation[0], col + operation[1]];
      if (inBound(grid, neighbor[0], neighbor[1])) {
          neighbors.push(neighbor);
      }
  }
  
  return neighbors;
}

function inBound(grid: number[][], row: number, col: number): boolean {
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;
  
  return (row <= maxRow && row >= 0) && (col <= maxCol && col >= 0);
}


function getManhattanDistance(grid: number[][]): number {
  return (grid[0].length - 1) + (grid.length - 1);
}

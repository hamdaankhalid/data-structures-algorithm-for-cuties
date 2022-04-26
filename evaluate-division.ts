function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const eqMap = new Map<string, any>();
  
  const res = [];
  
  for(let i = 0 ; i < equations.length; i++) {
      const [l, m] = equations[i];
      const val = values[i];
      
      if (eqMap.has(l)) {
          eqMap.get(l).set(m, val);
          
      } else {
          const innerMap = new Map();
          innerMap.set(m, val);
          eqMap.set(l, innerMap)
      }
      
      if (eqMap.has(m)) {
          eqMap.get(m).set(l, 1/val);
      } else {
          const innerMap = new Map();
          innerMap.set(l, 1/val);
          eqMap.set(m, innerMap);
      }
  }
  
  
  for (let i = 0 ; i < queries.length; i++) {
      const [x, y] = queries[i];
      
      const result = dfs(x, y, eqMap, new Set<string>());

      res.push(result);
  }

  return res;
};

function dfs(source: string, target: string, eqMap: Map<string, any>, visited: Set<string>) {
  
  if (!eqMap.has(source) || !eqMap.has(target)) {
      return -1;
  }
  
  const sourceInEqMap = eqMap.get(source);
  
  
  if (sourceInEqMap.has(target)) {
      return eqMap.get(source).get(target);
  }
  
  for (let i of eqMap.get(source).keys()) {
      if (visited.has(i)) {
          continue;
      }
      visited.add(i);
      const temp = dfs(i, target, eqMap, visited);
      if (temp === -1) {
          continue;
      }
      
      return eqMap.get(source).get(i) * temp;
  }
  
  return -1;
}

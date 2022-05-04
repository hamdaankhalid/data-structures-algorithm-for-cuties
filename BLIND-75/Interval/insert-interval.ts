function insert(intervals: number[][], newInterval: number[]): number[][] {
  const [newStart, newEnd] = newInterval;
  const result = [];
  
  // add all intervals that start before newStart;
  let i = 0;
  while(i < intervals.length && intervals[i][0] < newStart) {
      result.push(intervals[i]);
      i++;
  }
  
  if(result.length === 0 || result.at(-1)[1] < newStart) {
      // add newInterval if there is no overlap, just add the interval
      result.push(newInterval);
  } else {
      // if there is an overlap, merge with the last interval
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], newEnd);
  }
  
  while (i < intervals.length) {
      const currInterval = intervals[i];
      const [start, end] = currInterval;
      
      // add newInterval if there is no overlap, just add the interval
      if(result[result.length - 1][1] < start) {
          result.push(currInterval);
      } else{
      // if there is an overlap, merge with the last interval   
          result[result.length - 1][1] = Math.max(result[result.length - 1][1], end);
      }
      i++;
  }

  return result;
};

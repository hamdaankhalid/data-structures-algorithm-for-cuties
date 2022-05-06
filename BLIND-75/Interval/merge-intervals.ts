function merge(intervals: number[][]): number[][] {
  intervals.sort((i, j) => i[0] - j[0]);
  
  let idx = 0;
  while (idx < intervals.length - 1) {
      const nextIdx = idx+1;
      
      if (mergable(intervals[idx], intervals[nextIdx])) {
              // replace them both with a merger of the two
              const newStart = Math.min(intervals[idx][0], intervals[nextIdx][0]);
              const newEnd = Math.max(intervals[idx][1], intervals[nextIdx][1]);
              const newInterval = [newStart, newEnd];
              intervals = [...intervals.slice(0, idx), newInterval, ...intervals.slice(nextIdx+1)]
      } else {
          idx++;
      }
  }
  
  //console.log(intervals);
  
  return intervals;
};

function mergable(interval1: number[], interval2: number[]): boolean {
  const [intvl1Start, intvl1End] = interval1;
  const [intvl2Start, intvl2End] = interval2;
  
  return (
      intvl1End >= intvl2Start
      )
}
